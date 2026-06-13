import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import gsap from 'gsap';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import CNCPart from '@/components/three/CNCPart';
import MarqueeBand from '@/components/ui/MarqueeBand';
import IsometricPart from '@/components/ui/IsometricPart';
import { EngineeringCanvas } from '@/components/ui/EngineeringCanvas';
import { Magnetic } from '@/components/ui/Magnetic';
import heroCnc from '@assets/hero-cnc.png';
import heroParts from '@assets/hero-parts.png';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const consultancyServices = [
  { code: 'PD', title: 'Product Design & Development',      sub: 'Concept to 3D CAD, DFM/DFA, manufacturing drawings' },
  { code: 'CF', title: 'Casting & Forging Die Design',      sub: 'LPDC, GDC, closed/open forging with gating & cooling' },
  { code: 'FX', title: 'CNC Fixture & Cutting Tool Design', sub: 'Work-holding, clamping systems, custom tool geometry' },
  { code: 'RE', title: 'Reverse Engineering',               sub: 'Physical part to clean, editable, production CAD' },
  { code: 'VE', title: 'Value Engineering (VAVE)',           sub: 'Cost reduction via design optimisation & material sub.' },
  { code: 'IP', title: 'Industrial Packaging Design',       sub: 'Component protection and logistics optimisation' },
];

const manufacturingProducts = [
  { code: 'EC', title: 'Electrical Components',        sub: 'Cable glands, terminals, connector parts in brass & copper' },
  { code: 'FP', title: 'Faucet & Plumbing Components', sub: 'Spindles, valve bodies, fittings with precision threading' },
  { code: 'CP', title: 'CNC Precision Components',     sub: 'Micro and complex geometry parts to ±0.01mm' },
  { code: 'EG', title: 'Engineering Components',       sub: 'Threaded fittings, spacers, fasteners, custom OEM parts' },
];

const stats = [
  { val: '0.01', prefix: '±', suffix: 'mm', label: 'Tolerance',        decimals: 2 },
  { val: '100',  prefix: '',  suffix: '%',  label: 'Quality Inspected', decimals: 0 },
  { val: '2024', prefix: '',  suffix: '',   label: 'Founded',           decimals: 0 },
  { val: '4',    prefix: '',  suffix: '+',  label: 'Material Types',    decimals: 0 },
];

const processSteps = [
  { label: 'Design',     desc: 'Concept → CAD → DFM' },
  { label: 'Tooling',    desc: 'Die & fixture engineering' },
  { label: 'Machining',  desc: 'CNC turning · VMC · threading' },
  { label: 'Inspection', desc: 'CMM · gauges · QC docs' },
  { label: 'Dispatch',   desc: 'Batch delivery with traceability' },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

function WordReveal({ text, className = '' }: { text: string; className?: string }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className={`inline-block overflow-hidden leading-[1.15] mr-[0.28em] last:mr-0 ${className}`}>
          <span className="split-word inline-block">{word}</span>
        </span>
      ))}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */

