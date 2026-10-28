import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface CreativeLoaderProps {
  onLoadingComplete?: () => void;
}

export const CreativeLoader: React.FC<CreativeLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const givingAffirmations = [
    "When you serve a destitute Mata, you serve the Divine Mother.",
    "Your compassion transforms loneliness into lifelong dignity.",
    "The Sacred Power of Giving • Vrindavan & Radhakund"
  ];

  useEffect(() => {
    // Check if already shown in this session
    const hasLoadedBefore = sessionStorage.getItem('yogananda_loader_shown');
    if (hasLoadedBefore) {
      setIsMounted(false);
      onLoadingComplete?.();
      return;
    }

    // Smooth Progress Counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const increment = prev < 60 ? 3 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 35);

    // Rotate Affirmations
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % givingAffirmations.length);
    }, 850);

    return () => {
      clearInterval(interval);
      clearInterval(quoteInterval);
    };
  }, []);

  // When progress reaches 100%, trigger smooth exit
  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 250);

      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
        sessionStorage.setItem('yogananda_loader_shown', 'true');
        onLoadingComplete?.();
      }, 950);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress, onLoadingComplete]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 select-none transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100'
      }`}
    >
      {/* Ethereal Sacred Aura Glows on White Background */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-amber-100/40 via-sky-100/30 to-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse" />
      <div className="absolute w-[280px] h-[280px] bg-amber-200/25 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center space-y-6">
        
        {/* Brand Logo with Creative Expanding Compassion Ripples */}
        <div className="relative flex items-center justify-center">
          
          {/* Concentric 1px Compassion Ripple Rings */}
          <div className="absolute w-32 h-32 rounded-full border border-amber-300/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
          <div className="absolute w-28 h-28 rounded-full border border-sky-300/40 animate-ping pointer-events-none" style={{ animationDuration: '2.4s', animationDelay: '0.4s' }} />
          
          {/* Subtle Rotating Halo Ring */}
          <div className="absolute w-[104px] h-[104px] rounded-full border border-dashed border-amber-400/60 animate-spin pointer-events-none" style={{ animationDuration: '18s' }} />

          {/* Central Monogram Emblem */}
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white p-1 shadow-lg ring-1 ring-slate-200/80 flex items-center justify-center overflow-hidden">
            <img
              src="/images/logo-monogram-round.png"
              alt="Paramhansa Yogananda Trust"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-1">
          <h1 
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#002878] m-0"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Paramhansa Yogananda
          </h1>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#e65100] font-sans m-0">
            Public Charitable Trust • Vrindavan
          </p>
        </div>

        {/* Creative "The Power of Giving" Pillar Banner */}
        <div className="w-full pt-1 pb-2 space-y-2">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse stroke-[1]" />
            <span className="tracking-wide">THE POWER OF GIVING</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-600 stroke-[1]" />
          </div>

          {/* Dynamic Affirmation Text */}
          <div className="h-10 flex items-center justify-center px-4">
            <p className="text-xs sm:text-sm text-[#444444] font-medium italic transition-all duration-300 font-sans leading-snug m-0">
              "{givingAffirmations[quoteIndex]}"
            </p>
          </div>

        </div>

        {/* Sleek 1px Line Progress Gauge */}
        <div className="w-full max-w-[260px] space-y-2 pt-2">
          
          {/* Slender Track */}
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-[#00a2ff] to-[#003896] rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percentage & Status */}
          <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 font-sans px-0.5">
            <span className="tracking-wider uppercase text-[10px]">Restoring Dignity</span>
            <span className="font-bold text-[#003896]">{progress}%</span>
          </div>

        </div>

      </div>
    </div>
  );
};
