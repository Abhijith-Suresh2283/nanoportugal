export default function SponsorsAndExhibitorsPage() {
  return (
    <div className="bg-[#f7e3ff] min-h-screen text-gray-900 flex flex-col">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-light mb-4">
            Sponsors & Exhibitors
          </h1>
          <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
            Become a sponsor or exhibitor at ANM2026, one of the largest academic & industry
            gatherings in Energy, Nanomaterials, Graphene, Polymers and Magnetic Materials.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-20 space-y-16">

        {/* Sponsorship Details */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 space-y-10">

          <h2 className="text-xl sm:text-2xl font-light text-center">
            Sponsorship Details
          </h2>

          {/* Sponsorship Tiers */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Platinum */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-800">
                Platinum
              </h3>
              <p className="font-light leading-relaxed text-sm sm:text-base">
                The platinum sponsor program at ANM2026 allows the organizations to act as official
                conference sponsors. Being the platinum sponsors, they will have a sign board at the
                conference foyer and ample promotion on the conference website (Logo and details
                will appear in all pages) and in the program book. The sponsors will appear in all
                announcements.
              </p>
            </div>

            {/* Gold */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-800">
                Gold
              </h3>
              <p className="font-light leading-relaxed text-sm sm:text-base">
                The gold sponsor program allows promotions on the website. Being the platinum sponsors,
                they will have a sign board at the conference foyer and ample promotion on the
                conference website (Logo and details will appear in all pages) and in the program book.
              </p>
            </div>

            {/* Silver */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-800">
                Silver
              </h3>
              <p className="font-light leading-relaxed text-sm sm:text-base">
                The silver sponsor’s logo and details will appear in the link sponsors/exhibitors and in the program book.
              </p>
            </div>

            {/* Other Sponsors */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-800">
                Other Sponsors
              </h3>
              <p className="font-light leading-relaxed text-sm sm:text-base">
                Other sponsorships include conference bags, writing pad, pen, banquet, social events, coffee breaks.
              </p>
            </div>

          </div>
        </div>

        {/* Exhibitors Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-light text-center">
            Exhibitors
          </h2>

          <p className="font-light leading-relaxed text-sm sm:text-base">
            Exhibition space will be provided at the conference venue, with delegates from all conferences
            constantly passing through it. Exhibitors will also be promoted on the conference website with logo,
            details and will be listed in the program book.
          </p>
        </div>

        {/* Fees Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 space-y-8">

          <h2 className="text-xl sm:text-2xl font-light text-center">
            Fees
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base font-light">

            <div>Platinum Sponsor : 10000 Euros</div>
            <div>Gold Sponsor : 5000 Euros</div>
            <div>Silver Sponsor : 2000 Euros</div>
            <div>Other Sponsors : By negotiation</div>
            <div>Exhibitors : 3000 Euros</div>

          </div>

        </div>

        {/* Contact Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 text-center space-y-4">
          <p className="font-light text-sm sm:text-base leading-relaxed">
            For further information or discussion, contact us by e-mail:
          </p>

          <p className="text-violet-800 font-medium">
            info@anmportugal.com
          </p>

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Subject: SPONSORS/EXHIBITORS
          </p>
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
