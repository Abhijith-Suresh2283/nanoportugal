export default function DeadlinesPage() {
  const deadlines = [
    {
      title: "Abstract Submission",
      date: "20 February 2026",
    },
    {
      title: "Early Bird Registration",
      date: "28 February 2026",
    },
    {
      title: "Normal Registration",
      date: "31 March 2026",
    },
    {
      title: "Late Registration",
      date: "30 June 2026",
    },
    {
      title: "Manuscript Submission",
      date: "30 September 2025",
    },
  ];

  return (
    <div className="bg-[#f7e3ff] min-h-screen text-gray-900 flex flex-col">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            ANM2025 Deadlines
          </h1>
        </div>
      </section>

      {/* ================= DEADLINES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {deadlines.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-base font-medium mb-6">
                {item.title}
              </h3>

              <p className="text-sm text-red-500 font-light">
                {item.date}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= NOTICE ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8">
          <p className="text-sm md:text-base text-red-600 font-medium">
            Abstract notification will be sent within 10 days of the submission.
            If the notification is not received within 10 days, email to{" "}
            <a
              href="mailto:info@anmportugal.com"
              className="underline hover:text-red-800 transition"
            >
              info@anmportugal.com
            </a>
          </p>
        </div>
      </section>

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
