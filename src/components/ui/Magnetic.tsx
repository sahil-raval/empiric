import React, { useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.35, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch
    if (window.matchMedia('(pointer: coarse)').matches) return;
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el   = ref.current!;
    const rect = el.getBoundingClientRect();
    const dx   = e.clientX - (rect.left + rect.width  / 2);
    const dy   = e.clientY - (rect.top  + rect.height / 2);
    gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.35, ease: 'power2.out' });
  }, [strength]);

  const onLeave = useCallback(() => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.75, ease: 'elastic.out(1.1,0.4)' });
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-block will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
