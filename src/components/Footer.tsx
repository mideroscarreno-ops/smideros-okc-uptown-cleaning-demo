import { Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICES, type PageRoute } from '../data/siteData';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onStartConsultation: () => void;
}

export function Footer({ onNavigate, onStartConsultation }: FooterProps) {
  return (
    <footer className="bg-[#1D2526] text-[#F8F7F3] border-t border-[#F8F7F3]/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[#F8F7F3]/12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#F8F7F3]">
                {COMPANY_INFO.legalName}
              </p>
              <p className="text-sm text-[#B49A70] mt-2 font-serif italic text-lg">
                {COMPANY_INFO.tagline}
              </p>
            </div>
            <p className="text-sm text-[#F8F7F3]/75 leading-relaxed max-w-sm">
              Detail-driven residential deep cleaning, commercial environments, post-construction detailing, chandelier care, and pressure washing throughout Oklahoma City, Nichols Hills, and Edmond.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onStartConsultation}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-[#B49A70] text-[#1D2526] hover:bg-[#F8F7F3] transition-colors duration-150 cursor-pointer min-h-[44px]"
              >
                Request a Consultation
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#F8F7F3]">Specialty Services</h2>
            <ul className="space-y-2.5 text-sm text-[#F8F7F3]/75">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.route)}
                    className="hover:text-[#B49A70] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#F8F7F3]">Explore</h2>
            <ul className="space-y-2.5 text-sm text-[#F8F7F3]/75">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#B49A70] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('approach')}
                  className="hover:text-[#B49A70] transition-colors cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#B49A70] transition-colors cursor-pointer"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#B49A70] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#B49A70] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#F8F7F3]">Direct Contact</h2>
            <div className="space-y-3 text-sm text-[#F8F7F3]/80">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3 hover:text-[#B49A70] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#B49A70] shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY_INFO.emailHref}
                className="flex items-center gap-3 hover:text-[#B49A70] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#B49A70] shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 pt-1 text-[#F8F7F3]/75">
                <Clock className="w-4 h-4 text-[#B49A70] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-0.5 tabular-nums">
                  <p>{COMPANY_INFO.hoursPrimary}</p>
                  <p className="text-[#F8F7F3]/60">{COMPANY_INFO.hoursClosed}</p>
                </div>
              </div>
              <p className="text-xs text-[#F8F7F3]/60 pt-1">
                Oklahoma City · Nichols Hills · Edmond
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Redesign Disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F8F7F3]/65">
          <div className="space-y-1">
            <p>
              OKC Uptown Cleaning Services, LLC · Oklahoma City, Oklahoma · Licensed, Insured &amp; Bonded (Company-Published Claim)
            </p>
            <p className="text-[#B49A70]">
              Independent website redesign concept by S.Mideros Agency.
            </p>
          </div>
          <a
            href={COMPANY_INFO.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#F8F7F3]/75 hover:text-[#B49A70] transition-colors shrink-0"
          >
            <span>Original Business Site</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
