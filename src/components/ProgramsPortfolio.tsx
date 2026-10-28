import React, { useState } from 'react';
import type { ProgramItem } from '../data/mockCmsData';
import { 
  Heart, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Home,
  Users,
  Stethoscope,
  Utensils,
  Shield,
  Flame
} from 'lucide-react';

interface ProgramsPortfolioProps {
  programs: ProgramItem[];
  onSelectProgramDonate: (programTitle: string) => void;
}

interface ProgramSponsorshipOption {
  amount: number;
  label: string;
  impact: string;
  isPopular?: boolean;
}

const PROGRAM_SPONSORSHIP_MAP: Record<string, ProgramSponsorshipOption[]> = {
  'prog-1': [ // Matri Seva Ashram
    { amount: 1500, label: '₹1,500', impact: '15 Days Full Ashram Living & Rations' },
    { amount: 3000, label: '₹3,000', impact: 'Full 1-Month Residential Adoption', isPopular: true },
    { amount: 9000, label: '₹9,000', impact: 'Quarterly Shelter, Rations & 24/7 Nursing' },
  ],
  'prog-2': [ // Matri Seva Community
    { amount: 1000, label: '₹1,000', impact: 'Monthly 15kg Grain & Pulse Ration Kit' },
    { amount: 2500, label: '₹2,500', impact: 'Monthly Rations + Daily A2 Cow Milk', isPopular: true },
    { amount: 5000, label: '₹5,000', impact: 'Full Doorstep Sustenance for 2 Mothers' },
  ],
  'prog-3': [ // Aarogyavardhan
    { amount: 1000, label: '₹1,000', impact: 'Monthly BP, Diabetes & Arthritis Prescriptions' },
    { amount: 3500, label: '₹3,500', impact: 'Doctor OPD + Diagnostics + 1 Month Meds', isPopular: true },
    { amount: 6000, label: '₹6,000', impact: 'Complete Cataract Surgery with IOL Lens' },
  ],
  'prog-4': [ // Pashu Seva
    { amount: 500, label: '₹500', impact: 'Daily Fresh Green Fodder & Jaggery for 5 Cows' },
    { amount: 1500, label: '₹1,500', impact: 'Emergency Stray Animal Rescue & Wound Dressing', isPopular: true },
    { amount: 5000, label: '₹5,000', impact: 'Complete Gaushala Weekly Medical Care' },
  ],
  'prog-5': [ // Meal Heals
    { amount: 750, label: '₹750', impact: '25 Hot Nutritious Vegetarian Meals' },
    { amount: 1500, label: '₹1,500', impact: '50 Hot Meals + Daily Morning Cow Milk', isPopular: true },
    { amount: 3000, label: '₹3,000', impact: '100 Complete Annapurna Plates Distributed' },
  ],
  'prog-6': [ // Circle of Love
    { amount: 500, label: '₹500', impact: 'Devotional Craft & Garland Making Materials' },
    { amount: 1500, label: '₹1,500', impact: 'Festive Clothes & Treats for Sacred Festivals', isPopular: true },
    { amount: 3000, label: '₹3,000', impact: 'Annual Companion Care & Bhajan Celebrations' },
  ]
};

const DEFAULT_OPTIONS: ProgramSponsorshipOption[] = [
  { amount: 1000, label: '₹1,000', impact: 'Essential Seva Sustenance' },
  { amount: 3000, label: '₹3,000', impact: 'Full Monthly Sponsorship', isPopular: true },
  { amount: 6000, label: '₹6,000', impact: 'Comprehensive Healing & Sustenance' }
];

interface ProgramColorTheme {
  tabActive: string;
  tabInactive: string;
  iconActive: string;
  iconInactive: string;
  amountActive: string;
  amountPopularText: string;
  ctaButton: string;
  progressBar: string;
  boxBorder: string;
  heartIcon: string;
}

