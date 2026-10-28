import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { VisionImpactSection } from './components/VisionImpactSection';
import { Footer } from './components/Footer';
import { CreativeLoader } from './components/CreativeLoader';
import { DonationModal } from './components/DonationModal';
import { FloatingDonationWidget } from './components/FloatingDonationWidget';
import { HomePage } from './pages/HomePage';
import { initialPrograms, sampleDonors, type ProgramItem, type DonorRecord } from './data/mockCmsData';

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [portalType, setPortalType] = useState<'indian' | 'foreign'>('indian');
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>(undefined);

  const [programs] = useState<ProgramItem[]>(initialPrograms);
  const [, setDonorLedger] = useState<DonorRecord[]>(sampleDonors);

  const handleOpenDonate = (type: 'indian' | 'foreign', programName?: string) => {
    setPortalType(type);
    if (programName) {
      setPreselectedProgram(programName);
    }
    setIsDonateOpen(true);
  };

  const handleAddDonorRecord = (record: DonorRecord) => {
    setDonorLedger(prev => [record, ...prev]);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { pathname } = useLocation();

  // Universal Onload & Scroll Reveal Animation for All Sections
  useEffect(() => {
    const revealElements = document.querySelectorAll('.section-reveal, section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains('section-reveal')) {
        el.classList.add('section-reveal');
      }
      observer.observe(el);
    });

    // Reveal top-level viewport sections with smooth delay
    const initialTimer = setTimeout(() => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        }
      });
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(initialTimer);
    };
  }, [pathname]);

  return (
    <div
      onClickCapture={(e) => {
        const anchor = (e.target as HTMLElement).closest('a');
        if (anchor) {
          const href = anchor.getAttribute('href');
          if (href && href.startsWith('/') && href !== '/' && !href.startsWith('/#')) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }}
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#003896] selection:text-white"
    >
      {/* Creative Website Loader: Power of Giving on White Background */}
      <CreativeLoader />

      <ScrollToTop />

      {/* 1. Universal Top Navigation with Brand Logo & Ticker */}
      <Header
        onOpenDonate={(type, prog) => handleOpenDonate(type, prog)}
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
      />

      {/* 2. Home-Only Landmark (Other routes disabled for client preview) */}
      <main className="flex-1">
        <Routes>
          {/* Home Route Only */}
          <Route
            path="/"
            element={
              <HomePage
                programs={programs}
                onOpenDonate={handleOpenDonate}
                onNavigateSection={handleNavigateSection}
              />
            }
          />

          {/* Fallback all other routes to Home */}
          <Route
            path="*"
            element={
              <HomePage
                programs={programs}
                onOpenDonate={handleOpenDonate}
                onNavigateSection={handleNavigateSection}
              />
            }
          />
        </Routes>
      </main>

      {/* 3. Vision Impact & Emotional Donor Callout Section (On All Pages) */}
      <VisionImpactSection onOpenDonate={(type, prog) => handleOpenDonate(type, prog)} />

      {/* 4. Comprehensive Footer with all 21 Scope Deliverables */}
      <Footer
        onOpenDonate={(type) => handleOpenDonate(type)}
        onNavigateSection={handleNavigateSection}
      />

      {/* 4. Floating Donate Drawer & Sleek Back-to-Top Widget */}
      <FloatingDonationWidget onOpenDonate={handleOpenDonate} />

      {/* 5. Dedicated Razorpay & 80G Tax Exemption Modal */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialPortalType={portalType}
        onAddDonorRecord={handleAddDonorRecord}
        preselectedProgram={preselectedProgram}
      />
    </div>
  );
}

export default App;
