import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const stateRef = useRef<'default' | 'hover' | 'click'>('default');

  useEffect(() => {
    // Coarse-pointer (touch) devices — hide
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    // Use GSAP quickTo for buttery-smooth tracking
    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.08, ease: 'power2' });
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.08, ease: 'power2' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power2' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power2' });

    // Show cursor on first move
    let visible = false;

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        visible = true;
      }
      xDot(e.clientX - 4);
      yDot(e.clientY - 4);
      xRing(e.clientX - 18);
      yRing(e.clientY - 18);
    };

    const setHover = (hovering: boolean) => {
      if (hovering) {
        gsap.to(dot,  { scale: 0, duration: 0.25, ease: 'power2.out' });
        gsap.to(ring, { scale: 1.8, borderColor: '#E87722', backgroundColor: 'rgba(232,119,34,0.08)', duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.to(dot,  { scale: 1, duration: 0.25, ease: 'power2.out' });
        gsap.to(ring, { scale: 1, borderColor: 'rgba(232,119,34,0.5)', backgroundColor: 'transparent', duration: 0.3, ease: 'power2.out' });
      }
      stateRef.current = hovering ? 'hover' : 'default';
    };

    const onClick = () => {
      gsap.timeline()
        .to(ring, { scale: 0.7, duration: 0.1, ease: 'power2.in' })
        .to(ring, { scale: stateRef.current === 'hover' ? 1.8 : 1, duration: 0.3, ease: 'elastic.out(1,0.5)' });
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a, button, [role="button"], [data-cursor="pointer"], label, input, select, textarea');
      if (el) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a, button, [role="button"], [data-cursor="pointer"], label, input, select, textarea');
      if (el) setHover(false);
    };

    const onLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const onEnter = () => { if (visible) gsap.to([dot, ring], { opacity: 1, duration: 0.2 }); };

    document.addEventListener('mousemove',   onMove,   { passive: true });
    document.addEventListener('mouseover',   onOver);
    document.addEventListener('mouseout',    onOut);
    document.addEventListener('mousedown',   onClick);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove',   onMove);
      document.removeEventListener('mouseover',   onOver);
      document.removeEventListener('mouseout',    onOut);
      document.removeEventListener('mousedown',   onClick);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: 0 }}
      />
    </>
  );
}
