import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenDonate: (portalType: 'indian' | 'foreign') => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate }) => {
  return (
    <footer className="relative bg-[#03131c] text-slate-300 overflow-hidden">
      {/* 1. Silhouette Landscape Header Art (Caregivers helping elderly in silhouette on misty hill) */}
      <div className="relative w-full overflow-hidden select-none">
        {/* SVG Wind Turbulence Filter for Tree Foliage Rustle */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <filter id="windFoliageFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.035" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" dur="7s" values="0.02 0.035; 0.028 0.045; 0.02 0.035" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        {/* Soft atmospheric fade from the section above into the misty watercolor sky */}
        <div className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#f4f6fb] via-[#f4f6fb]/60 to-transparent z-10 pointer-events-none" />

        {/* Poetic Poster Tagline in the Misty Sky Area (Left/Center-Left White Sky Space) */}
        <div className="  absolute inset-x-0 top-4 sm:top-7 md:top-10 lg:top-12 z-20 pointer-events-none">
          <div className="site-container">
            <div className="max-w-[270px] sm:max-w-md md:max-w-lg lg:max-w-xl text-left">
              {/* Subtle Poster Accent Line & Leaf Motif */}
              <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2 opacity-80">
                <span className="h-[1px] w-7 sm:w-10 bg-[#163c46]/60" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 text-[#163c46] fill-current opacity-85"
                  aria-hidden="true"
                >
                  <path d="M17 3C10 3 4 8 4 14c0 4 3 7 7 7 1.5 0 3-0.5 4-1.5L20 18l-1.5-5C18.5 8 18 5 17 3z" />
                </svg>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] font-semibold text-[#163c46]">
                  Roots of Grace
                </span>
              </div>

              {/* Regenerated Poster Tagline */}
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  color: '#0d2b34',
                  textShadow: '0 1px 12px rgba(255, 255, 255, 0.85)',
                }}
                className="text-sm sm:text-lg md:text-xl lg:text-[23px] font-normal italic leading-[1.38] tracking-[-0.01em]"
              >
                &ldquo;Old age is like an ancient tree shedding its leaves with time &mdash;{' '}
                <span className="not-italic font-semibold text-[#071f27] block sm:inline">
                  yet deep within, its roots and spirit remain forever strong.&rdquo;
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Base Static Background Image */}
        <img
          src="/images/footer-silhouette-seva.jpg"
          alt="Volunteers supporting elderly destitute mothers in Vrindavan"
          className="w-full h-52 sm:h-72 md:h-96 lg:h-[430px] object-cover object-[center_top] pointer-events-none"
        />

        {/* Animated Tree Foliage Layer (Wind Breeze & Rustling Leaves Effect) */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse 26% 24% at 84% 32%, black 45%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 26% 24% at 84% 32%, black 45%, transparent 95%)',
          }}
        >
          <img
            src="/images/footer-silhouette-seva.jpg"
            alt=""
            className="w-full h-52 sm:h-72 md:h-96 lg:h-[430px] object-cover object-[center_top] animate-tree-breeze filter-[url(#windFoliageFilter)]"
          />
        </div>

        {/* Floating Silhouette Leaves moving with the air from the tree branches */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[
            { id: 1, top: '18%', right: '19%', dur: '6.5s', delay: '0s', scale: 0.8 },
            { id: 2, top: '24%', right: '23%', dur: '8.5s', delay: '1.4s', scale: 0.6 },
            { id: 3, top: '28%', right: '17%', dur: '7.2s', delay: '2.8s', scale: 0.9 },
            { id: 4, top: '21%', right: '27%', dur: '9.2s', delay: '4.1s', scale: 0.7 },
            { id: 5, top: '32%', right: '21%', dur: '7.8s', delay: '1.9s', scale: 0.55 },
            { id: 6, top: '16%', right: '25%', dur: '8.8s', delay: '5.2s', scale: 0.75 },
            { id: 7, top: '27%', right: '15%', dur: '6.8s', delay: '3.6s', scale: 0.65 },
          ].map((leaf) => (
            <div
              key={leaf.id}
              className="absolute animate-leaf-drift"
              style={{
                top: leaf.top,
                right: leaf.right,
                animationDuration: leaf.dur,
                animationDelay: leaf.delay,
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-3.5 h-3.5 text-[#051c24] fill-current drop-shadow-xs"
                style={{ transform: `scale(${leaf.scale})` }}
              >
                <path d="M17 3C10 3 4 8 4 14c0 4 3 7 7 7 1.5 0 3-0.5 4-1.5L20 18l-1.5-5C18.5 8 18 5 17 3z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Soft mist vignette and smooth gradient blend into the deep dark footer base */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#03131c] via-[#03131c]/85 to-transparent pointer-events-none" />
      </div>

      {/* Footer Content Area pushed up ~10% */}
      <div className="site-container relative -mt-8 sm:-mt-12 lg:-mt-16 pt-0 pb-12 space-y-10 z-20">
        
        {/* Top 4-Column Responsive Grid (12 Columns) with elegant vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/footer-logo.png"
                alt="Paramhansa Yogananda Public Charitable Trust"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Founded in 2015 to serve the aged, abandoned, and destitute elderly women of Vrindavan and Radhakund. Inspired by Paramhansa Yogananda to see and serve the Divine Mother in every living being.
            </p>
          </div>

          {/* Column 2: Our Work (Sevas) */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-slate-800/80 lg:pl-6">
            <h4 
              style={{ color: '#ffffff' }}
              className="text-xs font-bold !text-white uppercase tracking-wider"
            >
              Our Work (Sevas)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Matri Seva Ashram</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Matri Seva Community</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Aarogyavardhan Healthcare</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors font-bold text-amber-300 whitespace-nowrap block cursor-default">Pashu Seva (Cow & Animal)</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Meal Heals (Nutrition)</Link></li>
              <li><Link to="/#programs" className="hover:text-amber-400 transition-colors whitespace-nowrap block">Seva Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 3: Heart of Seva & Stories */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-slate-800/80 lg:pl-6">
            <h4 
              style={{ color: '#ffffff' }}
              className="text-xs font-bold !text-white uppercase tracking-wider"
            >
              Heart Of Seva
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Circle of Love</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">In-Person Seva & Pilgrimage</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors font-bold text-amber-300 whitespace-nowrap block cursor-default">Healing Prayer Circle</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Documentary Gallery</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">News & Press Updates</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors whitespace-nowrap block cursor-default">Contact & Centers</Link></li>
            </ul>
          </div>

          {/* Column 4: Dedicated Portals & Contact */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-slate-800/80 lg:pl-6">
            <h4 
              style={{ color: '#ffffff' }}
              className="text-xs font-bold !text-white uppercase tracking-wider"
            >
              Donation Portals
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={() => onOpenDonate('indian')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#e65100] hover:bg-[#cf4500] text-white text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer shadow-sm"
              >
                <span>Indian Portal (80G)</span>
                <ShieldCheck className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenDonate('foreign')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer shadow-sm"
              >
                <span>Foreign Portal (FCRA)</span>
                <Globe className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:+918433147393" className="hover:text-amber-300 transition-colors whitespace-nowrap">+91 8433147393</a>
                  <a href="tel:+918650911000" className="hover:text-amber-300 transition-colors whitespace-nowrap">+91 86509 11000</a>
                </div>
              </div>
              <p className="flex items-center gap-1.5 whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:communication@yoganandatrust.org" className="hover:text-blue-300 transition-colors whitespace-nowrap">communication@yoganandatrust.org</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Paramhansa Yogananda Public Charitable Trust. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 cursor-default">Privacy Policy</Link>
            <span>•</span>
            <Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 cursor-default">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 cursor-default">80G Refund Policy</Link>
            <span>•</span>
            <span className="text-amber-400">
              Crafted by{' '}
              <a
                href="https://excitetemplate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline underline-offset-2 transition-colors font-semibold"
              >
                Excite Template
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
