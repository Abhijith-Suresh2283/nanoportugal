import SEO from "./SEO";

export default function AccommodationPage() {
  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 flex flex-col">
      
      <SEO 
        title="Accommodation & Hotels" 
        description="Accommodation details for ANM 2026 in Aveiro, Portugal"
        keywords="ANM 2026 hotels, Aveiro accommodation"
        path="/accommodation"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-fuchsia-200/20 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">

          {/* Icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-violet-700 font-semibold">
              Accommodation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">
            Hotels in Aveiro
          </h1>

          {/* ================= CONTENT CARD ================= */}
          <div className="mt-10 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-violet-100/50 overflow-hidden">

            <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />

            <div className="p-8 sm:p-10 space-y-6 text-left text-sm sm:text-base text-gray-700 leading-relaxed">

              <p>
                Please note that July is a very busy touristic season in Aveiro. Therefore, we urge all participants to book their accommodation well in advance to the date of the conference.
              </p>

              <p><strong>1ˢᵗ option:</strong></p>

             <p>
              You may book through{" "}
              <a
                href="https://www.congressospco.abreu.pt/CongressHotel/Auth/Login/NjQ2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 underline hover:text-violet-800"
              >
                Abreu Events hotel reservation online system
              </a>{" "}
              to benefit from:
            </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>the best rates for a wide variety of hotels.</li>
                <li>easy and secure booking and payments.</li>
                <li>
                  by clicking on the button above, you will be able to select the desired dates, and you will have different units available and dynamic prices.
                </li>
              </ul>

              <p>
                Reservation and payment are made directly online, where a confirmation email will be sent with the payment receipt and an email with the corresponding voucher.
              </p>

              <p>
                Most of the selected hotels are within walking distance to the Congress venue. Rates do not include city tax, which is paid directly at the hotel during check-in.
              </p>

              <p><strong>2nd option:</strong></p>

              <p>
                Special rate hotels are also available, and it can be booked through the registration form using your credentials.
              </p>

              <p>
                Kindly find below the rates per room, per night for the hotels available via the registration form.
              </p>

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                  <thead className="bg-violet-100">
                    <tr>
                      <th className="p-3 text-left"> </th>
                      <th className="p-3 text-left">Hotel Afonso V</th>
                      <th className="p-3 text-left">Mélia Ria Hotel & Spa</th>
                      <th className="p-3 text-left">Veneza Hotel Aveiro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Single Room B&B (per room and per night)</td>
                      <td className="p-3">72.00€</td>
                      <td className="p-3">125.00€</td>
                      <td className="p-3">88.00</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Double Room B&B (per room and per night)</td>
                      <td className="p-3">99.00€</td>
                      <td className="p-3">142.00€</td>
                      <td className="p-3">110.00€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>City tax not included.</p>

            </div>
          </div>

          {/* CONTACT */}
          <div className="pt-6">
            <a
              href="mailto:lurdes.catalino@abreu.pt"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:scale-105 transition"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 text-center border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <p className="text-xs opacity-60">All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}