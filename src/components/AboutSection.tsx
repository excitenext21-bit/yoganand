import React, { useRef, useState, useEffect } from 'react';
import { UserMinus, HeartPulse, HandCoins, Users, ShieldCheck, Calendar } from 'lucide-react';

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
    src: '/images/hero-seva.jpg',
    alt: 'Devotional Mata welcoming visitors at Matri Seva Ashram',
    caption: 'Matri Seva Ashram — Holy Vrindavan'
  },
  {
    src: '/images/matri-seva.jpg',
    alt: 'Daily hot nutritious meal seva for Matas in Vrindavan courtyard',
    caption: 'Daily Hot Sattvic Meals & Nutrition'
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

  // Duplicate list for seamless infinite downward loop (-50% -> 0%)
  const loopImages = [...SLIDING_MATA_IMAGES, ...SLIDING_MATA_IMAGES];

  return (
    <section id="about" className="bg-white text-slate-800 relative w-full pt-6 sm:pt-8 lg:pt-10 pb-0">
      
      {/* Bento Grid About Section matching reference design */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* =================================================================
              LEFT COLUMN (6 cols):
              Top Box = About Narrative Content
              Bottom Box = Stats & Visual Showcase Card
              ================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5">
            
            {/* TOP-LEFT CARD: Content Card (Olive-Charcoal Bento Card) */}
            <div className="rounded-[28px] sm:rounded-[34px] bg-[#4e4c36] text-white p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-6 shadow-sm">
              
              {/* Top Row: Left Emblem Badge & Right Location/Trust Meta */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-md shrink-0 border border-amber-400/30">
                    <img
                      src="/images/logo-monogram-round.png?v=2"
                      alt="Trust Emblem"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-amber-300 font-sans">
                    OUR SACRED MANDATE
                  </span>
                </div>

                <div className="text-right space-y-1.5 max-w-[210px] font-sans">
                  <p className="text-[11px] sm:text-xs text-white/95 leading-snug m-0 font-normal">
                    Chaitanya Vihar, Phase 1,<br />
                    Vrindavan &amp; Radhakund, UP
                  </p>
                  <p className="text-[11px] text-amber-200/80 leading-snug m-0 font-medium">
                    Divine Matri Seva —<br />
                    Paramhansa Yogananda Trust
                  </p>
                </div>
              </div>

              {/* Bottom Narrative Content */}
              <div className="space-y-3.5 pt-2">
                <h2 
                  style={{ fontSize: '24px', color: '#ffffff' }}
                  className="!text-[24px] sm:!text-[28px] font-normal tracking-[-0.02em] !text-white leading-snug font-heading m-0"
                >
                  Founded on the sacred principle of divine Matri Seva
                </h2>

                <p className="text-white/90 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-sans m-0">
                  Established in August 2015, the <strong>Paramhansa Yogananda Public Charitable Trust</strong> was born out of a profound spiritual mandate: to serve, nourish, and protect the aged, destitute, and abandoned elderly women of Vrindavan and Radhakund.
                </p>

                <p className="text-white/75 text-xs sm:text-[13.5px] leading-relaxed font-sans m-0">
                  Inspired by the eternal teachings of Paramhansa Yogananda (author of <em>Autobiography of a Yogi</em>) and aligned with the selfless Seva principles of Ananda Sangha, our mission is to eliminate begging and suffering among elderly Matas by honoring them as our own Matas.
                </p>
              </div>

            </div>

            {/* BOTTOM-LEFT CARD: Warm Cream Outer Box containing White Stats & Photo Card */}
            <div className="rounded-[28px] sm:rounded-[34px] bg-[#fdf3e7] p-3.5 sm:p-5 flex-1 flex items-stretch">
              <div className="bg-white rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 w-full grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                
                {/* Left Side of Stats Box: Avatars, Description & Key Stats */}
                <div className="sm:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Overlapping Circular Mata Avatars */}
                    <div className="flex items-center -space-x-2">
                      <img
                        src="/images/aalo-maa.jpg"
                        alt="Mata Aalo"
                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                      <img
                        src="/images/deepali-maa.jpg"
                        alt="Mata Deepali"
                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                      <img
                        src="/images/pushpa-daasi-maa.jpg"
                        alt="Mata Pushpa"
                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                    </div>

                    <h3 className="text-base sm:text-[17px] font-semibold text-[#18181b] font-heading m-0">
                      Sacred Seva Impact
                    </h3>

                    <p className="text-[11.5px] sm:text-xs text-slate-500 leading-relaxed font-sans m-0">
                      Every day our ashram provides hot nutritious meals, monthly groceries, free cataract surgeries, and loving shelter with zero cost to the Matas.
                    </p>
                  </div>

                  {/* Stats Row at Bottom */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                    <div>
                      <div className="flex items-center gap-1 text-[#18181b] font-bold text-sm sm:text-base font-heading">
                        <span>2015</span>
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans block leading-tight">
                        Aug Founded
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 text-[#18181b] font-bold text-sm sm:text-base font-heading">
                        <span>1,400+</span>
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans block leading-tight">
                        Daily Matas
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 text-[#18181b] font-bold text-sm sm:text-base font-heading">
                        <span>100%</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans block leading-tight">
                        Free Seva
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side of Stats Box: Featured Ashram Seva Photo */}
                <div className="sm:col-span-6 relative rounded-[18px] sm:rounded-[20px] overflow-hidden min-h-[190px] sm:min-h-[220px] bg-slate-100">
                  <img
                    src="/images/matri-seva.jpg"
                    alt="Matri Seva courtyard meal service"
                    className="w-full h-full object-cover object-center brightness-[1.05]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-3">
                    <span className="text-[11px] font-semibold text-white block leading-snug">
                      Founded August 2015 in Holy Vrindavan
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =================================================================
              RIGHT COLUMN (6 cols):
              Vertical Downward-Sliding Mata Images (Pauses on Hover)
              with Decorative Arc Lines & Frosted Glass Floating Pills
              ================================================================= */}
          <div className="lg:col-span-6 relative rounded-[28px] sm:rounded-[34px] overflow-hidden h-[540px] sm:h-[620px] lg:h-[660px] bg-[#e5e4dc] hover-pause-slide-down group shadow-sm select-none">
            
            {/* Continuous Downward-Sliding Vertical Track (Pauses on Hover) */}
            <div className="animate-slide-down-about flex flex-col gap-3.5 p-3 sm:p-4">
              {loopImages.map((img, index) => (
                <div
                  key={`${img.src}-${index}`}
                  className="relative w-full h-[360px] sm:h-[420px] rounded-[22px] sm:rounded-[26px] overflow-hidden shrink-0 shadow-md border border-white/40"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-[center_top] brightness-[1.06] contrast-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3.5 left-4 z-10 text-white text-xs font-medium tracking-wide drop-shadow-md font-sans">
                    {img.caption}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative Thin Curved Architectural Lines Overlay (Matching Reference Image) */}
            <svg
              viewBox="0 0 500 700"
              fill="none"
              className="pointer-events-none absolute inset-0 w-full h-full z-10 opacity-45"
              preserveAspectRatio="none"
            >
              <path
                d="M 90 0 Q 210 220 0 430"
                stroke="#ffffff"
                strokeWidth="1.2"
              />
              <path
                d="M 460 0 Q 510 380 280 700"
                stroke="#ffffff"
                strokeWidth="1.2"
              />
            </svg>

            {/* Top Floating Frosted Pill Badge (Matches Reference "$9,465,240" Badge) */}
            <div className="pointer-events-none absolute top-14 sm:top-16 left-8 sm:left-12 z-20 flex items-center gap-2.5 bg-white/75 backdrop-blur-md border border-white/60 rounded-full pl-2 pr-4 py-1.5 shadow-lg">
              <div className="w-6 h-6 rounded-full bg-[#facc15] flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-slate-900" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-900 tracking-tight font-sans">
                1,400+ Matas in Care
              </span>
            </div>

            {/* Bottom-Right Floating Frosted Card Badge (Matches Reference Bottom-Right Badge) */}
            <div className="pointer-events-none absolute bottom-5 right-5 z-20 flex items-start gap-2.5 bg-[#e8dccb]/85 backdrop-blur-md border border-white/50 rounded-2xl p-3 sm:p-3.5 shadow-lg max-w-[240px]">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-slate-900" />
              </div>
              <div className="text-[11px] sm:text-xs text-slate-900 font-medium leading-snug font-sans">
                Hover to pause • Sacred Matri Seva in Vrindavan &amp; Radhakund
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
