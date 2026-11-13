import { ArrowRight, ArrowLeft, Phone, AlertCircle } from 'lucide-react';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import {
  COMPANY_INFO,
  SERVICES,
  type PageRoute,
  type ProjectCategory,
  type ServiceItem,
} from '../data/siteData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (category?: ProjectCategory, serviceOption?: string) => void;
}

export function ServiceDetailPage({
  service,
  onNavigate,
  onRequestQuote,
}: ServiceDetailPageProps) {
  const isChandelier = service.id === 'chandelier';

  return (
    <div className={isChandelier ? 'bg-[#1D2526] text-[#F8F7F3]' : 'bg-[#F8F7F3] text-[#1D2526]'}>
      {/* Sub-navigation bar for switching between services */}
      <div
        className={`border-b ${
          isChandelier ? 'border-[#F8F7F3]/12 bg-[#1D2526]' : 'border-[#1D2526]/10 bg-[#E9E6DF]/50'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`inline-flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors ${
              isChandelier
                ? 'text-[#F8F7F3]/75 hover:text-[#B49A70]'
                : 'text-[#5A6260] hover:text-[#1D2526]'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-4 overflow-x-auto pb-1 sm:pb-0 text-xs">
            {SERVICES.map((item) => {
              const active = item.id === service.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.route)}
                  className={`whitespace-nowrap shrink-0 pb-0.5 border-b transition-colors cursor-pointer ${
                    active
                      ? isChandelier
                        ? 'text-[#B49A70] border-[#B49A70] font-semibold'
                        : 'text-[#1D2526] border-[#B49A70] font-semibold'
                      : isChandelier
                      ? 'text-[#F8F7F3]/65 border-transparent hover:text-[#F8F7F3]'
                      : 'text-[#5A6260] border-transparent hover:text-[#1D2526]'
                  }`}
                >
                  {item.number} · {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Split */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 text-xs">
              <span className="tabular-nums font-medium text-[#B49A70]">{service.number}</span>
              <span aria-hidden="true">/</span>
              <span className={isChandelier ? 'text-[#F8F7F3]/75' : 'text-[#3E5046]'}>
                {service.subtitle}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight">
              {service.title}
            </h1>

            <p
              className={`font-serif text-xl sm:text-2xl leading-relaxed ${
                isChandelier ? 'text-[#F8F7F3]/90' : 'text-[#1D2526]/90'
              }`}
            >
              {service.editorialLead}
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isChandelier ? 'text-[#F8F7F3]/75' : 'text-[#5A6260]'
              }`}
            >
              {service.summary}
            </p>

            {service.limitationNote && (
              <div className="bg-[#E9E6DF] border border-[#1D2526]/15 p-5 flex items-start gap-3 text-[#1D2526]">
                <AlertCircle className="w-5 h-5 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm leading-relaxed space-y-1">
                  <p className="font-semibold">Important Service Policy</p>
                  <p>
                    {service.limitationNote} We do not offer weekly or standard recurring residential maid service. Homeowners may inquire about one-time resets, move-related cleans, or periodic deep-cleaning projects.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote(service.quoteCategory, service.quoteServiceOption)}
                className={`inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold transition-colors cursor-pointer min-h-[44px] ${
                  isChandelier
                    ? 'bg-[#B49A70] text-[#1D2526] hover:bg-[#F8F7F3]'
                    : 'bg-[#1D2526] text-[#F8F7F3] hover:bg-[#3E5046]'
                }`}
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 border text-sm font-medium transition-colors min-h-[44px] ${
                  isChandelier
                    ? 'border-[#F8F7F3]/30 text-[#F8F7F3] hover:bg-[#F8F7F3]/10'
                    : 'border-[#1D2526]/25 text-[#1D2526] hover:bg-[#E9E6DF]'
                }`}
              >
                <Phone className="w-4 h-4 text-[#B49A70]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ArchitecturalImage
              src={service.image}
              alt={service.imageAlt}
              className={`w-full ${isChandelier ? 'aspect-[3/4] max-h-[640px]' : 'aspect-[4/3]'}`}
              priority
            />
          </div>
        </div>
      </section>

      {/* Detailed Scope Breakdown */}
      <section
        className={`py-16 lg:py-24 border-t ${
          isChandelier
            ? 'border-[#F8F7F3]/12 bg-[#1D2526]'
            : 'border-[#1D2526]/10 bg-[#E9E6DF]/45'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] text-[#B49A70]">
              Detailed Scope
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">
              What This Service Covers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.scopeDetails.map((block) => (
              <div
                key={block.heading}
                className={`p-7 sm:p-9 border space-y-5 ${
                  isChandelier
                    ? 'bg-[#F8F7F3]/5 border-[#F8F7F3]/12'
                    : 'bg-[#F8F7F3] border-[#1D2526]/10'
                }`}
              >
                <h3 className="font-serif text-2xl font-medium">{block.heading}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isChandelier ? 'text-[#F8F7F3]/75' : 'text-[#5A6260]'
                  }`}
                >
                  {block.description}
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-current/10 text-sm">
                  {block.points.map((pt) => (
                    <li key={pt} className="flex items-baseline gap-2.5">
                      <span className="text-[#B49A70] text-xs" aria-hidden="true">
                        —
                      </span>
                      <span className={isChandelier ? 'text-[#F8F7F3]/85' : 'text-[#1D2526]/85'}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ideal For + Key Focus Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-serif text-2xl font-medium">Ideal Project Scenarios</h3>
              <ul className="space-y-3 text-sm">
                {service.idealFor.map((scenario) => (
                  <li key={scenario} className="flex items-baseline gap-3">
                    <span className="text-[#B49A70]" aria-hidden="true">
                      —
                    </span>
                    <span className={isChandelier ? 'text-[#F8F7F3]/80' : 'text-[#5A6260]'}>
                      {scenario}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-serif text-2xl font-medium">Quote Determination</h3>
              <p
                className={`text-sm leading-relaxed ${
                  isChandelier ? 'text-[#F8F7F3]/75' : 'text-[#5A6260]'
                }`}
              >
                All projects are quoted individually based on square footage, property condition, material types, and scope requirements. Request a consultation to discuss your space directly with our Oklahoma City team.
              </p>
              <button
                type="button"
                onClick={() => onRequestQuote(service.quoteCategory, service.quoteServiceOption)}
                className={`inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-[#B49A70] cursor-pointer ${
                  isChandelier ? 'text-[#B49A70]' : 'text-[#1D2526] hover:text-[#3E5046]'
                }`}
              >
                <span>Start a {service.title} Quote Inquiry</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
