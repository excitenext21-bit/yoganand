import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface CleanVideoPlayerProps {
  videoId: string;
  posterImage?: string;
  title?: string;
  className?: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const CleanVideoPlayer: React.FC<CleanVideoPlayerProps> = ({
  videoId,
  posterImage = "/images/documentary-poster.jpg",
  title = "Paramhansa Yogananda Public Charitable Trust - Vrindavan Seva",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const playerIdRef = useRef<string>(`yt-player-${videoId}-${Math.random().toString(36).substring(2, 9)}`);

  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<any>(null);

  // Initialize YouTube Iframe ONLY after the user clicks to start the video.
  // This guarantees ZERO YouTube branding, ZERO "More videos" badges, and ZERO YouTube icons
  // appear when loading the website or before the video starts.
  useEffect(() => {
    if (!hasStarted) return;

    let isMounted = true;

    const setupPlayer = () => {
      if (!isMounted || !window.YT || !window.YT.Player) return;
      const targetEl = document.getElementById(playerIdRef.current);
      if (!targetEl) return;

      try {
        playerRef.current = new window.YT.Player(playerIdRef.current, {
          videoId,
          playerVars: {
            autoplay: 1,         // Start immediately upon click
            controls: 0,         // Hide YouTube native controls
            disablekb: 0,
            enablejsapi: 1,
            fs: 0,               // Handled by our custom player
            iv_load_policy: 3,   // Hide annotations
            modestbranding: 1,   // Minimal branding
            rel: 0,              // Prevent unrelated videos
            showinfo: 0,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event: any) => {
              if (!isMounted) return;
              try {
                event.target.playVideo();
                const dur = event.target.getDuration();
                if (dur) setDuration(dur);
              } catch (e) {
                // ignore
              }
            },
            onStateChange: (event: any) => {
              if (!isMounted) return;
              // 1: PLAYING, 2: PAUSED, 0: ENDED, 3: BUFFERING
              if (event.data === 1) {
                setIsPlaying(true);
                setIsBuffering(false);
              } else if (event.data === 2) {
                setIsPlaying(false);
                setIsBuffering(false);
              } else if (event.data === 3) {
                setIsBuffering(true);
              } else if (event.data === 0) {
                setIsPlaying(false);
                setIsBuffering(false);
                setCurrentTime(0);
              }
            }
          }
        });
      } catch (err) {
        console.error("YouTube Player Init Error:", err);
      }
    };

    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        setupPlayer();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      isMounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }
    };
  }, [hasStarted, videoId]);

  // Sync current time while playing
  useEffect(() => {
    let timer: any;
    if (isPlaying && playerRef.current && playerRef.current.getCurrentTime) {
      timer = setInterval(() => {
        try {
          const curr = playerRef.current.getCurrentTime() || 0;
          const dur = playerRef.current.getDuration() || duration;
          setCurrentTime(curr);
          if (dur && dur !== duration) setDuration(dur);
        } catch (e) {
          // player might be unmounting
        }
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration]);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!hasStarted) {
      setHasStarted(true);
      return;
    }
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (err) {
      console.warn("Play toggle error:", err);
    }
  };

  // Seek on progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration || !playerRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = clickPct * duration;
    setCurrentTime(newTime);
    try {
      playerRef.current.seekTo(newTime, true);
    } catch (err) {
      console.warn("Seek error:", err);
    }
  };

  // Mute toggle
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (err) {
      console.warn("Mute error:", err);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.warn(err));
    } else {
      document.exitFullscreen().catch((err) => console.warn(err));
    }
  };

  // Replay
  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    try {
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
    } catch (err) {
      console.warn("Replay error:", err);
    }
  };

  // Auto-hiding controls during playback
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const hasCustomRounding = className.includes('rounded');
  const hasCustomHeight = className.includes('h-');

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`relative w-full ${
        hasCustomHeight ? '' : 'aspect-video'
      } overflow-hidden bg-slate-900 ${
        hasCustomRounding ? '' : 'rounded-2xl'
      } shadow-[0_25px_60px_-15px_rgba(0,40,120,0.25)] group ${className}`}
    >
      {/* YouTube Iframe Host Container - scaled & cropped to eliminate YouTube title, "More videos" & logo */}
      {hasStarted && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div 
            className="absolute pointer-events-auto"
            style={{
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              transform: 'translate(-50%, -50%) scale(1.18)'
            }}
          >
            <div id={playerIdRef.current} className="w-full h-full" />
          </div>
        </div>
      )}

      {/* Initial Clean Poster & Glass Play Button - Zero black stripe, pure vibrant visual */}
      {!hasStarted && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-cover bg-center cursor-pointer transition-transform duration-700 overflow-hidden"
          style={{ backgroundImage: `url('${posterImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Subtle light translucent overlay to ensure play button contrast without heavy black bands */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300"></div>

          {/* Central Frosted Glassmorphism Play Button */}
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-3 rounded-full bg-white/20 blur-md group-hover:bg-white/30 transition-all duration-300"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-lg border border-white/50 text-white flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-0.5 drop-shadow-md" />
              </div>
            </div>
            {title && (
              <div className="text-center px-4 max-w-sm">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md block font-sans">
                  {title}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Click-to-Play/Pause overlay when active */}
      {hasStarted && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-10 cursor-pointer"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {!isPlaying && !isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs transition-opacity">
              <div className="w-14 h-14 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 shadow-lg">
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </div>
            </div>
          )}

          {isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-10 h-10 border-3 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          CLEAN PROGRESS BAR & MINIMAL CONTROLS (Zero YouTube parameters/logos)
          ===================================================================== */}
      {hasStarted && (
        <div 
          className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 px-3 sm:px-4 pb-2.5 pt-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent ${
            showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {/* Scrubbable Hit Area with 1.5px Visual Progress Bar */}
          <div 
            ref={progressBarRef}
            onClick={handleSeek}
            className="group/bar relative w-full py-1.5 cursor-pointer mb-2 flex items-center"
          >
            <div className="w-full h-[1.5px] bg-white/30 relative overflow-visible">
              <div 
                className="h-[1.5px] bg-gradient-to-r from-amber-400 to-[#e65100] relative"
                style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-sm ring-1 ring-amber-400 scale-0 group-hover/bar:scale-100 transition-transform"></div>
              </div>
            </div>
          </div>

          {/* Minimal Controls Row */}
          <div className="flex items-center justify-between text-white text-[11px] sm:text-xs">
            <div className="flex items-center gap-2.5">
              <button
                onClick={togglePlay}
                className="hover:text-amber-300 transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={handleReplay}
                className="hover:text-amber-300 transition-colors cursor-pointer"
                title="Replay from start"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <span className="font-sans font-medium text-slate-200">
                {formatTime(currentTime)} <span className="text-white/40">/</span> {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={toggleMute}
                className="hover:text-amber-300 transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleFullscreen}
                className="hover:text-amber-300 transition-colors cursor-pointer"
                aria-label="Fullscreen"
              >
                <Maximize className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
