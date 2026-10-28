import React, { useState, useEffect } from 'react';
import { Heart, Globe, ArrowUp, X, ShieldCheck, Sparkles, ChevronLeft } from 'lucide-react';

interface FloatingDonationWidgetProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

const QUICK_TIERS = [
  { amount: '₹500', program: 'Meal Heals (Daily Hot Sattvic Meals)', desc: 'Feeds 20 destitute Matas a hot meal' },
  { amount: '₹1,500', program: 'Aarogyavardhan Healthcare & Free Surgeries', desc: '1 Month medicines & clinical care' },
  { amount: '₹3,000', program: 'Matri Seva Ashram (Shelter & Care)', desc: 'Full 1-Month Mata adoption & shelter' },
  { amount: '₹6,000', program: 'Aarogyavardhan Cataract Surgery', desc: 'Complete cataract lens surgery for 1 Mata' },
];

export const FloatingDonationWidget: React.FC<FloatingDonationWidgetProps> = ({ onOpenDonate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTierIdx, setSelectedTierIdx] = useState(2);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeTier = QUICK_TIERS[selectedTierIdx];
  const circleRadius = 18;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (scrollProgress / 100) * circleCircumference;

  return (
    <>
      {/* =========================================================================
          1. RIGHT-EDGE FLOATING DONATE DRAWER TAB & SLIDE-OUT DRAWER
          Always accessible throughout the entire page scroll (positioned 30% lower)
          ========================================================================= */}
      <div className="fixed right-0 top-[76%] -translate-y-1/2 z-40 flex items-center">
        {/* Slide-Out Quick Donate Drawer Panel */}
        <div
          className={`transition-all duration-300 ease-out overflow-hidden ${
            isDrawerOpen
              ? 'w-[300px] sm:w-[320px] opacity-100 mr-0 pointer-events-auto'
              : 'w-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-[300px] sm:w-[320px] bg-white/95 backdrop-blur-xl border border-r-0 border-slate-200/90 rounded-l-2xl shadow-[0_20px_50px_rgba(0,0,0,0.22)] p-4 text-slate-900 space-y-3.5">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#e65100] flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-[#e65100]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 m-0 leading-tight font-sans">
                    Sacred Seva Pledge
                  </h4>
                  <p className="text-[10px] text-slate-500 m-0 font-sans">
                    100% Direct Impact • 80G Exempt
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Quick Donate Drawer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Tier Selector */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block font-sans">
                Select Seva Sponsorship
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {QUICK_TIERS.map((tier, idx) => {
                  const isSelected = idx === selectedTierIdx;
                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => setSelectedTierIdx(idx)}
                      className={`py-1.5 px-1 rounded-lg text-xs font-bold font-sans transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#e65100] text-white border-[#e65100] shadow-2xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tier.amount}
                    </button>
                  );
                })}
              </div>
              <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-center gap-2 text-[11px] text-slate-800 font-medium font-sans">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">{activeTier.desc}</span>
              </div>
            </div>

            {/* Portal Actions */}
            <div className="space-y-2 pt-0.5">
              <button
                type="button"
                onClick={() => {
                  setIsDrawerOpen(false);
                  onOpenDonate('indian', activeTier.program);
                }}
                className="w-full btn-donate py-2.5 px-4 text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate {activeTier.amount} (Indian 80G)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsDrawerOpen(false);
                  onOpenDonate('foreign', activeTier.program);
                }}
                className="w-full py-2 px-3 rounded-full bg-slate-100 hover:bg-blue-50 text-[#003896] border border-slate-200 hover:border-blue-200 text-[11px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#003896]" />
                <span>Foreign Donors (FCRA Portal)</span>
              </button>
            </div>

            {/* Trust Footer */}
            <div className="pt-1 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant 80G Tax Receipt via Razorpay</span>
            </div>
          </div>
        </div>

        {/* Sleek Vertical Drawer Trigger Tab Docked to Right Edge */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          aria-expanded={isDrawerOpen}
          aria-label="Toggle Quick Donate Drawer"
          className="group relative flex flex-col items-center justify-center gap-2 py-3.5 px-2.5 rounded-l-2xl bg-gradient-to-b from-[#e65100] to-[#c63f00] hover:from-[#f55a05] hover:to-[#d84315] text-white shadow-[0_8px_25px_rgba(230,81,0,0.4)] border border-r-0 border-white/25 cursor-pointer transition-all duration-300"
        >
          <ChevronLeft
            className={`w-3.5 h-3.5 text-amber-200 transition-transform duration-300 ${
              isDrawerOpen ? 'rotate-180' : 'group-hover:-translate-x-0.5'
            }`}
          />
          <Heart className="w-4 h-4 fill-white animate-pulse" />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.2em] font-sans select-none"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            Donate
          </span>
        </button>
      </div>

      {/* =========================================================================
          2. SLEEK BACK TO TOP BUTTON WITH RADIAL SCROLL PROGRESS RING
          ========================================================================= */}
      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Back to Top"
        title="Back to Top"
        className={`fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-gradient-to-br from-[#e65100] to-[#c63f00] hover:from-[#f55a05] hover:to-[#d84315] text-white backdrop-blur-md shadow-[0_8px_25px_rgba(230,81,0,0.38)] border border-white/25 flex items-center justify-center cursor-pointer transition-all duration-300 group ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Radial Progress Ring SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={circleRadius}
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="2"
          />
          <circle
            cx="22"
            cy="22"
            r={circleRadius}
            fill="none"
            stroke="#FACC15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </>
  );
};
