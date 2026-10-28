import React, { useState } from 'react';
import { X, ShieldCheck, Heart, Download, CheckCircle, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { DonorRecord } from '../data/mockCmsData';
import { initiateRazorpayCheckout } from '../utils/razorpay';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPortalType: 'indian' | 'foreign';
  onAddDonorRecord: (record: DonorRecord) => void;
  preselectedProgram?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialPortalType,
  onAddDonorRecord,
  preselectedProgram
}) => {
  const [portalType, setPortalType] = useState<'indian' | 'foreign'>(initialPortalType);
  const [amount, setAmount] = useState<number>(3000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>(preselectedProgram || 'Matri Seva Community (Rations & Healthcare)');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [address, setAddress] = useState('');
  const [foreignId, setForeignId] = useState('');
  const [country, setCountry] = useState('United States');

  // Transaction States
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success'>('form');
  const [generatedReceipt, setGeneratedReceipt] = useState<DonorRecord | null>(null);

  if (!isOpen) return null;

  const inrPresetTiers = [1500, 3000, 5000, 10000];
  const usdPresetTiers = [25, 50, 100, 250];

  const activePresets = portalType === 'indian' ? inrPresetTiers : usdPresetTiers;
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

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');

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

    // Invoke Razorpay Checkout
    initiateRazorpayCheckout({
      amount: portalType === 'indian' ? amount * 100 : amount * 85 * 100,
      currency: portalType === 'indian' ? 'INR' : 'USD',
      name: 'Paramhansa Yogananda Trust',
      description: `Seva Contribution: ${selectedProgram}`,
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
        setPaymentStep('success');
        triggerConfetti();
      },
      modal: {
        ondismiss: () => {
          setPaymentStep('form');
        }
      }
    });
  };

  const handleDownloadReceipt = () => {
    if (!generatedReceipt) return;
    
    // Generate clean printable receipt
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
            <p class="sub">Operational HQ: Chaitanya Vihar, Vrindavan, UP - 281121 | Regd Office: Gopal Das Bhawan, Barakhamba Rd, New Delhi - 110001</p>
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

  const inputUnderlineClass = "w-full py-2.5 px-0 bg-transparent border-0 border-b-[1.5px] border-stone-300 text-stone-900 text-sm font-semibold focus:outline-none focus:border-b-[1.5px] focus:border-[#d84315] transition-colors placeholder:text-stone-400 placeholder:font-normal rounded-none";
  const labelClass = "block text-xs font-bold text-stone-800 uppercase tracking-wide mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        
        {/* Top Header with Portal Switcher */}
        <div className="bg-gradient-to-r from-[#002878] to-[#003896] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close donation modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1 pr-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold !text-white text-white tracking-tight">
              Support a Sacred Life in Vrindavan
            </h3>
            <p className="text-xs text-blue-100 font-medium">
              Paramhansa Yogananda Public Charitable Trust • 80G Tax-Exempt
            </p>
          </div>

          {/* Portal Switch Tabs */}
          <div className="mt-4 grid grid-cols-2 gap-2 p-1 bg-black/25 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => { setPortalType('indian'); setAmount(3000); }}
              className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                portalType === 'indian'
                  ? 'bg-[#d84315] text-white shadow font-bold'
                  : 'text-white/85 hover:text-white bg-transparent font-medium'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Indian Donors (80G Benefit)</span>
            </button>
            <button
              type="button"
              onClick={() => { setPortalType('foreign'); setAmount(50); }}
              className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                portalType === 'foreign'
                  ? 'bg-[#d84315] text-white shadow font-bold'
                  : 'text-white/85 hover:text-white bg-transparent font-medium'
              }`}
            >
              <Globe className="w-4 h-4 text-cyan-300" />
              <span>Foreign Donors (FCRA)</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {paymentStep === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Program Selector with 1.5x bottom border */}
              <div>
                <label className={labelClass}>
                  Seva Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className={`${inputUnderlineClass} cursor-pointer`}
                >
                  <option value="Matri Seva Community (Rations & Healthcare)">Matri Seva Community (Rations & Healthcare)</option>
                  <option value="Matri Seva Ashram (Shelter & Care)">Matri Seva Ashram (Shelter & 24/7 Care)</option>
                  <option value="Aarogyavardhan (Free Eye & Hospital Surgeries)">Aarogyavardhan (Free Eye & Hospital Surgeries)</option>
                  <option value="Pashu Seva (Cow & Animal Welfare)">Pashu Seva (Cow & Animal Welfare)</option>
                  <option value="Meal Heals (Daily Sattvic Food)">Meal Heals (Daily Sattvic Food)</option>
                  <option value="General Trust Seva Fund">General Trust Seva Fund</option>
                </select>
              </div>

              {/* Amount Tiers with 1.5x bottom border custom input */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className={labelClass}>Contribution Amount</label>
                  <span className="text-base font-extrabold text-[#d84315]">
                    {currencySymbol}{amount.toLocaleString()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {activePresets.map((tier) => {
                    const isSelected = !isCustom && amount === tier;
                    return (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => handleSelectTier(tier)}
                        className={`py-2.5 px-3 rounded-lg font-bold text-sm transition-all cursor-pointer border-b-[1.5px] ${
                          isSelected
                            ? 'bg-[#d84315] text-white border-[#b83800] shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-300'
                        }`}
                      >
                        {currencySymbol}{tier.toLocaleString()}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount with 1.5x bottom border */}
                <div className="pt-1.5 flex items-center">
                  <span className="text-sm font-bold text-stone-700 mr-2 border-b-[1.5px] border-stone-300 py-2.5">
                    {currencySymbol}
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder={`Or enter custom amount in ${portalType === 'indian' ? 'INR (₹)' : 'USD ($)'}`}
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={inputUnderlineClass}
                  />
                </div>
              </div>

              {/* Donor Details with 1.5x bottom border inputs */}
              <div className="space-y-4 pt-3 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                    Donor Details
                  </h4>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {portalType === 'indian' ? '80G Tax Deductible' : 'FCRA Compliant'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label className={labelClass}>Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputUnderlineClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputUnderlineClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputUnderlineClass}
                    />
                  </div>

                  {portalType === 'indian' ? (
                    <div>
                      <label className={labelClass}>PAN Number (for 80G Tax Exemption) *</label>
                      <input
                        type="text"
                        required
                        maxLength={10}
                        placeholder="ABCDE1234F"
                        pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                        className={`${inputUnderlineClass} uppercase tracking-wider`}
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className={labelClass}>Country of Tax Residence *</label>
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className={`${inputUnderlineClass} cursor-pointer`}
                        >
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="Singapore">Singapore</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className={labelClass}>Passport / National Tax ID *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. US Passport / Tax ID"
                          value={foreignId}
                          onChange={(e) => setForeignId(e.target.value)}
                          className={inputUnderlineClass}
                        />
                      </div>
                    </>
                  )}

                  <div className="sm:col-span-2">
                    <label className={labelClass}>Postal Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="House/Street, City, State, PIN"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={inputUnderlineClass}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button & Trust Bar */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  className="w-full btn-donate py-3.5 px-6 text-sm sm:text-base font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>
                    Donate {currencySymbol}{amount.toLocaleString()} {portalType === 'indian' ? '(with 80G Receipt)' : '(via FCRA)'}
                  </span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-stone-600 font-medium pt-1">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Tax Deductible (80G)
                  </span>
                  <span className="text-stone-300">•</span>
                  <span>256-Bit SSL Encrypted</span>
                  <span className="text-stone-300">•</span>
                  <span>Instant PDF Receipt</span>
                </div>
              </div>

            </form>
          )}

          {paymentStep === 'processing' && (
            <div className="py-14 text-center space-y-4">
              <div className="w-14 h-14 border-4 border-[#d84315] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Securing Your Contribution...
              </h4>
              <p className="text-xs text-stone-600 font-medium">
                Connecting to Razorpay secure payment gateway...
              </p>
            </div>
          )}

          {paymentStep === 'success' && generatedReceipt && (
            <div className="py-6 space-y-5 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Payment Captured Successfully
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 pt-1">
                  Pranam & Sincere Gratitude!
                </h4>
                <p className="text-sm text-stone-700 max-w-md mx-auto">
                  Your contribution of <strong>{generatedReceipt.currency} {generatedReceipt.amount.toLocaleString()}</strong> has been allocated to <em>{generatedReceipt.program}</em>.
                </p>
              </div>

              {/* Receipt Preview Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 text-left space-y-2 text-xs text-stone-800">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="font-semibold text-stone-600">80G Receipt Number:</span>
                  <span className="font-bold text-[#d84315]">{generatedReceipt.receipt80GNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Donor Name:</span>
                  <span className="font-bold text-stone-900">{generatedReceipt.donorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">PAN / Tax ID:</span>
                  <span className="font-semibold text-stone-900">{generatedReceipt.panNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Transaction ID:</span>
                  <span className="font-mono text-stone-700">{generatedReceipt.id}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleDownloadReceipt}
                  className="btn-donate py-2.5 px-6 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download 80G Receipt (PDF)</span>
                </button>

                <button
                  onClick={() => {
                    setPaymentStep('form');
                    onClose();
                  }}
                  className="py-2.5 px-6 text-sm font-semibold border border-stone-300 rounded-full text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <span>Close</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 font-medium">
                A digital copy of this 80G tax certificate has also been dispatched to {generatedReceipt.email}.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
