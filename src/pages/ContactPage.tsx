import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, type ProjectCategory } from '../data/siteData';

interface ContactPageProps {
  onRequestQuote: (category?: ProjectCategory, service?: string) => void;
}

export function ContactPage({ onRequestQuote }: ContactPageProps) {
  return (
    <div className="bg-[#F8F7F3] text-[#1D2526]">
      <section className="py-16 lg:py-24 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-6">
          <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
            Contact OKC Uptown Cleaning Services, LLC
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl">
            Start a Conversation About Your Property.
          </h1>
          <p className="text-sm sm:text-base text-[#5A6260] max-w-2xl leading-relaxed">
            Reach us directly by phone or email during weekday office hours, or choose either our Residential or Commercial project consultation pathway below.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#E9E6DF]/60 border border-[#1D2526]/12 p-8 space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D2526]">
                  {COMPANY_INFO.legalName}
                </h2>
                <p className="text-sm text-[#5A6260] mt-1">{COMPANY_INFO.location}</p>
              </div>

              <div className="space-y-5 pt-4 border-t border-[#1D2526]/10">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#5A6260]">Telephone</p>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-lg font-medium text-[#1D2526] hover:text-[#3E5046] transition-colors tabular-nums"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#5A6260]">Email</p>
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="text-base sm:text-lg font-medium text-[#1D2526] hover:text-[#3E5046] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="tabular-nums">
                    <p className="text-xs text-[#5A6260]">Business Hours</p>
                    <p className="text-sm font-medium text-[#1D2526] mt-0.5">
                      {COMPANY_INFO.hoursPrimary}
                    </p>
                    <p className="text-sm text-[#5A6260]">{COMPANY_INFO.hoursClosed}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#5A6260]">Service Coverage</p>
                    <p className="text-sm text-[#1D2526] mt-0.5 leading-relaxed">
                      Serving Oklahoma City, Nichols Hills, Edmond, Moore, and Norman. Share your ZIP code when inquiring to verify availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Distinct Inquiry Pathways + Next Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl font-medium text-[#1D2526]">
                Choose Your Inquiry Pathway
              </h2>
              <p className="text-sm text-[#5A6260] leading-relaxed">
                To streamline your quote request, select whether your project is residential or commercial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#1D2526]/15 p-7 flex flex-col justify-between space-y-6 bg-[#F8F7F3]">
                <div className="space-y-3">
                  <p className="text-xs text-[#3E5046] font-medium">Pathway 01</p>
                  <h3 className="font-serif text-2xl font-medium text-[#1D2526]">
                    Residential &amp; Specialty Inquiry
                  </h3>
                  <p className="text-sm text-[#5A6260] leading-relaxed">
                    Deep cleaning, move-in/move-out projects, post-construction cleanup, chandelier care, and pressure washing.
                  </p>
                  <p className="text-xs text-[#5A6260] pt-1">
                    Project-based deep care only (standard weekly housekeeping is not offered).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRequestQuote('residential')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Start Residential Inquiry</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="border border-[#1D2526]/15 p-7 flex flex-col justify-between space-y-6 bg-[#F8F7F3]">
                <div className="space-y-3">
                  <p className="text-xs text-[#3E5046] font-medium">Pathway 02</p>
                  <h3 className="font-serif text-2xl font-medium text-[#1D2526]">
                    Commercial Inquiry
                  </h3>
                  <p className="text-sm text-[#5A6260] leading-relaxed">
                    Executive office cleaning, commercial janitorial services, commercial carpet cleaning, build-out cleanups, and exterior washing.
                  </p>
                  <p className="text-xs text-[#5A6260] pt-1">
                    One-time projects or tailored commercial schedules.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRequestQuote('commercial')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Start Commercial Inquiry</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#1D2526]/12 pt-6 space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#1D2526]">Clear Next Steps</h3>
              <p className="text-sm text-[#5A6260] leading-relaxed">
                When you call or submit project details, we review your property’s location, surface types, and scope requirements to arrange a tailored estimate. All work is performed by OKC Uptown Cleaning Services, LLC, a licensed, insured, and bonded Oklahoma City business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
