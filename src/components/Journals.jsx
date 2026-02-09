{/* ================= FEATURED JOURNALS ================= */}
<section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
  
  {/* Decorative Background Elements */}
  <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-6xl mx-auto relative z-10">

    {/* Section Header */}
    <div className="text-center mb-16">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
          Publication Partners
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4">
        Special Issue <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Journals</span>
      </h2>

      {/* Divider */}
      <div className="flex items-center gap-3 justify-center py-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      </div>

      <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto">
        Publish your research in internationally recognized journals
      </p>
    </div>

    <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
      
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
      
      <div className="p-10 sm:p-16">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-violet-100">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-gray-900">
              Publication Opportunities
            </h3>
            <p className="text-sm font-light text-gray-600 mt-1">
              Selected papers eligible for special issue publication
            </p>
          </div>
        </div>

        {/* Journals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

          {[
            { img: "/journals/ijhe.jpg", name: "International Journal of Hydrogen Energy" },
            { img: "/journals/energy-storage.jpg", name: "Energy Storage" },
            { img: "/journals/nanomaterials.jpg", name: "Nanomaterials" },
            { img: "/journals/nanoenergy.jpg", name: "Nano Energy" },
            { img: "/journals/materials-proc.jpg", name: "Materials Proceedings" },
            { img: "/journals/condensed-matter.jpg", name: "Condensed Matter" },
          ].map((journal, i) => (
            <div
              key={i}
              className="group relative"
            >
              {/* Journal Logo Container */}
              <div className="relative bg-gradient-to-br from-violet-50/30 to-purple-50/20 rounded-xl p-4 h-32 flex items-center justify-center border border-violet-100/30 hover:border-violet-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-200/30">
                <img
                  src={journal.img}
                  alt={journal.name}
                  className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {journal.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
              </div>
            </div>
          ))}

        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-violet-100">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-semibold text-violet-700 uppercase tracking-wide">
                Publication Details
              </p>
            </div>
            <p className="text-sm font-light text-gray-700">
              Selected high-quality papers will be recommended for publication in special issues of these prestigious journals
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>