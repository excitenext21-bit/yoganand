import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialPrograms } from '../data/mockCmsData';
import { ShieldCheck, Heart, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ProgramDetailPageProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ onOpenDonate }) => {
  const { slug } = useParams<{ slug: string }>();
  const program = initialPrograms.find((p) => p.slug === slug) || initialPrograms[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container max-w-4xl mx-auto space-y-4">
          <Link
            to="/#programs"
            className="inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Seva Programs
          </Link>

          <h1 className="text-[36px] font-normal text-white tracking-tight">
            {program.title}
          </h1>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            {program.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4" /> 80G Tax Exemption Eligible
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <CheckCircle2 className="w-4 h-4" /> Beneficiaries: {program.beneficiariesCount}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="site-container max-w-4xl mx-auto space-y-12">
          
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                About this seva initiative
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {program.description}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900">Key Features & Deliverables</h3>
                <ul className="space-y-2.5">
                  {program.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Donation Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-6 h-fit">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Target Seva Fund
                </span>
                <div className="text-2xl font-bold font-serif text-[#002878] mt-1">
                  ₹{program.raisedAmount.toLocaleString()} <span className="text-xs font-normal text-slate-500">/ ₹{program.monthlyGoal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                  <div
                    className="bg-[#003896] h-2 rounded-full"
                    style={{ width: `${Math.min(100, (program.raisedAmount / program.monthlyGoal) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenDonate('indian', program.title)}
                  className="w-full btn-donate py-3 px-4 text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate to this Program (80G)</span>
                </button>

                <button
                  onClick={() => onOpenDonate('foreign', program.title)}
                  className="w-full btn-brand-outline py-2.5 px-4 text-xs font-semibold cursor-pointer"
                >
                  <span>Foreign Donation (FCRA)</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                100% of your tax-deductible donation is directly deployed for this seva in Vrindavan with audited accounts.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