const PROGRAM_COLOR_THEMES: Record<string, ProgramColorTheme> = {
  'prog-1': { // Matri Seva Ashram - Saffron Orange
    tabActive: 'bg-gradient-to-r from-[#e65100] to-[#d84315] text-white border-[#e65100] ring-2 ring-orange-400/50 shadow-md shadow-orange-500/25 font-bold scale-[1.02]',
    tabInactive: 'bg-orange-50/70 hover:bg-orange-100/80 text-[#c2410c] border-orange-300 hover:border-[#e65100] font-semibold',
    iconActive: 'text-amber-200',
    iconInactive: 'text-[#e65100]',
    amountActive: 'bg-gradient-to-r from-[#e65100] to-[#d84315] text-white border-[#e65100] shadow-sm',
    amountPopularText: 'text-orange-700',
    ctaButton: 'bg-gradient-to-r from-[#e65100] to-[#d84315] hover:from-[#f55a05] hover:to-[#cf4500] shadow-orange-500/25',
    progressBar: 'from-[#e65100] via-orange-500 to-amber-500',
    boxBorder: 'border-orange-200/90 bg-orange-50/35',
    heartIcon: 'text-[#e65100]',
  },
  'prog-2': { // Matri Seva Community - Sacred Emerald Green
    tabActive: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 ring-2 ring-emerald-400/50 shadow-md shadow-emerald-600/25 font-bold scale-[1.02]',
    tabInactive: 'bg-emerald-50/70 hover:bg-emerald-100/80 text-emerald-800 border-emerald-300 hover:border-emerald-600 font-semibold',
    iconActive: 'text-emerald-200',
    iconInactive: 'text-emerald-600',
    amountActive: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-sm',
    amountPopularText: 'text-emerald-700',
    ctaButton: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-700 shadow-emerald-600/25',
    progressBar: 'from-emerald-600 via-teal-500 to-emerald-400',
    boxBorder: 'border-emerald-200/90 bg-emerald-50/35',
    heartIcon: 'text-emerald-600',
  },
  'prog-3': { // Aarogyavardhan Medical Program - Royal Sky Blue
    tabActive: 'bg-gradient-to-r from-[#0284c7] to-[#003896] text-white border-[#0284c7] ring-2 ring-sky-400/50 shadow-md shadow-sky-600/25 font-bold scale-[1.02]',
    tabInactive: 'bg-sky-50/70 hover:bg-sky-100/80 text-[#0369a1] border-sky-300 hover:border-[#0284c7] font-semibold',
    iconActive: 'text-sky-200',
    iconInactive: 'text-[#0284c7]',
    amountActive: 'bg-gradient-to-r from-[#0284c7] to-[#003896] text-white border-[#0284c7] shadow-sm',
    amountPopularText: 'text-sky-700',
    ctaButton: 'bg-gradient-to-r from-[#0284c7] to-[#003896] hover:from-sky-500 hover:to-[#002878] shadow-sky-600/25',
    progressBar: 'from-[#0284c7] via-blue-500 to-cyan-400',
    boxBorder: 'border-sky-200/90 bg-sky-50/35',
    heartIcon: 'text-[#0284c7]',
  },
  'prog-4': { // Pashu Seva - Warm Amber Gold
    tabActive: 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 ring-2 ring-amber-400/50 shadow-md shadow-amber-600/25 font-bold scale-[1.02]',
    tabInactive: 'bg-amber-50/80 hover:bg-amber-100/80 text-amber-900 border-amber-300 hover:border-amber-600 font-semibold',
    iconActive: 'text-yellow-200',
    iconInactive: 'text-amber-600',
    amountActive: 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-sm',
    amountPopularText: 'text-amber-700',
    ctaButton: 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 shadow-amber-600/25',
    progressBar: 'from-amber-600 via-amber-500 to-yellow-400',
    boxBorder: 'border-amber-200/90 bg-amber-50/35',
    heartIcon: 'text-amber-600',
  },
  'prog-5': { // Meal Heals - Crimson Rose
    tabActive: 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-600 ring-2 ring-rose-400/50 shadow-md shadow-rose-600/25 font-bold scale-[1.02]',
    tabInactive: 'bg-rose-50/70 hover:bg-rose-100/80 text-rose-800 border-rose-300 hover:border-rose-600 font-semibold',
    iconActive: 'text-rose-200',
    iconInactive: 'text-rose-600',
    amountActive: 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-600 shadow-sm',
    amountPopularText: 'text-rose-700',
    ctaButton: 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-700 shadow-rose-600/25',
    progressBar: 'from-rose-600 via-pink-500 to-orange-400',
    boxBorder: 'border-rose-200/90 bg-rose-50/35',
    heartIcon: 'text-rose-600',
  },
  'prog-6': { // Circle of Love - Royal Violet Purple
    tabActive: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600 ring-2 ring-violet-400/50 shadow-md shadow-violet-600/25 font-bold scale-[1.02]',
    tabInactive: 'bg-violet-50/70 hover:bg-violet-100/80 text-violet-800 border-violet-300 hover:border-violet-600 font-semibold',
    iconActive: 'text-violet-200',
    iconInactive: 'text-violet-600',
    amountActive: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600 shadow-sm',
    amountPopularText: 'text-violet-700',
    ctaButton: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-700 shadow-violet-600/25',
    progressBar: 'from-violet-600 via-purple-500 to-fuchsia-400',
    boxBorder: 'border-violet-200/90 bg-violet-50/35',
    heartIcon: 'text-violet-600',
  },
};

