import React from 'react';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ScrollProductRotation } from '@/components/ui/ScrollProductRotation';
import { MagmaScrollSection } from '@/components/ui/MagmaScrollSection';
import MarqueeBand from '@/components/ui/MarqueeBand';
import { Magnetic } from '@/components/ui/Magnetic';
import { EngineeringCanvas } from '@/components/ui/EngineeringCanvas';
import bolt1 from '@assets/brass-bolt-1.png';
import bolt2 from '@assets/brass-bolt-2.png';
import bolt3 from '@assets/brass-bolt-3.png';

const images = [
  { src: bolt1, alt: 'CNC-machined brass bolt — side view' },
  { src: bolt2, alt: 'CNC-machined brass bolt — isometric view' },
  { src: bolt3, alt: 'CNC-machined brass bolt — thread detail' },
];

const labels = [
  'Machined from solid brass bar stock',
  'Precision threading to ±0.01mm',
  'Surface finish ready for plating',
];

export default function About() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="w-full">

      {/* ══════════════════════════════════════════════
          §1  HERO — light, grid-textured, left-aligned
      ══════════════════════════════════════════════ */}
      <section className="page-offset relative overflow-hidden bg-[#f8fafc] min-h-[80vh] flex items-center border-b border-black/6">
        {/* Engineering grid texture */}
        <div className="absolute inset-0 grid-bg opacity-70" />
        {/* Soft orange radial — top-right accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(232,119,34,0.06) 0%, transparent 65%)' }} />

        <EngineeringCanvas mode="light" className="z-[1] opacity-25" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-[2] py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div className="gsap-fade-up">
              <span className="section-label mb-6 block">About Us</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1520] leading-tight mb-6 tracking-tight">
                Engineering Intelligence.<br/>
                <span className="text-[#E87722]">Precision Manufacturing.</span>
              </h1>
              <p className="text-[#1a2537]/55 text-base md:text-lg font-light max-w-lg leading-relaxed mb-8">
                Empiric TechCraft is a precision engineering company built on two integrated
                specialisations — industrial design consultancy and CNC precision manufacturing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Magnetic strength={0.3}>
                  <Link href="/consultancy" className="btn-outline text-[10px]">Consultancy →</Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href="/manufacturing" className="btn-primary text-[10px]">Manufacturing →</Link>
                </Magnetic>
              </div>
            </div>

            {/* Part image — on light bg, no dark drop-shadow, use border-box treatment */}
            <div className="relative flex items-center justify-center gsap-scale-in">
              <div className="relative bg-white border border-black/8 p-10 md:p-14 flex items-center justify-center">
                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#E87722]" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#E87722]" />
                <img
                  src={bolt1}
                  alt="Precision brass bolt"
                  className="w-full max-w-[260px] h-auto object-contain"
                  style={{ filter: 'drop-shadow(0 8px 24px rgba(13,21,32,0.12))' }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#E87722] px-3 py-1.5 z-10">
                  <span className="text-[9px] font-bold text-white tracking-widest uppercase">±0.01mm</span>
                </div>
              </div>
              {/* Spec tag — top right */}
              <div className="absolute top-3 right-3 md:-top-3 md:-right-3 border border-black/8 bg-white px-3 py-1.5">
                <span className="text-[9px] font-bold text-[#1a2537]/40 tracking-widest uppercase font-mono">Brass · CW617N</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          §2  MAGMA SCROLL — component unchanged
              (handles its own bg internally)
      ══════════════════════════════════════════════ */}
      <MagmaScrollSection />


      {/* ══════════════════════════════════════════════
          §3  COMPONENT SHOWCASE — light header strip
      ══════════════════════════════════════════════ */}
      <section>
        <div className="bg-white py-10 md:py-14 text-center border-y border-black/6">
          <span className="section-label mb-3 justify-center block">Component Showcase</span>
          <p className="text-[#1a2537]/40 text-sm max-w-md mx-auto">
            Scroll to explore the precision of a single machined component
          </p>
        </div>
        <ScrollProductRotation images={images} labels={labels} />
      </section>


      {/* ══════════════════════════════════════════════
          §4  MISSION & VISION — white bg
      ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white border-t border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

            {/* Mission */}
            <div className="gsap-fade-up">
              <span className="section-label mb-6 block">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1520] leading-tight mb-6 tracking-tight">
                Built to Deliver Precision,<br/>Engineered for Partnership
              </h2>
              <p className="text-[#1a2537]/55 text-base leading-relaxed mb-5">
                We partner with manufacturers, OEMs, and product developers who need both
                engineering intelligence and production-ready output. Combining design expertise
                with machining precision under one roof.
              </p>
              <p className="text-[#1a2537]/35 text-sm leading-relaxed mb-10">
                From concept sketches to CNC-machined components, our process is designed to
                reduce handoff errors, accelerate timelines, and maintain the quality standards
                that industrial clients demand.
              </p>
              {/* Stat grid — navy fill cards, same treatment as home.tsx §6 */}
              <div className="grid grid-cols-2 gap-px bg-black/6">
                {[
                  { num: '06',    label: 'Design Disciplines' },
                  { num: '04',    label: 'Product Categories' },
                  { num: '±0.01', label: 'mm Tolerance' },
                  { num: '100%',  label: 'Inspected Output' },
                ].map(s => (
                  <div key={s.label} className="bg-[#0d1520] p-5 group hover:bg-[#1a2537] transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#E87722]/0 via-[#E87722]/40 to-[#E87722]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-xl font-bold text-white mb-1 font-display">{s.num}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Do */}
            <div className="gsap-fade-up">
              <span className="section-label mb-6 block">What We Do</span>
              <div className="space-y-4">
                {[
                  {
                    tag: 'DC',
                    title: 'Empiric Consultancy',
                    desc: 'Industrial design consultancy covering product development, die design, CNC fixtures, reverse engineering, VAVE, and industrial packaging.',
                    items: ['Product Design', 'Die Design', 'Fixture Design', 'Reverse Engineering', 'VAVE', 'Packaging'],
                    href: '/consultancy',
                  },
                  {
                    tag: 'TC',
                    title: 'Empiric TechCraft',
                    desc: 'CNC precision manufacturing of electrical, plumbing, precision, and custom OEM components in brass, stainless steel and copper.',
                    items: ['Electrical Components', 'Plumbing Parts', 'CNC Precision', 'General Engineering'],
                    href: '/manufacturing',
                  },
                ].map(div => (
                  <div key={div.title} className="border border-black/8 bg-[#f8fafc] p-6 md:p-8 group hover:border-[#E87722]/30 hover:bg-[#fdf8f4] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-[#E87722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 border border-[#E87722]/30 bg-white flex items-center justify-center shrink-0">
                        <span className="text-[8px] font-bold text-[#E87722]">{div.tag}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0d1520] tracking-tight">{div.title}</h3>
                    </div>
                    <p className="text-sm text-[#1a2537]/45 mb-5 leading-relaxed">{div.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {div.items.map(item => (
                        <span key={item} className="text-[10px] px-2.5 py-1 bg-white border border-black/8 text-[#1a2537]/50 uppercase tracking-wider group-hover:border-[#E87722]/20 transition-colors duration-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          §5  CAPABILITIES — cool off-white surface
      ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#f0f4f8] border-y border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-end justify-between mb-10 md:mb-14 gsap-fade-up">
            <div>
              <span className="section-label mb-3 block">Capabilities</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d1520] tracking-tight">
                End-to-End Engineering
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-black/8 bg-black/6 gsap-stagger-container">
            {[
              'CAD Design', 'Die Engineering', 'CNC Machining', 'Thread Cutting',
              'Surface Finishing', 'Quality Inspection', 'Batch Production', 'Custom OEM',
            ].map((cap, i) => (
              <div
                key={cap}
                className="gsap-stagger-item p-6 md:p-8 bg-white border-b border-r border-black/8 last:border-r-0 hover:bg-[#fdf8f4] transition-colors group relative overflow-hidden
                  [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r
                  md:[&:nth-child(4n)]:border-r-0
                  [&:nth-last-child(-n+2)]:border-b-0
                  md:[&:nth-last-child(-n+2)]:border-b
                  md:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-[#E87722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-2xl md:text-3xl font-bold text-[#E87722]/12 group-hover:text-[#E87722]/25 transition-colors mb-2 md:mb-3 font-display">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-[#0d1520] uppercase tracking-wider">{cap}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          §6  MARQUEE
      ══════════════════════════════════════════════ */}
      <MarqueeBand bg="#f0f4f8" textColor="rgba(13,21,32,0.22)" />


      {/* ══════════════════════════════════════════════
          §7  LOCATION — white bg
      ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white border-y border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            <div className="gsap-fade-up">
              <span className="section-label mb-6 block">Location</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1520] leading-tight mb-6 tracking-tight">
                Jamnagar, Gujarat<br/>
                <span className="text-[#E87722]">India</span>
              </h2>
              <p className="text-[#1a2537]/55 text-base leading-relaxed mb-6">
                Jamnagar is one of India's most prominent engineering and manufacturing hubs,
                known globally for brass components, precision machining, and die casting expertise.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Address', val: 'Jamnagar, Gujarat 361001, India' },
                  { label: 'Phone',   val: '+91 9974945400' },
                  { label: 'Email',   val: 'sales@empirictechcraft.com' },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline gap-3 border-b border-black/6 pb-3 last:border-b-0">
                    <span className="text-[10px] text-[#1a2537]/30 uppercase tracking-widest shrink-0 w-16">{row.label}</span>
                    <span className="text-sm text-[#1a2537]/65">{row.val}</span>
                  </div>
                ))}
              </div>
              <Magnetic strength={0.25}>
                <Link href="/contact" className="btn-primary text-[10px] inline-flex">Contact Us →</Link>
              </Magnetic>
            </div>

            {/* Map placeholder — cooler treatment on light theme */}
            <div className="relative gsap-scale-in">
              <div className="relative bg-[#f0f4f8] border border-black/8 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                {/* Crosshair target */}
                <div className="relative z-10 text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    {/* Rings */}
                    <div className="absolute w-24 h-24 border border-[#E87722]/15 rounded-full" />
                    <div className="absolute w-16 h-16 border border-[#E87722]/25 rounded-full" />
                    <div className="w-3 h-3 bg-[#E87722] rounded-full" />
                  </div>
                  <p className="text-xs font-bold text-[#0d1520] uppercase tracking-[0.3em] mb-1">Jamnagar</p>
                  <p className="text-[10px] text-[#1a2537]/40 uppercase tracking-widest mb-4">Gujarat · India</p>
                  <div className="w-px h-10 bg-[#E87722]/30 mx-auto my-2" />
                  <p className="text-[10px] text-[#1a2537]/30 font-mono tracking-widest">22.47°N &nbsp; 70.07°E</p>
                </div>
                {/* Corner marks */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#E87722]/40" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#E87722]/40" />
              </div>
              {/* Spec strip below map */}
              <div className="border border-t-0 border-black/8 bg-white px-6 py-4 flex items-center justify-between">
                <span className="text-[9px] text-[#1a2537]/30 uppercase tracking-widest">Manufacturing Hub</span>
                <span className="text-[9px] font-bold text-[#E87722] tracking-widest uppercase">Brass Capital of India</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          §8  CTA BAND — navy (matches home.tsx §9)
      ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#0d1520] relative overflow-hidden">
        {/* Grid on dark */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="gsap-slide-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Ready to Start a Project?
            </h3>
            <p className="text-white/50 text-sm font-light">
              Talk to our engineering team about your requirements.
            </p>
          </div>
          <Magnetic strength={0.25}>
            <Link
              href="/contact"
              className="btn-primary text-[11px] whitespace-nowrap inline-flex shrink-0 gsap-slide-right"
            >
              Send an Enquiry →
            </Link>
          </Magnetic>
        </div>
      </section>

    </div>
  );
}