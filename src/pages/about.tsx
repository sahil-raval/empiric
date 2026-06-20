import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Magnetic } from '@/components/ui/Magnetic';
import { EngineeringCanvas } from '@/components/ui/EngineeringCanvas';
import MarqueeBand from '@/components/ui/MarqueeBand';

// ─── IMAGE REGISTRY ──────────────────────────────────────────────────────────
// All Unsplash URLs — free commercial use, no faces, no logos
// Download each to /public/ for production use (filename in comment)

const IMAGES = {
  // Hero: brass hex bolt close-up, dark bg → /hero-bolt.jpg
  heroBolt: '/hero-bolt.jpg',

  // Process 01 — raw metal bar stock rods → /process-material.jpg
  processMaterial: '/process-material.jpg',

  // Process 02 — CNC lathe cutting metal, no person → /process-cnc.jpg
  processCnc: '/process-cnc.jpg',

  // Process 03 — metal cutting close-up, tool on dark bg → /process-cutting.jpg
  processCutting: '/process-cutting.jpg',

  // Process 04 — precision caliper measuring metal part → /process-inspect.jpg
  processInspect: '/process-inspect.jpg',

  // Process 05 — packaged industrial components → /process-delivery.jpg
  processDelivery: '/process-delivery.jpg',

  // Our Story / Showcase — Empiric's own brass components product photo → /empiric-components.jpeg
  componentsShowcase: '/empiric-components.jpeg',

  // Consultancy division — Empiric's own design consultancy image → /empiric-consultancy.jpeg
  consultancyDivision: '/empiric-consultancy.jpeg',

  // TechCraft division — Empiric's own components manufacturing photo → /empiric-components.jpeg
  techcraftDivision: '/empiric-components.jpeg',

  // Location section — Empiric overview banner → /empiric-overview.jpeg
  locationImage: '/empiric-overview.jpeg',

  // Machine gears close-up dark industrial → /gears-dark.jpg
  gearsCloseup: '/gears-dark.jpg',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const processSteps = [
  {
    num: '01',
    title: 'Material Selection',
    subtitle: 'Raw Brass Bar Stock',
    detail: 'Premium brass rods sourced from certified suppliers. Alloy composition verified for machinability, corrosion resistance, and electrical conductivity.',
    image: IMAGES.processMaterial,
    gradient: 'from-[#E87722]/20 via-transparent to-transparent',
  },
  {
    num: '02',
    title: 'CNC Machining',
    subtitle: 'Precision Turning',
    detail: 'Multi-axis CNC lathes with live tooling. Threads cut to ±0.01mm accuracy. Hexagonal heads milled with precise geometry.',
    image: IMAGES.processCnc,
    gradient: 'from-[#0d1520]/80 via-transparent to-transparent',
  },
  {
    num: '03',
    title: 'Thread Cutting',
    subtitle: 'Precision Machining',
    detail: 'Helical thread profiles verified with calibrated gauges. Surface roughness checked at 0.8 Ra. Every thread pitch is within spec.',
    image: IMAGES.processCutting,
    gradient: 'from-[#E87722]/15 via-transparent to-transparent',
  },
  {
    num: '04',
    title: 'Quality Control',
    subtitle: 'Final Validation',
    detail: 'Dimensional inspection, surface finish verification, and functional testing before release. Go/no-go gauges for critical dimensions.',
    image: IMAGES.processInspect,
    gradient: 'from-[#0d1520]/80 via-transparent to-transparent',
  },
  {
    num: '05',
    title: 'Production Ready',
    subtitle: 'Batch Delivery',
    detail: 'Components cleaned, packed, and shipped with full inspection reports. Ready for assembly or further processing at your facility.',
    image: IMAGES.processDelivery,
    gradient: 'from-[#E87722]/15 via-transparent to-transparent',
  },
];

const capabilities = [
  'CAD Design', 'Die Engineering', 'CNC Machining', 'Thread Cutting',
  'Fixture & Cutting Tool Design', 'Surface Finishing', 'Quality Inspection', 'Batch Production', 'Custom OEM',
];

const historyMilestones = [
  {
    year: '2008',
    title: 'Engineering Foundations',
    desc: 'Divyen Mungra began his engineering career at ABC Bearings Ltd, designing tooling and assembly drawings for the automotive industry, working with Tata, Toyota, Eicher, and Force Motor supply chains.',
  },
  {
    year: '2010',
    title: 'Process & Plant Design',
    desc: 'Moved into industrial design at Bectochem Consultants & Engineers, creating P&IDs, piping layouts, and general arrangement drawings for chemical processing plants in Ankleshwar.',
  },
  {
    year: '2011',
    title: '18+ Years of Hands-on Design & Development',
    desc: 'Joined a leading global MNC as Design Engineer, rapidly advancing to a senior design and development role, gaining hands-on expertise in LPDC/GDC die design, fixture and cutting tool design, and product development. Specialised in LPDC and GDC die design for low-lead brass, led product development under APQP, DFMEA, and PFMEA frameworks.',
  },
  {
    year: '2018',
    title: 'Advanced Casting Tooling Leadership',
    desc: 'Led hands-on design of complex low-wall-thickness casting tooling. Developed deep expertise in GD&T, fixture and cutting tool design, and multi-cavity die engineering for kitchen and bath product lines supplied globally.',
  },
  {
    year: '2024',
    title: 'Empiric TechCraft: Independent Practice',
    desc: 'Drawing on 18+ years of engineering leadership, Divyen founded Empiric TechCraft: two integrated divisions combining industrial design consultancy with CNC precision manufacturing, bringing deep industry expertise to clients in Jamnagar and beyond.',
  },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Zero-Compromise Quality',
    desc: 'Every component leaves our facility only after passing dimensional inspection, surface finish verification, and functional testing. 100% QC is not a promise; it is our process.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Engineering First',
    desc: 'We approach every component as an engineering problem, not a manufacturing task. Design intelligence is embedded in every decision, from material selection to final finish.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Transparent Partnership',
    desc: 'Full traceability on every batch. Inspection reports shipped with components. We operate with complete transparency so clients can trust what is being delivered without second-guessing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time, Every Time',
    desc: 'Production timelines are commitments. Our integrated design-and-manufacture model eliminates handoff delays. We plan to deliver on schedule and build our reputation on it.',
  },
];

