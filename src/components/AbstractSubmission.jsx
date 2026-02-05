export default function AbstractSubmissionPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
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
        
        {/* Form Container */}
        <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-white border-b border-gray-200 px-6 sm:px-12 py-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-normal text-gray-900">
              ANM 2026 Abstract Submission
            </h2>
          </div>

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
              src="https://forms.zohopublic.eu/drelbytitus/form/ANM2026AbstractSubmission/formperma/XuubN5h5tvE8pjsPPEr1TgEtp7KwnUFoL1OYlxb88U0"
            />
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