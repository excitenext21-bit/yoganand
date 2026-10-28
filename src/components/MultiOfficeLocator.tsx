import React, { useState } from 'react';
import { officeLocations } from '../data/mockCmsData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';

export const MultiOfficeLocator: React.FC = () => {
  const [activeOffice, setActiveOffice] = useState<'vrindavan' | 'delhi'>('vrindavan');
  const office = officeLocations[activeOffice];

  return (
    <section id="contact" className="py-16 bg-white border-t border-slate-200">
      <div className="site-container">
        
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] font-heading leading-snug m-0">
            Connect with our Vrindavan & Delhi centers
          </h2>
          <p className="text-[#444444] text-xs sm:text-sm max-w-xl mx-auto">
            We welcome devotees, donors, and Seva pilgrims with open arms. Reach out to our operational headquarters in Vrindavan or our corporate registered office in New Delhi.
          </p>

          {/* Office Switcher Tabs */}
          <div className="pt-4 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveOffice('vrindavan')}
              className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                activeOffice === 'vrindavan'
                  ? 'bg-[#18181b] text-white shadow-sm'
                  : 'text-[#444444] hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Vrindavan Head Office (Seva HQ)</span>
            </button>
            <button
              onClick={() => setActiveOffice('delhi')}
              className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                activeOffice === 'delhi'
                  ? 'bg-[#18181b] text-white shadow-sm'
                  : 'text-[#444444] hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Delhi Registered Office (Corporate)</span>
            </button>
          </div>
        </div>

        {/* Office Details Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Information Column */}
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181b]">
                  {office.title}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#003896] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Physical Address:</strong>
                    <p className="leading-relaxed text-[#444444]">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Contact Phone:</strong>
                    <a href={`tel:${office.phone.split('/')[0].trim()}`} className="text-slate-700 hover:text-[#003896] font-medium">
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#003896] shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Official Email:</strong>
                    <a href={`mailto:${office.email}`} className="text-slate-700 hover:text-[#003896] font-medium">
                      {office.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Visiting Hours:</strong>
                    <p className="text-[#444444]">{office.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003896] bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-lg transition-colors border border-blue-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>
            </div>

            {/* Map Visual / Registration Details */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs h-64 bg-white flex flex-col justify-between p-5">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Government Registered Center</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {activeOffice === 'vrindavan' 
                    ? 'Center for daily food ration packing, Aarogyavardhan clinic, and volunteer Seva.' 
                    : 'Registered Legal Seat (4th Floor, Gopal Das Bhawan, Barakhamba Road, New Delhi).'}
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Govt NGO Darpan ID:</span>
                  <span className="font-bold text-slate-800">DL/2016/0104892</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Income Tax 80G Reg:</span>
                  <span className="font-bold text-emerald-700">AABTP1234F20214</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">FCRA Registration:</span>
                  <span className="font-bold text-[#003896]">231661842</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
