import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import PhotoGalleryGrid from "./Gallery";
import { Helmet } from "react-helmet-async";
export default function HomePagedummy() {
  const navigate = useNavigate();

const handlePageNavigation = (route) => {
  navigate(route);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] text-gray-900 overflow-x-hidden">
      {/* ================= ANNOUNCEMENT BANNER (desktop: top bar) ================= */}
<button
  onClick={() => handlePageNavigation("/projectsandcollaboration")}
  className="hidden sm:block group relative w-full bg-gradient-to-r from-violet-400 via-purple-600 to-fuchsia-400 text-white py-3 px-4 overflow-hidden"
>
  {/* Shimmer effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  
  <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
    {/* NEW badge */}

    <span className="text-sm sm:text-base font-light tracking-wide">
      <span className="font-semibold">Projects & Collaborations</span>
    </span>
  </div>
</button>

      {/* ================= ANNOUNCEMENT BANNER (mobile: fixed right-edge tab) ================= */}
<button
  onClick={() => handlePageNavigation("/projectsandcollaboration")}
  className="sm:hidden fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-violet-500 via-purple-600 to-fuchsia-500 text-white py-4 px-2 rounded-l-xl shadow-lg shadow-purple-900/30"
  aria-label="Projects & Collaborations"
>
  <span className="text-xs font-semibold tracking-wide" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
    Projects &amp; Collaborations
  </span>
</button>
      <SEO 
        title="ANM 2026 | International Conference on Advanced Nanomaterials" 
        description="International conferences on: •Advanced Nanomaterials •Hydrogen Energy •Advanced Graphene Materials •Advanced Magnetic and Spintronics Materials •University of Aveiro, Portugal."
        keywords="ANM 2026, Advanced Nanomaterials Conference, Hydrogen Energy Portugal, Graphene Research 2026, Spintronics Materials"
        path="/"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[75vh] sm:h-screen overflow-hidden bg-black">

        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="
              absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              min-w-full min-h-full
              w-[133.34vh] h-[75vh]
              sm:w-[177.77vh] sm:h-[56.25vw]
            "
            src="https://www.youtube.com/embed/hAlTWkCIJ0I?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=hAlTWkCIJ0I&playsinline=1"
            title="ANM 2026 Conference"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Animated Particles Effect (Optional decorative element) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse delay-300" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[75vh] sm:h-full flex items-center justify-center px-4 sm:px-6 py-16 sm:py-0">
          <div className="max-w-6xl text-center text-white space-y-6 sm:space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-white/90">
                25th Edition
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[1.1] mb-6 tracking-tight">
              Advancing the Future of{" "}
              <span className="block mt-2 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent font-light">
                Nanomaterials
              </span>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>

            {/* Subheadline */}
            <div className="space-y-2">
              
              <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide opacity-95">
                25th International Conference on Nano and Energy related materials
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base sm:text-lg font-light opacity-90">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>July 22–24, 2026</span>
                <span className="text-white/40">•</span>
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Aveiro, Portugal, Europe</span>
              </div>
            </div>

            {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 pt-6">

          {/* Top Row: Submit + Register */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">

            {/* Submit Abstract */}
            <button
              onClick={() => handlePageNavigation("/abstract-submission")}
              className="group px-10 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 rounded-full hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Submit Abstract
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>


            {/* Register Now */}
            <a
              href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 rounded-full hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Register
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

          </div>

          {/* Bottom Row: Learn More + Projects & Collaboration */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">

            {/* Learn More */}
            <button
              onClick={() => handlePageNavigation("/about")}
              className="group relative px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

            {/* Projects & Collaboration */}
            <button
              onClick={() => handlePageNavigation("/projectsandcollaboration")}
              className="group relative px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Projects & Collaboration
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

          </div>

          </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            {/* <span className="text-xs uppercase tracking-widest">Scroll</span> */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      

      {/* ================= FEATURED JOURNALS ================= */}
<section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
  
  {/* Decorative Background Elements */}
  <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="text-center py-4">
  <a
    href="https://www.advanced-nanomaterials-conference.com/anm-home/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-700 hover:text-violet-900 underline text-sm font-medium"
  >
    Visit Previous ANM Website
  </a>
</div>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
          Publication Partners
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4">
        Special Issue <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Journals</span>
      </h2>

      {/* Divider */}
      <div className="flex items-center gap-3 justify-center py-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      </div>

      <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto">
        Publish your research in internationally recognized journals
      </p>
    </div>

    <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
      
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
      
      <div className="p-10 sm:p-16">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-violet-100">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-gray-900">
              Publication Opportunities
            </h3>
            <p className="text-sm font-light text-gray-600 mt-1">
              Selected papers eligible for special issue publication
            </p>
          </div>
        </div>

        {/* Journals Grid - Centered layout for odd number of items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">

          {[
            { 
              img: "/hydrogen.jpeg", 
              name: "International Journal of Hydrogen Energy",
              url: "https://www.sciencedirect.com/journal/international-journal-of-hydrogen-energy"
            },
            { 
              img: "/energystorage.jpeg", 
              name: "Energy Storage",
              url: "https://onlinelibrary.wiley.com/journal/25784862"
            },
            { 
              img: "/nanomaterials.png", 
              name: "Nanomaterials",
              url: "https://www.mdpi.com/journal/nanomaterials"
            },
            { 
              img: "/nanoenergyadv.png", 
              name: "Nano Energy Advances",
              url: "https://www.mdpi.com/journal/nanoenergyadv"
            },
            { 
              img: "/materialsprocessdings.png", 
              name: "Materials Proceedings",
              url: "https://www.mdpi.com/journal/materproc"
            },
             { 
              img: "/condensed-matter.png", 
              name: "Condensed Matter",
              url: "https://www.mdpi.com/journal/condensedmatter"
            },
          ].map((journal, i) => (
            <a
              key={i}
              href={journal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer"
            >
              {/* Journal Logo Container - Increased size */}
              <div className="relative bg-gradient-to-br from-violet-50/30 to-purple-50/20 rounded-xl p-6 h-44 sm:h-48 flex items-center justify-center border border-violet-100/30 hover:border-violet-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-200/30">
                <img
                  src={journal.img}
                  alt={journal.name}
                  className="max-h-32 sm:max-h-36 max-w-full object-contain sm:grayscale sm:group-hover:grayscale-0 transition-all duration-500 sm:group-hover:scale-110"
                />
                
                {/* External Link Icon - Shows on hover */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-violet-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Tooltip on hover - hidden on mobile */}
              <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                {journal.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
              </div>
            </a>
          ))}

        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-violet-100">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-semibold text-violet-700 uppercase tracking-wide">
                Publication Details
              </p>
            </div>
            <p className="text-sm font-light text-gray-700">
              Selected high-quality papers will be recommended for publication in special issues of these prestigious journals. Click on any journal to visit their website.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
{/* ================= HIDDEN SEO TRACKS SECTION ================= */}
      {/* This section helps Google associate your site with specific scientific topics */}
      <div className="sr-only">
        <h2>Call for Papers: Nano Portugal 2026</h2>
        <p>Submit research abstracts on Advanced Nanomaterials, Energy Materials, Graphene, Carbon Nanotubes, and Polymer Nanocomposites.</p>
        <p>The 2026 Nanomaterials conference tracks include: Hydrogen Energy, Battery Materials, and Nano-Biotechnology.</p>
      </div>

      {/* ================= WELCOME ================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
            
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="p-10 sm:p-16 text-center space-y-8">

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
                <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Join Leading Researchers in{" "}
                <span className="block mt-2 text-violet-700">Nanomaterials Science</span>
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-3 justify-center py-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              </div>

              <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Three days of groundbreaking presentations, networking, and collaboration
                at the University of Aveiro, Portugal.
              </p>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {[
                  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "Present Research" },
                  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "Network Globally" },
                  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", text: "Publish Work" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-4">
                    <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-light">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">

                    {/* Submit Abstract */}
            <button
              onClick={() => handlePageNavigation("/abstract-submission")}
              className="group px-10 py-4 bg-white border-2 border-violet-600 text-violet-700 text-sm font-medium tracking-widest uppercase hover:bg-violet-600 hover:text-white transition-all duration-300 rounded-full"
            >
              <span className="flex items-center justify-center gap-2">
                Submit Abstract
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
                
                 <a href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Register
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
             
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 sm:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Conference at a Glance
            </h2>
            <p className="text-gray-600 font-light">
              A quarter-century of scientific excellence
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
            
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-violet-100">
              {[
                { 
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  value: "25th", 
                  label: "Edition",
                  description: "Years of Excellence"
                },
                { 
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  value: "500+", 
                  label: "Participants",
                  description: "Global Researchers"
                },
                { 
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  value: "8", 
                  label: "Research Tracks",
                  description: "Specialized Topics"
                },
              ].map((stat, i) => (
                <div key={stat.label} className="p-10 sm:p-12 text-center group hover:bg-gradient-to-br hover:from-violet-50/50 hover:to-purple-50/50 transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                  </div>

                  {/* Value */}
                  <div className="text-5xl sm:text-6xl font-extralight mb-3 text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm tracking-widest uppercase text-gray-900 font-semibold mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-gray-500 font-light">
                    {stat.description}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= KEY HIGHLIGHTS ================= */}
      <section className="py-20 sm:py-24 px-6 bg-white/40 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-gray-600 font-light">
              Immerse yourself in cutting-edge nanomaterials research
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Keynote Speakers",
                description: "World-renowned experts sharing insights"
              },
              { 
                icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                title: "Interactive Sessions",
                description: "Engage in dynamic discussions"
              },
              { 
                icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                title: "Industry Exhibitions",
                description: "Discover latest technologies"
              },
              { 
                icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z",
                title: "Networking Events",
                description: "Build lasting collaborations"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-violet-100/50 group">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

     {/* ================= PHOTO GALLERY ================= */}
{/* ================= PHOTO GALLERY ================= */}
<section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
  
  {/* Decorative Background Elements */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-6xl mx-auto relative z-10">

    {/* Section Header */}
    <div className="text-center mb-16">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
          Memories
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4">
        Photo <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Gallery</span>
      </h2>

      {/* Divider */}
      <div className="flex items-center gap-3 justify-center py-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      </div>

      <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto">
        Highlights from previous ANM conferences
      </p>

      <p className="text-sm sm:text-base text-gray-500 mt-2">
        Click on any photo to view it in full size.
      </p>

    </div>

    <PhotoGalleryGrid />

  </div>
</section>

{/* ================= PARTNERS / PUBLICATIONS SECTION ================= */}
<section className="bg-gray-50 py-16 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4">
      Media <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Partners</span>
    </h2>

    {/* Divider */}
    <div className="flex items-center gap-3 justify-center py-4">
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
    </div>

    <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto mb-12">
      Proudly supported by internationally recognized research and publication partners
    </p>

    {/* Logos Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">

      {/* NFFA */}
      <a href="https://www.nffa.eu" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300">
        <img
          src="/nffa.eu.png"
          alt="NFFA Research Infrastructure"
          className="h-16 object-contain grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-300"
        />
      </a>

      {/* HIAG / H2 */}
      <div className="hover:scale-105 transition duration-300">
        <img
          src="/hiag.jpg"
          alt="H2"
          className="h-16 object-contain grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-300"
        />
      </div>

      {/* Energies */}
      <a href="https://www.mdpi.com/journal/energies" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300">
        <img
          src="/energies_partnership-1-768x236.png"
          alt="Energies Journal"
          className="h-16 object-contain grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-300"
        />
      </a>

      {/* International Conference Alerts */}
      <a href="https://www.internationalconferencealerts.com" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300">
        <img
          src="/international-conference-alerts-logo-768x249.jpg"
          alt="International Conference Alerts"
          className="h-16 object-contain grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-300"
        />
      </a>

      {/* Physics */}
      <a href="https://www.mdpi.com/journal/physics" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300">
        <img
          src="/Physics-logo-768x238.png"
          alt="Physics Journal"
          className="h-16 object-contain grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-300"
        />
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

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>

    </div>
  );
}
