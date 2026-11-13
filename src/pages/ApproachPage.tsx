import { ArrowRight } from 'lucide-react';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { COMPANY_INFO, IMAGES, type PageRoute, type ProjectCategory } from '../data/siteData';

interface ApproachPageProps {
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (category?: ProjectCategory, service?: string) => void;
}

export function ApproachPage({ onNavigate, onRequestQuote }: ApproachPageProps) {
  return (
    <div className="bg-[#F8F7F3] text-[#1D2526]">
      {/* Editorial Intro */}
      <section className="py-16 lg:py-24 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
              About &amp; Philosophy · Oklahoma City
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08]">
              Every Detail. Exceptionally Considered.
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#1D2526]/90 leading-relaxed">
              OKC Uptown Cleaning Services, LLC was built around a straightforward principle: properties with thoughtful finishes deserve patient, methodical care rather than rushed routine maintenance.
            </p>
            <p className="text-sm sm:text-base text-[#5A6260] leading-relaxed">
              Serving the Oklahoma City metropolitan area since 2015 and drawing on over 35 years of published industry experience, we operate as a licensed, insured, and bonded specialty cleaning company dedicated to residential deep cleaning, commercial environments, post-renovation cleanups, chandelier care, and exterior pressure washing.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('faqs')}
                className="inline-flex items-center px-6 py-4 border border-[#1D2526]/20 text-sm font-medium text-[#1D2526] hover:bg-[#E9E6DF] transition-colors cursor-pointer min-h-[44px]"
              >
                Read Service Policies &amp; FAQs
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ArchitecturalImage
              src={IMAGES.kitchen}
              alt="Custom residential cabinetry, honed travertine marble waterfall island, and brushed bronze range hood"
              className="w-full aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="py-20 lg:py-24 bg-[#E9E6DF]/55 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
              How We Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">
              A Disciplined Three-Step Method.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Understand the Property',
                body: 'We begin by learning about your residence, renovation, or commercial facility—understanding the materials, finishes, fixture heights, and specific areas requiring focused attention.',
              },
              {
                number: '02',
                title: 'Define the Scope',
                body: 'Because every property and surface condition is distinct, we do not rely on flat generic pricing. We review the project scope with you and prepare a tailored estimate.',
              },
              {
                number: '03',
                title: 'Deliver Detailed Care',
                body: 'Our team coordinates the scheduled service respectfully, focusing on both visible architecture and the overlooked details behind, beneath, and overhead.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#F8F7F3] border border-[#1D2526]/10 p-8 space-y-4"
              >
                <span className="font-serif text-4xl text-[#B49A70] tabular-nums block">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1D2526]">{item.title}</h3>
                <p className="text-sm text-[#5A6260] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility & Scope Boundaries */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
              Published Credentials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">
              Roots in Oklahoma City Care.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {COMPANY_INFO.credibilityClaims.map((claim) => (
                <div key={claim.label} className="border-t border-[#1D2526]/15 pt-4 space-y-1.5">
                  <p className="text-xs text-[#5A6260]">{claim.label}</p>
                  <p className="font-serif text-xl font-medium text-[#1D2526] tabular-nums">
                    {claim.value}
                  </p>
                  <p className="text-xs text-[#5A6260] leading-relaxed">{claim.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#E9E6DF]/70 border border-[#1D2526]/12 p-8 sm:p-10 space-y-5">
            <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
              Clarity of Focus
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D2526]">
              What We Focus On—And What We Intentionally Exclude.
            </h2>
            <p className="text-sm text-[#5A6260] leading-relaxed">
              Specializing means knowing where our craftsmanship delivers the greatest value. In residential properties, we dedicate our labor to deep cleanings, move-in/move-out transitions, post-construction cleanup, chandelier detailing, and pressure washing.
            </p>
            <ul className="space-y-3 text-sm text-[#1D2526]/85 pt-2 border-t border-[#1D2526]/10">
              <li className="flex items-baseline gap-2.5">
                <span className="text-[#B49A70]" aria-hidden="true">
                  —
                </span>
                <span>
                  We do <strong>not</strong> offer standard weekly or routine recurring residential housekeeping.
                </span>
              </li>
              <li className="flex items-baseline gap-2.5">
                <span className="text-[#B49A70]" aria-hidden="true">
                  —
                </span>
                <span>
                  We do <strong>not</strong> perform hoarder clean-outs, extreme decluttering, or junk removal.
                </span>
              </li>
              <li className="flex items-baseline gap-2.5">
                <span className="text-[#B49A70]" aria-hidden="true">
                  —
                </span>
                <span>
                  Commercial clients may inquire about both one-time projects and tailored recurring commercial janitorial care.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