export default function Home() {
  const containerRef = useScrollAnimation();

  const heroTagRef    = useRef<HTMLDivElement>(null);
  const heroH1Ref     = useRef<HTMLHeadingElement>(null);
  const heroSubRef    = useRef<HTMLParagraphElement>(null);
  const heroCtaRef    = useRef<HTMLDivElement>(null);
  const heroScrollRef = useRef<HTMLDivElement>(null);
  const heroLeftRef   = useRef<HTMLDivElement>(null);
  const heroRightRef  = useRef<HTMLDivElement>(null);
  const heroBadgeRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(heroTagRef.current,
        { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3
      ).fromTo(heroH1Ref.current,
        { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1 }, 0.5
      ).fromTo(heroSubRef.current,
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85
      ).fromTo(heroCtaRef.current,
        { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 1.05
      ).fromTo(heroScrollRef.current,
        { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.4
      ).fromTo(heroLeftRef.current,
        { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.1 }, 1.2
      ).fromTo(heroRightRef.current,
        { opacity: 0, x: 50  }, { opacity: 1, x: 0, duration: 1.1 }, 1.35
      ).fromTo(heroBadgeRef.current,
        { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.6)' }, 1.6
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">

      {/* ════════════════════════════════════════════════════════
          §1  HERO — light theme: white bg, CNC photo tinted light
      ════════════════════════════════════════════════════════ */}
      <section
        className="page-offset relative w-full overflow-hidden bg-[#f8fafc]"
        style={{ height: '100svh', minHeight: 560 }}
      >
        {/* Grid texture */}
        <div className="absolute inset-0 z-0 grid-bg opacity-70" />

        {/* CNC photo — right half, light treatment */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[55%] z-[1] overflow-hidden">
          <img
            src={heroCnc}
            alt="CNC precision machining"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.92) saturate(0.85) contrast(1.05)' }}
          />
          {/* Fade left edge into white */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #f8fafc 0%, rgba(248,250,252,0.75) 30%, rgba(248,250,252,0.1) 70%, transparent 100%)' }} />
          {/* Fade top and bottom */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, transparent 12%, transparent 85%, #f8fafc 100%)' }} />
        </div>

        {/* Engineering canvas — very subtle on light bg */}
        <EngineeringCanvas mode="light" className="z-[2] opacity-20" />

        {/* ── Hero copy — left-aligned ── */}
        <div className="absolute inset-0 z-[3] flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto left-0 right-0">

          <div ref={heroTagRef} className="flex items-center gap-3 mb-6 md:mb-8" style={{ opacity: 0 }}>
            <div className="w-8 h-px bg-[#E87722]" />
            <span className="text-[10px] font-bold text-[#E87722] tracking-[0.35em] uppercase">
              Precision Engineering · Est. 2024
            </span>
          </div>

          <h1
            ref={heroH1Ref}
            className="font-display font-bold text-[#0d1520] tracking-tight leading-[0.95] mb-6 md:mb-8"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 6.5rem)', opacity: 0 }}
          >
            Engineering<br />
            <span className="text-[#E87722]">Intelligence.</span>
          </h1>

          <p
            ref={heroSubRef}
            className="text-[#1a2537]/55 font-light max-w-md leading-relaxed mb-8 md:mb-10"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', opacity: 0 }}
          >
            Industrial design consultancy and CNC precision manufacturing — engineered for
            OEMs, product developers &amp; manufacturers.
          </p>

          <div ref={heroCtaRef} className="flex flex-wrap items-center gap-4" style={{ opacity: 0 }}>
            <Magnetic strength={0.3}>
              <Link href="/consultancy" className="btn-outline text-[10px]">
                Explore Services →
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link href="/manufacturing" className="btn-primary text-[10px]">
                View Manufacturing →
              </Link>
            </Magnetic>
          </div>

          {/* Inline stat strip */}
          <div className="flex items-center gap-8 mt-14 md:mt-16">
            {[
              { val: '±0.01mm', label: 'Tolerance' },
              { val: 'Ø3–65mm', label: 'CNC Range' },
              { val: '4+',      label: 'Materials' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display font-bold text-[#0d1520] text-xl md:text-2xl leading-none">{s.val}</span>
                <span className="text-[9px] text-[#1a2537]/40 uppercase tracking-widest mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom metadata strip */}
        <div className="absolute bottom-8 left-6 md:left-16 z-[4] hidden md:block">
          <span className="text-[9px] text-[#1a2537]/30 font-mono tracking-widest uppercase">Jamnagar · Gujarat · India</span>
        </div>

        {/* Scroll hint */}
        <div ref={heroScrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2" style={{ opacity: 0 }}>
          <span className="text-[9px] tracking-[0.3em] text-[#1a2537]/35 uppercase font-medium">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          §2  COMPANY STATEMENT — who we are, white bg
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden border-y border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Parts photo */}
            <div className="relative overflow-hidden gsap-slide-left">
              <div className="relative aspect-[4/3] overflow-hidden border border-black/8">
                <img
                  src={heroParts}
                  alt="Precision machined brass and stainless steel components"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle warm overlay to lift the photo on white */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f8fafc]/20 via-transparent to-transparent" />
                {/* Corner marks — orange accent */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#E87722]" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E87722]" />
                <div className="absolute top-4 right-4 bg-[#E87722] px-3 py-1.5">
                  <p className="text-[9px] font-bold text-white tracking-widest uppercase">±0.01mm</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[9px] text-[#0d1520]/50 font-mono tracking-widest uppercase">
                  Precision Components · Brass · Stainless Steel · Copper
                </p>
              </div>
            </div>

            {/* Copy */}
            <div className="gsap-slide-right">
              <span className="section-label mb-6 block">About Empiric TechCraft</span>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#0d1520] leading-tight mb-6 tracking-tight gsap-word-reveal">
                <WordReveal text="Engineering Intelligence." />
                <br />
                <WordReveal text="Precision Manufacturing." className="text-[#E87722]" />
              </h2>
              <p className="text-[#1a2537]/55 text-base leading-relaxed mb-5 gsap-fade-up">
                Empiric TechCraft is a precision engineering company built on two integrated
                specialisations — industrial design consultancy and CNC precision manufacturing —
                delivering end-to-end engineering solutions for modern industries.
              </p>
              <p className="text-[#1a2537]/35 text-sm leading-relaxed mb-10 gsap-fade-up">
                We partner with manufacturers, OEMs, and product developers who need both
                engineering intelligence and production-ready output, combining design expertise
                with machining precision under one roof.
              </p>

              {/* Two-division quick reference */}
              <div className="grid grid-cols-2 gap-3 mb-10 gsap-fade-up">
                {[
                  { tag: 'DC', label: 'Empiric Consultancy', desc: 'Design & engineering services', href: '/consultancy' },
                  { tag: 'TC', label: 'Empiric TechCraft',   desc: 'CNC precision manufacturing',   href: '/manufacturing' },
                ].map(div => (
                  <Link
                    key={div.tag}
                    href={div.href}
                    className="border border-black/8 p-4 bg-[#f8fafc] hover:border-[#E87722]/40 hover:bg-[#fdf8f4] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold text-[#E87722] bg-[#E87722]/10 px-1.5 py-0.5 tracking-widest">{div.tag}</span>
                    </div>
                    <p className="text-xs font-bold text-[#0d1520] mb-1">{div.label}</p>
                    <p className="text-[10px] text-[#1a2537]/40">{div.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 gsap-fade-up">
                <Magnetic strength={0.3}>
                  <Link href="/consultancy" className="btn-outline text-[10px]">Consultancy →</Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href="/manufacturing" className="btn-primary text-[10px]">Manufacturing →</Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          §3  SPLIT PANELS — Division Selector (full-width, both light)
      ════════════════════════════════════════════════════════ */}
      <section className="relative w-full flex flex-col md:flex-row overflow-hidden border-b border-black/6" style={{ minHeight: '80vh' }}>

        {/* ── LEFT: Consultancy — cool off-white ── */}
        <Link
          href="/consultancy"
          className="relative group w-full md:w-1/2 flex flex-col justify-end overflow-hidden bg-[#f0f4f8] md:border-r border-b md:border-b-0 border-black/8 flex-1"
          style={{ minHeight: '60vw' }}
        >
          <EngineeringCanvas mode="light" className="z-0 opacity-60" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#e4eaf2]/90 via-[#e4eaf2]/20 to-transparent" />

          {/* Corner marks */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 w-7 h-7 border-t border-r border-[#E87722]/20 group-hover:border-[#E87722]/70 transition-all duration-700 z-[2]" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-7 h-7 border-b border-l border-[#E87722]/20 group-hover:border-[#E87722]/70 transition-all duration-700 z-[2]" />

          {/* Division tag — top left */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-[2] flex items-center gap-2">
            <div className="w-5 h-5 border border-[#E87722]/40 bg-white/60 flex items-center justify-center">
              <span className="text-[7px] font-bold text-[#E87722]">DC</span>
            </div>
            <span className="text-[9px] text-[#1a2537]/40 font-mono tracking-widest uppercase">Design Division</span>
          </div>

          <div ref={heroLeftRef} className="relative z-[2] p-8 sm:p-10 md:p-12 lg:p-14" style={{ opacity: 0 }}>
            <span className="section-label mb-4 block">Design Division</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-3 tracking-tight text-[#0d1520]">
              Empiric<br /><span className="text-[#E87722]">Consultancy</span>
            </h2>
            <p className="text-sm text-[#1a2537]/55 mb-6 max-w-xs leading-relaxed">
              Industrial design consultancy covering product development, die engineering,
              CNC fixtures, reverse engineering, and VAVE.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {consultancyServices.map(s => (
                <span key={s.code} className="text-xs text-[#1a2537]/45 flex items-center gap-2">
                  <span className="w-3 h-px bg-[#E87722]/60 shrink-0" />{s.title}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8 flex-wrap">
              {['Automotive', 'Electrical', 'Plumbing', 'General Eng.'].map(ind => (
                <span key={ind} className="text-[9px] border border-black/12 bg-white/60 px-2 py-1 text-[#1a2537]/40 uppercase tracking-wider">{ind}</span>
              ))}
            </div>

            <span className="btn-outline text-[10px] inline-flex">
              Explore Services →
            </span>
          </div>
        </Link>

        {/* ── RIGHT: Manufacturing — pure white ── */}
        <Link
          href="/manufacturing"
          className="relative group w-full md:w-1/2 flex flex-col justify-end overflow-hidden bg-white flex-1"
          style={{ minHeight: '60vw' }}
        >
          <EngineeringCanvas mode="light" className="z-0 opacity-40" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-white/95 via-white/20 to-transparent" />

          {/* Corner marks */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 w-7 h-7 border-t border-r border-[#E87722]/15 group-hover:border-[#E87722]/60 transition-all duration-700 z-[2]" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-7 h-7 border-b border-l border-[#E87722]/15 group-hover:border-[#E87722]/60 transition-all duration-700 z-[2]" />

          {/* Division tag — top left */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-[2] flex items-center gap-2">
            <div className="w-5 h-5 border border-[#E87722]/30 bg-[#E87722]/5 flex items-center justify-center">
              <span className="text-[7px] font-bold text-[#E87722]">TC</span>
            </div>
            <span className="text-[9px] text-[#1a2537]/30 font-mono tracking-widest uppercase">Manufacturing Division</span>
          </div>

          <div ref={heroRightRef} className="relative z-[2] p-8 sm:p-10 md:p-12 lg:p-14" style={{ opacity: 0 }}>
            <span className="section-label mb-4 block">Manufacturing Division</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d1520] leading-none mb-3 tracking-tight">
              Empiric<br /><span className="text-[#E87722]">TechCraft</span>
            </h2>
            <p className="text-sm text-[#1a2537]/50 mb-6 max-w-xs leading-relaxed">
              CNC precision manufacturing of electrical, plumbing, precision, and custom OEM
              components in brass, stainless steel and copper.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {manufacturingProducts.map(s => (
                <span key={s.code} className="text-xs text-[#1a2537]/35 flex items-center gap-2">
                  <span className="w-3 h-px bg-[#E87722]/50 shrink-0" />{s.title}
                </span>
              ))}
            </div>

            {/* Spec pills */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              {['Brass', 'SS304/316', 'Copper', 'Aluminium'].map(mat => (
                <span key={mat} className="text-[9px] border border-black/10 bg-[#f8fafc] px-2 py-1 text-[#1a2537]/45 uppercase tracking-wider">{mat}</span>
              ))}
            </div>

            <span className="btn-primary text-[10px] inline-flex">View Capabilities →</span>
          </div>
        </Link>

        {/* Centre badge */}
        <div ref={heroBadgeRef} className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center pointer-events-none" style={{ opacity: 0 }}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#E87722]/40" />
          <div className="border border-[#E87722]/35 px-5 py-2.5 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <p className="text-[9px] font-bold text-[#E87722] tracking-[0.3em] uppercase whitespace-nowrap">Empiric TechCraft</p>
          </div>
          <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#E87722]/40" />
        </div>
      </section>


      {/* ── MARQUEE ── */}
      <MarqueeBand bg="#f0f4f8" textColor="rgba(13,21,32,0.22)" />


      {/* ════════════════════════════════════════════════════════
          §4  DIVISION DETAIL — Consultancy (cool off-white bg)
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#f0f4f8] relative overflow-hidden border-y border-black/6">
        {/* Subtle orange radial glow — very light */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.05) 0%, transparent 65%)' }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

          {/* Section header */}
          <div className="flex items-start justify-between mb-12 md:mb-16 gsap-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="border border-[#E87722]/30 bg-white px-3 py-1">
                  <span className="text-[9px] font-bold text-[#E87722] tracking-[0.3em] uppercase">Division 01 · DC</span>
                </div>
              </div>
              <span className="section-label mb-3 block">Empiric Consultancy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1520] tracking-tight gsap-word-reveal">
                <WordReveal text="Industrial Design" />
                <br />
                <WordReveal text="Consultancy." className="text-[#E87722]" />
              </h2>
            </div>
            <Link href="/consultancy" className="hidden md:inline-flex btn-outline text-[10px] shrink-0 mt-2">
              View All Services →
            </Link>
          </div>

          {/* Services 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/6 gsap-scale-in mb-12">
            {consultancyServices.map(svc => (
              <div key={svc.code}
                className="bg-white p-6 md:p-8 group hover:bg-[#fdf8f4] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-[#E87722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-7 h-7 border border-black/10 flex items-center justify-center group-hover:border-[#E87722]/50 group-hover:bg-[#E87722]/5 transition-all duration-300">
                    <span className="text-[#E87722] text-[8px] font-bold">{svc.code}</span>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#0d1520] mb-2 leading-snug">{svc.title}</h4>
                <p className="text-[11px] text-[#1a2537]/40 leading-relaxed">{svc.sub}</p>
              </div>
            ))}
          </div>

          {/* Industries row */}
          <div className="flex flex-wrap items-center gap-3 gsap-fade-up">
            <span className="text-[9px] text-[#1a2537]/30 uppercase tracking-widest mr-2">Industries</span>
            {['Automotive', 'Electrical', 'Plumbing', 'General Engineering', 'OEM Manufacturers'].map(ind => (
              <span key={ind} className="border border-black/10 bg-white px-4 py-2 text-[10px] text-[#1a2537]/45 uppercase tracking-wider hover:border-[#E87722]/40 hover:text-[#E87722] transition-all duration-300 cursor-default">
                {ind}
              </span>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 md:hidden">
            <Link href="/consultancy" className="btn-outline text-[10px] inline-flex">
              View All Services →
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          §5  DIVISION DETAIL — Manufacturing (white bg)
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

          {/* Section header */}
          <div className="flex items-start justify-between mb-12 md:mb-16 gsap-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="border border-black/10 bg-[#f8fafc] px-3 py-1">
                  <span className="text-[9px] font-bold text-[#E87722] tracking-[0.3em] uppercase">Division 02 · TC</span>
                </div>
              </div>
              <span className="section-label mb-3 block">Empiric TechCraft</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1520] tracking-tight gsap-word-reveal">
                <WordReveal text="CNC Precision" />
                <br />
                <WordReveal text="Manufacturing." className="text-[#E87722]" />
              </h2>
            </div>
            <Link href="/manufacturing" className="hidden md:inline-flex btn-primary text-[10px] shrink-0 mt-2">
              View Capabilities →
            </Link>
          </div>

          {/* Products 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/6 mb-12 gsap-scale-in">
            {manufacturingProducts.map(prod => (
              <div key={prod.code}
                className="bg-white p-6 md:p-8 group hover:bg-[#fdf8f4] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-[#E87722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-7 h-7 border border-black/10 flex items-center justify-center group-hover:border-[#E87722]/50 group-hover:bg-[#E87722]/5 transition-all duration-300">
                    <span className="text-[#E87722] text-[8px] font-bold">{prod.code}</span>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#0d1520] mb-2 leading-snug">{prod.title}</h4>
                <p className="text-[11px] text-[#1a2537]/40 leading-relaxed">{prod.sub}</p>
              </div>
            ))}
          </div>

          {/* Material & spec strip */}
          <div className="border border-black/8 p-6 md:p-8 bg-[#f8fafc] gsap-fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-black/8">
              {[
                { label: 'Materials',  val: 'Brass · SS304/316 · Copper · Aluminium' },
                { label: 'Processes',  val: 'CNC Turning · VMC · Threading · Boring' },
                { label: 'Tolerance',  val: '±0.01mm on critical dimensions' },
                { label: 'Inspection', val: 'CMM · Thread gauges · QC documentation' },
              ].map(row => (
                <div key={row.label} className="md:px-8 first:pl-0 last:pr-0">
                  <p className="text-[9px] text-[#1a2537]/35 uppercase tracking-widest mb-2">{row.label}</p>
                  <p className="text-xs text-[#1a2537]/65 leading-relaxed">{row.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 md:hidden">
            <Link href="/manufacturing" className="btn-primary text-[10px] inline-flex">View Capabilities →</Link>
          </div>
        </div>
      </section>


      {/* ── MARQUEE reverse ── */}
      <MarqueeBand reverse bg="#f0f4f8" textColor="rgba(13,21,32,0.25)" speed={45} />


      {/* ════════════════════════════════════════════════════════
          §6  PRECISION STATS — light bg, navy cards
          (Previously the dark 3D CNC section — now light with
           navy accent cards so the stat numbers stay legible)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-white relative overflow-hidden border-y border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[520px] md:min-h-[580px]">

            {/* 3D part — on white/light bg */}
            <div className="relative flex items-center justify-center py-16 md:py-0 border-b md:border-b-0 md:border-r border-black/6 gsap-scale-in min-h-[360px] bg-[#f8fafc]">
              {/* Subtle grid bg under the part */}
              <div className="absolute inset-0 grid-bg-fine opacity-60" />
              {/* Pulse rings in orange/light */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="pulse-ring w-72 h-72" style={{ borderColor: 'rgba(232,119,34,0.12)' }} />
                <div className="pulse-ring w-52 h-52" style={{ borderColor: 'rgba(232,119,34,0.08)', animationDelay: '1s' }} />
              </div>
              <div className="relative w-full h-80 md:h-full max-h-[500px]">
                <CNCPart />
              </div>
              <span className="absolute top-4 left-4 text-[10px] text-[#1a2537]/25 font-mono tracking-widest">VIEW: ISOMETRIC</span>
              <span className="absolute bottom-4 right-4 text-[10px] text-[#1a2537]/25 font-mono tracking-widest">SCALE 1:1</span>
            </div>

            {/* Stats + spec rows */}
            <div className="flex flex-col justify-center py-14 md:py-16 px-8 md:px-12 lg:px-16">
              <span className="section-label mb-6 block">Engineering Precision</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1520] leading-tight mb-8 tracking-tight gsap-word-reveal">
                <WordReveal text="Machined to" />
                <br />
                <WordReveal text="Exact Specification" className="text-[#E87722]" />
              </h2>

              {/* Stats — navy fill cards on white background */}
              <div className="grid grid-cols-2 gap-px bg-black/6 mb-10 gsap-scale-in">
                {stats.map(s => (
                  <div key={s.label} className="bg-[#0d1520] p-6 relative overflow-hidden group hover:bg-[#1a2537] transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#E87722]/0 via-[#E87722]/40 to-[#E87722]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="gsap-counter text-2xl md:text-3xl font-bold text-white mb-1 font-display"
                      data-target={s.val} data-prefix={s.prefix} data-suffix={s.suffix} data-decimals={s.decimals}>
                      {s.prefix}0{s.suffix}
                    </div>
                    <div className="text-[10px] text-white/45 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-10 gsap-fade-up">
                {[
                  { label: 'Materials', val: 'Brass · Stainless Steel · Copper · Aluminium' },
                  { label: 'Processes', val: 'CNC Turning · VMC · Threading · Boring' },
                  { label: 'Standards', val: 'ISO Compliant · Full QC Documentation' },
                  { label: 'Location',  val: 'Jamnagar, Gujarat 361001, India' },
                ].map(row => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 border-b border-black/6 pb-3">
                    <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-widest shrink-0 w-20">{row.label}</span>
                    <span className="text-xs text-[#1a2537]/65">{row.val}</span>
                  </div>
                ))}
              </div>

              <Magnetic strength={0.25}>
                <Link href="/manufacturing" className="btn-primary text-[10px] inline-flex gsap-fade-up">
                  View Manufacturing →
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          §7  END-TO-END PROCESS — white bg
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white border-y border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 gsap-fade-up">
            <div>
              <span className="section-label mb-3 block">End-to-End Capability</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1520] tracking-tight gsap-word-reveal">
                <WordReveal text="One Workflow. Both Divisions." />
              </h2>
            </div>
            <p className="text-xs text-[#1a2537]/30 max-w-xs shrink-0">
              Design consultancy and manufacturing run as an integrated capability — not separate suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 border border-black/8 bg-black/6 gsap-scale-in">
            {processSteps.map((step, i) => (
              <div key={step.label}
                className="relative p-6 md:p-8 bg-white border-b sm:border-b-0 sm:border-r border-black/8 last:border-0 group hover:bg-[#fdf8f4] transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-[#E87722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-7 h-7 border border-black/10 flex items-center justify-center mb-4 group-hover:border-[#E87722]/50 group-hover:bg-[#E87722]/5 transition-all duration-300">
                  <span className="text-[9px] font-bold text-[#E87722]">0{i + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-[#0d1520] mb-1.5">{step.label}</h4>
                <p className="text-[10px] text-[#1a2537]/40 leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[#E87722]/30 text-xs z-10">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          §8  CNC IMAGE STRIP — kept dark; the one intentional
              dark moment in the light theme. Creates breathing
              room and makes the photo feel premium, not muddy.
      ════════════════════════════════════════════════════════ */}
      <section className="relative h-[45vh] sm:h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 gsap-parallax" data-speed="0.15">
          <img
            src={heroCnc}
            alt="CNC machining in progress"
            className="w-full h-[130%] object-cover object-center"
            style={{ filter: 'brightness(0.45) saturate(1.05)' }}
          />
        </div>
        {/* Warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1520]/60 via-transparent to-[#0d1520]/60" />
        <div className="relative z-10 text-center px-4">
          <span className="section-label mb-3 justify-center" style={{ color: '#E87722' }}>Machining Precision</span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight gsap-scale-in"
            style={{ textShadow: '0 0 60px rgba(0,0,0,0.5)' }}>
            Tolerance ±0.01mm
          </h3>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          §9  CTA BAND — navy bg; high contrast close
              (Orange CTA band replaced with navy — orange CTA
               band on a light-theme page reads as a warning,
               not a premium close. Navy is authoritative.)
      ════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#0d1520] relative overflow-hidden">
        {/* Subtle grid on dark */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        {/* Orange glow top-left */}
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="gsap-slide-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Ready to Start a Project?
            </h3>
            <p className="text-white/50 text-sm font-light">
              Talk to our engineering team — design, manufacturing, or both.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0 gsap-slide-right">
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="btn-primary text-[11px] whitespace-nowrap inline-flex"
              >
                Send an Enquiry →
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link
                href="/consultancy"
                className="btn-outline text-[11px] border-white/20 text-white hover:border-[#E87722] whitespace-nowrap inline-flex"
              >
                Consultancy →
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link
                href="/manufacturing"
                className="btn-outline text-[11px] border-white/20 text-white hover:border-[#E87722] whitespace-nowrap inline-flex"
              >
                Manufacturing →
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

    </div>
  );
}