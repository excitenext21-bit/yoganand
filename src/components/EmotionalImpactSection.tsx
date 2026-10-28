import React from 'react';
import { Heart, Stethoscope, Eye, Home, Sparkles, Utensils, ShieldCheck, ArrowRight, Quote } from 'lucide-react';

interface EmotionalImpactSectionProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const EmotionalImpactSection: React.FC<EmotionalImpactSectionProps> = ({ onOpenDonate }) => {
  const impactStats = [
    {
      id: 'rations',
      figure: '3.34 Lacs',
      title: 'Widow Mothers Fed Through Monthly Ration Distribution',
      subtitle: 'Nutritious staple flour, rice, pulses, cooking oil, and dignity delivered to elderly Matas across Vrindavan & Radhakund.',
      quote: '“I haven’t had to sleep on an empty stomach a single night since they found me.”',
      icon: Utensils,
      color: 'from-amber-500/20 via-amber-500/10 to-transparent',
      borderColor: 'border-amber-400/40',
      tagColor: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
      numColor: 'text-amber-400',
      program: 'Matri Seva Monthly Ration Kit'
    },
    {
      id: 'milk-veg',
      figure: '31.28 Lacs',
      title: 'Units of Fresh Milk & Vegetables Distributed',
      subtitle: 'Daily wholesome calcium, fresh vegetables, and fruits keeping frail, elderly bodies nourished with unconditional love.',
      quote: '“They bring warm milk to my door like my own child would.”',
      icon: Sparkles,
      color: 'from-yellow-500/20 via-yellow-500/10 to-transparent',
      borderColor: 'border-yellow-400/40',
      tagColor: 'text-yellow-300 bg-yellow-500/15 border-yellow-400/30',
      numColor: 'text-yellow-400',
      program: 'Daily Wholesome Milk & Nutrition Seva'
    },
    {
      id: 'medical',
      figure: '3.91 Lacs',
      title: 'Medical Assistance Given Free of Cost',
      subtitle: 'Free geriatric physician consultations, routine vital monitoring, and 30-day chronic medicines for hypertension & diabetes.',
      quote: '“Without their free medicines, my arthritis and pain were unbearable.”',
      icon: Stethoscope,
      color: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-400/40',
      tagColor: 'text-cyan-300 bg-cyan-500/15 border-cyan-400/30',
      numColor: 'text-cyan-300',
      program: 'Aarogyavardhan Free Medical Aid'
    },
    {
      id: 'surgeries',
      figure: '1.10 Lacs',
      title: 'Free Surgeries, Transplants & Hospitalisations',
      subtitle: 'Life-saving hospital admissions, specialized cataract lens implants, and orthopedic surgeries saving mothers from agonizing neglect.',
      quote: '“I was blind in both eyes. The Trust gave me back my sight to see Thakurji.”',
      icon: Eye,
      color: 'from-rose-500/20 via-rose-500/10 to-transparent',
      borderColor: 'border-rose-400/40',
      tagColor: 'text-rose-300 bg-rose-500/15 border-rose-400/30',
      numColor: 'text-rose-400',
      program: 'Free Eye Surgeries & Emergency Hospital Seva'
    },
    {
      id: 'home-visits',
      figure: '25.10 Lacs',
      title: 'Compassionate Bedside Home Visits',
      subtitle: 'Devoted caregivers visiting lonely ashram rooms daily to dress wounds, listen to forgotten stories, and reassure them that they are loved.',
      quote: '“They don’t just bring help; they sit beside me and hold my hand.”',
      icon: Home,
      color: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-400/40',
      tagColor: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
      numColor: 'text-emerald-400',
      program: 'Bedside Caregiver & Home Visit Seva'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#001740] via-[#002266] to-[#001336] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container relative z-10 space-y-14 px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sacred Seva In Verified Numbers • Since 2015</span>
          </div>

          <h2 
            style={{ fontSize: '24px' }}
            className="!text-[24px] font-normal tracking-[-0.015em] text-white font-heading leading-snug m-0"
          >
            Every number is an abandoned Mata who was never left alone
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            When families cast them out and the world turned away, your compassion stepped in as their guardian. Behind every ration bag, free eye surgery, and gentle home visit is a sacred prayer of gratitude from a Mata who found family again in holy Vrindavan.
          </p>
        </div>

        {/* 5 Monumental Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Top 3 Cards */}
          {impactStats.slice(0, 3).map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br ${stat.color} bg-black/40 backdrop-blur-md border ${stat.borderColor} shadow-2xl flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${stat.tagColor}`}>
                      Verified Seva
                    </span>
                  </div>

                  {/* Figure */}
                  <div>
                    <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-sans block ${stat.numColor} drop-shadow-sm`}>
                      {stat.figure}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 leading-snug font-sans">
                      {stat.title}
                    </h3>
                  </div>

                  {/* Narrative Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Emotional Quote & Micro-Action */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-2 text-xs text-amber-200/90 italic font-sans leading-relaxed">
                    <Quote className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
                    <span>{stat.quote}</span>
                  </div>

                  <button
                    onClick={() => onOpenDonate('indian', stat.program)}
                    className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer group-hover:border-amber-400/50"
                  >
                    <span>Sponsor this Seva</span>
                    <ArrowRight className="w-3 h-3 text-amber-300" />
                  </button>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom 2 Large Cards (Surgeries + Home Visits) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {impactStats.slice(3, 5).map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${stat.color} bg-black/40 backdrop-blur-md border ${stat.borderColor} shadow-2xl flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${stat.tagColor}`}>
                      High Impact Care
                    </span>
                  </div>

                  {/* Figure & Title */}
                  <div>
                    <span className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans block ${stat.numColor} drop-shadow-sm`}>
                      {stat.figure}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 leading-snug font-sans">
                      {stat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Emotional Quote & Direct Action */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-200/90 italic font-sans leading-relaxed bg-black/25 p-3 rounded-xl border border-white/10">
                    <Quote className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                    <span>{stat.quote}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onOpenDonate('indian', stat.program)}
                      className="w-full sm:w-auto flex-1 btn-donate py-2.5 px-4 text-xs font-bold shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Support This Vital Seva (80G)</span>
                    </button>

                    <button
                      onClick={() => onOpenDonate('foreign', stat.program)}
                      className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-xs font-semibold text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Foreign Donors (FCRA)</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotionally Compelling Callout & Immediate Donation Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-amber-600/25 via-[#e65100]/25 to-amber-600/20 backdrop-blur-md border-2 border-amber-400/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Restoring Sacred Motherhood • 100% Tax Deductible (80G)</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-tight">
              They Do Not Pray for Luxury. They Pray Someone Remembers They Exist.
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              For just <strong>₹3,000 a month</strong>, you can adopt an elderly destitute Mataji — providing her with daily warm meals, doorstep medicines, clean clothes, and the sacred knowledge that she has a loving family in you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenDonate('indian', 'Complete Mother Sponsorship (Food & Care)')}
              className="btn-donate py-3.5 px-8 text-sm font-bold shadow-2xl cursor-pointer flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Sponsor a Mataji Today (₹3,000)</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300 font-sans">
              <span className="text-amber-300 font-semibold">50% Tax Relief under 80G</span>
              <span>•</span>
              <span className="text-cyan-300 font-semibold">Instant Receipt</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
