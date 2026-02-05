export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          
          {/* Main Text Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Authors who have presented their work at ANM2026 can send their manuscripts as a pdf file to{" "}
              <a 
                href="mailto:info@anmportugal.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                info@anmportugal.com
              </a>{" "}
              for the first review by 30 September 2026. Authors can choose the journals as mentioned on the publication page and prepare the manuscript according to the journal format.
            </p>

            {/* Email Subject Line */}
            <p className="text-gray-900 font-semibold mb-6">
              The email subject should be Manuscript – journal name
            </p>

            {/* Special Issues Section */}
            <div className="mb-4">
              <p className="text-gray-900 font-semibold mb-4">Special issues:</p>
              
              <div className="space-y-3 text-gray-700">
                {/* Journal 1 */}
                <p className="leading-relaxed">
                  1. International Journal of Hydrogen Energy (
                  <a 
                    href="http://www.journals.elsevier.com/international-journal-of-hydrogen-energy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    http://www.journals.elsevier.com/international-journal-of-hydrogen-energy/
                  </a>
                  ) – Special issue name- ANM2026
                </p>

                {/* Journal 2 */}
                <p className="leading-relaxed">
                  2. Energy Storage (Wiley){" "}
                  <a 
                    href="https://onlinelibrary.wiley.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://onlinelibrary.wiley.com/
                  </a>
                  - Special Issue ANM2026
                </p>

                {/* Journal 3 */}
                <p className="leading-relaxed">
                  3. Nanomaterials (mdpi) –
                </p>
                <p className="leading-relaxed pl-4">
                  <a 
                    href="https://www.mdpi.com/journal/nanomaterials/special_issues/X25N29R5H7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    https://www.mdpi.com/journal/nanomaterials/special_issues/X25N29R5H7
                  </a>
                </p>

                {/* Journal 4 */}
                <p className="leading-relaxed">
                  4. Nanoenergy Advances (mdpi)-
                </p>
                <p className="leading-relaxed pl-4">
                  <a 
                    href="https://www.mdpi.com/journal/nanoenergyadv/special_issues/0309978TA4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    https://www.mdpi.com/journal/nanoenergyadv/special_issues/0309978TA4
                  </a>
                </p>

                {/* Journal 5 */}
                <p className="leading-relaxed">
                  5. Materials Proceedings (mdpi) –{" "}
                  <a 
                    href="https://www.mdpi.com/journal/materproc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://www.mdpi.com/journal/materproc
                  </a>
                  {" "}– The extended abstract up to 4 pages will be accepted from all authors who have presented their work.
                </p>

                {/* Journal 6 */}
                <p className="leading-relaxed">
                  6. Condensed matter (mdpi)- selected papers in regular issue
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-600">
            © 2026 ANM Portugal. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}