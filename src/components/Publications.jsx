export default function PublicationsPage() {
  return (
    <div className="bg-[#f7e3ff] min-h-screen text-gray-900 flex flex-col">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-light mb-4">
            Publications
          </h1>
          <p className="text-gray-600 font-light text-sm sm:text-base">
            ANM 2026 – International Conference on Advanced Nanomaterials
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-16 sm:pb-24 space-y-12">

        {/* Submission Info */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-5 sm:p-8 space-y-5 text-sm sm:text-base font-light leading-relaxed break-words">

          <p>
            Authors who have presented their work at ANM2026 can send their manuscripts as a pdf file to info@anmportugal.com for the first review by <strong>30 September 2026</strong>.
          </p>

          <p>
            Authors can choose the journals as mentioned on the publication page and prepare the manuscript according to the journal format.
          </p>

          <p className="font-medium">
            The email subject should be Manuscript – Journal name
          </p>

        </div>

        {/* Special Issues */}
        <div className="space-y-8">

          <h2 className="text-xl sm:text-2xl font-light text-center">
            Special Issues
          </h2>

          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-5 sm:p-8 text-sm sm:text-base font-light leading-relaxed space-y-6 break-words">

            <p>
              1. International Journal of Hydrogen Energy (http://www.journals.elsevier.com/international-journal-of-hydrogen-energy/) – Special issue name- ANM2026
            </p>

            <p>
              2. Energy Storage (Wiley) https://onlinelibrary.wiley.com/ - Special Issue ANM2026
            </p>

            <p>
              3. Nanomaterials (mdpi) – https://www.mdpi.com/journal/nanomaterials/special_issues/X25N29R5H7
            </p>

            <p>
              4. Nanoenergy Advances (mdpi)- https://www.mdpi.com/journal/nanoenergyadv/special_issues/0309978TA4
            </p>

            <p>
              5. Materials Proceedings (mdpi) – https://www.mdpi.com/journal/materproc – The extended abstract up to 4 pages will be accepted from all authors who have presented their work.
            </p>

            <p>
              6. Condensed matter (mdpi)- selected papers in regular issue
            </p>

          </div>

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
