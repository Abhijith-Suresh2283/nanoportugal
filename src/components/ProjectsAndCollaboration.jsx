import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* =====================================================================
   PROJECTS & COLLABORATION 
   ---------------------------------------------------------------------
   A deliberately distinct visual identity from the violet conference
   theme. Concept: a "scientific atlas / specimen archive" — warm paper
   background, ink text, hairline grid rules, catalogue index numbers,
   and a single electric cobalt accent. Serif display + monospace meta.

   Demo data below is shaped exactly like the future Supabase rows, so
   swapping to a live fetch later only means replacing DEMO_PROJECTS.
   ===================================================================== */

const DEMO_PROJECTS = [
  {
    id: 1,
    title: "Scalable Green Hydrogen via Photocatalytic Water Splitting",
    summary:
      "A perovskite-based catalyst architecture that improves solar-to-hydrogen efficiency under ambient conditions, targeting low-cost decentralized production.",
    person: "Dr. Helena Marques",
    affiliation: "University of Aveiro",
    country: "Portugal",
    url: "https://example.com/hydrogen",
  },
  {
    id: 2,
    title: "Spin-Polarized Graphene Interfaces for Quantum Memory",
    summary:
      "Engineering room-temperature spin coherence at graphene–ferromagnet junctions, with applications in non-volatile quantum-classical hybrid storage.",
    person: "Prof. Jonas Reinhardt",
    affiliation: "Max Planck Institute",
    country: "Germany",
    url: "https://example.com/spintronics",
  },
  {
    id: 3,
    title: "Self-Healing Polymer Nanocomposites for Aerospace",
    summary:
      "Microcapsule-embedded carbon-fiber laminates that autonomously repair micro-fractures, extending fatigue life of structural components.",
    person: "Dr. Aiko Tanaka",
    affiliation: "Tohoku University",
    country: "Japan",
    url: "https://example.com/polymers",
  },
  {
    id: 4,
    title: "Sodium-Ion Battery Cathodes from Abundant Minerals",
    summary:
      "A layered-oxide cathode chemistry that removes cobalt and nickel dependence, designed for grid-scale storage in resource-constrained regions.",
    person: "Dr. Rohan Mehta",
    affiliation: "Indian Institute of Science",
    country: "India",
    url: "https://example.com/batteries",
  },
  {
    id: 5,
    title: "Biodegradable Nanosensors for In-Field Crop Diagnostics",
    summary:
      "Printable, soil-degradable sensor arrays that report plant stress and nutrient levels wirelessly, then dissolve without residue.",
    person: "Dr. Camila Rossi",
    affiliation: "University of São Paulo",
    country: "Brazil",
    url: "https://example.com/biosensors",
  },
  {
    id: 6,
    title: "2D Material Membranes for Carbon Capture",
    summary:
      "Atomically thin molybdenum-disulfide membranes with tuned pore geometry achieving high CO₂ selectivity at industrial flue-gas throughput.",
    person: "Prof. Sarah Okonkwo",
    affiliation: "University of Cape Town",
    country: "South Africa",
    url: "https://example.com/membranes",
  },
];

/* Small hook: reveal-on-scroll, respects reduced motion. */
function useReveal() {
  const [refs] = useState(() => new Set());
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
  });
  return refs;
}

