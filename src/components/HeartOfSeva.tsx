import React, { useState } from 'react';
import { 
  Heart, 
  Send, 
  Sparkles, 
  PhoneCall, 
  MapPin,
  Flame, 
  Check,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';

interface HeartOfSevaProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

interface ImpactTier {
  threshold: number;
  label: string;
  badge?: string;
  category: string;
  title: string;
  desc: string;
  items: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
  gradient: string;
  lightBg: string;
  borderColor: string;
  textColor: string;
  pillActive: string;
}

const IMPACT_TIERS: ImpactTier[] = [
  {
    threshold: 500,
    label: '₹500',
    category: 'Essential Healthcare',
    title: 'Monthly Chronic Medical Aid',
    desc: 'Covers essential monthly blood pressure, diabetes, and joint mobility prescriptions for 1 elderly Mata.',
    items: [
      'Full 30-day chronic medication kit',
      'Free doctor consultation & health vitals check',
      'Doorstep medical attendant follow-up'
    ],
    image: '/images/aarogyavardhan.jpg',
    imageAlt: 'Doctor providing free healthcare to Mata',
    accentColor: '#0284c7',
    gradient: 'from-sky-500 to-blue-600',
    lightBg: 'bg-sky-50/70',
    borderColor: 'border-sky-300',
    textColor: 'text-sky-700',
    pillActive: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25 ring-2 ring-sky-400/50'
  },
  {
    threshold: 1500,
    label: '₹1,500',
    category: 'Nutrition & Daily Sustenance',
    title: 'Monthly Wholesome Rations & Fresh A2 Milk',
    desc: 'Supplies a full 30-day nutrition kit with wheat flour, rice, lentils, pure mustard oil, vegetables, and daily cow milk.',
    items: [
      '15kg grains, pulses, spices & cooking oil',
      'Daily 500ml pure fresh A2 cow milk',
      'Seasonal fruits & bedside nutritional support'
    ],
    image: '/images/meal-heals.jpg',
    imageAlt: 'Daily hot meal and ration seva',
    accentColor: '#059669',
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50/70',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-700',
    pillActive: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 ring-2 ring-emerald-400/50'
  },
  {
    threshold: 3000,
    label: '₹3,000',
    badge: 'Most Needed',
    category: 'Sacred Mata Adoption',
    title: 'Complete Monthly Mata Adoption',
    desc: 'Covers everything an elderly Mata needs to live in peace and sacred dignity: food, medicines, warm clothes, and room shelter.',
    items: [
      'Complete monthly nutrition kit & daily milk',
      'Full medical checkups, prescriptions & diagnostics',
      'Room rental assistance & warm seasonal bedding'
    ],
    image: '/images/matri-seva.jpg',
    imageAlt: 'Destitute Mata smiling peacefully in Vrindavan',
    accentColor: '#d97706',
    gradient: 'from-amber-500 via-orange-500 to-amber-600',
    lightBg: 'bg-amber-50/70',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-800',
    pillActive: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-md shadow-amber-500/30 ring-2 ring-amber-400/50'
  },
  {
    threshold: 6000,
    label: '₹6,000',
    category: 'Sight & Critical Healthcare',
    title: 'Vision Restoration & Surgical Care',
    desc: 'Funds specialized micro-incision cataract surgery with lens implants or inpatient hospitalization with zero out-of-pocket cost.',
    items: [
      'Micro-incision cataract surgery with IOL lens',
      'Hospital transport, meals & inpatient nursing',
      'Lifelong follow-up care & protective eyeglasses'
    ],
    image: '/images/aarogyavardhan.jpg',
    imageAlt: 'Cataract eye surgery restoring vision',
    accentColor: '#6366f1',
    gradient: 'from-indigo-600 to-purple-600',
    lightBg: 'bg-indigo-50/70',
    borderColor: 'border-indigo-300',
    textColor: 'text-indigo-700',
    pillActive: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 ring-2 ring-indigo-400/50'
  },
  {
    threshold: 12000,
    label: '₹12,000',
    category: 'Multi-Mata Pillar',
    title: 'Full Lifelong Sustenance for 4 Matas',
    desc: 'Transforms the lives of an entire household of 4 elderly Matas, ensuring they never face hunger, isolation, or abandonment again.',
    items: [
      'Full food, milk & healthcare kits for 4 Matas',
      'Monthly doctor visits & emergency medical reserve',
      'Companion care, sacred festivals & spiritual seva'
    ],
    image: '/images/circle-of-love.jpg',
    imageAlt: 'Group of elderly Matas in Vrindavan',
    accentColor: '#e11d48',
    gradient: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50/70',
    borderColor: 'border-rose-300',
    textColor: 'text-rose-700',
    pillActive: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25 ring-2 ring-rose-400/50'
  }
];

export const HeartOfSeva: React.FC<HeartOfSevaProps> = ({ onOpenDonate }) => {
  const [sliderValue, setSliderValue] = useState<number>(3000);
  const [prayerName, setPrayerName] = useState('');
  const [prayerIntention, setPrayerIntention] = useState('');
  const [prayerSent, setPrayerSent] = useState(false);
  const [showPrayerForm, setShowPrayerForm] = useState(false);

  // Find corresponding tier based on slider value
  const currentTier = 
    [...IMPACT_TIERS].reverse().find(t => sliderValue >= t.threshold) || IMPACT_TIERS[0];

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prayerName && prayerIntention) {
      setPrayerSent(true);
      setTimeout(() => {
        setPrayerSent(false);
        setPrayerName('');
        setPrayerIntention('');
        setShowPrayerForm(false);
      }, 4000);
    }
  };

  return (
    <section id="heart-of-seva" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200">
      {/* Fit to screen container with generous padding */}
      <div className="w-full max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Hero Calculator Section matching reference image - Center Aligned & Fit to Screen */}
        <div className="w-full bg-[#eef3ea] p-3 sm:p-5 lg:p-7 rounded-[32px] sm:rounded-[44px] mb-12 sm:mb-16 shadow-xs">
          
          <div className="w-full bg-white rounded-[24px] sm:rounded-[36px] shadow-xl border border-slate-200/70 p-5 sm:p-8 lg:p-12">
            
            {/* Top Bar: Eyebrow Tag + Segmented Tier Tabs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 mb-6 sm:mb-8 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-slate-800 font-sans">
                  SACRED IMPACT CALCULATOR
                </span>
              </div>

              {/* Fast Tier Selector Pills - Each Tab in Different Color */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {IMPACT_TIERS.map((tier) => {
                  const isSelected = currentTier.threshold === tier.threshold;
                  return (
                    <button
                      key={tier.threshold}
                      type="button"
                      onClick={() => setSliderValue(tier.threshold)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? `${tier.pillActive} border-transparent font-bold scale-[1.03]`
                          : `${tier.lightBg} ${tier.borderColor} ${tier.textColor} hover:brightness-95`
                      }`}
                    >
                      <span>{tier.label}</span>
                      {tier.badge && (
                        <span className={`text-[9px] uppercase font-bold px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-white/25 text-white' : 'bg-white/80 text-slate-900'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main 2-Column Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtext, Calculator Tier & Controls, Action Buttons, Stats */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
                
                {/* Section Headline matching standardized 24px font properties */}
                <div className="space-y-2">
                  <h2 
                    style={{ fontSize: '24px' }}
                    className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] leading-snug m-0 font-heading"
                  >
                    A sacred way to serve &amp; restore dignity
                  </h2>
                  <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-sans m-0 max-w-lg">
                    See how your monthly pledge directly provides wholesome nutrition, free medical surgeries, and loving shelter for Vrindavan's elderly Matas.
                  </p>
                </div>

                {/* Active Tier Dynamic Card */}
                <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-100 space-y-3">
                  
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-none bg-gradient-to-r ${currentTier.gradient} bg-clip-text text-transparent`}>
                      ₹{sliderValue.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500 font-sans font-medium">
                      / monthly sacred pledge
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading m-0 leading-snug">
                    {currentTier.title}
                  </h3>

                  <p className="text-[#444444] text-xs sm:text-[13px] leading-relaxed font-sans m-0">
                    {currentTier.desc}
                  </p>

                  {/* Checklist of deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-200/60">
                    {currentTier.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-700 font-sans">
                        <div 
                          className="w-4 h-4 rounded-full text-white flex items-center justify-center shrink-0"
                          style={{ backgroundColor: currentTier.accentColor }}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[1]" />
                        </div>
                        <span className="font-medium truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Slider */}
                  <div className="pt-2">
                    <input
                      type="range"
                      min="500"
                      max="15000"
                      step="500"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-full h-2 bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 via-indigo-500 to-rose-500 rounded-lg appearance-none cursor-pointer focus:outline-none accent-slate-900"
                    />
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-sans pt-1">
                      <span>₹500 / mo</span>
                      <span className="text-slate-400">← Drag slider to explore impact →</span>
                      <span>₹15,000+ / mo</span>
                    </div>
                  </div>

                </div>

                {/* Two Action Buttons - Dynamic Color Matching Selected Tier */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenDonate('indian', currentTier.title)}
                    className={`px-7 py-3 rounded-full bg-gradient-to-r ${currentTier.gradient} text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 flex items-center gap-2 cursor-pointer`}
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Pledge ₹{sliderValue.toLocaleString('en-IN')} Monthly</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenDonate('indian')}
                    className="px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    <span>One-Time Seva Gift</span>
                  </button>
                </div>

                {/* Bottom 3 Metrics with vertical divider lines (exact match to 15,2K | 4,5K | ∞) */}
                <div className="flex items-center gap-6 sm:gap-8 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#18181b] font-heading block">
                      1,500+
                    </span>
                    <span className="text-[11px] text-slate-500 font-sans">
                      Matas in Care
                    </span>
                  </div>

                  <div className="h-8 border-r border-slate-200"></div>

                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#18181b] font-heading block">
                      3,200+
                    </span>
                    <span className="text-[11px] text-slate-500 font-sans">
                      Daily Fresh Meals
                    </span>
                  </div>

                  <div className="h-8 border-r border-slate-200"></div>

                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#18181b] font-heading block">
                      100%
                    </span>
                    <span className="text-[11px] text-slate-500 font-sans">
                      Direct Seva
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: The 3-Photo Bento Collage from the Reference Image */}
              <div className="lg:col-span-5 relative w-full max-w-[460px] mx-auto min-h-[440px] sm:min-h-[480px]">
                
                {/* Floating Cyan Circle with Diagonal Arrow */}
                <div className="w-11 h-11 rounded-full bg-[#89d0ec] text-white flex items-center justify-center shadow-lg absolute -top-3 left-[46%] z-20 hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 stroke-[1]" />
                </div>

                {/* Floating Sparkles & Accent Dots */}
                <span className="absolute top-28 right-[48%] text-emerald-600 text-base font-bold select-none z-20">✦</span>
                <span className="absolute bottom-24 right-[42%] text-emerald-600 text-sm font-bold select-none z-20">✦</span>
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 absolute bottom-16 right-16 z-20"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400/80 absolute top-8 right-12 z-20"></div>

                {/* Bento Card 1: Top-Left (Pastel Sky Blue Background) */}
                <div className="absolute top-2 left-0 w-[52%] aspect-4/5 rounded-[28px] overflow-hidden bg-[#89d0ec] shadow-md border-4 border-white z-10 group">
                  <img 
                    src="/images/mata-happy-1.jpg" 
                    alt="Mata in Vrindavan" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bento Card 2: Top-Right (Pastel Lilac Background, Shifted Lower) */}
                <div className="absolute top-14 right-0 w-[47%] aspect-4/5 rounded-[28px] overflow-hidden bg-[#b8a5ea] shadow-md border-4 border-white z-10 group">
                  <img 
                    src="/images/mata-happy-2.jpg" 
                    alt="Mata with peaceful smile" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bento Card 3: Bottom-Left (Pastel Sage Green Background) */}
                <div className="absolute bottom-0 left-6 w-[52%] aspect-4/3 rounded-[28px] overflow-hidden bg-[#77a884] shadow-md border-4 border-white z-10 group">
                  <img 
                    src="/images/mata-happy-3.jpg" 
                    alt="Mata with warm meal and tea" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Lavender Pill Badge (Bottom-Right with rings icon) */}
                <div className="bg-[#b8a5ea] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 absolute bottom-10 right-2 sm:right-6 z-20 text-xs font-bold">
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>Matri Seva</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 3 Pillars of Sacred Seva: Clean, Open Minimalist Grid - Expanded Width */}
        {/* 3 Pillars of Sacred Seva: Clean, Open Minimalist Grid - Center Aligned & Icon in Front of Heading */}
        <div className="w-full max-w-6xl mx-auto pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Pillar 1: Companion Seva */}
            <div className="space-y-2 text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#18181b] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 stroke-[1]" />
                </div>
                <h3 className="text-base font-semibold text-[#18181b] font-heading m-0">
                  Circle of Love
                </h3>
              </div>
              <p className="text-[11px] font-medium text-slate-700 uppercase tracking-wider m-0">
                Eradicating Loneliness
              </p>
              <p className="text-[#444444] text-xs sm:text-[13px] leading-relaxed font-sans m-0 max-w-xs">
                Over 750 destitute Matas are paired with compassionate volunteers worldwide for regular calls, birthday celebrations, and lifelong companionship.
              </p>
            </div>

            {/* Pillar 2: In-Person Pilgrimage */}
            <div className="space-y-2 text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#18181b] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 stroke-[1]" />
                </div>
                <h3 className="text-base font-semibold text-[#18181b] font-heading m-0">
                  In-Person Pilgrimage
                </h3>
              </div>
              <p className="text-[11px] font-medium text-slate-700 uppercase tracking-wider m-0">
                Serve with Your Own Hands
              </p>
              <p className="text-[#444444] text-xs sm:text-[13px] leading-relaxed font-sans m-0 max-w-xs">
                Devotees travel to Vrindavan to personally serve warm meals, pack dry rations, and sit in devotion with the Matas at our sacred ashram.
              </p>
            </div>

            {/* Pillar 3: Healing Prayer Circle */}
            <div className="space-y-2 text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#18181b] flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 stroke-[1]" />
                </div>
                <h3 className="text-base font-semibold text-[#18181b] font-heading m-0">
                  Sacred Prayer Circle
                </h3>
              </div>
              <p className="text-[11px] font-medium text-slate-700 uppercase tracking-wider m-0">
                Daily Kirtan &amp; Blessings
              </p>
              <p className="text-[#444444] text-xs sm:text-[13px] leading-relaxed font-sans m-0 max-w-xs">
                Every evening, the Matas chant sacred prayers in Vrindavan. You may submit prayer intentions for your family's health, peace, or remembrance.
              </p>

              {/* Minimalist Expandable Trigger */}
              <div className="pt-1 flex flex-col items-center w-full max-w-xs">
                {!showPrayerForm && !prayerSent && (
                  <button
                    type="button"
                    onClick={() => setShowPrayerForm(true)}
                    className="text-xs font-semibold text-slate-900 hover:text-amber-700 inline-flex items-center justify-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    <span>Submit a Prayer (Free)</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}

                {prayerSent && (
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium w-full text-center">
                    ✓ Prayer received. Included in evening Kirtan.
                  </div>
                )}

                {showPrayerForm && !prayerSent && (
                  <form onSubmit={handlePrayerSubmit} className="space-y-2 pt-2 w-full text-left">
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Beneficiary Name"
                      value={prayerName}
                      onChange={(e) => setPrayerName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#18181b] bg-slate-50"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Prayer Intention (Health, Peace...)"
                      value={prayerIntention}
                      onChange={(e) => setPrayerIntention(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#18181b] bg-slate-50"
                    />
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="submit"
                        className="py-1.5 px-3 bg-[#e65100] hover:bg-[#cf4500] text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send to Prayer Hall</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowPrayerForm(false)}
                        className="text-xs text-slate-500 hover:text-slate-800 bg-transparent border-none cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
