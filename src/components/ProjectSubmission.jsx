// ProjectSubmissionPage.jsx
'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

// Supplementary PDF settings
const SUPP_BUCKET = 'project-files';
const SUPP_MAX_BYTES = 1 * 1024 * 1024; // 1 MB

// Project Type options
const PROJECT_TYPES = ['Projects', 'Collaborations', 'Consortium', 'Exhibition', 'Jobs'];

export default function ProjectSubmissionPage() {
  const [form, setForm] = useState({
    entry_type: '',
    title: '',
    summary: '',
    share_link: '', // stores the uploaded supplementary PDF URL
    full_name: '',
    hide_name: false,
    email: '',
    hide_email: false,
    affiliation: '',
    country: '',
    url: '',
    deadline: '',
    job_type: '',
  });

  // Keywords (multi-tag, up to 5)
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');

  // Supplementary PDF upload state
  const [suppUploading, setSuppUploading] = useState(false);
  const [suppError, setSuppError] = useState(null);
  const [suppName, setSuppName] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Word count for the summary (1000-word limit)
  const SUMMARY_WORD_LIMIT = 1000;
  const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);
  const summaryWords = countWords(form.summary);
  const summaryOverLimit = summaryWords > SUMMARY_WORD_LIMIT;

  const addKeyword = () => {
    const v = keywordInput.trim();
    if (v && keywords.length < 5 && !keywords.includes(v)) {
      setKeywords((k) => [...k, v]);
    }
    setKeywordInput('');
  };

  const removeKeyword = (word) => {
    setKeywords((k) => k.filter((x) => x !== word));
  };

  const handleKeywordKey = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addKeyword();
    }
  };

  // Count pages of a PDF using pdf.js (loaded on demand from CDN)
  async function getPdfPageCount(file) {
    if (!window.pdfjsLib) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        s.onload = resolve;
        s.onerror = () => reject(new Error('Could not load the PDF reader.'));
        document.head.appendChild(s);
      });
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      }
    }
    const buf = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: buf }).promise;
    return pdf.numPages;
  }

  async function handleSuppUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setSuppError(null);

    // type
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setSuppError('Supplementary information must be a PDF file.');
      e.target.value = '';
      return;
    }
    // size
    if (file.size > SUPP_MAX_BYTES) {
      setSuppError(`File is too large (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum is 1 MB.`);
      e.target.value = '';
      return;
    }

    setSuppUploading(true);
    try {
      // one-page enforcement
      const pages = await getPdfPageCount(file);
      if (pages !== 1) {
        setSuppError(`The PDF must be exactly one page (this file has ${pages} pages).`);
        e.target.value = '';
        setSuppUploading(false);
        return;
      }

      const path = `supplementary/${Date.now()}-${Math.random().toString(36).slice(2)}.pdf`;
      const { error: upErr } = await supabase.storage.from(SUPP_BUCKET).upload(path, file, {
        contentType: 'application/pdf',
      });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from(SUPP_BUCKET).getPublicUrl(path);
      setForm((f) => ({ ...f, share_link: data.publicUrl }));
      setSuppName(file.name);
    } catch (err) {
      setSuppError('Upload failed: ' + err.message);
      e.target.value = '';
    } finally {
      setSuppUploading(false);
    }
  }

  function removeSupp() {
    setForm((f) => ({ ...f, share_link: '' }));
    setSuppName('');
    setSuppError(null);
  }

  async function handleSubmit() {
    // ---- required fields (sequential, one message at a time) ----
    if (!form.entry_type.trim()) {
      setError('Project type is required.');
      return;
    }
    if (form.entry_type === 'Jobs' && !form.job_type) {
      setError('Please select whether you are looking for a job or advertising a job.');
      return;
    }
    if (!form.title.trim()) {
      setError('Project title is required.');
      return;
    }
    if (!form.summary.trim()) {
      setError('Summary is required.');
      return;
    }
    if (summaryWords > SUMMARY_WORD_LIMIT) {
      setError(`Summary must be within ${SUMMARY_WORD_LIMIT} words (currently ${summaryWords}).`);
      return;
    }
    if (!form.full_name.trim()) {
      setError('Full name is required.');
      return;
    }
    if (!form.email.trim()) {
      setError('Email is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email.');
      return;
    }
    if (!form.affiliation.trim()) {
      setError('Affiliation is required.');
      return;
    }
    if (!form.country.trim()) {
      setError('Country is required.');
      return;
    }
    if (!form.url.trim()) {
      setError('Institution URL is required.');
      return;
    }
    if (!/^https?:\/\/.+/.test(form.url)) {
      setError('Institution URL must start with http:// or https://');
      return;
    }
    if (!form.deadline.trim()) {
      setError('Project deadline is required.');
      return;
    }
    if (suppUploading) {
      setError('Please wait for the supplementary file to finish uploading.');
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const { error } = await supabase.from('projects').insert([
        {
          entry_type: form.entry_type,
          title: form.title,
          summary: form.summary,
          share_link: form.share_link || null,
          keywords: keywords,
          full_name: form.full_name,
          hide_name: form.hide_name,
          email: form.email,
          hide_email: form.hide_email,
          affiliation: form.affiliation,
          country: form.country,
          url: form.url,
          deadline: form.deadline,
          job_type: form.entry_type === 'Jobs' ? form.job_type : null,
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
            Your project has been received. Once approved, it will appear on the
            Projects and Collaboration page.
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
            Research{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent font-light">
              Submission Form
            </span>
          </h1>
          <p className="text-gray-600 font-light">
            Researchers can share project ideas, develop consortia and find suitable
            partners for both existing projects and new proposals in response to national
            or international funding opportunities.
          </p>
          <p className="text-gray-600 font-light">
            Fill all the details before submitting the form.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          <div className="p-8 space-y-5">

            {/* Project Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
              <select
                name="entry_type"
                value={form.entry_type}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>Select one…</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              {/* Job intent — only shown when Project Type is "Jobs" */}
              {form.entry_type === 'Jobs' && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Are you looking for a job or advertising one?</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none px-4 py-2.5 rounded-xl border border-violet-200 bg-white/80 flex-1">
                      <input
                        type="radio"
                        name="job_type"
                        value="Looking for a job"
                        checked={form.job_type === 'Looking for a job'}
                        onChange={handleChange}
                        className="h-4 w-4 text-violet-600 focus:ring-violet-400"
                      />
                      Looking for a job
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none px-4 py-2.5 rounded-xl border border-violet-200 bg-white/80 flex-1">
                      <input
                        type="radio"
                        name="job_type"
                        value="Advertise a job"
                        checked={form.job_type === 'Advertise a job'}
                        onChange={handleChange}
                        className="h-4 w-4 text-violet-600 focus:ring-violet-400"
                      />
                      Advertise a job
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
              <p className="text-xs text-gray-400 mb-2 leading-relaxed">
                Please provide a brief description of your project, including the scientific
                question, challenge, or unmet need it addresses, the methods or approaches being
                used, the expected outcomes and potential impact, the types of expertise, resources,
                or collaborators being sought, and any relevant funding information (current funding,
                funding source, or funding opportunities, if applicable). Present your project
                addressing key points. Additional information can be presented as supplementary
                information via a personal link.
              </p>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={6}
                placeholder="Present your project addressing key points. The summary should be within the 1000-word limit. For supplementary information, please use the field below."
                className={`${inputClass} resize-y leading-relaxed`}
              />
              <p className={`text-xs mt-1 text-right ${summaryOverLimit ? 'text-red-500' : 'text-gray-400'}`}>
                {summaryWords} / {SUMMARY_WORD_LIMIT} words
              </p>
            </div>

            {/* Supplementary Information (optional, one-page PDF, max 1 MB) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Supplementary Information</label>
              <p className="text-xs text-gray-400 mb-2">
                Optional. Upload a single-page PDF (max 1 MB) with any additional information.
              </p>

              {form.share_link ? (
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={form.share_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violet-600 underline break-all"
                  >
                    {suppName || 'View uploaded PDF'}
                  </a>
                  <button
                    type="button"
                    onClick={removeSupp}
                    className="text-xs px-3 py-1.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handleSuppUpload}
                  disabled={suppUploading}
                  className="block w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-violet-100 file:text-violet-700 hover:file:bg-violet-200 disabled:opacity-50"
                />
              )}
              {suppUploading && <p className="text-xs text-violet-500 mt-1">Uploading…</p>}
              {suppError && <p className="text-xs text-red-500 mt-1">{suppError}</p>}
            </div>

            {/* Keywords (up to 5) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
              <p className="text-xs text-gray-400 mb-2">
                Add up to 5 keywords (e.g. hydrogen storage, alternative energy).
              </p>

              {keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {keywords.map((k) => (
                    <span
                      key={k}
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-violet-100 text-violet-700"
                    >
                      {k}
                      <button
                        type="button"
                        onClick={() => removeKeyword(k)}
                        className="leading-none hover:text-violet-900"
                        aria-label={`Remove ${k}`}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={keywordInput}
                  placeholder="Type a keyword and press Enter"
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={handleKeywordKey}
                  disabled={keywords.length >= 5}
                  className={`${inputClass} flex-1 disabled:opacity-50`}
                />
                <button
                  type="button"
                  onClick={addKeyword}
                  disabled={keywords.length >= 5}
                  className="px-5 py-3 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition whitespace-nowrap disabled:opacity-50 disabled:hover:bg-violet-100"
                >
                  + Add
                </button>
              </div>
              {keywords.length >= 5 && (
                <p className="text-xs text-gray-400 mt-1">Maximum of 5 keywords reached.</p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Dr. FirstName LastName"
              />
              <label className="flex items-center gap-2 mt-2 text-sm text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="hide_name"
                  checked={form.hide_name}
                  onChange={(e) => setForm({ ...form, hide_name: e.target.checked })}
                  className="h-4 w-4 rounded border-violet-300 text-violet-600 focus:ring-violet-400"
                />
                Hide name
              </label>
              <p className="text-xs text-gray-400 mt-1">
                If checked, your name will not be shown on the public Projects and Collaboration page.
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="name@institution.edu"
              />
              <label className="flex items-center gap-2 mt-2 text-sm text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="hide_email"
                  checked={form.hide_email}
                  onChange={(e) => setForm({ ...form, hide_email: e.target.checked })}
                  className="h-4 w-4 rounded border-violet-300 text-violet-600 focus:ring-violet-400"
                />
                Hide email
              </label>
              <p className="text-xs text-gray-400 mt-1">
                If checked, your email will not be shown on the public Projects and Collaboration page.
              </p>
            </div>

            {/* Affiliation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation</label>
              <input
                name="affiliation"
                value={form.affiliation}
                onChange={handleChange}
                className={inputClass}
                placeholder="University of"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Institution URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution URL</label>
              <input
                name="url"
                type="url"
                value={form.url}
                onChange={handleChange}
                className={inputClass}
                placeholder="https://…"
              />
            </div>

            {/* Project Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Deadline</label>
              <input
                name="deadline"
                type="date"
                value={form.deadline}
                onChange={handleChange}
                className={inputClass}
              />
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
    </div>
  );
} 