export default function ProjectsAndCollaboration() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCountry, setActiveCountry] = useState("All");

  useReveal();

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(DEMO_PROJECTS.map((p) => p.country)))],
    []
  );

  const filtered = useMemo(() => {
    return DEMO_PROJECTS.filter((p) => {
      const matchesCountry = activeCountry === "All" || p.country === activeCountry;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.person.toLowerCase().includes(q) ||
        p.affiliation.toLowerCase().includes(q);
      return matchesCountry && matchesQuery;
    });
  }, [query, activeCountry]);

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
          background-color: var(--paper);
          color: var(--ink);
          font-family: 'Fraunces', Georgia, serif;
          background-image:
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px);
          background-size: 100% 4rem, 4rem 100%;
          background-position: 0 0;
          position: relative;
        }
        .atlas-root::before {
          /* subtle paper grain */
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

        .atlas-card { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
        .atlas-card:hover { transform: translateY(-4px); }
        .atlas-link-row { transition: color .25s ease, gap .25s ease; }

        @media (prefers-reduced-motion: reduce) {
          .atlas-reveal { transition: none; }
          .atlas-card:hover { transform: none; }
        }
        .atlas-focus:focus-visible {
          outline: 2px solid var(--cobalt);
          outline-offset: 3px;
        }
      `}</style>

      {/* ---------- top bar ---------- */}
      <header className="relative z-10 border-b" style={{ borderColor: "var(--rule)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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

      {/* ---------- masthead / hero ---------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12">
        <p className="atlas-mono atlas-reveal" data-reveal style={{ color: "var(--cobalt)" }}>
          <span className="text-xs uppercase tracking-[0.3em]">Index — Research &amp; Collaboration</span>
        </p>

        <h1
          className="atlas-reveal mt-5 font-light leading-[0.95] tracking-tight"
          data-reveal
          style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
        >
          The Projects
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>Atlas</span>
          <span style={{ color: "var(--cobalt)" }}>.</span>
        </h1>

        <div
          className="atlas-reveal mt-8 grid sm:grid-cols-[1fr_auto] gap-6 items-end border-t pt-6"
          data-reveal
          style={{ borderColor: "var(--rule)" }}
        >
          <p
            className="max-w-xl text-lg sm:text-xl font-light leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            A living catalogue of research and partnerships presented across the
            conference — each entry a specimen of work advancing nanomaterials
            and energy science worldwide.
          </p>
          <p className="atlas-mono text-xs uppercase tracking-[0.2em] sm:text-right" style={{ color: "var(--ink-soft)" }}>
            {DEMO_PROJECTS.length.toString().padStart(2, "0")} Entries
            <br />
            {countries.length - 1} Countries
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
          {/* search */}
          <div className="relative flex-1 max-w-md">
            <span
              className="atlas-mono pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest"
              style={{ color: "var(--ink-soft)" }}
              aria-hidden="true"
            >
              ⌕
            </span>
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

          {/* country filter */}
          <div className="flex flex-wrap gap-2">
            {countries.map((c) => {
              const active = c === activeCountry;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCountry(c)}
                  className="atlas-mono atlas-focus text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border transition-colors"
                  style={{
                    borderColor: active ? "var(--cobalt)" : "var(--rule)",
                    backgroundColor: active ? "var(--cobalt)" : "transparent",
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
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="atlas-mono text-sm uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
              No entries match this filter.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCountry("All");
              }}
              className="atlas-mono atlas-focus mt-4 text-xs uppercase tracking-[0.2em] underline"
              style={{ color: "var(--cobalt)" }}
            >
              Reset catalogue
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
            {filtered.map((p, i) => (
              <article
                key={p.id}
                data-reveal
                className="atlas-reveal atlas-card group relative flex flex-col p-7 sm:p-8"
                style={{
                  backgroundColor: "var(--paper)",
                  transitionDelay: `${(i % 3) * 80}ms`,
                }}
              >
                {/* index + country */}
                <div className="flex items-baseline justify-between mb-5">
                  <span
                    className="atlas-mono text-xs tracking-[0.2em]"
                    style={{ color: "var(--cobalt)" }}
                  >
                    No. {p.id.toString().padStart(3, "0")}
                  </span>
                  <span
                    className="atlas-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {p.country}
                  </span>
                </div>

                {/* title */}
                <h2 className="text-2xl font-light leading-snug tracking-tight mb-4">
                  {p.title}
                </h2>

                {/* summary */}
                <p
                  className="text-[15px] font-light leading-relaxed mb-6 flex-grow"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {p.summary}
                </p>

                {/* meta: person + affiliation */}
                <div className="border-t pt-4 mb-5" style={{ borderColor: "var(--rule)" }}>
                  <p className="text-base font-medium">{p.person}</p>
                  <p
                    className="atlas-mono text-[11px] uppercase tracking-[0.12em] mt-1"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {p.affiliation}
                  </p>
                </div>

                {/* url */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atlas-link-row atlas-mono atlas-focus inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] group-hover:gap-3"
                  style={{ color: "var(--ink)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cobalt)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
                >
                  View Project
                  <span aria-hidden="true">→</span>
                </a>

                {/* corner accent that grows on hover */}
                <span
                  className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "var(--cobalt)" }}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ---------- footer ---------- */}
      <footer
        className="relative z-10 border-t"
        style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper-2)" }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
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