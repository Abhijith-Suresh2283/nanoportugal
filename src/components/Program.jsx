export default function Program() {
  return (
    <div className="min-h-screen bg-[#f7e3ff] text-gray-900 flex flex-col">

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-lg">

          <h1 className="text-3xl sm:text-5xl font-light mb-10">
            Conference Program
          </h1>

          <a
            href="#"
            className="inline-block px-10 py-4 bg-violet-600 text-white text-sm tracking-widest uppercase rounded-full hover:bg-violet-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Click for Programme ANM2025
          </a>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 text-center mt-auto border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <span className="font-light tracking-widest">ANM 2026</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          </div>
          <p className="text-xs font-light tracking-wide opacity-60">
            All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  );
}
