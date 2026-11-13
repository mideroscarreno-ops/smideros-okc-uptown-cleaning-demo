import { useState } from 'react';
import { ArrowRight, Phone, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import {
  CLIENT_TESTIMONIALS,
  COMPANY_INFO,
  DETAIL_FOCUS_AREAS,
  IMAGES,
  SERVICES,
  type PageRoute,
  type ProjectCategory,
} from '../data/siteData';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (category?: ProjectCategory, service?: string) => void;
}

export function HomePage({ onNavigate, onRequestQuote }: HomePageProps) {
  const [activeDetailId, setActiveDetailId] = useState<string>(DETAIL_FOCUS_AREAS[0].id);

  const activeDetail =
    DETAIL_FOCUS_AREAS.find((item) => item.id === activeDetailId) ?? DETAIL_FOCUS_AREAS[0];

  const residentialService = SERVICES[0];
  const commercialService = SERVICES[1];
  const postConstructionService = SERVICES[2];
  const chandelierService = SERVICES[3];
  const pressureWashingService = SERVICES[4];

  const scrollToServices = () => {
    const el = document.getElementById('specialty-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* B. Cinematic Hero */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-end bg-[#1D2526] overflow-hidden">
        <div className="absolute inset-0">
          <ArchitecturalImage
            src={IMAGES.hero}
            alt="Sunlit luxury Oklahoma City residence interior with custom limestone wall, honed marble island, and oak flooring"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1D2526]/90 via-[#1D2526]/50 to-[#1D2526]/20"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 pt-24 pb-14 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] text-[#B49A70]">
              Detail-Driven Cleaning · Oklahoma City
            </p>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-medium leading-[1.06] tracking-tight text-[#F8F7F3]">
              Exceptional Spaces Deserve Exceptional Detail.
            </h1>

            <p className="text-base sm:text-lg text-[#F8F7F3]/85 leading-relaxed max-w-2xl">
              Specialty cleaning for discerning homeowners, property managers, and businesses throughout Oklahoma City.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#B49A70] text-[#1D2526] text-sm font-semibold tracking-wide hover:bg-[#F8F7F3] transition-colors duration-150 cursor-pointer min-h-[44px]"
              >
                <span>Request Your Cleaning Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-7 py-4 border border-[#F8F7F3]/40 text-[#F8F7F3] text-sm font-medium hover:bg-[#F8F7F3]/10 transition-colors duration-150 cursor-pointer min-h-[44px]"
              >
                Explore Our Expertise
              </button>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#F8F7F3]/75">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 hover:text-[#B49A70] transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#B49A70]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-[#F8F7F3]/35">
                ·
              </span>
              <span>{COMPANY_INFO.hoursPrimary}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* C. A Different Standard of Cleaning */}
      <section className="py-20 lg:py-28 bg-[#F8F7F3] border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
                A Different Standard of Cleaning
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1D2526] leading-[1.1]">
                Beyond the Surface.
              </h2>
              <p className="text-sm text-[#5A6260] leading-relaxed">
                Serving the Oklahoma City area since 2015, OKC Uptown Cleaning Services, LLC focuses on detailed, labor-intensive cleaning projects where craftsmanship, finish sensitivity, and thoroughness matter.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="font-serif text-2xl sm:text-[28px] leading-[1.38] text-[#1D2526]">
                We do not compete on rushed checklists or budget maintenance. Our teams are built for properties requiring patient attention to architectural finishes, fixtures, cabinetry, and overlooked spaces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 pt-6 border-t border-[#1D2526]/12">
                <div>
                  <h3 className="text-sm font-semibold text-[#1D2526]">
                    Precision &amp; Material Care
                  </h3>
                  <p className="text-sm text-[#5A6260] mt-1.5 leading-relaxed">
                    Thoughtful handling of natural stone, crystal, custom cabinetry, woodwork, and architectural glass.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1D2526]">
                    Customized Project Scope
                  </h3>
                  <p className="text-sm text-[#5A6260] mt-1.5 leading-relaxed">
                    Individualized plans built around your property’s condition, materials, and timing—never generic flat packages.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1D2526]">
                    Clear Communication
                  </h3>
                  <p className="text-sm text-[#5A6260] mt-1.5 leading-relaxed">
                    Transparent expectations upfront, including our focus on specialty projects rather than standard weekly housekeeping.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1D2526]">
                    Professional Presentation
                  </h3>
                  <p className="text-sm text-[#5A6260] mt-1.5 leading-relaxed">
                    Licensed, insured, and bonded teams respectful of private estates, renovations, and commercial suites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Five Specialty Services */}
      <section id="specialty-services" className="py-20 lg:py-28 bg-[#F8F7F3]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-24 lg:space-y-32">
          {/* Section Header */}
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
              Specialty Services
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1D2526] leading-[1.1]">
              Curated Property Care Across Five Disciplines.
            </h2>
          </div>

          {/* 01. Residential Deep Cleaning */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-6">
              <ArchitecturalImage
                src={residentialService.image}
                alt={residentialService.imageAlt}
                className="w-full aspect-[4/3] lg:h-full lg:aspect-auto min-h-[320px]"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between py-2 space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-xs text-[#5A6260]">
                  <span className="tabular-nums font-medium text-[#3E5046]">
                    {residentialService.number}
                  </span>
                  <span aria-hidden="true">/</span>
                  <span>Residential Specialty</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                  {residentialService.title}
                </h3>

                <p className="text-base text-[#1D2526]/85 leading-relaxed">
                  {residentialService.summary}
                </p>

                <div className="bg-[#E9E6DF] border border-[#1D2526]/12 p-4 text-sm text-[#1D2526]">
                  <strong className="font-semibold">Scope Distinction:</strong>{' '}
                  {residentialService.limitationNote}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 text-sm text-[#5A6260]">
                  {residentialService.highlights.map((point) => (
                    <li key={point} className="flex items-baseline gap-2.5">
                      <span className="text-[#B49A70] text-xs" aria-hidden="true">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote('residential', 'Deep Cleaning')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>{residentialService.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="text-sm font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046] transition-colors cursor-pointer py-2"
                >
                  View Residential Details
                </button>
              </div>
            </div>
          </article>

          {/* 02. Commercial Cleaning */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch pt-12 border-t border-[#1D2526]/10">
            <div className="lg:col-span-6 lg:order-2">
              <ArchitecturalImage
                src={commercialService.image}
                alt={commercialService.imageAlt}
                className="w-full aspect-[4/3] lg:h-full lg:aspect-auto min-h-[320px]"
              />
            </div>

            <div className="lg:col-span-6 lg:order-1 flex flex-col justify-between py-2 space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-xs text-[#5A6260]">
                  <span className="tabular-nums font-medium text-[#3E5046]">
                    {commercialService.number}
                  </span>
                  <span aria-hidden="true">/</span>
                  <span>Commercial Environments</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                  {commercialService.title}
                </h3>

                <p className="text-base text-[#1D2526]/85 leading-relaxed">
                  {commercialService.summary}
                </p>

                <p className="text-sm text-[#5A6260] leading-relaxed">
                  {commercialService.editorialLead}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 text-sm text-[#5A6260]">
                  {commercialService.highlights.map((point) => (
                    <li key={point} className="flex items-baseline gap-2.5">
                      <span className="text-[#B49A70] text-xs" aria-hidden="true">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote('commercial', 'Commercial Cleaning')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>{commercialService.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="text-sm font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046] transition-colors cursor-pointer py-2"
                >
                  View Commercial Details
                </button>
              </div>
            </div>
          </article>

          {/* 03. Post-Construction & Remodel Cleaning */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch pt-12 border-t border-[#1D2526]/10">
            <div className="lg:col-span-6">
              <ArchitecturalImage
                src={postConstructionService.image}
                alt={postConstructionService.imageAlt}
                className="w-full aspect-[4/3] lg:h-full lg:aspect-auto min-h-[320px]"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between py-2 space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-xs text-[#5A6260]">
                  <span className="tabular-nums font-medium text-[#3E5046]">
                    {postConstructionService.number}
                  </span>
                  <span aria-hidden="true">/</span>
                  <span>Renovation &amp; Build Finish</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                  {postConstructionService.title}
                </h3>

                <p className="text-base text-[#1D2526]/85 leading-relaxed">
                  {postConstructionService.summary}
                </p>

                <p className="text-sm text-[#5A6260] leading-relaxed">
                  {postConstructionService.editorialLead}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 text-sm text-[#5A6260]">
                  {postConstructionService.highlights.map((point) => (
                    <li key={point} className="flex items-baseline gap-2.5">
                      <span className="text-[#B49A70] text-xs" aria-hidden="true">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote('residential', 'Post-Construction Cleaning')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>{postConstructionService.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('post-construction')}
                  className="text-sm font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046] transition-colors cursor-pointer py-2"
                >
                  View Post-Construction Scope
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* 04. Chandelier & Specialty Fixture Cleaning — Luminous Dark Architectural Feature */}
        <div className="mt-24 lg:mt-32 bg-[#1D2526] text-[#F8F7F3] py-20 lg:py-28">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <ArchitecturalImage
                  src={chandelierService.image}
                  alt={chandelierService.imageAlt}
                  className="w-full aspect-[3/4] max-h-[640px]"
                />
              </div>

              <div className="lg:col-span-7 space-y-7">
                <div className="flex items-center gap-3 text-xs text-[#B49A70]">
                  <span className="tabular-nums font-medium">{chandelierService.number}</span>
                  <span aria-hidden="true">/</span>
                  <span>Signature Architectural Lighting Care</span>
                </div>

                <h3 className="font-serif text-4xl sm:text-5xl font-medium text-[#F8F7F3] leading-[1.1]">
                  {chandelierService.title}
                </h3>

                <p className="font-serif text-xl sm:text-2xl text-[#F8F7F3]/90 leading-relaxed">
                  {chandelierService.editorialLead}
                </p>

                <p className="text-sm sm:text-base text-[#F8F7F3]/75 leading-relaxed">
                  {chandelierService.summary} From double-height foyers to formal dining rooms and executive lobbies, our four-step process protects surrounding surfaces while restoring crystal clarity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F8F7F3]/12">
                  {chandelierService.highlights.slice(0, 4).map((point) => (
                    <div key={point} className="flex items-baseline gap-2.5 text-sm text-[#F8F7F3]/85">
                      <span className="text-[#B49A70] text-xs" aria-hidden="true">
                        —
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={() => onRequestQuote('residential', 'Chandelier Cleaning')}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#B49A70] text-[#1D2526] text-sm font-semibold hover:bg-[#F8F7F3] transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span>{chandelierService.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('chandelier')}
                    className="text-sm font-medium text-[#F8F7F3] underline underline-offset-4 decoration-[#B49A70] hover:text-[#B49A70] transition-colors cursor-pointer py-2"
                  >
                    Explore Our 4-Step Fixture Process
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* 05. Power & Pressure Washing */}
        <div className="bg-[#E9E6DF]/70 py-20 lg:py-24 border-b border-[#1D2526]/10">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              <div className="lg:col-span-6 lg:order-2">
                <ArchitecturalImage
                  src={pressureWashingService.image}
                  alt={pressureWashingService.imageAlt}
                  className="w-full aspect-[4/3] lg:h-full lg:aspect-auto min-h-[320px]"
                />
              </div>

              <div className="lg:col-span-6 lg:order-1 flex flex-col justify-between py-2 space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-xs text-[#5A6260]">
                    <span className="tabular-nums font-medium text-[#3E5046]">
                      {pressureWashingService.number}
                    </span>
                    <span aria-hidden="true">/</span>
                    <span>Exterior Stonework &amp; Hardscapes</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                    {pressureWashingService.title}
                  </h3>

                  <p className="text-base text-[#1D2526]/85 leading-relaxed">
                    {pressureWashingService.summary}
                  </p>

                  <p className="text-sm text-[#5A6260] leading-relaxed">
                    {pressureWashingService.editorialLead}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 text-sm text-[#5A6260]">
                    {pressureWashingService.highlights.map((point) => (
                      <li key={point} className="flex items-baseline gap-2.5">
                        <span className="text-[#B49A70] text-xs" aria-hidden="true">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onRequestQuote('residential', 'Pressure Washing')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span>{pressureWashingService.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('pressure-washing')}
                    className="text-sm font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046] transition-colors cursor-pointer py-2"
                  >
                    View Exterior Washing Scope
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* E. Precision in Every Detail — Interactive Architectural Explorer */}
      <section className="py-20 lg:py-28 bg-[#F8F7F3] border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
                Precision in Every Detail
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1D2526]">
                The Details Make the Difference.
              </h2>
            </div>
            <p className="text-sm text-[#5A6260] max-w-md leading-relaxed">
              Select an architectural focus area to review how we approach overlooked fixtures, finishes, and structural surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Interactive Selector List */}
            <div className="lg:col-span-5 divide-y divide-[#1D2526]/12 border-t border-b border-[#1D2526]/12">
              {DETAIL_FOCUS_AREAS.map((area) => {
                const isActive = area.id === activeDetail.id;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setActiveDetailId(area.id)}
                    onMouseEnter={() => setActiveDetailId(area.id)}
                    aria-pressed={isActive}
                    className={`w-full text-left py-4 px-4 transition-colors duration-150 flex items-center justify-between gap-4 cursor-pointer ${
                      isActive
                        ? 'bg-[#E9E6DF] text-[#1D2526]'
                        : 'hover:bg-[#E9E6DF]/50 text-[#1D2526]/80'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs tabular-nums text-[#3E5046] font-medium">
                        {area.index}
                      </span>
                      <div>
                        <span className="font-serif text-xl sm:text-2xl font-medium block">
                          {area.title}
                        </span>
                        <span className="text-xs text-[#5A6260]">{area.category}</span>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                        isActive ? 'text-[#1D2526] translate-x-0.5' : 'text-[#78817F]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Focus Panel */}
            <div className="lg:col-span-7 bg-[#E9E6DF]/50 border border-[#1D2526]/10 flex flex-col">
              <ArchitecturalImage
                src={activeDetail.image}
                alt={activeDetail.imageAlt}
                className="w-full aspect-[16/10]"
              />
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#3E5046]">
                    <span className="tabular-nums font-medium">{activeDetail.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeDetail.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D2526]">
                    {activeDetail.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A6260] leading-relaxed">
                    {activeDetail.summary}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-[#1D2526]/10 text-sm text-[#1D2526]/85">
                  {activeDetail.inspectionPoints.map((pt) => (
                    <li key={pt} className="flex items-baseline gap-2.5">
                      <span className="text-[#B49A70] text-xs" aria-hidden="true">
                        —
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Who We Serve */}
      <section className="py-20 lg:py-24 bg-[#F8F7F3] border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
              Who We Serve
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
              Tailored Support Across Residential &amp; Commercial Spaces.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#1D2526]/12">
            {[
              {
                num: '01',
                title: 'Homeowners',
                desc: 'Detailed residential deep cleaning, move-in and move-out preparation, chandelier care, and exterior stone washing.',
              },
              {
                num: '02',
                title: 'Property Managers',
                desc: 'Thorough property turnovers, vacant readiness resets, and project-specific residential or commercial care.',
              },
              {
                num: '03',
                title: 'Designers & Renovation Professionals',
                desc: 'Post-renovation dust extraction, glazing residue removal, and finishing-stage presentation before furnishing.',
              },
              {
                num: '04',
                title: 'Commercial Clients',
                desc: 'Offices, fitness spaces, entertainment venues, and commercial environments seeking janitorial and carpet care.',
              },
            ].map((audience, idx) => (
              <div
                key={audience.title}
                className={`py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0 border-b sm:border-b-0 ${
                  idx < 3 ? 'lg:border-r border-[#1D2526]/12' : ''
                }`}
              >
                <span className="text-xs tabular-nums text-[#78817F]">{audience.num}</span>
                <h3 className="font-serif text-2xl font-medium text-[#1D2526] mt-3 mb-2.5">
                  {audience.title}
                </h3>
                <p className="text-sm text-[#5A6260] leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. Experience & Credibility + H. Authentic Testimonials */}
      <section className="py-20 lg:py-28 bg-[#E9E6DF]/55 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-16">
          {/* Published Company Claims */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
                Experience &amp; Credibility
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                Grounded in Published Standards.
              </h2>
              <p className="text-xs text-[#5A6260] leading-relaxed">
                Reflects claims published directly by OKC Uptown Cleaning Services, LLC.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {COMPANY_INFO.credibilityClaims.map((claim) => (
                <div
                  key={claim.label}
                  className="bg-[#F8F7F3] border border-[#1D2526]/10 p-6 space-y-2"
                >
                  <p className="text-xs text-[#5A6260]">{claim.label}</p>
                  <p className="font-serif text-2xl font-medium text-[#1D2526] tabular-nums">
                    {claim.value}
                  </p>
                  <p className="text-sm text-[#5A6260] leading-relaxed">{claim.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Client Reviews */}
          <div className="pt-12 border-t border-[#1D2526]/12 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
                  Client Reviews
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                  In the Words of Oklahoma City Clients.
                </h2>
              </div>
              <a
                href={COMPANY_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046]"
              >
                <span>View published source on okcuptowncleaning.com</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLIENT_TESTIMONIALS.map((review) => (
                <blockquote
                  key={review.id}
                  className="bg-[#F8F7F3] border border-[#1D2526]/10 p-7 sm:p-8 flex flex-col justify-between space-y-6"
                >
                  <p className="font-serif text-lg sm:text-xl text-[#1D2526] leading-relaxed">
                    “{review.quote}”
                  </p>
                  <footer className="pt-4 border-t border-[#1D2526]/10 flex flex-wrap items-baseline justify-between gap-2 text-xs">
                    <div>
                      <cite className="not-italic font-semibold text-[#1D2526] text-sm">
                        {review.author}
                      </cite>
                      <span className="text-[#78817F] mx-2" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-[#5A6260]">{review.projectContext}</span>
                    </div>
                    <span className="text-[#78817F]">{review.sourceLabel}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* I. Our Approach & J. Oklahoma City Service Area */}
      <section className="py-20 lg:py-28 bg-[#F8F7F3]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-20">
          {/* 3-Step Process */}
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
                  Our Approach
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                  Thoughtful Coordination From First Inquiry to Finish.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('approach')}
                className="text-sm font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046] cursor-pointer self-start sm:self-auto"
              >
                Read Our Full Approach
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#1D2526]/12">
              {[
                {
                  step: '01',
                  title: 'Understand the Property',
                  desc: 'Learn about the project, architectural materials, specialty surfaces, and your expectations.',
                },
                {
                  step: '02',
                  title: 'Define the Scope',
                  desc: 'Discuss the specific cleaning requirements and provide a tailored, project-appropriate estimate.',
                },
                {
                  step: '03',
                  title: 'Deliver Detailed Care',
                  desc: 'Coordinate and execute the agreed cleaning service with respectful attention to your space.',
                },
              ].map((phase) => (
                <div key={phase.step} className="space-y-3">
                  <span className="font-serif text-3xl text-[#B49A70] tabular-nums block">
                    {phase.step}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#1D2526]">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-[#5A6260] leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* J. Oklahoma City Service Area */}
          <div className="bg-[#E9E6DF]/60 border border-[#1D2526]/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-[#3E5046]">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Service Area</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
                Serving Oklahoma City &amp; Surrounding Communities.
              </h2>
              <p className="text-sm sm:text-base text-[#5A6260] leading-relaxed max-w-2xl">
                Headquartered in Oklahoma City, we provide residential specialty and commercial cleaning across the metro, including confirmed service in <strong>Nichols Hills</strong>, <strong>Edmond</strong>, <strong>Moore</strong>, and <strong>Norman</strong>. Share your city or ZIP code during consultation to confirm availability for your property.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[#1D2526]">
                {COMPANY_INFO.serviceCommunities.map((city, i) => (
                  <span key={city} className="inline-flex items-center">
                    <span>{city}</span>
                    {i < COMPANY_INFO.serviceCommunities.length - 1 && (
                      <span className="text-[#B49A70] ml-4" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Check Availability for Your ZIP Code</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* K. Final CTA */}
      <section className="py-24 lg:py-32 bg-[#3E5046] text-[#F8F7F3]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 text-center max-w-3xl space-y-6">
          <p className="text-xs font-medium tracking-[0.14em] text-[#B49A70]">
            OKC Uptown Cleaning Services, LLC
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#F8F7F3]">
            Because Every Detail Matters.
          </h2>
          <p className="text-base sm:text-lg text-[#F8F7F3]/85 leading-relaxed max-w-xl mx-auto">
            Tell us about your property and discover a cleaning approach tailored to your space.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onRequestQuote()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B49A70] text-[#1D2526] text-sm font-semibold hover:bg-[#F8F7F3] transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Request a Detailed Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F8F7F3]/40 text-[#F8F7F3] text-sm font-medium hover:bg-[#F8F7F3]/10 transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Speak With Our Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
