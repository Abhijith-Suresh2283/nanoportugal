export default function PublicationsPage() {
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 overflow-x-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Research Publications
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Publication <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Opportunities</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Share your research with leading scientific journals
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

        {/* Submission Guidelines */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-8">
            
            

            <div className="space-y-6">
              
              {/* Main Instructions */}
              <p className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
                Authors who have presented their work at ANM2026 can send their manuscripts as a pdf file to{" "}
                <a href="mailto:info@anmportugal.com" className="font-medium text-violet-600 hover:text-violet-700 transition-colors">
                  info@anmportugal.com
                </a>{" "}
                for the first review by <span className="font-semibold text-gray-900">30 September 2026</span>. Authors can choose the journals as mentioned on the publication page and prepare the manuscript according to the journal format.
              </p>

              {/* Email Subject */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">
                  The email subject should be Manuscript – Journal name
                </p>
              </div>

              {/* Special Issues Title */}
              <div className="pt-4">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  Special issues:
                </h3>
                
                {/* Journals List */}
                <div className="space-y-3 pl-4">
                  
                  {/* Journal 1 */}
                  <div className="space-y-1">
                    <p className="text-sm font-light text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">1. International Journal of Hydrogen Energy (</span>
                      <a 
                        href="http://www.journals.elsevier.com/international-journal-of-hydrogen-energy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700 transition-colors underline"
                      >
                        http://www.journals.elsevier.com/international-journal-of-hydrogen-energy/
                      </a>
                      <span className="font-medium text-gray-900">) – Special issue name- ANM2026</span>
                    </p>
                  </div>

                  {/* Journal 2 */}
                  <div className="space-y-1">
                    <p className="text-sm font-light text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">2. Energy Storage (Wiley) </span>
                      <a 
                        href="https://onlinelibrary.wiley.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700 transition-colors underline"
                      >
                        https://onlinelibrary.wiley.com/
                      </a>
                      <span className="font-medium text-gray-900">- Special Issue ANM2026</span>
                    </p>
                  </div>

                  {/* Journal 3 */}
                  <div className="space-y-1">
                    <p className="text-sm font-light text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">3. Nanomaterials (mdpi) –</span>
                    </p>
                    <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
                      <a 
                        href="https://www.mdpi.com/journal/nanomaterials/special_issues/X25N29R5H7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700 transition-colors underline"
                      >
                        https://www.mdpi.com/journal/nanomaterials/special_issues/X25N29R5H7
                      </a>
                    </p>
                  </div>

                  {/* Journal 4 */}
                  <div className="space-y-1">
                    <p className="text-sm font-light text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">4. Nanoenergy Advances (mdpi)-</span>
                    </p>
                    <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
                      <a 
                        href="https://www.mdpi.com/journal/nanoenergyadv/special_issues/0309978TA4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700 transition-colors underline"
                      >
                        https://www.mdpi.com/journal/nanoenergyadv/special_issues/0309978TA4
                      </a>
                    </p>
                  </div>

                  {/* Journal 5 */}
                  <div className="space-y-1">
                    <p className="text-sm font-light text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">5. Materials Proceedings (mdpi) – </span>
                      <a 
                        href="https://www.mdpi.com/journal/materproc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700 transition-colors underline"
                      >
                        https://www.mdpi.com/journal/materproc
                      </a>
                      <span className="font-medium text-gray-900">– The extended abstract up to 4 pages will be accepted from all authors who have presented their work.</span>
                    </p>
                  </div>

                  {/* Journal 6 */}
                  <div className="space-y-1">
                    <p className="text-sm font-light text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">6. Condensed matter (mdpi)- selected papers in regular issue</span>
                    </p>
                  </div>

                </div>
              </div>

            </div>

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