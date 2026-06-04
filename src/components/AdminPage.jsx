'use client';
import { useState, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { supabase } from '../lib/supabaseClient';

const ADMIN_EMAIL = 'anm@nanoportugal.com';

// Must match the speakers page card image ratio (aspect-[10/9]).
const CROP_ASPECT = 10 / 9;

// Size limits — keep aligned with the submission page and the 2 MB bucket limit.
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB source (recompressed before upload)
const MAX_ABSTRACT_BYTES = 2 * 1024 * 1024; // 2 MB abstract (uploaded as-is)
const MAX_OUTPUT_WIDTH = 600; // cap cropped image width (px)

// Produces a cropped, size-capped JPEG Blob from a source image + crop pixel area
function getCroppedBlob(imageSrc, cropPixels) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const scale = Math.min(1, MAX_OUTPUT_WIDTH / cropPixels.width);
      const outW = Math.round(cropPixels.width * scale);
      const outH = Math.round(cropPixels.height * scale);

      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        image,
        cropPixels.x,
        cropPixels.y,
        cropPixels.width,
        cropPixels.height,
        0,
        0,
        outW,
        outH
      );
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error('Canvas is empty'));
          resolve(blob);
        },
        'image/jpeg',
        0.85
      );
    };
    image.onerror = reject;
    image.src = imageSrc;
  });
}

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [speakers, setSpeakers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});

  // auth form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(null);
  const [authBusy, setAuthBusy] = useState(false);

  // upload state
  const [uploading, setUploading] = useState(null); // 'image' | 'abstract' | null
  const [fileError, setFileError] = useState(null);

  // crop state
  const [rawImageSrc, setRawImageSrc] = useState(null); // object URL of newly selected file
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropping, setCropping] = useState(false);

  // image view modal (for viewing the current/cropped image larger)
  const [viewingImage, setViewingImage] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  useEffect(() => {
    if (isAdmin) loadSpeakers();
  }, [isAdmin]);

  async function loadSpeakers() {
    const { data } = await supabase
      .from('speakers')
      .select('*')
      .order('created_at', { ascending: false });
    setSpeakers(data || []);
  }

  // ---- AUTH ----
  async function signIn() {
    setAuthBusy(true);
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
    setAuthBusy(false);
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  // ---- FILE UPLOAD ----
  async function uploadBlob(blob, prefix, ext) {
    const path = `${prefix}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from('speaker-files').upload(path, blob);
    if (error) throw error;
    const { data } = supabase.storage.from('speaker-files').getPublicUrl(path);
    return data.publicUrl;
  }

  // Abstract upload (no cropping)
  async function handleAbstractUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_ABSTRACT_BYTES) {
      setFileError(
        `Abstract is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum is ${
          MAX_ABSTRACT_BYTES / 1024 / 1024
        } MB.`
      );
      e.target.value = '';
      return;
    }
    setFileError(null);
    setUploading('abstract');
    try {
      const ext = file.name.split('.').pop();
      const url = await uploadBlob(file, 'abstracts', ext);
      setForm((f) => ({ ...f, abstract: url }));
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploading(null);
    }
  }

  // ---- IMAGE CROP FLOW ----
  const onImageSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_BYTES) {
      setFileError(
        `Image is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum is ${
          MAX_IMAGE_BYTES / 1024 / 1024
        } MB.`
      );
      e.target.value = '';
      return;
    }
    setFileError(null);
    const url = URL.createObjectURL(file);
    setRawImageSrc(url);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCropping(true);
  };

  const onCropComplete = useCallback((_area, areaPixels) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const confirmCrop = async () => {
    setUploading('image');
    try {
      const blob = await getCroppedBlob(rawImageSrc, croppedAreaPixels);
      const url = await uploadBlob(blob, 'images', 'jpg');
      setForm((f) => ({ ...f, image: url }));
      setCropping(false);
      setRawImageSrc(null);
    } catch (err) {
      alert('Could not crop/upload image: ' + err.message);
    } finally {
      setUploading(null);
    }
  };

  const cancelCrop = () => {
    setCropping(false);
    setRawImageSrc(null);
  };

  // ---- CRUD ----
  async function approve(id, status) {
    await supabase.from('speakers').update({ status }).eq('id', id);
    loadSpeakers();
  }

  async function remove(id) {
    if (!confirm('Delete this submission?')) return;
    await supabase.from('speakers').delete().eq('id', id);
    loadSpeakers();
  }

  function startEdit(s) {
    setEditing(s.id);
    setForm(s);
    setFileError(null);
  }

  async function saveEdit() {
    const { id, name, institution, country, image, abstract, status } = form;
    await supabase
      .from('speakers')
      .update({ name, institution, country, image, abstract, status })
      .eq('id', id);
    setEditing(null);
    loadSpeakers();
  }

  if (authLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fef3ff]">
        Loading…
      </div>
    );

  // ---- LOGIN SCREEN ----
  if (!session) {
    return (
      <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 p-10 w-full max-w-md">
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 -mt-10 mb-8 rounded-full" />
          <h1 className="text-2xl font-light text-center mb-6">Admin Login</h1>
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-violet-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyDown={(e) => e.key === 'Enter' && signIn()}
              className="w-full px-4 py-3 rounded-xl border border-violet-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            {authError && <p className="text-sm text-red-500">{authError}</p>}
            <button
              onClick={signIn}
              disabled={authBusy}
              className="w-full px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-violet-300/50 transition disabled:opacity-50"
            >
              {authBusy ? 'Signing in…' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- ACCESS DENIED (logged in, wrong email) ----
  if (!isAdmin) {
    return (
      <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl p-12 text-center max-w-md">
          <h1 className="text-2xl font-light mb-3">Access Denied</h1>
          <p className="text-gray-600 font-light mb-6">
            Signed in as {session.user.email}. This page is restricted.
          </p>
          <button onClick={signOut} className="px-6 py-2 rounded-full bg-violet-600 text-white">
            Sign out
          </button>
        </div>
      </div>
    );
  }

  // ---- ADMIN DASHBOARD ----
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extralight">Speaker Admin</h1>
          <button
            onClick={signOut}
            className="px-5 py-2 rounded-full bg-white border border-violet-200 text-violet-600 hover:bg-violet-50"
          >
            Sign out
          </button>
        </div>

        <div className="space-y-4">
          {speakers.map((s) => (
            <div
              key={s.id}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow border border-violet-100/50 p-6"
            >
              {editing === s.id ? (
                <div className="space-y-3">
                  {['name', 'institution', 'country'].map((f) => (
                    <input
                      key={f}
                      value={form[f] || ''}
                      placeholder={f}
                      onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-violet-200"
                    />
                  ))}

                  {/* PHOTO */}
                  <div className="border border-violet-100 rounded-lg p-3 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Photo</label>
                    <p className="text-xs text-gray-400">Max 5 MB. Will be resized automatically.</p>
                    {form.image ? (
                      <div className="flex items-center gap-3 flex-wrap">
                        <img
                          src={form.image}
                          alt=""
                          className="w-20 aspect-[10/9] object-cover rounded-lg border border-violet-200"
                        />
                        <button
                          type="button"
                          onClick={() => setViewingImage(form.image)}
                          className="text-xs px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, image: '' })}
                          className="text-xs px-3 py-1.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400">No photo</p>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onImageSelected}
                      className="block w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:bg-violet-100 file:text-violet-700"
                    />
                    {uploading === 'image' && <p className="text-xs text-violet-500">Uploading…</p>}
                    <input
                      value={form.image || ''}
                      placeholder="or paste image URL"
                      onChange={(e) => setForm({ ...form, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-violet-200 text-xs"
                    />
                  </div>

                  {/* ABSTRACT */}
                  <div className="border border-violet-100 rounded-lg p-3 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Abstract</label>
                    <p className="text-xs text-gray-400">Max 2 MB.</p>
                    {form.abstract && form.abstract !== '#' ? (
                      <div className="flex items-center gap-3">
                        <a
                          href={form.abstract}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-violet-600 underline"
                        >
                          View current
                        </a>
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, abstract: '' })}
                          className="text-xs text-red-500 underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400">No abstract</p>
                    )}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleAbstractUpload}
                      className="block w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:bg-violet-100 file:text-violet-700"
                    />
                    {uploading === 'abstract' && <p className="text-xs text-violet-500">Uploading…</p>}
                    <input
                      value={form.abstract || ''}
                      placeholder="or paste abstract URL"
                      onChange={(e) => setForm({ ...form, abstract: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-violet-200 text-xs"
                    />
                  </div>

                  {fileError && <p className="text-xs text-red-500">{fileError}</p>}

                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="px-3 py-2 rounded-lg border border-violet-200"
                  >
                    <option value="pending">pending</option>
                    <option value="approved">approved</option>
                  </select>

                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      disabled={uploading}
                      className="px-4 py-2 rounded-full bg-violet-600 text-white disabled:opacity-50"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditing(null)}
                      className="px-4 py-2 rounded-full bg-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.name}
                      onClick={() => setViewingImage(s.image)}
                      className="w-16 h-16 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-violet-400 transition"
                    />
                  )}
                  <div className="flex-1">
                    <p className="font-medium">
                      {s.name}
                      <span
                        className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                          s.status === 'approved'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {s.status}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {s.institution} — {s.country}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {s.status !== 'approved' ? (
                      <button
                        onClick={() => approve(s.id, 'approved')}
                        className="px-4 py-2 rounded-full bg-green-600 text-white text-sm"
                      >
                        Approve
                      </button>
                    ) : (
                      <button
                        onClick={() => approve(s.id, 'pending')}
                        className="px-4 py-2 rounded-full bg-yellow-500 text-white text-sm"
                      >
                        Unpublish
                      </button>
                    )}
                    <button
                      onClick={() => startEdit(s)}
                      className="px-4 py-2 rounded-full bg-violet-600 text-white text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => remove(s.id)}
                      className="px-4 py-2 rounded-full bg-red-500 text-white text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= CROP MODAL ================= */}
      {cropping && rawImageSrc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-light text-gray-900 text-center">Crop photo</h3>

              <div className="relative w-full h-80 bg-gray-100 rounded-xl overflow-hidden">
                <Cropper
                  image={rawImageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={CROP_ASPECT}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">Zoom</span>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.01}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 accent-violet-600"
                />
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={cancelCrop}
                  className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmCrop}
                  disabled={uploading === 'image'}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm hover:shadow-lg hover:shadow-violet-300/50 transition disabled:opacity-50"
                >
                  {uploading === 'image' ? 'Saving…' : 'Apply & Upload'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= IMAGE VIEW MODAL ================= */}
      {viewingImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setViewingImage(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={viewingImage}
              alt="Speaker"
              className="w-full rounded-2xl shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setViewingImage(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-gray-700 shadow-lg flex items-center justify-center hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}