export default function SponsorsAndExhibitorsPage() {
  const sponsorshipTiers = [
    {
      tier: "Platinum",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      description: "The platinum sponsor program at ANM2026 allows organizations to act as official conference sponsors. Platinum sponsors will have a sign board at the conference foyer and ample promotion on the conference website (Logo and details will appear in all pages) and in the program book. The sponsors will appear in all announcements.",
      benefits: ["Official Conference Sponsor", "Sign Board at Foyer", "Logo on All Website Pages", "Featured in Program Book", "All Conference Announcements"]
    },
    {
      tier: "Gold",
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      description: "The gold sponsor program allows promotions on the website. Gold sponsors will have a sign board at the conference foyer and ample promotion on the conference website (Logo and details will appear in all pages) and in the program book.",
      benefits: ["Sign Board at Foyer", "Website Promotions", "Logo on All Website Pages", "Featured in Program Book"]
    },
    {
      tier: "Silver",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      description: "The silver sponsor's logo and details will appear in the sponsors/exhibitors link and in the program book.",
      benefits: ["Logo on Sponsors Page", "Featured in Program Book", "Brand Visibility"]
    },
    {
      tier: "Other Sponsors",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      description: "Other sponsorships include conference bags, writing pad, pen, banquet, social events, coffee breaks.",
      benefits: ["Conference Bags", "Writing Materials", "Banquet Sponsorship", "Social Events", "Coffee Breaks"]
    }
  ];

  const fees = [
    { tier: "Platinum Sponsor", price: "€10,000", highlight: true },
    { tier: "Gold Sponsor", price: "€5,000" },
    { tier: "Silver Sponsor", price: "€2,000" },
    { tier: "Other Sponsors", price: "By Negotiation" },
    { tier: "Exhibitors", price: "€3,000" }
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Partnership Opportunities
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Sponsors & <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Exhibitors</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Become a sponsor or exhibitor at ANM2026, one of the largest academic & industry gatherings in Energy, Nanomaterials, Graphene, Polymers and Magnetic Materials
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

        {/* Sponsorship Tiers */}
        <div className="space-y-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">
              Sponsorship Opportunities
            </h2>
            <p className="text-gray-600 font-light">
              Choose the sponsorship tier that best fits your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sponsorshipTiers.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Decorative Top Border */}
                <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
                
                <div className="p-6 sm:p-8 space-y-4">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={sponsor.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                      {sponsor.tier}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
                    {sponsor.description}
                  </p>

                  {/* Benefits */}
                  <div className="pt-4 space-y-2">
                    <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Key Benefits:</p>
                    <ul className="space-y-2">
                      {sponsor.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-light text-gray-700">
                          <svg className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibitors Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                  Exhibition Opportunities
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
              Exhibition space will be provided at the conference venue, with delegates from all conferences constantly passing through it. Exhibitors will also be promoted on the conference website with logo, details and will be listed in the program book.
            </p>

            {/* Exhibition Benefits */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 space-y-3">
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Exhibition Includes:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Premium Exhibition Space",
                  "High Foot Traffic Location",
                  "Logo on Website",
                  "Program Book Listing",
                  "Direct Delegate Access",
                  "Brand Visibility"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-light text-gray-700">
                    <svg className="w-4 h-4 text-violet-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 space-y-8">
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
                Investment Options
              </h2>
            </div>

            <div className="grid gap-4">
              {fees.map((fee, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-5 rounded-xl transition-all duration-300 ${
                    fee.highlight
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gradient-to-br from-violet-50/50 to-purple-50/30 hover:shadow-md'
                  }`}
                >
                  <span className={`text-sm sm:text-base font-medium ${fee.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {fee.tier}
                  </span>
                  <span className={`text-lg sm:text-xl font-semibold ${fee.highlight ? 'text-white' : 'text-violet-600'}`}>
                    {fee.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-violet-50/50 border border-violet-200/50 rounded-xl p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-light text-gray-700">
                  All prices are in <span className="font-medium">Euros (€)</span>. Custom sponsorship packages are available upon request.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 text-center space-y-6">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mb-2">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Ready to Partner With Us?
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              For further information or to discuss custom sponsorship packages, contact us
            </p>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 space-y-3">
              <p className="text-sm font-light text-gray-700">
                Email us at:
              </p>
              <a href="mailto:info@anmportugal.com" className="text-xl sm:text-2xl font-medium text-violet-600 hover:text-violet-700 transition-colors">
                info@anmportugal.com
              </a>
              <p className="text-xs uppercase tracking-widest text-gray-500 pt-2">
                Subject: SPONSORS/EXHIBITORS
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="mailto:info@anmportugal.com?subject=SPONSORS/EXHIBITORS"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
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