import { ArrowRight, ExternalLink } from 'lucide-react';
import { CLIENT_TESTIMONIALS, COMPANY_INFO, type ProjectCategory } from '../data/siteData';

interface ReviewsPageProps {
  onRequestQuote: (category?: ProjectCategory, service?: string) => void;
}

export function ReviewsPage({ onRequestQuote }: ReviewsPageProps) {
  return (
    <div className="bg-[#F8F7F3] text-[#1D2526]">
      <section className="py-16 lg:py-24 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-6">
          <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
            Verified Client Feedback
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-2xl">
              Authentic Reviews From Oklahoma City Clients.
            </h1>
            <a
              href={COMPANY_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1D2526] underline underline-offset-4 decoration-[#B49A70] hover:text-[#3E5046] shrink-0"
            >
              <span>Published Source: okcuptowncleaning.com</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm sm:text-base text-[#5A6260] max-w-2xl leading-relaxed">
            Every testimonial presented below is sourced directly from the published client review section of OKC Uptown Cleaning Services, LLC without altering attribution or meaning.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#E9E6DF]/45">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_TESTIMONIALS.map((review) => (
            <blockquote
              key={review.id}
              className="bg-[#F8F7F3] border border-[#1D2526]/10 p-8 sm:p-10 flex flex-col justify-between space-y-8"
            >
              <p className="font-serif text-xl sm:text-2xl text-[#1D2526] leading-relaxed">
                “{review.quote}”
              </p>
              <footer className="pt-5 border-t border-[#1D2526]/10 flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <cite className="not-italic font-semibold text-base text-[#1D2526]">
                    {review.author}
                  </cite>
                  <p className="text-xs text-[#5A6260] mt-0.5">{review.projectContext}</p>
                </div>
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3E5046] hover:underline"
                >
                  {review.sourceLabel}
                </a>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 mt-14 pt-12 border-t border-[#1D2526]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium">
              Planning a Detailed Property Project?
            </h2>
            <p className="text-sm text-[#5A6260]">
              Share your residential or commercial requirements for a tailored consultation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestQuote()}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
