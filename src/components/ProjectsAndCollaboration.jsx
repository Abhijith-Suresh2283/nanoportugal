import { useEffect } from "react";

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
  useReveal();

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

      {/* ---------- main ---------- */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-5 sm:px-8 pt-4 pb-16 flex flex-col items-center text-center">
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
          className="atlas-reveal mt-4 font-light leading-tight tracking-tight flex items-center justify-center gap-x-3 sm:gap-x-4 whitespace-nowrap"
          data-reveal
          style={{ fontSize: "clamp(0.95rem, 2.6vw, 2rem)" }}
        >
          <span>Projects</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Collaborations</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Consortium</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Exhibition</span>
          <span style={{ color: "var(--emerald)" }} aria-hidden="true">·</span>
          <span>Jobs</span>
        </p>

        {/* descriptive sentence */}
        <p
          className="atlas-reveal mt-4 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-justify"
          data-reveal
          style={{ color: "var(--ink-soft)" }}
        >
          Science-Net is a unique platform for researchers, academics, industry
          professionals, and innovators to showcase their projects and build
          meaningful collaborations.
        </p>
      </main>
    </div>
  );
}