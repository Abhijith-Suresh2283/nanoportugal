export default function PublicationsPage() {
  const journals = [
    {
      name: "International Journal of Hydrogen Energy",
      publisher: "Elsevier",
      url: "http://www.journals.elsevier.com/international-journal-of-hydrogen-energy/",
      specialIssue: "ANM2026",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      name: "Energy Storage",
      publisher: "Wiley",
      url: "https://onlinelibrary.wiley.com/",
      specialIssue: "ANM2026",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      name: "Nanomaterials",
      publisher: "MDPI",
      url: "https://www.mdpi.com/journal/nanomaterials/special_issues/X25N29R5H7",
      specialIssue: "Special Issue",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    },
    {
      name: "Nanoenergy Advances",
      publisher: "MDPI",
      url: "https://www.mdpi.com/journal/nanoenergyadv/special_issues/0309978TA4",
      specialIssue: "Special Issue",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      name: "Materials Proceedings",
      publisher: "MDPI",
      url: "https://www.mdpi.com/journal/materproc",
      specialIssue: "Extended Abstract (up to 4 pages)",
      note: "Accepted from all authors who have presented their work",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      name: "Condensed Matter",
      publisher: "MDPI",
      url: "https://www.mdpi.com/journal/condensedmatter",
      specialIssue: "Selected papers in regular issue",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    }
  ];

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
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Share your research with leading scientific journals
          </p>
        </div>
      </section>

      {/* ================= SUBMISSION GUIDELINES ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 overflow-hidden">
        
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                  Manuscript Submission Guidelines
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 font-light leading-relaxed">
              <p className="text-sm sm:text-base">
                Authors who have presented their work at ANM2026 can send their manuscripts as a PDF file to{" "}
                <a href="mailto:info@anmportugal.com" className="font-medium text-violet-600 hover:text-violet-700 underline">
                  info@anmportugal.com
                </a>{" "}
                for the first review by <span className="font-semibold text-violet-600">30 September 2026</span>.
              </p>

              <p className="text-sm sm:text-base">
                Authors can choose the journals as mentioned below and prepare the manuscript according to the journal format.
              </p>

              <div className="bg-violet-50/50 border border-violet-200/50 rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Email Subject Format:</p>
                    <p className="text-sm text-gray-700">Manuscript – Journal name</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SPECIAL ISSUES ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">
            Available Special Issues
          </h2>
          <p className="text-gray-600 font-light">
            Choose from our partner journals for publication
          </p>
        </div>

        <div className="grid gap-6">
          {journals.map((journal, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
              
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={journal.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    
                    {/* Number Badge & Journal Name */}
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-violet-600">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-medium text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                          {journal.name}
                        </h3>
                        <p className="text-sm text-violet-600 font-medium mt-1">
                          {journal.publisher}
                        </p>
                      </div>
                    </div>

                    {/* Special Issue Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span className="font-light">{journal.specialIssue}</span>
                    </div>

                    {/* Note (if exists) */}
                    {journal.note && (
                      <div className="bg-violet-50/50 border border-violet-200/50 rounded-lg px-4 py-2.5">
                        <p className="text-xs sm:text-sm text-gray-700 font-light">
                          <span className="font-medium text-violet-600">Note:</span> {journal.note}
                        </p>
                      </div>
                    )}

                    {/* Link */}
                    <a
                      href={journal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-200 group/link"
                    >
                      Visit Journal Website
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 text-center space-y-6">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Have Questions?
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              For any queries regarding manuscript submission or publication process, please contact us
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="mailto:info@anmportugal.com"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
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