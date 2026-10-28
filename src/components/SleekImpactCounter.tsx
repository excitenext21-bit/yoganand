import React, { useState, useEffect, useRef } from 'react';
import { Stethoscope, Eye, Home, Utensils, Milk } from 'lucide-react';

interface SleekImpactCounterProps {
  onOpenDonate?: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const SleekImpactCounter: React.FC<SleekImpactCounterProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter hook with smooth cubic easing
  const useCountUp = (target: number, decimals: number = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      const duration = 1800; // ms
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Smooth cubic ease-out
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
      id: 'fed',
      num: count1.toFixed(2),
      unit: 'Lacs',
      title: 'Monthly Rations',
      desc: 'Nutritious flour, rice, pulses, and oil delivered every month.',
      icon: Utensils
    },
    {
      id: 'milk',
      num: count2.toFixed(2),
      unit: 'Lacs',
      title: 'Milk & Vegetables',
      desc: 'Daily fresh cow milk and farm vegetables directly to rooms.',
      icon: Milk
    },
    {
      id: 'medical',
      num: count3.toFixed(2),
      unit: 'Lacs',
      title: 'Free Healthcare',
      desc: 'Doctor visits, health screenings, and prescription medicines.',
      icon: Stethoscope
    },
    {
      id: 'surgeries',
      num: count4.toFixed(2),
      unit: 'Lacs',
      title: 'Surgeries & Sight',
      desc: 'Cataract lens implants and emergency hospital care.',
      icon: Eye
    },
    {
      id: 'visits',
      num: count5.toFixed(2),
      unit: 'Lacs',
      title: 'Bedside Seva',
      desc: 'Compassionate visits, hygiene support, and spiritual family.',
      icon: Home
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-16 bg-[#111727] border-y border-white/10 text-white"
    >
      <div className="site-container px-4 sm:px-6">
        
        {/* Split Section Layout: Left Philosophy/Title | Right Single Connected Bordered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Eyebrow with Line + Heading + Narrative */}
          <div className="lg:col-span-4 space-y-4 text-left">
            
            {/* Eyebrow with horizontal line */}
            <div className="flex items-center gap-3">
              <span style={{ color: '#ffffff' }} className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold !text-white font-sans">
                OUR IMPACT
              </span>
              <div className="w-12 h-[1px] bg-white/60"></div>
            </div>

            {/* 24px Heading in Pure White - Normal Case */}
            <h2 
              style={{ fontSize: '24px', color: '#ffffff' }}
              className="!text-[24px] font-normal tracking-[-0.015em] !text-white font-heading leading-snug m-0"
            >
              A decade of sacred seva in holy Vrindavan
            </h2>

            {/* Narrative Paragraph in Pure White */}
            <p style={{ color: 'rgba(255, 255, 255, 0.92)' }} className="text-xs sm:text-sm !text-white/90 font-sans leading-relaxed max-w-sm">
              Every metric represents an abandoned mother restored with nutritious food, sight, medical healing, and divine dignity.
            </p>

            {/* Transparent Verified Footnote in Pure White */}
            <div style={{ color: '#ffffff' }} className="pt-2 flex items-center gap-2 text-xs !text-white font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span style={{ color: '#ffffff' }}>
                <strong style={{ color: '#ffffff' }} className="!text-white font-semibold">Over 3.3 Million</strong> acts of sacred love delivered since August 2015.
              </span>
            </div>

          </div>

          {/* Right Column: Single Connected Bordered Frame (Only Border, No Background) */}
          <div className="lg:col-span-8">
            <div className="border border-white/25 bg-transparent grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div 
                    key={stat.id}
                    className="p-4 sm:p-5 lg:p-3.5 xl:p-4 flex flex-col items-center text-center justify-start space-y-2.5 bg-transparent"
                  >
                    {/* Outline Line Icon in Pure White */}
                    <div style={{ color: '#ffffff' }} className="w-9 h-9 flex items-center justify-center !text-white mb-0.5">
                      <Icon className="w-6 h-6 stroke-[1]" />
                    </div>

                    {/* Animated Number + Lacs in Pure White */}
                    <div className="flex items-baseline justify-center gap-1.5 font-sans">
                      <span style={{ color: '#ffffff' }} className="text-2xl sm:text-[26px] xl:text-[28px] font-extrabold tracking-tight !text-white leading-none">
                        {stat.num}
                      </span>
                      <span style={{ color: '#ffffff' }} className="text-xs font-bold !text-white">
                        {stat.unit}
                      </span>
                    </div>

                    {/* Metric Title in Pure White - 14px Readable */}
                    <h3 
                      style={{ color: '#ffffff' }}
                      className="text-[14px] font-bold !text-white leading-snug font-sans m-0"
                    >
                      {stat.title}
                    </h3>

                    {/* 2-3 Line Descriptive Text in White - 14px Readable */}
                    <p 
                      style={{ color: 'rgba(255, 255, 255, 0.92)' }}
                      className="text-[14px] !text-white/90 leading-normal font-sans font-normal m-0"
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
