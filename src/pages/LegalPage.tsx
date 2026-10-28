import React from 'react';
import { FileText, RefreshCw, Lock } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Privacy Policy & Donor Data Protection',
      subtitle: 'Information Technology Act, 2000 & International Data Privacy Standards',
      icon: Lock,
      sections: [
        {
          heading: '1. Commitment to Donor Confidentiality',
          body: 'Paramhansa Yogananda Public Charitable Trust is committed to safeguarding the privacy of all donors, devotees, volunteers, and visitors. We do not sell, rent, lease, trade, or share any personal details (names, email addresses, phone numbers, or PAN numbers) with any third-party commercial organizations.'
        },
        {
          heading: '2. Collection of Information & Section 80G Compliance',
          body: 'When you contribute through our Indian donor portal, the Income Tax Department of India mandates the collection of the donor’s Permanent Account Number (PAN) and postal address under Central Board of Direct Taxes (CBDT) Form 10BD regulations. This data is exclusively submitted to the Directorate of Income Tax (Exemption) to generate your official tax certificate.'
        },
        {
          heading: '3. Payment Gateway Security',
          body: 'All credit card, debit card, UPI, and NetBanking transactions are processed over 256-bit SSL encrypted channels via Razorpay. We do not store or retain any card numbers, CVV codes, or net banking credentials on our local servers.'
        },
        {
          heading: '4. Communication Preferences',
          body: 'Donors will receive email confirmations, 80G tax receipts, and occasional quarterly impact newsletters. You may opt out of newsletters at any time by emailing communication@yoganandatrust.org.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions of Service',
      subtitle: 'Paramhansa Yogananda Public Charitable Trust (Regd. 2015)',
      icon: FileText,
      sections: [
        {
          heading: '1. Organization Status',
          body: 'Paramhansa Yogananda Public Charitable Trust is a non-governmental public charitable organization duly registered under the Indian Trusts Act, 1882, with its operational headquarters in Vrindavan, Mathura District, UP, and registered office in Connaught Place, New Delhi.'
        },
        {
          heading: '2. Purpose of Contributions',
          body: 'All funds received through our donation portals, bank transfers, or physical receipts are allocated exclusively to our registered charitable objects, including the Matri Seva Ashram, Matri Seva Community, Aarogyavardhan Healthcare, Pashu Seva, and Meal Heals.'
        },
        {
          heading: '3. Use of Website Materials',
          body: 'All photographs, documentary stories, logos, and written materials on yoganandatrust.org are the intellectual property of the Trust. Republication or commercial use without prior written authorization is strictly prohibited.'
        },
        {
          heading: '4. Jurisdiction',
          body: 'Any legal inquiries, notices, or disputes related to the operation of the Trust or website are subject to the exclusive jurisdiction of the competent courts in Mathura / New Delhi, India.'
        }
      ]
    },
    refund: {
      title: '80G Tax Exemption & Donation Refund Policy',
      subtitle: 'Transparent Guidelines for Voluntary Charitable Contributions',
      icon: RefreshCw,
      sections: [
        {
          heading: '1. Nature of Voluntary Contributions',
          body: 'Donations made to Paramhansa Yogananda Public Charitable Trust are voluntary charitable contributions eligible for tax exemption under Section 80G of the Income Tax Act, 1961. As funds are immediately deployed for daily nutrition, emergency hospital surgeries, and cow fodder, contributions are generally non-refundable.'
        },
        {
          heading: '2. Erroneous or Duplicate Deductions',
          body: 'In the event of an inadvertent technical error resulting in duplicate debits or an incorrect amount entered during an online transaction, the donor must notify the Trust within 7 operational days at communication@yoganandatrust.org along with the transaction ID and proof of debit.'
        },
        {
          heading: '3. Investigation & Refund Processing',
          body: 'Upon verification with our payment gateway (Razorpay), if a duplicate or erroneous payment is confirmed and the 80G tax certificate has not yet been reconciled into the statutory quarterly CBDT Form 10BD return, the Trust will process a full refund to the original payment source within 7 to 10 working days.'
        },
        {
          heading: '4. Cancellation of 80G Certificate',
          body: 'If a refund is issued, the corresponding 80G tax certificate will be nullified and voided in the statutory database, and the donor will not be eligible to claim tax exemption for that transaction.'
        }
      ]
    }
  };

  const activeContent = content[type];
  const IconComponent = activeContent.icon;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto border border-white/20 text-amber-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            {activeContent.title}
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm">
            {activeContent.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="site-container max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            {activeContent.sections.map((section, idx) => (
              <div key={idx} className="space-y-2 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h2 className="text-lg font-bold text-slate-900 font-serif">
                  {section.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}

            <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-1">
              <p>For any queries or formal correspondence, please write to:</p>
              <p className="font-semibold text-slate-700">Paramhansa Yogananda Public Charitable Trust</p>
              <p>Email: <a href="mailto:communication@yoganandatrust.org" className="text-[#003896] underline">communication@yoganandatrust.org</a> • Phone: +91 8433147393 / +91 86509 11000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
