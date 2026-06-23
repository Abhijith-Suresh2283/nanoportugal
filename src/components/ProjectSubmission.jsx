// ProjectSubmissionPage.jsx
'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ProjectSubmissionPage() {
  const [form, setForm] = useState({
    entry_type: '',
    title: '',
    summary: '',
    full_name: '',
    email: '',
    affiliation: '',
    country: '',
    url: '',
    deadline: '',
    lead_country: '',
  });

  // Expected Collaborative Countries (multi-tag)
  const [collabCountries, setCollabCountries] = useState([]);
  const [collabInput, setCollabInput] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addCollab = () => {
    const v = collabInput.trim();
    if (v && !collabCountries.includes(v)) {
      setCollabCountries((c) => [...c, v]);
    }
    setCollabInput('');
  };

  const removeCollab = (name) => {
    setCollabCountries((c) => c.filter((x) => x !== name));
  };

  const handleCollabKey = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addCollab();
    }
  };

  async function handleSubmit() {
    // ---- required fields (sequential, one message at a time) ----
    if (!form.entry_type.trim()) {
      setError('Please select Project or Proposal.');
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
    if (!form.lead_country.trim()) {
      setError('Lead country is required.');
      return;
    }
    if (collabCountries.length === 0) {
      setError('Please add at least one expected collaborative country.');
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
          full_name: form.full_name,
          email: form.email,
          affiliation: form.affiliation,
          country: form.country,
          url: form.url,
          deadline: form.deadline,
          lead_country: form.lead_country,
          collaborative_countries: collabCountries,
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

            {/* Project / Proposal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project/Proposal *</label>
              <select
                name="entry_type"
                value={form.entry_type}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>Select one…</option>
                <option value="Project">Project</option>
                <option value="Proposal">Proposal</option>
              </select>
            </div>

            {/* Project Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Summary *</label>
              <p className="text-xs text-gray-400 mb-2 leading-relaxed">
                In 60&ndash;150 words, please describe: (1) the research objective or problem
                addressed, (2) the approach or methodology, (3) the expected outcomes or
                impact, and (4) the type of collaboration you are seeking. Write in clear,
                non-specialist language so researchers from adjacent fields can understand it.
              </p>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your project following the points above…"
                className={`${inputClass} resize-y leading-relaxed`}
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Dr. FirstName LastName"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="name@institution.edu"
              />
            </div>

            {/* Affiliation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Institution URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution URL *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Deadline *</label>
              <input
                name="deadline"
                type="date"
                value={form.deadline}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Lead Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lead Country *</label>
              <input
                name="lead_country"
                value={form.lead_country}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Expected Collaborative Countries */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Collaborative Countries *
              </label>
              <p className="text-xs text-gray-400 mb-2">Add one or more countries you expect to collaborate with.</p>

              {collabCountries.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {collabCountries.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-violet-100 text-violet-700"
                    >
                      {c}
                      <button
                        type="button"
                        onClick={() => removeCollab(c)}
                        className="leading-none hover:text-violet-900"
                        aria-label={`Remove ${c}`}
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
                  value={collabInput}
                  placeholder="Type a country and press Enter"
                  onChange={(e) => setCollabInput(e.target.value)}
                  onKeyDown={handleCollabKey}
                  className={`${inputClass} flex-1`}
                />
                <button
                  type="button"
                  onClick={addCollab}
                  className="px-5 py-3 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition whitespace-nowrap"
                >
                  + Add
                </button>
              </div>
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
