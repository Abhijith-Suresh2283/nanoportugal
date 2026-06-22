import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

/* =====================================================================
   PROJECT SUBMISSION
   ---------------------------------------------------------------------
   Shares the "Projects Atlas" identity: warm paper, engineering grid,
   Fraunces serif + IBM Plex Mono, single cobalt accent, hairline rules.
   Presented as a catalogue intake sheet.

   Fields: Full name, Email, Affiliation, Country, URL, Project Deadline,   
   Lead Country, Expected Collaborative Countries (multi-tag).

   Submit handler is local-only for now (logs + shows a confirmation).
   Wire to Supabase later by replacing handleSubmit's body with an insert.
   ===================================================================== */

const FIELDS = [
  { key: "fullName", label: "Full Name", type: "text", placeholder: "e.g. Dr. Helena Marques", required: true },
  { key: "email", label: "Email", type: "email", placeholder: "name@institution.edu", required: true },
  { key: "affiliation", label: "Affiliation", type: "text", placeholder: "e.g. University of Aveiro", required: true },
  { key: "country", label: "Country", type: "text", placeholder: "e.g. Portugal", required: true },
  { key: "url", label: "Project URL", type: "url", placeholder: "https://…", required: false },
  { key: "deadline", label: "Project Deadline", type: "date", placeholder: "", required: false },
  { key: "leadCountry", label: "Lead Country", type: "text", placeholder: "e.g. Portugal", required: true },
];

