export default function SpeakersPage() {
  const speakers = [
    {
      name: "Ibrahim Dincer",
      institution: "Ontario Tech University",
      country: "Canada",
      image: "/ibrahim.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/Abstract-Ibrahim-Dincer-ANM2025.docx"
    },
    {
      name: "Prof. Ajayan Vinu",
      institution: "The University of Newcastle",
      country: "Australia",
      image: "/ajayan.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/Ajayan-Vinu.pdf"
    },
    {
      name: "Luiz Pereira",
      institution: "University of Aveiro",
      country: "Portugal",
      image: "/luiz.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/ANM2025-abstract-LuizPereira.pdf" 
    },
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Featured Speakers
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Meet Our <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Distinguished</span> Speakers
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Learn from world-renowned experts at the forefront of nanomaterials research
          </p>
        </div>
      </section>

      {/* ================= SPEAKERS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        
        {/* Section Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">
           Speakers 2025
          </h2>
          <p className="text-gray-600 font-light text-sm sm:text-base">
            Leading voices shaping the future of advanced nanomaterials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
              </div>

              {/* Content */}
              <div className="p-8 text-center space-y-4">
                
                {/* Name */}
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                  {speaker.name}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-2 justify-center">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-violet-400" />
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                </div>

                {/* Institution Info */}
                <div className="space-y-2">
                  <div className="flex items-start justify-center gap-2 text-sm text-gray-700 font-light">
                    <svg className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="leading-relaxed">{speaker.institution}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 font-light">
                    <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{speaker.country}</span>
                  </div>
                </div>

                {/* View Abstract Button */}
                <a href={speaker.abstract} className="group/btn inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105">
                  View Abstract
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 text-center space-y-4">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              More Speakers Coming Soon
            </h3>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're excited to announce additional distinguished speakers in the coming weeks. 
              Stay tuned for updates!
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-violet-600 text-violet-700 text-sm font-medium tracking-widest uppercase hover:bg-violet-600 hover:text-white transition-all duration-300 rounded-full"
              >
                Register for Updates
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 text-center space-y-6">
            
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Interested in Speaking at ANM 2026?
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Share your groundbreaking research with the global nanomaterials community. 
              Submit your abstract today!
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/abstract-submission"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
              >
                Submit Your Abstract
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
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