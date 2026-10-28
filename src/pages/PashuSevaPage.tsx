import React from 'react';
import { Heart, ShieldCheck, Sparkles, AlertCircle, Phone } from 'lucide-react';

interface PashuSevaPageProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const PashuSevaPage: React.FC<PashuSevaPageProps> = ({ onOpenDonate }) => {
  const sponsorshipTiers = [
    {
      title: 'Green Fodder Feast',
      amount: 500,
      currency: '₹',
      desc: 'Provides fresh green grass, jaggery (gur), and nutritious husk for 10 gaushala cows for a day.',
      popular: false
    },
    {
      title: 'Emergency Medical Kit',
      amount: 1500,
      currency: '₹',
      desc: 'Funds antiseptic dressings, pain relief injections, antibiotics, and surgical sutures for an injured street calf.',
      popular: false
    },
    {
      title: 'Feed 1 Cow for a Month',
      amount: 3000,
      currency: '₹',
      desc: 'Complete nutrition, fresh green grass, medical deworming, and clean shelter for one sacred cow for 30 full days.',
      popular: true
    },
    {
      title: '1-Day Full Gaushala Feast',
      amount: 5000,
      currency: '₹',
      desc: 'Sponsors nutritious green fodder, feed, and grains for all 480+ residential cows in our Vrindavan sanctuary for an entire day.',
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            Pashu Seva & Sacred Cow Care
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            In the sacred land of Lord Krishna, we extend protective shelter, daily fresh green fodder, and life-saving veterinary medicine to 480+ sacred cows, bulls, and injured street animals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4" /> 80G Tax Deductible (50% Relief)
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Sparkles className="w-4 h-4" /> 480+ Animals Fed & Protected Daily
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="site-container space-y-16">
          
          {/* Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                Sanctuary for the voiceless in Braj
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Vrindavan is spiritually synonymous with <em>Gau Seva</em> (cow service). Yet, with rapid urban changes and highway traffic, hundreds of stray cows, aged bulls, and calves roam hazardous roads, often consuming fatal plastic waste or suffering traumatic vehicular accidents.
                </p>
                <p>
                  The Paramhansa Yogananda Trust established a dedicated Pashu Seva division to provide a safe, permanent haven. Our spacious Gaushala gives shelter to old, blind, abandoned, and non-milking cows who are lovingly tended to as sacred mothers until their natural passing.
                </p>
                <p>
                  In addition, our on-call veterinary mobile unit rescues injured street dogs, monkeys, and birds, ensuring that compassion in Vrindavan knows no boundaries of species.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenDonate('indian', 'Pashu Seva (Cow & Animal Care)')}
                  className="btn-donate py-3.5 px-8 text-sm font-bold shadow-md cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Sponsor Cow Fodder (80G Tax Relief)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="/images/pashu-seva.jpg"
                  alt="Sacred Gaushala Cow Care at Yogananda Trust Vrindavan"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-xs sm:text-sm font-medium italic">
                    "He who feeds a hungry cow in Vrindavan pleases the Lord of Braj."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars of Pashu Seva */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                How we protect Vrindavan's animals
              </h2>
              <p className="text-[#444444] text-sm">
                A daily, 365-day mission combining traditional devotion with modern veterinary science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003896] flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900">Daily Fresh Green Grass</h3>
                <p className="text-xs text-[#444444] leading-relaxed">
                  Every morning, truckloads of fresh green fodder, nutrient-rich jowar, wheat bran, and mineral blocks are served to ensure balanced nutrition and prevent nutritional deficiencies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003896] flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900">24/7 Mobile Veterinary Unit</h3>
                <p className="text-xs text-[#444444] leading-relaxed">
                  Equipped with a hydraulic lift, surgical tools, and emergency medications to reach injured street animals reported by local residents across Vrindavan and Mathura.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003896] flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900">Winter Warmth Protocol</h3>
                <p className="text-xs text-[#444444] leading-relaxed">
                  During freezing North Indian winters, we install windproof PVC curtains, thick straw bedding, and custom jute coats for calves and aged cows, alongside warm jaggery water.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003896] flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900">Lifelong Sanctuary</h3>
                <p className="text-xs text-[#444444] leading-relaxed">
                  Once an animal enters our Gaushala, it is protected for life. We never sell, trade, or abandon any animal. They spend their days peacefully listening to devotional temple bells.
                </p>
              </div>
            </div>
          </div>

          {/* Sponsorship Tiers Grid */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                Sponsor pashu seva today
              </h2>
              <p className="text-[#444444] text-sm">
                Choose a sponsorship tier to provide immediate nourishment or medical care. All contributions receive instant 80G tax certificates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier, idx) => (
                <div 
                  key={idx}
                  className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                    tier.popular
                      ? 'border-[#e65100] bg-orange-50/40 ring-2 ring-[#e65100]/20 shadow-md relative'
                      : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e65100] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      Most Impactful
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">{tier.title}</h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-bold font-serif text-[#002878]">{tier.currency}{tier.amount.toLocaleString()}</span>
                        <span className="text-xs text-slate-500">/ contribution</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#444444] leading-relaxed">{tier.desc}</p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onOpenDonate('indian', `Pashu Seva - ${tier.title}`)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        tier.popular
                          ? 'bg-[#e65100] hover:bg-[#cf4500] text-white shadow-sm'
                          : 'bg-blue-50 text-[#003896] hover:bg-[#003896] hover:text-white border border-blue-200'
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span>Sponsor {tier.currency}{tier.amount.toLocaleString()}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Helpline callout for animal emergencies in Vrindavan */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-[#003896] shrink-0" />
                <span className="text-slate-800">
                  <strong>Witnessed an injured or sick animal in Vrindavan?</strong> Contact our on-call rescue van immediately.
                </span>
              </div>
              <a 
                href="tel:+918433147393" 
                className="shrink-0 font-bold text-[#003896] flex items-center gap-1.5 hover:underline"
              >
                <Phone className="w-4 h-4" /> +91 8433147393 (Helpline)
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
