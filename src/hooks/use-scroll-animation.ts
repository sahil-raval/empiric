import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {

      // ── Fade up
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
        );
      });

      // ── Slide left
      gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' } }
        );
      });

      // ── Slide right
      gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' } }
        );
      });

      // ── Scale reveal
      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' } }
        );
      });

      // ── Stagger containers
      gsap.utils.toArray<HTMLElement>('.gsap-stagger-container').forEach(container => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        gsap.fromTo(items,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: container, start: 'top 82%', toggleActions: 'play none none none' } }
        );
      });

      // ── Word reveals (split-parent → split-word children)
      gsap.utils.toArray<HTMLElement>('.gsap-word-reveal').forEach(container => {
        const words = container.querySelectorAll<HTMLElement>('.split-word');
        gsap.fromTo(words,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.07, ease: 'power3.out',
            scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      });

      // ── Animated counters
      gsap.utils.toArray<HTMLElement>('.gsap-counter').forEach(el => {
        const target   = parseFloat(el.getAttribute('data-target')   || '0');
        const prefix   = el.getAttribute('data-prefix')  || '';
        const suffix   = el.getAttribute('data-suffix')  || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2.4, ease: 'power2.out',
          onUpdate: () => { el.textContent = prefix + obj.val.toFixed(decimals) + suffix; },
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
      });

      // ── Parallax
      gsap.utils.toArray<HTMLElement>('.gsap-parallax').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.15');
        gsap.to(el, {
          yPercent: -100 * speed, ease: 'none',
          scrollTrigger: { trigger: el.parentElement || el, scrub: true }
        });
      });

      // ── Clip reveal (left → right)
      gsap.utils.toArray<HTMLElement>('.gsap-clip-reveal').forEach(el => {
        gsap.fromTo(el,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
        );
      });

      // ── Line grow
      gsap.utils.toArray<HTMLElement>('.gsap-line-grow').forEach(el => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' } }
        );
      });

      // ── Rotate in
      gsap.utils.toArray<HTMLElement>('.gsap-rotate-in').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, rotation: -10, scale: 0.92 },
          { opacity: 1, rotation: 0, scale: 1, duration: 1.1, ease: 'back.out(1.3)',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