const getProgramIcon = (category: string) => {
  switch (category) {
    case 'Matri Seva':
      return Home;
    case 'Healthcare':
      return Stethoscope;
    case 'Animal Welfare':
      return Shield;
    case 'Nutrition':
      return Utensils;
    case 'Heart Of Seva':
      return Flame;
    default:
      return Users;
  }
};

export const ProgramsPortfolio: React.FC<ProgramsPortfolioProps> = ({
  programs,
  onSelectProgramDonate
}) => {
  const [activeProgramId, setActiveProgramId] = useState<string>(programs[0]?.id || 'prog-1');
  const [selectedPledge, setSelectedPledge] = useState<number>(3000);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const activeProgram = 
    programs.find(p => p.id === activeProgramId) || programs[0];

  const activeIndex = programs.findIndex(p => p.id === activeProgram?.id);

  const sponsorshipOptions = 
    PROGRAM_SPONSORSHIP_MAP[activeProgram.id] || DEFAULT_OPTIONS;

  const currentOption = 
    sponsorshipOptions.find(o => o.amount === selectedPledge) || sponsorshipOptions[1] || sponsorshipOptions[0];

  const activeTheme =
    PROGRAM_COLOR_THEMES[activeProgram.id] || PROGRAM_COLOR_THEMES['prog-1'];

  const handleProgramSelect = (prog: ProgramItem) => {
    if (prog.id === activeProgramId || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProgramId(prog.id);
      const opts = PROGRAM_SPONSORSHIP_MAP[prog.id] || DEFAULT_OPTIONS;
      const defaultOpt = opts.find(o => o.isPopular) || opts[0];
      setSelectedPledge(defaultOpt.amount);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 40);
    }, 180);
  };

  const handlePrev = () => {
    if (programs.length <= 1 || isTransitioning) return;
    const nextIdx = (activeIndex - 1 + programs.length) % programs.length;
    handleProgramSelect(programs[nextIdx]);
  };

  const handleNext = () => {
    if (programs.length <= 1 || isTransitioning) return;
    const nextIdx = (activeIndex + 1) % programs.length;
    handleProgramSelect(programs[nextIdx]);
  };

  const percent = activeProgram 
    ? Math.min(100, Math.round((activeProgram.raisedAmount / activeProgram.monthlyGoal) * 100))
    : 0;

  return (
    <section id="programs" className="py-8 sm:py-10 lg:py-12 bg-[#fafbfc] border-b border-slate-200">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        
        {/* Section Header: Clean, Compact, No Eyebrow */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 
            style={{ fontSize: '24px' }}
            className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] font-heading leading-snug m-0"
          >
            Comprehensive lifelong care for Vrindavan's vulnerable
          </h2>

          <p className="text-[#444444] text-xs sm:text-[13px] leading-relaxed max-w-2xl mx-auto font-sans m-0">
            Every Mata and sacred living being is sustained through direct citizen sponsorships. Select an initiative below to witness the exact tangible transformation of your gift.
          </p>
        </div>

        {/* =========================================================================
            PROGRAM SELECTOR TABS: 6 High-Visibility Four-Side Bordered Tabs
            ========================================================================= */}
        <div className="w-full max-w-[1400px] mx-auto overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center justify-start xl:justify-center flex-nowrap whitespace-nowrap gap-2.5 sm:gap-3 min-w-max mx-auto px-2">
            {programs.map((prog) => {
              const isActive = prog.id === activeProgram.id;
              const Icon = getProgramIcon(prog.category);
              const tabTheme = PROGRAM_COLOR_THEMES[prog.id] || PROGRAM_COLOR_THEMES['prog-1'];

              // Exact titles as requested by user
              let displayTitle = prog.title.split('(')[0].trim();
              if (prog.id === 'prog-1') displayTitle = 'Matri Seva Ashram';
              if (prog.id === 'prog-2') displayTitle = 'Matri Seva Community';
              if (prog.id === 'prog-3') displayTitle = 'Aarogyavardhan Medical Program';
              if (prog.id === 'prog-4') displayTitle = 'Pashu Seva';
              if (prog.id === 'prog-5') displayTitle = 'Meal Heals';
              if (prog.id === 'prog-6') displayTitle = 'Circle of Love & Emotional Well-Being';

              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => handleProgramSelect(prog)}
                  className={`group relative py-2.5 px-4 rounded-xl cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 text-center shrink-0 border ${
                    isActive ? tabTheme.tabActive : tabTheme.tabInactive
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? tabTheme.iconActive : tabTheme.iconInactive
                  }`} />
                  <span className="text-xs sm:text-[13px] leading-tight whitespace-nowrap">
                    {displayTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            THE SEVA GIVING CONSOLE (Pure Unobstructed Visual + Compact Giving Suite)
            ========================================================================= */}
        <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Wing (5 cols): Pure Unobstructed Photography with Smooth Cross-Fade */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full overflow-hidden bg-slate-950 flex flex-col justify-end p-4 group">
            
            <div className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out ${
              isTransitioning ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
            }`}>
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle Prev / Next Navigation Controls Only */}
            <div className="relative z-10 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Seva Initiative"
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Seva Initiative"
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Wing (7 cols): Clean, Uncongested Giving Suite with Smooth Fade */}
          <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4">
            
            <div className={`space-y-3 transition-all duration-300 ease-out ${
              isTransitioning ? 'opacity-0 translate-y-1.5' : 'opacity-100 translate-y-0'
            }`}>
              
              {/* Program Header - NO "ACTIVE INITIATIVE DOSSIER" */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#18181b] font-heading m-0 leading-snug">
                  {activeProgram.title}
                </h3>
                <p className="text-xs font-medium text-slate-700 font-sans m-0 pt-0.5">
                  {activeProgram.tagline}
                </p>
              </div>

              {/* Narrative Story (Clean 2 lines max) */}
              <p className="text-[#444444] text-xs sm:text-[13px] leading-relaxed font-sans m-0 line-clamp-2">
                {activeProgram.description}
              </p>

              {/* Sponsorship Tier Matrix */}
              <div className={`p-3 sm:p-3.5 rounded-xl border space-y-2 transition-colors duration-300 ${activeTheme.boxBorder}`}>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-slate-700 font-sans flex items-center gap-1.5">
                    <Heart className={`w-3 h-3 transition-colors duration-300 ${activeTheme.heartIcon}`} />
                    <span>Choose Sacred Sponsorship</span>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {sponsorshipOptions.map((opt) => {
                    const isSelected = selectedPledge === opt.amount;

                    return (
                      <button
                        key={opt.amount}
                        type="button"
                        onClick={() => setSelectedPledge(opt.amount)}
                        className={`py-2 px-2 rounded-lg text-center transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? activeTheme.amountActive
                            : 'bg-white hover:bg-slate-100/90 text-slate-800 border-slate-200'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold font-sans">
                          {opt.label}
                        </div>
                        {opt.isPopular && (
                          <span className={`text-[8px] sm:text-[9px] uppercase tracking-wider font-bold block pt-0.5 ${
                            isSelected ? 'text-white/90' : activeTheme.amountPopularText
                          }`}>
                            Most Sacred
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Tangible Outcome */}
                <div className="text-[11px] sm:text-xs text-slate-700 font-sans flex items-center gap-1.5 pt-0.5">
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 stroke-[1] ${activeTheme.heartIcon}`} />
                  <span className="font-medium text-slate-800 truncate">
                    {currentOption.impact}
                  </span>
                </div>
              </div>



              {/* Compact Live Funding Gauge */}
              <div className="space-y-1 pt-1.5 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] text-[#444444] font-sans">
                  <span className="font-medium uppercase tracking-wider text-slate-500 text-[10px]">
                    Monthly Field Budget
                  </span>
                  <span className="font-semibold text-slate-900 font-mono">
                    ₹{activeProgram.raisedAmount.toLocaleString('en-IN')} / ₹{activeProgram.monthlyGoal.toLocaleString('en-IN')} ({percent}%)
                  </span>
                </div>
                <div className="w-full h-[2.5px] rounded-full bg-slate-200 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${activeTheme.progressBar} rounded-full transition-all duration-500`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>

            </div>

            {/* Direct Action Suite */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onSelectProgramDonate(activeProgram.title)}
                className={`w-full py-3 px-6 ${activeTheme.ctaButton} text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.005] active:scale-[0.99]`}
              >
                <Heart className="w-4 h-4 fill-white shrink-0" />
                <span>Pledge ₹{selectedPledge.toLocaleString('en-IN')} for {activeProgram.title.split('(')[0].trim()}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>

        </div>

        {/* Public Accountability Ledger: Clean & Compact */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <div className="space-y-1 text-center lg:text-left">
            <h3 
              style={{ fontSize: '20px' }}
              className="!text-[20px] font-normal tracking-[-0.015em] text-[#18181b] font-heading m-0 leading-snug"
            >
              100% transparent Seva ledger & audited metrics
            </h3>
            <p className="text-xs text-slate-500 max-w-xl font-sans m-0">
              Every rupee and grocery kit is accounted for with audited statements and direct community monitoring.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-8 shrink-0">
            <div className="text-center space-y-0.5">
              <p className="font-heading text-xl sm:text-2xl font-light text-[#18181b] m-0">1,420</p>
              <p className="text-[10px] text-slate-500 font-sans uppercase tracking-wider m-0">Matas Aided</p>
            </div>
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <div className="text-center space-y-0.5">
              <p className="font-heading text-xl sm:text-2xl font-light text-[#18181b] m-0">3,250</p>
              <p className="text-[10px] text-slate-500 font-sans uppercase tracking-wider m-0">Daily Meals</p>
            </div>
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <div className="text-center space-y-0.5">
              <p className="font-heading text-xl sm:text-2xl font-light text-[#18181b] m-0">5,680</p>
              <p className="text-[10px] text-slate-500 font-sans uppercase tracking-wider m-0">Surgeries</p>
            </div>
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <div className="text-center space-y-0.5">
              <p className="font-heading text-xl sm:text-2xl font-light text-emerald-700 m-0">80G</p>
              <p className="text-[10px] text-slate-500 font-sans uppercase tracking-wider m-0">Tax Exempt</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
