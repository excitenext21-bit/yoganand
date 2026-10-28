import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Heart, Users, Award, Building, Sparkles, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDonate }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/need-and-urgency' || location.hash === '#need-and-urgency') {
      const timer = setTimeout(() => {
        const el = document.getElementById('need-and-urgency');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Page Header Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            About Paramhansa Yogananda Trust
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Founded in 2015, we are a registered public charitable trust dedicated to restoring sacred dignity, medical health, nutritious food, and unconditional spiritual love to the elderly destitute Matas of Vrindavan and Radhakund.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4" /> 80G & 12A Certified
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Award className="w-4 h-4" /> FCRA Approved (Ministry of Home Affairs)
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <CheckCircle className="w-4 h-4" /> NITI Aayog NGO Darpan Verified
            </span>
          </div>
        </div>
      </section>

      {/* Main Narrative & History */}
      <section className="py-16 px-4">
        <div className="site-container space-y-16">
          
          {/* Row 1: Founding & Inspiration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                Inspired by the great master Paramhansa Yogananda
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Paramhansa Yogananda, author of the spiritual classic <em>Autobiography of a Yogi</em>, taught that true religion consists of seeing the Divine in all human beings, and that the highest spiritual path is loving, self-forgetful service to suffering souls.
                </p>
                <p>
                  In August 2015, disciples and dedicated philanthropists founded the <strong>Paramhansa Yogananda Public Charitable Trust</strong> as an independent non-profit institution to address one of India’s most poignant social tragedies: the plight of elderly, abandoned Matas residing in the pilgrimage towns of Vrindavan and Radhakund.
                </p>
                <p>
                  What started with a humble effort to distribute dry rations to a few dozen mothers has blossomed into a comprehensive humanitarian sanctuary supporting over 1,500 destitute mothers daily through lifelong housing, doorstep care, emergency hospital surgeries, and devotion.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-2xl font-bold font-serif text-[#003896]">2015</div>
                  <div className="text-xs text-[#444444] mt-1">Year Established under Indian Trusts Act</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-2xl font-bold font-serif text-[#e65100]">1,500+</div>
                  <div className="text-xs text-[#444444] mt-1">Matajis Supported Daily Across Braj</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="/images/hero-seva.jpg"
                  alt="Aged Mother receiving care at Yogananda Trust Vrindavan"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-xs sm:text-sm font-medium italic">
                    "When you serve a destitute mother in Vrindavan, you serve the Divine Mother herself."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Need & Urgency in Vrindavan */}
          <div id="need-and-urgency" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 scroll-mt-28">
            <div className="max-w-3xl space-y-3">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                The need & urgency: why Vrindavan?
              </h2>
              <p className="text-[#444444] text-sm sm:text-base leading-relaxed">
                For centuries, Matas from across rural India—particularly Bengal, Odisha, and Uttar Pradesh—have migrated to the sacred city of Vrindavan after being ostracized by their families. Without pensions, land rights, or savings, they arrive seeking spiritual refuge under Lord Krishna’s feet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003896] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Singing for Survival
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Historically, elderly women had to sing bhajans in bhajan ashrams for 7 to 8 hours daily just to receive ₹5 to ₹10 and a cup of pulse or rice. Frail health often deprived them of even this meager sustenance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#e65100] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Preventable Blindness & Ailments
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Untreated mature cataracts, diabetes, high blood pressure, and bone fractures lead to complete blindness and immobility. Unable to afford private clinics, many elderly mothers suffered in silence.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#002878] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  The Fear of Neglected Passing
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Beyond physical hunger, the deepest emotional trauma is acute loneliness and the terrifying fear of dying alone with no one to perform sacred final Vedic rites.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Our Structured Humanitarian Model */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                Our five-pillar seva model
              </h2>
              <p className="text-[#444444] text-sm">
                Every intervention is carefully architected to grant self-sufficiency, dignity, and lifelong security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <Building className="w-7 h-7 text-[#003896]" />
                <h3 className="text-lg font-bold font-serif text-slate-900">Matri Seva Ashram</h3>
                <p className="text-xs font-semibold text-[#003896] font-sans">
                  A Sanctum of Lifelong Shelter, Care & Spiritual Peace
                </p>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Full residential sanctuary with hygienic rooms, 24/7 caregivers, dedicated nurses, hot running water, and pure sattvic meals for aged mothers who cannot walk or live alone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <Users className="w-7 h-7 text-[#003896]" />
                <h3 className="text-lg font-bold font-serif text-slate-900">Matri Seva Community</h3>
                <p className="text-xs font-semibold text-[#003896] font-sans">
                  Supporting Matas Right in Their Rented Rooms Across Vrindavan
                </p>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  The "Ashram Without Walls". We deliver monthly dry ration kits, fresh milk, seasonal vegetables, and rent stipends directly to 1,200+ mothers in their rented rooms across Vrindavan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <Sparkles className="w-7 h-7 text-[#003896]" />
                <h3 className="text-lg font-bold font-serif text-slate-900">Aarogyavardhan Healthcare</h3>
                <p className="text-xs font-semibold text-[#003896] font-sans">
                  Free Multispecialty Medical, Bedside & Surgical Care
                </p>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Comprehensive free healthcare covering daily OPD clinics, monthly chronic medicines, free cataract surgeries with intraocular lens implants, and hospital emergency surgeries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <Heart className="w-7 h-7 text-[#e65100]" />
                <h3 className="text-lg font-bold font-serif text-slate-900">Meal Heals (Annapurna)</h3>
                <p className="text-xs font-semibold text-[#003896] font-sans">
                  Pure, Sattvic Daily Nutrition Prepared with Devotion
                </p>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Fresh, steaming sattvic meals cooked every morning in our modern stainless-steel ashram kitchen and served with love to mothers, disabled sadhus, and destitute seekers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <ShieldCheck className="w-7 h-7 text-[#003896]" />
                <h3 className="text-lg font-bold font-serif text-slate-900">Pashu Seva (Cow & Animal Care)</h3>
                <p className="text-xs font-semibold text-[#003896] font-sans">
                  Sacred Cow Seva & Stray Animal Rescue in Holy Vrindavan
                </p>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Caring for 480+ sacred indigenous cows in our Gaushala with green grass, nutritious feed, on-call veterinary care, and emergency rescue for injured street animals in Vrindavan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <Award className="w-7 h-7 text-[#003896]" />
                <h3 className="text-lg font-bold font-serif text-slate-900">Dignity in Passing</h3>
                <p className="text-xs font-semibold text-[#003896] font-sans">
                  Sacred Vedic Last Rites on Holy Yamuna Banks
                </p>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  When a beloved Mataji departs this mortal realm, our trust team performs full sacred Vedic last rites on the banks of the sacred Yamuna river with flowers, mantras, and deep reverence.
                </p>
              </div>
            </div>
          </div>

          {/* Row 4: Governance & Legal Integrity */}
          <div className="bg-gradient-to-r from-blue-900 via-[#002878] to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-white font-heading leading-snug m-0">
                Statutory governance & absolute transparency
              </h2>
              <p className="text-blue-100 text-sm">
                Paramhansa Yogananda Public Charitable Trust operates under strict statutory standards, audited annually by reputed chartered accountants and governed by an independent Board of Trustees.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/15">
                <div className="text-lg font-bold text-amber-300">12A & 80G</div>
                <div className="text-xs text-blue-100 mt-1">Income Tax Exemption for 50% Deductions</div>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/15">
                <div className="text-lg font-bold text-amber-300">FCRA Regd</div>
                <div className="text-xs text-blue-100 mt-1">Permitted for Foreign Remittances (MHA)</div>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/15">
                <div className="text-lg font-bold text-amber-300">CSR-1 Valid</div>
                <div className="text-xs text-blue-100 mt-1">Ministry of Corporate Affairs Approved</div>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/15">
                <div className="text-lg font-bold text-amber-300">Form 10BD</div>
                <div className="text-xs text-blue-100 mt-1">Automated Annual Filing with CBDT</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenDonate('indian')}
                className="btn-donate py-3.5 px-8 text-sm font-bold shadow-lg cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Our Mothers (80G Tax Exemption)</span>
              </button>
              <button
                onClick={() => onOpenDonate('foreign')}
                className="btn-brand-outline bg-white/10 text-white hover:bg-white hover:text-[#002878] py-3.5 px-6 text-sm font-semibold border-white/40 cursor-pointer"
              >
                <span>International Donors (FCRA)</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
