import React from 'react';
import { HeartHandshake, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

interface VisionImpactSectionProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const VisionImpactSection: React.FC<VisionImpactSectionProps> = ({ onOpenDonate }) => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f4f6fb] border-t border-slate-200/80">
      <div className="site-container max-w-6xl mx-auto">
        
        {/* Split Card CTA matching reference design */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
          
          {/* Top Half: 2-Column Split Content + Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Text & Buttons */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-5">
              
              {/* Main Heading with Theme Highlight */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#464646] font-heading leading-tight m-0">
                We Want To Impact{' '}
                <span className="text-[#003896]">10 Million +</span>{' '}
                Lives By 2040
              </h2>

              {/* Subtext Paragraph */}
              <p className="text-sm sm:text-[15px] text-[#444444] font-sans leading-relaxed m-0 max-w-xl">
                Every contribution directly rescues, feeds, and provides lifelong healthcare and dignified shelter to abandoned elderly Matas in holy Vrindavan.
              </p>

              {/* Action Buttons Row matching Website Theme & Standard Button Sizing */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenDonate('indian')}
                  className="btn-donate py-2.5 px-6 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 tracking-wide uppercase transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>JOIN US !</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1]" />
                </button>

                <button
                  onClick={() => onOpenDonate('foreign')}
                  className="py-2.5 px-5 rounded-full bg-white hover:bg-[#003896]/5 text-[#003896] hover:text-[#002878] border border-[#003896]/30 hover:border-[#003896] font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>80G &amp; FCRA Certified</span>
                </button>
              </div>

            </div>

            {/* Right Column: High-Impact Authentic Seva Photo */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img
                src="/images/hero-seva.jpg"
                alt="Loving seva and care for destitute Matas in Vrindavan"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none lg:hidden" />
            </div>

          </div>

          {/* Bottom Integrated Trust Rail (3 Pillars with 1px Line Icons) */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-6 sm:px-10 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Pillar 1: 100% Support */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-4 h-4 stroke-[1]" />
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#444444] font-sans font-medium leading-snug m-0">
                All our efforts are made possible only because of your support
              </p>
            </div>

            {/* Pillar 2: 80G Tax Exemption */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 stroke-[1]" />
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#444444] font-sans font-medium leading-snug m-0">
                Your donations are tax exempted under 80G of the Indian Income Tax Act
              </p>
            </div>

            {/* Pillar 3: Safe & Secure Transactions */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 stroke-[1]" />
              </div>
              <p className="text-xs sm:text-[12.5px] text-[#444444] font-sans font-medium leading-snug m-0">
                Your donation transactions are completely safe and secure
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
