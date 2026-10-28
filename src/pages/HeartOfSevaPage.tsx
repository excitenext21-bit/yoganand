import React, { useState } from 'react';
import { Calendar, Sparkles, Send, Heart, Users, CheckCircle } from 'lucide-react';

interface HeartOfSevaPageProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const HeartOfSevaPage: React.FC<HeartOfSevaPageProps> = ({ onOpenDonate }) => {
  const [prayerName, setPrayerName] = useState('');
  const [prayerIntention, setPrayerIntention] = useState('');
  const [prayerEmail, setPrayerEmail] = useState('');
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            Heart of Seva & Devotional Companion Care
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Beyond food and medicine, elderly Matas need to know they are deeply loved and never alone. We provide loving fellowship, volunteering pilgrimages, and daily healing prayers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Users className="w-4 h-4" /> 750+ Companion Pairings
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Sparkles className="w-4 h-4" /> Daily Ashram Morning & Evening Prayers
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="site-container space-y-16">
          
          {/* Section 1: Circle of Love */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] font-heading leading-snug m-0">
                Circle of love: eradicating elderly loneliness
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  The silent epidemic in Vrindavan is loneliness. When a mother is abandoned by her children, the emotional scars can be more painful than physical poverty.
                </p>
                <p>
                  Our <strong>Circle of Love</strong> initiative connects volunteers and devotees from across India and worldwide with individual Matajis through regular phone conversations, birthday celebrations, and hand-crafting sessions.
                </p>
                <p>
                  During sacred festivals like Holi and Diwali, we organize vibrant Bhajan gatherings, flower celebrations, and gift distributions, bringing joy and laughter back into their lives.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenDonate('indian', 'Circle of Love Companion Care')}
                  className="btn-donate py-3 px-6 text-xs font-bold shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Sponsor Companion Festivities (80G)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="/images/circle-of-love.jpg"
                  alt="Matajis weaving garlands and singing bhajans"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2: In-Person Seva & Pilgrimage */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] font-heading leading-snug m-0">
                In-person seva: serve with your own hands
              </h2>
              <p className="text-[#444444] text-sm">
                Devotees and well-wishers from all over the world travel to Vrindavan to serve the mothers directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <Calendar className="w-8 h-8 text-[#003896]" />
                <h3 className="text-lg font-bold text-slate-900">Annapurna Kitchen Seva</h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Join our kitchen team at 6:30 AM to chop fresh vegetables, roll rotis, and lovingly serve steaming hot meals to the resident mothers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <Users className="w-8 h-8 text-[#003896]" />
                <h3 className="text-lg font-bold text-slate-900">Doorstep Ration Delivery</h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Accompany our field seva vans into humble alleys of Vrindavan and Radhakund to deliver grocery kits directly into the hands of elderly mothers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <Heart className="w-8 h-8 text-[#e65100]" />
                <h3 className="text-lg font-bold text-slate-900">Medical Camp Assistance</h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Doctors, nurses, and volunteers help organize eye screenings, blood pressure checks, and comfort post-surgery patients.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Healing Prayer Circle Form */}
          <div className="bg-gradient-to-br from-blue-900 via-[#002878] to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-white font-heading leading-snug m-0">
                Submit a sacred healing prayer request
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
                Every morning and evening, the resident Matajis gather in our ashram prayer sanctuary to chant the Maha-Mantra and Maha-Mrityunjaya for souls in need. This devotional service is offered completely free of charge.
              </p>
            </div>

            {prayerSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-400 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-300 mx-auto" />
                <h3 className="text-xl font-bold text-white">Prayer Request Received with Reverence</h3>
                <p className="text-xs sm:text-sm text-emerald-100">
                  The name <strong>"{prayerName}"</strong> has been added to our Vrindavan ashram altar and will be included in today's sacred evening prayer circle.
                </p>
                <button
                  onClick={() => { setPrayerSubmitted(false); setPrayerName(''); setPrayerIntention(''); }}
                  className="mt-3 text-xs text-amber-300 underline font-semibold cursor-pointer"
                >
                  Submit Another Prayer Request
                </button>
              </div>
            ) : (
              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-blue-200 mb-1">
                      Beneficiary / Individual Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra Sharma"
                      value={prayerName}
                      onChange={(e) => setPrayerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm placeholder-blue-300/60 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-200 mb-1">
                      Your Email (for prayer confirmation) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={prayerEmail}
                      onChange={(e) => setPrayerEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm placeholder-blue-300/60 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-200 mb-1">
                    Prayer Intention / Health Concern *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. Prayers for speedy recovery after cardiac surgery and peace of mind..."
                    value={prayerIntention}
                    onChange={(e) => setPrayerIntention(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm placeholder-blue-300/60 focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Prayer Request to Matajis</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
