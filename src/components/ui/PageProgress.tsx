import React, { useEffect, useState } from 'react';

export function PageProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[200] h-[2px] pointer-events-none">
      <div
        className="h-full bg-[#E87722] origin-left"
        style={{ width: `${pct}%`, transition: 'width 0.05s linear' }}
      />
    </div>
  );
}
