export default function CommitteesPage() {
  return (
    <div className="bg-[#f7e3ff] min-h-screen text-gray-900 flex flex-col">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-light mb-4">
            Committees
          </h1>
          <p className="text-gray-600 font-light text-sm sm:text-base">
            ANM 2026 – International Conference on Advanced Nanomaterials
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-20 space-y-16">

        {/* Organised By */}
        {/* Organised By - Featured Card */}
<div className="relative group">
  {/* Soft Lavender Glow */}
  <div className="absolute -inset-1 bg-gradient-to-r from-[#e9c8ff] to-[#f3d8ff] rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>

  {/* Glass Card */}
  <div className="relative bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 text-center border border-white/50">

    {/* Icon Container */}
    <div className="inline-block p-3 bg-[#f7e3ff] rounded-2xl mb-6">
      <svg
        className="w-8 h-8 text-violet-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    </div>

    <h2 className="text-xs sm:text-sm font-medium mb-3 tracking-widest uppercase text-violet-800/70">
      Organised By
    </h2>

    <p className="text-2xl sm:text-4xl font-light text-gray-900 tracking-tight">
      Abreu Events Portugal
    </p>

  </div>
</div>



        {/* Conference Chairs */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-light mb-6">
            Conference Chairs
          </h2>

          <ul className="space-y-4 text-sm sm:text-base font-light leading-relaxed">
            <li>Prof. João Campos Gil – University of Coimbra, Portugal</li>
            <li>Dr. Elby Titus – University of Aveiro, Portugal</li>
            <li>Prof. Luiz Fernando Ribeiro Pereira – University of Aveiro, Portugal</li>
            <li>Prof. João Pedro Araújo – University of Porto, Portugal</li>
            <li>Dr. João Ventura – University of Porto, Portugal</li>
            <li>Dr. Carmen M. Rangel – Laboratório Nacional de Energia e Geologia (LNEG), Portugal</li>
            <li>Professor Lijian Meng – Instituto Superior de Engenharia do Porto, Portugal</li>
          </ul>
        </div>

        {/* Organising Committee */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-light mb-6">
            Organising Committee
          </h2>

          <ul className="space-y-3 text-sm sm:text-base font-light leading-relaxed">
            <li>Ms. Lurde Catalino – Congress Department, Aberu, Portugal</li>
            <li>Dr. Estelina Da Silva – University of Porto, Portugal</li>
            <li>Dr. D. Pukazhselvan – University of Aveiro, Portugal</li>
            <li>Dr. Devaraj Ramasamy – INL, Portugal</li>
            <li>Dr. Olena Okhay – University of Aveiro, Portugal</li>
            <li>Dr. João Grilo – University of Aveiro, Portugal</li>
          </ul>
        </div>

        {/* Scientific Committee */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-light mb-6">
            Scientific Committee
          </h2>

          <ul className="space-y-3 text-sm sm:text-base font-light leading-relaxed break-words">
            <li>Prof. João Campos Gil – University of Coimbra, Portugal</li>
            <li>Dr. João Ventura – University of Porto, Portugal</li>
            <li>Prof. João Pedro Araújo – University of Porto, Portugal</li>
            <li>Dr. Yang Tao – University of Aveiro, Portugal</li>
            <li>Dr. D. Pukazhselvan – University of Aveiro, Portugal</li>
            <li>Prof. Lars Montelius – INL, Portugal</li>
            <li>Dr. Monica Craciun – University of Exeter, UK</li>
            <li>Prof. S. Ravi P. Silva – University of Surrey, UK</li>
            <li>Prof. Guillaume Maurin – Institute Charles Gerhardt Montpellier, France</li>
            <li>Prof. Frank Schwierz – Tech Univ Ilmenau, Germany</li>
            <li>Prof. Helge Weman – Norwegian University of Science and Technology, Norway</li>
            <li>Dr. Isabel Suelves – Instituto de Carboquímica, Spain</li>
            <li>Dr. Leonard Francis – INL, Portugal</li>
            <li>Dr. Dagou Zeze – Durham University, UK</li>
            <li>Dr. Abhishek K. Singh – IISc, India</li>
            <li>Prof. Nazanin Emami – Luleå University of Technology, Sweden</li>
            <li>Dr. Dmitri Petrovykh – INL, Portugal</li>
            <li>Prof. Maharaj Tomar – University of Puerto Rico, Mayagüez</li>
            <li>Prof. Yanglong Hou – Office of Scientific Research, Peking University, China</li>
            <li>Dr. Michele Iafisco – CNR – Institute of Science and Technology for Ceramics, Italy</li>
            <li>Dr. Bin Zhu – Department of Energy Technology, KTH, Sweden</li>
            <li>Dr. Jian-Guo Zhang – Beijing Institute of Technology, China</li>
            <li>Dr. Qingshan Mu – University of Texas, USA</li>
            <li>Prof. P.K. Giri – Indian Institute of Technology Guwahati, India</li>
            <li>Prof. Suddhasatwa Basu – Indian Institute of Technology, India</li>
            <li>Prof. Sang Ouk Kim – KAIST, Republic of Korea</li>
            <li>Dr. Satish Tailor – National University of Science and Technology, Russia</li>
            <li>Dr. Manoj Singh – Maharishi Markandeshwar University (MMU), India</li>
            <li>Dr. K. K Nagaraja – Manipal Institute of Technology, India</li>
            <li>Prof. Belkhir Negrou – Kasdi Merbah University Ouargla, Algeria</li>
            <li>Prof. Lijian Meng – Instituto Superior de Engenharia do Porto, Portugal</li>
            <li>Prof. Patrick Da Costa – Sorbonne University, France</li>
            <li>Dr. Roya Dastjerdi – Yazd University, Iran</li>
            <li>Dr. Huamin Li – University at Buffalo, USA</li>
            <li>Dr. Rahul Bhosale – University of Tennessee at Chattanooga, USA</li>
          </ul>
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
