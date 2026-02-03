import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 sm:py-36 text-center px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-sm">
            <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-violet-700 font-semibold">
              25th Edition
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extralight mb-6 tracking-tight">
            About <span className="font-light">ANM 2026</span>
          </h1>
          
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          </div>

          <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed">
            Celebrating 25 years of excellence in Advanced Nanomaterials & Energy Materials Research
          </p>
        </div>
      </section>

      {/* ================= ANNOUNCEMENT ================= */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
            
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="p-10 sm:p-14">
              
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-50 rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
                  Announcement
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg">
                <p className="font-medium text-gray-900">Dear Colleague,</p>

                <p className="font-light">
                  We're delighted to invite you to the <span className="font-semibold text-violet-700">25th Advanced Nanomaterials Conference (ANM2026)</span>, 
                  taking place <span className="font-semibold">22–24 July 2026</span> at the <span className="font-semibold">University of Aveiro, Portugal</span>.
                </p>

                <p className="font-light">
                  Join us to celebrate the 25th series of innovation in nanomaterials and energy materials —
                  present your latest research, publish your work, showcase your products, 
                  and connect with global experts.
                </p>

                {/* Quick Links Grid */}
                <div className="grid sm:grid-cols-3 gap-4 pt-6">
                  
                  {/* Abstract Submission */}
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Abstract Submission</p>
                        <Link
                          to="/abstract-submission"
                          className="text-violet-700 font-medium hover:text-violet-900 inline-flex items-center gap-1 group"
                        >
                          Submit Here
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Registration */}
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Registration</p>
                        
                        <a  href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-violet-700 font-medium hover:text-violet-900 inline-flex items-center gap-1 group"
                        >
                          Abreu Events
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* More Info */}
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">More Updates</p>
                        
                         <a href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-violet-700 font-medium hover:text-violet-900 inline-flex items-center gap-1 group"
                        >
                          Official Website
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW TO PARTICIPATE ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              How to Participate
            </h2>
            <p className="text-gray-600 font-light">
              Your journey from submission to publication
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-5">
              {[
                { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "Submit your abstract" },
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Receive abstract acceptance confirmation" },
                { icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z", text: "Register via Abreu Events" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-violet-100/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-light pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              {[
                { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", text: "Receive your programme schedule" },
                { icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z", text: "Present your research" },
                { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", text: "Publish your work in respective journals" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-violet-100/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-light pt-2">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRY & EXHIBITION ================= */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-6">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Industry & Exhibition Opportunities
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
              ANM2026 welcomes companies, startups, and R&D organizations to showcase 
              their innovations and connect with key stakeholders across academia and industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", text: "Exhibit cutting-edge nanotech products and solutions" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Present technology advancements to a targeted audience" },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "Build partnerships and explore global collaborations" }
            ].map((item, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-100/50 group">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <p className="text-gray-800 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY ATTEND ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Why Attend?
            </h2>
            <p className="text-gray-600 font-light">
              Three compelling reasons to join us in Aveiro
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { 
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "25 Years of Excellence",
                text: "Celebrate 25 years of ANM excellence in advancing nanomaterials research"
              },
              { 
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Global Networking",
                text: "Network with leading experts and innovators worldwide"
              },
              { 
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Explore Aveiro",
                text: "Experience the beautiful city of Aveiro, the \"Venice of Portugal\""
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-white/80 to-violet-50/50 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-100/50 group">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
{/* 
      ================= FOOTER NOTE ================= */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-10 text-center border border-violet-100 shadow-lg">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl mb-5 shadow-sm">
              <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-700 font-light mb-4">
              For comprehensive ANM conference information
            </p>
            
             <a href="/About-ANM2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105"
            >
              Download Conference Brochure
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
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