import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Heart, AlertCircle, ChevronRight, Home, ShoppingBag, HeartPulse, UtensilsCrossed, PhoneCall, Calendar, Sparkles, Calculator } from 'lucide-react';

interface HeaderProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
  onNavigateSection?: (sectionId: string) => void;
  activeSection?: string;
  heroSlide?: number;
}

export const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [workHoverItem, setWorkHoverItem] = useState<'ashram' | 'community' | 'health' | 'pashu' | 'meals'>('ashram');
  const [heartDropdownOpen, setHeartDropdownOpen] = useState(false);
  const [heartHoverItem, setHeartHoverItem] = useState<'circle' | 'pilgrimage' | 'prayer' | 'calculator'>('circle');
  const [scrolled, setScrolled] = useState(false);

  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const workTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (workTimeoutRef.current) clearTimeout(workTimeoutRef.current);
    if (heartTimeoutRef.current) clearTimeout(heartTimeoutRef.current);
    setWorkDropdownOpen(false);
    setHeartDropdownOpen(false);
    setAboutDropdownOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 280);
  };

  const handleWorkEnter = () => {
    if (workTimeoutRef.current) clearTimeout(workTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (heartTimeoutRef.current) clearTimeout(heartTimeoutRef.current);
    setAboutDropdownOpen(false);
    setHeartDropdownOpen(false);
    setWorkDropdownOpen(true);
  };

  const handleWorkLeave = () => {
    workTimeoutRef.current = setTimeout(() => {
      setWorkDropdownOpen(false);
    }, 280);
  };

  const handleHeartEnter = () => {
    if (heartTimeoutRef.current) clearTimeout(heartTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (workTimeoutRef.current) clearTimeout(workTimeoutRef.current);
    setAboutDropdownOpen(false);
    setWorkDropdownOpen(false);
    setHeartDropdownOpen(true);
  };

  const handleHeartLeave = () => {
    heartTimeoutRef.current = setTimeout(() => {
      setHeartDropdownOpen(false);
    }, 280);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When not scrolled, navigation text and logo are white for all hero slides
  const isLightText = !scrolled;

  const navLinkClass = `py-1 transition-colors font-semibold ${
    isLightText 
      ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] hover:text-amber-300' 
      : 'text-slate-900 hover:text-[#003896]'
  }`;

  const dropdownTriggerClass = `flex items-center gap-1 py-1 transition-colors cursor-pointer bg-transparent border-0 font-semibold ${
    isLightText 
      ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] hover:text-amber-300' 
      : 'text-slate-900 hover:text-[#003896]'
  }`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-0 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      {/* Main Navigation Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 transition-all">
        <div className="site-container flex items-center justify-between gap-4">
          
          {/* Brand Logo: footer logo (/images/footer-logo.png) for all hero slides & original logo on scroll */}
          <Link 
            to="/"
            className="flex items-center shrink-0 cursor-pointer group select-none"
          >
            <img
              src={isLightText ? "/images/footer-logo.png" : "/images/mainlogo-original.png"}
              alt="Paramhansa Yogananda Public Charitable Trust"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[14px] font-medium whitespace-nowrap">
            <Link 
              to="/"
              className={`${navLinkClass} relative ${
                pathname === '/' ? (isLightText ? '!text-amber-300' : '!text-[#002878]') : ''
              }`}
            >
              <span>Home</span>
              {pathname === '/' && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FACC15]"
                />
              )}
            </Link>
            
            {/* About Us Dropdown - Ultra-Modern Split Mega-Nav */}
            <div 
              className="relative py-2" 
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Link 
                to="/about"
                onClick={() => setAboutDropdownOpen(false)}
                className={dropdownTriggerClass}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {aboutDropdownOpen && (
                <div 
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] max-w-[calc(100vw-32px)] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border backdrop-blur-xl overflow-hidden p-3.5 transition-all duration-300 z-50 animate-in fade-in slide-in-from-top-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 bg-white/95 border-slate-200/90 text-slate-900"
                >
                  <div className="grid grid-cols-12 gap-3.5 items-stretch">
                    
                    {/* Left Side: Dynamic Preview Image */}
                    <div className="col-span-5 relative rounded-xl overflow-hidden min-h-[160px] h-full flex flex-col justify-end p-3.5 group/img select-none bg-slate-100">
                      <img 
                        src="/images/hero-cinematic.jpg" 
                        alt="The Need & Urgency in Vrindavan"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 transform group-hover/img:scale-105"
                      />

                      {/* Floating Micro-Badge */}
                      <div className="relative z-10 space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                          Critical Need
                        </span>
                        <p className="text-white text-xs font-semibold leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-sans m-0">
                          Eliminating Begging &amp; Abandonment
                        </p>
                        <p className="text-white text-[10px] leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-sans m-0">
                          Holy Vrindavan &amp; Radhakund
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Need & Urgency Subnav Card with Zero Overflow */}
                    <div className="col-span-7 flex flex-col justify-center py-0.5 pr-0.5">
                      
                      {/* Subnav Item: Need & Urgency */}
                      <Link
                        to="/need-and-urgency"
                        onClick={() => setAboutDropdownOpen(false)}
                        className="p-3.5 rounded-xl transition-all duration-200 flex items-start gap-3 group/item border bg-amber-50/90 border-amber-200/90 hover:bg-amber-100/80 shadow-xs"
                      >
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110 shadow-xs bg-amber-100 text-[#d97706]">
                          <AlertCircle className="w-4 h-4 stroke-[1]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h5 className="text-[13.5px] font-bold font-sans m-0 transition-colors text-slate-900 group-hover/item:text-[#d97706]">
                              Need &amp; Urgency
                            </h5>
                            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                          </div>
                          <p className="text-[11.5px] leading-snug font-sans m-0 pt-1 break-words line-clamp-2 max-w-full text-[#444444]">
                            Addressing abandonment, hunger &amp; urgent medical care for elderly Matas.
                          </p>
                        </div>
                      </Link>

                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Our Work Dropdown - Split Mega-Nav matching About Us */}
            <div 
              className="relative py-2" 
              onMouseEnter={handleWorkEnter}
              onMouseLeave={handleWorkLeave}
            >
              <button 
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                className={dropdownTriggerClass}
              >
                <span>Our Work</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${workDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {workDropdownOpen && (
                <div 
                  onMouseEnter={handleWorkEnter}
                  onMouseLeave={handleWorkLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] max-w-[calc(100vw-32px)] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border backdrop-blur-xl overflow-hidden p-3.5 transition-all duration-300 z-50 animate-in fade-in slide-in-from-top-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 bg-white/95 border-slate-200/90 text-slate-900"
                >
                  <div className="grid grid-cols-12 gap-3.5 items-stretch">
                    
                    {/* Left Side: Dynamic Preview Image matching hovered Seva */}
                    <div className="col-span-5 relative rounded-xl overflow-hidden min-h-[260px] h-full flex flex-col justify-end p-3.5 group/img select-none bg-slate-100">
                      <img 
                        src={
                          workHoverItem === 'ashram' ? '/images/hero-seva.jpg' :
                          workHoverItem === 'community' ? '/images/matri-seva.jpg' :
                          workHoverItem === 'health' ? '/images/aarogyavardhan.jpg' :
                          workHoverItem === 'pashu' ? '/images/pashu-seva.jpg' :
                          '/images/meal-heals.jpg'
                        } 
                        alt="Our Work Seva in Vrindavan"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 transform group-hover/img:scale-105"
                      />
                      
                      <div className="relative z-10 space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                          {
                            workHoverItem === 'ashram' ? 'Residential Seva' :
                            workHoverItem === 'community' ? 'Doorstep Care' :
                            workHoverItem === 'health' ? 'Free Medical' :
                            workHoverItem === 'pashu' ? 'Gaushala Seva' :
                            'Daily Annapurna'
                          }
                        </span>
                        <p className="text-white text-xs font-semibold leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-sans m-0">
                          {
                            workHoverItem === 'ashram' ? '280+ Destitute Matas in Ashram Haven' :
                            workHoverItem === 'community' ? '1,200+ Matas Supported in Rented Rooms' :
                            workHoverItem === 'health' ? '5,600+ Cataract & Hospital Surgeries' :
                            workHoverItem === 'pashu' ? 'Lifelong Sanctuary for Abandoned Cows' :
                            '3,200+ Fresh Plates Daily in Holy Dham'
                          }
                        </p>
                        <p className="text-white text-[10px] leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-sans m-0">
                          {
                            workHoverItem === 'ashram' ? '24/7 Loving Care, Meals & Kirtan' :
                            workHoverItem === 'community' ? 'Monthly Groceries, Milk & Rent Stipend' :
                            workHoverItem === 'health' ? 'Free OPD, Diabetes & Heart Medicines' :
                            workHoverItem === 'pashu' ? 'Spacious Fodder & Medical Sanctuary' :
                            'Pure Ghee Nutrition for Needy Matas'
                          }
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Ultra Modern Navigation Cards without text overflow */}
                    <div className="col-span-7 flex flex-col justify-between py-0.5 pr-0.5 space-y-1.5">
                      
                      {/* Work 1 */}
                      <Link 
                        to="/work/matri-seva-ashram" 
                        onClick={() => setWorkDropdownOpen(false)}
                        onMouseEnter={() => setWorkHoverItem('ashram')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          workHoverItem === 'ashram'
                            ? 'bg-blue-50/90 border-blue-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-100 text-[#002878]">
                          <Home className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-[#002878]">
                            Matri Seva Ashram (Shelter)
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Safe residential living for destitute Matas.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Work 2 */}
                      <Link 
                        to="/work/matri-seva-community" 
                        onClick={() => setWorkDropdownOpen(false)}
                        onMouseEnter={() => setWorkHoverItem('community')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          workHoverItem === 'community'
                            ? 'bg-blue-50/90 border-blue-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700">
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-[#002878]">
                            Matri Seva Community (Rations)
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Monthly dry rations and stipends to 1,200+ Matas.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Work 3 */}
                      <Link 
                        to="/work/aarogyavardhan" 
                        onClick={() => setWorkDropdownOpen(false)}
                        onMouseEnter={() => setWorkHoverItem('health')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          workHoverItem === 'health'
                            ? 'bg-blue-50/90 border-blue-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-rose-100 text-rose-700">
                          <HeartPulse className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-[#002878]">
                            Aarogyavardhan Healthcare
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Free chronic medicines, OPD &amp; cataract surgeries.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Work 4 */}
                      <Link 
                        to="/pashu-seva" 
                        onClick={() => setWorkDropdownOpen(false)}
                        onMouseEnter={() => setWorkHoverItem('pashu')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          workHoverItem === 'pashu'
                            ? 'bg-amber-50/90 border-amber-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-700">
                          <Heart className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-amber-700">
                            Pashu Seva (Cow &amp; Animal Care)
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Loving sanctuary for blind &amp; abandoned cows.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Work 5 */}
                      <Link 
                        to="/work/meal-heals" 
                        onClick={() => setWorkDropdownOpen(false)}
                        onMouseEnter={() => setWorkHoverItem('meals')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          workHoverItem === 'meals'
                            ? 'bg-blue-50/90 border-blue-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-orange-100 text-orange-700">
                          <UtensilsCrossed className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-[#002878]">
                            Meal Heals (Annapurna Nutrition)
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            3,200+ plates of hot pure sattvic food daily.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Heart of Seva Dropdown - Split Mega-Nav matching About Us & Our Work */}
            <div 
              className="relative py-2" 
              onMouseEnter={handleHeartEnter}
              onMouseLeave={handleHeartLeave}
            >
              <button 
                onClick={() => setHeartDropdownOpen(!heartDropdownOpen)}
                className={dropdownTriggerClass}
              >
                <span>Heart Of Seva</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${heartDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {heartDropdownOpen && (
                <div 
                  onMouseEnter={handleHeartEnter}
                  onMouseLeave={handleHeartLeave}
                  className="absolute top-full right-[-140px] mt-2 w-[660px] max-w-[calc(100vw-32px)] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border backdrop-blur-xl overflow-hidden p-3.5 transition-all duration-300 z-50 animate-in fade-in slide-in-from-top-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 bg-white/95 border-slate-200/90 text-slate-900"
                >
                  <div className="grid grid-cols-12 gap-3.5 items-stretch">
                    
                    {/* Left Side: Dynamic Preview Image matching hovered item */}
                    <div className="col-span-5 relative rounded-xl overflow-hidden min-h-[250px] h-full flex flex-col justify-end p-3.5 group/img select-none bg-slate-100">
                      <img 
                        src={
                          heartHoverItem === 'circle' ? '/images/mata-happy-1.jpg' :
                          heartHoverItem === 'pilgrimage' ? '/images/mata-happy-2.jpg' :
                          heartHoverItem === 'prayer' ? '/images/mata-happy-3.jpg' :
                          '/images/mata-happy-4.jpg'
                        } 
                        alt="Heart of Seva in Vrindavan"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 transform group-hover/img:scale-105"
                      />
                      
                      <div className="relative z-10 space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                          {
                            heartHoverItem === 'circle' ? 'Companion Seva' :
                            heartHoverItem === 'pilgrimage' ? 'Sacred Yatra' :
                            heartHoverItem === 'prayer' ? 'Daily Kirtan' :
                            'Direct Impact'
                          }
                        </span>
                        <p className="text-white text-xs font-semibold leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-sans m-0">
                          {
                            heartHoverItem === 'circle' ? 'Circle of Love & Lifelong Fellowship' :
                            heartHoverItem === 'pilgrimage' ? 'Serve in Person in Holy Vrindavan' :
                            heartHoverItem === 'prayer' ? 'Sacred Evening Prayers & Aarti' :
                            'Sacred Impact Calculator'
                          }
                        </p>
                        <p className="text-white text-[10px] leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-sans m-0">
                          {
                            heartHoverItem === 'circle' ? 'Paired with compassionate global volunteers' :
                            heartHoverItem === 'pilgrimage' ? 'Serve warm meals & sit in devotion' :
                            heartHoverItem === 'prayer' ? 'Free prayer intentions sent to ashram hall' :
                            'Real-time transparency on meals & healthcare'
                          }
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Ultra Modern Navigation Cards */}
                    <div className="col-span-7 flex flex-col justify-between py-0.5 pr-0.5 space-y-1.5">
                      
                      {/* Item 1: Circle of Love */}
                      <Link 
                        to="/heart-of-seva#circle" 
                        onClick={() => setHeartDropdownOpen(false)}
                        onMouseEnter={() => setHeartHoverItem('circle')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          heartHoverItem === 'circle'
                            ? 'bg-blue-50/90 border-blue-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-100 text-[#002878]">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-[#002878]">
                            Circle of Love &amp; Fellowship
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Eradicating loneliness with weekly companion calls.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Item 2: In-Person Pilgrimage */}
                      <Link 
                        to="/heart-of-seva#pilgrimage" 
                        onClick={() => setHeartDropdownOpen(false)}
                        onMouseEnter={() => setHeartHoverItem('pilgrimage')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          heartHoverItem === 'pilgrimage'
                            ? 'bg-amber-50/90 border-amber-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-700">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-amber-700">
                            In-Person Seva &amp; Volunteering
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Serve meals &amp; distribute supplies in Vrindavan.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Item 3: Healing Prayer Circle */}
                      <Link 
                        to="/heart-of-seva#prayer" 
                        onClick={() => setHeartDropdownOpen(false)}
                        onMouseEnter={() => setHeartHoverItem('prayer')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          heartHoverItem === 'prayer'
                            ? 'bg-purple-50/90 border-purple-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-purple-100 text-purple-700">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-purple-700">
                            Healing Prayer Circle (Free)
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Submit intentions for daily evening Aarti &amp; Kirtan.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                      {/* Item 4: Sacred Impact Calculator */}
                      <Link 
                        to="/#heart-of-seva" 
                        onClick={() => setHeartDropdownOpen(false)}
                        onMouseEnter={() => setHeartHoverItem('calculator')}
                        className={`p-2 rounded-xl transition-all duration-150 flex items-center gap-2.5 group/item border ${
                          heartHoverItem === 'calculator'
                            ? 'bg-emerald-50/90 border-emerald-200/90 shadow-2xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700">
                          <Calculator className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-bold font-sans m-0 leading-tight text-slate-900 group-hover/item:text-emerald-700">
                            Sacred Impact Calculator
                          </p>
                          <p className="text-[11px] leading-snug font-sans m-0 pt-0.5 text-slate-500">
                            Calculate direct meals, medical care &amp; shelter impact.
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      </Link>

                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/news"
              className={navLinkClass}
            >
              News &amp; Blogs
            </Link>

            <Link 
              to="/contact"
              className={`flex items-center gap-1.5 py-1 transition-colors font-semibold ${
                isLightText 
                  ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] hover:text-amber-300' 
                  : 'text-slate-900 hover:text-[#003896]'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isLightText ? 'text-amber-300' : 'text-[#003896]'}`} />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none cursor-pointer transition-colors ${
                isLightText ? 'text-white' : 'text-slate-800 hover:text-[#003896]'
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isLightText ? 'text-white' : 'text-slate-800'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isLightText ? 'text-white' : 'text-slate-800'}`} />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            className="xl:hidden mt-2.5 pt-3 border-t rounded-xl p-3.5 shadow-2xl space-y-1 text-[15px] font-medium bg-white border-slate-200 text-slate-800"
          >
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 text-slate-800"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 text-slate-800"
            >
              About Us
            </Link>
            <Link 
              to="/need-and-urgency" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-1.5 pl-6 pr-3 rounded-lg text-sm hover:bg-blue-50 text-[#444444]"
            >
              ↳ Need &amp; Urgency
            </Link>
            <Link 
              to="/heart-of-seva" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg font-medium hover:bg-blue-50 text-slate-800"
            >
              Heart of Seva
            </Link>
            <div className="pl-3 space-y-0.5">
              <Link 
                to="/heart-of-seva#circle" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1 pl-4 pr-3 rounded-lg text-xs hover:bg-blue-50 text-[#444444]"
              >
                ↳ Circle of Love &amp; Fellowship
              </Link>
              <Link 
                to="/heart-of-seva#pilgrimage" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1 pl-4 pr-3 rounded-lg text-xs hover:bg-blue-50 text-[#444444]"
              >
                ↳ In-Person Seva &amp; Volunteering
              </Link>
              <Link 
                to="/heart-of-seva#prayer" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1 pl-4 pr-3 rounded-lg text-xs hover:bg-blue-50 text-[#444444]"
              >
                ↳ Healing Prayer Circle (Free)
              </Link>
              <Link 
                to="/#heart-of-seva" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1 pl-4 pr-3 rounded-lg text-xs font-semibold hover:bg-emerald-50 text-emerald-700"
              >
                ↳ Sacred Impact Calculator
              </Link>
            </div>
            <Link 
              to="/news" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 text-slate-800"
            >
              News &amp; Blogs
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 text-slate-800"
            >
              Contact & Multi-Office Locator
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
