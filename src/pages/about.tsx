import React from 'react';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Magnetic } from '@/components/ui/Magnetic';
import { EngineeringCanvas } from '@/components/ui/EngineeringCanvas';
import MarqueeBand from '@/components/ui/MarqueeBand';
import bolt1 from '@assets/brass-bolt-1.png';
import bolt2 from '@assets/brass-bolt-2.png';
import bolt3 from '@assets/brass-bolt-3.png';

const processSteps = [
  {
    num: '01',
    title: 'Material Selection',
    subtitle: 'Raw Brass Bar Stock',
    detail: 'Premium brass rods sourced from certified suppliers. Alloy composition verified for machinability, corrosion resistance, and electrical conductivity.',
    image: bolt1,
  },
  {
    num: '02',
    title: 'CNC Machining',
    subtitle: 'Precision Turning',
    detail: 'Multi-axis CNC lathes with live tooling. Threads cut to \u00b10.01mm accuracy. Hexagonal heads milled with precise geometry.',
    image: bolt2,
  },
  {
    num: '03',
    title: 'Thread Inspection',
    subtitle: 'Precision Verification',
    detail: 'Helical thread profiles verified with calibrated gauges. Surface roughness checked at 0.8 Ra. Every thread pitch is within spec.',
    image: bolt3,
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
  },
  {
    title: 'Empiric TechCraft',
    desc: 'CNC precision manufacturing of electrical, plumbing, precision, and custom OEM components in brass, stainless steel and copper.',
    items: ['Electrical Components', 'Plumbing Parts', 'CNC Precision', 'General Engineering'],
  },
];

