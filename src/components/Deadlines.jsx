import SEO from "./SEO";
export default function DeadlinesPage() {
  const deadlines = [
    {
      title: "Abstract Submission",
      date: "30 November 2027",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Early Bird Registration",
      date: "28 February 2027",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Normal Registration",
      date: "30 April 2027",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    },
    {
      title: "Late Registration",
      date: "30 June 2027",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Manuscript Submission",
      date: "30 September 2026",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 overflow-x-hidden">
      <SEO 
        title="Important Deadlines" 
        description="View all key dates and deadlines for the ANM 2026 conference in Aveiro, Portugal. Includes abstract submission, early bird registration, and manuscript deadlines."
        keywords="ANM 2026 deadlines, abstract submission date 2026, nanomaterials conference registration, early bird nano conference, Portugal research deadlines"
        path="/deadlines"
      />

      {/* ================= PAGE HEADER ================= */}
      <section className="relative pt-8 pb-0 sm:pt-10 sm:pb-0 px-4 sm:px-6 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight leading-tight mb-2">
            ANM 2027 <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Deadlines</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center pt-2 pb-0">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>
        </div>
      </section>

      {/* ================= SCROLLING NOTICE ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 rounded-full overflow-hidden shadow-lg py-3">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="text-sm sm:text-base font-medium text-white mx-8">
                Please refer the publications page for details of ANM2026 manuscript submission.
              </span>
            ))}
          </div>
        </div>

        {/* Marquee keyframes */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </section>

      {/* ================= DEADLINES TIMELINE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="sr-only">
          <h2>Key Submission and Registration Dates for Nano Portugal 2026</h2>
          <ul>
            {deadlines.map((item, index) => (
              <li key={index}>{item.title}: {item.date}</li>
            ))}
          </ul>
        </div>
        
        {/* Timeline for Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-200 via-purple-200 to-fuchsia-200 transform -translate-y-1/2 rounded-full" />
          
          <div className="relative grid grid-cols-5 gap-4">
            {deadlines.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-violet-400 rounded-full z-10" />
                
                {/* Card */}
                <div className="pt-20">
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 group"
                       style={{ animationDelay: `${index * 100}ms` }}>
                    
                    {/* Decorative Top Border */}
                    <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
                    
                    <div className="p-6 text-center space-y-4">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-medium text-gray-900 leading-snug">
                        {item.title}
                      </h3>

                      {/* Divider */}
                      <div className="flex items-center gap-2 justify-center py-1">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                        <div className="w-1 h-1 rounded-full bg-violet-400" />
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                      </div>

                      {/* Date */}
                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200/50 rounded-xl px-4 py-3">
                        <p className="text-sm font-semibold text-violet-600">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid for Mobile/Tablet */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {deadlines.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
              
              <div className="p-6 text-center space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-gray-900 leading-snug">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-2 justify-center py-1">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-violet-400" />
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                </div>

                {/* Date */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200/50 rounded-xl px-4 py-3">
                  <p className="text-sm font-semibold text-violet-600">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= IMPORTANT NOTICE ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  Important Notice
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                  Abstract notification will be sent within <span className="font-medium text-violet-600">10 days</span> of the submission.
                  If the notification is not received within 10 days, please email to{" "}
                  <a
                    href="mailto:info@anmportugal.com"
                    className="font-medium text-violet-600 hover:text-violet-700 underline transition-colors duration-200"
                  >
                    info@anmportugal.com
                  </a>
                </p>
              </div>

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
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Don't Miss Out!
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Submit your abstract and register early to take advantage of discounted rates
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="/abstract-submission"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
              >
                Submit Abstract
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>

              <a
                href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white border-2 border-violet-600 text-violet-700 text-sm font-medium tracking-widest uppercase hover:bg-violet-600 hover:text-white transition-all duration-300 rounded-full"
              >
                Register Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span className="font-light tracking-widest">ANM Portugal</span>
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