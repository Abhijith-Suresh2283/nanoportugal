import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function PhotoGalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  // 👇 Now we use thumb + full
  const galleryItems = [
    {
      title: "ANM 2022 - Aveiro",
      thumb: "/anm2022.jpg",
      full: "/anm2022.jpg"
    },
    {
      title: "ANM 2021 – Aveiro",
      thumb: "/anm2021.jpg",
      full: "/anm2021.jpg"
    },
    {
      title: "ANM 2019 – Aveiro",
      thumb: "/anm2019_small.jpg",
      full: "/ANM2019.jpg"
    },
    {
      title: "ANM 2018 – Aveiro",
      thumb: "/anm2018_small.jpg",
      full: "/ANM2018.jpg"
    },
  ];

  const handleImageLoad = (img) => {
    setLoadedImages((prev) => ({ ...prev, [img]: true }));
  };

  const handleLightboxLoad = () => {
    setLightboxLoaded(true);
  };

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryItems.findIndex(
      item => item.full === selectedImage.full
    );

    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex =
        (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }

    setLightboxLoaded(false);
    setSelectedImage(galleryItems[newIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigateImage('prev');
      else if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
  galleryItems.forEach((item) => {
    const img = new Image();
    img.src = item.full;
  });
}, []);

  return (
    <>
      {/* ================= GALLERY GRID ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            onClick={() => openLightbox(item)}
            className="group relative overflow-hidden rounded-2xl shadow-xl border border-violet-100/50 hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 z-10" />

            <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300">

              {/* Skeleton */}
              {!loadedImages[item.thumb] && (
                <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-gray-300 z-20">
                  <div className="w-10 h-10 border-4 border-violet-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={item.thumb}
                alt={item.title}
                loading="lazy"
                onLoad={() => handleImageLoad(item.thumb)}
                className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
                  loadedImages[item.thumb] ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <h3 className="text-xl font-light text-white tracking-wide group-hover:text-violet-200 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-px w-12 bg-gradient-to-r from-violet-400 to-transparent" />
                  <span className="text-sm text-violet-200">Click to view</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black backdrop-blur-sm animate-fadeIn"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-[10000000] text-white text-2xl"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-[10000000] text-white text-3xl"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-[10000000] text-white text-3xl"
            >
              ›
            </button>

            {/* Image Wrapper */}
            <div
              className="relative max-w-7xl mx-auto px-4 sm:px-20 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {!lightboxLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={selectedImage.full}
                alt={selectedImage.title}
                loading="eager"
                onLoad={handleLightboxLoad}
                className={`max-w-full max-h-[80vh] sm:max-h-[90vh] object-contain rounded-2xl shadow-2xl transition-opacity duration-500 ${
                  lightboxLoaded ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Mobile Title */}
              <div className="mt-6 text-center sm:hidden">
                <h3 className="text-xl font-light text-white tracking-wide mb-2">
                  {selectedImage.title}
                </h3>
              </div>

              {/* Desktop Overlay Title */}
              <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8 rounded-b-2xl">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 z-[10000000]">
              <p className="text-sm text-white font-light">
                {galleryItems.findIndex(item => item.full === selectedImage.full) + 1} / {galleryItems.length}
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
