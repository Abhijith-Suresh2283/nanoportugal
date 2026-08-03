import SEO from "./SEO";
export default function AbstractSubmissionPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
        <SEO 
        title="Abstract Submission" 
        description="Official abstract submission portal for the 2026 Nanomaterials Conference (ANM). Download the template and submit your research on energy and advanced materials."
        keywords="ANM 2026 abstract submission, call for papers nanotechnology 2026, nanomaterials submission portal, Aveiro Portugal conference"
        path="/abstract-submission"
      />

      {/* ================= PAGE HEADER ================= */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-lg sm:text-2xl font-light text-gray-800 mb-6">
            Abstract Submission
          </h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Please submit your abstract below using this{" "}
            <a 
              href="/ANM2026-abstract-template-new.doc" 
              download
              className="text-red-600 font-medium hover:underline"
            >
              template
            </a>
            . The abstract should be limited to 1 page in pdf format
          </p>
        </div>
      </section>

      {/* ================= SUBMISSION FORM ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        {/* 3. VISUALLY HIDDEN SEO DATA (Crucial for iframe pages) */}
        <div className="sr-only">
          <h2>Nanomaterials Conference 2026 Call for Papers</h2>
          <p>Submission categories: Keynote, Invited, Oral, and Poster presentations.</p>
          <p>Scientific tracks: Graphene, Carbon Nanotubes, Energy Materials, and Polymer Nanocomposites.</p>
        </div>
        
        {/* Form Container */}
        <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Embedded Zoho Form */}
          <div className="p-4 sm:p-8">
            <iframe
              aria-label="ANM2026 Abstract Submission"
              frameBorder="0"
              style={{
                height: '1400px',
                width: '100%',
                border: 'none',
                backgroundColor: 'transparent'
              }}
              src="https://forms.zohopublic.eu/drelbytitus/form/ANM2027AbstractSubmission/formperma/qEBR_DFTWhrDp1lqdquY5MOAP_RbyP0u29-29P6eTpA"
            />
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