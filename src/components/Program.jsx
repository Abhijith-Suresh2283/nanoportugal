export default function Program() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Event Schedule
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Conference <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Program</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the comprehensive schedule of sessions, workshops, and networking events at ANM2026
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

        {/* Program Access Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-16 text-center space-y-8">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-4">
              <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                View Full Program Schedule
              </h2>
              <p className="text-base font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Access the detailed program for ANM2025 including keynote sessions, technical presentations, poster sessions, and social events
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              
              <a  href="https://drive.google.com/drive/folders/1Zqjhb1DcScKOnAqj8WKOsuwLQql8yEhC?usp=drive_link" target="_blank"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Programme ANM2025
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Program Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {[
            {
              icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              title: "Keynote Speakers",
              description: "World-renowned experts presenting cutting-edge research and industry insights"
            },
            {
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              title: "Technical Sessions",
              description: "Parallel tracks covering Energy, Nanomaterials, Graphene, Polymers and Magnetic Materials"
            },
            {
              icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z",
              title: "Networking Events",
              description: "Coffee breaks, poster sessions, and social gatherings to connect with peers"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
              
              <div className="p-6 sm:p-8 space-y-4 text-center">
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-light text-gray-700 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                  Important Information
                </h2>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 space-y-3">
              <ul className="space-y-3">
                {[
                  "The final program will be available closer to the conference date",
                  "Program times are subject to change - please check for updates regularly",
                  "All registered participants will receive program updates via email",
                  "Mobile app with full schedule will be available for download before the event"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-700">
                    <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
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