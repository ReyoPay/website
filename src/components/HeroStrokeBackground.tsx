import React from "react";

export default function HeroStrokeBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.26,
        }}
      >
        <defs>
          {/* Faint Theme Gradients along strokes */}
          <linearGradient id="stroke-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
            <stop offset="40%" stopColor="#00DBB7" stopOpacity="0.32" />
            <stop offset="75%" stopColor="#00B698" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00DBB7" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="stroke-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B698" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#00DBB7" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00B698" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="stroke-grad-accent" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#00DBB7" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#00B698" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="grid-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#00DBB7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00DBB7" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Abstract Architectural Perspective Lines (Faint Strokes) */}
        <g stroke="url(#grid-stroke)" strokeWidth="0.9">
          <line x1="120" y1="0" x2="120" y2="700" />
          <line x1="360" y1="0" x2="360" y2="700" strokeDasharray="6 6" />
          <line x1="720" y1="0" x2="720" y2="700" strokeDasharray="4 8" strokeOpacity="0.3" />
          <line x1="1080" y1="0" x2="1080" y2="700" strokeDasharray="6 6" />
          <line x1="1320" y1="0" x2="1320" y2="700" />
          
          <line x1="0" y1="180" x2="1440" y2="180" strokeDasharray="6 6" />
          <line x1="0" y1="360" x2="1440" y2="360" strokeDasharray="4 8" />
          <line x1="0" y1="540" x2="1440" y2="540" strokeDasharray="6 6" />
        </g>

        {/* Dynamic Abstract Flowing Wave Contours (Faint Strokes) */}
        {/* Wave 1: Flowing lower ribbon */}
        <path
          d="M-100 520 C 250 420, 480 620, 720 540 C 960 460, 1180 580, 1540 480"
          stroke="url(#stroke-grad-1)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-100 540 C 250 440, 480 640, 720 560 C 960 480, 1180 600, 1540 500"
          stroke="url(#stroke-grad-1)"
          strokeWidth="0.9"
          strokeDasharray="8 6"
          fill="none"
        />
        <path
          d="M-100 560 C 250 460, 480 660, 720 580 C 960 500, 1180 620, 1540 520"
          stroke="url(#stroke-grad-1)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Wave 2: Sweeping upper crest across center */}
        <path
          d="M-80 220 C 300 360, 520 120, 800 240 C 1080 360, 1260 160, 1520 280"
          stroke="url(#stroke-grad-2)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-80 245 C 300 385, 520 145, 800 265 C 1080 385, 1260 185, 1520 305"
          stroke="url(#stroke-grad-2)"
          strokeWidth="0.9"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M-80 270 C 300 410, 520 170, 800 290 C 1080 410, 1260 210, 1520 330"
          stroke="url(#stroke-grad-2)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Concentric Floating Orbital Rings in Background (Faint Strokes) */}
        {/* Left Orbital Group */}
        <ellipse
          cx="220"
          cy="320"
          rx="180"
          ry="110"
          transform="rotate(-25 220 320)"
          stroke="url(#stroke-grad-1)"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="220"
          cy="320"
          rx="240"
          ry="150"
          transform="rotate(-25 220 320)"
          stroke="url(#stroke-grad-1)"
          strokeWidth="0.8"
          strokeDasharray="6 8"
          fill="none"
        />
        <ellipse
          cx="220"
          cy="320"
          rx="300"
          ry="190"
          transform="rotate(-25 220 320)"
          stroke="url(#stroke-grad-1)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Right Orbital Group */}
        <ellipse
          cx="1240"
          cy="340"
          rx="210"
          ry="130"
          transform="rotate(30 1240 340)"
          stroke="url(#stroke-grad-2)"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="1240"
          cy="340"
          rx="280"
          ry="170"
          transform="rotate(30 1240 340)"
          stroke="url(#stroke-grad-2)"
          strokeWidth="0.8"
          strokeDasharray="8 8"
          fill="none"
        />
        <ellipse
          cx="1240"
          cy="340"
          rx="350"
          ry="220"
          transform="rotate(30 1240 340)"
          stroke="url(#stroke-grad-2)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Central Interlocking Harmonic Rings (Faint Strokes) */}
        <circle
          cx="720"
          cy="320"
          r="160"
          stroke="url(#stroke-grad-accent)"
          strokeWidth="1"
          strokeDasharray="10 8"
          fill="none"
        />
        <circle
          cx="720"
          cy="320"
          r="260"
          stroke="url(#stroke-grad-accent)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="720"
          cy="320"
          r="380"
          stroke="url(#stroke-grad-accent)"
          strokeWidth="0.8"
          strokeDasharray="6 12"
          fill="none"
        />

        {/* Topological Cross-Hatch Nodes (Faint Strokes) */}
        <g stroke="#00DBB7" strokeWidth="0.9" strokeOpacity="0.3">
          <path d="M710 320 L730 320 M720 310 L720 330" />
          <path d="M210 320 L230 320 M220 310 L220 330" />
          <path d="M1230 340 L1250 340 M1240 330 L1240 350" />
          <path d="M470 190 L490 190 M480 180 L480 200" />
          <path d="M950 440 L970 440 M960 430 L960 450" />
        </g>
      </svg>
    </div>
  );
}
