import React from 'react';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Magnetic } from '@/components/ui/Magnetic';
import { EngineeringCanvas } from '@/components/ui/EngineeringCanvas';
import MarqueeBand from '@/components/ui/MarqueeBand';

const processSteps = [
  {
    num: '01',
    title: 'Material Selection',
    subtitle: 'Raw Brass Bar Stock',
    detail: 'Premium brass rods sourced from certified suppliers. Alloy composition verified for machinability, corrosion resistance, and electrical conductivity.',
    image: '/brass-bolt-1.png',
  },
  {
    num: '02',
    title: 'CNC Machining',
    subtitle: 'Precision Turning',
    detail: 'Multi-axis CNC lathes with live tooling. Threads cut to ±0.01mm accuracy. Hexagonal heads milled with precise geometry.',
    image: '/brass-bolt-2.png',
  },
  {
    num: '03',
    title: 'Thread Inspection',
    subtitle: 'Precision Verification',
    detail: 'Helical thread profiles verified with calibrated gauges. Surface roughness checked at 0.8 Ra. Every thread pitch is within spec.',
    image: '/brass-bolt-3.png',
  },
  {
    num: '04',
    title: 'Quality Control',
    subtitle: 'Final Validation',
    detail: 'Dimensional inspection, surface finish verification, and functional testing before release. Go/no-go gauges for critical dimensions.',
    image: '/brass-quality.png',
  },
  {
    num: '05',
    title: 'Production Ready',
    subtitle: 'Batch Delivery',
    detail: 'Components cleaned, packed, and shipped with full inspection reports. Ready for assembly or further processing at your facility.',
    image: '/brass-collection.png',
  },
];

const stats = [
  { num: '06', label: 'Design Disciplines' },
  { num: '04', label: 'Product Categories' },
  { num: '01', label: 'mm Tolerance' },
  { num: '100', label: 'Inspected Output' },
];

const capabilities = [
  'CAD Design', 'Die Engineering', 'CNC Machining', 'Thread Cutting',
  'Surface Finishing', 'Quality Inspection', 'Batch Production', 'Custom OEM',
];

const divisions = [
  {
    title: 'Empiric Consultancy',
    desc: 'Industrial design consultancy covering product development, die design, CNC fixtures, reverse engineering, VAVE, and industrial packaging.',
    items: ['Product Design', 'Die Design', 'Fixture Design', 'Reverse Engineering', 'VAVE', 'Packaging'],
    image: '/brass-collection.png',
  },
  {
    title: 'Empiric TechCraft',
    desc: 'CNC precision manufacturing of electrical, plumbing, precision, and custom OEM components in brass, stainless steel and copper.',
    items: ['Electrical Components', 'Plumbing Parts', 'CNC Precision', 'General Engineering'],
    image: '/brass-quality.png',
  },
];

