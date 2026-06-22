// ProjectSubmissionPage.jsx
'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ProjectSubmissionPage() {
  const [form, setForm] = useState({
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
    if (!form.title.trim()) {
      setError('Project title is required.');
      return;
    }
    if (!form.summary.trim()) {
      setError('Summary is required.');
      return;
    }
    if (!form.full_name.trim()) {
      setError('Contact person full name is required.');
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
    if (form.url && !/^https?:\/\/.+/.test(form.url)) {
      setError('URL must start with http:// or https://');
      return;
    }
    if (!form.lead_country.trim()) {
      setError('Lead country is required.');
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const { error } = await supabase.from('projects').insert([
        {
          title: form.title,
          summary: form.summary,
          full_name: form.full_name,
          email: form.email,
          affiliation: form.affiliation,
          country: form.country,
          url: form.url || null,
          deadline: form.deadline || null,
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

  // Reusable Advertise (submit) button — placed top and bottom of the form.
  const AdvertiseButton = () => (
    <button
      onClick={handleSubmit}
      disabled={submitting}
      className="atlas-mono group w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      style={{ backgroundColor: 'var(--cobalt)', color: '#fff' }}
      onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = 'var(--cobalt-bright)'; }}
      onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = 'var(--cobalt)'; }}
    >
      {submitting ? 'Submitting…' : 'Advertise'}
      {!submitting && <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>}
    </button>
  );

  if (done) {
    return (
      <div className="atlas-root min-h-screen flex items-center justify-center px-4">
        <style>{ATLAS_CSS}</style>
        <div
          className="relative z-10 text-center max-w-md w-full rounded-[2rem] p-12 border"
          style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--rule)' }}
        >
          <p className="atlas-mono text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--cobalt)' }}>
            Entry Received
          </p>
          <h2 className="mt-4 font-light leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            Thank you<span style={{ color: 'var(--cobalt)' }}>.</span>
          </h2>
          <p className="mt-5 font-light" style={{ color: 'var(--ink-soft)' }}>
            Your project has been catalogued for review. Once approved, it will
            appear in the Projects Atlas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="atlas-root min-h-screen py-20 px-4 sm:px-6">
      <style>{ATLAS_CSS}</style>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* heading */}
        <div className="text-center mb-10">
          <h1 className="font-light leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}>
            Projects &amp;{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Collaborations</span>
            <span style={{ color: 'var(--cobalt)' }}>.</span>
          </h1>
        </div>

        {/* card */}
        <div
          className="rounded-[2rem] overflow-hidden border"
          style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--rule)' }}
        >
          <div className="h-1" style={{ background: 'var(--cobalt)' }} />
          <div className="p-8 space-y-6">

            {/* TOP ADVERTISE BUTTON */}
            <AdvertiseButton />

            {/* Project Title */}
            <div>
              <label className="atlas-mono block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--ink-soft)' }}>
                Project Title <span style={{ color: 'var(--cobalt)' }}>*</span>
              </label>
              <input
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Scalable Green Hydrogen via Photocatalytic Water Splitting"
                className="atlas-input"
              />
            </div>

            {/* Summary */}
            <div>
              <label className="atlas-mono block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--ink-soft)' }}>
                Summary <span style={{ color: 'var(--cobalt)' }}>*</span>
              </label>
              <p className="text-sm font-light mb-2 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                In 60&ndash;150 words, please describe: (1) the research objective or
                problem addressed, (2) the approach or methodology, (3) the
                expected outcomes or impact, and (4) the type of collaboration
                you are seeking. Write in clear, non-specialist language so
                researchers from adjacent fields can understand it.
              </p>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your project following the points above…"
                className="atlas-input atlas-textarea"
              />
            </div>

            {/* Contact Person — Full Name + Email side by side */}
            <div>
              <p className="atlas-mono text-[11px] uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--cobalt)' }}>
                Contact Person
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label className="atlas-mono block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--ink-soft)' }}>
                    Full Name <span style={{ color: 'var(--cobalt)' }}>*</span>
                  </label>
                  <input
                    name="full_name"
                    type="text"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Dr. Helena Marques"
                    className="atlas-input"
                  />
                </div>
                <div>
                  <label className="atlas-mono block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--ink-soft)' }}>
                    Email <span style={{ color: 'var(--cobalt)' }}>*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@institution.edu"
                    className="atlas-input"
                  />
                </div>
              </div>
            </div>

            {/* Remaining single-column fields */}
            {[
              { name: 'affiliation', label: 'Affiliation', placeholder: 'University of Aveiro', type: 'text' },
              { name: 'country', label: 'Country', placeholder: 'Portugal', type: 'text' },
              { name: 'url', label: 'URL', placeholder: 'https://…', type: 'url', optional: true },
              { name: 'deadline', label: 'Project Deadline', placeholder: '', type: 'date', optional: true },
              { name: 'lead_country', label: 'Lead Country', placeholder: 'Portugal', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <label className="atlas-mono block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--ink-soft)' }}>
                  {field.label} {!field.optional && <span style={{ color: 'var(--cobalt)' }}>*</span>}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="atlas-input"
                />
              </div>
            ))}

            {/* Expected Collaborative Countries */}
            <div>
              <label className="atlas-mono block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--ink-soft)' }}>
                Expected Collaborative Countries
              </label>

              {collabCountries.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {collabCountries.map((c) => (
                    <span
                      key={c}
                      className="atlas-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] pl-3 pr-2 py-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--cobalt)', color: '#fff' }}
                    >
                      {c}
                      <button
                        type="button"
                        onClick={() => removeCollab(c)}
                        className="leading-none hover:opacity-70"
                        aria-label={`Remove ${c}`}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-end gap-3">
                <input
                  type="text"
                  value={collabInput}
                  placeholder="Type a country and press Enter"
                  onChange={(e) => setCollabInput(e.target.value)}
                  onKeyDown={handleCollabKey}
                  className="atlas-input flex-1"
                />
                <button
                  type="button"
                  onClick={addCollab}
                  className="atlas-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border whitespace-nowrap transition-colors"
                  style={{ borderColor: 'var(--cobalt)', color: 'var(--cobalt)' }}
                >
                  + Add
                </button>
              </div>
              <p className="atlas-mono text-[10px] uppercase tracking-[0.12em] mt-2" style={{ color: 'var(--ink-soft)' }}>
                Add one or more countries you expect to collaborate with.
              </p>
            </div>

            {error && (
              <p className="atlas-mono text-xs uppercase tracking-[0.12em]" style={{ color: 'var(--error)' }}>
                {error}
              </p>
            )}

            {/* BOTTOM ADVERTISE BUTTON */}
            <AdvertiseButton />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Atlas theme — no engineering-grid background (solid paper-2 backing). */
const ATLAS_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap');

  .atlas-root {
    --paper: #f4f1ea;
    --paper-2: #ece7db;
    --ink: #14130f;
    --ink-soft: #514c40;
    --rule: #d6cfbe;
    --cobalt: #1d4ed8;
    --cobalt-bright: #2563eb;
    --error: #b3261e;
    background-color: var(--paper-2);
    color: var(--ink);
    font-family: 'Fraunces', Georgia, serif;
  }
  .atlas-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

  .atlas-input {
    background: transparent;
    border: none;
    border-bottom: 1.5px solid var(--rule);
    color: var(--ink);
    font-family: 'Fraunces', Georgia, serif;
    font-size: 1.05rem;
    padding: 0.5rem 0;
    width: 100%;
    transition: border-color .25s ease;
  }
  .atlas-input::placeholder { color: var(--ink-soft); opacity: .55; }
  .atlas-input:focus { outline: none; border-bottom-color: var(--cobalt); }

  .atlas-textarea {
    border: 1.5px solid var(--rule);
    border-radius: 0.75rem;
    padding: 0.75rem 1rem;
    resize: vertical;
    line-height: 1.6;
  }
  .atlas-textarea:focus { border-color: var(--cobalt); }
`;     