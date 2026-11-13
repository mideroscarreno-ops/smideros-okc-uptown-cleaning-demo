import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Home,
  Building2,
  Phone,
  Mail,
  Info,
  AlertCircle,
} from 'lucide-react';
import {
  COMPANY_INFO,
  QUOTE_OPTIONS,
  type ProjectCategory,
} from '../data/siteData';

interface ConsultationFormProps {
  initialCategory?: ProjectCategory;
  initialService?: string;
}

interface FormState {
  category: ProjectCategory | null;
  service: string;
  cityOrZip: string;
  propertyType: string;
  squareFootage: string;
  cleaningFrequency: string;
  projectDescription: string;
  preferredTiming: string;
  fullName: string;
  email: string;
  phoneOrMethod: string;
  additionalMessage: string;
}

const STEPS = [
  { number: 1, label: 'Project Type' },
  { number: 2, label: 'Service Scope' },
  { number: 3, label: 'Property Details' },
  { number: 4, label: 'Contact Info' },
];

export function ConsultationForm({
  initialCategory,
  initialService,
}: ConsultationFormProps) {
  const [step, setStep] = useState<number>(initialCategory && initialService ? 3 : initialCategory ? 2 : 1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<FormState>({
    category: initialCategory ?? null,
    service: initialService ?? '',
    cityOrZip: '',
    propertyType: '',
    squareFootage: '',
    cleaningFrequency: '',
    projectDescription: '',
    preferredTiming: '',
    fullName: '',
    email: '',
    phoneOrMethod: '',
    additionalMessage: '',
  });

  useEffect(() => {
    if (initialCategory || initialService) {
      setForm((prev) => ({
        ...prev,
        category: initialCategory ?? prev.category,
        service: initialService ?? prev.service,
      }));
      if (initialCategory && initialService) {
        setStep(3);
      } else if (initialCategory) {
        setStep(2);
      }
      setSubmitted(false);
      setErrors({});
    }
  }, [initialCategory, initialService]);

  const serviceChoices =
    form.category === 'commercial'
      ? QUOTE_OPTIONS.commercialServices
      : QUOTE_OPTIONS.residentialServices;

  const propertyTypeChoices =
    form.category === 'commercial'
      ? QUOTE_OPTIONS.commercialPropertyTypes
      : QUOTE_OPTIONS.residentialPropertyTypes;

  const validateStep = (targetStep: number): boolean => {
    const nextErrors: Record<string, string> = {};

    if (targetStep === 1 && !form.category) {
      nextErrors.category = 'Please select either Residential & Specialty Projects or Commercial Projects.';
    }
    if (targetStep === 2 && !form.service) {
      nextErrors.service = 'Please select a service option to continue.';
    }
    if (targetStep === 3) {
      if (!form.cityOrZip.trim()) {
        nextErrors.cityOrZip = 'Please enter your city or ZIP code (e.g., Oklahoma City, Edmond, Nichols Hills, or 73116).';
      }
      if (!form.propertyType) {
        nextErrors.propertyType = 'Please select a property type.';
      }
    }
    if (targetStep === 4) {
      if (!form.fullName.trim()) {
        nextErrors.fullName = 'Please enter your full name.';
      }
      if (!form.email.trim()) {
        nextErrors.email = 'Please enter your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        nextErrors.email = 'Please enter a valid email address.';
      }
      if (!form.phoneOrMethod.trim()) {
        nextErrors.phoneOrMethod = 'Please provide a phone number or preferred contact method.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(4, s + 1));
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSelectCategory = (category: ProjectCategory) => {
    setForm((prev) => ({
      ...prev,
      category,
      service: '',
      propertyType: '',
      cleaningFrequency: '',
    }));
    setErrors({});
    setStep(2);
  };

  const handleSelectService = (service: string) => {
    setForm((prev) => ({ ...prev, service }));
    setErrors({});
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setErrors({});
    setForm({
      category: null,
      service: '',
      cityOrZip: '',
      propertyType: '',
      squareFootage: '',
      cleaningFrequency: '',
      projectDescription: '',
      preferredTiming: '',
      fullName: '',
      email: '',
      phoneOrMethod: '',
      additionalMessage: '',
    });
  };

  if (submitted) {
    return (
      <div className="bg-[#E9E6DF]/60 border border-[#1D2526]/15 p-8 sm:p-12">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-[#3E5046]">
            <Check className="w-4 h-4" aria-hidden="true" />
            <span>Demonstration Summary Prepared</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D2526]">
            Your Project Scope Summary
          </h2>

          <div
            role="status"
            className="bg-[#F8F7F3] border border-[#B49A70] p-5 flex items-start gap-3.5"
          >
            <Info className="w-5 h-5 text-[#3E5046] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1.5 text-sm text-[#1D2526]/90 leading-relaxed">
              <p className="font-medium text-[#1D2526]">
                Frontend Redesign Demonstration Notice
              </p>
              <p>
                This interactive quote flow is part of an independent website redesign concept by S.Mideros Agency. No backend server is connected, and <strong>no real inquiry message has been delivered</strong> to OKC Uptown Cleaning Services, LLC.
              </p>
              <p>
                To submit an actual consultation request, please contact the business directly by phone or email below.
              </p>
            </div>
          </div>

          <div className="bg-[#F8F7F3] border border-[#1D2526]/10 p-6 space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#1D2526] pb-3 border-b border-[#1D2526]/10">
              Captured Project Details
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div>
                <dt className="text-[#5A6260] text-xs">Project Pathway</dt>
                <dd className="font-medium text-[#1D2526] mt-0.5">
                  {form.category === 'commercial'
                    ? 'Commercial Projects'
                    : 'Residential & Specialty Projects'}
                </dd>
              </div>
              <div>
                <dt className="text-[#5A6260] text-xs">Selected Service</dt>
                <dd className="font-medium text-[#1D2526] mt-0.5">{form.service}</dd>
              </div>
              <div>
                <dt className="text-[#5A6260] text-xs">City / ZIP Code</dt>
                <dd className="font-medium text-[#1D2526] mt-0.5">{form.cityOrZip}</dd>
              </div>
              <div>
                <dt className="text-[#5A6260] text-xs">Property Type</dt>
                <dd className="font-medium text-[#1D2526] mt-0.5">{form.propertyType}</dd>
              </div>
              {form.squareFootage && (
                <div>
                  <dt className="text-[#5A6260] text-xs">Approximate Size</dt>
                  <dd className="font-medium text-[#1D2526] mt-0.5">{form.squareFootage}</dd>
                </div>
              )}
              {form.category === 'commercial' && form.cleaningFrequency && (
                <div>
                  <dt className="text-[#5A6260] text-xs">Requested Frequency</dt>
                  <dd className="font-medium text-[#1D2526] mt-0.5">{form.cleaningFrequency}</dd>
                </div>
              )}
              <div>
                <dt className="text-[#5A6260] text-xs">Contact Name</dt>
                <dd className="font-medium text-[#1D2526] mt-0.5">{form.fullName}</dd>
              </div>
              <div>
                <dt className="text-[#5A6260] text-xs">Email &amp; Phone / Method</dt>
                <dd className="font-medium text-[#1D2526] mt-0.5">
                  {form.email} · {form.phoneOrMethod}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`${COMPANY_INFO.emailHref}?subject=${encodeURIComponent(
                `Consultation Inquiry: ${form.service} (${form.cityOrZip})`
              )}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1D2526]/25 text-[#1D2526] text-sm font-medium hover:bg-[#F8F7F3] transition-colors min-h-[44px]"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email {COMPANY_INFO.email}</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-[#5A6260] hover:text-[#1D2526] transition-colors cursor-pointer min-h-[44px]"
            >
              Start Another Demonstration Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F7F3] border border-[#1D2526]/12">
      {/* Progress Indicator Header */}
      <div className="bg-[#E9E6DF]/70 border-b border-[#1D2526]/10 px-6 sm:px-10 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto pb-1 sm:pb-0">
            {STEPS.map((item) => {
              const isActive = step === item.number;
              const isCompleted = step > item.number;
              const canJump = isCompleted;
              return (
                <button
                  key={item.number}
                  type="button"
                  disabled={!canJump}
                  onClick={() => canJump && setStep(item.number)}
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#1D2526] font-semibold'
                      : isCompleted
                      ? 'text-[#3E5046] font-medium hover:text-[#1D2526] cursor-pointer'
                      : 'text-[#78817F] cursor-default'
                  }`}
                >
                  <span
                    className={`w-6 h-6 inline-flex items-center justify-center text-xs tabular-nums border ${
                      isActive
                        ? 'bg-[#1D2526] text-[#F8F7F3] border-[#1D2526]'
                        : isCompleted
                        ? 'bg-[#3E5046] text-[#F8F7F3] border-[#3E5046]'
                        : 'border-[#1D2526]/20 text-[#78817F]'
                    }`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : item.number}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <span className="text-xs tabular-nums text-[#5A6260]">
            Step {step} of 4
          </span>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-10 space-y-8">
        {/* Step 1: Select Project */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-medium text-[#1D2526]">
                Select Your Project Pathway
              </h2>
              <p className="text-sm text-[#5A6260] mt-2 max-w-2xl leading-relaxed">
                Choose whether your inquiry concerns a private residence or a commercial facility so we only ask questions relevant to your property.
              </p>
            </div>

            {errors.category && (
              <p role="alert" className="text-sm text-red-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{errors.category}</span>
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                type="button"
                onClick={() => handleSelectCategory('residential')}
                className={`text-left p-7 border transition-colors duration-150 cursor-pointer group ${
                  form.category === 'residential'
                    ? 'bg-[#E9E6DF] border-[#1D2526]'
                    : 'bg-[#F8F7F3] border-[#1D2526]/15 hover:border-[#1D2526]/50 hover:bg-[#E9E6DF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <Home className="w-6 h-6 text-[#3E5046] stroke-[1.5]" aria-hidden="true" />
                  <span className="text-xs text-[#5A6260] tabular-nums">Pathway 01</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1D2526]">
                  Residential &amp; Specialty Projects
                </h3>
                <p className="text-sm text-[#5A6260] mt-2 leading-relaxed">
                  For homeowners, estate managers, and designers seeking deep cleaning, move-in/move-out care, post-renovation cleanup, chandelier detailing, or pressure washing.
                </p>
                <p className="text-xs text-[#3E5046] font-medium mt-4 pt-4 border-t border-[#1D2526]/10">
                  Note: Project-based deep care only; standard weekly housekeeping is not offered.
                </p>
              </button>

              <button
                type="button"
                onClick={() => handleSelectCategory('commercial')}
                className={`text-left p-7 border transition-colors duration-150 cursor-pointer group ${
                  form.category === 'commercial'
                    ? 'bg-[#E9E6DF] border-[#1D2526]'
                    : 'bg-[#F8F7F3] border-[#1D2526]/15 hover:border-[#1D2526]/50 hover:bg-[#E9E6DF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <Building2 className="w-6 h-6 text-[#3E5046] stroke-[1.5]" aria-hidden="true" />
                  <span className="text-xs text-[#5A6260] tabular-nums">Pathway 02</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1D2526]">
                  Commercial Projects
                </h3>
                <p className="text-sm text-[#5A6260] mt-2 leading-relaxed">
                  For offices, multi-tenant lobbies, commercial carpet care, janitorial programs, tenant build-out cleanups, and exterior washing.
                </p>
                <p className="text-xs text-[#3E5046] font-medium mt-4 pt-4 border-t border-[#1D2526]/10">
                  Tailored scopes for Oklahoma City businesses and commercial facilities.
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Choose Service */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#3E5046] mb-1">
                  {form.category === 'commercial'
                    ? 'Commercial Projects'
                    : 'Residential & Specialty Projects'}
                </p>
                <h2 className="font-serif text-3xl font-medium text-[#1D2526]">
                  Choose Your Service
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-medium text-[#5A6260] hover:text-[#1D2526] underline underline-offset-4 cursor-pointer self-start sm:self-auto"
              >
                Switch Project Pathway
              </button>
            </div>

            {form.category === 'residential' && (
              <div className="bg-[#E9E6DF]/70 border border-[#1D2526]/10 p-4 text-xs sm:text-sm text-[#1D2526]/85 leading-relaxed">
                <strong>Service Scope Reminder:</strong> Our residential division focuses exclusively on detailed, project-based cleanings rather than routine weekly or bi-weekly housekeeping.
              </div>
            )}

            {errors.service && (
              <p role="alert" className="text-sm text-red-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{errors.service}</span>
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceChoices.map((option) => {
                const selected = form.service === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelectService(option.value)}
                    className={`text-left p-5 border transition-colors duration-150 cursor-pointer ${
                      selected
                        ? 'bg-[#1D2526] text-[#F8F7F3] border-[#1D2526]'
                        : 'bg-[#F8F7F3] text-[#1D2526] border-[#1D2526]/15 hover:border-[#1D2526]/50 hover:bg-[#E9E6DF]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-serif text-xl font-medium">{option.label}</span>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 ${
                          selected ? 'text-[#B49A70]' : 'text-[#78817F]'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className={`text-xs mt-1.5 leading-relaxed ${
                        selected ? 'text-[#F8F7F3]/80' : 'text-[#5A6260]'
                      }`}
                    >
                      {option.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Project Details */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-[#3E5046] mb-1">
                {form.category === 'commercial' ? 'Commercial' : 'Residential'} · {form.service}
              </p>
              <h2 className="font-serif text-3xl font-medium text-[#1D2526]">
                Property &amp; Project Details
              </h2>
              <p className="text-sm text-[#5A6260] mt-1.5">
                Fields marked with <span aria-hidden="true">*</span> are required. Quotes are determined individually based on property scope and condition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="quote-city-zip"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  City or ZIP Code <span className="text-[#3E5046]">*</span>
                </label>
                <input
                  id="quote-city-zip"
                  type="text"
                  required
                  value={form.cityOrZip}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, cityOrZip: e.target.value }));
                    if (errors.cityOrZip) setErrors((e2) => ({ ...e2, cityOrZip: '' }));
                  }}
                  placeholder="e.g., Oklahoma City, Nichols Hills, Edmond, or 73116"
                  aria-invalid={Boolean(errors.cityOrZip)}
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526] min-h-[44px]"
                />
                {errors.cityOrZip && (
                  <p role="alert" className="text-xs text-red-800 mt-1.5">
                    {errors.cityOrZip}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-property-type"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Property Type <span className="text-[#3E5046]">*</span>
                </label>
                <select
                  id="quote-property-type"
                  required
                  value={form.propertyType}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, propertyType: e.target.value }));
                    if (errors.propertyType) setErrors((e2) => ({ ...e2, propertyType: '' }));
                  }}
                  aria-invalid={Boolean(errors.propertyType)}
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] focus:border-[#1D2526] min-h-[44px]"
                >
                  <option value="">Select property type</option>
                  {propertyTypeChoices.map((pt) => (
                    <option key={pt} value={pt}>
                      {pt}
                    </option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p role="alert" className="text-xs text-red-800 mt-1.5">
                    {errors.propertyType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-sqft"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Approximate Square Footage <span className="text-xs font-normal text-[#5A6260]">(Optional)</span>
                </label>
                <input
                  id="quote-sqft"
                  type="text"
                  value={form.squareFootage}
                  onChange={(e) => setForm((p) => ({ ...p, squareFootage: e.target.value }))}
                  placeholder="e.g., 3,400 sq ft"
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526] min-h-[44px]"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-timing"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Preferred Timing <span className="text-xs font-normal text-[#5A6260]">(Optional)</span>
                </label>
                <input
                  id="quote-timing"
                  type="text"
                  value={form.preferredTiming}
                  onChange={(e) => setForm((p) => ({ ...p, preferredTiming: e.target.value }))}
                  placeholder="e.g., Next two weeks, or after remodel finishes"
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526] min-h-[44px]"
                />
              </div>

              {form.category === 'commercial' && (
                <div className="sm:col-span-2">
                  <label
                    htmlFor="quote-frequency"
                    className="block text-sm font-medium text-[#1D2526] mb-2"
                  >
                    Desired Commercial Cleaning Frequency <span className="text-xs font-normal text-[#5A6260]">(Optional)</span>
                  </label>
                  <select
                    id="quote-frequency"
                    value={form.cleaningFrequency}
                    onChange={(e) => setForm((p) => ({ ...p, cleaningFrequency: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] focus:border-[#1D2526] min-h-[44px]"
                  >
                    <option value="">Select frequency (optional)</option>
                    {QUOTE_OPTIONS.commercialFrequencies.map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="sm:col-span-2">
                <label
                  htmlFor="quote-description"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Project Description <span className="text-xs font-normal text-[#5A6260]">(Optional)</span>
                </label>
                <textarea
                  id="quote-description"
                  rows={4}
                  value={form.projectDescription}
                  onChange={(e) => setForm((p) => ({ ...p, projectDescription: e.target.value }))}
                  placeholder="Share surface materials, ceiling heights, areas of focus, or renovation status..."
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact Information */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-[#3E5046] mb-1">
                Final Step · {form.service} ({form.cityOrZip})
              </p>
              <h2 className="font-serif text-3xl font-medium text-[#1D2526]">
                Your Contact Information
              </h2>
              <p className="text-sm text-[#5A6260] mt-1.5">
                Fields marked with <span aria-hidden="true">*</span> are required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="quote-full-name"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Full Name <span className="text-[#3E5046]">*</span>
                </label>
                <input
                  id="quote-full-name"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, fullName: e.target.value }));
                    if (errors.fullName) setErrors((e2) => ({ ...e2, fullName: '' }));
                  }}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.fullName)}
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526] min-h-[44px]"
                />
                {errors.fullName && (
                  <p role="alert" className="text-xs text-red-800 mt-1.5">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-email"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Email Address <span className="text-[#3E5046]">*</span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, email: e.target.value }));
                    if (errors.email) setErrors((e2) => ({ ...e2, email: '' }));
                  }}
                  placeholder="name@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526] min-h-[44px]"
                />
                {errors.email && (
                  <p role="alert" className="text-xs text-red-800 mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Phone or Preferred Contact Method <span className="text-[#3E5046]">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="text"
                  required
                  value={form.phoneOrMethod}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, phoneOrMethod: e.target.value }));
                    if (errors.phoneOrMethod) setErrors((e2) => ({ ...e2, phoneOrMethod: '' }));
                  }}
                  placeholder="(405) 555-0199 or Email preferred"
                  aria-invalid={Boolean(errors.phoneOrMethod)}
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526] min-h-[44px]"
                />
                {errors.phoneOrMethod && (
                  <p role="alert" className="text-xs text-red-800 mt-1.5">
                    {errors.phoneOrMethod}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="quote-additional-message"
                  className="block text-sm font-medium text-[#1D2526] mb-2"
                >
                  Additional Message <span className="text-xs font-normal text-[#5A6260]">(Optional)</span>
                </label>
                <textarea
                  id="quote-additional-message"
                  rows={3}
                  value={form.additionalMessage}
                  onChange={(e) => setForm((p) => ({ ...p, additionalMessage: e.target.value }))}
                  placeholder="Any access notes, scheduling constraints, or questions..."
                  className="w-full px-4 py-3 bg-[#F8F7F3] border border-[#1D2526]/20 text-sm text-[#1D2526] placeholder:text-[#78817F] focus:border-[#1D2526]"
                />
              </div>
            </div>

            <div className="bg-[#E9E6DF]/65 border border-[#1D2526]/10 p-4 text-xs text-[#5A6260] leading-relaxed">
              <strong>Frontend Demonstration Notice:</strong> Submitting this form previews the consultation workflow for this redesign concept and does not transmit data to an external server. To reach OKC Uptown Cleaning Services, LLC directly, call{' '}
              <a href={COMPANY_INFO.phoneHref} className="text-[#1D2526] underline">
                {COMPANY_INFO.phoneDisplay}
              </a>
              .
            </div>
          </div>
        )}

        {/* Navigation Footer Inside Form */}
        <div className="pt-6 border-t border-[#1D2526]/10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1D2526]/20 text-sm font-medium text-[#1D2526] hover:bg-[#E9E6DF] transition-colors cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div className="text-xs text-[#5A6260]">
              Direct inquiries: {COMPANY_INFO.hoursPrimary}
            </div>
          )}

          {step === 3 && (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Continue to Contact Info</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}

          {step === 4 && (
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1D2526] text-[#F8F7F3] text-sm font-medium hover:bg-[#3E5046] transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Request My Project Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
