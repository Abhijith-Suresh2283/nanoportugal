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

        @media (prefers-reduced-motion: reduce) {
          .atlas-reveal { transition: none; }
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
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-5 sm:px-8 py-16 flex flex-col items-center justify-center text-center">
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
          style={{ color: "#000000" }}
        >
          Connect, Collaborate, Innovate and more…
        </p>

        {/* three items on a single line */}
        <p
          className="atlas-reveal mt-10 sm:mt-12 font-light leading-tight tracking-tight flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          data-reveal
          style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        >
          <span>Projects</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Collaborations</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Consortium</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Exhibition</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Job Listings</span>
        </p>

        {/* descriptive sentence */}
        <p
          className="atlas-reveal mt-10 sm:mt-12 max-w-2xl text-lg sm:text-xl font-light leading-relaxed"
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