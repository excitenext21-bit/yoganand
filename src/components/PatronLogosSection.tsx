import React, { useState, useEffect } from 'react';

interface PatronLogo {
  id: string;
  name: string;
  svg: React.ReactNode;
}

export const PatronLogosSection: React.FC = () => {
  // 30 Corporate Patrons & Donors organized across 6 borderless slots
  const logoPool: PatronLogo[][] = [
    // Slot 1
    [
      {
        id: 'tata-steel',
        name: 'TATA Steel',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M12 28 C12 16, 20 10, 28 8 C22 14, 18 20, 18 28 Z" fill="currentColor" />
            <path d="M44 28 C44 16, 36 10, 28 8 C34 14, 38 20, 38 28 Z" fill="currentColor" />
            <circle cx="28" cy="8" r="2.5" fill="currentColor" />
            <text x="56" y="22" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.05em" fill="currentColor">
              TATA STEEL
            </text>
          </svg>
        )
      },
      {
        id: 'icertis',
        name: 'Icertis',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <rect x="10" y="10" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(15 18 18)" />
            <rect x="15" y="14" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10 23 22)" />
            <text x="46" y="25" fontFamily="sans-serif" fontSize="17" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">
              Icertis
            </text>
          </svg>
        )
      },
      {
        id: 'vulkan',
        name: 'Vulkan',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <text x="15" y="27" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="0.1em" fill="currentColor">
              VULKAN
            </text>
          </svg>
        )
      },
      {
        id: 'trac1',
        name: 'TRAC1 Logistics',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M12 12 H26 M19 12 V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M30 18 L38 8 L46 18 M38 8 V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <text x="54" y="24" fontFamily="sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.05em" fill="currentColor">
              TRAC1
            </text>
            <text x="54" y="32" fontFamily="sans-serif" fontSize="7" fontWeight="600" letterSpacing="0.15em" fill="currentColor">
              LOGISTICS
            </text>
          </svg>
        )
      },
      {
        id: 'plaza-partners',
        name: 'Plaza Partners',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <rect x="8" y="10" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M8 20 H28 M18 10 V30" stroke="currentColor" strokeWidth="1.5" />
            <text x="36" y="22" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.08em" fill="currentColor">
              PLAZA
            </text>
            <text x="36" y="30" fontFamily="sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.05em" fill="currentColor">
              PARTNERS
            </text>
          </svg>
        )
      }
    ],

    // Slot 2
    [
      {
        id: 'indianoil',
        name: 'IndianOil',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <rect x="6" y="18" width="28" height="4" fill="currentColor" />
            <text x="44" y="24" fontFamily="sans-serif" fontSize="15" fontWeight="800" fill="currentColor">
              IndianOil
            </text>
          </svg>
        )
      },
      {
        id: 'adobe',
        name: 'Adobe',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M10 8 H24 L14 32 Z" fill="currentColor" />
            <path d="M38 8 H24 L34 32 Z" fill="currentColor" />
            <path d="M22 21 L28 21 L32 32 H25 L23 27 H18 Z" fill="currentColor" />
            <text x="48" y="25" fontFamily="sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.01em" fill="currentColor">
              Adobe
            </text>
          </svg>
        )
      },
      {
        id: 'dabur',
        name: 'Dabur',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="20" cy="14" r="3" fill="currentColor" />
            <circle cx="14" cy="10" r="2.5" fill="currentColor" />
            <circle cx="26" cy="10" r="2.5" fill="currentColor" />
            <circle cx="10" cy="15" r="2" fill="currentColor" />
            <circle cx="30" cy="15" r="2" fill="currentColor" />
            <path d="M20 18 C20 22, 17 25, 15 28 H25 C23 25, 20 22, 20 18 Z" fill="currentColor" />
            <text x="38" y="26" fontFamily="serif" fontSize="18" fontWeight="800" fontStyle="italic" fill="currentColor">
              Dabur
            </text>
          </svg>
        )
      },
      {
        id: 'sedin',
        name: 'Sedin',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="18" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="18" cy="20" r="3" fill="currentColor" />
            <text x="36" y="26" fontFamily="sans-serif" fontSize="17" fontWeight="800" fill="currentColor">
              Sedin
            </text>
          </svg>
        )
      },
      {
        id: 'virchow',
        name: 'Virchow Laboratories',
        svg: (
          <svg viewBox="0 0 170 40" className="h-9 sm:h-10 w-auto max-w-[170px] object-contain" fill="currentColor">
            <rect x="8" y="8" width="55" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <text x="12" y="18" fontFamily="sans-serif" fontSize="8" fontWeight="900" letterSpacing="0.1em" fill="currentColor">
              VIRCHOWS
            </text>
            <text x="8" y="30" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="currentColor">
              Virchow Laboratories
            </text>
          </svg>
        )
      }
    ],

    // Slot 3
    [
      {
        id: 'ongc',
        name: 'ONGC',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <rect x="10" y="8" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M16 26 L22 14 L28 26 M18 22 H26" stroke="currentColor" strokeWidth="1.8" />
            <text x="42" y="26" fontFamily="sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.08em" fill="currentColor">
              ONGC
            </text>
          </svg>
        )
      },
      {
        id: 'kama-ayurveda',
        name: 'Kama Ayurveda',
        svg: (
          <svg viewBox="0 0 170 40" className="h-9 sm:h-10 w-auto max-w-[165px] object-contain" fill="currentColor">
            <path d="M12 20 C12 12, 18 8, 24 8 C30 8, 36 12, 36 20 C36 26, 24 30, 24 30 C24 30, 12 26, 12 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="18" r="3" fill="currentColor" />
            <text x="44" y="20" fontFamily="serif" fontSize="12" fontWeight="700" letterSpacing="0.18em" fill="currentColor">
              KAMA
            </text>
            <text x="44" y="28" fontFamily="serif" fontSize="7" fontWeight="500" letterSpacing="0.25em" fill="currentColor">
              AYURVEDA
            </text>
          </svg>
        )
      },
      {
        id: 'dlf-brands',
        name: 'DLF Brands',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M18 10 L10 24 L26 24 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M18 10 L14 24 M18 10 L22 24" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.06em" fill="currentColor">
              DLF
            </text>
            <text x="68" y="23" fontFamily="sans-serif" fontSize="12" fontWeight="600" letterSpacing="0.1em" fill="currentColor">
              BRANDS
            </text>
          </svg>
        )
      },
      {
        id: 'pure-home',
        name: 'Pure Home & Living',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <text x="12" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.15em" fill="currentColor">
              PURE
            </text>
            <text x="12" y="30" fontFamily="sans-serif" fontSize="7" fontWeight="500" letterSpacing="0.25em" fill="currentColor">
              HOME + LIVING
            </text>
          </svg>
        )
      },
      {
        id: 'shamdasani',
        name: 'Shamdasani Foundation',
        svg: (
          <svg viewBox="0 0 170 40" className="h-9 sm:h-10 w-auto max-w-[170px] object-contain" fill="currentColor">
            <rect x="8" y="6" width="154" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="16" y="20" fontFamily="serif" fontSize="10" fontWeight="900" letterSpacing="0.12em" fill="currentColor">
              SHAMDASANI
            </text>
            <text x="16" y="29" fontFamily="serif" fontSize="7" fontWeight="600" letterSpacing="0.18em" fill="currentColor">
              FOUNDATION
            </text>
          </svg>
        )
      }
    ],

    // Slot 4
    [
      {
        id: 'concor',
        name: 'CONCOR',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M8 12 H24 M8 16 H28 M8 20 H32 M8 24 H28 M8 28 H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <text x="38" y="24" fontFamily="sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.05em" fill="currentColor">
              CONCOR
            </text>
          </svg>
        )
      },
      {
        id: 'ananda',
        name: 'Ananda',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M15 22 C15 15, 25 15, 25 22 C25 26, 17 26, 18 20 C19 17, 22 17, 22 20" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <text x="42" y="25" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="currentColor">
              Ananda
            </text>
          </svg>
        )
      },
      {
        id: 'apollo',
        name: 'Apollo Foundation',
        svg: (
          <svg viewBox="0 0 170 40" className="h-9 sm:h-10 w-auto max-w-[165px] object-contain" fill="currentColor">
            <path d="M12 12 H26 V26 H12 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M19 8 V30 M15 16 H23 M15 22 H23" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="800" fill="currentColor">
              Apollo
            </text>
            <text x="34" y="28" fontFamily="sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.1em" fill="currentColor">
              FOUNDATION
            </text>
          </svg>
        )
      },
      {
        id: 'games2win',
        name: 'Games2Win',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="20" cy="10" r="2.5" fill="currentColor" />
            <circle cx="26" cy="10" r="2.5" fill="currentColor" />
            <circle cx="32" cy="10" r="2.5" fill="currentColor" />
            <text x="12" y="26" fontFamily="sans-serif" fontSize="14" fontWeight="900" letterSpacing="0.04em" fill="currentColor">
              GAMES2WIN
            </text>
          </svg>
        )
      },
      {
        id: 'enginetech',
        name: 'Enginetech Systems',
        svg: (
          <svg viewBox="0 0 170 40" className="h-9 sm:h-10 w-auto max-w-[165px] object-contain" fill="currentColor">
            <rect x="8" y="11" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 15 H22 M12 20 H22 M12 25 H18" stroke="currentColor" strokeWidth="1.8" />
            <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="900" letterSpacing="0.05em" fill="currentColor">
              ENGINETECH
            </text>
            <text x="32" y="29" fontFamily="sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.1em" fill="currentColor">
              SYSTEMS
            </text>
          </svg>
        )
      }
    ],

    // Slot 5
    [
      {
        id: 'nbcc',
        name: 'NBCC',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M12 28 V16 C12 11, 20 7, 28 7 C36 7, 44 11, 44 16 V28 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <text x="17" y="23" fontFamily="sans-serif" fontSize="9" fontWeight="900" letterSpacing="0.15em" fill="currentColor">
              NBCC
            </text>
            <text x="54" y="23" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="currentColor">
              Navratna CPSE
            </text>
          </svg>
        )
      },
      {
        id: 'ais',
        name: 'AIS Glass',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <path d="M18 10 L10 20 L18 30 M38 10 L46 20 L38 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <text x="21" y="25" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.05em" fill="currentColor">
              AIS
            </text>
            <text x="56" y="25" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="currentColor">
              Asahi Glass
            </text>
          </svg>
        )
      },
      {
        id: 'dixon',
        name: 'Dixon',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <text x="12" y="24" fontFamily="sans-serif" fontSize="19" fontWeight="900" fontStyle="italic" fill="currentColor">
              Dixon
            </text>
            <text x="70" y="16" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="currentColor">
              ®
            </text>
          </svg>
        )
      },
      {
        id: '24-7-intouch',
        name: '24-7 InTouch',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="16" cy="18" r="7" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            <text x="28" y="22" fontFamily="sans-serif" fontSize="12" fontWeight="800" fill="currentColor">
              24-7 INTOUCH
            </text>
          </svg>
        )
      },
      {
        id: 'cw-warranties',
        name: 'CW Corporate Warranties',
        svg: (
          <svg viewBox="0 0 160 40" className="h-9 sm:h-10 w-auto max-w-[165px] object-contain" fill="currentColor">
            <path d="M10 8 L32 8 L24 30 L6 30 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <text x="12" y="24" fontFamily="sans-serif" fontSize="15" fontWeight="900" fontStyle="italic" fill="currentColor">
              CW
            </text>
            <text x="38" y="20" fontFamily="sans-serif" fontSize="10" fontWeight="800" letterSpacing="0.08em" fill="currentColor">
              CORPORATE
            </text>
            <text x="38" y="28" fontFamily="sans-serif" fontSize="7" fontWeight="600" letterSpacing="0.15em" fill="currentColor">
              WARRANTIES
            </text>
          </svg>
        )
      }
    ],

    // Slot 6
    [
      {
        id: 'everest',
        name: 'Everest',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <rect x="10" y="9" width="100" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <text x="18" y="25" fontFamily="sans-serif" fontSize="14" fontWeight="900" letterSpacing="0.1em" fill="currentColor">
              EVEREST
            </text>
          </svg>
        )
      },
      {
        id: 'mcx',
        name: 'MCX India',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <text x="15" y="27" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="0.08em" fill="currentColor">
              MCX
            </text>
          </svg>
        )
      },
      {
        id: 'billion-hearts',
        name: 'Billion Hearts Beating',
        svg: (
          <svg viewBox="0 0 170 40" className="h-9 sm:h-10 w-auto max-w-[170px] object-contain" fill="currentColor">
            <path d="M14 16 C14 12, 18 10, 22 13 C26 10, 30 12, 30 16 C30 22, 22 26, 22 26 C22 26, 14 22, 14 16 Z" fill="currentColor" />
            <text x="36" y="19" fontFamily="sans-serif" fontSize="9" fontWeight="900" fill="currentColor">
              BILLION HEARTS
            </text>
            <text x="36" y="27" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="currentColor">
              BEATING
            </text>
          </svg>
        )
      },
      {
        id: 'seci',
        name: 'SECI',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <circle cx="16" cy="18" r="6" fill="currentColor" />
            <rect x="26" y="12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="32" y1="12" x2="32" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="26" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="1" />
            <text x="44" y="24" fontFamily="sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.06em" fill="currentColor">
              SECI
            </text>
          </svg>
        )
      },
      {
        id: 'aerol',
        name: 'Aerol',
        svg: (
          <svg viewBox="0 0 150 40" className="h-9 sm:h-10 w-auto max-w-[155px] object-contain" fill="currentColor">
            <rect x="10" y="8" width="34" height="24" rx="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <text x="48" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.05em" fill="currentColor">
              AEROL
            </text>
            <text x="48" y="30" fontFamily="sans-serif" fontSize="7" fontWeight="600" letterSpacing="0.15em" fill="currentColor">
              PROUD TO SERVE
            </text>
          </svg>
        )
      }
    ]
  ];

  // Active logo index for each of the 6 slots (0 to 4)
  const [slotIndices, setSlotIndices] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  // State tracking which slot recently animated to apply the drop-bounce physics
  const [animatingSlots, setAnimatingSlots] = useState<boolean[]>([false, false, false, false, false, false]);
  const [activeSetIndex, setActiveSetIndex] = useState<number>(0);

  // Cascading wave function: switches each slot sequentially with drop-bounce physics
  const triggerWaveTransition = (targetSet: number) => {
    setActiveSetIndex(targetSet);

    // Ripple across slots 0 to 5 with 75ms stagger for crisp 2.5-second cycle
    [0, 1, 2, 3, 4, 5].forEach((slotIndex) => {
      setTimeout(() => {
        setSlotIndices((prev) => {
          const next = [...prev];
          next[slotIndex] = targetSet;
          return next;
        });

        setAnimatingSlots((prev) => {
          const next = [...prev];
          next[slotIndex] = true;
          return next;
        });

        // Reset animation state once bounce settles
        setTimeout(() => {
          setAnimatingSlots((prev) => {
            const next = [...prev];
            next[slotIndex] = false;
            return next;
          });
        }, 650);
      }, slotIndex * 75);
    });
  };

  useEffect(() => {
    // Automatic rhythm: wave transitions every 2.5 seconds (2500ms)
    const interval = setInterval(() => {
      setActiveSetIndex((current) => {
        const nextSet = (current + 1) % 5;
        triggerWaveTransition(nextSet);
        return nextSet;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="bg-[#002878] py-6 sm:py-8 border-b border-blue-900/60 text-white overflow-hidden relative select-none shadow-sm"
    >
      <div className="site-container px-4 sm:px-6">
        
        {/* Sleek Left-Aligned Eyebrow Heading */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6 text-left">
          <span 
            style={{ color: '#ffffff' }} 
            className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] font-bold !text-white font-sans opacity-95"
          >
            OUR PATRONS / DONORS
          </span>
          <div className="w-12 sm:w-16 h-[1.5px] bg-white/40"></div>
        </div>

        {/* 6 Logo Stage Slots: Borderless, Same Visual Height (Increased by 10%), Drop & Bounce in Same Place */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {logoPool.map((slotLogos, slotIndex) => {
            const currentLogoIndex = slotIndices[slotIndex];
            const activeLogo = slotLogos[currentLogoIndex];
            const isBouncing = animatingSlots[slotIndex];

            return (
              <div
                key={slotIndex}
                className="w-full h-14 sm:h-16 flex items-center justify-center relative overflow-hidden group cursor-pointer transition-opacity duration-200"
                title={`${activeLogo.name} (Click to switch)`}
                onClick={() => {
                  // Allow clicking any logo slot directly to trigger an instant drop-bounce to its next logo
                  setSlotIndices((prev) => {
                    const next = [...prev];
                    next[slotIndex] = (next[slotIndex] + 1) % slotLogos.length;
                    return next;
                  });
                  setAnimatingSlots((prev) => {
                    const next = [...prev];
                    next[slotIndex] = true;
                    return next;
                  });
                  setTimeout(() => {
                    setAnimatingSlots((prev) => {
                      const next = [...prev];
                      next[slotIndex] = false;
                      return next;
                    });
                  }, 750);
                }}
              >
                {/* Monochromatic White SVG Logo with 10% Increased Size & Sleek High Readability */}
                <div 
                  key={`${slotIndex}-${activeLogo.id}`}
                  className={`w-full flex items-center justify-center text-white transition-all duration-200 transform scale-110 drop-shadow-xs ${
                    isBouncing ? 'animate-drop-bounce' : ''
                  }`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {activeLogo.svg}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ultra-Sleek Progress Dots: Shows active set & enables direct navigation */}
        <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-5">
          {[0, 1, 2, 3, 4].map((setIdx) => (
            <button
              key={setIdx}
              onClick={() => triggerWaveTransition(setIdx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                activeSetIndex === setIdx 
                  ? 'w-5 sm:w-6 bg-white' 
                  : 'w-1.5 bg-white/35 hover:bg-white/70'
              }`}
              aria-label={`View patrons group ${setIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
