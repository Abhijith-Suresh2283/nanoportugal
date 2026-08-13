import SEO from "./SEO";
export default function VenuePage() {
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 flex flex-col">
      <SEO 
        title="Conference Venue | University of Aveiro" 
        description="Join us at the Pedagogical Complex, University of Aveiro, for ANM 2027. Get directions, campus maps, and information about the beautiful city of Aveiro, Portugal."
        keywords="University of Aveiro venue, Pedagogical Complex Aveiro, ANM 2027 location, Portugal conference center, Campus Santiago Aveiro"
        path="/venue"
      />

      {/* ================= HERO IMAGE SECTION ================= */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden">
        <img
          src="/venue.jpg"
          alt="University of Aveiro Venue"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Animated Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-3">
            <h1 className="text-white text-5xl sm:text-7xl font-extralight tracking-[0.3em] animate-fade-in">
              VENUE
            </h1>
            <div className="h-px w-32 bg-white/60 mx-auto animate-slide-in" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ================= ADDRESS CARD SECTION ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 sm:-mt-28 relative z-10">

        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-1">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-10 sm:p-14 text-center space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full">
              <svg className="w-4 h-4 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs uppercase tracking-widest text-violet-700 font-semibold">
                Conference Location
              </span>
            </div>

            {/* Main Venue Name */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
                Pedagogical Complex
              </h2>
              <p className="text-lg text-violet-600 font-medium">
                University of Aveiro
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            {/* Address Details */}
            <div className="space-y-2 text-gray-600">
              <p className="text-base font-light">Campus Santiago</p>
              <p className="text-base font-light">3810-193 Aveiro</p>
              <p className="text-base font-medium">Portugal</p>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4">
              <a 
                href="https://www.google.com/maps?q=Complexo+Pedagógico+da+Universidade+de+Aveiro" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>

          </div>
        </div>

      </section>
      <div className="sr-only">
        <h3>Venue Facilities - ANM 2027</h3>
        <p>The conference takes place at the University of Aveiro's Pedagogical Complex (Complexo Pedagógico).</p>
        <p>Facilities include plenary auditoriums, breakout rooms for technical sessions, and foyer space for scientific poster presentations.</p>
      </div>

      {/* ================= MAP SECTION ================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-20 sm:py-24">

        <div className="space-y-6">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              Find Us
            </h3>
            <p className="text-gray-600 font-light">
              Located in the heart of Aveiro's university campus
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl overflow-hidden border border-violet-100/50 hover:shadow-2xl transition-shadow duration-500">

            <iframe
            title="Venue Location"
            src="https://www.google.com/maps?q=Complexo+Pedagógico+da+Universidade+de+Aveiro&t=k&z=17&output=embed"
            className="w-full h-[400px] sm:h-[550px] border-0"
            loading="lazy"
            allowFullScreen
            ></iframe>


          </div>
        </div>

      </section>

      {/* ================= CITY INFO SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-10 sm:p-12 text-center space-y-6 border border-violet-100">
          
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-light text-gray-900">
              Explore Aveiro
            </h3>
            <p className="text-gray-600 font-light max-w-md mx-auto">
              Discover the charm of Portugal's "Venice" — a beautiful coastal city known for its canals, Art Nouveau architecture, and vibrant culture
            </p>
          </div>

          {/* Link Button */}
          <a 
            href="https://portugalvirtual.pt/_tourism/costadeprata/aveiro/ukcity.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-violet-700 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 border border-violet-200"
          >
            Learn More About Aveiro
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

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

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 8rem;
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out 0.5s both;
        }
      `}</style>

    </div>
  );
}