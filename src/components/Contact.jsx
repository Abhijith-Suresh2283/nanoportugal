import SEO from "./SEO";
export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 flex flex-col">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the ANM 2027 conference organizers. Contact us for general inquiries, abstract submissions, registration assistance, and travel planning in Portugal."
        keywords="Contact ANM 2027, Nanomaterials conference email, Aveiro conference support, Abreu Events contact, nanotechnology research inquiry"
        path="/contact"
      />
      
      {/* ================= PAGE HEADER ================= */}
      <section className="relative py-24 sm:py-32 text-center px-4 sm:px-6 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs uppercase tracking-widest text-violet-700 font-semibold">
              Get in Touch
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight mb-6 tracking-tight">
            Contact Us
          </h1>
          
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          </div>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            ANM 2027 – International Conference on Advanced Nanomaterials
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* General / Abstract / Manuscript */}
          <div className="group bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2">
            
            {/* Decorative Top Border */}
            <div className="h-1.5 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="p-10 sm:p-12 text-center space-y-6">
              
              {/* Icon */}
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full">
                <div className="w-2 h-2 bg-violet-600 rounded-full" />
                <span className="text-xs uppercase tracking-widest text-violet-700 font-semibold">
                  General Inquiries
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  General, Abstract & Manuscript
                </h2>
                <p className="text-sm text-gray-600 font-light">
                  For conference information, abstract submissions, and manuscript queries
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 justify-center py-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-violet-400" />
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              </div>

              {/* Email */}
              <div className="space-y-4">
                
                <a  href="mailto:info@anmportugal.com"
                  className="group/email inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base sm:text-lg">info@anmportugal.com</span>
                  <svg className="w-4 h-4 group-hover/email:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <p className="text-xs text-gray-500 font-light">
                  Click to send an email
                </p>
              </div>

              {/* Contact Topics */}
              <div className="pt-4 space-y-3">
                {["Conference Information", "Abstract Submission", "Manuscript Guidelines"].map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <svg className="w-5 h-5 text-violet-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-light">{topic}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Registration / Accommodation / Travel */}
          <div className="group bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2">
            
            {/* Decorative Top Border */}
            <div className="h-1.5 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-violet-400" />
            
            <div className="p-10 sm:p-12 text-center space-y-6">
              
              {/* Icon */}
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <span className="text-xs uppercase tracking-widest text-purple-700 font-semibold">
                  Event Logistics
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Registration, Accommodation & Travel
                </h2>
                <p className="text-sm text-gray-600 font-light">
                  For registration, hotel bookings, and travel arrangements
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 justify-center py-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-purple-400" />
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
              </div>

              {/* Email */}
              <div className="space-y-4">
                
                <a  href="mailto:lurdes.catalino@abreu.pt"
                  className="group/email inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base sm:text-lg">lurdes.catalino@abreu.pt</span>
                  <svg className="w-4 h-4 group-hover/email:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <p className="text-xs text-gray-500 font-light">
                  Click to send an email
                </p>
              </div>

              {/* Contact Topics */}
              <div className="pt-4 space-y-3">
                {["Registration Assistance", "Hotel Reservations", "Travel Planning"].map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-light">{topic}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ADDITIONAL INFO SECTION ================= */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-24">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-10 sm:p-14 text-center space-y-8">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-50 rounded-2xl">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                Need Help?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Our team is here to assist you. Whether you have questions about submissions, registration, or logistics, 
                we're committed to making your conference experience seamless.
              </p>
            </div>

            {/* Response Time Info */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-full border border-violet-200">
              <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                We typically respond within 24-48 hours
              </span>
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