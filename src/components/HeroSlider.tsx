import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, ChevronRight, ChevronLeft, Stethoscope, Eye, Sparkles } from 'lucide-react';

interface HeroSliderProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
  onExplorePrograms: () => void;
  onSlideChange?: (slideIndex: number) => void;
}

const MEET_THE_MOTHERS_PROFILES = [
  {
    name: 'Sarojini Sidhanthapu',
    age: '56 years old',
    origin: 'Vrindavan Ashram',
    image: '/images/trust_matas/mata_b1.jpg',
    quoteBefore: 'Before I came into contact with the Trust, I did not know where my next meal would come from.',
    quoteAfter: 'Now, I am fed twice a day, receive monthly medicines, and live with peace and dignity.',
    program: 'Sarojini - Matri Seva Sponsor'
  },
  {
    name: 'Aalo Maa',
    age: '74 years old',
    origin: 'Aarogyavardhan Care',
    image: '/images/aalo-maa.jpg',
    quoteBefore: 'I arrived in Vrindavan unwell and alone, unsure where to find medical help.',
    quoteAfter: 'The Trust sevaks arranged my hospital treatment and gave me a loving family forever.',
    program: 'Aalo Maa - Aarogyavardhan Care'
  },
  {
    name: 'Bhakti Manaa Maa',
    age: '78 years old',
    origin: 'Matri Seva Ashram',
    image: '/images/bhakti-manaa-maa.jpg',
    quoteBefore: 'I spent years searching for a safe sanctuary where I could devote my days to prayer.',
    quoteAfter: 'Here at the Ashram, I sing kirtan with my sisters every day and feel deeply cherished.',
    program: 'Bhakti Manaa Maa - Ashram Care'
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenDonate,
  onExplorePrograms,
  onSlideChange
}) => {
  const TOTAL_SLIDES = 3;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [motherIdx, setMotherIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide, onSlideChange]);

  // Play/pause video based on active slide
  useEffect(() => {
    if (videoRef1.current) {
      if (currentSlide === 0) {
        videoRef1.current.currentTime = 0;
        videoRef1.current.play().catch(() => {});
      } else {
        videoRef1.current.pause();
      }
    }
  }, [currentSlide]);

  // Cycle "Meet the Mothers" profile every 6s when not paused
  useEffect(() => {
    if (isPaused || currentSlide !== 0) return;
    const profileTimer = setInterval(() => {
      setMotherIdx((prev) => (prev + 1) % MEET_THE_MOTHERS_PROFILES.length);
    }, 6000);
    return () => clearInterval(profileTimer);
  }, [isPaused, currentSlide]);

  // Auto-advance slides every 14 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 14000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeMother = MEET_THE_MOTHERS_PROFILES[motherIdx];

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[660px] flex items-center overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          SLIDE 1: "GRATEFUL FOR THE CHANGE IN HER LIFE."
          Video Background of the Mothers + "Meet the Mothers" Profile Feature
          ========================================================================= */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 0
            ? 'opacity-100 z-10 pointer-events-auto visible'
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        {/* Background Video of Mothers */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100">
          <video
            ref={videoRef1}
            src="/videos/yoganand.mp4"
            poster="/images/hero-slide2.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[center_top] scale-100 brightness-[1.16] contrast-[1.03]"
          />
        </div>

        {/* Soft Localized Left Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent lg:from-black/55 lg:via-black/15 lg:to-transparent" />

        {/* Content Container: Left Uplifting Headline | Right "Meet the Mothers" Feature Card */}
        <div className="site-container relative z-10 h-full flex items-center pt-20 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
            
            {/* Left Column (7 cols): "GRATEFUL FOR THE CHANGE IN HER LIFE." */}
            <div className="lg:col-span-7 text-white space-y-3.5 max-w-xl">
              <div className="space-y-1">
                <h1 className="hero-heading text-[28px] sm:text-[38px] lg:text-[48px] font-black text-white uppercase tracking-[0.18em] leading-none m-0">
                  GRATEFUL
                </h1>
                <div className="hero-eyebrow-shadow text-[11px] sm:text-xs uppercase tracking-[0.25em] text-amber-300 font-extrabold py-1">
                  FOR THE CHANGE IN HER
                </div>
                <div className="hero-heading text-[28px] sm:text-[38px] lg:text-[48px] font-black uppercase tracking-[0.18em] leading-none m-0 text-[#e65100] font-destitute-stamp">
                  LIFE.
                </div>
              </div>

              <div className="w-full max-w-md h-[1px] bg-white/50 my-2" />

              <p className="hero-subtext text-sm sm:text-base md:text-[17px] !text-white font-sans leading-relaxed max-w-lg text-left m-0">
                Elderly Matas in Vrindavan wake up to warm sattvic meals, clean sunlit rooms, loving medical care, and joyful devotional sisterhood every single day.
              </p>

              <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenDonate('indian', 'Matri Seva Ashram (Shelter & Care)')}
                  className="btn-donate text-sm font-semibold cursor-pointer"
                >
                  <span>Donate Now (80G)</span>
                </button>

                <button
                  onClick={onExplorePrograms}
                  className="py-2.5 px-5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/35 rounded-full backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>

            {/* Right Column (5 cols): "Meet the Mothers" Profile Card */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full max-w-[380px] bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white shadow-2xl text-slate-800 space-y-3.5 font-sans">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-[#e65100] flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm font-bold tracking-wide text-slate-900">
                      Meet the Mothers
                    </span>
                  </div>

                  {/* Profile Switcher Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMotherIdx((prev) =>
                          prev === 0 ? MEET_THE_MOTHERS_PROFILES.length - 1 : prev - 1
                        )
                      }
                      aria-label="Previous Mother Profile"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setMotherIdx((prev) => (prev + 1) % MEET_THE_MOTHERS_PROFILES.length)
                      }
                      aria-label="Next Mother Profile"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Mother Photo + Identity */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={activeMother.image}
                    alt={activeMother.name}
                    className="w-16 h-16 rounded-xl object-cover object-top border-2 border-amber-200 shadow-sm shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-base font-bold text-slate-900 truncate">
                      {activeMother.name}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {activeMother.age} • {activeMother.origin}
                    </div>
                  </div>
                </div>

                {/* Quote Story */}
                <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed bg-amber-50/80 p-3 rounded-xl border border-amber-200/80">
                  <p className="text-slate-700 italic m-0">
                    "{activeMother.quoteBefore}"
                  </p>
                  <p className="text-[#c2410c] font-semibold m-0">
                    "{activeMother.quoteAfter}"
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onOpenDonate('indian', activeMother.program)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-[#e65100] hover:from-amber-600 hover:to-[#cf4500] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Sponsor {activeMother.name.split(' ')[0]}'s Care (80G)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 2: "HEALED WITH SACRED CARE & COMPASSION — AAROGYAVARDHAN"
          ========================================================================= */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 1
            ? 'opacity-100 z-10 pointer-events-auto visible'
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-[position:center_top] sm:bg-[position:65%_top] lg:bg-[position:center_top] bg-no-repeat scale-100 transition-transform duration-10000 brightness-[1.12] contrast-[1.02]"
          style={{ backgroundImage: "url('/images/aarogyavardhan.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent lg:from-black/55 lg:via-black/15 lg:to-transparent" />

        <div className="site-container relative z-10 h-full flex items-center justify-start pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl flex flex-col items-start text-left space-y-3 sm:space-y-4">
            <div className="space-y-1 w-full text-left">
              <h1 className="hero-heading text-[26px] sm:text-[40px] lg:text-[50px] font-black text-white uppercase tracking-[0.2em] leading-none m-0 p-0 text-left">
                HEALED
              </h1>
              <div className="hero-eyebrow-shadow text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.26em] text-amber-300 py-0.5 text-left">
                WITH SACRED CARE &amp; COMPASSION
              </div>
              <div className="hero-heading text-[24px] sm:text-[34px] lg:text-[44px] font-black uppercase tracking-[0.14em] leading-none m-0 p-0 text-left text-[#e65100] font-destitute-stamp">
                Aarogyavardhan
              </div>
            </div>

            <div className="w-full max-w-sm sm:max-w-md h-[1px] bg-white/50 my-1.5" />

            <p className="hero-subtext text-sm sm:text-base md:text-[17px] !text-white font-sans leading-relaxed max-w-lg text-left m-0">
              Aarogyavardhan provides free cataract surgeries &amp; doorstep medicines restoring vision and joyful mobility for 1,500+ Matas in Vrindavan.
            </p>

            <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-start gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenDonate('indian', 'Aarogyavardhan (Free Eye & Hospital Surgeries)')}
                className="w-full sm:w-auto btn-donate text-sm font-semibold cursor-pointer"
              >
                <span>Sponsor Aarogyavardhan (₹1,500)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto py-2.5 px-5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/35 rounded-full backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Aarogyavardhan Clinic</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            <div className="pt-2 border-t border-white/20 flex flex-wrap items-center justify-start gap-3 text-xs text-slate-100">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Eye className="w-4 h-4" /> 5,000+ Cataracts Restored
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5 text-cyan-200 font-semibold">
                <Stethoscope className="w-4 h-4" /> 100% Free Medicines
              </span>
              <span className="text-white/40">•</span>
              <span className="text-slate-100 font-medium">80G Tax-Exempt</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 3: "SACRED & DIGNIFIED" (MATRI SEVA BANNER)
          ========================================================================= */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 2
            ? 'opacity-100 z-10 pointer-events-auto visible'
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-[position:65%_top] sm:bg-[position:60%_top] lg:bg-[position:center_top] bg-no-repeat scale-100 transition-transform duration-10000 brightness-[1.14] contrast-[1.02]"
          style={{ backgroundImage: "url('/images/matri-seva.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent lg:from-black/55 lg:via-black/15 lg:to-transparent pointer-events-none" />

        <div className="site-container relative z-10 h-full flex items-center justify-start pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl flex flex-col items-start text-left space-y-3 sm:space-y-4">
            <div className="space-y-1.5 w-full text-left">
              <h1 className="hero-heading text-[26px] sm:text-[40px] lg:text-[50px] font-black text-white uppercase tracking-[0.2em] leading-none m-0 p-0 text-left">
                SACRED <span style={{ color: '#FACC15' }} className="tracking-normal font-sans font-black">&amp;</span>
              </h1>
              <div className="hero-heading text-[26px] sm:text-[40px] lg:text-[50px] font-black uppercase tracking-[0.2em] leading-none m-0 p-0 text-left text-[#e65100] font-destitute-stamp">
                DIGNIFIED
              </div>
            </div>

            <div className="w-full max-w-sm sm:max-w-md h-[1px] bg-white/50 my-1.5" />

            <p className="hero-subtext text-sm sm:text-base md:text-[17px] !text-white font-sans leading-relaxed max-w-lg text-left m-0">
              Serving hot nutritious sattvic meals, daily fresh cow milk, and compassionate care to over 1,500 beloved Matas across Vrindavan every single day.
            </p>

            <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-start gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenDonate('indian', 'Vrindavan Matri Seva & Daily Sustenance')}
                className="w-full sm:w-auto btn-donate text-sm font-semibold cursor-pointer"
              >
                <span>Sponsor Matri Seva (80G)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto py-2.5 px-5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/35 rounded-full backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Our Sevas</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            <div className="pt-2 border-t border-white/20 flex flex-wrap items-center justify-start gap-3 text-xs text-slate-100">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4" /> 100% Direct Seva
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5 text-amber-200 font-semibold">
                1,500+ Matas Daily
              </span>
              <span className="text-white/40">•</span>
              <span className="text-slate-100 font-medium">80G &amp; FCRA Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? TOTAL_SLIDES - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 text-white border border-white/40 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer shadow-md"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 text-white border border-white/40 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer shadow-md"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group bg-transparent border-none p-0 focus:outline-none"
        aria-label="Scroll to About Section"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 group-hover:text-amber-300 transition-colors mb-2 font-sans">
          SCROLL
        </span>
        <div className="relative w-[1px] h-[30px] bg-white/30 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-[1px] h-3 bg-gradient-to-b from-amber-300 via-amber-400 to-[#e65100] rounded-full animate-hero-scroll" />
        </div>
      </button>
    </section>
  );
};
