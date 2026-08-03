import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import headerImageDesktop from "../assets/anm-header_bg.png";
import headerImageMobile from "../assets/mobile26.png";
import logo from "../assets/anm-logo.png";  

const MENU_ITEMS = [
  "Home",
  "About",
  "Program",
  "Abstract Submission",
  "Speakers",
  "Registration",
  "Deadlines",
  "Venue",
  "Publications",
  "Committees",
  "Sponsors & Exhibitors",
  "Accommodation",
  "Contact",
];

const MENU_ROUTES = {
  "Home": "/",
  "About": "/about",
  "Program": "/program",
  "Abstract Submission": "/abstract-submission",
  "Speakers": "/speakers",
  "Registration": "/registration",
  "Deadlines": "/deadlines",
  "Publications": "/publications",
  "Committees": "/committees",
  "Sponsors & Exhibitors": "/sponsors",
  "Accommodation": "/accommodation",
  "Contact": "/contact",
  "Venue": "/venue",
  "Travel": "/travel",
};

const VISIBLE_ITEMS_COUNT = 8;
const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_SCROLL_THRESHOLD = 120;
const MOBILE_SCROLL_THRESHOLD = 10;

const VENUE_SUBMENU = ["Venue", "Travel"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showVenueDropdown, setShowVenueDropdown] = useState(false);
  const [openVenueMobile, setOpenVenueMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Memoize menu splits to avoid recalculation
  const { visibleItems, overflowItems } = useMemo(
    () => ({
      visibleItems: MENU_ITEMS.slice(0, VISIBLE_ITEMS_COUNT),
      overflowItems: MENU_ITEMS.slice(VISIBLE_ITEMS_COUNT),
    }),
    []
  );

  // Navigation handler
  const handleNavigation = useCallback((item) => {
    const route = MENU_ROUTES[item];
    if (route) {
      navigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate]);

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
    const threshold = isDesktop ? DESKTOP_SCROLL_THRESHOLD : MOBILE_SCROLL_THRESHOLD;
    setScrolled(window.scrollY > threshold);
  }, []);

  // Close dropdowns when clicking outside
  const handleClickOutside = useCallback((e) => {
    if (showMore && !e.target.closest('[data-dropdown-container]')) {
      setShowMore(false);
    }
    if (showVenueDropdown && !e.target.closest('[data-venue-dropdown]')) {
      setShowVenueDropdown(false);
    }
  }, [showMore, showVenueDropdown]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (showMore || showVenueDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showMore, showVenueDropdown, handleClickOutside]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMoreMenu = useCallback(() => setShowMore((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
  }, []);
  const closeMoreMenu = useCallback(() => setShowMore(false), []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideOutRight {
          animation: slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.2s ease-out forwards;
        }

        .nav-link {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7, #8b5cf6);
          background-size: 200% 100%;
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }

        .nav-link:hover::before {
          animation: shimmer 2s linear infinite;
        }

        .nav-link:hover {
          color: #7c3aed;
        }

        .dropdown-item {
          position: relative;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #8b5cf6, #a855f7);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dropdown-item:hover::before {
          transform: scaleY(1);
          transform-origin: top;
        }

        .dropdown-item:hover {
          transform: translateX(4px);
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.08) 0%, transparent 100%);
        }

        .hamburger-menu-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger-menu-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 9999px;
        }

        .hamburger-menu-btn:hover::before {
          opacity: 1;
        }

        .hamburger-menu-btn:hover {
          transform: scale(1.05);
          color: #7c3aed;
        }

        .mobile-menu-item {
          position: relative;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 0.5rem;
        }

        .mobile-menu-item:hover::before {
          opacity: 1;
        }

        .mobile-menu-item::after {
          content: '';
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%) translateX(-10px);
          width: 4px;
          height: 4px;
          background: #8b5cf6;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mobile-menu-item:hover::after {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .mobile-menu-item:hover {
          padding-left: 24px;
        }

        .logo-hover {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo-hover:hover {
          transform: scale(1.08);
          filter: drop-shadow(0 4px 12px rgba(139, 92, 246, 0.25));
        }

        .mobile-toggle-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-toggle-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.08));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0.5rem;
        }

        .mobile-toggle-btn:hover::before {
          opacity: 1;
        }

        .mobile-toggle-btn:hover {
          transform: translateX(-2px);
          color: #7c3aed;
        }

        .menu-icon-dot {
          width: 4px;
          height: 4px;
          background: currentColor;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger-menu-btn:hover .menu-icon-dot:nth-child(1) {
          transform: translateX(-2px);
        }

        .hamburger-menu-btn:hover .menu-icon-dot:nth-child(2) {
          transform: scale(1.3);
        }

        .hamburger-menu-btn:hover .menu-icon-dot:nth-child(3) {
          transform: translateX(2px);
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gradient-border:hover::before {
          opacity: 0.6;
        }

        .close-btn {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .close-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0.5rem;
        }

        .close-btn:hover::before {
          opacity: 1;
        }

        .close-btn:hover {
          color: #dc2626;
          transform: rotate(90deg);
        }
      `}</style>

      {/* Header Image */}
      <div className="overflow-hidden">
        {/* Desktop Header Image */}
        <img
          src={headerImageDesktop}
          alt="ANM 2026 Conference Header"
          className="hidden sm:block w-full object-contain max-h-[120px]"
          loading="eager"
        />

        {/* Mobile Header Image */}
        <img
          src={headerImageMobile}
          alt="ANM 2026 Conference Header Mobile"
          className="block sm:hidden w-full object-contain max-h-[90px]"
          loading="eager"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/98 backdrop-blur-xl border-b border-violet-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center h-14 sm:h-16">
            {/* Logo Container */}
            <div className="flex items-center min-w-[80px] sm:min-w-[120px]">
              {scrolled && (
                <img
                  src={logo}
                  alt="ANM 2026 Logo"
                  className="logo-hover h-6 sm:h-8 object-contain cursor-pointer"
                  loading="lazy"
                  onClick={() => handleNavigation("Home")}
                />
              )}
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
              {visibleItems.map((item, index) => {
                // Check if this is the Venue item
                if (item === "Venue") {
                  return (
                    <li 
                      key={item} 
                      className="relative" 
                      data-venue-dropdown
                      style={{ animationDelay: `${index * 50}ms` }}
                      onMouseEnter={() => setShowVenueDropdown(true)}
                      onMouseLeave={() => setShowVenueDropdown(false)}
                    >
                      <button
                        className={`nav-link text-sm font-medium transition-colors duration-200 whitespace-nowrap py-2 px-1 ${
                          location.pathname === MENU_ROUTES["Venue"] || location.pathname === MENU_ROUTES["Travel"]
                            ? 'active text-violet-600'
                            : 'text-gray-700 hover:text-violet-600'
                        }`}
                        aria-label="Venue menu"
                        aria-expanded={showVenueDropdown}
                        aria-haspopup="true"
                      >
                        <span className="flex items-center gap-1">
                          {item}
                          <svg className={`w-3 h-3 transition-transform duration-200 ${showVenueDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      {showVenueDropdown && (
                        <div
                          className="absolute left-0 top-full pt-2 w-48 z-50"
                          role="menu"
                        >
                          <div className="bg-white/98 backdrop-blur-xl border border-violet-100 shadow-xl rounded-xl overflow-hidden animate-slideDown">
                            {VENUE_SUBMENU.map((subItem, subIndex) => (
                              <button
                                key={subItem}
                                className={`dropdown-item w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                                  location.pathname === MENU_ROUTES[subItem]
                                    ? 'text-violet-600 bg-violet-50/50'
                                    : 'text-gray-700 hover:text-violet-600'
                                }`}
                                onClick={() => {
                                  handleNavigation(subItem);
                                  setShowVenueDropdown(false);
                                }}
                                role="menuitem"
                                style={{ animationDelay: `${subIndex * 30}ms` }}
                              >
                                {subItem}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                // Regular menu items
                return (
                  <li key={item} style={{ animationDelay: `${index * 50}ms` }}>
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`nav-link text-sm font-medium transition-colors duration-200 whitespace-nowrap py-2 px-1 ${
                        location.pathname === MENU_ROUTES[item]
                          ? 'active text-violet-600'
                          : 'text-gray-700 hover:text-violet-600'
                      }`}
                      aria-label={`Navigate to ${item}`}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}

              {/* Overflow Menu */}
              {overflowItems.length > 0 && (
                <li className="relative" data-dropdown-container>
                  <button
                    onClick={toggleMoreMenu}
                    className="hamburger-menu-btn text-gray-700 hover:text-violet-600 transition-all duration-200 px-4 py-2 rounded-full font-medium text-sm"
                    aria-label="More menu options"
                    aria-expanded={showMore}
                    aria-haspopup="true"
                  >
                    <span className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <span className="menu-icon-dot"></span>
                        <span className="menu-icon-dot"></span>
                        <span className="menu-icon-dot"></span>
                      </span>
                      More
                    </span>
                  </button>

                  {showMore && (
                    <div
                      className="absolute right-0 mt-2 w-64 bg-white/98 backdrop-blur-xl border border-violet-100 shadow-xl rounded-xl overflow-hidden animate-slideDown"
                      role="menu"
                    >
                      {overflowItems.map((item, index) => (
                        <button
                          key={item}
                          className={`dropdown-item w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                            location.pathname === MENU_ROUTES[item]
                              ? 'text-violet-600 bg-violet-50/50'
                              : 'text-gray-700 hover:text-violet-600'
                          }`}
                          onClick={() => {
                            handleNavigation(item);
                            closeMoreMenu();
                          }}
                          role="menuitem"
                          style={{ animationDelay: `${index * 30}ms` }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              )}
            </ul>

            {/* Right Spacer (balances logo container) */}
            <div className="hidden lg:block min-w-[80px] sm:min-w-[120px]"></div>

            {/* Mobile Menu Toggle */}
            <div className="flex-1 lg:hidden flex justify-center">
              <button
                onClick={() => setOpen(true)}
                className="mobile-toggle-btn text-sm font-medium text-gray-700 hover:text-violet-600 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                aria-label="Open mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Menu  
              </button>
            </div>

            {/* Right Spacer for Mobile (balances logo container) */}
            <div className="lg:hidden min-w-[80px] sm:min-w-[120px]"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden ${
              isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
            }`}
            onClick={closeMobileMenu}
          />
          
          <div
            className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 z-50 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30 lg:hidden shadow-2xl flex flex-col ${
              isClosing ? 'animate-slideOutRight' : 'animate-slideInRight'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-violet-100 bg-white/80 backdrop-blur-xl flex-shrink-0">
              <img 
                src={logo} 
                alt="ANM Logo" 
                className="h-7 cursor-pointer transition-transform hover:scale-105" 
                loading="lazy"
                onClick={() => {
                  handleNavigation("Home");
                  closeMobileMenu();
                }}
              />
              <button
                onClick={closeMobileMenu}
                className="close-btn text-sm font-medium text-gray-700 hover:text-red-600 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                aria-label="Close mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="px-6 py-6 space-y-1.5 overflow-y-auto flex-1 scroll-smooth">
              {MENU_ITEMS.map((item, index) => {
                // Handle Venue item with submenu in mobile
                if (item === "Venue") {
                  return (
                    <div key={item}>
                      <button
                        onClick={() => setOpenVenueMobile(!openVenueMobile)}
                        className={`mobile-menu-item block w-full text-left text-base font-medium transition-all duration-300 px-4 py-3 rounded-lg ${
                          location.pathname === MENU_ROUTES["Venue"] || location.pathname === MENU_ROUTES["Travel"]
                            ? 'text-violet-600 bg-violet-50'
                            : 'text-gray-800 hover:text-violet-600 hover:bg-white/60'
                        }`}
                        style={{ animationDelay: `${index * 40}ms` }}
                      >
                        <span className="flex items-center justify-between">
                          {item}
                          <svg className={`w-4 h-4 transition-transform duration-200 ${openVenueMobile ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                      
                      {openVenueMobile && (
                        <div className="ml-4 mt-1.5 space-y-1">
                          {VENUE_SUBMENU.map((subItem) => (
                            <button
                              key={subItem}
                              onClick={() => {
                                handleNavigation(subItem);
                                closeMobileMenu();
                              }}
                              className={`mobile-menu-item block w-full text-left text-sm font-medium transition-all duration-300 px-4 py-2.5 rounded-lg ${
                                location.pathname === MENU_ROUTES[subItem]
                                  ? 'text-violet-600 bg-violet-50'
                                  : 'text-gray-700 hover:text-violet-600 hover:bg-white/60'
                              }`}
                            >
                              {subItem}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular menu items
                return (
                  <button
                    key={item}
                    onClick={() => {
                      handleNavigation(item);
                      closeMobileMenu();
                    }}
                    className={`mobile-menu-item block w-full text-left text-base font-medium transition-all duration-300 px-4 py-3 rounded-lg ${
                      location.pathname === MENU_ROUTES[item]
                        ? 'text-violet-600 bg-violet-50'
                        : 'text-gray-800 hover:text-violet-600 hover:bg-white/60'
                    }`}
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="px-6 py-4 border-t border-violet-100 bg-white/60 backdrop-blur-xl flex-shrink-0">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                <span className="font-light">ANM Portugal</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}