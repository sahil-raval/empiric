import React from 'react';

interface IsometricPartProps {
  variant?: 'connector' | 'valve' | 'fitting';
  size?: number;
  animated?: boolean;
}

export default function IsometricPart({ variant = 'connector', size = 320, animated = true }: IsometricPartProps) {
  const s = size;

  // Connector: a hex flange fitting (common electrical gland body)
  if (variant === 'connector') {
    return (
      <svg
        viewBox="0 0 320 380"
        width={s}
        height={s * 1.19}
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Brass gradient - top face */}
          <linearGradient id="brassTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d07a" />
            <stop offset="40%" stopColor="#d4a045" />
            <stop offset="100%" stopColor="#b07825" />
          </linearGradient>
          {/* Brass gradient - right face */}
          <linearGradient id="brassRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8952e" />
            <stop offset="100%" stopColor="#8a6018" />
          </linearGradient>
          {/* Brass gradient - left face */}
          <linearGradient id="brassLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a87a22" />
            <stop offset="100%" stopColor="#6a4a10" />
          </linearGradient>
          {/* Bore gradient */}
          <radialGradient id="bore" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#1a1008" />
            <stop offset="100%" stopColor="#0a0804" />
          </radialGradient>
          {/* Annotation line */}
          <marker id="arr" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L0,4 L4,2 Z" fill="rgba(232,119,34,0.7)" />
          </marker>
        </defs>

        <g style={animated ? { animation: 'floatPart 6s ease-in-out infinite' } : {}}>

          {/* ── FLANGE BASE (hex wider section) ── */}
          {/* Left face of flange */}
          <polygon points="68,248 68,282 160,332 160,298" fill="url(#brassLeft)" />
          {/* Right face of flange */}
          <polygon points="252,248 252,282 160,332 160,298" fill="url(#brassRight)" />
          {/* Top face of flange (hex) */}
          <polygon points="160,218 252,248 160,298 68,248" fill="url(#brassTop)" opacity="0.95" />
          {/* Highlight edge on flange top */}
          <polyline points="68,248 160,218 252,248" fill="none" stroke="rgba(255,230,140,0.5)" strokeWidth="1.5" />

          {/* ── BODY (main cylindrical hex section) ── */}
          {/* Left face body */}
          <polygon points="100,138 100,248 68,248 68,168" fill="url(#brassLeft)" />
          {/* Right face body */}
          <polygon points="220,138 220,248 252,248 252,168" fill="url(#brassRight)" />
          {/* Back-left face */}
          <polygon points="100,138 68,168 68,248 100,248" fill="url(#brassLeft)" opacity="0.7" />
          {/* Back-right face */}
          <polygon points="220,138 252,168 252,248 220,248" fill="url(#brassRight)" opacity="0.8" />
          {/* Top face of body (hex) */}
          <polygon points="160,108 220,138 220,248 160,278 100,248 100,138" fill="url(#brassTop)" />
          {/* Top hex highlight */}
          <polyline points="100,138 160,108 220,138" fill="none" stroke="rgba(255,230,140,0.6)" strokeWidth="1.5" />

          {/* Threading grooves on right face */}
          {[0, 20, 40, 60, 80, 100].map((offset, i) => (
            <line key={i}
              x1={220} y1={168 + offset}
              x2={252} y2={188 + offset}
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="2"
            />
          ))}

          {/* Threading grooves on left face */}
          {[0, 20, 40, 60, 80, 100].map((offset, i) => (
            <line key={i}
              x1={100} y1={168 + offset}
              x2={68} y2={188 + offset}
              stroke="rgba(0,0,0,0.20)"
              strokeWidth="2"
            />
          ))}

          {/* ── COLLAR / TOP SECTION ── */}
          {/* Left face collar */}
          <polygon points="120,88 120,138 100,138 100,98" fill="url(#brassLeft)" />
          {/* Right face collar */}
          <polygon points="200,88 200,138 220,138 220,98" fill="url(#brassRight)" />
          {/* Top face collar */}
          <polygon points="160,68 200,88 200,138 160,118 120,138 120,88" fill="url(#brassTop)" />
          {/* Collar top highlight */}
          <polyline points="120,88 160,68 200,88" fill="none" stroke="rgba(255,230,140,0.7)" strokeWidth="1.5" />

          {/* ── BORE HOLE (top face) ── */}
          <ellipse cx="160" cy="88" rx="30" ry="18" fill="url(#bore)" />
          <ellipse cx="160" cy="86" rx="28" ry="16" fill="none" stroke="rgba(255,180,60,0.2)" strokeWidth="1" />

          {/* Chamfer marks on top */}
          <ellipse cx="160" cy="88" rx="42" ry="26" fill="none" stroke="rgba(255,200,80,0.15)" strokeWidth="1" />

          {/* ── DIMENSION ANNOTATIONS ── */}
          <g opacity="0.75">
            {/* Height dimension */}
            <line x1="268" y1="138" x2="268" y2="248" stroke="rgba(232,119,34,0.6)" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="220" y1="138" x2="272" y2="138" stroke="rgba(232,119,34,0.4)" strokeWidth="0.6" />
            <line x1="252" y1="248" x2="272" y2="248" stroke="rgba(232,119,34,0.4)" strokeWidth="0.6" />
            <text x="276" y="196" fontSize="9" fill="rgba(232,119,34,0.85)" fontFamily="monospace" letterSpacing="0.05em">H60</text>

            {/* Width dimension */}
            <line x1="100" y1="268" x2="220" y2="268" stroke="rgba(232,119,34,0.5)" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="100" y1="248" x2="100" y2="272" stroke="rgba(232,119,34,0.4)" strokeWidth="0.6" />
            <line x1="220" y1="248" x2="220" y2="272" stroke="rgba(232,119,34,0.4)" strokeWidth="0.6" />
            <text x="148" y="282" fontSize="9" fill="rgba(232,119,34,0.85)" fontFamily="monospace">Ø36</text>

            {/* Ra callout */}
            <line x1="272" y1="98" x2="296" y2="80" stroke="rgba(232,119,34,0.5)" strokeWidth="0.8" />
            <text x="298" y="78" fontSize="8" fill="rgba(232,119,34,0.8)" fontFamily="monospace">Ra 1.6</text>
          </g>

          {/* ── MATERIAL TAG ── */}
          <g opacity="0.7">
            <rect x="22" y="160" width="56" height="22" fill="rgba(13,21,32,0.7)" rx="1" />
            <text x="50" y="175" fontSize="8" fill="#E87722" fontFamily="monospace" textAnchor="middle" letterSpacing="0.08em">BRASS</text>
          </g>

        </g>

        <style>{`
          @keyframes floatPart {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </svg>
    );
  }

  // Valve variant: spindle / valve body
  if (variant === 'valve') {
    return (
      <svg viewBox="0 0 280 360" width={s} height={s * 1.28}>
        <defs>
          <linearGradient id="stTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8e8f0" />
            <stop offset="50%" stopColor="#b8c0cc" />
            <stop offset="100%" stopColor="#8090a0" />
          </linearGradient>
          <linearGradient id="stRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a0aab8" />
            <stop offset="100%" stopColor="#607080" />
          </linearGradient>
          <linearGradient id="stLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7888a0" />
            <stop offset="100%" stopColor="#4a5868" />
          </linearGradient>
        </defs>
        <g style={animated ? { animation: 'floatPart 5s ease-in-out infinite' } : {}}>
          {/* Spindle body */}
          <polygon points="140,50 180,72 180,290 140,312 100,290 100,72" fill="url(#stTop)" />
          <polygon points="180,72 210,88 210,306 180,290" fill="url(#stRight)" />
          <polygon points="100,72 70,88 70,306 100,290" fill="url(#stLeft)" />
          {/* Thread detail */}
          {[0, 25, 50, 75, 100, 125, 150, 175, 200].map((y, i) => (
            <g key={i}>
              <line x1={100} y1={90 + y} x2={70} y2={106 + y} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
              <line x1={180} y1={90 + y} x2={210} y2={106 + y} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
            </g>
          ))}
          {/* Head hex */}
          <polygon points="140,30 172,48 172,72 140,90 108,72 108,48" fill="url(#stTop)" opacity="1.1" />
          <polyline points="108,48 140,30 172,48" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
          {/* Seating surface */}
          <ellipse cx="140" cy="290" rx="40" ry="12" fill="url(#stTop)" opacity="0.6" />

          {/* Annotations */}
          <g opacity="0.7">
            <line x1="218" y1="72" x2="218" y2="290" stroke="rgba(232,119,34,0.5)" strokeWidth="0.8" strokeDasharray="3,3" />
            <text x="222" y="188" fontSize="9" fill="rgba(232,119,34,0.85)" fontFamily="monospace">218L</text>
            <text x="32" y="188" fontSize="8" fill="rgba(232,119,34,0.7)" fontFamily="monospace">M20×1.5</text>
          </g>
          <g opacity="0.65">
            <rect x="18" y="90" width="58" height="20" fill="rgba(13,21,32,0.7)" rx="1" />
            <text x="47" y="104" fontSize="8" fill="#E87722" fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">SS 316</text>
          </g>
        </g>
        <style>{`@keyframes floatPart { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`}</style>
      </svg>
    );
  }

  // Fitting: cable gland
  return (
    <svg viewBox="0 0 300 340" width={s} height={s * 1.13}>
      <defs>
        <linearGradient id="fitTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0c860" />
          <stop offset="60%" stopColor="#c89030" />
          <stop offset="100%" stopColor="#906018" />
        </linearGradient>
        <linearGradient id="fitR" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b07820" />
          <stop offset="100%" stopColor="#704808" />
        </linearGradient>
        <linearGradient id="fitL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#886018" />
          <stop offset="100%" stopColor="#503808" />
        </linearGradient>
      </defs>
      <g style={animated ? { animation: 'floatPart 7s ease-in-out infinite' } : {}}>
        {/* Lower body */}
        <polygon points="150,210 196,234 196,300 150,276 104,300 104,234" fill="url(#fitTop)" />
        <polygon points="196,234 224,248 224,314 196,300" fill="url(#fitR)" />
        <polygon points="104,234 76,248 76,314 104,300" fill="url(#fitL)" />
        {/* Sealing nut (hex) */}
        <polygon points="150,170 196,194 196,234 150,210 104,234 104,194" fill="url(#fitTop)" opacity="1.05" />
        <polygon points="196,194 224,208 224,248 196,234" fill="url(#fitR)" opacity="0.9" />
        <polygon points="104,194 76,208 76,248 104,234" fill="url(#fitL)" opacity="0.9" />
        {/* Top hex */}
        <polygon points="150,138 196,162 196,194 150,170 104,194 104,162" fill="url(#fitTop)" />
        <polyline points="104,162 150,138 196,162" stroke="rgba(255,220,100,0.6)" strokeWidth="1.5" fill="none" />
        <polygon points="196,162 224,176 224,208 196,194" fill="url(#fitR)" />
        <polygon points="104,162 76,176 76,208 104,194" fill="url(#fitL)" />
        {/* Inlet nozzle */}
        <polygon points="150,90 174,102 174,138 150,126 126,138 126,102" fill="url(#fitTop)" opacity="0.9" />
        <polygon points="174,102 192,112 192,148 174,138" fill="url(#fitR)" />
        <polygon points="126,102 108,112 108,148 126,138" fill="url(#fitL)" />
        <polyline points="126,102 150,90 174,102" stroke="rgba(255,220,100,0.65)" strokeWidth="1.5" fill="none" />
        {/* Bore */}
        <ellipse cx="150" cy="100" rx="20" ry="12" fill="#0a0806" />

        {/* Threading detail */}
        {[0, 18, 36].map((offset, i) => (
          <g key={i}>
            <line x1={196} y1={168 + offset} x2={224} y2={182 + offset} stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
            <line x1={104} y1={168 + offset} x2={76} y2={182 + offset} stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" />
          </g>
        ))}

        {/* Annotations */}
        <g opacity="0.72">
          <line x1="232" y1="162" x2="232" y2="234" stroke="rgba(232,119,34,0.5)" strokeWidth="0.8" strokeDasharray="3,3" />
          <text x="236" y="202" fontSize="9" fill="rgba(232,119,34,0.85)" fontFamily="monospace">PG16</text>
          <text x="236" y="216" fontSize="8" fill="rgba(232,119,34,0.65)" fontFamily="monospace">IP68</text>
        </g>
        <g opacity="0.68">
          <rect x="20" y="180" width="58" height="20" fill="rgba(13,21,32,0.75)" rx="1" />
          <text x="49" y="194" fontSize="8" fill="#E87722" fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">BRASS</text>
        </g>
      </g>
      <style>{`@keyframes floatPart { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`}</style>
    </svg>
  );
}
