import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

/* =====================================================================
   PROJECTS & COLLABORATION  —  Atlas (Emerald edition)
   ---------------------------------------------------------------------
   Same editorial "specimen archive" structure as the original Atlas —
   serif display, catalogue index numbers, hairline meta — but a fresh,
   brighter identity: a soft sage paper, deep emerald primary accent,
   and a warm gold secondary. Distinct from the violet site and from
   the cobalt/beige original.

   Data: Supabase `projects` table, approved rows only.
   ===================================================================== */

const PROJECTS_PER_PAGE = 9;

function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduce) { nodes.forEach((n) => n.setAttribute("data-shown", "true")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.setAttribute("data-shown", "true"); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  });
}

export default function ProjectsAndCollaboration() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCountry, setActiveCountry] = useState("All");

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const gridRef = useRef(null);

  const toggleExpanded = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  useReveal();

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      setLoadError("");
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });
      if (!active) return;
      if (error) {
        setLoadError(error.message || "Could not load projects.");
        setProjects([]);
      } else {
        const mapped = (data || []).map((row) => ({
          id: row.id,
          title: row.title,
          summary: row.summary,
          person: row.full_name,
          affiliation: row.affiliation,
          country: row.country,
          url: row.url,
          leadCountry: row.lead_country,
          collaborativeCountries: row.collaborative_countries || [],
          deadline: row.deadline,
        }));
        setProjects(mapped);
      }
      setLoading(false);
    })();
    return () => { active = false; };
  }, []);

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.country).filter(Boolean)))],
    [projects]
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCountry = activeCountry === "All" || p.country === activeCountry;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.summary && p.summary.toLowerCase().includes(q)) ||
        (p.person && p.person.toLowerCase().includes(q)) ||
        (p.affiliation && p.affiliation.toLowerCase().includes(q)) ||
        (p.country && p.country.toLowerCase().includes(q)) ||
        (p.leadCountry && p.leadCountry.toLowerCase().includes(q)) ||
        (p.collaborativeCountries || []).some((c) => c.toLowerCase().includes(q));
      return matchesCountry && matchesQuery;
    });
  }, [query, activeCountry, projects]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_PAGE));
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filtered.slice(startIndex, endIndex);

  useEffect(() => { if (currentPage > totalPages) setCurrentPage(1); }, [totalPages, currentPage]);

  const scrollToGrid = () => {
    if (gridRef.current) gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goToPage = (page) => { setCurrentPage(page); scrollToGrid(); };
  const nextPage = () => { if (currentPage < totalPages) goToPage(currentPage + 1); };
  const prevPage = () => { if (currentPage > 1) goToPage(currentPage - 1); };

  return (
    <div className="atlas-root min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .atlas-root {
          --paper: #ffffff;
          --paper-2: #f4fafb;
          --ink: #0d1b1e;
          --ink-soft: #50656a;
          --rule: #dceaec;
          --emerald: #0d9488;
          --emerald-bright: #0d9488;
          --gold: #0891b2;
          --grad: #0d9488;
          background-color: var(--paper-2);
          color: var(--ink);
          font-family: 'Fraunces', Georgia, serif;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .atlas-root::before {
          content: "";
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 84rem; height: 36rem; pointer-events: none; z-index: 0;
          background:
            radial-gradient(48rem 26rem at 30% 12%, rgba(13,148,136,0.10), transparent 68%),
            radial-gradient(34rem 22rem at 85% 8%, rgba(8,145,178,0.07), transparent 68%);
        }
        .atlas-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .atlas-grad-text {
          background: var(--grad);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          padding-right: 0.06em;
        }
        .atlas-reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease; }
        .atlas-reveal[data-shown="true"] { opacity: 1; transform: none; }

        .atlas-card { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; box-shadow: 0 1px 2px rgba(13,148,136,0.05), 0 12px 30px -16px rgba(13,148,136,0.20); }
        .atlas-card:hover { transform: translateY(-6px); box-shadow: 0 4px 8px rgba(13,148,136,0.10), 0 26px 46px -18px rgba(13,148,136,0.30); border-color: rgba(13,148,136,0.45) !important; }
        .atlas-link-row { transition: color .25s ease, gap .25s ease; }

        .atlas-summary { overflow-wrap: anywhere; word-break: break-word; }
        .atlas-clamp { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

        @media (prefers-reduced-motion: reduce) {
          .atlas-reveal { transition: none; }
          .atlas-card:hover { transform: none; }
        }
        .atlas-focus:focus-visible { outline: 2px solid var(--emerald); outline-offset: 3px; }
      `}</style>

      {/* ---------- top bar ---------- */}
      <header className="relative z-10 border-b" style={{ borderColor: "var(--rule)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="atlas-mono atlas-focus text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{ color: "var(--ink-soft)" }}
          >
            <span aria-hidden="true">←</span> ANM 2026 / Home
          </button>
          <span className="atlas-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            Vol. XXV — Aveiro
          </span>
        </div>
      </header>

      {/* ---------- masthead ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12">
        <p className="atlas-mono atlas-reveal" data-reveal style={{ color: "var(--emerald)" }}>
          <span className="text-xs uppercase tracking-[0.3em]">Index — Research &amp; Collaboration</span>
        </p>

        <h1
          className="atlas-reveal mt-5 font-light leading-[0.95] tracking-tight"
          data-reveal
          style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
        >
          Projects &amp;
          <br />
          <span className="atlas-grad-text" style={{ fontStyle: "italic", fontWeight: 400 }}>Collaborations.</span>
        </h1>

        <div
          className="atlas-reveal mt-8 grid sm:grid-cols-[1fr_auto] gap-6 items-end border-t pt-6"
          data-reveal
          style={{ borderColor: "var(--rule)" }}
        >
          <p className="max-w-xl text-lg sm:text-xl font-light leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            A living catalogue of research and partnerships presented across the
            conference — each entry a specimen of work advancing nanomaterials
            and energy science worldwide.
          </p>
          <p className="atlas-mono text-xs uppercase tracking-[0.2em] sm:text-right" style={{ color: "var(--ink-soft)" }}>
            {projects.length.toString().padStart(2, "0")} Entries
            <br />
            {Math.max(0, countries.length - 1)} Countries
          </p>
        </div>
      </section>

      {/* ---------- controls ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-10">
        <div
          className="atlas-reveal flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-y py-5"
          data-reveal
          style={{ borderColor: "var(--rule)" }}
        >
          <div className="relative flex-1 max-w-md">
            <span className="atlas-mono pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-xs" style={{ color: "var(--ink-soft)" }} aria-hidden="true">⌕</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles, people, institutions…"
              aria-label="Search projects"
              className="atlas-mono atlas-focus w-full bg-transparent pl-6 pr-2 py-2 text-sm placeholder:opacity-50 border-b"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {countries.map((c) => {
              const active = c === activeCountry;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCountry(c)}
                  className="atlas-mono atlas-focus text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border transition-all"
                  style={{
                    borderColor: active ? "transparent" : "var(--rule)",
                    background: active ? "var(--grad)" : "transparent",
                    color: active ? "#fff" : "var(--ink-soft)",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- catalogue grid ---------- */}
      <section ref={gridRef} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        {loading ? (
          <div className="py-24 text-center">
            <p className="atlas-mono text-sm uppercase tracking-[0.2em] animate-pulse" style={{ color: "var(--ink-soft)" }}>Loading catalogue…</p>
          </div>
        ) : loadError ? (
          <div className="py-24 text-center">
            <p className="atlas-mono text-sm uppercase tracking-[0.2em]" style={{ color: "#c0392b" }}>{loadError}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="atlas-mono text-sm uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
              {projects.length === 0 ? "No entries catalogued yet." : "No entries match this filter."}
            </p>
            {projects.length === 0 ? (
              <button
                onClick={() => { navigate("/projectsubmission"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="atlas-mono atlas-focus mt-4 text-xs uppercase tracking-[0.2em] underline"
                style={{ color: "var(--emerald)" }}
              >
                Submit the first project
              </button>
            ) : (
              <button
                onClick={() => { setQuery(""); setActiveCountry("All"); }}
                className="atlas-mono atlas-focus mt-4 text-xs uppercase tracking-[0.2em] underline"
                style={{ color: "var(--emerald)" }}
              >
                Reset catalogue
              </button>
            )}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-transparent">
            {currentProjects.map((p, i) => (
              <article
                key={p.id}
                data-reveal
                className="atlas-reveal atlas-card group relative flex flex-col min-w-0 p-7 sm:p-8 border"
                style={{
                  backgroundColor: "var(--paper)",
                  borderColor: "var(--rule)",
                  transitionDelay: `${(i % 3) * 80}ms`,
                }}
              >
                <div className="flex items-baseline justify-between mb-5">
                  <span className="atlas-grad-text atlas-mono text-xs tracking-[0.2em] font-medium">
                    No. {(startIndex + i + 1).toString().padStart(3, "0")}
                  </span>
                  <span className="atlas-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
                    {p.country}
                  </span>
                </div>

                <h2 className="text-2xl font-light leading-snug tracking-tight mb-2">
                  {p.title || p.person}
                </h2>

                <p className="atlas-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: "var(--ink-soft)" }}>
                  {p.person}{p.affiliation ? ` · ${p.affiliation}` : ""}
                </p>

                {p.summary && (
                  <div className="mb-6 flex-grow">
                    <p className={`atlas-summary text-[15px] font-light leading-relaxed ${expanded[p.id] ? "" : "atlas-clamp"}`} style={{ color: "var(--ink-soft)" }}>
                      {p.summary}
                    </p>
                    {p.summary.length > 180 && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(p.id)}
                        className="atlas-mono atlas-focus mt-2 text-[10px] uppercase tracking-[0.18em]"
                        style={{ color: "var(--emerald)" }}
                      >
                        {expanded[p.id] ? "View less" : "View more"}
                      </button>
                    )}
                  </div>
                )}

                <dl className={`space-y-3 mb-6 ${p.summary ? "" : "flex-grow"}`}>
                  <div className="flex items-baseline justify-between gap-4 border-t pt-3" style={{ borderColor: "var(--rule)" }}>
                    <dt className="atlas-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--ink-soft)" }}>Lead Country</dt>
                    <dd className="text-sm text-right">{p.leadCountry || "—"}</dd>
                  </div>
                  <div className="border-t pt-3" style={{ borderColor: "var(--rule)" }}>
                    <dt className="atlas-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: "var(--ink-soft)" }}>Collaborating Countries</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {p.collaborativeCountries && p.collaborativeCountries.length > 0 ? (
                        p.collaborativeCountries.map((c) => (
                          <span key={c} className="atlas-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-full border"
                            style={{ borderColor: "rgba(8,145,178,0.35)", color: "#0e7490", backgroundColor: "rgba(8,145,178,0.08)" }}>
                            {c}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm" style={{ color: "var(--ink-soft)" }}>—</span>
                      )}
                    </dd>
                  </div>
                  {p.deadline && (
                    <div className="flex items-baseline justify-between gap-4 border-t pt-3" style={{ borderColor: "var(--rule)" }}>
                      <dt className="atlas-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--ink-soft)" }}>Deadline</dt>
                      <dd className="atlas-mono text-xs text-right">{p.deadline}</dd>
                    </div>
                  )}
                </dl>

                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atlas-link-row atlas-mono atlas-focus inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] group-hover:gap-3"
                    style={{ color: "var(--ink)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--emerald)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="atlas-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>No link provided</span>
                )}

                <span
                  className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--grad)" }}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        )}

        {/* ---------- pagination ---------- */}
        {!loading && !loadError && totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="atlas-mono atlas-focus text-[11px] uppercase tracking-[0.18em] px-4 py-2 rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ borderColor: "var(--rule)", color: "var(--ink-soft)" }}
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => {
                const active = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    aria-current={active ? "page" : undefined}
                    className="atlas-mono atlas-focus text-[11px] tracking-[0.15em] w-9 h-9 rounded-full border transition-all"
                    style={{
                      borderColor: active ? "transparent" : "var(--rule)",
                      background: active ? "var(--grad)" : "transparent",
                      color: active ? "#fff" : "var(--ink-soft)",
                    }}
                  >
                    {page.toString().padStart(2, "0")}
                  </button>
                );
              })}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="atlas-mono atlas-focus text-[11px] uppercase tracking-[0.18em] px-4 py-2 rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ borderColor: "var(--rule)", color: "var(--ink-soft)" }}
              >
                Next →
              </button>
            </div>
            <p className="atlas-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
              Showing {(startIndex + 1).toString().padStart(2, "0")}–
              {Math.min(endIndex, filtered.length).toString().padStart(2, "0")} of{" "}
              {filtered.length.toString().padStart(2, "0")}
            </p>
          </div>
        )}
      </section>

      {/* ---------- footer ---------- */}
      <footer className="relative z-10 border-t" style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="font-light italic text-lg">
            Projects &amp; <span className="atlas-grad-text">Collaborations.</span>
          </p>
          <p className="atlas-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            ANM 2026 — University of Aveiro, Portugal
          </p>
        </div>
      </footer>
    </div>
  );
}