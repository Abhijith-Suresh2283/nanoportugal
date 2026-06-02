// SpeakerSubmissionPage.jsx
'use client';
import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { supabase } from '../lib/supabaseClient';

// Aspect ratio of the speaker card image area.
// The speakers page shows full-width images at h-[360px]; ~3:4 portrait keeps faces well framed.
const CROP_ASPECT = 10 / 9;

// Produces a cropped Blob from the source image + crop pixel area
function getCroppedBlob(imageSrc, cropPixels) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = cropPixels.width;
      canvas.height = cropPixels.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        image,
        cropPixels.x,
        cropPixels.y,
        cropPixels.width,
        cropPixels.height,
        0,
        0,
        cropPixels.width,
        cropPixels.height
      );
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error('Canvas is empty'));
          resolve(blob);
        },
        'image/jpeg',
        0.9
      );
    };
    image.onerror = reject;
    image.src = imageSrc;
  });
}

export default function SpeakerSubmissionPage() {
  const [form, setForm] = useState({ name: '', institution: '', country: '' });

  // image / cropping state
  const [rawImageSrc, setRawImageSrc] = useState(null); // object URL of the originally chosen file
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedPreview, setCroppedPreview] = useState(null); // preview URL after confirming crop
  const [croppedBlob, setCroppedBlob] = useState(null); // blob to upload
  const [cropping, setCropping] = useState(false); // is the crop modal open

  // abstract state
  const [abstractFile, setAbstractFile] = useState(null);
  const [abstractPreview, setAbstractPreview] = useState(null); // object URL for preview

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ---- image selection ----
  const onImageSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setRawImageSrc(url);
    setCroppedPreview(null);
    setCroppedBlob(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCropping(true);
  };

  const onCropComplete = useCallback((_area, areaPixels) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const confirmCrop = async () => {
    try {
      const blob = await getCroppedBlob(rawImageSrc, croppedAreaPixels);
      setCroppedBlob(blob);
      setCroppedPreview(URL.createObjectURL(blob));
      setCropping(false);
    } catch (err) {
      setError('Could not crop image: ' + err.message);
    }
  };

  const recrop = () => {
    if (rawImageSrc) setCropping(true);
  };

  const removeImage = () => {
    setRawImageSrc(null);
    setCroppedPreview(null);
    setCroppedBlob(null);
    setCropping(false);
  };

  // ---- abstract selection ----
  const onAbstractSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAbstractFile(file);
    setAbstractPreview(URL.createObjectURL(file));
  };

  const removeAbstract = () => {
    setAbstractFile(null);
    setAbstractPreview(null);
  };

  // ---- upload helpers ----
  async function uploadBlob(blob, prefix, ext) {
    const path = `${prefix}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from('speaker-files').upload(path, blob);
    if (error) throw error;
    const { data } = supabase.storage.from('speaker-files').getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleSubmit() {
    if (!form.name.trim()) {
      setError('Name is required.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      let imageUrl = null;
      if (croppedBlob) {
        imageUrl = await uploadBlob(croppedBlob, 'images', 'jpg');
      }
      let abstractUrl = null;
      if (abstractFile) {
        const ext = abstractFile.name.split('.').pop();
        abstractUrl = await uploadBlob(abstractFile, 'abstracts', ext);
      }
      const { error } = await supabase.from('speakers').insert([
        {
          name: form.name,
          institution: form.institution,
          country: form.country,
          image: imageUrl,
          abstract: abstractUrl,
          status: 'pending',
        },
      ]);
      if (error) throw error;
      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-violet-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-violet-400';

  if (done) {
    return (
      <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 p-12 text-center max-w-md">
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 -mt-12 mb-8 rounded-full" />
          <h2 className="text-2xl font-light text-gray-900 mb-3">Thank you!</h2>
          <p className="text-gray-600 font-light">
            Your submission was received and is pending review. It will appear on the speakers page
            once approved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extralight mb-4">
            Speaker{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent font-light">
              Submission
            </span>
          </h1>
          <p className="text-gray-600 font-light">Fill in your details to be featured at ANM 2026.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          <div className="p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Dr. Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input name="institution" value={form.institution} onChange={handleChange} className={inputClass} placeholder="University of ..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input name="country" value={form.country} onChange={handleChange} className={inputClass} placeholder="Portugal" />
            </div>

            {/* PHOTO */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>

              {croppedPreview ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <img
                    src={croppedPreview}
                    alt="Cropped preview"
                    className="w-32 aspect-[10/9] object-cover rounded-xl border border-violet-200 shadow"
                    />
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-green-600">Looks good — this is how it will appear.</span>
                      <button
                        type="button"
                        onClick={recrop}
                        className="text-xs px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition"
                      >
                        Re-crop
                      </button>
                      <button
                        type="button"
                        onClick={removeImage}
                        className="text-xs px-3 py-1.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={onImageSelected}
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-violet-100 file:text-violet-700"
                />
              )}
            </div>

            {/* ABSTRACT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Abstract (PDF / DOCX)</label>
              {abstractFile ? (
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-gray-700 truncate max-w-[200px]">{abstractFile.name}</span>
                  <a
                    href={abstractPreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition"
                  >
                    View
                  </a>
                  <button
                    type="button"
                    onClick={removeAbstract}
                    className="text-xs px-3 py-1.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={onAbstractSelected}
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-violet-100 file:text-violet-700"
                />
              )}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {submitting ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </div>
      </div>

      {/* ================= CROP MODAL ================= */}
      {cropping && rawImageSrc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-light text-gray-900 text-center">Crop your photo</h3>

              {/* Crop area */}
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

              {/* Zoom slider */}
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
                  onClick={() => {
                    setCropping(false);
                    if (!croppedPreview) removeImage();
                  }}
                  className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmCrop}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm hover:shadow-lg hover:shadow-violet-300/50 transition"
                >
                  Apply Crop
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}