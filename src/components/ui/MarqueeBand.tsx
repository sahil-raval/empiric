import React from 'react';

const ITEMS = [
  '±0.01mm TOLERANCE', 'BRASS MACHINING', 'STAINLESS STEEL', 'COPPER COMPONENTS',
  'LPDC DIE DESIGN', 'GDC DIE DESIGN', 'SOLIDWORKS', 'CREO', 'NX',
  'DFM / DFA', 'CNC TURNING', 'VMC MACHINING', 'REVERSE ENGINEERING',
  'VALUE ENGINEERING', 'INDUSTRIAL PACKAGING', 'JAMNAGAR, INDIA', 'EST. 2024',
];

interface MarqueeBandProps {
  bg?: string;
  textColor?: string;
  speed?: number;
  reverse?: boolean;
}

export default function MarqueeBand({
  bg = '#0d1520',
  textColor = 'rgba(255,255,255,0.35)',
  speed = 35,
  reverse = false,
}: MarqueeBandProps) {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-3.5 border-y border-white/5"
      style={{ background: bg }}
    >
      <div
        style={{
          display: 'flex',
          gap: 0,
          animation: `marquee${reverse ? 'Rev' : ''} ${speed}s linear infinite`,
          willChange: 'transform',
          width: 'max-content',
        }}
      >
        {repeated.map((item, i) => (
          <React.Fragment key={i}>
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: textColor,
              whiteSpace: 'nowrap',
              paddingLeft: 24,
              paddingRight: 24,
              fontFamily: 'Inter, sans-serif',
            }}>
              {item}
            </span>
            <span style={{ color: 'rgba(232,119,34,0.4)', fontSize: 10, lineHeight: 1, alignSelf: 'center' }}>·</span>
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes marqueeRev { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
