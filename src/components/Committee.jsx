export default function CommitteesPage() {
  const conferenceChairs = [
    { name: "Prof. João Campos Gil", institution: "University of Coimbra, Portugal" },
    { name: "Dr. Elby Titus", institution: "University of Aveiro, Portugal" },
    { name: "Prof. Luiz Fernando Ribeiro Pereira", institution: "University of Aveiro, Portugal" },
    { name: "Prof. João Pedro Araújo", institution: "University of Porto, Portugal" },
    { name: "Dr. João Ventura", institution: "University of Porto, Portugal" },
    { name: "Dr. Carmen M. Rangel", institution: "Laboratório Nacional de Energia e Geologia (LNEG), Portugal" },
    { name: "Professor Lijian Meng", institution: "Instituto Superior de Engenharia do Porto, Portugal" }
  ];

  const organisingCommittee = [
    { name: "Ms. Lurde Catalino", institution: "Congress Department, Abreu, Portugal" },
    { name: "Dr. Estelina Da Silva", institution: "University of Porto, Portugal" },
    { name: "Dr. D. Pukazhselvan", institution: "University of Aveiro, Portugal" },
    { name: "Dr. Devaraj Ramasamy", institution: "INL, Portugal" },
    { name: "Dr. Olena Okhay", institution: "University of Aveiro, Portugal" },
    { name: "Dr. João Grilo", institution: "University of Aveiro, Portugal" }
  ];

  const scientificCommittee = [
    { name: "Prof. João Campos Gil", institution: "University of Coimbra, Portugal" },
    { name: "Dr. João Ventura", institution: "University of Porto, Portugal" },
    { name: "Prof. João Pedro Araújo", institution: "University of Porto, Portugal" },
    { name: "Dr. Yang Tao", institution: "University of Aveiro, Portugal" },
    { name: "Dr. D. Pukazhselvan", institution: "University of Aveiro, Portugal" },
    { name: "Prof. Lars Montelius", institution: "INL, Portugal" },
    { name: "Dr. Monica Craciun", institution: "University of Exeter, UK" },
    { name: "Prof. S. Ravi P. Silva", institution: "University of Surrey, UK" },
    { name: "Prof. Guillaume Maurin", institution: "Institute Charles Gerhardt Montpellier, France" },
    { name: "Prof. Frank Schwierz", institution: "Tech Univ Ilmenau, Germany" },
    { name: "Prof. Helge Weman", institution: "Norwegian University of Science and Technology, Norway" },
    { name: "Dr. Isabel Suelves", institution: "Instituto de Carboquímica, Spain" },
    { name: "Dr. Leonard Francis", institution: "INL, Portugal" },
    { name: "Dr. Dagou Zeze", institution: "Durham University, UK" },
    { name: "Dr. Abhishek K. Singh", institution: "IISc, India" },
    { name: "Prof. Nazanin Emami", institution: "Luleå University of Technology, Sweden" },
    { name: "Dr. Dmitri Petrovykh", institution: "INL, Portugal" },
    { name: "Prof. Maharaj Tomar", institution: "University of Puerto Rico, Mayagüez" },
    { name: "Prof. Yanglong Hou", institution: "Office of Scientific Research, Peking University, China" },
    { name: "Dr. Michele Iafisco", institution: "CNR – Institute of Science and Technology for Ceramics, Italy" },
    { name: "Dr. Bin Zhu", institution: "Department of Energy Technology, KTH, Sweden" },
    { name: "Dr. Jian-Guo Zhang", institution: "Beijing Institute of Technology, China" },
    { name: "Dr. Qingshan Mu", institution: "University of Texas, USA" },
    { name: "Prof. P.K. Giri", institution: "Indian Institute of Technology Guwahati, India" },
    { name: "Prof. Suddhasatwa Basu", institution: "Indian Institute of Technology, India" },
    { name: "Prof. Sang Ouk Kim", institution: "KAIST, Republic of Korea" },
    { name: "Dr. Satish Tailor", institution: "National University of Science and Technology, Russia" },
    { name: "Dr. Manoj Singh", institution: "Maharishi Markandeshwar University (MMU), India" },
    { name: "Dr. K. K Nagaraja", institution: "Manipal Institute of Technology, India" },
    { name: "Prof. Belkhir Negrou", institution: "Kasdi Merbah University Ouargla, Algeria" },
    { name: "Prof. Lijian Meng", institution: "Instituto Superior de Engenharia do Porto, Portugal" },
    { name: "Prof. Patrick Da Costa", institution: "Sorbonne University, France" },
    { name: "Dr. Roya Dastjerdi", institution: "Yazd University, Iran" },
    { name: "Dr. Huamin Li", institution: "University at Buffalo, USA" },
    { name: "Dr. Rahul Bhosale", institution: "University of Tennessee at Chattanooga, USA" }
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
              Leadership & Organization
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Conference <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Committees</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished experts organizing ANM 2026
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

        {/* Organised By - Featured Card */}
        <div className="relative group overflow-hidden">
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
            
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="p-8 sm:p-12 text-center space-y-6">
              
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-700">
                Organised By
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-3 justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-violet-400" />
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              </div>

              <p className="text-2xl sm:text-4xl font-light text-gray-900">
                Abreu Events Portugal
              </p>

            </div>
          </div>
        </div>

        {/* Conference Chairs */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                Conference Chairs
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {conferenceChairs.map((member, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-violet-50/50 to-purple-50/30 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="flex-shrink-0 w-2 h-2 bg-violet-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium text-gray-900 break-words">
                      {member.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 break-words">
                      {member.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Organising Committee */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                Organising Committee
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {organisingCommittee.map((member, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-violet-50/50 to-purple-50/30 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="flex-shrink-0 w-2 h-2 bg-violet-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium text-gray-900 break-words">
                      {member.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 break-words">
                      {member.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scientific Committee */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                Scientific Committee
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {scientificCommittee.map((member, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-violet-50/50 to-purple-50/30 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="flex-shrink-0 w-2 h-2 bg-violet-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium text-gray-900 break-words">
                      {member.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 break-words">
                      {member.institution}
                    </p>
                  </div>
                </div>
              ))}
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