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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Defer setup so the DOM + layout is fully painted before ScrollTrigger
    // measures element heights — prevents incorrect start/end calculations.
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const phaseCount  = PHASES.length;
        const phaseEls    = container.querySelectorAll<HTMLDivElement>('.magma-phase');
        const imageEls    = container.querySelectorAll<HTMLDivElement>('.magma-image');
        const dotEls      = container.querySelectorAll<HTMLDivElement>('.magma-dot');
        const lineFill    = container.querySelector('.magma-line-fill') as HTMLElement;
        const counterEl   = container.querySelector('.magma-counter') as HTMLElement;
        const progressBar = container.querySelector('.magma-progress') as HTMLElement;

        // Set initial states via GSAP so it owns the values — not inline styles
        gsap.set(phaseEls, { opacity: 0, yPercent: 0 });
        gsap.set(imageEls, { opacity: 0, yPercent: 0, scale: 1 });
        gsap.set(phaseEls[0], { opacity: 1 });
        gsap.set(imageEls[0], { opacity: 1 });

        // Master progress tracker
        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            const p = self.progress;
            if (progressBar) progressBar.style.width = `${p * 100}%`;
            if (counterEl)   counterEl.textContent   = `${Math.round(p * 100)}%`;
            if (lineFill)    lineFill.style.height    = `${p * 100}%`;
          },
        });

        const overlap   = 0.04;
        const phaseSize = 1 / phaseCount;

        for (let i = 0; i < phaseCount; i++) {
          const enter      = i * phaseSize;
          const exit       = (i + 1) * phaseSize;
          const enterStart = Math.max(0, enter - phaseSize * overlap);
          const enterEnd   = enter + phaseSize * overlap;
          const exitStart  = exit - phaseSize * overlap;
          const exitEnd    = exit;

          // Phase text ENTER
          if (i > 0) {
            gsap.fromTo(phaseEls[i],
              { yPercent: 80, opacity: 0 },
              {
                yPercent: 0, opacity: 1, ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: `${enterStart * 100}% top`,
                  end:   `${enterEnd   * 100}% top`,
                  scrub: true,
                },
              }
            );
          }

          // Phase text EXIT
          if (i < phaseCount - 1) {
            gsap.fromTo(phaseEls[i],
              { yPercent: 0, opacity: 1 },
              {
                yPercent: -60, opacity: 0, ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: `${exitStart * 100}% top`,
                  end:   `${exitEnd   * 100}% top`,
                  scrub: true,
                },
              }
            );
          }

          // Image ENTER
          if (i > 0) {
            gsap.fromTo(imageEls[i],
              { yPercent: 30, opacity: 0, scale: 0.85 },
              {
                yPercent: 0, opacity: 1, scale: 1, ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: `${enterStart * 100}% top`,
                  end:   `${enterEnd   * 100}% top`,
                  scrub: true,
                },
              }
            );
          }

          // Image EXIT
          if (i < phaseCount - 1) {
            gsap.fromTo(imageEls[i],
              { yPercent: 0, opacity: 1, scale: 1 },
              {
                yPercent: -20, opacity: 0, scale: 1.05, ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: `${exitStart * 100}% top`,
                  end:   `${exitEnd   * 100}% top`,
                  scrub: true,
                },
              }
            );
          }

          // Dot activation
          if (dotEls[i]) {
            gsap.fromTo(dotEls[i],
              { scale: 1, backgroundColor: 'rgba(13,21,32,0.12)' },
              {
                scale: 1.5, backgroundColor: '#E87722', ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: `${enterStart * 100}% top`,
                  end:   `${enterEnd   * 100}% top`,
                  scrub: true,
                },
              }
            );
            if (i < phaseCount - 1) {
              gsap.fromTo(dotEls[i],
                { scale: 1.5, backgroundColor: '#E87722' },
                {
                  scale: 1, backgroundColor: 'rgba(13,21,32,0.12)', ease: 'none',
                  scrollTrigger: {
                    trigger: container,
                    start: `${exitStart * 100}% top`,
                    end:   `${exitEnd   * 100}% top`,
                    scrub: true,
                  },
                }
              );
            }
          }
        }

        // Force ScrollTrigger to recalculate after all triggers are registered
        ScrollTrigger.refresh();

      }, container);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white border-y border-black/6"
      style={{ height: `${PHASES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="absolute inset-0 grid-bg-fine opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-black/6 z-30">
          <div className="magma-progress h-full bg-[#E87722]" style={{ width: '0%' }} />
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30">
          <div
            className="magma-counter text-4xl md:text-5xl font-light font-mono tabular-nums"
            style={{ color: 'rgba(13,21,32,0.06)' }}
          >
            0%
          </div>
        </div>

        <div className="flex h-full">
          <div className="w-full md:w-[55%] h-full relative flex items-center">
            <div className="absolute left-6 md:left-10 top-[15vh] bottom-[15vh] w-px flex flex-col items-center">
              <div className="absolute inset-0 bg-black/8" />
              <div
                className="magma-line-fill absolute top-0 w-full bg-[#E87722]"
                style={{ height: '0%' }}
              />
              {PHASES.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full -translate-x-1/2"
                  style={{ top: `${(i / (PHASES.length - 1)) * 100}%` }}
                >
                  <div
                    className="magma-dot absolute inset-0 rounded-full"
                    style={{ backgroundColor: 'rgba(13,21,32,0.12)' }}
                  />
                </div>
              ))}
            </div>
            {PHASES.map((phase, i) => (
              <div
                key={i}
                className="magma-phase absolute inset-0 flex items-center pointer-events-none"
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
          <div className="hidden md:flex w-[45%] h-full items-center justify-center relative border-l border-black/6">
            <div className="absolute inset-0 bg-[#f8fafc]" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-[#E87722]/25" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-[#E87722]/25" />
            {PHASES.map((phase, i) => (
              <div
                key={i}
                className="magma-image absolute inset-0 flex items-center justify-center pointer-events-none"
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