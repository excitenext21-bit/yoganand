import React from 'react';

// =========================================================================
// 1. HANDMADE ANIMATED ASHRAM SANCTUARY ICON ("Build & Support Ashrams")
// Artisan hand-sketched sanctuary dome with etched hatch lines, protective
// caring hands, flickering sacred diya flame & breathing blessing rays
// =========================================================================
export const AshramSanctuaryGraphic: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} overflow-visible select-none`}
  >
    <style>{`
      @keyframes handRayPulse {
        0%, 100% { opacity: 0.45; transform: scale(0.94); }
        50% { opacity: 1; transform: scale(1.06); }
      }
      @keyframes handFloatSlow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3.5px); }
      }
      @keyframes diyaFlameFlicker {
        0%, 100% { transform: scaleY(1) rotate(-2deg); opacity: 0.9; }
        50% { transform: scaleY(1.16) rotate(2deg); opacity: 1; }
      }
      @keyframes steamRise {
        0% { transform: translateY(3px) translateX(0px); opacity: 0.2; }
        50% { transform: translateY(-3px) translateX(1.5px); opacity: 0.95; }
        100% { transform: translateY(-8px) translateX(-1px); opacity: 0.15; }
      }
      @keyframes grainSway {
        0%, 100% { transform: rotate(-4deg); }
        50% { transform: rotate(4deg); }
      }
      @keyframes ecgDraw {
        0% { stroke-dashoffset: 120; opacity: 0.4; }
        50% { stroke-dashoffset: 0; opacity: 1; }
        100% { stroke-dashoffset: -120; opacity: 0.4; }
      }
      @keyframes heartBeatHand {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.08); }
        40% { transform: scale(0.98); }
        60% { transform: scale(1.05); }
      }
    `}</style>

    {/* Radiating Handmade Blessing Rays at Top */}
    <g style={{ transformOrigin: '50px 24px', animation: 'handRayPulse 3.2s ease-in-out infinite' }}>
      <path d="M50 7V13" stroke="#fde68a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M34 11L37.5 16" stroke="#fde68a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M66 11L62.5 16" stroke="#fde68a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22 21L27 24" stroke="white" strokeOpacity="0.75" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 21L73 24" stroke="white" strokeOpacity="0.75" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Main Hand-Sketched Ashram Temple Sanctuary (Gently Floating) */}
    <g style={{ animation: 'handFloatSlow 4s ease-in-out infinite' }}>
      {/* Kalash Finial */}
      <path
        d="M50 15C48.5 17.5 48.5 19.5 50 21C51.5 19.5 51.5 17.5 50 15Z"
        stroke="#fde68a"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hand-drawn Dome with organic double-sketch contour */}
      <path
        d="M34 34C34 24.5 41 20.5 50 20.5C59 20.5 66 24.5 66 34"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M37.5 33C38 26.5 43 23 50 23"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />

      {/* Hand-Sketched Roof Eaves with Artisan Hatching Lines */}
      <path
        d="M19 45L50 26L81 45"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 46.5L50 30L77 46.5"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Sanctuary Walls with Handmade Etched Shading Strokes */}
      <path
        d="M26 45.5V74H74V45.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left Wall Etched Hatching */}
      <path d="M29 50H34M29 54H33M29 58H35M29 62H32" stroke="white" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round" />
      {/* Right Wall Etched Hatching */}
      <path d="M66 50H71M67 54H71M65 58H71M68 62H71" stroke="white" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round" />

      {/* Arched Sanctuary Doorway */}
      <path
        d="M40 74V55C40 49.5 44.5 46 50 46C55.5 46 60 49.5 60 55V74"
        stroke="#fde68a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Animated Sacred Diya / Heart Flame Inside Sanctuary */}
      <g style={{ transformOrigin: '50px 63px', animation: 'diyaFlameFlicker 2.2s ease-in-out infinite' }}>
        <path
          d="M50 53C47.5 57 46 59.5 46 62C46 64.2 47.8 66 50 66C52.2 66 54 64.2 54 62C54 59.5 52.5 57 50 53Z"
          stroke="#fde68a"
          strokeWidth="1.3"
          fill="rgba(253, 230, 138, 0.2)"
        />
      </g>

      {/* Hand-Sketched Embracing Base / Caring Hands Curve */}
      <path
        d="M15 74.5C28 73.5 72 73.5 85 74.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 79C35 81.5 65 81.5 78 79"
        stroke="white"
        strokeOpacity="0.65"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />
    </g>
  </svg>
);

// =========================================================================
// 2. HANDMADE ANIMATED SUSTENANCE & NOURISHMENT ICON ("Provide Essential Sustenance")
// Artisan hand-sketched Annapurna vessel with etched shading lines, rising
// warm steam curls, and gently swaying golden wheat/grain stalks
// =========================================================================
export const SustenanceNourishmentGraphic: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} overflow-visible select-none`}
  >
    {/* Rising Hand-Sketched Steam Curls */}
    <path
      d="M37 29C35 25 39 21 37 16"
      stroke="#fde68a"
      strokeWidth="1.4"
      strokeLinecap="round"
      style={{ animation: 'steamRise 2.8s ease-in-out infinite' }}
    />
    <path
      d="M50 26C48 21 52 17 50 11"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={{ animation: 'steamRise 2.8s ease-in-out infinite 0.7s' }}
    />
    <path
      d="M63 29C61 25 65 21 63 16"
      stroke="#fde68a"
      strokeWidth="1.4"
      strokeLinecap="round"
      style={{ animation: 'steamRise 2.8s ease-in-out infinite 1.4s' }}
    />

    {/* Swaying Hand-Drawn Grain / Tulsi Leaves on Left & Right */}
    <g style={{ transformOrigin: '24px 66px', animation: 'grainSway 3.5s ease-in-out infinite' }}>
      <path d="M24 66C17 56 15 44 19 33" stroke="#fde68a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M17 48C13 46 13 42 17 42" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M18 39C14 37 15 33 19 34" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round" />
    </g>
    <g style={{ transformOrigin: '76px 66px', animation: 'grainSway 3.5s ease-in-out infinite 0.5s' }}>
      <path d="M76 66C83 56 85 44 81 33" stroke="#fde68a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M83 48C87 46 87 42 83 42" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M82 39C86 37 85 33 81 34" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Main Hand-Sketched Annapurna Bowl & Caring Hands */}
    <g style={{ animation: 'handFloatSlow 4.2s ease-in-out infinite' }}>
      {/* Warm Food / Rice Mound inside Rim */}
      <path
        d="M27 42C32 34 41 32 50 32C59 32 68 34 73 42"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeDasharray="3 2"
      />

      {/* Bowl Rim */}
      <ellipse
        cx="50"
        cy="43"
        rx="26"
        ry="6.5"
        stroke="white"
        strokeWidth="1.6"
      />

      {/* Hand-Sketched Bowl Body with Artisan Hatching Strokes */}
      <path
        d="M24 43C24 63 34 74 50 74C66 74 76 63 76 43"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Handmade Etched Shading Curves inside Bowl */}
      <path
        d="M29 50C31 61 38 68 48 69"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M33 53C35 60 40 64 46 65"
        stroke="white"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 2.5"
      />
      <path
        d="M65 52L69 50M63 57L68 55M60 62L65 60"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* Hand-Drawn Cupped Offering Base */}
      <path
        d="M34 78C42 81 58 81 66 78"
        stroke="#fde68a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M28 83C40 86.5 60 86.5 72 83"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="3 2.5"
      />
    </g>
  </svg>
);

