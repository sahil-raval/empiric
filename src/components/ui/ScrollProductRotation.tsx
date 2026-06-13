import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  images: { src: string; alt: string }[];
  labels?: string[];
}

export function ScrollProductRotation({ images, labels }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const wrapper   = wrapperRef.current;
    if (!container || !wrapper) return;

    const imgEls = wrapper.querySelectorAll<HTMLImageElement>('.rot-image');
    const count  = imgEls.length;
    if (count === 0) return;

    const ctx = gsap.context(() => {
      // Fade each image in/out based on scroll progress
      imgEls.forEach((img, i) => {
        // Phase 0: i = 0, 1, 2
        const phaseStart = (i - 0.15) / (count - 0.3);
        const phaseEnd   = (i + 0.85) / (count - 0.3);

        gsap.fromTo(img,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: `${Math.max(0, phaseStart * 100)}% top`,
              end:   `${Math.min(1, phaseEnd   * 100)}% top`,
              scrub: 0.5,
            },
          }
        );

        // Fade out after peak
        if (i < count - 1) {
          const fadeOutStart = (i + 0.5) / (count - 0.3);
          const fadeOutEnd   = (i + 0.85) / (count - 0.3);
          gsap.fromTo(img,
            { opacity: 1, scale: 1 },
            {
              opacity: 0,
              scale: 0.92,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: `${fadeOutStart * 100}% top`,
                end:   `${fadeOutEnd   * 100}% top`,
                scrub: 0.5,
              },
            }
          );
        }
      });

      // Labels
      if (labels) {
        const labelEls = wrapper.querySelectorAll<HTMLDivElement>('.rot-label');
        labelEls.forEach((label, i) => {
          const phaseStart = (i - 0.1) / (count - 0.3);
          const phaseEnd   = (i + 0.9) / (count - 0.3);
          gsap.fromTo(label,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: `${Math.max(0, phaseStart * 100)}% top`,
                end:   `${Math.min(1, phaseEnd   * 100)}% top`,
                scrub: 0.5,
              },
            }
          );
          if (i < count - 1) {
            const fadeOutStart = (i + 0.5) / (count - 0.3);
            const fadeOutEnd   = (i + 0.85) / (count - 0.3);
            gsap.fromTo(label,
              { opacity: 1, y: 0 },
              {
                opacity: 0,
                y: -10,
                ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: `${fadeOutStart * 100}% top`,
                  end:   `${fadeOutEnd   * 100}% top`,
                  scrub: 0.5,
                },
              }
            );
          }
        });
      }

      // Progress bar
      const bar = wrapper.querySelector('.rot-progress-fill');
      if (bar) {
        gsap.fromTo(bar, { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: container, start: 'top top', end: 'bottom bottom', scrub: true },
        });
      }

    }, container);

    return () => ctx.revert();
  }, [images.length, labels?.length]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${(images.length + 0.5) * 100}vh` }}>

      {/* Sticky viewport */}
      <div ref={wrapperRef} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#0a1018]">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-white/5 z-20">
          <div className="rot-progress-fill h-full bg-[#E87722] origin-left" />
        </div>

        {/* Phase indicator dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {images.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
          ))}
        </div>

        {/* Images */}
        <div className="relative w-[60vw] max-w-[480px] h-[60vw] max-h-[480px] flex items-center justify-center">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="rot-image absolute inset-0 w-full h-full object-contain pointer-events-none"
              style={{ opacity: i === 0 ? 1 : 0 }}
              draggable={false}
            />
          ))}
        </div>

        {/* Label text */}
        {labels && (
          <div className="absolute bottom-16 left-0 w-full text-center px-6 z-10">
            {labels.map((label, i) => (
              <div key={i} className="rot-label absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[10px] text-[#E87722] tracking-[0.3em] uppercase font-semibold mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight max-w-md">
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Corner annotations */}
        <div className="absolute top-6 left-6 text-[10px] text-white/30 font-mono tracking-widest uppercase">
          Precision Component
        </div>
        <div className="absolute bottom-6 left-6 text-[10px] text-white/30 font-mono tracking-widest uppercase">
          Brass · ±0.01mm
        </div>
        <div className="absolute top-6 right-6 text-[10px] text-white/30 font-mono tracking-widest uppercase">
          View: {images.length}
        </div>
      </div>
    </div>
  );
}
