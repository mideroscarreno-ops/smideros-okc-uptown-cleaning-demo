import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ApproachPage } from './pages/ApproachPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ContactPage } from './pages/ContactPage';
import { SERVICES, type PageRoute, type ProjectCategory } from './data/siteData';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'residential',
  'commercial',
  'post-construction',
  'chandelier',
  'pressure-washing',
  'approach',
  'reviews',
  'faqs',
  'consultation',
  'contact',
];

function getInitialRoute(): PageRoute {
  const hash = window.location.hash.replace('#', '') as PageRoute;
  return VALID_ROUTES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);
  const [quotePreset, setQuotePreset] = useState<{
    category?: ProjectCategory;
    service?: string;
  }>({});

  const navigate = useCallback((page: PageRoute) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRequestQuote = useCallback(
    (category?: ProjectCategory, service?: string) => {
      setQuotePreset({ category, service });
      navigate('consultation');
    },
    [navigate]
  );

  useEffect(() => {
    const handleHashChange = () => {
      const next = getInitialRoute();
      setCurrentPage(next);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeService = SERVICES.find((s) => s.route === currentPage);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#1D2526]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#1D2526] focus:text-[#F8F7F3] focus:text-sm"
      >
        Skip to main content
      </a>

      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onStartConsultation={() => handleRequestQuote()}
      />

      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigate} onRequestQuote={handleRequestQuote} />
        )}
        {activeService && (
          <ServiceDetailPage
            service={activeService}
            onNavigate={navigate}
            onRequestQuote={handleRequestQuote}
          />
        )}
        {currentPage === 'approach' && (
          <ApproachPage onNavigate={navigate} onRequestQuote={handleRequestQuote} />
        )}
        {currentPage === 'reviews' && (
          <ReviewsPage onRequestQuote={handleRequestQuote} />
        )}
        {currentPage === 'faqs' && (
          <FaqPage onRequestQuote={handleRequestQuote} />
        )}
        {currentPage === 'consultation' && (
          <ConsultationPage
            initialCategory={quotePreset.category}
            initialService={quotePreset.service}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onRequestQuote={handleRequestQuote} />
        )}
      </main>

      <Footer
        onNavigate={navigate}
        onStartConsultation={() => handleRequestQuote()}
      />
    </div>
  );
}
