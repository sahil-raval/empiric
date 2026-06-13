import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Link } from 'wouter';

const products = [
  {
    id: 'electrical',
    num: '01',
    title: 'Electrical Components',
    desc: 'Cable gland parts, terminals, connector elements in brass, copper, and stainless steel',
    materials: ['Brass', 'Copper', 'Stainless Steel'],
  },
  {
    id: 'plumbing',
    num: '02',
    title: 'Faucet & Plumbing Components',
    desc: 'Spindles, valve bodies, fittings with precision threading and sealing surfaces',
    materials: ['Brass', 'Stainless Steel'],
  },
  {
    id: 'cnc-precision',
    num: '03',
    title: 'CNC Precision Components',
    desc: 'Micro and complex geometry parts machined to tight tolerances',
    materials: ['Brass', 'Aluminium', 'Stainless Steel'],
  },
  {
    id: 'general-engineering',
    num: '04',
    title: 'Engineering Components',
    desc: 'Threaded fittings, spacers, fasteners, and custom OEM parts',
    materials: ['Brass', 'Steel', 'Aluminium'],
  },
];

const specs = [
  { val: '±0.01mm', label: 'Tolerance Control' },
  { val: '4+', label: 'Material Types' },
  { val: 'ISO', label: 'Standard Compliant' },
  { val: '100%', label: 'Quality Inspected' },
];

const capabilities = [
  'CNC Turning', 'VMC Machining', 'Precision Boring', 'Thread Cutting',
  'Surface Finishing', 'Quality Inspection', 'Batch Production', 'Custom OEM',
];

export default function ManufacturingIndex() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="page-offset min-h-screen bg-[#f8fafc]">

      {/* Hero */}
      <section className="bg-[#0d1520] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-end">
            <div className="md:col-span-7 gsap-fade-up">
              <span className="section-label mb-4 md:mb-6 block" style={{ color: '#E87722' }}>Manufacturing Division</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-4 md:mb-6 tracking-tight">
                Empiric<br/>
                <span className="text-[#E87722]">TechCraft</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg font-light max-w-xl leading-relaxed">
                CNC precision manufacturing of brass, stainless steel, copper, and aluminium components machined to exact tolerances.
              </p>
            </div>

            {/* Specs grid */}
            <div className="md:col-span-5 gsap-fade-up">
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {specs.map(s => (
                  <div key={s.label} className="bg-[#111d2e] p-5 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-display">{s.val}</div>
                    <div className="text-[9px] md:text-[10px] text-white/45 uppercase tracking-widest leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials band */}
      <section className="bg-[#E87722]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/20">
            {['Brass', 'Stainless Steel', 'Copper', 'Aluminium'].map(mat => (
              <div key={mat} className="py-4 md:py-5 px-4 md:px-8 text-center">
                <span className="text-[11px] font-bold text-white uppercase tracking-[0.25em]">{mat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products list */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-2">
        <div className="flex items-center justify-between py-5 md:py-6 border-b border-black/8 mb-1">
          <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-widest font-semibold">Product Categories</span>
          <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-widest font-semibold">04 Categories</span>
        </div>

        <div className="gsap-stagger-container">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/manufacturing/${product.id}`}
              className="gsap-stagger-item group block border-b border-black/6 last:border-0"
            >
              <div className="flex items-start gap-4 py-6 md:py-8 hover:bg-[#f0f4f8] transition-colors rounded-sm px-2 -mx-2 sm:px-3 sm:-mx-3">
                <span className="num-badge w-8 shrink-0 pt-1">{product.num}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0d1520] mb-1 tracking-tight group-hover:text-[#E87722] transition-colors leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#1a2537]/45 leading-relaxed mb-2 md:mb-0">{product.desc}</p>
                  {/* Materials — mobile */}
                  <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                    {product.materials.map(m => (
                      <span key={m} className="text-[10px] px-2 py-0.5 bg-[#f0f4f8] text-[#1a2537]/40 border border-black/6 uppercase tracking-wider">{m}</span>
                    ))}
                  </div>
                </div>
                {/* Materials — desktop */}
                <div className="hidden md:flex flex-wrap gap-1.5 max-w-[200px] shrink-0 pt-1">
                  {product.materials.map(m => (
                    <span key={m} className="text-[10px] px-2.5 py-1 bg-[#f0f4f8] text-[#1a2537]/45 border border-black/6 uppercase tracking-wider">{m}</span>
                  ))}
                </div>
                <div className="text-[#E87722] text-base md:text-lg opacity-25 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 pt-1">→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 md:py-20 bg-white border-t border-black/6 mt-6 md:mt-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-end justify-between mb-10 md:mb-14 gsap-fade-up">
            <div>
              <span className="section-label mb-3 block">Capabilities</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d1520] tracking-tight">Machining Processes</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-black/8 gsap-stagger-container">
            {capabilities.map((cap, i) => (
              <div
                key={cap}
                className="gsap-stagger-item p-6 md:p-8 border-b border-r border-black/8 hover:bg-[#f8fafc] transition-colors group
                  [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r
                  md:[&:nth-child(4n)]:border-r-0
                  [&:nth-last-child(-n+2)]:border-b-0
                  md:[&:nth-last-child(-n+2)]:border-b
                  md:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#E87722]/15 group-hover:text-[#E87722]/30 transition-colors mb-2 md:mb-3 font-display">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-[#0d1520] uppercase tracking-wider">{cap}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#f0f4f8] border-t border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0d1520] mb-1">Need a component quoted?</h3>
            <p className="text-sm text-[#1a2537]/45">Share your drawing or specification and we'll respond within one business day.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Request a Quote →</Link>
        </div>
      </section>
    </div>
  );
}
