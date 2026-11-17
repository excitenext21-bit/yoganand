import React, { useState, useEffect, useRef } from 'react';
import { donorTestimonials } from '../data/mockCmsData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface StoriesAndTestimonialsProps {
  onOpenDonate: (portalType: 'indian' | 'foreign') => void;
}

export const StoriesAndTestimonials: React.FC<StoriesAndTestimonialsProps> = ({ onOpenDonate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = isDesktop ? Math.max(0, donorTestimonials.length - 2) : donorTestimonials.length - 1;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="stories" className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="site-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl text-left">
            <h2
              style={{ fontSize: '28px' }}
              className="!text-[24px] sm:!text-[28px] font-medium tracking-[-0.015em] text-[#18181b] font-heading leading-snug m-0"
            >
              Voices of compassion from our global donor family
            </h2>
            <p className="text-[#444444] text-sm sm:text-base leading-relaxed m-0 font-sans">
              Hear from generous patrons in India and around the world whose kindness brings warm meals, medical healing, and daily joy to Vrindavan’s Matas.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="text-xs sm:text-sm font-semibold text-slate-500 font-sans mr-2">
              <span className="text-slate-900 font-bold">{currentIndex + 1}</span> / {donorTestimonials.length}
            </div>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 shadow-xs flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 shadow-xs flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Donor Testimonials Slider Track */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: isDesktop
                ? `translateX(calc(-${currentIndex} * (50% + 12px)))`
                : `translateX(calc(-${currentIndex} * (100% + 24px)))`
            }}
          >
            {donorTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full lg:w-[calc(50%-12px)] shrink-0 bg-[#f8fafc] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-5 text-left"
              >
                <div className="space-y-3.5">
                  <Quote className="w-6 h-6 text-amber-500 opacity-85" />

                  <p className="font-serif text-base sm:text-[17px] font-medium italic text-slate-900 leading-relaxed m-0">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#002878] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-[#18181b] text-base m-0 truncate">
                      {testimonial.donorName}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#003896] font-semibold m-0">
                      {testimonial.role} • {testimonial.location}
                    </p>
                    <p className="text-xs text-slate-600 m-0 pt-0.5">
                      {testimonial.impactHighlight} (Since {testimonial.supportedSince})
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#002878]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Donate CTA */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onOpenDonate('indian')}
            className="btn-donate text-sm font-semibold cursor-pointer"
          >
            <span>Donate Now (Indian 80G)</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenDonate('foreign')}
            className="py-2.5 px-6 rounded-full bg-white hover:bg-slate-50 text-[#003896] border border-[#003896]/30 hover:border-[#003896] text-sm font-semibold transition-all cursor-pointer"
          >
            <span>International Donors (FCRA)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
