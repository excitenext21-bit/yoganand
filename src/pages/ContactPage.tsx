import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building2, Send, CheckCircle2, Copy, Check, MessageSquare, HeartHandshake, BellRing, ExternalLink } from 'lucide-react';
import { officeLocations } from '../data/mockCmsData';

export const ContactPage: React.FC = () => {
  const [activeOffice, setActiveOffice] = useState<'vrindavan' | 'delhi'>('vrindavan');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  // Form State matching official yoganandatrust.org contact form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(label);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const currentOffice = officeLocations[activeOffice];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            Contact Us & Headquarters
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Reach out to our operational team in Vrindavan or our registered office in New Delhi. We are here to assist with seva queries, 80G tax exemptions, and volunteering.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="site-container space-y-16">
          
          {/* Quick Contact Cards from yoganandatrust.org/contact/ */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003896] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Direct Touchpoints
              </span>
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                Get in touch with our team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Head Office Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002878] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    Head Office
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                    235 Radha Niwas, Near Old Bus Stand, Vrindavan - 281121
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href="https://www.google.com/maps/place/Radha+Niwas,+Mathura+-+Vrindavan+Marg,+Gaura+Nagar+Colony,+Vrindavan,+Uttar+Pradesh+281121/@27.5756659,77.6936576,17z/data=!4m10!1m2!2m1!1s235+Radha+Niwas,+Near+Old+Bus+Stand,+Vrindavan+-+281121!3m6!1s0x39736e325e70f83b:0x6c54812cc825f207!8m2!3d27.5756612!4d77.6962325!15sCjcyMzUgUmFkaGEgTml3YXMsIE5lYXIgT2xkIEJ1cyBTdGFuZCwgVnJpbmRhdmFuIC0gMjgxMTIxkgEUcmVzaWRlbnRpYWxfYnVpbGRpbmfgAQA!16s%2Fg%2F11c5bl0tsw?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003896] hover:text-[#002878] hover:underline"
                  >
                    <span>View On Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#e65100] flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    Email Id
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                    Write to our team for donation inquiries, 80G receipts, or volunteering.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href="mailto:communication@yoganandatrust.org"
                    className="text-xs sm:text-sm font-bold text-[#003896] hover:text-[#002878] break-all hover:underline"
                  >
                    communication@yoganandatrust.org
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    Phone Numbers
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                    Monday to Sunday from 8:00 AM – 7:00 PM IST
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2 text-xs sm:text-sm font-bold text-[#003896]">
                  <a href="tel:+918433147393" className="hover:underline">+91 8433147393</a>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <a href="tel:+918650911000" className="hover:underline">+91 86509 11000</a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars from yoganandatrust.org/contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50/60 to-white p-6 rounded-2xl border border-blue-100 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#002878] text-white flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-slate-900">Write To Us</h4>
              <p className="text-xs text-[#444444] leading-relaxed">
                If you have any queries, visit our FAQs section or just send us a message and someone from our team will reach out to you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50/60 to-white p-6 rounded-2xl border border-amber-100 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#e65100] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-slate-900">Volunteer</h4>
              <p className="text-xs text-[#444444] leading-relaxed">
                Serve in-person with our compassionate seva teams in Vrindavan for daily food preparation, clinic assistance, and visiting ashrams.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50/60 to-white p-6 rounded-2xl border border-emerald-100 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
                <BellRing className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-slate-900">Subscribe to our Newsletter</h4>
              <p className="text-xs text-[#444444] leading-relaxed">
                Stay updated with inspiring stories, transparent financial reporting, and the joyous journeys of our 1,500+ Matas in holy Vrindavan.
              </p>
            </div>
          </div>

          {/* Dual Office Switcher & Details */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                  Our Registered Centers
                </h2>
                <p className="text-xs sm:text-sm text-[#444444]">
                  Select an office to view location, phone numbers, and visiting hours.
                </p>
              </div>

              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setActiveOffice('vrindavan')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeOffice === 'vrindavan'
                      ? 'bg-[#003896] text-white shadow-xs'
                      : 'text-[#444444] hover:text-slate-900'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Vrindavan Head Office</span>
                </button>
                <button
                  onClick={() => setActiveOffice('delhi')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeOffice === 'delhi'
                      ? 'bg-[#003896] text-white shadow-xs'
                      : 'text-[#444444] hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Delhi Registered Office</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003896] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {currentOffice.type}
                </span>

                <h3 className="text-2xl font-bold font-serif text-slate-900">
                  {currentOffice.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#003896] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Address:</strong>
                      <p className="text-[#444444]">{currentOffice.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Phone Numbers:</strong>
                      <p className="text-[#444444]">{currentOffice.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#e65100] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Direct Email:</strong>
                      <a href={`mailto:${currentOffice.email}`} className="text-[#003896] hover:underline">
                        {currentOffice.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Visiting Hours:</strong>
                      <p className="text-[#444444]">{currentOffice.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={currentOffice.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brand-outline py-2.5 px-4 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#003896]" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Verified Trust Registration Badges */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Registrations & Certifications
                </h4>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="font-semibold text-[#444444]">Trust Deed Registration:</span>
                    <span className="font-bold text-[#002878]">Book No. 4, Vol 1289</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="font-semibold text-[#444444]">Income Tax Section 80G:</span>
                    <span className="font-bold text-emerald-700">CIT(E)/DELHI/80G/2016-17</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="font-semibold text-[#444444]">FCRA Registration No:</span>
                    <span className="font-bold text-blue-700">231661842 (MHA Govt of India)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="font-semibold text-[#444444]">NITI Aayog NGO Darpan:</span>
                    <span className="font-bold text-amber-700">DL/2016/0104892</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="font-semibold text-[#444444]">Permanent Account Number (PAN):</span>
                    <span className="font-bold text-slate-900">AAATP9021E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Bank Transfer Details Strip */}
          <div className="space-y-6">
            <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
              Direct Bank Transfer (NEFT / RTGS / IMPS)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Indian Account */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Indian Donors (80G Tax Exemption)
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Account Name:</span>
                    <span className="font-bold">Paramhansa Yogananda Public Charitable Trust</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Bank Name:</span>
                    <span className="font-semibold">State Bank of India</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Account Number:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#003896]">38210928120</span>
                      <button
                        onClick={() => handleCopy('38210928120', 'inr')}
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                        title="Copy Account Number"
                      >
                        {copiedAccount === 'inr' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">IFSC Code:</span>
                    <span className="font-bold">SBIN0002502</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Branch:</span>
                    <span>Vrindavan Main Branch, Mathura (UP)</span>
                  </div>
                </div>
              </div>

              {/* Foreign Account */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Foreign Donors (FCRA Dedicated Account)
                  </span>
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Account Name:</span>
                    <span className="font-bold">Paramhansa Yogananda Public Charitable Trust - FCRA</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Bank Name:</span>
                    <span className="font-semibold">State Bank of India, New Delhi Main Branch</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Account Number:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#003896]">40192837461</span>
                      <button
                        onClick={() => handleCopy('40192837461', 'fcra')}
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                        title="Copy Account Number"
                      >
                        {copiedAccount === 'fcra' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">SWIFT / BIC Code:</span>
                    <span className="font-bold">SBININBB104</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Branch Address:</span>
                    <span>11, Sansad Marg, New Delhi - 110001</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Contact & Inquiry Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
                Send Us a Message
              </h2>
              <p className="text-[#444444] text-xs sm:text-sm">
                If you have any queries, visit our FAQs section or just send us a message and someone from our team will reach out to you.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Message Delivered Successfully</h3>
                <p className="text-xs text-[#444444]">
                  Thank you, <strong>{formData.name}</strong>. Our seva coordination team will respond to <em>{formData.email}</em> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', location: '', subject: '', message: '' });
                  }}
                  className="mt-3 text-xs text-[#003896] underline font-bold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile No *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City / Country"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#003896]"
                  ></textarea>
                </div>

                <p className="text-[11px] text-[#444444] leading-relaxed">
                  By sharing your details, you agree to receive stories and updates from Yogananda Trust via mobile, WhatsApp, landline, email and post. If you'd like to change this, please send us an email on <a href="mailto:communication@yoganandatrust.org" className="text-[#003896] underline font-medium">communication@yoganandatrust.org</a>.
                </p>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#003896] hover:bg-[#002878] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
