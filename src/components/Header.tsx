import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES, type PageRoute } from '../data/siteData';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onStartConsultation: () => void;
}

export function Header({ currentPage, onNavigate, onStartConsultation }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServiceRoute = SERVICES.some((s) => s.route === currentPage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (page: PageRoute) => {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#1D2526]/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1D2526] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          OKC Uptown Cleaning
        </a>

        {/* Zone 2: Concise single-line desktop nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#1D2526]/80"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 ${
              currentPage === 'home'
                ? 'text-[#1D2526] border-[#B49A70]'
                : 'border-transparent hover:text-[#1D2526] hover:border-[#1D2526]/30'
            }`}
          >
            Home
          </a>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 cursor-pointer ${
                isServiceRoute
                  ? 'text-[#1D2526] border-[#B49A70]'
                  : 'border-transparent hover:text-[#1D2526] hover:border-[#1D2526]/30'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-80 bg-[#F8F7F3] border border-[#1D2526]/12 shadow-lg py-3 px-2"
              >
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick(service.route)}
                    className={`w-full text-left px-4 py-2.5 transition-colors cursor-pointer block ${
                      currentPage === service.route
                        ? 'bg-[#E9E6DF] text-[#1D2526]'
                        : 'text-[#1D2526]/85 hover:bg-[#E9E6DF]/60 hover:text-[#1D2526]'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-serif text-base font-medium text-[#1D2526]">
                        {service.title}
                      </span>
                      <span className="text-[11px] tabular-nums text-[#78817F] shrink-0">
                        {service.number}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A6260] mt-0.5 line-clamp-1">
                      {service.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('approach');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 ${
              currentPage === 'approach'
                ? 'text-[#1D2526] border-[#B49A70]'
                : 'border-transparent hover:text-[#1D2526] hover:border-[#1D2526]/30'
            }`}
          >
            Our Approach
          </a>

          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('reviews');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 ${
              currentPage === 'reviews'
                ? 'text-[#1D2526] border-[#B49A70]'
                : 'border-transparent hover:text-[#1D2526] hover:border-[#1D2526]/30'
            }`}
          >
            Reviews
          </a>

          <a
            href="#faqs"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('faqs');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 ${
              currentPage === 'faqs'
                ? 'text-[#1D2526] border-[#B49A70]'
                : 'border-transparent hover:text-[#1D2526] hover:border-[#1D2526]/30'
            }`}
          >
            FAQs
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 ${
              currentPage === 'contact'
                ? 'text-[#1D2526] border-[#B49A70]'
                : 'border-transparent hover:text-[#1D2526] hover:border-[#1D2526]/30'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onStartConsultation();
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-medium tracking-wide bg-[#1D2526] text-[#F8F7F3] hover:bg-[#3E5046] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
          >
            Request a Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#1D2526] hover:bg-[#E9E6DF] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F8F7F3] border-b border-[#1D2526]/15 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="px-5 py-6 space-y-6">
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => handleLinkClick('home')}
                className={`w-full text-left py-2.5 text-lg font-serif font-medium border-b border-[#1D2526]/8 cursor-pointer ${
                  currentPage === 'home' ? 'text-[#3E5046]' : 'text-[#1D2526]'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('approach')}
                className={`w-full text-left py-2.5 text-lg font-serif font-medium border-b border-[#1D2526]/8 cursor-pointer ${
                  currentPage === 'approach' ? 'text-[#3E5046]' : 'text-[#1D2526]'
                }`}
              >
                Our Approach
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('reviews')}
                className={`w-full text-left py-2.5 text-lg font-serif font-medium border-b border-[#1D2526]/8 cursor-pointer ${
                  currentPage === 'reviews' ? 'text-[#3E5046]' : 'text-[#1D2526]'
                }`}
              >
                Reviews
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('faqs')}
                className={`w-full text-left py-2.5 text-lg font-serif font-medium border-b border-[#1D2526]/8 cursor-pointer ${
                  currentPage === 'faqs' ? 'text-[#3E5046]' : 'text-[#1D2526]'
                }`}
              >
                FAQs
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className={`w-full text-left py-2.5 text-lg font-serif font-medium border-b border-[#1D2526]/8 cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#3E5046]' : 'text-[#1D2526]'
                }`}
              >
                Contact
              </button>
            </div>

            <div>
              <p className="text-xs font-medium tracking-wider text-[#5A6260] mb-2">
                Specialty Services
              </p>
              <div className="space-y-1">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleLinkClick(service.route)}
                    className={`w-full text-left py-2.5 flex items-baseline justify-between gap-4 border-b border-[#1D2526]/6 cursor-pointer ${
                      currentPage === service.route ? 'text-[#3E5046] font-medium' : 'text-[#1D2526]/90'
                    }`}
                  >
                    <span className="text-[15px]">{service.title}</span>
                    <span className="text-xs tabular-nums text-[#78817F]">{service.number}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onStartConsultation();
                }}
                className="w-full py-3.5 px-5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium tracking-wide hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
              >
                Request a Consultation
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full py-3 px-5 border border-[#1D2526]/20 text-[#1D2526] text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-[#E9E6DF] transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#3E5046]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
