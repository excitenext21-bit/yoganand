import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  MousePointer2, 
  Play, 
  Pause, 
  X, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2
} from 'lucide-react';

interface HappyMatasShowcaseProps {
  onOpenDonate?: (portalType: 'indian' | 'foreign') => void;
  onExploreStories?: () => void;
}

interface MataPhotoItem {
  id: string;
  name: string;
  image: string;
  tag?: string;
  isVideo?: boolean;
  videoSrc?: string;
}

// 4 Distinct authentic videos from yoganandatrust.org gallery
const video1: MataPhotoItem = { 
  id: 'v1', 
  name: 'Sacred Ashram Life & Devotion', 
  image: '/images/trust_matas/mata_b5.jpg', 
  tag: 'Ashram Life',
  isVideo: true,
  videoSrc: '/videos/gallery-video-1.mp4',
};

const video2: MataPhotoItem = { 
  id: 'v2', 
  name: 'Devotional Kirtan by Revered Matas', 
  image: '/images/trust_matas/bhakti_manaa_maa.jpg', 
  tag: 'Daily Kirtan',
  isVideo: true,
  videoSrc: '/videos/gallery-video-2.mp4',
};

const video3: MataPhotoItem = { 
  id: 'v3', 
  name: 'Matri Seva Daily Food Distribution', 
  image: '/images/trust_matas/mata_ration_seva.jpg', 
  tag: 'Annapurna Seva',
  isVideo: true,
  videoSrc: '/videos/gallery-video-3.mp4',
};

const video4: MataPhotoItem = { 
  id: 'v4', 
  name: 'Warm Smiles & Restored Dignity', 
  image: '/images/trust_matas/aalo_maa.jpg', 
  tag: 'Restored Dignity',
  isVideo: true,
  videoSrc: '/videos/gallery-video-4.mp4',
};

// 14 Authentic Photos of Matas directly from yoganandatrust.org
const photoPool: MataPhotoItem[] = [
  { id: 'p1', name: 'Aalo Maa', image: '/images/trust_matas/aalo_maa.jpg', tag: 'Vrindavan' },
  { id: 'p2', name: 'Anupama Maa', image: '/images/trust_matas/anupama_maa.jpg', tag: 'Aarogyavardhan' },
  { id: 'p3', name: 'Bhakti Manaa Maa', image: '/images/trust_matas/bhakti_manaa_maa.jpg', tag: 'Matri Seva' },
  { id: 'p4', name: 'Deepa Maa', image: '/images/trust_matas/deepa_maa.jpg', tag: 'Sanctuary' },
  { id: 'p5', name: 'Mata Radha Rani', image: '/images/trust_matas/mata_b1.jpg', tag: 'Active Aging' },
  { id: 'p6', name: 'Mata Yashoda Dasi', image: '/images/trust_matas/mata_b2.jpg', tag: 'Devotion' },
  { id: 'p7', name: 'Mata Kamla Devi', image: '/images/trust_matas/mata_b3.jpg', tag: 'Ashram Life' },
  { id: 'p8', name: 'Mata Malati Dasi', image: '/images/trust_matas/mata_b4.jpg', tag: 'Daily Care' },
  { id: 'p9', name: 'Mata Savitri', image: '/images/trust_matas/mata_b5.jpg', tag: 'Sisterhood' },
  { id: 'p10', name: 'Mata Parvati', image: '/images/trust_matas/mata_b6.jpg', tag: 'Peace & Dignity' },
  { id: 'p11', name: 'Mata Annapurna', image: '/images/trust_matas/mata_b7.jpg', tag: 'Morning Prayers' },
  { id: 'p12', name: 'Mata Subhadra', image: '/images/trust_matas/mata_ration_seva.jpg', tag: 'Ration Seva' },
  { id: 'p13', name: 'Mata Jamuna', image: '/images/trust_matas/mata_feeding_seva.jpg', tag: 'Annapurna Seva' },
  { id: 'p14', name: 'Mata Devaki', image: '/images/matri-seva.jpg', tag: 'Monthly Stipend' },
];

