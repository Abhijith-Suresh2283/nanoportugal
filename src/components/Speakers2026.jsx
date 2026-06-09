// SpeakersPage.jsx
'use client';
import SEO from "./SEO";
import { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

// Display order for categories: plenary first, then keynote, then normal.
const CATEGORY_ORDER = { plenary: 0, keynote: 1, normal: 2 };

export default function SpeakersPage2026() {
  const [currentPage, setCurrentPage] = useState(1);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const speakersRef = useRef(null);
  const SPEAKERS_PER_PAGE = 28; // 4 columns × 7 rows

  useEffect(() => {
    async function fetchSpeakers() {
      const { data, error } = await supabase
        .from('speakers')
        .select('designation, name, institution, country, image, abstract, category, plenary_rank')
        .eq('status', 'approved')
        .order('created_at', { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        // Sort by category (plenary -> keynote -> normal). Within plenary, order by
        // plenary_rank (1..5, unranked last). Other groups keep created_at order.
        const sorted = (data || []).slice().sort((a, b) => {
          const ra = CATEGORY_ORDER[a.category] ?? CATEGORY_ORDER.normal;
          const rb = CATEGORY_ORDER[b.category] ?? CATEGORY_ORDER.normal;
          if (ra !== rb) return ra - rb;
          if (a.category === 'plenary') {
            const pa = a.plenary_rank ?? Infinity;
            const pb = b.plenary_rank ?? Infinity;
            return pa - pb;
          }
          return 0; // keep created_at order for keynote/normal
        });
        setSpeakers(sorted);
      }
      setLoading(false);
    }
    fetchSpeakers();
  }, []);

  const totalPages = Math.ceil(speakers.length / SPEAKERS_PER_PAGE);
  const startIndex = (currentPage - 1) * SPEAKERS_PER_PAGE;
  const endIndex = startIndex + SPEAKERS_PER_PAGE;
  const currentSpeakers = speakers.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    if (speakersRef.current) {
      window.scrollTo({ top: speakersRef.current.offsetTop - 100, behavior: 'smooth' });
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(p => p + 1);
      setTimeout(() => {
        if (speakersRef.current) window.scrollTo({ top: speakersRef.current.offsetTop - 100, behavior: 'smooth' });
      }, 0);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(p => p - 1);
      setTimeout(() => {
        if (speakersRef.current) window.scrollTo({ top: speakersRef.current.offsetTop - 100, behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 overflow-x-hidden">
      <SEO
        title="Keynote & Invited Speakers"
        description="Meet the distinguished speakers for the ANM 2026 Nanomaterials Conference."
        keywords="ANM 2026 speakers, nanotechnology experts, nanomaterials keynote speakers"
        path="/speakers"
      />


      <section ref={speakersRef} className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 overflow-hidden">  
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">Speakers 2026</h2>
          <p className="text-gray-600 font-light text-sm sm:text-base">Leading voices shaping the future of advanced nanomaterials</p>
        </div>

        {loading && <p className="text-center text-gray-600 py-20">Loading speakers…</p>}
        {error && <p className="text-center text-red-500 py-20">Failed to load speakers: {error}</p>}
        {!loading && !error && speakers.length === 0 && (
          <p className="text-center text-gray-600 py-20"></p>
        )}

        {!loading && !error && speakers.length > 0 && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentSpeakers.map((speaker, index) => (
                <div
                  key={startIndex + index}
                  className="max-w-xs mx-auto w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img src={speaker.image} alt={speaker.name}
                      className="w-full aspect-[10/9] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5 text-center space-y-1">
                    {/* Name — red bold, with category suffix */}
                    <h3 className="text-lg font-bold text-red-600">
                      {speaker.designation ? `${speaker.designation} ${speaker.name}` : speaker.name}
                      {speaker.category === 'plenary' && ' (Plenary)'}
                      {speaker.category === 'keynote' && ' (Keynote)'}
                    </h3>

                    {/* Institution — black bold */}
                    <p className="text-base font-bold text-gray-900 leading-snug">
                      {speaker.institution}
                    </p>

                    {/* Country — black bold */}
                    <p className="text-base font-bold text-gray-900">
                      {speaker.country}
                    </p>

                    {/* Abstract — blue link */}
                    {speaker.abstract && speaker.abstract !== '#' && (
                      <a href={speaker.abstract}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-base font-bold text-blue-800 hover:underline"
                      >
                        Abstract
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                <button onClick={prevPage} disabled={currentPage === 1}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white/90 backdrop-blur-xl border border-violet-100/50 text-violet-600 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-200/50 hover:-translate-x-1'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  <span className="font-medium">Previous</span>
                </button>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button key={page} onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${currentPage === page ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg scale-110' : 'bg-white/90 backdrop-blur-xl border border-violet-100/50 text-violet-600 hover:bg-violet-50'}`}>
                      {page}
                    </button>
                  ))}
                </div>
                <button onClick={nextPage} disabled={currentPage === totalPages}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white/90 backdrop-blur-xl border border-violet-100/50 text-violet-600 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-200/50 hover:translate-x-1'}`}>
                  <span className="font-medium">Next</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
            {totalPages > 1 && (
              <div className="text-center pt-4">
                <p className="text-sm font-light text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, speakers.length)} of {speakers.length} speakers
                </p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ================= VIEW 2025 SPEAKERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 text-center">
        <a href="/speakers2025"
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105 group"
        >
          View 2025 Speakers
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </section>
    </div>
  );
}