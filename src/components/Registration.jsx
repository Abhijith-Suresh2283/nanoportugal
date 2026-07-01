import SEO from "./SEO";
export default function RegistrationPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <SEO 
        title="Registration Fees & Online Booking" 
        description="Register for the ANM 2026 Nanomaterials Conference. View registration fees for academics, students, and industry professionals. Early bird discounts available until Feb 28, 2026."
        keywords="ANM 2026 registration, conference fees Portugal, student discount nanotechnology, early bird registration science, Abreu Events registration"
        path="/registration"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6 sm:space-y-8">

        {/* Registration Info */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">ANM2026 Conference Registration can be done via </span>
            <a 
              href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold hover:underline break-words"
            >
              Online Registration
            </a>
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
          <p className="font-semibold text-sm sm:text-base">
            Should you need any kind of assistance while registering online, please contact:
          </p>

          <div className="space-y-3">
            <p className="font-semibold text-sm sm:text-base">Lurdes Catalino</p>
            
            <div className="space-y-1 text-gray-700 text-sm sm:text-base">
              <p>Abreu Events</p>
              <p>Oporto Office</p>
              <p>Praça Trindade 146, 4000-539 Porto</p>
              <p className="pt-2">Tel: +351 965 101 393</p>
              <p className="break-words">Email: lurdes.catalino@abreu.pt</p>
              <p className="break-words">info@anmportugal.com</p>
            </div>
          </div>
        </div>

        {/* Registration Fee Details */}
        <div className="pt-6 sm:pt-8">
          <p className="font-semibold text-[#000080] text-sm sm:text-base mb-4 sm:mb-6">
            The registration fee details are as follows:
          </p>

          {/* Fees Table - Desktop */}
          <div className="hidden md:block border border-gray-300 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left p-3 font-semibold border-r border-gray-300 text-sm">Category</th>
                  <th className="text-left p-3 font-semibold border-r border-gray-300 text-sm">
                    <div>Normal registration (Euros)</div>
                  </th>
                  <th className="text-left p-3 font-semibold text-sm">
                    <div>Late registration (Euros)</div>
                  </th>
                </tr>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <th className="text-left p-3 font-normal border-r border-gray-300 text-sm"></th>
                  <th className="text-left p-3 font-normal border-r border-gray-300 text-sm">Until 31 May 2026</th>
                  <th className="text-left p-3 font-normal text-sm">Until 15 July 2026</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Academics","800", "900"],
                  ["Post Docs","700", "800"],
                  ["Students (PhD scholars, graduates & under graduates)", "500", "550"],
                  ["Industry","1500", "2000"],
                  ["Accompanying Person","400", "450"],
                  ["Virtual Presentation (Oral or Poster)", "400", "450"]
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="p-3 border-r border-gray-300 text-sm">{row[0]}</td>
                    <td className="p-3 border-r border-gray-300 text-sm">{row[1]}</td>
                    <td className="p-3 border-r border-gray-300 text-sm">{row[2]}</td>
                  </tr>
                ))}
                {/* Projects & Collaboration - flat fee, no deadline (spans both fee columns) */}
                <tr className="border-b border-gray-300 bg-blue-50/50">
                  <td className="p-3 border-r border-gray-300 text-sm font-semibold">Projects &amp; Collaboration</td>
                  <td className="p-3 text-sm" colSpan={2}>
                    <span className="font-semibold">1000 Euros</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fees Cards - Mobile */}
          <div className="md:hidden space-y-4">
            {[
              ["Academics","800", "900"],
                  ["Post Docs","700", "800"],
                  ["Students (PhD scholars, graduates & under graduates)", "500", "550"],
                  ["Industry","1500", "2000"],
                  ["Accompanying Person","400", "450"],
                  ["Virtual Presentation (Oral or Poster)", "400", "450"]
            ].map((row, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg space-y-3">
                <p className="font-semibold text-sm text-gray-900">{row[0]}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Normal (Until 31 Mar 2026):</span>
                    <span className="font-semibold">€{row[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late (Until 30 Jun 2026):</span>
                    <span className="font-semibold">€{row[2]}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Projects & Collaboration - flat fee, no deadline */}
            <div className="border border-gray-300 p-4 rounded-lg space-y-3 bg-blue-50/50">
              <p className="font-semibold text-sm text-gray-900">Projects &amp; Collaboration</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Flat fee (No deadline):</span>
                  <span className="font-semibold">€1000</span>
                </div>
                <p className="text-gray-600 italic text-xs">This category has no early or late deadline — the fee applies anytime.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Participation */}
        <div className="pt-6 sm:pt-8">
          <p className="font-semibold text-[#000080] text-sm sm:text-base mb-3 sm:mb-4">
            Registration fee for Physical participation includes:
          </p>
          <ul className="space-y-2 ml-4 sm:ml-6">
            {[
              "Access to all the conference sessions",
              "Conference materials including program Book and Online abstract book",
              "Publications in journal",
              "Publications in Proceedings",
              "Lunch",
              "Banquet",
              "Participation certificate"
            ].map((item, i) => (
              <li key={i} className="list-disc text-gray-900 text-sm sm:text-base">{item}</li>
            ))}
          </ul>
        </div>

        {/* Virtual Participation */}
        <div className="pt-4 sm:pt-6">
          <p className="font-semibold text-[#000080] text-sm sm:text-base mb-3 sm:mb-4">
            Registration fee for Virtual (Oral/Poster) presentation
          </p>
          <ul className="space-y-2 ml-4 sm:ml-6">
            {[
              "Publications in journal",
              "Publications in Proceedings",
              "Online abstract book",
              "Participation Certificate"
            ].map((item, i) => (
              <li key={i} className="list-disc text-gray-900 text-sm sm:text-base">{item}</li>
            ))}
          </ul>
        </div>

        {/* Accompanying Person */}
        <div className="pt-4 sm:pt-6">
          <p className="font-semibold text-[#000080] text-sm sm:text-base mb-3 sm:mb-4">
            Registration fee for Accompanying Person
          </p>
          <ul className="space-y-2 ml-4 sm:ml-6">
            <li className="list-disc text-gray-900 text-sm sm:text-base">Lunch</li>
          </ul>
        </div>

        {/* Payment Information */}
        <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-6">
          <p className="font-semibold text-sm sm:text-base">
            Payment will be available by credit card and bank transfer:
          </p>

          <div className="space-y-4 sm:space-y-6 ml-4 sm:ml-6">
            {/* Credit Cards */}
            <div className="space-y-2">
              <p className="font-semibold text-sm sm:text-base">Credit cards</p>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                are accepted and can be made through the online services on a secured server. Service tax for payment by credit card will be charged, and it should be paid by the participants in addition to the fees. For security reasons, under no circumstances should credit card details be sent by email.
              </p>
            </div>

            {/* Bank Transfer */}
            <div className="space-y-2">
              <p className="font-semibold text-sm sm:text-base">Bank transfer</p>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                : Bank charges must be paid by the participants in addition to the registration fees.
              </p>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed pl-4">
                Please make sure to indicate the Congress name plus the full participant's name.
              </p>
            </div>

            {/* Proforma Invoice */}
            <div className="space-y-2">
              <p className="font-semibold text-sm sm:text-base">
                For each registration made and with payment selected by bank transfer, you will receive an automatic proforma invoice.
              </p>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed pl-4">
                Invoices with an address in the European Union should be provided with a VAT Number. The invoicing address and VAT number can only be set up during the registration process. Enter the desired billing address – you can either use your main contact information or use an alternative address (e.g., if your institution is funding your registration).
              </p>
            </div>

            {/* Proof of Enrollment */}
            <div className="space-y-2">
              <p className="font-semibold text-sm sm:text-base">Proof of enrollment for students</p>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed pl-4">
                For registration in student categories, the interested party must submit a supporting document that proves his/her current student status (proof of enrollment or declaration of the educational institution). The document must be added to your online registration form after you select the student fee category.
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Email */}
        <div className="pt-4 sm:pt-6">
          <p className="font-semibold text-sm sm:text-base leading-relaxed">
            Once your registration process is completed, you will receive an automatic e-mail confirming that your registration process was successfully completed.
          </p>
        </div>

        {/* Certificate */}
        <div className="pt-3 sm:pt-4 space-y-2 ml-4 sm:ml-6">
          <p className="font-semibold text-sm sm:text-base">Certificate of participation</p>
          <p className="text-gray-900 text-sm sm:text-base leading-relaxed pl-4">
            Certificates of participation are sent via e-mail to all participants.
          </p>
        </div>

        {/* Liability Waiver */}
        <div className="pt-4 sm:pt-6 space-y-2 ml-4 sm:ml-6">
          <p className="font-semibold text-sm sm:text-base">Liability Waiver</p>
          <p className="text-gray-900 text-sm sm:text-base leading-relaxed pl-4">
            The safety and well-being of our attendees is our top priority. The ANM2026 organizers are committed to providing a safe environment for the event and will make every reasonable effort to do so. However, as an attendee, you must fully understand and knowingly, voluntarily, and irrevocably assume all risks related to entry into, and presence in, at, and around the event venue(s), which may include an increased risk of exposure to communicable diseases. As an attendee, you accept personal responsibility for your voluntary participation in the event and assume all responsibility for claims and potential claims relating to any risks and hazards of attendance.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="pt-3 sm:pt-4 space-y-2 ml-4 sm:ml-6 pb-8">
          <p className="font-semibold text-sm sm:text-base">Privacy Policy</p>
          <p className="text-gray-900 text-sm sm:text-base leading-relaxed pl-4">
            Any personal data inserted in the registration form will be of sole use to the ANM2026 Congress.
          </p>
        </div>

      </div>
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
