import React from 'react';
import { useRoute, Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ProductInfo {
  title: string;
  tagline: string;
  support: string;
  heroImage?: string;
  highlights: { title: string; desc: string }[];
  capabilities: string[];
  process: string[];
  technical: { label: string; val: string }[];
  features: string[];
  surfaces: string[];
  quality: string[];
  applications: string[];
  whyEmpic: string[];
  cta: string;
}

const productData: Record<string, ProductInfo> = {
  'electrical': {
    title: 'Precision Electrical Components',
    tagline: 'CNC machined cable gland parts, terminals, and connectors in brass, copper, and stainless steel',
    support: 'Engineered for reliable electrical performance, sealing integrity, and high dimensional accuracy.',
    heroImage: '/images/electrical-hero.jpg',
    highlights: [
      { title: 'Cable Gland Components', desc: 'Gland body, lock nut, compression nut, and adaptors machined to precise dimensional requirements.' },
      { title: 'Brass Terminals', desc: 'Neutral links, earth components, and connector pins with tight tolerances and reliable contact surfaces.' },
      { title: 'Connector Parts', desc: 'Precision contact elements and inserts for industrial electrical connectivity applications.' },
      { title: 'Custom CNC Parts', desc: 'Application-specific electrical components machined to customer drawings and specifications.' },
    ],
    capabilities: [
      'CNC turning for small precision parts (Ø3–65 mm)',
      'Multi-standard threading (Metric, BSP, NPT, PG)',
      'Knurling, drilling, and micro machining',
      'Batch production with high repeatability',
    ],
    process: ['Raw Material', 'CNC Machining', 'Threading & Forming', 'Surface Finishing', 'Inspection'],
    technical: [
      { label: 'Material', val: 'Brass (CW617N, IS 319) · Copper · SS304 / SS316 · Aluminium' },
      { label: 'Tolerance', val: '±0.01 – 0.03 mm' },
      { label: 'Surface Finish', val: 'Ra 0.8 – 1.6 µm' },
      { label: 'Thread Types', val: 'Metric · BSP · NPT · PG' },
      { label: 'Size Range', val: 'Ø3 mm – Ø65 mm' },
    ],
    features: [
      'High electrical conductivity for reliable contact',
      'Precision threading for secure sealing and locking',
      'Corrosion-resistant materials and coating options',
      'Strong mechanical locking performance under load',
    ],
    surfaces: ['Nickel plating', 'Tin plating', 'Chrome plating', 'Polished or matte finish'],
    quality: [
      'Thread gauges (Go / No-Go) for all threaded parts',
      'Micrometre and precision measurement tools',
      'CMM inspection for critical dimension parts',
      'Batch-wise quality control documentation',
    ],
    applications: ['Electrical control panels', 'Cable gland systems', 'Industrial connectors', 'Automotive electrical assemblies'],
    whyEmpic: [
      'Specialization in small precision components with tight tolerances',
      'Consistent dimensional accuracy across high-volume production',
      'Strong threading and micro machining capability',
      'Material and finishing expertise for electrical applications',
    ],
    cta: 'Looking for reliable electrical component manufacturing?',
  },

  'plumbing': {
    title: 'Precision Faucet & Plumbing Components',
    tagline: 'CNC machined brass and stainless-steel parts for sanitary and fluid control applications',
    support: 'Engineered for leak-proof performance, smooth surface finish, and plating compatibility.',
    heroImage: '/images/plumbing-hero.jpg',
    highlights: [
      { title: 'Faucet Internal Parts', desc: 'Spindles, cartridge components, and valve stems machined for dimensional precision and smooth operation.' },
      { title: 'Valve Components', desc: 'Bodies, sleeves, and sealing elements with precision bores and sealing surface finishes.' },
      { title: 'Fittings & Adaptors', desc: 'Threaded connectors and couplings with leak-proof threading and tight dimensional control.' },
      { title: 'Custom Parts', desc: 'OEM-specific plumbing components machined to customer drawings for sanitary and fluid applications.' },
    ],
    capabilities: [
      'CNC turning for high-precision plumbing and faucet parts',
      'Fine threading for leak-proof connections (Metric, BSP, NPT)',
      'Internal boring for precision sealing surfaces',
      'Surface finishing preparation for chrome and nickel plating',
    ],
    process: ['Raw Material', 'CNC Machining', 'Threading & Boring', 'Polishing & Finishing', 'Inspection'],
    technical: [
      { label: 'Material', val: 'Brass (CW617N, IS 319) · Lead-free brass · SS304 / SS316' },
      { label: 'Tolerance', val: '±0.01 – 0.03 mm' },
      { label: 'Surface Finish', val: 'Ra 0.8 – 1.6 µm' },
      { label: 'Thread Types', val: 'Metric · BSP · NPT' },
      { label: 'Size Range', val: 'Ø5 mm – Ø65 mm' },
    ],
    features: [
      'Leak-proof sealing surfaces for zero-defect assembly',
      'High-quality threading for tight, reliable connections',
      'Smooth bore finish for chrome plating compatibility',
      'Corrosion-resistant material options for long product life',
    ],
    surfaces: ['Chrome plating readiness', 'Nickel plating', 'Mirror and semi-gloss polishing'],
    quality: [
      'Thread gauge inspection (Go / No-Go)',
      'Surface finish verification with profilometer',
      'Bore and dimensional inspection',
      'Batch quality control checks with records',
    ],
    applications: ['Bathroom and kitchen faucets', 'Sanitary fittings and fixtures', 'Water flow control systems', 'OEM plumbing assemblies'],
    whyEmpic: [
      'Expertise in sealing-critical components where tolerances matter',
      'High surface finish control for direct chrome plating compatibility',
      'Precision threading capability for leak-free assemblies',
      'Consistent production quality with full batch documentation',
    ],
    cta: 'Looking for precision plumbing component manufacturing?',
  },

  'cnc-precision': {
    title: 'High-Precision CNC Turned Components',
    tagline: 'Small and micro precision components with tight tolerances and superior finish',
    support: 'Manufactured for performance-critical applications across industries demanding the highest accuracy.',
    heroImage: '/images/cnc-precision-hero.jpg',
    highlights: [
      { title: 'Micro Precision Parts', desc: 'Small geometry components in the Ø1–20mm range with consistent dimensional accuracy across production batches.' },
      { title: 'Complex Geometry', desc: 'Multi-feature profiles, undercuts, and compound angles machined on CNC turning centres and VMC.' },
      { title: 'Tight Tolerance Parts', desc: 'Components machined to ±0.01mm tolerance with full CMM inspection and dimensional reporting.' },
      { title: 'Multi-Material Range', desc: 'Brass, aluminium, stainless steel, and copper components from a single supply point.' },
    ],
    capabilities: [
      'CNC turning and VMC for complex geometry components',
      'Tight tolerance machining to ±0.01 – 0.02 mm',
      'Multi-feature profiles and compound angle machining',
      'Full dimensional inspection and CMM reporting',
      'Batch and volume production with statistical process control',
    ],
    process: ['Raw Material', 'CNC Turning / VMC', 'Secondary Operations', 'Surface Finishing', 'CMM Inspection'],
    technical: [
      { label: 'Material', val: 'Brass · Aluminium · SS304 / SS316 · Copper' },
      { label: 'Tolerance', val: '±0.01 – 0.02 mm' },
      { label: 'Surface Finish', val: 'Ra 0.4 – 1.6 µm' },
      { label: 'Size Range', val: 'Ø1 mm – Ø65 mm' },
      { label: 'Inspection', val: 'CMM + 100% dimensional verification' },
    ],
    features: [
      'Tight tolerance capability down to ±0.01mm',
      'Complex multi-feature geometry in single setups',
      'High surface finish for critical contact and sealing surfaces',
      'Batch-to-batch consistency with SPC documentation',
    ],
    surfaces: ['Ra 0.4 µm mirror finish', 'Ra 0.8 µm precision finish', 'Ra 1.6 µm standard machined finish', 'Anodizing for aluminium parts'],
    quality: [
      'CMM dimensional inspection for critical parts',
      'Thread gauge verification (Go / No-Go)',
      'Surface finish measurement with profilometer',
      '100% visual and dimensional check per batch',
    ],
    applications: ['Industrial instruments and sensors', 'Electronics and connector housings', 'Hydraulic and pneumatic components', 'Medical and laboratory equipment'],
    whyEmpic: [
      'Proven capability at ±0.01mm tolerance in production volumes',
      'Complex profiles and features in a single machining setup',
      'Full CMM inspection and documentation for every batch',
      'Multi-material precision machining from one source',
    ],
    cta: 'Need high-precision CNC components?',
  },

  'general-engineering': {
    title: 'Precision Components for General Engineering',
    tagline: 'Versatile CNC machined parts for industrial assemblies and engineering systems',
    support: 'Flexible manufacturing for custom designs, small batches, and bulk production runs.',
    heroImage: '/images/general-engineering-hero.jpg',
    highlights: [
      { title: 'Threaded Components', desc: 'Fittings, connectors, and adaptors with standard and custom thread forms to customer specifications.' },
      { title: 'Spacers & Sleeves', desc: 'Precision-machined cylindrical parts with tight bore, OD, and length control.' },
      { title: 'Fasteners & Inserts', desc: 'Custom threaded elements including studs, inserts, and locking components to drawings.' },
      { title: 'Custom OEM Parts', desc: 'Drawing-based components for industrial machinery, assemblies, and equipment.' },
    ],
    capabilities: [
      'CNC turning and machining across multiple material types',
      'Multi-standard threading (Metric, BSP, NPT, UNC/UNF)',
      'Drilling, tapping, reaming, and cross-hole operations',
      'Flexible batch production from prototype to volume',
    ],
    process: ['Raw Material', 'CNC Machining', 'Threading & Secondary Ops', 'Finishing', 'Inspection'],
    technical: [
      { label: 'Material', val: 'Brass · Copper · SS304 / SS316 · Aluminium · Steel' },
      { label: 'Tolerance', val: '±0.01 – 0.05 mm' },
      { label: 'Surface Finish', val: 'Ra 0.8 – 1.6 µm' },
      { label: 'Thread Types', val: 'Metric · BSP · NPT · UNC / UNF' },
      { label: 'Size Range', val: 'Ø5 mm – Ø65 mm' },
    ],
    features: [
      'High dimensional accuracy for direct assembly fit',
      'Strong mechanical integrity across material types',
      'Versatile design compatibility for diverse applications',
      'Suitable for multiple industries and assembly environments',
    ],
    surfaces: ['Natural machined finish', 'Nickel plating', 'Zinc plating', 'Anodizing for aluminium'],
    quality: [
      'Dimensional inspection to drawing tolerances',
      'Thread verification with Go / No-Go gauges',
      'Process control documentation per batch',
      'Material traceability records',
    ],
    applications: ['Industrial machinery and equipment', 'Mechanical assemblies and systems', 'Fluid and pneumatic systems', 'OEM component supply'],
    whyEmpic: [
      'Flexible manufacturing capability from prototype to bulk production',
      'Custom part development directly from customer drawings',
      'Stable quality control with batch documentation',
      'Wide material expertise across brass, steel, aluminium, and copper',
    ],
    cta: 'Need custom engineering components?',
  },
};

// ─── Sub-components ───────────────────────────────────────────────

function ProcessFlow({ steps }: { steps: string[] }) {
  return (
    <>
      {/* Mobile: vertical numbered list */}
      <div className="flex flex-col gap-0 md:hidden border border-black/8">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-4 px-5 py-4 border-b border-black/6 last:border-0">
            <span className="text-xl font-bold text-[#E87722]/30 font-display w-6 shrink-0">0{i + 1}</span>
            <span className="text-sm font-semibold text-[#0d1520] uppercase tracking-wider">{step}</span>
            {i < steps.length - 1 && (
              <span className="ml-auto text-[#E87722] text-lg font-bold opacity-80">↓</span>
            )}
          </div>
        ))}
      </div>
      {/* Desktop: horizontal step flow */}
      <div className="hidden md:flex border border-black/8">
        {steps.map((step, i) => (
          <div key={step} className="flex-1 relative group">
            <div className="px-6 py-7 hover:bg-[#f8fafc] transition-colors h-full">
              <div className="text-3xl font-bold text-[#E87722]/15 group-hover:text-[#E87722]/30 transition-colors mb-3 font-display">0{i + 1}</div>
              <div className="text-xs font-bold text-[#0d1520] uppercase tracking-wider leading-tight">{step}</div>
            </div>
            {i < steps.length - 1 && (
              /* Solid filled orange circle arrow — clearly visible */
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-[#E87722] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-[11px] font-bold leading-none">→</span>
              </div>
            )}
            {i < steps.length - 1 && <div className="absolute right-0 top-0 bottom-0 w-px bg-black/8" />}
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────

export default function ManufacturingProduct() {
  const [, params] = useRoute('/manufacturing/:product');
  const containerRef = useScrollAnimation();
  const slug = params?.product ?? '';
  const p = productData[slug];

  if (!p) {
    return (
      <div ref={containerRef} className="page-offset min-h-screen bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16">
          <Link href="/manufacturing" className="text-[#E87722] font-semibold hover:underline">← Back to Manufacturing</Link>
          <h1 className="text-4xl font-bold text-[#0d1520] mt-4 mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
          <p className="text-[#1a2537]/55 text-lg">Details coming soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="page-offset min-h-screen bg-[#f8fafc]">

      {/* ── HERO ── */}
      <section className="bg-[#0d1520] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 relative z-10">
          <Link
            href="/manufacturing"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-[#E87722] transition-colors mb-6 md:mb-8 font-medium gsap-fade-up"
          >
            ← Back to Manufacturing
          </Link>

          {/* Two-column hero layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: text + stats */}
            <div className="gsap-slide-left flex flex-col gap-6">
              <div>
                <span className="section-label mb-4 md:mb-5 block" style={{ color: '#E87722' }}>Empiric TechCraft</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 tracking-tight">{p.title}</h1>
                <p className="text-white/70 text-base md:text-lg font-light mb-2">{p.tagline}</p>
                <p className="text-white/50 text-sm font-light max-w-xl">{p.support}</p>
              </div>

              {/* Stats — moved below description */}
              <div className="grid grid-cols-4 gap-px bg-white/5 max-w-sm">
                {[
                  { val: '±0.01mm', label: 'Tolerance' },
                  { val: 'ISO', label: 'Standard' },
                  { val: '100%', label: 'Inspected' },
                  { val: '4+', label: 'Materials' },
                ].map(s => (
                  <div key={s.label} className="bg-[#111d2e] px-3 py-4 text-center">
                    <div className="text-sm md:text-base font-bold text-white mb-0.5 font-display">{s.val}</div>
                    <div className="text-[8px] md:text-[9px] text-white/45 uppercase tracking-widest leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: hero image */}
            <div className="gsap-slide-right relative w-full hidden sm:block">
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: '4/3' }}>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#E87722] z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#E87722]/35 z-20 pointer-events-none" />

                {p.heroImage ? (
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.82) contrast(1.06)' }}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = 'rgba(255,255,255,0.03)';
                        parent.style.border = '1px solid rgba(255,255,255,0.08)';
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/3 border border-white/8">
                    <span className="text-white/20 text-xs uppercase tracking-widest">Image Coming Soon</span>
                  </div>
                )}

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/55 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1520]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRODUCT HIGHLIGHTS ── */}
      <section className="py-12 md:py-16 bg-white border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="section-label mb-3 block gsap-fade-up">Product Range</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1520] mb-8 md:mb-10 tracking-tight gsap-fade-up">What We Manufacture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/8 gsap-stagger-container">
            {p.highlights.map((h, i) => (
              <div key={i} className="gsap-stagger-item bg-white p-7 md:p-8 hover:bg-[#f8fafc] transition-colors group">
                <span className="num-badge mb-4 block">0{i + 1}</span>
                <h3 className="text-base md:text-lg font-bold text-[#0d1520] mb-2 tracking-tight group-hover:text-[#E87722] transition-colors">{h.title}</h3>
                <p className="text-sm text-[#1a2537]/50 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING PROCESS ── */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="section-label mb-3 block gsap-fade-up">Manufacturing Flow</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1520] mb-8 md:mb-10 tracking-tight gsap-fade-up">Production Process</h2>
          <div className="gsap-scale-in"><ProcessFlow steps={p.process} /></div>
        </div>
      </section>

      {/* ── TECHNICAL SPECS + FEATURES ── */}
      <section className="py-12 md:py-16 bg-white border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Technical Specs */}
            <div className="gsap-slide-left">
              <span className="section-label mb-3 block">Technical Data</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">Specifications</h3>
              <div className="border border-black/8 divide-y divide-black/8">
                {p.technical.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-4">
                    <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-wider font-semibold shrink-0 w-24 pt-0.5">{t.label}</span>
                    <span className="text-sm text-[#0d1520] font-medium leading-snug">{t.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Features */}
            <div className="gsap-slide-right">
              <span className="section-label mb-3 block">Performance</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">Engineering Features</h3>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a2537]/60 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-2 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <span className="section-label mb-3 block">Capabilities</span>
              <ul className="space-y-2.5">
                {p.capabilities.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a2537]/55 leading-relaxed">
                    <span className="text-[#E87722] font-bold text-base leading-none">→</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SURFACE + QUALITY ── */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Surface & Coating */}
            <div className="gsap-slide-left">
              <span className="section-label mb-3 block">Finishing</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">Surface & Coating Options</h3>
              <div className="space-y-2">
                {p.surfaces.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white border border-black/6 text-sm text-[#1a2537]/70">
                    <div className="w-2 h-2 rounded-full bg-[#E87722] shrink-0" />{s}
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Control */}
            <div className="gsap-slide-right">
              <span className="section-label mb-3 block">Inspection</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">Quality Control</h3>
              <div className="space-y-2">
                {p.quality.map((q, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 bg-white border border-black/6">
                    <span className="text-[#E87722] font-bold text-sm leading-none mt-0.5">✓</span>
                    <span className="text-sm text-[#1a2537]/70 leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="py-10 md:py-12 bg-[#E87722]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="shrink-0 gsap-slide-left">
              <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">Applications</p>
              <h3 className="text-xl font-bold text-white">Industries We Serve</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 gsap-stagger-container">
              {p.applications.map(app => (
                <span key={app} className="gsap-stagger-item px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EMPIRIC ── */}
      <section className="py-12 md:py-16 bg-[#0d1520]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4 gsap-slide-left">
              <span className="section-label mb-3 block" style={{ color: '#E87722' }}>Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Why Empiric TechCraft</h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 gsap-stagger-container">
              {p.whyEmpic.map((point, i) => (
                <div key={i} className="gsap-stagger-item bg-[#0d1520] p-6 md:p-7 hover:bg-[#111d2e] transition-colors">
                  <div className="text-[#E87722] text-xl font-bold mb-3">0{i + 1}</div>
                  <p className="text-sm text-white/55 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-[#f0f4f8] border-t border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="gsap-slide-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0d1520] mb-1">{p.cta}</h3>
            <p className="text-sm text-[#1a2537]/45">Share your drawing or specification and we'll respond within one business day.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 gsap-slide-right">Request a Quote →</Link>
        </div>
      </section>
    </div>
  );
}