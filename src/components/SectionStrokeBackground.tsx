import React from "react";

interface SectionStrokeProps {
  variant?: "waves" | "orbit" | "topography" | "cta-glow" | "flow-connect";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "full";
  opacity?: number;
  overflow?: boolean;
}

export default function SectionStrokeBackground({
  variant = "waves",
  position = "full",
  opacity = 0.25,
  overflow = true,
}: SectionStrokeProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: overflow ? "visible" : "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* 1. FLOWING MULTI-LAYERED WAVES (Faint & Subtle) */}
      {variant === "waves" && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", opacity }}
        >
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
              <stop offset="35%" stopColor="#00DBB7" stopOpacity="0.32" />
              <stop offset="70%" stopColor="#00B698" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#00DBB7" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B698" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#00DBB7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00B698" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Flowing Ribbon 1 */}
          <path
            d="M-80 -40 C 260 120, 520 -60, 780 80 C 1040 220, 1280 40, 1540 160"
            stroke="url(#wave-grad-1)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-80 -15 C 260 145, 520 -35, 780 105 C 1040 245, 1280 65, 1540 185"
            stroke="url(#wave-grad-1)"
            strokeWidth="1"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M-80 10 C 260 170, 520 -10, 780 130 C 1040 270, 1280 90, 1540 210"
            stroke="url(#wave-grad-1)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Flowing Ribbon 2 */}
          <path
            d="M-100 440 C 240 320, 500 540, 760 420 C 1020 300, 1260 480, 1560 380"
            stroke="url(#wave-grad-2)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-100 465 C 240 345, 500 565, 760 445 C 1020 325, 1260 505, 1560 405"
            stroke="url(#wave-grad-2)"
            strokeWidth="1"
            strokeDasharray="8 6"
            fill="none"
          />
          <path
            d="M-100 490 C 240 370, 500 590, 760 470 C 1020 350, 1260 530, 1560 430"
            stroke="url(#wave-grad-2)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      )}

      {/* 2. ORBITAL CONCENTRIC ARCS (Faint & Subtle) */}
      {variant === "orbit" && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", opacity }}
        >
          <defs>
            <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#00DBB7" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#00B698" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Left sweeping orbital loop */}
          <ellipse
            cx="140"
            cy="300"
            rx="320"
            ry="200"
            transform="rotate(-20 140 300)"
            stroke="url(#orbit-grad-1)"
            strokeWidth="1.1"
            fill="none"
          />
          <ellipse
            cx="140"
            cy="300"
            rx="420"
            ry="270"
            transform="rotate(-20 140 300)"
            stroke="url(#orbit-grad-1)"
            strokeWidth="0.9"
            strokeDasharray="8 8"
            fill="none"
          />
          <ellipse
            cx="140"
            cy="300"
            rx="520"
            ry="340"
            transform="rotate(-20 140 300)"
            stroke="url(#orbit-grad-1)"
            strokeWidth="0.9"
            fill="none"
          />

          {/* Right sweeping counter-orbital loop */}
          <ellipse
            cx="1320"
            cy="320"
            rx="340"
            ry="220"
            transform="rotate(25 1320 320)"
            stroke="url(#orbit-grad-1)"
            strokeWidth="1.1"
            fill="none"
          />
          <ellipse
            cx="1320"
            cy="320"
            rx="450"
            ry="290"
            transform="rotate(25 1320 320)"
            stroke="url(#orbit-grad-1)"
            strokeWidth="0.9"
            strokeDasharray="6 10"
            fill="none"
          />

          {/* Diagonal connecting transmission path */}
          <path
            d="M-50 150 C 400 350, 900 180, 1500 450"
            stroke="url(#orbit-grad-1)"
            strokeWidth="1.1"
            fill="none"
          />
          <path
            d="M-50 175 C 400 375, 900 205, 1500 475"
            stroke="url(#orbit-grad-1)"
            strokeWidth="0.9"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      )}

      {/* 3. TOPOGRAPHY & HARMONIC CONTOURS (Faint & Subtle) */}
      {variant === "topography" && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", opacity }}
        >
          <defs>
            <linearGradient id="topo-grad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
              <stop offset="30%" stopColor="#00DBB7" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#00B698" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#00DBB7" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Multi-layered topographic rings */}
          <path
            d="M-80 120 Q 360 40, 720 220 T 1520 100"
            stroke="url(#topo-grad)"
            strokeWidth="1.1"
            fill="none"
          />
          <path
            d="M-80 160 Q 360 80, 720 260 T 1520 140"
            stroke="url(#topo-grad)"
            strokeWidth="0.9"
            strokeDasharray="8 6"
            fill="none"
          />
          <path
            d="M-80 200 Q 360 120, 720 300 T 1520 180"
            stroke="url(#topo-grad)"
            strokeWidth="1.1"
            fill="none"
          />
          <path
            d="M-80 380 Q 420 520, 800 360 T 1520 460"
            stroke="url(#topo-grad)"
            strokeWidth="1.1"
            fill="none"
          />
          <path
            d="M-80 420 Q 420 560, 800 400 T 1520 500"
            stroke="url(#topo-grad)"
            strokeWidth="0.9"
            strokeDasharray="6 8"
            fill="none"
          />
        </svg>
      )}

      {/* 4. CTA DARK GLOW STROKES (Faint on Dark) */}
      {variant === "cta-glow" && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", opacity: opacity * 1.1 }}
        >
          <defs>
            <linearGradient id="neon-stroke-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#00DBB7" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#00B698" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="neon-stroke-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B698" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#00DBB7" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#00B698" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Central expanding energetic arcs */}
          <ellipse
            cx="720"
            cy="250"
            rx="640"
            ry="220"
            stroke="url(#neon-stroke-1)"
            strokeWidth="1.3"
            fill="none"
          />
          <ellipse
            cx="720"
            cy="250"
            rx="820"
            ry="300"
            stroke="url(#neon-stroke-1)"
            strokeWidth="1"
            strokeDasharray="10 8"
            fill="none"
          />
          <ellipse
            cx="720"
            cy="250"
            rx="1020"
            ry="390"
            stroke="url(#neon-stroke-1)"
            strokeWidth="0.9"
            fill="none"
          />

          {/* Sweeping diagonal cross streams */}
          <path
            d="M-100 80 C 350 350, 1090 150, 1540 420"
            stroke="url(#neon-stroke-2)"
            strokeWidth="1.1"
            fill="none"
          />
          <path
            d="M-100 420 C 350 150, 1090 350, 1540 80"
            stroke="url(#neon-stroke-2)"
            strokeWidth="1"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      )}

      {/* 5. CONNECTING FLOW RIBBON (Faint & Subtle) */}
      {variant === "flow-connect" && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", opacity }}
        >
          <defs>
            <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00DBB7" stopOpacity="0.02" />
              <stop offset="45%" stopColor="#00DBB7" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#00B698" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#00DBB7" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d="M-120 -50 C 300 250, 600 -100, 950 300 C 1300 700, 1200 200, 1560 650"
            stroke="url(#flow-grad)"
            strokeWidth="1.3"
            fill="none"
          />
          <path
            d="M-120 -20 C 300 280, 600 -70, 950 330 C 1300 730, 1200 230, 1560 680"
            stroke="url(#flow-grad)"
            strokeWidth="0.9"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M-120 10 C 300 310, 600 -40, 950 360 C 1300 760, 1200 260, 1560 710"
            stroke="url(#flow-grad)"
            strokeWidth="1.1"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}