const MOTIVATIONAL_SEVA_QUOTES: string[] = [
  'Your small act of kindness today becomes a mother’s warm meal and dignity tomorrow.',
  'To serve an abandoned mother is to offer prayers with your hands.',
  'Even one shared meal can light up a forgotten Mata’s entire day.',
  'True wealth is measured by the tears we wipe and the smiles we restore.',
  'No mother should ever walk the twilight of her life hungry or alone.',
  'When you give in seva, you heal two hearts — hers and your own.',
  'A little warmth from you brings shelter, medicine, and hope to Vrindavan’s Matas.',
  'Compassion in action is the purest form of devotion.',
];

export const HappyMatasShowcase: React.FC<HappyMatasShowcaseProps> = ({
  onOpenDonate,
  onExploreStories,
}) => {
  // Random Motivational Quote Rotator State (coming & going fade effect)
  const [quoteIndex, setQuoteIndex] = useState<number>(() =>
    Math.floor(Math.random() * MOTIVATIONAL_SEVA_QUOTES.length)
  );
  const [isQuoteVisible, setIsQuoteVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current quote
      setIsQuoteVisible(false);

      // Swap to a new random quote after fade-out completes, then fade back in
      setTimeout(() => {
        setQuoteIndex((prev) => {
          let next = Math.floor(Math.random() * MOTIVATIONAL_SEVA_QUOTES.length);
          if (next === prev) {
            next = (prev + 1) % MOTIVATIONAL_SEVA_QUOTES.length;
          }
          return next;
        });
        setIsQuoteVisible(true);
      }, 450);
    }, 3800);

    return () => clearInterval(interval);
  }, []);
  // Modal State for Video Playback
  const [activeVideo, setActiveVideo] = useState<MataPhotoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToStories = () => {
    if (onExploreStories) {
      onExploreStories();
      return;
    }
    const elem = document.getElementById('stories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to triple items for infinite seamless vertical loop (no blank frames)
  const makeLoop = (items: MataPhotoItem[]) => [...items, ...items, ...items];

  // Video playback controls
  const handleOpenVideo = (item: MataPhotoItem) => {
    if (item.isVideo && item.videoSrc) {
      setActiveVideo(item);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveVideo(null);
    setIsPlaying(false);
    setCurrentTime(0);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!modalContainerRef.current) return;
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (modalVideoRef.current) {
      setDuration(modalVideoRef.current.duration);
      modalVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = time;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideo) {
        handleCloseModal();
      }
      if (e.key === ' ' && activeVideo) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo, isPlaying]);

  // Column definitions: Each of the 4 videos is completely unique and strictly alternates with photos!
  const columns = [
    {
      colIndex: 1,
      heightClass: 'h-[540px] sm:h-[580px]',
      animClass: 'animate-marquee-col-1',
      items: [photoPool[0], video1, photoPool[1], photoPool[2]], // Photo, Video 1, Photo, Photo
      hasBottomFade: true,
      isOuter: true,
    },
    {
      colIndex: 2,
      heightClass: 'h-[460px] sm:h-[500px]',
      animClass: 'animate-marquee-col-2',
      items: [photoPool[3], photoPool[4], photoPool[5], photoPool[6]], // All Photos
      hasBottomFade: true,
      isOuter: true,
    },
    {
      colIndex: 3,
      heightClass: 'h-[230px] sm:h-[260px]',
      animClass: 'animate-marquee-col-3',
      items: [photoPool[7], video2, photoPool[8], photoPool[9]], // Photo, Video 2, Photo, Photo
      hasBottomFade: true,
      isArch: true,
    },
    {
      colIndex: 4,
      heightClass: 'h-[170px] sm:h-[190px]',
      animClass: 'animate-marquee-col-4',
      items: [photoPool[10], photoPool[11], photoPool[12], photoPool[13]], // All Photos
      hasBottomFade: true,
      isArch: true,
    },
    {
      colIndex: 5,
      heightClass: 'h-[170px] sm:h-[190px]',
      animClass: 'animate-marquee-col-5',
      items: [photoPool[1], photoPool[3], photoPool[5], photoPool[7]], // All Photos
      hasBottomFade: true,
      isArch: true,
    },
    {
      colIndex: 6,
      heightClass: 'h-[260px] sm:h-[300px]',
      animClass: 'animate-marquee-col-6',
      items: [photoPool[8], video3, photoPool[10], photoPool[12]], // Photo, Video 3, Photo, Photo
      hasBottomFade: true,
      isArch: true,
    },
    {
      colIndex: 7,
      heightClass: 'h-[470px] sm:h-[520px]',
      animClass: 'animate-marquee-col-7',
      items: [photoPool[2], photoPool[4], photoPool[6], photoPool[9]], // All Photos
      hasBottomFade: true,
      isOuter: true,
      has3DTilt: true, // 3D perspective rotated card with cursor
    },
    {
      colIndex: 8,
      heightClass: 'h-[540px] sm:h-[580px]',
      animClass: 'animate-marquee-col-8',
      items: [photoPool[11], video4, photoPool[13], photoPool[0]], // Photo, Video 4, Photo, Photo
      hasBottomFade: true,
      isOuter: true,
    },
  ];

  return (
    <section className="relative w-full bg-white pt-0 pb-16 sm:pb-20 overflow-hidden selection:bg-slate-900 selection:text-white">
      <div className="relative max-w-[1440px] mx-auto px-3 sm:px-6 z-10 hover-pause-marquee">
        
        {/* Canopy Columns Layout (Inverted Arch wrapping the center text) */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-5 items-start">
          {columns.map((col) => {
            const loopItems = makeLoop(col.items);

            return (
              <div
                key={col.colIndex}
                className={`relative flex flex-col overflow-hidden ${col.heightClass} ${
                  col.colIndex === 3 || col.colIndex === 6 ? 'hidden sm:flex' : ''
                } ${
                  col.colIndex === 4 || col.colIndex === 5 ? 'hidden lg:flex' : ''
                }`}
              >
                {/* Bottom fade gradient for column */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/95 to-transparent z-20 pointer-events-none" />

                {/* Upward scrolling image track */}
                <div className={`flex flex-col gap-3 sm:gap-4.5 ${col.animClass}`}>
                  {loopItems.map((item, itemIdx) => {
                    const isSpecial3D = col.has3DTilt && itemIdx === 1;

                    return (
                      <div
                        key={`${col.colIndex}-${itemIdx}`}
                        onClick={() => item.isVideo && handleOpenVideo(item)}
                        className={`group relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm transition-all duration-300 hover:scale-[1.03] cursor-pointer ${
                          isSpecial3D
                            ? 'transform-gpu -rotate-2 sm:rotate-[-4deg] sm:scale-105 shadow-xl z-30'
                            : 'hover:shadow-md'
                        }`}
                      >
                        {/* Video thumbnail: Auto-loops cleanly, NO slidebars, NO youtube elements, NO timer, with poster */}
                        {item.isVideo && item.videoSrc ? (
                          <div className="relative w-full h-full overflow-hidden bg-black">
                            <video
                              src={item.videoSrc}
                              poster={item.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out"
                            />

                            {/* Minimalist Glassy Video Play Badge Indicator (NO timer badge) */}
                            <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white shadow-md border border-white/20 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            loading="eager"
                            decoding="async"
                          />
                        )}

                        {/* Interactive cursor indicator for the 3D card */}
                        {isSpecial3D && (
                          <div className="absolute -right-1 -bottom-1 p-1 pointer-events-none animate-pulse z-20">
                            <MousePointer2 className="w-5 h-5 text-slate-900 fill-slate-900 drop-shadow-md transform -rotate-12" />
                          </div>
                        )}

                        {/* Gentle hover tag */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2 sm:p-2.5 z-15">
                          <span className="text-[10px] sm:text-[11px] font-semibold text-white drop-shadow-xs line-clamp-1">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Text Block - Pushed down by 20% into the comfortable arch bay */}
        <div className="relative z-30 max-w-xl mx-auto text-center px-4 -mt-[270px] sm:-mt-[310px] md:-mt-[345px] lg:-mt-[370px] pb-8 sm:pb-12 pointer-events-auto">

          {/* Heading (Standardized 24px font size and properties matching all sections) */}
          <h2 
            style={{ fontSize: '24px' }}
            className="!text-[24px] font-normal tracking-[-0.015em] text-[#18181b] leading-snug m-0 font-heading"
          >
            Trusted by Matas
            <br />
            <span className="text-[#71717a] font-normal">from across the nation</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-[#71717a] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Learn why vulnerable Matas trust our sacred seva to complete their journeys with health, dignity, and peace.
          </p>

          {/* Pill CTA Button matching About Us style */}
          <div className="mt-6 sm:mt-7 flex justify-center">
            <button
              onClick={handleScrollToStories}
              className="bg-white hover:bg-slate-50 text-[#18181b] rounded-full pl-5 pr-2 py-2 shadow-xs border border-slate-200/70 inline-flex items-center gap-4 transition-all cursor-pointer group select-none"
            >
              <span className="text-xs sm:text-sm font-medium font-sans">
                Read Success Stories
              </span>
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Random Motivational Italic Helping Quotes (Coming & Going below button) */}
          <div className="mt-5 sm:mt-6 min-h-[54px] flex items-center justify-center px-2">
            <p
              onClick={() => onOpenDonate?.('indian')}
              title="Click to support a Mata today"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              className={`max-w-lg mx-auto text-[15px] sm:text-[17px] italic text-[#52525b] hover:text-[#e65100] leading-relaxed cursor-pointer select-none transition-all duration-500 ease-in-out ${
                isQuoteVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-1.5 scale-[0.98]'
              }`}
            >
              <span className="text-[#e65100] font-semibold not-italic mr-1">&ldquo;</span>
              {MOTIVATIONAL_SEVA_QUOTES[quoteIndex]}
              <span className="text-[#e65100] font-semibold not-italic ml-1">&rdquo;</span>
            </p>
          </div>

        </div>

      </div>

      {/* Video Modal Popup with Sleek Progress Slider Only */}
      {activeVideo && activeVideo.videoSrc && (
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            ref={modalContainerRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl sm:max-w-4xl bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          >
            {/* Top Modal Bar: Title, Tag & Close Button */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shrink-0">
                  {activeVideo.tag || 'Video'}
                </span>
                <h3 className="text-white text-sm sm:text-base font-semibold truncate m-0 font-sans">
                  {activeVideo.name}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer border border-white/20"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Area */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center group/video">
              <video
                ref={modalVideoRef}
                src={activeVideo.videoSrc}
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Big Center Play Indicator when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-2 border-white/40"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              )}
            </div>

            {/* Sleek Custom Video Control Bar: ONLY sleek progress slider + essentials */}
            <div className="px-4 sm:px-6 py-3.5 bg-slate-950/95 border-t border-white/10 flex flex-col gap-2.5">
              
              {/* Sleek Video Progress Slider Bar */}
              <div className="flex items-center gap-3 w-full">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.05"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none transition-all hover:h-2.5 accent-amber-400"
                  style={{
                    background: `linear-gradient(to right, #facc15 0%, #facc15 ${
                      duration > 0 ? (currentTime / duration) * 100 : 0
                    }%, rgba(255,255,255,0.2) ${
                      duration > 0 ? (currentTime / duration) * 100 : 0
                    }%, rgba(255,255,255,0.2) 100%)`
                  }}
                  aria-label="Video seek progress slider"
                />
              </div>

              {/* Bottom Row: Play/Pause, Time Tracker, Mute & Fullscreen */}
              <div className="flex items-center justify-between text-white/90 text-xs sm:text-[13px] font-sans">
                <div className="flex items-center gap-3">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-white transition-colors cursor-pointer flex items-center justify-center"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  {/* Sleek Time Display */}
                  <span className="font-mono text-slate-300 select-none">
                    {formatTime(currentTime)} <span className="text-slate-500">/</span> {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-white transition-colors cursor-pointer flex items-center justify-center"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/15 text-white transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Toggle Fullscreen"
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