export default function About() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="w-full">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="page-offset relative min-h-[100svh] overflow-hidden bg-[#050a12] flex items-center">
        <EngineeringCanvas mode="dark" className="z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a12] via-[#080d14] to-[#050a12] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/90 via-transparent to-[#050a12] z-[1]" />
        <div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.06), transparent 70%)' }}
        />
        <div className="absolute inset-0 z-[2] grain opacity-60" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-[3] py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left: text */}
            <div className="lg:col-span-7 gsap-fade-up">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="luxury-label">About Us</div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#E87722]/20 to-transparent" />
              </div>
              <h1 className="text-[clamp(2.4rem,8vw,5.5rem)] font-bold text-white leading-[0.95] mb-8 md:mb-10 tracking-tight">
                Engineering<br />
                <span className="text-[#E87722] luxury-underline">Intelligence</span>
                <br />
                <span className="font-light">Precision</span>
              </h1>
              <p className="text-white/35 text-base sm:text-lg font-light max-w-md leading-[1.7] mb-10 md:mb-12">
                A precision engineering company built on two integrated specialisations —
                industrial design consultancy and CNC precision manufacturing.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Magnetic strength={0.3}>
                  <Link href="/consultancy" className="group relative inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white border border-white/10 px-6 sm:px-8 py-3.5 sm:py-4 hover:border-[#E87722]/40 transition-all duration-500">
                    <span>Consultancy</span>
                    <span className="text-[#E87722] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href="/manufacturing" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#050a12] bg-[#E87722] px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-[#f59540] transition-all duration-500">
                    <span>Manufacturing</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Right: floating bolt — hidden on mobile, visible lg+ only */}
            <div className="hidden lg:block lg:col-span-5 gsap-scale-in">
              <div className="relative max-w-[440px] ml-auto">
                <div className="absolute -inset-4 border border-[#E87722]/10" />
                <div className="absolute -top-3 -left-3 w-full h-full border border-[#E87722]/15" />
                <div className="relative bg-[#080d14] border border-white/[0.03] overflow-hidden">
                  <div className="aspect-[3/4] flex items-center justify-center p-8">
                    <img
                      src="/brass-bolt-1.png"
                      alt="Precision brass bolt"
                      className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                      draggable={false}
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#E87722]/30" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#E87722]/30" />
                  <div className="absolute bottom-6 left-6 bg-[#E87722] px-4 py-2.5">
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                      ±0.01mm
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 text-[10px] font-mono text-white/15 tracking-widest">
                    CNC MACHINED
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#0d1520] border border-[#E87722]/20 px-4 py-2">
                  <span className="text-[10px] font-mono text-[#E87722]/60 tracking-widest">BRASS · SS · COPPER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PHILOSOPHY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-fine opacity-50" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-5 gsap-fade-up">
              <div className="luxury-label mb-8 md:mb-10">Our Philosophy</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] mb-8 md:mb-10 tracking-tight">
                Built to<br />Deliver<br />
                <span className="text-[#E87722]">Precision.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#E87722] mb-8 md:mb-10" />
              <div className="space-y-5 text-[#1a2537]/45 text-[15px] leading-[1.8] max-w-md">
                <p>
                  We partner with manufacturers, OEMs, and product developers who need both engineering intelligence and production-ready output.
                </p>
                <p>
                  Our integrated model — design + manufacturing under one roof — eliminates costly handoff errors and accelerates timelines.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 gsap-fade-up">
              {/* Pull quote */}
              <div className="relative pl-8 md:pl-14 border-l-2 border-[#E87722]/15 mb-14 md:mb-20">
                <div className="luxury-quote-mark absolute -top-6 -left-5">&#8220;</div>
                <p className="text-xl sm:text-2xl md:text-[1.75rem] font-light text-[#0d1520] leading-[1.45] italic">
                  From concept sketches to CNC-machined components, our process is designed to maintain the quality standards that industrial clients demand.
                </p>
              </div>

              {/* Stats row — 2×2 on mobile, 4-col on md+ */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="gsap-fade-up relative"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute -top-4 left-0 w-12 h-[1px] bg-gradient-to-r from-[#E87722]/20 to-transparent" />
                    <div className="text-[clamp(1.8rem,4vw,3.5rem)] font-light text-[#E87722] leading-none mb-2 font-display tabular-nums">
                      {s.num}
                      {s.label === 'mm Tolerance' && <span className="text-base align-top text-[#E87722]/60">±</span>}
                    </div>
                    <div className="text-[10px] text-[#1a2537]/30 uppercase tracking-widest leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IMAGE SHOWCASE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#050a12]">
        <div className="absolute inset-0 grid-bg-fine opacity-[0.08]" />
        <div className="absolute inset-0 grain opacity-40" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image — shows second on mobile, first on lg */}
            <div className="gsap-fade-up order-2 lg:order-1">
              <div className="relative overflow-hidden">
                <div className="absolute -inset-4 sm:-inset-6 border border-[#E87722]/8" />
                <div className="absolute -inset-2 sm:-inset-3 border border-[#E87722]/5" />
                <img
                  src="/brass-collection.png"
                  alt="Precision brass components collection"
                  className="w-full aspect-[4/3] object-contain bg-[#080d14]"
                  draggable={false}
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[10px] font-mono text-[#E87722]/30 tracking-widest">
                  COLLECTION
                </div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#E87722] px-4 sm:px-5 py-2 sm:py-2.5">
                  <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-widest uppercase">8+ PRODUCTS</span>
                </div>
              </div>
            </div>

            {/* Text — shows first on mobile */}
            <div className="gsap-fade-up order-1 lg:order-2">
              <div className="luxury-label mb-6 sm:mb-8">Our Craft</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.05] mb-8 md:mb-10 tracking-tight">
                Precision in<br />
                <span className="text-[#E87722]">Every Component.</span>
              </h2>
              <p className="text-white/35 text-[15px] leading-[1.8] mb-8 md:mb-10 max-w-md">
                From raw brass bar stock to finished production-ready components, every step is engineered for precision. Our CNC lathes deliver ±0.01mm accuracy across brass, stainless steel, and copper alloys.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 md:mb-10">
                {[
                  { num: '±0.01mm', label: 'TOLERANCE' },
                  { num: '100%', label: 'QC INSPECTED' },
                  { num: '4+', label: 'MATERIALS' },
                  { num: '2024', label: 'FOUNDED' },
                ].map(item => (
                  <div key={item.label} className="border border-white/[0.04] p-4 sm:p-5 hover:border-[#E87722]/10 transition-all duration-500">
                    <div className="text-lg sm:text-xl font-bold text-[#E87722] mb-1">{item.num}</div>
                    <div className="text-[10px] text-white/25 tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
              <Magnetic strength={0.25}>
                <Link href="/manufacturing" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white border border-white/10 px-6 sm:px-8 py-3.5 sm:py-4 hover:border-[#E87722] transition-all duration-500">
                  <span>View Capabilities</span>
                  <span className="text-[#E87722] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROCESS — horizontal scroll on mobile, grid on md+
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 md:py-48 bg-[#050a12] overflow-hidden relative">
        <div className="absolute inset-0 grain opacity-30" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-16 md:mb-24 gsap-fade-up">
            <div>
              <div className="luxury-label mb-5 md:mb-6">Manufacturing Process</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.05] tracking-tight">
                From Bar Stock<br />to <span className="text-[#E87722]">Production Ready</span>
              </h2>
            </div>
            <p className="text-white/25 text-sm max-w-sm leading-relaxed">
              Five precise stages. Every component traced, inspected, and validated before it leaves our facility.
            </p>
          </div>

          {/* Mobile: horizontal snap scroll; md+: 5-col grid */}
          <div className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
            scrollbar-none [&::-webkit-scrollbar]:hidden
            md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0
          ">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="
                  gsap-fade-up group relative bg-[#080d14]/60 border border-white/[0.04] overflow-hidden
                  hover:border-[#E87722]/15 transition-all duration-700
                  snap-start shrink-0 w-[72vw] sm:w-[52vw] md:w-auto
                "
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] font-mono text-white/[0.06] group-hover:text-[#E87722]/20 transition-colors duration-500 z-10">
                  {step.num}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#080d14]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain p-4 sm:p-5 group-hover:scale-110 transition-transform duration-700"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a12] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono text-[#E87722] tracking-widest uppercase mb-2 sm:mb-3">
                    {step.subtitle}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight mb-2 sm:mb-3 group-hover:text-[#E87722] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-white/25 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E87722] group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DIVISIONS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 md:py-48 bg-[#f4f6f8] relative">
        <div className="absolute inset-0 grid-bg-fine opacity-40" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 md:mb-28 gsap-fade-up">
            <div className="luxury-label mb-6 sm:mb-8 justify-center">What We Do</div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] tracking-tight">
              Two Divisions.<br />One <span className="text-[#E87722]">Precision Standard</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {divisions.map((div, i) => (
              <div
                key={div.title}
                className="gsap-fade-up group bg-white border border-black/[0.04] overflow-hidden hover:border-[#E87722]/15 transition-all duration-700 relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Image header */}
                <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden bg-[#050a12]">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-contain p-6 sm:p-8 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E87722]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 sm:p-10 md:p-14">
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="w-10 sm:w-12 h-[1px] bg-[#E87722] shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0d1520] tracking-tight">
                      {div.title}
                    </h3>
                  </div>

                  <p className="text-[14px] text-[#1a2537]/40 leading-[1.8] mb-8 md:mb-10 max-w-md">
                    {div.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {div.items.map((item, j) => (
                      <span
                        key={item}
                        className="text-[10px] px-3 py-1.5 bg-[#f4f6f8] border border-black/[0.04] text-[#1a2537]/40 uppercase tracking-wider group-hover:border-[#E87722]/12 transition-all duration-500"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CAPABILITIES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 md:py-48 bg-white border-t border-black/[0.03] relative">
        <div className="absolute inset-0 grid-bg-fine opacity-30" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20 md:mb-24 gsap-fade-up">
            <div>
              <div className="luxury-label mb-6 sm:mb-8">Capabilities</div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d1520] tracking-tight leading-[1.05]">
                End-to-End<br /><span className="text-[#E87722]">Engineering</span>
              </h2>
            </div>
            <p className="sm:max-w-xs text-sm text-[#1a2537]/30 leading-[1.7]">
              Full-service capabilities from design through to production and inspection.
            </p>
          </div>

          {/* 2-col on mobile, 4-col on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-black/[0.04] gsap-stagger-container">
            {capabilities.map((cap, i) => (
              <div
                key={cap}
                className={`
                  gsap-stagger-item group p-7 sm:p-10 md:p-12 border-b border-r border-black/[0.04]
                  hover:bg-[#f4f6f8] transition-all duration-500 cursor-default
                  ${i % 2 === 1 ? 'border-r-0 md:border-r' : ''}
                  ${i % 4 === 3 ? 'md:border-r-0' : ''}
                  ${i >= capabilities.length - 2 ? 'border-b-0 md:border-b' : ''}
                  ${i >= capabilities.length - 4 ? 'md:border-b-0' : ''}
                `}
              >
                <div className="text-[clamp(2rem,4vw,3rem)] font-light text-[#E87722]/10 group-hover:text-[#E87722]/25 transition-colors duration-500 mb-4 sm:mb-5 font-display leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#0d1520] uppercase tracking-wider group-hover:text-[#E87722] transition-colors duration-500 leading-tight">
                  {cap}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════════════════════════ */}
      <MarqueeBand />

      {/* ═══════════════════════════════════════════════════════════════
          LOCATION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 md:py-48 bg-[#f4f6f8] relative">
        <div className="absolute inset-0 grid-bg-fine opacity-40" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            <div className="lg:col-span-5 gsap-fade-up">
              <div className="luxury-label mb-8 md:mb-10">Location</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] mb-8 md:mb-10 tracking-tight">
                Jamnagar,<br />
                <span className="text-[#E87722]">Gujarat · India</span>
              </h2>
              <p className="text-[#1a2537]/40 text-[15px] leading-[1.8] mb-10 md:mb-12 max-w-md">
                One of India's most prominent engineering and manufacturing hubs, known globally for brass components, precision machining, and die casting expertise.
              </p>
              <div className="space-y-5 sm:space-y-6 mb-10 md:mb-12">
                {[
                  { label: 'Address', val: 'Jamnagar, Gujarat 361001, India' },
                  { label: 'Phone', val: '+91 9974945400' },
                  { label: 'Email', val: 'sales@empirictechcraft.com' },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-[10px] text-[#1a2537]/20 uppercase tracking-widest shrink-0 w-12 sm:w-14">
                      {row.label}
                    </span>
                    <span className="text-sm text-[#1a2537]/55 break-all sm:break-normal">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
              <Magnetic strength={0.25}>
                <Link href="/contact" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-[#0d1520] px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-[#E87722] transition-all duration-500">
                  <span>Contact Us</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Magnetic>
            </div>

            <div className="lg:col-span-7 gsap-scale-in">
              <div className="relative overflow-hidden">
                <div className="absolute -inset-4 sm:-inset-6 border border-[#E87722]/8" />
                <div className="absolute -inset-2 sm:-inset-3 border border-[#E87722]/5" />
                <img
                  src="/brass-quality.png"
                  alt="Quality inspection of precision components"
                  className="w-full aspect-[16/10] object-contain bg-[#050a12]"
                  draggable={false}
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[10px] font-mono text-[#E87722]/25 tracking-widest">
                  QUALITY ASSURED
                </div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#E87722] px-4 sm:px-5 py-2 sm:py-2.5">
                  <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-widest uppercase">±0.01mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 md:py-32 bg-[#E87722] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <EngineeringCanvas mode="dark" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 grain opacity-20" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10 relative z-10">
          <div className="gsap-slide-left">
            <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-[1.05] tracking-tight mb-3 sm:mb-4">
              Ready to Start a<br />Project?
            </h3>
            <p className="text-white/60 text-sm font-light max-w-md leading-[1.7]">
              Talk to our engineering team about your requirements. We design, machine, and deliver.
            </p>
          </div>
          <Magnetic strength={0.25}>
            <Link
              href="/contact"
              className="group shrink-0 bg-white text-[#E87722] font-bold text-[11px] tracking-[0.2em] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#050a12] hover:text-white transition-all duration-500 whitespace-nowrap inline-flex items-center gap-3"
            >
              <span>Send an Enquiry</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Magnetic>
        </div>
      </section>

    </div>
  );
}