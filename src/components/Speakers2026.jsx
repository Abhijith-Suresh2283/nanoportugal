// SpeakersPage.jsx
'use client';
import SEO from "./SEO";
import { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function SpeakersPage2026() {
  const [currentPage, setCurrentPage] = useState(1);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const speakersRef = useRef(null);
  const SPEAKERS_PER_PAGE = 21;

  useEffect(() => {
    async function fetchSpeakers() {
      const { data, error } = await supabase
        .from('speakers')
        .select('designation, name, institution, country, image, abstract')
        .eq('status', 'approved')
        .order('created_at', { ascending: true });

      if (error) setError(error.message);
      else setSpeakers(data || []);
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

      <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">Featured Speakers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Meet Our <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Distinguished</span> Speakers
          </h1>
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from world-renowned experts at the forefront of nanomaterials research
          </p>
        </div>
      </section>

      <section ref={speakersRef} className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentSpeakers.map((speaker, index) => (
                <div
                  key={startIndex + index}
                  className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
                  <div className="relative overflow-hidden">
                    <img src={speaker.image} alt={speaker.name}
  className="w-full aspect-[10/9] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 text-center space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                      {speaker.designation ? `${speaker.designation} ${speaker.name}` : speaker.name}
                    </h3>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                      <div className="w-1 h-1 rounded-full bg-violet-400" />
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start justify-center gap-2 text-sm text-gray-700 font-light">
                        <svg className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="leading-relaxed">{speaker.institution}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 font-light">
                        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{speaker.country}</span>
                      </div>
                    </div>
                    {speaker.abstract && speaker.abstract !== '#' && (
                      <a href={speaker.abstract} target="_blank" rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105">
                        View Abstract
                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
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
        
        <a  href="/speakers"
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