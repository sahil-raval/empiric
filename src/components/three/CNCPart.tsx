import React, { useRef, useEffect } from 'react';

const N = 32;          // cylinder panels
const R = 90;          // radius px
const H = 180;         // height px
const BORE_R = 28;     // bore radius

function panelBrightness(i: number): string {
  // Light from top-right (panel index 0 = front-right)
  const angle = (i / N) * Math.PI * 2;
  const light = Math.cos(angle - Math.PI * 0.25); // offset for top-right light
  // Brass palette: hue ~36
  const l = 38 + light * 24; // lightness 14–62
  const s = 72 - Math.abs(light) * 12;
  return `hsl(36,${s}%,${l}%)`;
}

// Hex groove detail - darker bands on the cylinder
function isGroove(i: number): boolean {
  // 6-sided hex shape approximated as alternating brighter/darker bands
  return i % Math.ceil(N / 6) === 0;
}

export default function CNCPart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const partRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const part = partRef.current;
    if (!part || !wrap) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouseRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      mouseRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    };

    const onMouseLeave = () => {
      mouseRef.current.tx = 0;
      mouseRef.current.ty = 0;
    };

    wrap.addEventListener('mousemove', onMouseMove);
    wrap.addEventListener('mouseleave', onMouseLeave);

    const tick = () => {
      angleRef.current = (angleRef.current + 0.3) % 360;
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.06;
      if (part) {
        part.style.transform = `rotateY(${angleRef.current}deg) rotateX(${-22 + mouseRef.current.y}deg) rotateZ(${mouseRef.current.x * 0.2}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap.removeEventListener('mousemove', onMouseMove);
      wrap.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const panelW = (2 * Math.PI * R) / N + 0.8;

  return (
    <div
      ref={wrapRef}
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: '700px', perspectiveOrigin: '50% 40%' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{
          width: 260, height: 260,
          background: 'radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse3d 4s ease-in-out infinite'
        }} />
      </div>

      {/* Ground shadow */}
      <div style={{
        position: 'absolute',
        bottom: '18%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 180,
        height: 24,
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      {/* 3D Part */}
      <div
        ref={partRef}
        style={{
          position: 'relative',
          width: R * 2,
          height: H,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Cylinder panels */}
        {Array.from({ length: N }, (_, i) => {
          const angle = (i / N) * 360;
          const groove = isGroove(i);
          const color = panelBrightness(i);
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: panelW,
                height: H,
                left: '50%',
                top: 0,
                marginLeft: -panelW / 2,
                background: groove
                  ? `linear-gradient(to bottom, hsl(36,60%,22%) 0%, hsl(36,65%,28%) 30%, hsl(36,60%,22%) 100%)`
                  : `linear-gradient(to bottom, ${color} 0%, hsl(36,68%,${28 + Math.abs(Math.cos((i / N) * Math.PI * 2)) * 18}%) 50%, ${color} 100%)`,
                transform: `rotateY(${angle}deg) translateZ(${R}px)`,
                transformOrigin: 'center',
                backfaceVisibility: 'hidden',
              }}
            />
          );
        })}

        {/* Threading grooves — thin rings around the cylinder */}
        {[0.15, 0.3, 0.45, 0.6, 0.75, 0.88].map((ratio, gi) => (
          <div key={gi} style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: `${ratio * 100}%`,
            height: 3,
            transformStyle: 'preserve-3d',
          }}>
            {Array.from({ length: N }, (_, i) => {
              const angle = (i / N) * 360;
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: panelW + 0.5,
                    height: 3,
                    left: '50%',
                    top: 0,
                    marginLeft: -panelW / 2,
                    background: 'rgba(0,0,0,0.35)',
                    transform: `rotateY(${angle}deg) translateZ(${R + 0.5}px)`,
                    transformOrigin: 'center',
                    backfaceVisibility: 'hidden',
                  }}
                />
              );
            })}
          </div>
        ))}

        {/* Top cap disc */}
        <div style={{
          position: 'absolute',
          width: R * 2,
          height: R * 2,
          borderRadius: '50%',
          left: 0,
          top: 0,
          marginTop: -R,
          background: 'radial-gradient(ellipse at 35% 35%, hsl(38,80%,72%) 0%, hsl(36,72%,54%) 40%, hsl(34,68%,38%) 100%)',
          transform: 'rotateX(90deg) translateZ(0px)',
          transformOrigin: 'center',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.25)',
        }}>
          {/* Bore hole on top */}
          <div style={{
            position: 'absolute',
            width: BORE_R * 2,
            height: BORE_R * 2,
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #1a1008 0%, #2d1c08 60%, #3d2810 100%)',
            boxShadow: 'inset 0 0 12px rgba(0,0,0,0.8)',
          }} />
          {/* Chamfer ring */}
          <div style={{
            position: 'absolute',
            width: R * 1.6,
            height: R * 1.6,
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(255,220,120,0.35)',
          }} />
          {/* Knurl marks */}
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * 360;
            const ax = 50 + 36 * Math.cos(a * Math.PI / 180);
            const ay = 50 + 36 * Math.sin(a * Math.PI / 180);
            return (
              <div key={i} style={{
                position: 'absolute',
                width: 4, height: 4,
                borderRadius: '50%',
                background: 'rgba(255,200,80,0.5)',
                left: `${ax}%`,
                top: `${ay}%`,
                transform: 'translate(-50%,-50%)',
              }} />
            );
          })}
        </div>

        {/* Bottom cap disc */}
        <div style={{
          position: 'absolute',
          width: R * 2,
          height: R * 2,
          borderRadius: '50%',
          left: 0,
          bottom: 0,
          marginBottom: -R,
          background: 'radial-gradient(ellipse, hsl(34,65%,32%) 0%, hsl(32,60%,22%) 100%)',
          transform: 'rotateX(-90deg) translateZ(0px)',
          transformOrigin: 'center',
        }}>
          <div style={{
            position: 'absolute',
            width: BORE_R * 2,
            height: BORE_R * 2,
            borderRadius: '50%',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#0d0804',
          }} />
        </div>
      </div>

      {/* Annotation lines */}
      <div style={{
        position: 'absolute',
        right: '12%',
        top: '20%',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: 0.6,
      }}>
        {['Ø18 BORE', 'M36×2.0', 'Ra 1.6', '±0.01'].map(label => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 20, height: 1, background: 'rgba(232,119,34,0.6)' }} />
            <span style={{ fontSize: 9, fontFamily: 'monospace', color: 'rgba(232,119,34,0.8)', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>{label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse3d {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
