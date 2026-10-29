import React, { useRef, useState, useEffect } from 'react';
import { UserMinus, HeartPulse, HandCoins, ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenDonate?: (portalType: 'indian' | 'foreign') => void;
}

const MATRI_SEVA_SLIDER_IMAGES = [
  {
    src: '/images/matri-seva.jpg',
    alt: 'Daily hot nutritious meal seva for Matas in Vrindavan courtyard',
    caption: 'Daily Sattvic Meal Seva in Vrindavan'
  },
  {
    src: '/images/hero-seva.jpg',
    alt: 'Devotional Mata welcoming visitors at Matri Seva Ashram',
    caption: 'Dignity, Shelter & Spiritual Fellowship'
  },
  {
    src: '/images/aarogyavardhan.jpg',
    alt: 'Free medical consultation and healthcare for elderly Matas',
    caption: 'Aarogyavardhan Free Healthcare & Eye Care'
  },
  {
    src: '/images/circle-of-love.jpg',
    alt: 'Matas in joyful fellowship at the ashram',
    caption: 'Sacred Companionship & Lifelong Care'
  }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDonate }) => {
  const yellowSectionRef = useRef<HTMLDivElement>(null);
  const [isYellowOpen, setIsYellowOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % MATRI_SEVA_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <section id="about" className="bg-white text-slate-800 relative w-full pt-0 pb-0">
      
      {/* Top Overview: Text on Left, Slider Image on Right - Fit to Screen */}
      <div className="w-full min-h-[560px] lg:min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0 mb-0">
        
        {/* Left Column: Pure Modern Editorial Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center py-10 sm:py-14 lg:py-16 pl-6 sm:pl-10 lg:pl-16 xl:pl-24 pr-6 sm:pr-10 lg:pr-14 space-y-5 sm:space-y-6">
          
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

          <p className="text-slate-700 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed font-sans m-0">
            Established in August 2015, the <strong>Paramhansa Yogananda Public Charitable Trust</strong> was born out of a profound spiritual mandate: to serve, nourish, and protect the aged, destitute, and abandoned elderly women of Vrindavan and Radhakund.
          </p>

          <p className="text-[#444444] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-sans m-0">
            Inspired by the eternal teachings of Paramhansa Yogananda (author of <em>Autobiography of a Yogi</em>) and aligned with the selfless Seva principles of Ananda Sangha, our mission is to eliminate begging and suffering among elderly Matas by honoring them as our own Matas.
          </p>

          {/* Inline Sleek Data Points - Exactly in one line with readable light black */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 border-t border-slate-200/80 items-center">
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

        {/* Right Column: Slider Image showcase flush on the right side of Founded on the sacred principle of divine Matri Seva */}
        <div className="lg:col-span-6 relative w-full flex flex-col justify-stretch p-0 m-0 overflow-hidden h-full min-h-[360px] sm:min-h-[420px] lg:min-h-full bg-slate-100 group">
          {MATRI_SEVA_SLIDER_IMAGES.map((item, idx) => (
            <div
              key={item.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
                idx === activeImageIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-[center_top] brightness-[1.06] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-24 z-20 text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md font-sans">
                {item.caption}
              </div>
            </div>
          ))}

          {/* Prev / Next Controls */}
          <div className="absolute bottom-4 right-5 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setActiveImageIdx((prev) =>
                  prev === 0 ? MATRI_SEVA_SLIDER_IMAGES.length - 1 : prev - 1
                )
              }
              className="w-8 h-8 rounded-full bg-white/85 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveImageIdx((prev) => (prev + 1) % MATRI_SEVA_SLIDER_IMAGES.length)
              }
              className="w-8 h-8 rounded-full bg-white/85 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
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