// =========================================================================
// 3. HANDMADE ANIMATED HEALTHCARE & SURGERIES ICON ("Healthcare & Surgeries")
// Artisan hand-sketched healing hands & heart-cross with etched hatching,
// live animated ECG pulse wave, and glowing vision rays
// =========================================================================
export const HealthcareSurgeriesGraphic: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} overflow-visible select-none`}
  >
    {/* Radiating Handmade Healing Sparkles & Rays */}
    <g style={{ transformOrigin: '50px 44px', animation: 'handRayPulse 3s ease-in-out infinite' }}>
      <path d="M50 10V16" stroke="#fde68a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M27 16L31 21" stroke="white" strokeOpacity="0.8" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M73 16L69 21" stroke="white" strokeOpacity="0.8" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 34L22 36" stroke="#fde68a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M84 34L78 36" stroke="#fde68a" strokeWidth="1.3" strokeLinecap="round" />
    </g>

    {/* Pulsing Handmade Heart & Medical Cross Centerpiece */}
    <g style={{ transformOrigin: '50px 43px', animation: 'heartBeatHand 2.6s ease-in-out infinite' }}>
      {/* Hand-Sketched Heart Contour */}
      <path
        d="M50 64C50 64 26 49 26 33.5C26 25.5 32.5 20 40 20C44.8 20 48.2 22.5 50 26C51.8 22.5 55.2 20 60 20C67.5 20 74 25.5 74 33.5C74 49 50 64 50 64Z"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handmade Etched Hatching inside Heart */}
      <path
        d="M31 31C31 27 34.5 24 39 24"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M64 44L68 41M60 49L65 46M56 54L61 51"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* Sacred Medical Cross inside Heart */}
      <path
        d="M46.5 30H53.5V36.5H60V43.5H53.5V50H46.5V43.5H40V36.5H46.5V30Z"
        stroke="#fde68a"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="rgba(253, 230, 138, 0.14)"
      />
    </g>

    {/* Live Flowing ECG Heartbeat Wave Across Bottom */}
    <path
      d="M14 75H33L38 66L44 83L51 61L56 78L61 72L65 75H86"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 75H33L38 66L44 83L51 61L56 78L61 72L65 75H86"
      stroke="#fde68a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="120"
      style={{ animation: 'ecgDraw 3.2s linear infinite' }}
    />
  </svg>
);