const whyBest = [
  {
    num: '18+',
    unit: '',
    label: 'Years Engineering Experience',
    desc: 'Founder Divyen Mungra brings 18+ years of hands-on design and development experience spanning local Jamnagar manufacturing and global MNC environments. That discipline is applied to every Empiric component.al OEM. That OEM-grade engineering discipline is applied to every Empiric component.',
  },
  {
    num: '±0.01',
    unit: 'mm',
    label: 'Tolerance Capability',
    desc: 'Multi-axis CNC machining delivers tolerances most Jamnagar facilities cannot guarantee consistently. Documented on every inspection report.',
  },
  {
    num: 'LPDC',
    unit: '+GDC',
    label: 'Die Design Expertise',
    desc: 'Low-pressure and gravity die casting tooling design, including low-wall-thickness and low-lead brass dies, is built into our consultancy from day one.',
  },
  {
    num: '100%',
    unit: '',
    label: 'QC on Every Batch',
    desc: 'APQP, DFMEA, and go/no-go gauge verification on every production run. The same quality discipline global OEMs demand, applied at Empiric scale.',
  },
];

// ─── TABS ────────────────────────────────────────────────────────────────────

const TABS = ['Our Story', 'History', 'Our Values'] as const;
type Tab = typeof TABS[number];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function About() {
  const containerRef = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<Tab>('Our Story');

  return (
    <div ref={containerRef} className="w-full">

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="page-offset relative overflow-hidden bg-[#0d1520]">
        <EngineeringCanvas mode="dark" className="z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1520] via-[#111d2e] to-[#0d1520] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1520]/90 via-transparent to-[#0d1520] z-[1]" />
        <div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.06), transparent 70%)' }}
        />
        <div className="absolute inset-0 z-[2] grain opacity-40" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-[3] py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-7 gsap-fade-up">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="luxury-label">About Us</div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#E87722]/20 to-transparent" />
              </div>
              <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-bold text-white leading-[1.05] mb-5 md:mb-6 tracking-tight">
                Engineering<br />
                <span className="text-[#E87722]">Intelligence.</span><br />
                <span className="font-light text-white/80">Precision.</span>
              </h1>
              <p className="text-white/75 text-sm sm:text-base font-light max-w-lg leading-[1.75] mb-3">
                A precision engineering company built on two integrated specialisations:
                industrial design consultancy and CNC precision manufacturing.
              </p>
              <p className="text-white/50 text-xs sm:text-sm font-light max-w-lg leading-[1.7] mb-8 md:mb-10">
                Founded by <span className="text-[#E87722]/70">Divyen Mungra</span>, former senior design and development lead at a leading global OEM, with <span className="text-[#E87722]/70">18+ years of brass engineering expertise</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/consultancy" className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-white border border-white/20 px-5 py-3 hover:border-[#E87722] hover:text-[#E87722] transition-all duration-300">
                  <span>Consultancy</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/manufacturing" className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-white border border-white/20 px-5 py-3 hover:border-[#E87722] hover:text-[#E87722] transition-all duration-300">
                  <span>Manufacturing</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right: image card — dark bg with gradient overlay */}
            <div className="hidden lg:block lg:col-span-5 gsap-scale-in">
              <div className="relative max-w-[400px] ml-auto">
                <div className="absolute -inset-3 border border-[#E87722]/10" />
                <div className="relative overflow-hidden">
                  <img
                    src={IMAGES.heroBolt}
                    alt="Precision brass components"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                  {/* Immersive gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-[#0d1520]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E87722]/10 via-transparent to-transparent" />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#E87722]/40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#E87722]/40" />
                  <div className="absolute bottom-4 left-4 bg-[#E87722] px-3 py-2">
                    <span className="text-[9px] font-bold text-white tracking-widest uppercase">±0.01mm Tolerance</span>
                  </div>
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-white/30 tracking-widest">CNC MACHINED</div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#0d1520] border border-[#E87722]/20 px-3 py-1.5">
                  <span className="text-[9px] font-mono text-[#E87722]/60 tracking-widest">BRASS · SS · COPPER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          OWNER CREDIBILITY
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f0f2f5] relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-10" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.06), transparent 70%)' }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <div className="lg:col-span-5 gsap-fade-up">
              <div className="relative">
                <div className="absolute -inset-4 border border-[#E87722]/8" />
                <div className="bg-white border border-black/[0.07] p-8 sm:p-10 relative shadow-sm">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#E87722]/40" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#E87722]/40" />
                  <div className="w-16 h-16 rounded-full bg-[#E87722]/10 border border-[#E87722]/30 flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8 text-[#E87722]/60">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-mono text-[#E87722] tracking-widest uppercase mb-3">Founder & Director</div>
                  <h3 className="text-xl font-bold text-[#0d1520] mb-1 tracking-tight">Divyen Mungra</h3>
                  <div className="text-[#1a2537]/60 text-sm mb-6">Jamnagar, Gujarat · India</div>
                  <div className="border-t border-black/[0.07] pt-6 space-y-4">
                    {[
                      { label: 'Experience', val: '18+ Years in Brass Engineering' },
                      { label: 'Role', val: 'Design & Development Lead · MNC OEM' },
                      { label: 'Specialisation', val: 'LPDC/GDC Die Design · Creo · GD&T' },
                      { label: 'Expertise', val: 'APQP · DFMEA · PFMEA · GD&T' },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-baseline gap-4">
                        <span className="text-[10px] text-[#1a2537]/45 uppercase tracking-widest shrink-0">{row.label}</span>
                        <span className="text-[13px] text-[#1a2537]/70 text-right">{row.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-black/[0.07]">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 20 20" fill="#E87722" className="w-3.5 h-3.5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                      <span className="text-[10px] text-[#1a2537]/45 ml-1 tracking-widest">TRUSTED BY INDUSTRY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 gsap-fade-up">
              <div className="luxury-label mb-8">Leadership & Experience</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] mb-8 tracking-tight">
                18+ Years of<br />
                <span className="text-[#E87722]">Precision Engineering.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#E87722] mb-8" />
              <div className="space-y-5 text-[#1a2537]/65 text-[15px] leading-[1.85] max-w-lg">
                <p>Empiric TechCraft is founded by <strong className="text-[#1a2537]/80">Divyen Mungra</strong>, a mechanical engineer with 18+ years of hands-on design and development experience across local Jamnagar manufacturing and senior roles within leading global MNC organisations.</p>
                <p>He developed hands-on expertise in LPDC and GDC die design for low-lead and special-grade brass, CNC fixture and cutting tool design, 3D flow simulation for casting validation, and end-to-end product development applying APQP, DFMEA, and PFMEA frameworks.</p>
                <p>At Empiric, that same engineering rigour is applied directly to every client engagement. Your specifications are handled by the engineer who built the process, with full accountability from design through to delivery.</p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: '18+ Yrs Hands-on D&D Experience', desc: 'Hands-on design and development spanning local Jamnagar manufacturing and senior roles at leading multinational OEMs.' },
                  { title: 'LPDC, GDC & Fixture/Cutting Tool Design', desc: 'Low-lead brass die design, low-wall-thickness casting tooling, and CNC fixture & cutting tool design.' },
                  { title: '3D Casting Simulation', desc: 'Flow simulation to validate tooling design before any metal is poured.' },
                  { title: 'APQP · DFMEA · GD&T', desc: 'Every component developed under structured quality frameworks from day one.' },
                ].map(item => (
                  <div key={item.title} className="border border-black/[0.07] p-5 hover:border-[#E87722]/20 transition-all duration-500">
                    <div className="w-6 h-[1px] bg-[#E87722] mb-3" />
                    <div className="text-[12px] font-bold text-[#0d1520] mb-1.5 tracking-tight">{item.title}</div>
                    <div className="text-[11px] text-[#1a2537]/60 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TABBED SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative">
        <div className="absolute inset-0 grid-bg-fine opacity-40" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="flex border-b border-black/[0.06] mb-10 overflow-x-auto scrollbar-none gsap-fade-up">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-6 sm:px-10 py-4 text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-[#E87722] text-[#E87722]'
                    : 'border-transparent text-[#1a2537]/50 hover:text-[#1a2537]/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Our Story' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <div className="luxury-label mb-6 text-[#E87722]">Who We Are</div>
                <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#0d1520] mb-8 leading-[1.05] tracking-tight">
                  Born in Jamnagar.<br />Built for <span className="text-[#E87722]">the World.</span>
                </h3>
                <div className="space-y-5 text-[#1a2537]/65 text-[15px] leading-[1.85] max-w-md">
                  <p>Empiric TechCraft operates from Jamnagar, India's brass manufacturing capital, responsible for over 70% of the world's brass components. We are not just located here; we are a product of this ecosystem.</p>
                  <p>Our integrated model of design consultancy plus CNC precision manufacturing eliminates the costly handoff errors that occur when engineering and production are separated. Fewer errors. Faster timelines. Better components.</p>
                  <p>We partner with manufacturers, OEMs, and product developers who need both engineering intelligence and production-ready output, delivered under one roof by one accountable team.</p>
                </div>
                <div className="mt-10">
                  <Magnetic strength={0.25}>
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-[#0d1520] px-8 py-4 hover:bg-[#E87722] transition-all duration-500">
                      <span>Start a Conversation</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 border border-[#E87722]/8" />
                <div className="relative overflow-hidden">
                  <img
                    src="/jamnagar.png"
                    alt="Empiric brass precision components"
                    className="w-full aspect-[4/3] object-cover"
                    draggable={false}
                  />
                  {/* Warm orange gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E87722]/10 via-transparent to-transparent" />
                </div>
                <div className="absolute top-4 left-4 text-[10px] font-mono text-[#E87722]/50 tracking-widest">EMPIRIC COMPONENTS</div>
                <div className="absolute bottom-4 right-4 bg-[#E87722] px-5 py-2.5">
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">Jamnagar, India</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'History' && (
            <div>
              <div className="luxury-label mb-8">Our Journey</div>
              <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#0d1520] mb-14 leading-[1.05] tracking-tight">
                18+ Years in the<br /><span className="text-[#E87722]">Making.</span>
              </h3>
              <div className="relative">
                <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[#E87722]/40 via-[#E87722]/15 to-transparent hidden sm:block" />
                <div className="space-y-0">
                  {historyMilestones.map((m, i) => (
                    <div key={m.year} className="relative flex gap-8 sm:gap-12 pb-12 last:pb-0">
                      <div className="shrink-0 hidden sm:flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-[#E87722] flex items-center justify-center z-10 relative">
                          <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="sm:hidden w-8 h-8 rounded-full bg-[#E87722] flex items-center justify-center shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          </div>
                          <div className="text-[#E87722] text-xl font-bold tracking-tight">{m.year}</div>
                          <div className="flex-1 h-px bg-[#E87722]/10" />
                        </div>
                        <h4 className="text-[#0d1520] font-bold text-base mb-2 tracking-tight">{m.title}</h4>
                        <p className="text-[#1a2537]/60 text-[14px] leading-[1.8] max-w-lg">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Our Values' && (
            <div>
              <div className="luxury-label mb-8">What We Stand For</div>
              <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#0d1520] mb-14 leading-[1.05] tracking-tight">
                Our Core<br /><span className="text-[#E87722]">Values.</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v) => (
                  <div key={v.title} className="group border border-black/[0.05] p-10 sm:p-12 hover:border-[#E87722]/20 hover:bg-[#f8f9fb] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E87722] group-hover:w-full transition-all duration-700 ease-out" />
                    <div className="w-14 h-14 rounded-full bg-[#E87722]/8 border border-[#E87722]/15 flex items-center justify-center mb-7 text-[#E87722]">
                      {v.icon}
                    </div>
                    <h4 className="text-[#0d1520] font-bold text-lg mb-3 tracking-tight group-hover:text-[#E87722] transition-colors duration-500">{v.title}</h4>
                    <p className="text-[#1a2537]/60 text-[15px] leading-[1.85]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHY EMPIRIC
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f0f2f5] relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-10" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,119,34,0.07), transparent 70%)' }} />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 gsap-fade-up">
            <div className="luxury-label mb-6 justify-center">Jamnagar's Best</div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] tracking-tight mb-5">
              Why Choose <span className="text-[#E87722]">Empiric?</span>
            </h2>
            <p className="text-[#1a2537]/60 text-[15px] max-w-xl mx-auto leading-[1.8]">
              Jamnagar has thousands of brass manufacturers. Here is what sets us apart, in specifics, not slogans.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {whyBest.map((w, i) => (
              <div key={w.label} className="gsap-fade-up group relative bg-white border border-black/[0.07] p-8 hover:border-[#E87722]/20 transition-all duration-700 overflow-hidden shadow-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E87722] group-hover:w-full transition-all duration-700 ease-out" />
                <div className="text-[clamp(2.2rem,5vw,3rem)] font-bold text-[#E87722] leading-none mb-1 tabular-nums">
                  {w.num}<span className="text-lg text-[#E87722]/50">{w.unit}</span>
                </div>
                <div className="text-[10px] text-[#1a2537]/50 uppercase tracking-widest mb-5">{w.label}</div>
                <div className="w-8 h-px bg-[#E87722]/30 mb-5" />
                <p className="text-[12px] text-[#1a2537]/60 leading-[1.8]">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="gsap-fade-up bg-white border border-black/[0.07] overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 border-b border-black/[0.07]">
              <div className="p-5 text-[10px] font-bold text-[#1a2537]/50 uppercase tracking-widest">Criteria</div>
              <div className="p-5 text-[10px] font-bold text-[#E87722] uppercase tracking-widest border-l border-black/[0.07]">Empiric TechCraft</div>
              <div className="p-5 text-[10px] font-bold text-[#1a2537]/50 uppercase tracking-widest border-l border-black/[0.07]">Typical Jamnagar Shop</div>
            </div>
            {[
              ['Tolerance Capability', '±0.01mm guaranteed', 'Varies, often undocumented'],
              ['Design Integration', 'Full consultancy division', 'Manufacturing only'],
              ['Inspection Reports', 'Full batch documentation', 'Rarely provided'],
              ['Founder Background', 'Design & Development Lead · MNC OEM', 'Typically no hands-on OEM experience'],
              ['Die Design', 'LPDC · GDC · 3D Flow Simulation', 'Usually not available'],
              ['Fixture & Cutting Tool Design', 'CNC fixtures · Cutting tool geometry', 'Rarely offered'],
              ['Quality Framework', 'APQP · DFMEA · PFMEA · GD&T', 'Informal or absent'],
            ].map(([crit, us, them], i) => (
              <div key={crit} className={`grid grid-cols-3 border-b border-black/[0.05] last:border-0 ${i % 2 === 1 ? 'bg-[#f9fafb]' : ''}`}>
                <div className="p-4 sm:p-5 text-[12px] text-[#1a2537]/65">{crit}</div>
                <div className="p-4 sm:p-5 text-[12px] text-[#1a2537]/75 border-l border-black/[0.05] flex items-center gap-2">
                  <span className="text-[#E87722] shrink-0">✓</span>{us}
                </div>
                <div className="p-4 sm:p-5 text-[12px] text-[#1a2537]/45 border-l border-black/[0.05]">{them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          IMAGE SHOWCASE — with immersive gradient
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1520]">
        {/* Full-bleed background image with dark gradient */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.gearsCloseup}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1520] via-[#0d1520]/80 to-[#0d1520]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-transparent to-[#0d1520]/80" />
        </div>
        <div className="absolute inset-0 grain opacity-20" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="gsap-fade-up order-2 lg:order-1">
              <div className="relative overflow-hidden">
                <div className="absolute -inset-3 border border-[#E87722]/15" />
                <img
                  src="/precision-about.png"
                  alt="Empiric precision brass components collection"
                  className="w-full aspect-[4/3] object-cover"
                  draggable={false}
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#E87722]/15 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] font-mono text-[#E87722]/50 tracking-widest">PRECISION COMPONENTS</div>
                <div className="absolute bottom-4 right-4 bg-[#E87722] px-4 py-2">
                  <span className="text-[9px] font-bold text-white tracking-widest uppercase">50+ Components</span>
                </div>
              </div>
            </div>
            <div className="gsap-fade-up order-1 lg:order-2">
              <div className="luxury-label mb-6 sm:mb-8">Our Craft</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.05] mb-8 md:mb-10 tracking-tight">
                Precision in<br />
                <span className="text-[#E87722]">Every Component.</span>
              </h2>
              <p className="text-white/65 text-[15px] leading-[1.8] mb-8 md:mb-10 max-w-md">
                From raw brass bar stock to finished production-ready components, every step is engineered for precision. Our CNC lathes deliver ±0.01mm accuracy across brass, stainless steel, and copper alloys.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 md:mb-10">
                {[
                  { num: '±0.01mm', label: 'TOLERANCE' },
                  { num: '100%', label: 'QC INSPECTED' },
                  { num: '4+', label: 'MATERIALS' },
                  { num: '2024', label: 'FOUNDED' },
                ].map(item => (
                  <div key={item.label} className="border border-white/[0.08] p-4 sm:p-5 hover:border-[#E87722]/30 transition-all duration-500">
                    <div className="text-lg sm:text-xl font-bold text-[#E87722] mb-1">{item.num}</div>
                    <div className="text-[10px] text-white/45 tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
              <Magnetic strength={0.25}>
                <Link href="/manufacturing" className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 hover:border-[#E87722] transition-all duration-500">
                  <span>View Capabilities</span>
                  <span className="text-[#E87722] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PROCESS — each step has its own relevant image + gradient
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f0f2f5] overflow-hidden relative">
        <div className="absolute inset-0 grain opacity-10" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-16 md:mb-24 gsap-fade-up">
            <div>
              <div className="luxury-label mb-5 md:mb-6">Manufacturing Process</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] tracking-tight">
                From Bar Stock<br />to <span className="text-[#E87722]">Production Ready</span>
              </h2>
            </div>
            <p className="text-[#1a2537]/60 text-sm max-w-sm leading-relaxed">
              Five precise stages. Every component traced, inspected, and validated before it leaves our facility.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="gsap-fade-up group relative bg-white border border-black/[0.07] overflow-hidden hover:border-[#E87722]/20 transition-all duration-700 snap-start shrink-0 w-[72vw] sm:w-[52vw] md:w-auto shadow-sm"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-3 right-3 text-[10px] font-mono text-[#1a2537]/30 group-hover:text-[#E87722]/40 transition-colors duration-500 z-10">{step.num}</div>
                {/* Image with immersive gradient overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d1520]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                  {/* Dark-to-transparent gradient from bottom + orange tint */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E87722]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono text-[#E87722] tracking-widest uppercase mb-2">{step.subtitle}</div>
                  <h3 className="text-sm font-bold text-[#0d1520] tracking-tight mb-2 group-hover:text-[#E87722] transition-colors duration-500">{step.title}</h3>
                  <p className="text-[11px] text-[#1a2537]/60 leading-relaxed">{step.detail}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E87722] group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          DIVISIONS — Consultancy + TechCraft
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative">
        <div className="absolute inset-0 grid-bg-fine opacity-30" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 gsap-fade-up">
            <div className="luxury-label mb-6 sm:mb-8 justify-center">What We Do</div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] tracking-tight">
              Two Divisions.<br />One <span className="text-[#E87722]">Precision Standard</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* Consultancy — design sketch image with gradient */}
            <div className="gsap-fade-up group bg-white border border-black/[0.06] overflow-hidden hover:border-[#E87722]/20 transition-all duration-700 relative shadow-sm">
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-[#0d1520]">
                <img
                  src={IMAGES.consultancyDivision}
                  alt="Empiric Consultancy design engineering and CAD"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  draggable={false}
                />
                {/* Multi-layer gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-[#0d1520]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E87722]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-4 text-[9px] font-mono text-[#E87722]/60 tracking-widest">DESIGN DIVISION</div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E87722]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 sm:p-10 md:p-12">
                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="w-10 sm:w-12 h-[1px] bg-[#E87722] shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1520] tracking-tight">Empiric Consultancy</h3>
                </div>
                <p className="text-[14px] text-[#1a2537]/65 leading-[1.8] mb-8 max-w-md">Industrial design consultancy covering product development, die design, CNC fixtures, reverse engineering, VAVE, and industrial packaging.</p>
                <div className="flex flex-wrap gap-2">
                  {['Product Design', 'Die Design', 'Fixture Design', 'Reverse Engineering', 'VAVE', 'Packaging'].map((item, j) => (
                    <span key={item} className="text-[10px] px-3 py-1.5 bg-[#f0f2f5] border border-black/[0.06] text-[#1a2537]/65 uppercase tracking-wider group-hover:border-[#E87722]/20 transition-all duration-500" style={{ transitionDelay: `${j * 50}ms` }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* TechCraft — brass components photo with gradient */}
            <div className="gsap-fade-up group bg-white border border-black/[0.06] overflow-hidden hover:border-[#E87722]/20 transition-all duration-700 relative shadow-sm" style={{ transitionDelay: '150ms' }}>
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-[#0d1520]">
                <img
                  src={IMAGES.techcraftDivision}
                  alt="Empiric TechCraft CNC precision manufacturing"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-[#0d1520]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-bl from-[#E87722]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-4 text-[9px] font-mono text-[#E87722]/60 tracking-widest">CNC DIVISION</div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E87722]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 sm:p-10 md:p-12">
                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="w-10 sm:w-12 h-[1px] bg-[#E87722] shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1520] tracking-tight">Empiric TechCraft</h3>
                </div>
                <p className="text-[14px] text-[#1a2537]/65 leading-[1.8] mb-8 max-w-md">CNC precision manufacturing of electrical, plumbing, precision, and custom OEM components in brass, stainless steel and copper.</p>
                <div className="flex flex-wrap gap-2">
                  {['Electrical Components', 'Plumbing Parts', 'CNC Precision', 'General Engineering'].map((item, j) => (
                    <span key={item} className="text-[10px] px-3 py-1.5 bg-[#f0f2f5] border border-black/[0.06] text-[#1a2537]/65 uppercase tracking-wider group-hover:border-[#E87722]/20 transition-all duration-500" style={{ transitionDelay: `${j * 50}ms` }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CAPABILITIES
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f0f2f5] border-t border-black/[0.06] relative">
        <div className="absolute inset-0 grid-bg-fine opacity-30" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20 md:mb-24 gsap-fade-up">
            <div>
              <div className="luxury-label mb-6 sm:mb-8">Capabilities</div>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0d1520] tracking-tight leading-[1.05]">
                End-to-End<br /><span className="text-[#E87722]">Engineering</span>
              </h2>
            </div>
            <p className="sm:max-w-xs text-sm text-[#1a2537]/60 leading-[1.7]">Full-service capabilities from design through to production and inspection.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-black/[0.06] gsap-stagger-container bg-white">
            {capabilities.map((cap, i) => (
              <div key={cap} className={`gsap-stagger-item group p-7 sm:p-10 md:p-12 border-b border-r border-black/[0.06] hover:bg-[#f0f2f5] transition-all duration-500 cursor-default ${i % 2 === 1 ? 'border-r-0 md:border-r' : ''} ${i % 4 === 3 ? 'md:border-r-0' : ''} ${i >= capabilities.length - 2 ? 'border-b-0 md:border-b' : ''} ${i >= capabilities.length - 4 ? 'md:border-b-0' : ''}`}>
                <div className="text-[clamp(2rem,5vw,3rem)] font-light text-[#E87722]/40 group-hover:text-[#E87722] transition-colors duration-500 mb-4 sm:mb-5 font-display leading-none">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#0d1520] uppercase tracking-wider group-hover:text-[#E87722] transition-colors duration-500 leading-tight">{cap}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════════════════════════ */}
      <MarqueeBand />

      {/* ════════════════════════════════════════════════════════════
          LOCATION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f0f2f5] relative">
        <div className="absolute inset-0 grid-bg-fine opacity-40" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 gsap-fade-up">
              <div className="luxury-label mb-8 md:mb-10">Location</div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0d1520] leading-[1.05] mb-8 md:mb-10 tracking-tight">
                Jamnagar,<br />
                <span className="text-[#E87722]">Gujarat · India</span>
              </h2>
              <p className="text-[#1a2537]/65 text-[15px] leading-[1.8] mb-10 md:mb-12 max-w-md">
                Jamnagar produces over 70% of the world's brass components. We are built from this ecosystem, with 18+ years of local manufacturing expertise.
              </p>
              <div className="space-y-5 sm:space-y-6 mb-10 md:mb-12">
                {[
                  { label: 'Address', val: 'Jamnagar, Gujarat 361001, India' },
                  { label: 'Phone', val: '+91 9974945400' },
                  { label: 'Email', val: 'sales@empirictechcraft.com' },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-[10px] text-[#1a2537]/45 uppercase tracking-widest shrink-0 w-12 sm:w-14">{row.label}</span>
                    <span className="text-sm text-[#1a2537]/70 break-all sm:break-normal">{row.val}</span>
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
                <div className="relative overflow-hidden">
                  <img
                    src="/jamnagar1.png"
                    alt="Empiric TechCraft engineering overview"
                    className="w-full aspect-[10/9] object-cover"
                    draggable={false}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E87722]/10 via-transparent to-transparent" />
                </div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[10px] font-mono text-[#E87722]/50 tracking-widest">EMPIRIC TECHCRAFT</div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#E87722] px-4 sm:px-5 py-2 sm:py-2.5">
                  <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-widest uppercase">±0.01mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 md:py-32 bg-[#E87722] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"><EngineeringCanvas mode="light" /></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 grain opacity-10" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10 relative z-10">
          <div className="gsap-slide-left">
            <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-bold text-white leading-[1.05] tracking-tight mb-3 sm:mb-4">
              Ready to Start a<br />Project?
            </h3>
          
          </div>
          <Magnetic strength={0.25}>
            <Link href="/contact" className="group shrink-0 bg-white text-[#E87722] font-bold text-[11px] tracking-[0.2em] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#0d1520] hover:text-white transition-all duration-500 whitespace-nowrap inline-flex items-center gap-3">
              <span>Send an Enquiry</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Magnetic>
        </div>
      </section>

    </div>
  );
}