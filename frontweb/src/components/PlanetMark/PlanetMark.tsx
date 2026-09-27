import './PlanetMark.css'

export function PlanetMark() {
  const center = 100
  const lineY = center
  const specularX = center

  return (
    <div className="planet-mark-wrap">
      <svg
        className="planet-mark"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <radialGradient
            id="planet-fill"
            cx="38%"
            cy="32%"
            r="62%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="var(--planet-highlight)" />
            <stop offset="35%" stopColor="var(--planet-lit)" />
            <stop offset="72%" stopColor="var(--planet-mid)" />
            <stop offset="100%" stopColor="var(--planet-shadow)" />
          </radialGradient>

          <radialGradient id="halo-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor="rgba(140, 175, 230, 0)" />
            <stop offset="88%" stopColor="rgba(140, 175, 230, 0.12)" />
            <stop offset="100%" stopColor="rgba(140, 175, 230, 0)" />
          </radialGradient>

          <linearGradient id="orbit-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--orbit-fade)" />
            <stop offset="18%" stopColor="rgba(200, 220, 255, 0.35)" />
            <stop offset="42%" stopColor="rgba(230, 240, 255, 0.75)" />
            <stop offset="50%" stopColor="var(--orbit-specular)" />
            <stop offset="58%" stopColor="rgba(230, 240, 255, 0.75)" />
            <stop offset="82%" stopColor="rgba(200, 220, 255, 0.35)" />
            <stop offset="100%" stopColor="var(--orbit-fade)" />
          </linearGradient>

          <radialGradient id="specular-flare" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--orbit-specular)" />
            <stop offset="35%" stopColor="rgba(255, 255, 255, 0.55)" />
            <stop offset="70%" stopColor="rgba(200, 220, 255, 0.12)" />
            <stop offset="100%" stopColor="rgba(200, 220, 255, 0)" />
          </radialGradient>

          <linearGradient id="anamorphic-flare" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="38%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.45)" />
            <stop offset="62%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          <filter id="orbit-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id="orbit-soft-blur"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feGaussianBlur stdDeviation="3" />
          </filter>

          <filter
            id="specular-blur"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="2.5" />
          </filter>

          <filter id="planet-depth" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="12"
              floodColor="#000"
              floodOpacity="0.55"
            />
          </filter>

          <clipPath id="sphere-clip">
            <circle cx={center} cy={center} r="52" />
          </clipPath>
        </defs>

        <circle className="planet-mark__halo" cx={center} cy={center} r="72" />

        <circle
          className="planet-mark__sphere"
          cx={center}
          cy={center}
          r="52"
          fill="url(#planet-fill)"
        />

        <g clipPath="url(#sphere-clip)">
          <ellipse
            className="planet-mark__anamorphic"
            cx={specularX}
            cy={lineY}
            rx="38"
            ry="4.5"
            fill="url(#anamorphic-flare)"
          />
        </g>

        <line
          className="planet-mark__orbit-glow"
          x1="28"
          y1={lineY}
          x2="172"
          y2={lineY}
        />
        <line
          className="planet-mark__orbit"
          x1="28"
          y1={lineY}
          x2="172"
          y2={lineY}
        />

        <ellipse
          className="planet-mark__specular-bloom"
          cx={specularX}
          cy={lineY}
          rx="14"
          ry="3.2"
          fill="url(#specular-flare)"
          filter="url(#specular-blur)"
        />
        <circle
          className="planet-mark__specular-core"
          cx={specularX}
          cy={lineY}
          r="2.8"
          fill="var(--orbit-specular)"
        />
      </svg>
    </div>
  )
}
