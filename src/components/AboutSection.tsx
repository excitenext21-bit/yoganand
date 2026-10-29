import React, { useRef, useState, useEffect } from 'react';
import { UserMinus, HeartPulse, HandCoins, ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenDonate?: (portalType: 'indian' | 'foreign') => void;
}

const SLIDING_MATA_IMAGES = [
  {
    src: '/images/hero-slide2.jpg',
    alt: 'Grateful Mata in white saree smiling with folded hands in Vrindavan',
    caption: 'Restoring Peace & Sacred Dignity'
  },
  {
    src: '/images/matri-seva.jpg',
    alt: 'Daily hot nutritious meal seva for Matas in Vrindavan courtyard',
    caption: 'Daily Hot Sattvic Meals & Nutrition'
  },
  {
    src: '/images/hero-seva.jpg',
    alt: 'Devotional Mata welcoming visitors at Matri Seva Ashram',
    caption: 'Matri Seva Ashram — Holy Vrindavan'
  },
  {
    src: '/images/aarogyavardhan.jpg',
    alt: 'Free medical consultation and healthcare for elderly Matas',
    caption: 'Aarogyavardhan Free Healthcare & Eye Care'
  },
  {
    src: '/images/mata-happy-1.jpg',
    alt: 'Smiling elderly Mata supported by the Trust',
    caption: 'Lifelong Monthly Ration & Medical Care'
  },
  {
    src: '/images/circle-of-love.jpg',
    alt: 'Matas in joyful fellowship at the ashram',
    caption: 'Circle of Love & Spiritual Fellowship'
  }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDonate }) => {
  const yellowSectionRef = useRef<HTMLDivElement>(null);
  const [isYellowOpen, setIsYellowOpen] = useState(false);

  useEffect(() => {
    const el = yellowSectionRef.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsYellowOpen(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setIsYellowOpen(true);
    }
  }, []);

  // Duplicate list for seamless infinite right-to-left loop (0% -> -50%)
  const loopImages = [...SLIDING_MATA_IMAGES, ...SLIDING_MATA_IMAGES];

  return (
    <section id="about" className="bg-white text-slate-800 relative w-full pt-6 sm:pt-8 lg:pt-10 pb-0">
      
      {/* Top Overview: 2-Card Style matching reference image (Left = Right-to-Left Sliding Mata Images, Right = Previous About Contents) */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* =================================================================
              LEFT CARD (5 cols):
              Rounded Card with Mata Images Sliding from Right to Left
              (Pauses on Hover) - Clean Drop Shadow matching calculator style
              ================================================================= */}
          <div className="lg:col-span-5 relative rounded-[28px] sm:rounded-[34px] bg-[#f5f5f2] p-2.5 sm:p-3 overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-stretch hover-pause-slide-rtl select-none border border-slate-200/70 shadow-xl shadow-slate-300/40">
            <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden flex items-stretch">
              <div className="animate-slide-rtl-about flex items-stretch gap-2.5 h-full w-max">
                {loopImages.map((img, index) => (
                  <div
                    key={`${img.src}-${index}`}
                    className="relative w-[280px] sm:w-[340px] lg:w-[380px] h-full min-h-[350px] sm:min-h-[410px] lg:min-h-[448px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 shadow-sm border border-white/60 bg-slate-100"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-[center_top] brightness-[1.06] contrast-[1.02]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3.5 right-3.5 z-10 text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md font-sans">
                      {img.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT CARD (7 cols):
              Soft Warm Stone Card with Previous About Us Contents, Stats,
              White Pill Button & Yellow-Lime Starburst Circle (No Drop Shadow)
              ================================================================= */}
          <div className="lg:col-span-7 rounded-[28px] sm:rounded-[34px] bg-[#f5f5f2] p-6 sm:p-9 lg:p-12 flex flex-col justify-between space-y-5 sm:space-y-6 border border-slate-200/60">
            
            <div className="space-y-4 sm:space-y-5">
              {/* Header: 24px Normal Case, Strict Typography Standard */}
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-slate-800 font-sans">
                    OUR SACRED MANDATE
                  </span>
                  <div className="w-10 h-[1.5px] bg-slate-300"></div>
                </div>
                <h2 
                  style={{ fontSize: '24px' }}
                  className="!text-[24px] sm:!text-[26px] font-normal tracking-[-0.02em] text-[#18181b] leading-snug font-heading m-0"
                >
                  Founded on the sacred principle of divine Matri Seva
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-[15px] lg:text-[15.5px] leading-relaxed font-sans m-0">
                Established in August 2015, the <strong>Paramhansa Yogananda Public Charitable Trust</strong> was born out of a profound spiritual mandate: to serve, nourish, and protect the aged, destitute, and abandoned elderly women of Vrindavan and Radhakund.
              </p>

              <p className="text-[#444444] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-sans m-0">
                Inspired by the eternal teachings of Paramhansa Yogananda (author of <em>Autobiography of a Yogi</em>) and aligned with the selfless Seva principles of Ananda Sangha, our mission is to eliminate begging and suffering among elderly Matas by honoring them as our own Matas.
              </p>

              {/* Inline Sleek Data Points - Exactly as previous one */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 border-t border-slate-200/90 items-center">
                <div className="space-y-0.5">
                  <span className="text-xl sm:text-2xl lg:text-[26px] font-normal tracking-tight text-[#18181b] font-heading block whitespace-nowrap">
                    August 2015
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-sans m-0 whitespace-nowrap">Founded in Holy Vrindavan</p>
                </div>
                <div className="space-y-0.5 border-l border-slate-200 pl-3 sm:pl-5">
                  <span className="text-xl sm:text-2xl lg:text-[26px] font-normal tracking-tight text-[#18181b] font-heading block whitespace-nowrap">
                    1,400+
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-sans m-0 whitespace-nowrap">Matas in Daily Care</p>
                </div>
                <div className="space-y-0.5 border-l border-slate-200 pl-3 sm:pl-5">
                  <span className="text-xl sm:text-2xl lg:text-[26px] font-normal tracking-tight text-[#18181b] font-heading block whitespace-nowrap">
                    100%
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-sans m-0 whitespace-nowrap">Free Dignified Seva</p>
                </div>
              </div>
            </div>

            {/* Bottom Row matching reference image: Left White Pill Button + Right Yellow-Lime Starburst Circle */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => onOpenDonate?.('indian')}
                className="bg-white hover:bg-slate-50 text-[#18181b] rounded-full pl-5 pr-2 py-2 shadow-xs border border-slate-200/70 inline-flex items-center gap-4 transition-all cursor-pointer group"
              >
                <span className="text-xs sm:text-sm font-medium font-sans">
                  Support Matri Seva
                </span>
                <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>

              {/* Yellow-Lime Circle with 6-Spoke Asterisk Emblem matching reference image */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ebff57] flex items-center justify-center shrink-0 shadow-2xs">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#18181b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="4" x2="12" y2="20" />
                  <line x1="5.1" y1="8" x2="18.9" y2="16" />
                  <line x1="18.9" y1="8" x2="5.1" y2="16" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Why Hundreds of Matas Arrive in Vrindavan - Warm Yellow Seamless Section with center-opening effect */}
      <div 
        ref={yellowSectionRef}
        className="w-full relative overflow-hidden bg-white text-slate-900 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10"
      >
        {/* Animated Yellow Background expanding from horizontal center */}
        <div 
          className="absolute inset-0 bg-[#facc15] pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            clipPath: isYellowOpen ? 'inset(0 0% 0 0%)' : 'inset(0 50% 0 50%)',
          }}
        />

        {/* Content Container revealing smoothly as yellow expands from center */}
        <div 
          className="relative z-10 w-full"
          style={{
            opacity: isYellowOpen ? 1 : 0,
            transform: isYellowOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          {/* Heading Container with aligned horizontal padding */}
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3.5">
              <h3 
                style={{ fontSize: '24px', fontWeight: 400, color: '#464646' }}
                className="!text-[24px] font-normal tracking-[-0.015em] !text-[#464646] font-heading m-0 leading-tight"
              >
                Why hundreds of Matas arrive in Vrindavan
              </h3>
              <div className="w-16 h-[1.5px] bg-[#464646]/60"></div>
            </div>
          </div>

          {/* 3 Columns: Paper Torn Effect Style matching reference */}
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          
          {/* Column 1: Displacement & Social Stigma */}
          <div 
            onClick={() => onOpenDonate?.('indian')}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[470px] sm:h-[490px] lg:h-[510px] flex flex-col justify-between group bg-[#facc15] border border-amber-400/40 shadow-none hover:shadow-none transition-all p-5 sm:p-6 cursor-pointer select-none"
          >
            {/* Top Text Content on pure yellow */}
            <div className="space-y-2 pointer-events-auto">
              <div className="flex items-center gap-2.5">
                <UserMinus className="w-5 h-5 stroke-[1] text-[#464646] shrink-0" />
                <h4 
                  style={{ color: '#464646', fontWeight: 600 }}
                  className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.01em] !text-[#464646] font-heading m-0 leading-snug"
                >
                  Displacement &amp; Social Stigma
                </h4>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#444444] font-sans font-medium leading-relaxed m-0">
                In impoverished rural families, destitute Matas face acute social isolation, loss of shelter, and abandonment at pilgrimage railway stations.
              </p>
            </div>

            {/* Paper Torn Effect Photo Cutout in pure yellow card */}
            <div className="relative w-full flex-1 flex items-center justify-center my-1 sm:my-2">
              <img 
                src="/images/torn-photo-1.png" 
                alt="Destitute and displaced Mata in Vrindavan" 
                className="w-auto h-[235px] sm:h-[255px] md:h-[270px] max-w-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
            </div>

            {/* Bottom yellow breathing space */}
            <div className="h-2 sm:h-3" />
          </div>

          {/* Column 2: Devastating Health Needs */}
          <div 
            onClick={() => onOpenDonate?.('indian')}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[470px] sm:h-[490px] lg:h-[510px] flex flex-col justify-between group bg-[#facc15] border border-amber-400/40 shadow-none hover:shadow-none transition-all p-5 sm:p-6 cursor-pointer select-none"
          >
            {/* Top Text Content on pure yellow */}
            <div className="space-y-2 pointer-events-auto">
              <div className="flex items-center gap-2.5">
                <HeartPulse className="w-5 h-5 stroke-[1] text-[#464646] shrink-0" />
                <h4 
                  style={{ color: '#464646', fontWeight: 600 }}
                  className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.01em] !text-[#464646] font-heading m-0 leading-snug"
                >
                  Devastating Health Needs
                </h4>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#444444] font-sans font-medium leading-relaxed m-0">
                Over 70% suffer from untreated hypertension, severe arthritis, malnutrition, or cataract blindness without access to doctors or medications.
              </p>
            </div>

            {/* Paper Torn Effect Photo Cutout in pure yellow card */}
            <div className="relative w-full flex-1 flex items-center justify-center my-1 sm:my-2">
              <img 
                src="/images/torn-photo-2.png?v=authentic" 
                alt="Elderly Mata suffering from untreated health conditions without medical care" 
                className="w-auto h-[235px] sm:h-[255px] md:h-[270px] max-w-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
            </div>

            {/* Bottom yellow breathing space */}
            <div className="h-2 sm:h-3" />
          </div>

          {/* Column 3: The Threat of Begging */}
          <div 
            onClick={() => onOpenDonate?.('indian')}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[470px] sm:h-[490px] lg:h-[510px] flex flex-col justify-between group bg-[#facc15] border border-amber-400/40 shadow-none hover:shadow-none transition-all p-5 sm:p-6 cursor-pointer select-none"
          >
            {/* Top Text Content on pure yellow */}
            <div className="space-y-2 pointer-events-auto">
              <div className="flex items-center gap-2.5">
                <HandCoins className="w-5 h-5 stroke-[1] text-[#464646] shrink-0" />
                <h4 
                  style={{ color: '#464646', fontWeight: 600 }}
                  className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.01em] !text-[#464646] font-heading m-0 leading-snug"
                >
                  The Threat of Begging
                </h4>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#444444] font-sans font-medium leading-relaxed m-0">
                Without institutional aid, elderly Matas are forced to sing for 8 hours for ₹10 or beg on temple streets. Our trust ends this indignity completely.
              </p>
            </div>

            {/* Paper Torn Effect Photo Cutout in pure yellow card */}
            <div className="relative w-full flex-1 flex items-center justify-center my-1 sm:my-2">
              <img 
                src="/images/torn-photo-3.png" 
                alt="Destitute Mata facing threat of begging on Vrindavan streets" 
                className="w-auto h-[235px] sm:h-[255px] md:h-[270px] max-w-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
            </div>

            {/* Bottom yellow breathing space */}
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
