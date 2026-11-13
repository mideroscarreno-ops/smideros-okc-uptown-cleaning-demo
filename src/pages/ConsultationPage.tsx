import { Phone, Mail, Clock } from 'lucide-react';
import { ConsultationForm } from '../components/ConsultationForm';
import { COMPANY_INFO, type ProjectCategory } from '../data/siteData';

interface ConsultationPageProps {
  initialCategory?: ProjectCategory;
  initialService?: string;
}

export function ConsultationPage({
  initialCategory,
  initialService,
}: ConsultationPageProps) {
  return (
    <div className="bg-[#F8F7F3] text-[#1D2526]">
      <section className="py-14 lg:py-20 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-5">
          <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
            Project Quote Configurator · Demonstration Flow
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl">
            Request a Tailored Cleaning Consultation.
          </h1>
          <p className="text-sm sm:text-base text-[#5A6260] max-w-2xl leading-relaxed">
            Every space requires a distinct approach. Select your residential or commercial pathway below to outline your property details. Quotes are prepared individually based on scope, condition, and materials.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <ConsultationForm
              initialCategory={initialCategory}
              initialService={initialService}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#E9E6DF]/60 border border-[#1D2526]/10 p-7 space-y-5">
              <h2 className="font-serif text-2xl font-medium text-[#1D2526]">
                Prefer to Speak Directly?
              </h2>
              <p className="text-sm text-[#5A6260] leading-relaxed">
                Reach OKC Uptown Cleaning Services, LLC during business hours to discuss your property directly.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#1D2526]/10 text-sm">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-3 text-[#1D2526] font-medium hover:text-[#3E5046] tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#3E5046] shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-3 text-[#1D2526] font-medium hover:text-[#3E5046] break-all"
                >
                  <Mail className="w-4 h-4 text-[#3E5046] shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="flex items-start gap-3 text-[#5A6260] pt-1">
                  <Clock className="w-4 h-4 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-0.5 tabular-nums text-xs sm:text-sm">
                    <p>{COMPANY_INFO.hoursPrimary}</p>
                    <p>{COMPANY_INFO.hoursClosed}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#1D2526]/10 p-7 space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#1D2526]">
                What Happens Next
              </h3>
              <ol className="space-y-2.5 text-sm text-[#5A6260]">
                <li className="flex items-baseline gap-3">
                  <span className="tabular-nums text-xs font-semibold text-[#3E5046]">01</span>
                  <span>Your property type, location, and scope notes are reviewed.</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="tabular-nums text-xs font-semibold text-[#3E5046]">02</span>
                  <span>Any surface or scheduling questions are clarified together.</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="tabular-nums text-xs font-semibold text-[#3E5046]">03</span>
                  <span>A customized project estimate is prepared without generic flat assumptions.</span>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
