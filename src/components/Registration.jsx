export default function RegistrationPage() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Secure Your Spot
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Conference <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Registration</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Join us at ANM 2026 – Register online today
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

        {/* ================= REGISTRATION INFO ================= */}
        <section className="space-y-6 overflow-hidden">
          
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
            
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
            
            <div className="p-8 sm:p-12 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                    Registration Information
                  </h2>
                  <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                    <p>
                      ANM2026 Conference Registration can be done via <a href="https://www.congressospco.abreu.pt/ANM2026-41875.aspx" className="font-medium text-violet-600">Online Registration</a>.
                    </p>
                    <p>
                      Should you need any assistance while registering online, please contact:
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="font-medium text-gray-900">Contact Person</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="font-medium text-violet-700">Lurdes Catalino</p>
                    <p className="font-light text-gray-700">Abreu Events – Oporto Office</p>
                    <p className="font-light text-gray-600">Praça Trindade 146, 4000-539 Porto</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-light">+351 965 101 393</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-light">lurdes.catalino@abreu.pt</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-light">info@anmportugal.com</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= REGISTRATION FEES TABLE ================= */}
        <section className="overflow-hidden">
          
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
                  Registration Fees
                </h2>
              </div>

              {/* Table */}
              <div className="w-full">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden rounded-xl border border-violet-100">
                    <table className="w-full table-fixed divide-y divide-violet-100">

                      <thead className="bg-gradient-to-r from-violet-50 to-purple-50">
                        <tr>
                          <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-900 w-[40%]">

                            Category
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-sm font-semibold text-gray-900">
                            <div>Early Bird</div>
                            <div className="text-xs font-light text-violet-600 mt-1">
                              Until 28 Feb 2026
                            </div>
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-sm font-semibold text-gray-900">
                            <div>Normal</div>
                            <div className="text-xs font-light text-violet-600 mt-1">
                              Until 31 Mar 2026
                            </div>
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-sm font-semibold text-gray-900">
                            <div>Late</div>
                            <div className="text-xs font-light text-violet-600 mt-1">
                              Until 30 Jun 2026
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-violet-50">
                        {[
                          ["Academics", "700", "800", "900"],
                          ["Post Docs", "600", "700", "800"],
                          ["Students", "450", "500", "550"],
                          ["Industry", "1000", "1500", "2000"],
                          ["Accompanying Person", "350", "400", "450"],
                          ["Virtual Presentation", "350", "400", "450"],
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-violet-50/50 transition-colors duration-200">
                           <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 break-words w-[40%]">
                              {row[0]}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-center text-sm font-semibold text-violet-600">
                              €{row[1]}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-center text-sm font-semibold text-gray-700">
                              €{row[2]}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-center text-sm font-medium text-gray-600">
                              €{row[3]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-violet-50/50 border border-violet-200/50 rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-light text-gray-700">
                    All fees are in <span className="font-medium">Euros (€)</span>. Early bird rates offer the best value – register soon to save!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FEE INCLUDES ================= */}
<section className="space-y-8 overflow-hidden">
  
  <div className="text-center">
    <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">
      What's Included
    </h2>
    <p className="text-gray-600 font-light">
      Your registration includes comprehensive conference benefits
    </p>
  </div>
  
  <div className="space-y-6">
    {/* Physical Participation */}
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-400 to-purple-500 px-8 py-5">
        <h3 className="text-xl font-medium text-white">
          Registration fee for Physical participation includes:
        </h3>
      </div>
      
      <div className="p-8">
        <ul className="space-y-3">
          {[
            "Access to all the conference sessions",
            "Conference materials including program Book and Online abstract book",
            "Publications in journal",
            "Publications in Proceedings",
            "Lunch",
            "Participation certificate"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-light text-gray-700">
              <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Virtual Participation */}
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-400 to-purple-500 px-8 py-5">
        <h3 className="text-xl font-medium text-white">
          Registration fee for Virtual (Oral/Poster) presentation
        </h3>
      </div>
      
      <div className="p-8">
        <ul className="space-y-3">
          {[
            "Publications in journal",
            "Publications in Proceedings",
            "Online abstract book",
            "Participation Certificate"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-light text-gray-700">
              <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Accompanying Person */}
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-400 to-purple-500 px-8 py-5">
        <h3 className="text-xl font-medium text-white">
          Registration fee for Accompanying Person
        </h3>
      </div>
      
      <div className="p-8">
        <ul className="space-y-3">
          {[
            "Lunch"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-light text-gray-700">
              <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

        {/* ================= PAYMENT INFO ================= */}
<section className="overflow-hidden">
  
  <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
    
    {/* Decorative Top Border */}
    <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
    
    <div className="p-8 sm:p-12 space-y-8">
      
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
          <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
          Payment Information
        </h2>
      </div>

      <div className="space-y-6">
        
        {/* Payment Methods */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-900">
            Payment will be available by credit card and bank transfer:
          </h3>
          
          <div className="space-y-4 pl-4 border-l-2 border-violet-200">
            
            {/* Credit Cards */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900">Credit cards</p>
              <p className="text-sm font-light text-gray-700 leading-relaxed">
                are accepted and can be made through the online services on a secured server. Service tax for payment by credit card will be charged, and it should be paid by the participants in addition to the fees. For security reasons, under no circumstances should credit card details be sent by email.
              </p>
            </div>

            {/* Bank Transfer */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900">Bank transfer</p>
              <p className="text-sm font-light text-gray-700 leading-relaxed">
                : Bank charges must be paid by the participants in addition to the registration fees.
              </p>
              <p className="text-sm font-light text-gray-700 leading-relaxed">
                Please make sure to indicate the Congress name plus the full participant's name.
              </p>
            </div>

          </div>
        </div>

        {/* Proforma Invoice */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            For each registration made and with payment selected by bank transfer, you will receive an automatic proforma invoice.
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
            Invoices with an address in the European Union should be provided with a VAT Number. The invoicing address and VAT number can only be set up during the registration process. Enter the desired billing address – you can either use your main contact information or use an alternative address (e.g., if your institution is funding your registration).
          </p>
        </div>

        {/* Proof of Enrollment */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            Proof of enrollment for students
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
            For registration in student categories, the interested party must submit a supporting document that proves his/her current student status (proof of enrollment or declaration of the educational institution). The document must be added to your online registration form after you select the student fee category.
          </p>
        </div>

        {/* Confirmation Email */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-200/50 rounded-xl p-5">
          <p className="text-sm font-semibold text-gray-900 text-center">
            Once your registration process is completed, you will receive an automatic e-mail confirming that your registration process was successfully completed.
          </p>
        </div>

        {/* Certificate of Participation */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            Certificate of participation
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
            Certificates of participation are sent via e-mail to all participants.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

{/* ================= LIABILITY & PRIVACY ================= */}
<section className="overflow-hidden">
  
  <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
    
    {/* Decorative Top Border */}
    <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
    
    <div className="p-8 sm:p-12 space-y-8">
      
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
          <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
          Liability & Privacy
        </h2>
      </div>

      <div className="space-y-6">
        
        {/* Liability Waiver */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            Liability Waiver
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
            The safety and well-being of our attendees is our top priority. The ANM2026 organizers are committed to providing a safe environment for the event and will make every reasonable effort to do so. However, as an attendee, you must fully understand and knowingly, voluntarily, and irrevocably assume all risks related to entry into, and presence in, at, and around the event venue(s), which may include an increased risk of exposure to communicable diseases. As an attendee, you accept personal responsibility for your voluntary participation in the event and assume all responsibility for claims and potential claims relating to any risks and hazards of attendance.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            Privacy Policy
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed pl-4">
            Any personal data inserted in the registration form will be of sole use to the ANM2026 Congress.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

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