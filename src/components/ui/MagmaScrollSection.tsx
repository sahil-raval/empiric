import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Phase {
  number: string;
  headline: string;
  subline: string;
  detail: string;
  image: string;
}

const PHASES: Phase[] = [
  {
    number: '01',
    headline: 'Material Selection',
    subline: 'Raw Brass Bar Stock',
    detail: 'Premium brass rods sourced from certified suppliers. Alloy composition verified for machinability, corrosion resistance, and electrical conductivity.',
    image: '/brass-bolt-1.png',
  },
  {
    number: '02',
    headline: 'CNC Machining',
    subline: 'Precision Turning',
    detail: 'Multi-axis CNC lathes with live tooling. Threads cut to ±0.01mm accuracy. Hexagonal heads milled with precise geometry.',
    image: '/brass-bolt-2.png',
  },
  {
    number: '03',
    headline: 'Thread Inspection',
    subline: 'Precision Verification',
    detail: 'Helical thread profiles verified with calibrated gauges. Surface roughness checked at 0.8 Ra. Every thread pitch is within spec.',
    image: '/brass-bolt-3.png',
  },
  {
    number: '04',
    headline: 'Quality Control',
    subline: 'Dimensional Accuracy',
    detail: 'Digital calipers and micrometers measure every dimension. Tolerance bands confirmed at ±0.01mm. Inspection records archived.',
    image: '/brass-quality.png',
  },
  {
    number: '05',
    headline: 'Production Ready',
    subline: 'Component Delivery',
    detail: 'Components cleaned, surface-finished, and packaged for direct integration into your product line. Batch traceability included.',
    image: '/brass-collection.png',
  },
];

export function MagmaScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const phaseEls    = Array.from(container.querySelectorAll<HTMLElement>('.magma-phase'));
    const imageEls    = Array.from(container.querySelectorAll<HTMLElement>('.magma-image'));
    const dotEls      = Array.from(container.querySelectorAll<HTMLElement>('.magma-dot'));
    const lineFill    = container.querySelector<HTMLElement>('.magma-line-fill');
    const counterEl   = container.querySelector<HTMLElement>('.magma-counter');
    const progressBar = container.querySelector<HTMLElement>('.magma-progress');

    function applyActive(index: number) {
      phaseEls.forEach((el, i) => {
        el.style.opacity     = i === index ? '1' : '0';
        el.style.transform   = i === index ? 'translateY(0px)' : 'translateY(30px)';
      });
      imageEls.forEach((el, i) => {
        el.style.opacity     = i === index ? '1' : '0';
        el.style.transform   = i === index ? 'scale(1)' : 'scale(0.95)';
      });
      dotEls.forEach((el, i) => {
        el.style.transform        = i === index ? 'scale(1.5)' : 'scale(1)';
        el.style.backgroundColor  = i === index ? '#E87722' : 'rgba(13,21,32,0.12)';
      });
    }

    // Set correct initial state immediately — no GSAP needed for this
    applyActive(0);

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const p = self.progress;

        if (progressBar) progressBar.style.width  = `${p * 100}%`;
        if (counterEl)   counterEl.textContent     = `${Math.round(p * 100)}%`;
        if (lineFill)    lineFill.style.height     = `${p * 100}%`;

        const newIndex = Math.min(
          Math.floor(p * PHASES.length),
          PHASES.length - 1
        );

        if (newIndex !== activeIndexRef.current) {
          activeIndexRef.current = newIndex;
          applyActive(newIndex);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white border-y border-black/6"
      style={{ height: `${PHASES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 grid-bg-fine opacity-60 pointer-events-none" />

        {/* Top progress bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-black/6 z-30">
          <div className="magma-progress h-full bg-[#E87722]" style={{ width: '0%' }} />
        </div>

        {/* Scroll progress counter */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30">
          <div
            className="magma-counter text-4xl md:text-5xl font-light font-mono tabular-nums"
            style={{ color: 'rgba(13,21,32,0.06)' }}
          >
            0%
          </div>
        </div>

        <div className="flex h-full">

          {/* ── LEFT: text panels ── */}
          <div className="w-full md:w-[55%] h-full relative flex items-center">

            {/* Timeline spine */}
            <div className="absolute left-6 md:left-10 top-[15vh] bottom-[15vh] w-px flex flex-col items-center">
              <div className="absolute inset-0 bg-black/8" />
              <div
                className="magma-line-fill absolute top-0 w-full bg-[#E87722]"
                style={{ height: '0%', transition: 'height 0.15s linear' }}
              />
              {PHASES.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full -translate-x-1/2"
                  style={{ top: `${(i / (PHASES.length - 1)) * 100}%` }}
                >
                  <div
                    className="magma-dot absolute inset-0 rounded-full"
                    style={{
                      backgroundColor : i === 0 ? '#E87722' : 'rgba(13,21,32,0.12)',
                      transform       : i === 0 ? 'scale(1.5)' : 'scale(1)',
                      transition      : 'background-color 0.3s ease, transform 0.3s ease',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Phase text cards — stacked, CSS transition shows/hides */}
            {PHASES.map((phase, i) => (
              <div
                key={i}
                className="magma-phase absolute inset-0 flex items-center pointer-events-none"
                style={{
                  opacity    : i === 0 ? 1 : 0,
                  transform  : i === 0 ? 'translateY(0px)' : 'translateY(30px)',
                  transition : 'opacity 0.4s ease, transform 0.4s ease',
                  willChange : 'opacity, transform',
                }}
              >
                <div className="pl-16 md:pl-20 pr-6 md:pr-8 max-w-lg">
                  <div className="text-[10px] md:text-xs font-mono text-[#E87722] tracking-[0.2em] mb-3">
                    {phase.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d1520] tracking-tight leading-tight mb-2">
                    {phase.headline}
                  </h3>
                  <p className="text-sm text-[#E87722] font-medium tracking-wide mb-4">
                    {phase.subline}
                  </p>
                  <p className="text-sm text-[#1a2537]/50 leading-relaxed max-w-sm">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: image panels ── */}
          <div className="hidden md:flex w-[45%] h-full items-center justify-center relative border-l border-black/6">
            <div className="absolute inset-0 bg-[#f8fafc]" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-[#E87722]/25" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-[#E87722]/25" />

            {PHASES.map((phase, i) => (
              <div
                key={i}
                className="magma-image absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity    : i === 0 ? 1 : 0,
                  transform  : i === 0 ? 'scale(1)' : 'scale(0.95)',
                  transition : 'opacity 0.4s ease, transform 0.4s ease',
                  willChange : 'opacity, transform',
                }}
              >
                <div
                  className="relative w-[70%] max-w-[400px] aspect-[4/3]"
                  style={{ perspective: '1000px' }}
                >
                  <img
                    src={phase.image}
                    alt={phase.headline}
                    className="w-full h-full object-contain"
                    style={{ filter: 'drop-shadow(0 16px 40px rgba(13,21,32,0.14))' }}
                    draggable={false}
                  />
                </div>
              </div>
            ))}

            <div className="absolute bottom-6 left-8 text-[10px] text-[#1a2537]/25 font-mono tracking-widest uppercase">
              Scroll to explore
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}