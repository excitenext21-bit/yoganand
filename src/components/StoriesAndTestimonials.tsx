import React, { useState, useEffect, useRef } from 'react';
import { initialStories } from '../data/mockCmsData';
import { Quote, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // On desktop, 2 slides are visible side by side; max index is length - 2
  const maxIndex = isDesktop ? Math.max(0, initialStories.length - 2) : initialStories.length - 1;

  // Auto-play interval
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
    <section id="stories" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200 overflow-hidden">
      <div className="site-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-1.5 max-w-2xl text-left">
            <h2 
              style={{ fontSize: '24px' }}
              className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] font-heading leading-snug m-0"
            >
              "Once forgotten by the world, now cherished as divine Matas"
            </h2>
            <p className="text-[#444444] text-xs sm:text-sm leading-relaxed m-0 font-sans">
              Every Mata in Vrindavan has a story of resilience. Here are authentic voices of the Matajis whose lives have been transformed through your compassion.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="text-xs font-semibold text-slate-500 font-sans mr-2">
              <span className="text-slate-900 font-bold">{currentIndex + 1}</span> / {initialStories.length}
            </div>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 shadow-xs flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next story"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 shadow-xs flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stories Slider Track */}
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
            {initialStories.map((story) => (
              <div
                key={story.id}
                className="w-full lg:w-[calc(50%-12px)] shrink-0 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start text-left"
              >
                {/* Photo */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shrink-0 shadow-md border-2 border-white self-center sm:self-start bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2.5 text-left flex-1 min-w-0">
                  <Quote className="w-5 h-5 text-amber-500 opacity-80" />
                  <p className="font-serif text-sm sm:text-[15px] font-medium italic text-slate-900 leading-snug m-0">
                    "{story.quote}"
                  </p>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#18181b] text-sm m-0">
                      {story.name}, <span className="font-normal text-slate-500">{story.age} years</span>
                    </h4>
                    <p className="text-[11px] text-[#002878] font-semibold tracking-wide m-0 pt-0.5">
                      Native of {story.origin} • Supported via {story.program}
                    </p>
                  </div>
                  <p className="text-xs text-[#444444] leading-relaxed border-t border-slate-100 pt-2 m-0">
                    {story.background}
                  </p>
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
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#002878]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onOpenDonate('indian')}
            className="btn-donate py-3 px-7 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Sponsor a Mataji's Monthly Living &amp; Care</span>
          </button>
        </div>

      </div>
    </section>
  );
};
