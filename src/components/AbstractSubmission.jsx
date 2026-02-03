export default function AbstractSubmissionPage() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Call for Abstracts
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Abstract <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Submission</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Submit your abstract for ANM2026 and share your research in Energy, Nanomaterials, Graphene, Polymers and Magnetic Materials
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

        {/* Important Deadline Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-violet-700 font-semibold mb-1">
                    Submission Deadline
                  </p>
                  <p className="text-2xl sm:text-3xl font-light text-gray-900">
                    20 February 2026
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl px-6 py-3">
                <p className="text-sm font-light text-gray-700 text-center">
                  <span className="font-medium text-violet-600">Don't miss out!</span> Submit your abstract today
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {[
            {
              icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              title: "Format Requirements",
              description: "Submit abstracts in the prescribed format with all required information"
            },
            {
              icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              title: "Review Process",
              description: "All abstracts undergo peer review by our scientific committee"
            },
            {
              icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              title: "Notification",
              description: "You'll receive acceptance notifications via email after review"
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

        {/* Submission Form */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
                  Submit Your Abstract
                </h2>
                <p className="text-sm sm:text-base font-light text-gray-600">
                  Please fill out all required fields in the form below
                </p>
              </div>
            </div>

            {/* Embedded Zoho Form */}
            <div className="bg-gradient-to-br from-violet-50/30 to-purple-50/20 rounded-xl p-2">
              <iframe
                aria-label="ANM2026 Abstract Submission"
                frameBorder="0"
                style={{
                  height: '1200px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '0.75rem',
                  backgroundColor: 'white'
                }}
                src="https://forms.zohopublic.eu/drelbytitus/form/ANM2026AbstractSubmission/formperma/XuubN5h5tvE8pjsPPEr1TgEtp7KwnUFoL1OYlxb88U0"
              />
            </div>

          </div>
        </div>

        {/* Help Section */}
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

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                Need Help?
              </h2>
              <p className="text-base font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
                If you have questions about the submission process or need assistance, we're here to help
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-sm font-light text-gray-700 mb-3">
                Contact us at:
              </p>
              <a href="mailto:info@anmportugal.com" className="text-lg sm:text-xl font-medium text-violet-600 hover:text-violet-700 transition-colors">
                info@anmportugal.com
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              
              <a  href="mailto:info@anmportugal.com?subject=Abstract Submission Inquiry"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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