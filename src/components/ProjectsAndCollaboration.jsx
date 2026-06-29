import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* =====================================================================
   SCIENCE-NET  —  Landing
   ---------------------------------------------------------------------
   Atlas (teal) identity. A minimal entry page: the Science-Net title,
   three large stacked links (Projects, Collaborations, Consortium)
   that route to placeholder paths to be wired later, and a short
   descriptive sentence below.
   ===================================================================== */

const LINKS = [
  { label: "Projects", path: "/projects" },
  { label: "Collaborations", path: "/collaborations" },
  { label: "Consortium", path: "/consortium" },
];

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

export default function ScienceNet() {
  const navigate = useNavigate();
  useReveal();

  const go = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="atlas-root min-h-screen flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .atlas-root {
          --paper: #ffffff;
          --paper-2: #f4fafb;
          --ink: #0d1b1e;
          --ink-soft: #50656a;
          --rule: #dceaec;
          --emerald: #0d9488;
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

        .sn-link {
          position: relative;
          width: fit-content;
          transition: color .3s ease, padding-left .3s ease;
          color: var(--ink);
        }
        .sn-link::after {
          content: "";
          position: absolute; left: 0; bottom: -2px;
          height: 2px; width: 0;
          background: var(--grad);
          transition: width .35s ease;
        }
        .sn-link:hover { color: var(--emerald); padding-left: 0.75rem; }
        .sn-link:hover::after { width: 100%; }
        .sn-arrow { opacity: 0; transform: translateX(-6px); transition: opacity .3s ease, transform .3s ease; }
        .sn-link:hover .sn-arrow { opacity: 1; transform: translateX(0); }

        @media (prefers-reduced-motion: reduce) {
          .atlas-reveal, .sn-link, .sn-link::after, .sn-arrow { transition: none; }
        }
        .atlas-focus:focus-visible { outline: 2px solid var(--emerald); outline-offset: 4px; }
      `}</style>

      {/* ---------- top bar ---------- */}
      <header className="relative z-10 border-b" style={{ borderColor: "var(--rule)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => go("/")}
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

      {/* ---------- main ---------- */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-24">
        {/* Science-Net title */}
        <h1
          className="atlas-reveal font-light leading-[1.05] tracking-tight"
          data-reveal
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
        >
          <span className="atlas-grad-text" style={{ fontStyle: "italic", fontWeight: 400 }}>Science-Net</span>
        </h1>

        <p
          className="atlas-reveal mt-3 atlas-mono text-sm sm:text-base uppercase tracking-[0.18em]"
          data-reveal
          style={{ color: "var(--ink-soft)" }}
        >
          Connect, Collaborate, Innovate and more…
        </p>

        {/* three stacked links */}
        <nav className="mt-12 sm:mt-16 flex flex-col gap-6 sm:gap-8">
          {LINKS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => go(item.path)}
              data-reveal
              className="atlas-reveal sn-link atlas-focus text-left font-light leading-none tracking-tight inline-flex items-center"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)", transitionDelay: `${i * 80}ms` }}
            >
              {item.label}
              <span className="sn-arrow atlas-mono ml-4 text-2xl" style={{ color: "var(--emerald)" }} aria-hidden="true">→</span>
            </button>
          ))}
        </nav>

        {/* descriptive sentence */}
        <p
          className="atlas-reveal mt-14 sm:mt-20 max-w-2xl text-lg sm:text-xl font-light leading-relaxed"
          data-reveal
          style={{ color: "var(--ink-soft)" }}
        >
          Science-Net is a unique platform for researchers, academics, industry
          professionals, and innovators to showcase their projects and build
          meaningful collaborations.
        </p>
      </main>

      {/* ---------- footer ---------- */}
      <footer className="relative z-10 border-t" style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="font-light italic text-lg">
            <span className="atlas-grad-text">Science-Net</span>
          </p>
          <p className="atlas-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            ANM 2026 — University of Aveiro, Portugal
          </p>
        </div>
      </footer>
    </div>
  );
}