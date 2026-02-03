export default function AbstractSubmissionPage() {
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-24 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-fuchsia-200/20 rounded-full blur-3xl animate-pulse delay-500" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          
          {/* Icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse" />
              
              {/* Icon Container */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
            <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-violet-700 font-semibold">
              Abstract Submission
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extralight tracking-tight mb-8">
            Coming <span className="block mt-2 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Soon</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 justify-center py-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          </div>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            We're preparing the abstract submission portal for ANM 2026
          </p>

          {/* Info Card */}
          <div className="mt-12 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-violet-100/50 overflow-hidden max-w-2xl mx-auto">
            
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="p-10 sm:p-12 space-y-6">
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
                  The abstract submission system will be available soon with detailed guidelines and templates.
                </p>
                <p className="text-sm text-gray-600 font-light">
                  Check back shortly for submission instructions, formatting requirements, and deadlines.
                </p>
              </div>

              {/* Important Date Callout */}
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200">
                <div className="flex items-center gap-3 justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-violet-700 font-semibold mb-1">
                      Submission Deadline
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      20 February 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="flex items-center gap-3 justify-center pt-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce delay-100" />
                  <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-bounce delay-200" />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              </div>

            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 font-light mb-4">
              For questions about abstract submission
            </p>
            
            <a  href="mailto:info@anmportugal.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 text-center border-t border-gray-700">
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

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>

    </div>
  );
}