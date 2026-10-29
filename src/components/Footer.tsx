import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenDonate: (portalType: 'indian' | 'foreign') => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="relative bg-[#002878] text-blue-100 border-t border-blue-900/60 overflow-hidden">
      <div className="site-container py-12 sm:py-14 space-y-10 relative z-10">

        {/* Subscribe Newsletter Section */}
        <div className="pb-9 border-b border-white/15 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h3
              style={{ color: '#ffffff' }}
              className="text-lg sm:text-xl font-bold !text-white tracking-tight m-0"
            >
              Subscribe to Our Seva Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-blue-200/90 leading-relaxed m-0">
              Receive monthly stories of Vrindavan&rsquo;s Matas, ashram updates, and sacred seva impact reports directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[400px]">
            {subscribed ? (
              <div className="flex items-center gap-2.5 py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Thank you for subscribing to our Seva Newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 border border-white/25 text-white placeholder:text-blue-200/70 text-xs sm:text-sm focus:outline-none focus:border-amber-300 transition-colors"
                />
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-[#e65100] hover:bg-[#cf4500] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Top 4-Column Responsive Grid (12 Columns) with subtle vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/footer-logo.png"
                alt="Paramhansa Yogananda Public Charitable Trust"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed max-w-sm">
              Founded in 2015 to serve the aged, abandoned, and destitute elderly women of Vrindavan and Radhakund. Inspired by Paramhansa Yogananda to see and serve the Divine Mother in every living being.
            </p>
          </div>

          {/* Column 2: Our Work (Sevas) */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/15 lg:pl-6">
            <h4 
              style={{ color: '#ffffff' }}
              className="text-xs font-bold !text-white uppercase tracking-wider"
            >
              Our Work (Sevas)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100/85">
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">Matri Seva Ashram</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">Matri Seva Community</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">Aarogyavardhan Healthcare</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">Meal Heals (Nutrition)</Link></li>
              <li><Link to="/#programs" className="hover:text-amber-300 transition-colors whitespace-nowrap block">Seva Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 3: Heart of Seva & Stories */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/15 lg:pl-6">
            <h4 
              style={{ color: '#ffffff' }}
              className="text-xs font-bold !text-white uppercase tracking-wider"
            >
              Heart Of Seva
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100/85">
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">Circle of Love</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">In-Person Seva &amp; Pilgrimage</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors font-bold text-amber-300 whitespace-nowrap block cursor-default">Healing Prayer Circle</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">News &amp; Blogs</Link></li>
              <li><Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-amber-300 transition-colors whitespace-nowrap block cursor-default">Contact &amp; Centers</Link></li>
            </ul>
          </div>

          {/* Column 4: Dedicated Portals & Contact */}
          <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/15 lg:pl-6">
            <h4 
              style={{ color: '#ffffff' }}
              className="text-xs font-bold !text-white uppercase tracking-wider"
            >
              Donation Portals
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={() => onOpenDonate('indian')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#e65100] hover:bg-[#cf4500] text-white text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer shadow-sm"
              >
                <span>Indian Portal (80G)</span>
                <ShieldCheck className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenDonate('foreign')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer shadow-sm"
              >
                <span>Foreign Portal (FCRA)</span>
                <Globe className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-xs text-blue-100/85 space-y-1.5">
              <div className="flex items-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:+918433147393" className="hover:text-amber-300 transition-colors whitespace-nowrap">+91 8433147393</a>
                  <a href="tel:+918650911000" className="hover:text-amber-300 transition-colors whitespace-nowrap">+91 86509 11000</a>
                </div>
              </div>
              <p className="flex items-center gap-1.5 whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <a href="mailto:communication@yoganandatrust.org" className="hover:text-amber-300 transition-colors whitespace-nowrap">communication@yoganandatrust.org</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
          <p>© {new Date().getFullYear()} Paramhansa Yogananda Public Charitable Trust. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-white cursor-default">Privacy Policy</Link>
            <span>•</span>
            <Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-white cursor-default">Terms &amp; Conditions</Link>
            <span>•</span>
            <Link to="/" onClick={(e) => e.preventDefault()} className="hover:text-white cursor-default">80G Refund Policy</Link>
            <span>•</span>
            <span className="text-amber-300">
              Crafted by{' '}
              <a
                href="https://excitetemplate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-200 underline underline-offset-2 transition-colors font-semibold"
              >
                Excite Template
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
