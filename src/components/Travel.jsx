import SEO from "./SEO";
export default function TravelPage() {
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900">
      <SEO 
        title="Travel Information & Directions" 
        description="Plan your trip to ANM 2026. Detailed guide on reaching the University of Aveiro from Porto (OPO) and Lisbon (LIS) airports by train, bus, or car."
        keywords="Travel to Aveiro Portugal, Porto airport to Aveiro train, Lisbon to Aveiro directions, ANM 2026 travel guide, University of Aveiro location"
        path="/travel"
      />

      {/* ================= PAGE HEADER ================= */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Getting to Aveiro
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Travel <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Information</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Your guide to reaching the University of Aveiro for ANM 2026
          </p>
        </div>
      </section>
      <div className="sr-only">
        <h2>ANM 2026 Travel Summary</h2>
        <p>Porto Airport to Aveiro: 40-75 minutes via Metro and CP Train.</p>
        <p>Lisbon Airport to Aveiro: 2-2.5 hours via Oriente Railway Station.</p>
        <p>Aveiro is located 70km from Porto and 250km from Lisbon.</p>
      </div>

      {/* ================= QUICK ACCESS CARDS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              title: "Porto Airport",
              time: "40-75 min to Aveiro",
              transport: "Metro + Train"
            },
            {
              icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              title: "Lisbon Airport",
              time: "2-2.5 hours to Aveiro",
              transport: "Train or Car"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-violet-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-violet-600 font-medium mb-1">{item.time}</p>
                  <p className="text-xs text-gray-500 font-light">{item.transport}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-8">

        {/* Porto Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            {/* Section Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
                  From Porto Airport
                </h2>
                <p className="text-sm text-violet-600 font-medium">
                  Aeroporto Francisco Sá Carneiro → Aveiro
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-700">
              
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-2">Airport to Porto-Campanhã Station</h3>
                  <p className="font-light text-sm sm:text-base leading-relaxed">
                    Travel by <span className="font-medium text-violet-600">taxi</span> or <span className="font-medium text-violet-600">Metro</span>. 
                    The metro has a terminal at the airport and takes approximately <span className="font-medium">40 minutes</span> to reach the railway station.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-2">Porto-Campanhã to Aveiro</h3>
                  <p className="font-light text-sm sm:text-base leading-relaxed">
                    Regular trains run between Porto and Aveiro. Journey time: <span className="font-medium">40-75 minutes</span> depending on train type.
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-violet-50/50 border border-violet-200/50 rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-light text-gray-700">
                      For timetables and tickets, visit <a href="https://www.cp.pt" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 hover:text-violet-700 underline">www.cp.pt</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Lisbon Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-8">
            
            {/* Section Header */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
                  From Lisbon Airport
                </h2>
                <p className="text-sm text-violet-600 font-medium">
                  Aeroporto de Lisboa → Aveiro
                </p>
              </div>
            </div>

            {/* By Train */}
            <div className="space-y-6">
              
              {/* Subsection Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  By Train
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 pl-0 sm:pl-13">
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-semibold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-2">Airport to Lisboa-Oriente Station</h4>
                    <p className="font-light text-sm sm:text-base leading-relaxed">
                      Use a <span className="font-medium text-violet-600">taxi</span> or <span className="font-medium text-violet-600">metro</span> to reach the railway station.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-semibold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-2">Lisboa-Oriente to Aveiro</h4>
                    <p className="font-light text-sm sm:text-base leading-relaxed">
                      Hourly trains available. Journey time: <span className="font-medium">2-2.5 hours</span> depending on train type.
                    </p>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-violet-50/50 border border-violet-200/50 rounded-xl p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-light text-gray-700">
                        For timetables and tickets, visit <a href="https://www.cp.pt" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 hover:text-violet-700 underline">www.cp.pt</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-300" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
            </div>

            {/* By Road */}
            <div className="space-y-6">
              
              {/* Subsection Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  By Road
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 pl-0 sm:pl-13">
                
                <p className="font-light text-sm sm:text-base leading-relaxed">
                  Aveiro is well-connected by motorway: <span className="font-medium">2 hours</span> from Lisbon (A1) and <span className="font-medium">2 hours</span> from Spain (A25).
                </p>

                <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-5 sm:p-6">
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Distances to Major Cities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { city: "Coimbra", distance: "60 km" },
                      { city: "Porto", distance: "70 km" },
                      { city: "Vilar Formoso (Spanish border)", distance: "190 km" },
                      { city: "Lisbon", distance: "250 km" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/60 rounded-lg px-4 py-2.5">
                        <span className="text-sm font-light text-gray-700">{item.city}</span>
                        <span className="text-sm font-semibold text-violet-600">{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Travel Tips Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 text-center space-y-6">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Additional Travel Tips
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="font-light text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Further travel recommendations and local guidance will be shared with registered participants closer to the conference dates.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
              >
                Register for Updates
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