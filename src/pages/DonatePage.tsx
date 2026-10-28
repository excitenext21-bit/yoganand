import React, { useState } from 'react';
import { ShieldCheck, Heart, Globe, CheckCircle2, Download, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { DonorRecord } from '../data/mockCmsData';
import { initiateRazorpayCheckout } from '../utils/razorpay';

interface DonatePageProps {
  onAddDonorRecord: (record: DonorRecord) => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({ onAddDonorRecord }) => {
  const [portalType, setPortalType] = useState<'indian' | 'foreign'>('indian');
  const [amount, setAmount] = useState<number>(3000);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>('Matri Seva Community (Rations & Healthcare)');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [address, setAddress] = useState('');
  const [foreignId, setForeignId] = useState('');

  // Status
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [generatedReceipt, setGeneratedReceipt] = useState<DonorRecord | null>(null);

  const inrPresetTiers = [
    { value: 1500, label: '1 Month Medicines', desc: 'Provides chronic hypertension, diabetes & eye medicines for 1 mother' },
    { value: 3000, label: '1 Month Rations & Milk', desc: 'Doorstep monthly grocery kit, fresh milk & vegetables for 1 Mata' },
    { value: 5000, label: 'Free Cataract Surgery', desc: 'Covers full cataract surgery with foldable IOL lens & post-op care' },
    { value: 10000, label: 'Ashram Full Care Sponsor', desc: 'Lifelong residential room, hot meals, 24/7 nursing & devotion' }
  ];

  const usdPresetTiers = [
    { value: 25, label: '$25 USD', desc: 'Emergency medicines & warm blankets' },
    { value: 50, label: '$50 USD', desc: 'Full month groceries and fresh milk' },
    { value: 100, label: '$100 USD', desc: 'Sponsors 1 cataract surgery in Vrindavan' },
    { value: 250, label: '$250 USD', desc: 'Sponsors full medical & hospice care' }
  ];

  const currentPresets = portalType === 'indian' ? inrPresetTiers : usdPresetTiers;
  const currencySymbol = portalType === 'indian' ? '₹' : '$';

  const handleSelectTier = (val: number) => {
    setIsCustom(false);
    setAmount(val);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value) || 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    const serial = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    const receiptNo = portalType === 'indian' 
      ? `PYT/80G/${year}/${serial}` 
      : `PYT/FCRA/${year}/${serial}`;

    const newRecord: DonorRecord = {
      id: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toISOString().split('T')[0],
      donorName: name,
      email: email,
      phone: phone,
      panNumber: portalType === 'indian' ? panNumber.toUpperCase() : foreignId,
      amount: amount,
      currency: portalType === 'indian' ? 'INR' : 'USD',
      program: selectedProgram,
      paymentMode: portalType === 'indian' ? 'Razorpay (UPI/Cards)' : 'Razorpay International',
      receipt80GNumber: receiptNo,
      status: 'Captured'
    };

    initiateRazorpayCheckout({
      amount: portalType === 'indian' ? amount * 100 : amount * 85 * 100,
      currency: portalType === 'indian' ? 'INR' : 'USD',
      name: 'Paramhansa Yogananda Trust',
      description: `Donation: ${selectedProgram}`,
      image: '/images/mainlogo.jpg',
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      handler: (response) => {
        newRecord.id = response.razorpay_payment_id || newRecord.id;
        setGeneratedReceipt(newRecord);
        onAddDonorRecord(newRecord);
        setStep('success');
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      },
      modal: {
        ondismiss: () => {
          setStep('form');
        }
      }
    });
  };

  const handleDownloadReceipt = () => {
    if (!generatedReceipt) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>80G Tax Exemption Receipt - ${generatedReceipt.receipt80GNumber}</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #0f172a; line-height: 1.5; }
            .header { text-align: center; border-bottom: 3px solid #002878; padding-bottom: 20px; margin-bottom: 30px; }
            .title { font-size: 24px; font-weight: bold; color: #002878; margin: 0; }
            .sub { font-size: 13px; color: #475569; margin-top: 6px; }
            .badge { display: inline-block; background: #eaf3fd; color: #002878; border: 1px solid #bfdbfe; padding: 6px 16px; border-radius: 20px; font-weight: bold; margin-top: 12px; font-size: 13px; }
            .details-table { width: 100%; border-collapse: collapse; margin-top: 25px; }
            .details-table td { padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
            .label { font-weight: bold; width: 35%; color: #334155; }
            .footer { margin-top: 40px; border-top: 1px dashed #cbd5e1; padding-top: 20px; font-size: 12px; color: #64748b; }
            .stamp { text-align: right; margin-top: 30px; font-size: 13px; font-weight: bold; color: #002878; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">PARAMHANSA YOGANANDA PUBLIC CHARITABLE TRUST</h1>
            <p class="sub">Head Office: Chaitanya Vihar, Vrindavan, UP - 281121 | Regd Office: Gopal Das Bhawan, Barakhamba Rd, New Delhi - 110001</p>
            <div class="badge">OFFICIAL DONATION RECEIPT UNDER SECTION 80G OF INCOME TAX ACT 1961</div>
          </div>

          <table class="details-table">
            <tr><td class="label">Receipt Number:</td><td><strong>${generatedReceipt.receipt80GNumber}</strong></td></tr>
            <tr><td class="label">Transaction Date:</td><td>${generatedReceipt.date}</td></tr>
            <tr><td class="label">Donor Full Name:</td><td><strong>${generatedReceipt.donorName}</strong></td></tr>
            <tr><td class="label">Donor PAN Card:</td><td><strong>${generatedReceipt.panNumber}</strong></td></tr>
            <tr><td class="label">Email & Phone:</td><td>${generatedReceipt.email} | ${generatedReceipt.phone}</td></tr>
            <tr><td class="label">Contribution Amount:</td><td><strong style="font-size: 20px; color: #003896;">${generatedReceipt.currency} ${generatedReceipt.amount.toLocaleString()}</strong></td></tr>
            <tr><td class="label">Allocated Seva Program:</td><td>${generatedReceipt.program}</td></tr>
            <tr><td class="label">Payment Mode / ID:</td><td>${generatedReceipt.paymentMode} (${generatedReceipt.id})</td></tr>
            <tr><td class="label">Trust PAN Number:</td><td>AAATP9021E (Unique Regn No: AABTP1234F20214)</td></tr>
          </table>

          <div class="stamp">
            <p>For Paramhansa Yogananda Public Charitable Trust</p>
            <p><em>(Authorized Digital Attestation - Form 10BD Compliant)</em></p>
          </div>

          <div class="footer">
            <p>* Donations made to Paramhansa Yogananda Public Charitable Trust are eligible for 50% deduction under Section 80G of the Income Tax Act, 1961 vide Order No. CIT(E)/DELHI/80G/2016-17.</p>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            Dedicated Seva Donation Portal
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            100% of your tax-exempt contribution directly sustains elderly destitute mothers in Vrindavan with wholesome nutrition, free surgeries, and loving shelter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4" /> 50% Tax Exemption under Section 80G
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Globe className="w-4 h-4" /> FCRA Reg. 231661842 Approved
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Lock className="w-4 h-4" /> 256-Bit SSL Razorpay Gateway
            </span>
          </div>
        </div>
      </section>

      {/* Main Form Body */}
      <section className="py-16 px-4">
        <div className="site-container max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Portal Switch Header */}
            <div className="bg-gradient-to-r from-[#002878] to-[#003896] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-white font-heading leading-snug m-0">Choose your donation category</h2>
                <p className="text-xs text-blue-100">Select Indian or Foreign remittance channel</p>
              </div>

              <div className="inline-flex p-1 bg-black/25 rounded-xl border border-white/20">
                <button
                  onClick={() => { setPortalType('indian'); setAmount(3000); }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    portalType === 'indian'
                      ? 'bg-[#e65100] text-white shadow-sm'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Indian Donors (80G)</span>
                </button>
                <button
                  onClick={() => { setPortalType('foreign'); setAmount(50); }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    portalType === 'foreign'
                      ? 'bg-amber-500 text-slate-900 shadow-sm'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>Foreign Donors (FCRA)</span>
                </button>
              </div>
            </div>

            {/* Form Steps */}
            <div className="p-6 sm:p-10">
              
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Select Seva Program */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      1. Select Seva Initiative
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#003896] bg-slate-50"
                    >
                      <option value="Matri Seva Community (Rations & Healthcare)">Matri Seva Community (Monthly Doorstep Rations & Care)</option>
                      <option value="Matri Seva Ashram (Shelter & Care)">Matri Seva Ashram (24/7 Lifelong Sanctuary & Hospice)</option>
                      <option value="Aarogyavardhan (Free Eye & Hospital Surgeries)">Aarogyavardhan (Free Cataract Surgeries & Medical Clinic)</option>
                      <option value="Pashu Seva (Cow & Animal Care)">Pashu Seva (Sacred Gaushala & Street Animal Rescue)</option>
                      <option value="Meal Heals (Annapurna Nutrition)">Meal Heals (Daily Hot Sattvic Kitchen Nutrition)</option>
                      <option value="Circle of Love (Devotional Fellowship)">Circle of Love (Companionship, Festivals & Kirtan)</option>
                    </select>
                  </div>

                  {/* Step 2: Choose Preset Amount */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      2. Choose Donation Amount ({currencySymbol})
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {currentPresets.map((tier) => (
                        <button
                          key={tier.value}
                          type="button"
                          onClick={() => handleSelectTier(tier.value)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            !isCustom && amount === tier.value
                              ? 'border-[#003896] bg-blue-50 ring-2 ring-[#003896]/20'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="text-xl font-bold font-serif text-[#002878]">
                            {currencySymbol}{tier.value.toLocaleString()}
                          </div>
                          <div className="text-xs font-semibold text-slate-800 mt-0.5">{tier.label}</div>
                          <p className="text-[11px] text-slate-500 mt-1 leading-snug">{tier.desc}</p>
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="relative">
                        <span className="absolute left-4 top-3 text-sm font-bold text-slate-400">
                          {currencySymbol}
                        </span>
                        <input
                          type="number"
                          min="1"
                          placeholder="Or enter a custom contribution amount..."
                          value={customAmount}
                          onChange={handleCustomChange}
                          className={`w-full pl-8 pr-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none ${
                            isCustom
                              ? 'border-[#003896] bg-blue-50/40 ring-2 ring-[#003896]/20'
                              : 'border-slate-300 bg-slate-50'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Donor Details & Tax Exemption */}
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      3. Donor Particulars (Required for Section 80G Certificate)
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1">Full Legal Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="As per PAN card / Tax ID"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1">Email Address (for 80G receipt) *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. yourname@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#444444] mb-1">Mobile / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98100 00000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                        />
                      </div>

                      {portalType === 'indian' ? (
                        <div>
                          <label className="block text-xs font-semibold text-[#444444] mb-1">
                            PAN Number (Mandatory for CBDT Form 10BD) *
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={10}
                            placeholder="e.g. ABCDE1234F"
                            value={panNumber}
                            onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 uppercase text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block text-xs font-semibold text-[#444444] mb-1">
                            Passport / National Tax ID (FCRA Requirement) *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Passport Number / SSN / Tax ID"
                            value={foreignId}
                            onChange={(e) => setForeignId(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-1">Postal Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="House/Street, City, State, PIN/ZIP Code"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-donate py-4 px-6 text-sm sm:text-base font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-5 h-5 fill-white" />
                      <span>
                        Proceed to Donate {currencySymbol}{amount.toLocaleString()} via Razorpay {portalType === 'indian' ? '(with 80G Receipt)' : '(via FCRA)'}
                      </span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>256-Bit SSL Encrypted • Instant Form 10BD Compliant 80G Certificate</span>
                    </p>
                  </div>

                </form>
              )}

              {step === 'processing' && (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 border-4 border-[#003896] border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Connecting to Razorpay Secure Gateway...
                  </h3>
                  <p className="text-xs text-slate-500">
                    Please complete the payment in the checkout window.
                  </p>
                </div>
              )}

              {step === 'success' && generatedReceipt && (
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-slate-900 font-serif">
                      Pranam & Divine Gratitude!
                    </h3>
                    <p className="text-sm text-[#444444] max-w-md mx-auto">
                      Your contribution of <strong>{generatedReceipt.currency} {generatedReceipt.amount.toLocaleString()}</strong> has been captured successfully.
                    </p>
                  </div>

                  {/* Receipt Preview Box */}
                  <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-left space-y-2 text-xs text-slate-800 max-w-lg mx-auto">
                    <div className="flex justify-between border-b border-blue-200/80 pb-2">
                      <span className="font-semibold text-[#444444]">80G Receipt Number:</span>
                      <span className="font-bold text-[#002878]">{generatedReceipt.receipt80GNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#444444]">Donor Name:</span>
                      <span className="font-bold">{generatedReceipt.donorName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#444444]">PAN / Tax ID:</span>
                      <span>{generatedReceipt.panNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#444444]">Allocated Seva:</span>
                      <span>{generatedReceipt.program}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={handleDownloadReceipt}
                      className="btn-donate py-3 px-6 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Printable 80G Receipt PDF</span>
                    </button>

                    <button
                      onClick={() => setStep('form')}
                      className="btn-brand-outline py-3 px-6 text-xs font-semibold cursor-pointer"
                    >
                      <span>Make Another Contribution</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
