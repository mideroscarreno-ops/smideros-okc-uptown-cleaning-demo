import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, type FaqItem, type ProjectCategory } from '../data/siteData';

interface FaqPageProps {
  onRequestQuote: (category?: ProjectCategory, service?: string) => void;
}

const CATEGORIES: Array<'All' | FaqItem['category']> = [
  'All',
  'Policy & Scope',
  'Residential',
  'Commercial',
  'Specialty Services',
  'Pricing & Scheduling',
];

export function FaqPage({ onRequestQuote }: FaqPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | FaqItem['category']>('All');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleFaqs =
    selectedCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#F8F7F3] text-[#1D2526]">
      <section className="py-16 lg:py-24 border-b border-[#1D2526]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-6">
          <p className="text-xs font-medium tracking-[0.14em] text-[#3E5046]">
            Frequently Asked Questions
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl">
            Clear Answers on Scope, Policies &amp; Estimates.
          </h1>
          <p className="text-sm sm:text-base text-[#5A6260] max-w-2xl leading-relaxed">
            Review how OKC Uptown Cleaning Services, LLC approaches residential deep cleaning limitations, commercial care, chandeliers, post-renovation work, pressure washing, and individualized quotes.
          </p>

          {/* Interactive Category Filter Buttons */}
          <div className="pt-4 flex flex-wrap gap-2" role="tablist" aria-label="Filter questions by topic">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedCategory(category);
                    const first =
                      category === 'All'
                        ? FAQ_ITEMS[0]
                        : FAQ_ITEMS.find((i) => i.category === category);
                    if (first) setOpenId(first.id);
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                    active
                      ? 'bg-[#1D2526] text-[#F8F7F3] border-[#1D2526]'
                      : 'bg-[#F8F7F3] text-[#5A6260] border-[#1D2526]/15 hover:border-[#1D2526]/40 hover:text-[#1D2526]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="divide-y divide-[#1D2526]/12 border-t border-b border-[#1D2526]/12">
            {visibleFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-2">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full py-5 text-left flex items-start justify-between gap-6 cursor-pointer group"
                  >
                    <div className="space-y-1">
                      <span className="text-xs text-[#3E5046] block">{faq.category}</span>
                      <span className="font-serif text-xl sm:text-2xl font-medium text-[#1D2526] group-hover:text-[#3E5046] transition-colors block">
                        {faq.question}
                      </span>
                    </div>
                    <span className="mt-2 text-[#1D2526] shrink-0" aria-hidden="true">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-base text-[#5A6260] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 bg-[#E9E6DF]/60 border border-[#1D2526]/10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-medium text-[#1D2526]">
                Have a Specific Property Question?
              </h2>
              <p className="text-sm text-[#5A6260]">
                Tell us about your project scope and location for tailored guidance.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRequestQuote()}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px] shrink-0"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
