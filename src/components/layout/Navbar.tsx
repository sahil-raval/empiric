import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'wouter';


const navLinks = [
  { name: 'Home',          path: '/' },
  { name: 'About',         path: '/about' },
  { name: 'Consultancy',   path: '/consultancy' },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Contact',       path: '/contact' },
];

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [hidden,      setHidden]      = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [location]                    = useLocation();
  const lastY      = useRef(0);
  const ticking    = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const y     = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 40);
      if (y < 100) {
        setHidden(false);
      } else if (delta >  6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current  = y;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === '/' ? location === '/' : location.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 will-change-transform transition-[transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Top info bar — desktop only */}
        <div className={`hidden md:block bg-[#0d1520] border-b border-white/5 transition-all duration-300 overflow-hidden ${
          scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        }`}>
          <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-9">
            <div className="flex items-center gap-6">
              <span className="text-[10px] text-white/60 font-medium tracking-[0.15em] uppercase">Empiric TechCraft Engineering</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[10px] text-white/60 tracking-wider">Est. 2024 · Jamnagar, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+919974945400"           className="text-[10px] text-white/60 hover:text-[#E87722] transition-colors tracking-wider">+91 9974945400</a>
              <span className="w-px h-3 bg-white/10" />
              <a href="mailto:sales@empirictechcraft.com" className="text-[10px] text-white/60 hover:text-[#E87722] transition-colors tracking-wider">sales@empirictechcraft.com</a>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <nav className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-2xl border-b border-black/8 shadow-[0_4px_32px_rgba(0,0,0,0.07)]'
            : 'bg-white/92 backdrop-blur-md border-b border-black/5'
        }`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex justify-between items-center h-[60px]">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 z-10">
              <img src="/logo.png" alt="Empiric TechCraft" className="h-9 w-auto object-contain" />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.filter(l => l.name !== 'Contact').map(link => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`nav-link text-[13px] font-semibold tracking-[0.06em] transition-colors pb-0.5 ${
                    isActive(link.path) ? 'nav-link-active text-[#E87722]' : 'text-[#1a2537]/65 hover:text-[#0d1520]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA — desktop */}
            <div className="hidden md:flex items-center">
              <Link href="/contact" className="btn-primary text-[10px]">
                Send Enquiry →
              </Link>
            </div>

            {/* Hamburger — mobile */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[6px] focus:outline-none"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className={`block w-6 h-[1.5px] bg-[#0d1520] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-[#0d1520] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-6'}`} />
              <span className={`block w-6 h-[1.5px] bg-[#0d1520] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── FULLSCREEN MOBILE MENU ── */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d1520] flex flex-col md:hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />

        {/* Top bar — logo + close mirrored */}
        <div className="relative flex items-center justify-between px-6 h-[60px] border-b border-white/6">
          <img src="/logo.png" alt="Empiric TechCraft" className="h-12 w-auto object-contain brightness-0 invert" />
          <button
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="17" y1="1" x2="1" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="relative flex-1 flex flex-col justify-center px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.path}
              className={`flex items-baseline gap-5 py-6 border-b border-white/6 group transition-all duration-300 ${
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' }}
            >
              <span className="text-[11px] font-mono text-[#E87722]/40 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className={`text-3xl font-bold tracking-tight transition-colors duration-200 ${
                isActive(link.path) ? 'text-[#E87722]' : 'text-white/80 group-hover:text-white'
              }`}>
                {link.name}
              </span>
              <span className="ml-auto text-white/45 text-lg group-hover:text-[#E87722]/60 transition-colors">→</span>
            </Link>
          ))}
        </nav>

        {/* Footer info */}
        <div className={`relative px-8 pb-10 pt-6 border-t border-white/6 transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}>
          <p className="text-[11px] text-white/50 tracking-wider mb-1">+91 9974945400</p>
          <p className="text-[11px] text-white/50 tracking-wider">sales@empirictechcraft.com</p>
          <p className="text-[10px] text-white/35 tracking-widest uppercase mt-4">Jamnagar, Gujarat, India</p>
        </div>
      </div>
    </>
  );
}
