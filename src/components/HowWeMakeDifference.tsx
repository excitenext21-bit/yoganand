import React, { useState, useEffect, useRef } from 'react';
import { Utensils, Milk, Stethoscope, Eye, Home } from 'lucide-react';
import { 
  AshramSanctuaryGraphic, 
  SustenanceNourishmentGraphic, 
  HealthcareSurgeriesGraphic 
} from './DifferenceGraphics';

interface HowWeMakeDifferenceProps {
  onOpenDonate?: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const HowWeMakeDifference: React.FC<HowWeMakeDifferenceProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger circular center-out reveal & counter animation on load / scroll into view
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            setIsVisible(true);
          }, 80);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Smooth cubic ease-out counter hook
  const useCountUp = (target: number, decimals: number = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      const duration = 1600; // ms
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * ease;
        setCount(Number(currentVal.toFixed(decimals)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, target, decimals]);

    return count;
  };

  const count1 = useCountUp(3.34, 2);
  const count2 = useCountUp(31.28, 2);
  const count3 = useCountUp(3.91, 2);
  const count4 = useCountUp(1.10, 2);
  const count5 = useCountUp(25.10, 2);

  const stats = [
    {
      id: 'rations',
      num: count1.toFixed(2),
      unit: 'Lacs',
      title: 'Monthly Rations',
      desc: 'Flour, rice, lentils & pure cooking oil.',
      icon: Utensils
    },
    {
      id: 'milk',
      num: count2.toFixed(2),
      unit: 'Lacs',
      title: 'Milk & Vegetables',
      desc: 'Fresh cow milk & greens delivered daily.',
      icon: Milk
    },
    {
      id: 'medical',
      num: count3.toFixed(2),
      unit: 'Lacs',
      title: 'Free Healthcare',
      desc: 'Doctor clinics & chronic prescription medicines.',
      icon: Stethoscope
    },
    {
      id: 'surgeries',
      num: count4.toFixed(2),
      unit: 'Lacs',
      title: 'Surgeries & Sight',
      desc: 'Cataract lens implants & hospital surgeries.',
      icon: Eye
    },
    {
      id: 'bedside',
      num: count5.toFixed(2),
      unit: 'Lacs',
      title: 'Bedside Seva',
      desc: 'Compassionate home visits & spiritual companionship.',
      icon: Home
    }
  ];

  return (
    <section 
      id="how-we-make-a-difference"
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-[#f8fafc]"
    >
      {/* Circular Center-Out Reveal Wrapper: Opens from a circle at the exact center to fill the complete section */}
      <div
        className="w-full bg-[#405527] py-5 sm:py-7 lg:py-6 px-0 text-white overflow-hidden relative lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #49632d 0%, #405527 65%, #364820 100%)',
          clipPath: isVisible ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          WebkitClipPath: isVisible ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          transition: 'clip-path 1.45s cubic-bezier(0.22, 1, 0.36, 1), -webkit-clip-path 1.45s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'clip-path'
        }}
      >
        <div
          className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto flex flex-col justify-between space-y-4 sm:space-y-5 lg:space-y-6"
          style={{
            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 1.25s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, opacity 0.85s ease-out 0.08s'
          }}
        >
        
        {/* =========================================================================
            HEADER: White Heading + 1-Line Impact Philosophy (No top eyebrow)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-1 relative -translate-y-4 sm:-translate-y-6 lg:-translate-y-8">
          <h2 
            style={{ fontSize: '24px' }}
            className="!text-[24px] font-normal tracking-[-0.015em] !text-white font-heading m-0 leading-tight"
          >
            How we make a difference?
          </h2>

          <p className="text-[#d4e3cb] text-xs sm:text-[13px] font-sans font-normal leading-relaxed m-0 max-w-xl mx-auto">
            A decade of sacred seva in holy Vrindavan — transforming acute vulnerability into lifelong dignity, food & healthcare.
          </p>
        </div>

        {/* =========================================================================
            3 PILLARS: Icons & Graphics matched to heading names, 18px font size (50% reduction)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-center w-full">
          
          {/* Pillar 1: Build & Support Ashrams -> Handmade Animated Ashram Sanctuary Graphic */}
          <div className="flex flex-col items-center text-center space-y-2.5">
            <div className="space-y-1 max-w-sm">
              <h3 
                className="!text-white tracking-tight leading-snug m-0 font-heading"
                style={{ 
                  color: '#ffffff',
                  fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.3'
                }}
              >
                Build & Support Ashrams
              </h3>
              <p className="text-[#e2edd9] text-xs sm:text-[12.5px] leading-relaxed font-sans m-0">
                Safe residential ashram sanctuaries providing 24/7 loving care, warm bedding, and spiritual peace for destitute elderly mothers.
              </p>
            </div>

            {/* Handmade Animated Ashram Sanctuary Graphic */}
            <div className="pt-0.5 flex items-center justify-center">
              <AshramSanctuaryGraphic className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24" />
            </div>
          </div>

          {/* Pillar 2: Provide Essential Sustenance -> Handmade Animated Annapurna Graphic */}
          <div className="flex flex-col items-center text-center space-y-2.5">
            {/* Handmade Animated Annapurna Sustenance Graphic */}
            <div className="pb-0.5 flex items-center justify-center">
              <SustenanceNourishmentGraphic className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24" />
            </div>

            <div className="space-y-1 max-w-sm">
              <h3 
                className="!text-white tracking-tight leading-snug m-0 font-heading"
                style={{ 
                  color: '#ffffff',
                  fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.3'
                }}
              >
                Provide Essential Sustenance
              </h3>
              <p className="text-[#e2edd9] text-xs sm:text-[12.5px] leading-relaxed font-sans m-0">
                Daily fresh sattvic meals, door-to-door monthly ration kits, and pure cow milk to over 1,200 mothers living across Vrindavan.
              </p>
            </div>
          </div>

          {/* Pillar 3: Healthcare & Surgeries -> Handmade Animated Healthcare & Vision Graphic */}
          <div className="flex flex-col items-center text-center space-y-2.5">
            <div className="space-y-1 max-w-sm">
              <h3 
                className="!text-white tracking-tight leading-snug m-0 font-heading"
                style={{ 
                  color: '#ffffff',
                  fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.3'
                }}
              >
                Healthcare & Surgeries
              </h3>
              <p className="text-[#e2edd9] text-xs sm:text-[12.5px] leading-relaxed font-sans m-0">
                Free doctor consultations, chronic prescription medicines, and sponsored cataract surgeries restoring sight and independence.
              </p>
            </div>

            {/* Handmade Animated Healthcare & Vision Surgery Graphic */}
            <div className="pt-0.5 flex items-center justify-center">
              <HealthcareSurgeriesGraphic className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24" />
            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM STRIP: Eyebrow 'OUR IMPACT' + 5 Sleek Impact Metrics Joined with 1px Right Partition
            ========================================================================= */}
        <div className="pt-4 sm:pt-5 border-t border-white/20">
          {/* Eyebrow: OUR IMPACT */}
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-3.5">
            <div className="w-8 h-[1px] bg-white/40"></div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-semibold text-white/90 font-sans">
              OUR IMPACT
            </span>
            <div className="w-8 h-[1px] bg-white/40"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 w-full items-stretch">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div 
                  key={stat.id}
                  className={`px-3 sm:px-4 lg:px-5 py-2.5 flex flex-col justify-between space-y-2 transition-colors ${
                    idx === stats.length - 1 ? 'border-r-0' : 'border-r border-white/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white shrink-0">
                        <IconComp className="w-3.5 h-3.5 stroke-[1] text-white" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span 
                          style={{ color: '#ffffff' }}
                          className="text-xl sm:text-2xl lg:text-[24px] font-light tracking-tight !text-white font-heading"
                        >
                          {stat.num}
                        </span>
                        <span 
                          style={{ color: '#ffffff' }}
                          className="text-xs font-semibold !text-white font-sans opacity-90"
                        >
                          {stat.unit}
                        </span>
                      </div>
                    </div>

                    <div 
                      style={{ color: '#ffffff' }}
                      className="text-xs font-semibold !text-white tracking-wide font-sans m-0 truncate"
                    >
                      {stat.title}
                    </div>
                  </div>

                  <p 
                    style={{ color: '#ffffff' }}
                    className="!text-white/80 text-[11px] leading-snug font-sans m-0 truncate pt-1 border-t border-white/10"
                  >
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