export default function ProjectSubmission() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    affiliation: "",
    country: "",
    url: "",
    deadline: "",
    leadCountry: "",
  });
  const [collabCountries, setCollabCountries] = useState([]);
  const [collabInput, setCollabInput] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduce) {
      nodes.forEach((n) => n.setAttribute("data-shown", "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-shown", "true");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const addCollab = () => {
    const v = collabInput.trim();
    if (v && !collabCountries.includes(v)) {
      setCollabCountries((c) => [...c, v]);
    }
    setCollabInput("");
  };

  const removeCollab = (name) => {
    setCollabCountries((c) => c.filter((x) => x !== name));
  };

  const handleCollabKey = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addCollab();
    }
  };

  const validate = () => {
    const next = {};
    FIELDS.forEach((f) => {
      if (f.required && !form[f.key].trim()) {
        next[f.key] = "Required";
      }
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (form.url && !/^https?:\/\/.+/.test(form.url)) {
      next.url = "Must start with http:// or https://";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      // focus first error field
      const firstErr = FIELDS.find((f) => errors[f.key] || (f.required && !form[f.key].trim()));
      if (firstErr) {
        const el = document.getElementById(`field-${firstErr.key}`);
        if (el) el.focus();
      }
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    // Maps to the `projects` table columns. status is always 'pending' so the
    // row lands awaiting admin approval (enforced by RLS, see SQL below).
    const payload = {
      full_name: form.fullName.trim(),
      email: form.email.trim(),
      affiliation: form.affiliation.trim(),
      country: form.country.trim(),
      url: form.url.trim() || null,
      deadline: form.deadline || null,
      lead_country: form.leadCountry.trim(),
      collaborative_countries: collabCountries,
      status: "pending",
    };

    const { error } = await supabase.from("projects").insert(payload);

    setSubmitting(false);

    if (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      affiliation: "",
      country: "",
      url: "",
      deadline: "",
      leadCountry: "",
    });
    setCollabCountries([]);
    setCollabInput("");
    setErrors({});
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <div className="atlas-root min-h-screen">
      {/* ---------- scoped styles & type ---------- */}
      <style>{`
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
          background-color: var(--paper);
          color: var(--ink);
          font-family: 'Fraunces', Georgia, serif;
          background-image:
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px);
          background-size: 100% 4rem, 4rem 100%;
          position: relative;
        }
        .atlas-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.5;
          background-image: radial-gradient(var(--rule) 0.5px, transparent 0.5px);
          background-size: 3px 3px;
          mix-blend-mode: multiply;
          z-index: 0;
        }
        .atlas-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .atlas-reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease; }
        .atlas-reveal[data-shown="true"] { opacity: 1; transform: none; }

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
        .atlas-input.has-error { border-bottom-color: var(--error); }

        .atlas-focus:focus-visible { outline: 2px solid var(--cobalt); outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .atlas-reveal { transition: none; }
        }
      `}</style>

      {/* ---------- top bar ---------- */}
      <header className="relative z-10 border-b" style={{ borderColor: "var(--rule)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/projectsandcollaboration");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="atlas-mono atlas-focus text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{ color: "var(--ink-soft)" }}
          >
            <span aria-hidden="true">←</span> Projects Atlas
          </button>
          <span className="atlas-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            Intake Form
          </span>
        </div>
      </header>

      {submitted ? (
        /* ---------- confirmation ---------- */
        <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-28 text-center">
          <p className="atlas-mono text-xs uppercase tracking-[0.3em]" style={{ color: "var(--cobalt)" }}>
            Entry Received
          </p>
          <h1
            className="mt-5 font-light leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Thank you<span style={{ color: "var(--cobalt)" }}>.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-light max-w-xl mx-auto" style={{ color: "var(--ink-soft)" }}>
            Your project has been catalogued for review. Once it is approved, it
            will appear as a new specimen in the Projects Atlas.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={resetForm}
              className="atlas-mono atlas-focus text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full border transition-colors"
              style={{ borderColor: "var(--cobalt)", backgroundColor: "var(--cobalt)", color: "#fff" }}
            >
              Submit Another
            </button>
            <button
              onClick={() => {
                navigate("/projectsandcollaboration");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="atlas-mono atlas-focus text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full border transition-colors"
              style={{ borderColor: "var(--rule)", color: "var(--ink-soft)" }}
            >
              Back to Atlas
            </button>
          </div>
        </section>
      ) : (
        <>
          {/* ---------- error banner ---------- */}
          {submitError && (
            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-8">
              <div
                className="atlas-mono text-xs uppercase tracking-[0.15em] px-5 py-4 rounded-lg border"
                style={{ borderColor: "var(--error)", color: "var(--error)", backgroundColor: "rgba(179,38,30,0.06)" }}
                role="alert"
              >
                {submitError}
              </div>
            </div>
          )}

          {/* ---------- masthead ---------- */}
          <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-10">
            <p className="atlas-mono atlas-reveal" data-reveal style={{ color: "var(--cobalt)" }}>
              <span className="text-xs uppercase tracking-[0.3em]">Submit — New Entry</span>
            </p>
            <h1
              className="atlas-reveal mt-5 font-light leading-[0.95] tracking-tight"
              data-reveal
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              Catalogue your
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>Project</span>
              <span style={{ color: "var(--cobalt)" }}>.</span>
            </h1>
            <p
              className="atlas-reveal mt-7 max-w-xl text-lg font-light leading-relaxed border-t pt-6"
              data-reveal
              style={{ color: "var(--ink-soft)", borderColor: "var(--rule)" }}
            >
              Complete the intake sheet below to add your research or
              collaboration to the Atlas. Fields marked with an asterisk are
              required.
            </p>
          </section>

          {/* ---------- form ---------- */}
          <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pb-24">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
              {FIELDS.map((f, i) => (
                <div
                  key={f.key}
                  data-reveal
                  className={`atlas-reveal ${f.key === "url" ? "sm:col-span-2" : ""}`}
                  style={{ transitionDelay: `${(i % 2) * 60}ms` }}
                >
                  <label
                    htmlFor={`field-${f.key}`}
                    className="atlas-mono flex items-baseline gap-2 text-[11px] uppercase tracking-[0.18em] mb-2"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    <span style={{ color: "var(--cobalt)" }}>{(i + 1).toString().padStart(2, "0")}</span>
                    {f.label}
                    {f.required && <span style={{ color: "var(--cobalt)" }}>*</span>}
                  </label>
                  <input
                    id={`field-${f.key}`}
                    type={f.type}
                    value={form[f.key]}
                    placeholder={f.placeholder}
                    onChange={(e) => update(f.key, e.target.value)}
                    className={`atlas-input ${errors[f.key] ? "has-error" : ""}`}
                    aria-invalid={!!errors[f.key]}
                    aria-describedby={errors[f.key] ? `err-${f.key}` : undefined}
                  />
                  {errors[f.key] && (
                    <p id={`err-${f.key}`} className="atlas-mono text-[10px] uppercase tracking-[0.15em] mt-1.5" style={{ color: "var(--error)" }}>
                      {errors[f.key]}
                    </p>
                  )}
                </div>
              ))}

              {/* Expected Collaborative Countries - multi-tag */}
              <div className="atlas-reveal sm:col-span-2" data-reveal>
                <label
                  htmlFor="field-collab"
                  className="atlas-mono flex items-baseline gap-2 text-[11px] uppercase tracking-[0.18em] mb-2"
                  style={{ color: "var(--ink-soft)" }}
                >
                  <span style={{ color: "var(--cobalt)" }}>{(FIELDS.length + 1).toString().padStart(2, "0")}</span>
                  Expected Collaborative Countries
                </label>

                <div className="flex flex-wrap items-center gap-2">
                  {collabCountries.map((c) => (
                    <span
                      key={c}
                      className="atlas-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] pl-3 pr-2 py-1.5 rounded-full"
                      style={{ backgroundColor: "var(--cobalt)", color: "#fff" }}
                    >
                      {c}
                      <button
                        type="button"
                        onClick={() => removeCollab(c)}
                        className="atlas-focus leading-none hover:opacity-70"
                        aria-label={`Remove ${c}`}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex items-end gap-3 mt-2">
                  <input
                    id="field-collab"
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
                    className="atlas-mono atlas-focus text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border whitespace-nowrap transition-colors mb-1"
                    style={{ borderColor: "var(--cobalt)", color: "var(--cobalt)" }}
                  >
                    + Add
                  </button>
                </div>
                <p className="atlas-mono text-[10px] uppercase tracking-[0.12em] mt-2" style={{ color: "var(--ink-soft)" }}>
                  Add one or more countries you expect to collaborate with.
                </p>
              </div>
            </div>

            {/* submit */}
            <div className="atlas-reveal mt-14 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5" data-reveal style={{ borderColor: "var(--rule)" }}>
              <p className="atlas-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--ink-soft)" }}>
                All entries are reviewed before publication.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="atlas-mono atlas-focus group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--cobalt)", color: "#fff" }}
                onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "var(--cobalt-bright)"; }}
                onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "var(--cobalt)"; }}
              >
                {submitting ? "Submitting…" : "Submit Entry"}
                {!submitting && <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>}
              </button>
            </div>
          </section>
        </>
      )}

      {/* ---------- footer ---------- */}
      <footer
        className="relative z-10 border-t"
        style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper-2)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="font-light italic text-lg">
            The Projects Atlas<span style={{ color: "var(--cobalt)" }}>.</span>
          </p>
          <p className="atlas-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            ANM 2026 — University of Aveiro, Portugal
          </p>
        </div>
      </footer>
    </div>
  );
}