export default function About() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="w-full">

      {/* ═══════════════════════════════════════════════
          HERO — Cinematic full viewport
      ═══════════════════════════════════════════════ */}
      <section className="page-offset relative overflow-hidden bg-[#080d14]">
        <EngineeringCanvas mode="dark" className="z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080d14] via-[#0a1018] to-[#080d14] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d14]/80 via-transparent to-[#080d14] z-[1]" />

        {/* Subtle gold radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.4), transparent 70%)' }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-[2] py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 gsap-fade-up">
              <div className="flex items-center gap-4 mb-10">
                <div className="luxury-label">About Us</div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#E87722]/20 to-transparent" />
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[0.95] mb-10 tracking-tight">
                Engineering<br />
                <span className="text-[#E87722] luxury-underline">Intelligence</span>
                <br />
                <span className="font-light">Precision</span>
              </h1>
              <p className="text-white/40 text-lg font-light max-w-md leading-[1.7] mb-12">
                A precision engineering company built on two integrated specialisations —
                industrial design consultancy and CNC precision manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Magnetic strength={0.3}>
                  <Link href="/consultancy" className="group relative inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white border border-white/15 px-8 py-4 hover:border-[#E87722]/40 transition-all duration-500">
                    <span>Consultancy</span>
                    <span className="text-[#E87722] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href="/manufacturing" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0a1018] bg-[#E87722] px-8 py-4 hover:bg-[#f59540] transition-all duration-500">
                    <span>Manufacturing</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Magnetic>
              </div>
            </div>
            <div className="lg:col-span-5 gsap-scale-in">
              <div className="relative max-w-[420px] ml-auto">
                {/* Decorative frame */}
                <div className="absolute -top-3 -left-3 w-full h-full border border-[#E87722]/20" />
                <div className="relative bg-[#0a1018] border border-white/5 overflow-hidden">
                  <div className="aspect-[3/4] flex items-center justify-center p-8">
                    <img
                      src={bolt1}
                      alt="Precision brass bolt"
                      className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                      draggable={false}
                    />
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#E87722]/40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#E87722]/40" />
                  {/* Tolerance badge */}
                  <div className="absolute bottom-6 left-6 bg-[#E87722] px-4 py-2">
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                      ±0.01mm
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 text-[10px] font-mono text-white/20 tracking-widest">
                    CNC MACHINED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHILOSOPHY — Editorial with pull quote
      ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 gsap-fade-up">
              <div className="luxury-label mb-8">Our Philosophy</div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#0d1520] leading-[1.1] mb-8 tracking-tight">
                Built to<br />Deliver<br />
                <span className="text-[#E87722]">Precision.</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#E87722] mb-8" />
              <div className="space-y-5 text-[#1a2537]/50 text-[15px] leading-[1.8] max-w-md">
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
              <div className="relative pl-8 md:pl-12 border-l-2 border-[#E87722]/20 mb-16">
                <div className="luxury-quote-mark absolute -top-4 -left-4">&#8220;</div>
                <p className="text-2xl md:text-3xl font-light text-[#0d1520] leading-[1.4] italic">
                  From concept sketches to CNC-machined components, our process is designed to maintain the quality standards that industrial clients demand.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                {stats.map((s, i) => (
                  <div key={s.label} className="gsap-fade-up text-center md:text-left" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#E87722] leading-none mb-3 font-display tabular-nums">
                      {s.num}
                      {s.label === 'mm Tolerance' && <span className="text-lg align-top text-[#E87722]/60">±</span>}
                    </div>
                    <div className="text-[10px] text-[#1a2537]/35 uppercase tracking-widest">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROCESS — Dark luxury cards
      ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-[#080d14] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 gsap-fade-up">
            <div>
              <div className="luxury-label mb-6">Manufacturing Process</div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight">
                From Bar Stock<br />to <span className="text-[#E87722]">Production Ready</span>
              </h2>
            </div>
            <p className="text-white/30 text-sm max-w-sm leading-relaxed">
              Five precise stages. Every component traced, inspected, and validated before it leaves our facility.
            </p>
          </div>

          {/* Process cards — luxury horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="gsap-fade-up group relative luxury-card overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/10 group-hover:text-[#E87722]/30 transition-colors duration-500">
                  {step.num}
                </div>

                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d1520]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[10px] font-mono text-[#E87722] tracking-widest uppercase mb-3">
                    {step.subtitle}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight mb-3 group-hover:text-[#E87722] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-white/30 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E87722] group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DIVISIONS — Two-column luxury
      ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-[#f4f6f8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-20 md:mb-24 gsap-fade-up">
            <div className="luxury-label mb-6 justify-center">What We Do</div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#0d1520] leading-[1.1] tracking-tight">
              Two Divisions.<br />One <span className="text-[#E87722]">Precision Standard</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((div, i) => (
              <div
                key={div.title}
                className="gsap-fade-up group bg-white border border-black/[0.06] p-10 md:p-12 hover:border-[#E87722]/20 transition-all duration-700 relative overflow-hidden"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E87722]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-[1px] bg-[#E87722]" />
                  <h3 className="text-lg font-bold text-[#0d1520] tracking-tight">
                    {div.title}
                  </h3>
                </div>

                <p className="text-[14px] text-[#1a2537]/45 leading-[1.8] mb-10 max-w-md">
                  {div.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {div.items.map((item, j) => (
                    <span
                      key={item}
                      className="text-[10px] px-3 py-1.5 bg-[#f4f6f8] border border-black/[0.06] text-[#1a2537]/45 uppercase tracking-wider group-hover:border-[#E87722]/15 transition-all duration-500"
                      style={{ transitionDelay: `${j * 50}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CAPABILITIES — Elegant grid
      ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-white border-t border-black/[0.04]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-end justify-between mb-16 md:mb-20 gsap-fade-up">
            <div>
              <div className="luxury-label mb-6">Capabilities</div>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-[#0d1520] tracking-tight leading-[1.1]">
                End-to-End<br /><span className="text-[#E87722]">Engineering</span>
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#1a2537]/35 max-w-xs leading-[1.7]">
              Full-service capabilities from design through to production and inspection.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border border-black/[0.06] gsap-stagger-container">
            {capabilities.map((cap, i) => (
              <div
                key={cap}
                className="gsap-stagger-item group p-8 md:p-10 border-b border-r border-black/[0.06] hover:bg-[#f4f6f8] transition-all duration-500 cursor-default
                  [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r
                  md:[&:nth-child(4n)]:border-r-0
                  [&:nth-last-child(-n+2)]:border-b-0
                  md:[&:nth-last-child(-n+2)]:border-b
                  md:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <div className="text-[clamp(2.5rem,4vw,3rem)] font-light text-[#E87722]/15 group-hover:text-[#E87722]/30 transition-colors duration-500 mb-4 font-display leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xs font-bold text-[#0d1520] uppercase tracking-wider group-hover:text-[#E87722] transition-colors duration-500">
                  {cap}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════════ */}
      <MarqueeBand />

      {/* ═══════════════════════════════════════════════
          LOCATION — Minimal editorial
      ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 bg-[#f4f6f8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 gsap-fade-up">
              <div className="luxury-label mb-8">Location</div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#0d1520] leading-[1.1] mb-8 tracking-tight">
                Jamnagar,<br />
                <span className="text-[#E87722]">Gujarat · India</span>
              </h2>
              <p className="text-[#1a2537]/50 text-[15px] leading-[1.8] mb-10 max-w-md">
                One of India's most prominent engineering and manufacturing hubs, known globally for brass components, precision machining, and die casting expertise.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { label: 'Address', val: 'Jamnagar, Gujarat 361001, India' },
                  { label: 'Phone', val: '+91 9974945400' },
                  { label: 'Email', val: 'sales@empirictechcraft.com' },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline gap-6">
                    <span className="text-[10px] text-[#1a2537]/25 uppercase tracking-widest shrink-0 w-14">
                      {row.label}
                    </span>
                    <span className="text-sm text-[#1a2537]/60">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
              <Magnetic strength={0.25}>
                <Link href="/contact" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-[#0d1520] px-8 py-4 hover:bg-[#E87722] transition-all duration-500">
                  <span>Contact Us</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Magnetic>
            </div>
            <div className="lg:col-span-7 gsap-scale-in">
              <div className="relative bg-[#0d1520] aspect-[16/10] flex items-center justify-center overflow-hidden">
                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 grid-bg-fine" />
                </div>
                {/* Gold accent */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E87722]/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA — Full width orange
      ═══════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-[#E87722] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <EngineeringCanvas mode="dark" />
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:40px_40px]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 relative z-10">
          <div className="gsap-slide-left">
            <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Ready to Start a<br />Project?
            </h3>
            <p className="text-white/70 text-sm font-light max-w-md leading-[1.7]">
              Talk to our engineering team about your requirements. We design, machine, and deliver.
            </p>
          </div>
          <Magnetic strength={0.25}>
            <Link
              href="/contact"
              className="group shrink-0 bg-white text-[#E87722] font-bold text-[11px] tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#0d1520] hover:text-white transition-all duration-500 whitespace-nowrap inline-flex items-center gap-3"
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
