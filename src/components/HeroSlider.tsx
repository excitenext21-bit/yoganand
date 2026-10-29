import React, { useState, useEffect, useRef } from 'react';
import { Heart, ArrowRight, ShieldCheck, ChevronRight, ChevronLeft, Stethoscope, Eye } from 'lucide-react';

interface HeroSliderProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
  onExplorePrograms: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenDonate,
  onExplorePrograms
}) => {
  const TOTAL_SLIDES = 4;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);

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

  // Advance to next slide when video ends
  const handleVideo1Ended = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  // Auto-advance slides every 10 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 10000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  // Scroll smoothly down to the about section
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-[100dvh] min-h-[620px] flex items-center overflow-hidden bg-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          SLIDE 1: "DESPERATE AND DESTITUTE"
          Left-aligned layout with 1px divider line and Indian Widow Matas text
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 0 
            ? 'opacity-100 z-10 pointer-events-auto visible' 
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        {/* Background Video: Yoganand video (Brightened & Top-Aligned so top is never cut) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100">
          <video
            ref={videoRef1}
            src="/videos/yoganand.mp4"
            poster="/images/hero-cinematic.jpg"
            autoPlay
            muted
            playsInline
            onEnded={handleVideo1Ended}
            className="w-full h-full object-cover object-[center_top] scale-100 brightness-[1.22] contrast-[1.03]"
          />
        </div>

        {/* Localized Left Gradient: Protects left text with strong visibility while keeping right bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent lg:from-black/60 lg:via-black/20 lg:to-transparent"></div>

        {/* Content Container: Left-Aligned Layout */}
        <div className="site-container relative z-10 h-full flex items-center justify-start pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl flex flex-col items-start text-left space-y-2.5 sm:space-y-3.5">
            
            {/* Typographic Cluster: 2-line layout (DESPERATE & / DESTITUTE) - 15% smaller & extra bold with high-contrast shadow */}
            <div className="space-y-1.5 sm:space-y-2 w-full text-left">
              <h1 className="hero-heading text-[25px] sm:text-[40px] lg:text-[51px] font-black text-white uppercase tracking-[0.22em] leading-none m-0 p-0 text-left">
                DESPERATE <span style={{ color: '#FACC15' }} className="tracking-normal font-sans font-black">&amp;</span>
              </h1>
              <div className="hero-heading text-[25px] sm:text-[40px] lg:text-[51px] font-black uppercase tracking-[0.22em] leading-none m-0 p-0 text-left text-[#e65100] font-destitute-stamp">
                DESTITUTE
              </div>
            </div>

            {/* 1px subtle divider line below heading text as requested */}
            <div className="w-full max-w-sm sm:max-w-md h-[1px] bg-white/50 my-1.5 sm:my-2"></div>

            {/* Subtitle & Mission Compassion Text */}
            <p className="hero-subtext text-xs sm:text-[13.5px] md:text-sm !text-white text-white font-sans leading-relaxed max-w-lg text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] m-0">
              Often shunned as cursed, Indian Widow Matas regain their sacred dignity through our daily meals, medical care, and lifelong spiritual support.
            </p>

            {/* Action Suite with Decent Gap */}
            <div className="pt-5 sm:pt-6 flex items-center justify-start w-full sm:w-auto">
              <button
                onClick={() => onOpenDonate('indian', 'Matri Seva Community (Rations & Healthcare)')}
                className="w-full sm:w-auto btn-donate py-2.5 px-6 text-xs sm:text-sm font-bold shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Restore Their Dignity (80G)</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 2: "GRATEFUL FOR THE CHANGE IN HER LIFE"
          Layout: Left Text | Center Smiling Mata Unobstructed | Right Docked Profile
          Guarantees the text box NEVER covers the Mata!
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 1 
            ? 'opacity-100 z-10 pointer-events-auto visible' 
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        {/* Background Image: Smiling Mata in white saree seated on left-center (Top-Aligned & Brightened) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-[position:center_top] sm:bg-[position:45%_top] bg-no-repeat scale-100 transition-transform duration-10000 brightness-[1.24] contrast-[1.03]"
          style={{ backgroundImage: "url('/images/hero-slide2.jpg')" }}
        ></div>

        {/* Localized Left Gradient: Leaves the smiling Mata & right side completely bright while protecting left text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent lg:from-black/60 lg:via-black/15 lg:to-transparent"></div>

        {/* Content Container: 3-column architecture */}
        <div className="site-container relative z-10 h-full flex items-center pt-20 sm:pt-24 pb-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
            
            {/* Column 1 (Left 5 cols): "GRATEFUL FOR THE CHANGE IN HER LIFE" */}
            <div className="lg:col-span-5 text-white space-y-3 max-w-lg">

              {/* Big Impact Headline - 15% smaller & extra bold with high-contrast shadow */}
              <div className="space-y-0.5">
                <h1 className="hero-heading text-[25px] sm:text-[31px] lg:text-[41px] font-black text-white uppercase tracking-[0.18em] leading-none m-0">
                  GRATEFUL
                </h1>
                <div className="hero-eyebrow-shadow text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.25em] text-amber-300 font-extrabold py-1">
                  FOR THE CHANGE IN HER
                </div>
                <div className="hero-heading text-[25px] sm:text-[31px] lg:text-[41px] font-black uppercase tracking-[0.18em] leading-none m-0 text-[#e65100] font-destitute-stamp">
                  LIFE
                </div>
              </div>

              {/* 1px subtle divider line below heading */}
              <div className="w-full max-w-md h-[1px] bg-white/50 my-1.5 sm:my-2"></div>

              <p className="hero-subtext text-xs sm:text-[13.5px] md:text-sm !text-white text-white font-sans leading-relaxed max-w-md text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] m-0">
                Matas who once faced starvation and acute loneliness in Vrindavan now wake up to hot meals, clean rooms, medical care, and joyful devotional fellowship.
              </p>

              <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onOpenDonate('indian', 'Matri Seva Ashram (Shelter & Care)')}
                  className="btn-donate py-2 px-4 text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Sponsor Care (80G)</span>
                </button>

                <button
                  onClick={onExplorePrograms}
                  className="py-2 px-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Our Sevas</span>
                  <ArrowRight className="w-3 h-3 text-amber-300" />
                </button>
              </div>

            </div>

            {/* Column 2 (Center 2 cols): COMPLETELY OPEN & UNOBSTRUCTED
                The smiling Mata with hands in Namaste prayer is 100% visible here! */}
            <div className="hidden lg:block lg:col-span-2 pointer-events-none h-16">
              {/* Intentional negative space so the Mata is never covered */}
            </div>

            {/* Column 3 (Right 5 cols): MATA PROFILE Bright White Card DOCKED STRICTLY TO RIGHT
                Normal case font as requested, zero overlap with the Mata! */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full max-w-[340px] xl:max-w-[370px] bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white shadow-2xl text-slate-800 space-y-3 font-sans">
                
                {/* Card Title Strip - Normal Case */}
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-4 h-4 rounded-full border border-[#e65100] flex items-center justify-center text-[#e65100]">
                    <ChevronRight className="w-2.5 h-2.5 stroke-[1.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-900">
                    Mata Profile
                  </span>
                </div>

                {/* Profile Data Points - Normal Case Font */}
                <div className="space-y-2 text-xs leading-relaxed font-sans">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] font-bold text-[#e65100]">
                      Name:
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-slate-900">
                      Sarojini Sidhanthapu
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] font-bold text-[#e65100]">
                      Age:
                    </span>
                    <span className="text-xs text-slate-700 font-medium">
                      56 years old
                    </span>
                  </div>

                  <div className="pt-0.5">
                    <span className="text-[11px] font-bold text-[#e65100] block mb-1">
                      How has the Trust changed your life?
                    </span>
                    <div className="space-y-1.5 text-slate-700 text-xs italic font-normal leading-relaxed bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <p>
                        "Before I came into contact with the Trust, I did not know where my next meal would come from. Life was full of uncertainty and despair."
                      </p>
                      <p className="text-[#c2410c] not-italic font-semibold">
                        "Now, I am fed twice a day and receive monthly medicines. Now I am not a burden to anyone."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action on Card */}
                <div className="pt-0.5">
                  <button
                    onClick={() => onOpenDonate('indian', 'Sarojini - Matri Seva Sponsor')}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-[#e65100] hover:from-amber-600 hover:to-[#cf4500] text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Sponsor Sarojini Mata's Care (₹3,000)</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 3: "HEALED WITH HEALTHCARE & SACRED COMPASSION" (MEDICAL BANNER)
          Layout: Left Medical Text | Center/Right Caring Doctor & Mata
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 2 
            ? 'opacity-100 z-10 pointer-events-auto visible' 
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        {/* Background Image: Bright sunlit Aarogyavardhan clinic with caring doctor & smiling Mata (Top-Aligned) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-[position:center_top] sm:bg-[position:65%_top] lg:bg-[position:center_top] bg-no-repeat scale-100 transition-transform duration-10000 brightness-[1.12] contrast-[1.02]"
          style={{ backgroundImage: "url('/images/aarogyavardhan.jpg')" }}
        ></div>

        {/* Localized Left Gradient: Keeps doctor & Mata bright while giving strong contrast behind left text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent lg:from-black/60 lg:via-black/20 lg:to-transparent"></div>

        {/* Content Container: Left-Aligned Layout with unobstructed view of the doctor & Mata */}
        <div className="site-container relative z-10 h-full flex items-center justify-start pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl flex flex-col items-start text-left space-y-2.5 sm:space-y-3.5">
            
            {/* Typographic Cluster - 15% smaller & extra bold with high-contrast shadow */}
            <div className="space-y-0.5 sm:space-y-1 w-full text-left">
              <h1 className="hero-heading text-[25px] sm:text-[40px] lg:text-[51px] font-black text-white uppercase tracking-[0.22em] leading-none m-0 p-0 text-left">
                HEALED
              </h1>
              <div className="hero-eyebrow-shadow text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-amber-300 py-0.5 text-left">
                WITH SACRED CARE &amp; COMPASSION
              </div>
              <div className="hero-heading text-[22px] sm:text-[32px] lg:text-[40px] font-black uppercase tracking-[0.14em] leading-none m-0 p-0 text-left text-[#e65100] font-destitute-stamp">
                Aarogyavardhan
              </div>
            </div>

            {/* 1px subtle divider line below heading */}
            <div className="w-full max-w-sm sm:max-w-md h-[1px] bg-white/50 my-1.5 sm:my-2"></div>

            {/* Subtitle & Mission Compassion Text */}
            <p className="hero-subtext text-xs sm:text-[13.5px] md:text-sm !text-white text-white font-sans leading-relaxed max-w-lg text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] m-0">
              Free cataract surgeries &amp; doorstep medicines restoring vision and relieving chronic pain for 1,500+ Matas in Vrindavan.
            </p>

            {/* Action Suite */}
            <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-start gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenDonate('indian', 'Aarogyavardhan Healthcare & Free Surgeries')}
                className="w-full sm:w-auto btn-donate py-2.5 px-5 text-xs font-bold shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Sponsor Healthcare (₹1,500)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto py-2 px-4 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Aarogyavardhan Clinic</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>

            {/* Compliance Badges */}
            <div className="pt-1.5 border-t border-white/15 flex flex-wrap items-center justify-start gap-2.5 text-[10px] sm:text-[11px] text-slate-200">
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <Eye className="w-3.5 h-3.5" /> 5,000+ Cataracts Restored
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-cyan-200 font-semibold">
                <Stethoscope className="w-3.5 h-3.5" /> 100% Free Medicines
              </span>
              <span className="text-white/30">•</span>
              <span className="text-slate-200 font-medium">80G Tax-Exempt</span>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 4: "SACRED & DIGNIFIED" (MATRI SEVA DOCUMENTARY VIDEO BANNER)
          Features the "Founded on the sacred principle of divine Matri Seva" video (98JraIjdDoU)
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-700 ${
          currentSlide === 3 
            ? 'opacity-100 z-10 pointer-events-auto visible' 
            : 'opacity-0 z-0 pointer-events-none invisible'
        }`}
      >
        {/* Background Documentary Video: Full screen cover, scaled to eliminate all YouTube UI/elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900 pointer-events-none">
          {currentSlide === 3 ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/98JraIjdDoU?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&playlist=98JraIjdDoU&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
              title="Founded on the sacred principle of divine Matri Seva - Vrindavan Seva Documentary"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 w-[130vw] min-w-[130vh] h-[130vh] min-h-[130vw] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none brightness-[1.12] contrast-[1.03]"
            />
          ) : (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-[position:center_top] bg-no-repeat brightness-[1.12]"
              style={{ backgroundImage: "url('/images/documentary-poster.jpg')" }}
            />
          )}
        </div>

        {/* Localized Left Gradient: Protects left text with strong visibility while keeping right video bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent lg:from-black/60 lg:via-black/20 lg:to-transparent pointer-events-none"></div>

        {/* Content Container: Left-Aligned Layout */}
        <div className="site-container relative z-10 h-full flex items-center justify-start pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl flex flex-col items-start text-left space-y-2.5 sm:space-y-3.5">
            
            {/* Typographic Cluster: 2-line layout (SACRED & / DIGNIFIED) - 15% smaller & extra bold with high-contrast shadow */}
            <div className="space-y-1.5 sm:space-y-2 w-full text-left">
              <h1 className="hero-heading text-[25px] sm:text-[40px] lg:text-[51px] font-black text-white uppercase tracking-[0.22em] leading-none m-0 p-0 text-left">
                SACRED <span style={{ color: '#FACC15' }} className="tracking-normal font-sans font-black">&amp;</span>
              </h1>
              <div className="hero-heading text-[25px] sm:text-[40px] lg:text-[51px] font-black uppercase tracking-[0.22em] leading-none m-0 p-0 text-left text-[#e65100] font-destitute-stamp">
                DIGNIFIED
              </div>
            </div>

            {/* 1px subtle divider line below heading */}
            <div className="w-full max-w-sm sm:max-w-md h-[1px] bg-white/50 my-1.5 sm:my-2"></div>

            {/* Subtitle & Mission Compassion Text */}
            <p className="hero-subtext text-xs sm:text-[13.5px] md:text-sm !text-white text-white font-sans leading-relaxed max-w-lg text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] m-0">
              Serving hot nutritious meals, daily cow milk, and compassionate healthcare to over 1,500 destitute widow Matas across Vrindavan every single day.
            </p>

            {/* Action Suite */}
            <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-start gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenDonate('indian', 'Vrindavan Matri Seva & Daily Sustenance')}
                className="w-full sm:w-auto btn-donate py-2.5 px-6 text-xs sm:text-sm font-bold shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Sponsor Matri Seva (80G)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto py-2.5 px-4 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Our Sevas</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>

            {/* Compliance / Impact Badges */}
            <div className="pt-1.5 border-t border-white/15 flex flex-wrap items-center justify-start gap-2.5 text-[10px] sm:text-[11px] text-slate-200">
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Direct Seva
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-amber-200 font-semibold">
                1,500+ Matas Daily
              </span>
              <span className="text-white/30">•</span>
              <span className="text-slate-200 font-medium">80G &amp; FCRA Verified</span>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          CAROUSEL CONTROLS & PAGINATION (4 Banners)
          ========================================================================= */}
      
      {/* Prev / Next Arrows */}
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

      {/* Animated Vertical Scroll Indicator (30px height, 1.5px width, clicks to scroll to #about) */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group bg-transparent border-none p-0 focus:outline-none"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 group-hover:text-amber-300 transition-colors mb-2 font-sans">
          SCROLL
        </span>

        {/* Vertical Line Container: 30px height and 1px sleek width */}
        <div className="relative w-[1px] h-[30px] bg-white/25 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-[1px] h-3 bg-gradient-to-b from-amber-300 via-amber-400 to-[#e65100] rounded-full animate-hero-scroll"></div>
        </div>
      </button>

      {/* Rotating Circular Hero Pledge Badge (Transparent with White Text) - Lowered below header */}
      <div className={`absolute top-20 right-4 sm:top-24 sm:right-6 lg:top-24 lg:right-10 z-20 pointer-events-auto select-none ${currentSlide === 1 ? 'hidden' : 'block'}`}>
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-transparent p-1 flex items-center justify-center transition-transform hover:scale-105 duration-300">
          
          {/* Outer Dashed Ring */}
          <div className="absolute inset-1.5 sm:inset-2 rounded-full border-[1.5px] border-dashed border-white/60 pointer-events-none"></div>

          {/* Rotating Curved Text Ring in White */}
          <svg 
            viewBox="0 0 120 120" 
            className="w-full h-full animate-spin-slow"
          >
            <defs>
              <path
                id="heroBadgePath"
                d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
            </defs>
            <text className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.18em] fill-white font-sans drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              <textPath href="#heroBadgePath" startOffset="0%" textLength="251" lengthAdjust="spacing">
                • PLEDGE FOR HELPING • SACRED SEVA • VRINDAVAN •
              </textPath>
            </text>
          </svg>

          {/* Centered Brand Monogram Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <img
                src="/images/logo-monogram-round.png?v=2"
                alt="Paramhansa Yogananda Trust Monogram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
