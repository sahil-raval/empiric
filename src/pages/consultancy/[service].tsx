import React from 'react';
import { useRoute, Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ServiceInfo {
  title: string;
  tagline: string;
  support: string;
  keyServices: { title: string; desc: string }[];
  process: string[];
  capabilities: string[];
  deliverables: string[];
  technical: { label: string; val: string }[];
  applications: string[];
  whyEmpic: string[];
  cta: string;
  industries: string[];
  heroImage?: string;
}

const serviceData: Record<string, ServiceInfo> = {
  'product-design': {
    title: 'Industrial Product Design & Development',
    tagline: 'Concept to production-ready engineering design',
    support: 'Optimized for function, cost, and manufacturability across multiple industries.',
    industries: ['Electrical', 'Plumbing', 'Automotive', 'Industrial'],
    heroImage: '/product-design.jpg',
    keyServices: [
      { title: 'Concept Design', desc: 'Initial layouts, design concepts, and feasibility studies before committing to full development.' },
      { title: '3D Modeling', desc: 'Parametric CAD models and assemblies which are editable and production-ready.' },
      { title: 'Design Optimization', desc: 'Weight, cost, and performance improvement through DFM/DFA analysis and engineering review.' },
      { title: 'Detail Engineering', desc: 'Full manufacturing drawings, GD&T specifications, and documentation packages.' },
    ],
    process: ['Requirement Study', 'Concept Design', '3D Modeling', 'Optimization', 'Final Drawings'],
    capabilities: [
      'Parametric CAD modeling expertise',
      'DFM and DFA integration from the first concept',
      'Tolerance and fit control to ISO / DIN standards',
      'Material selection support for metals and engineering plastics',
      'Multi-industry product design capability',
    ],
    deliverables: [
      '3D CAD models (editable native format)',
      '2D detailed manufacturing drawings',
      'Assembly drawings and exploded views',
      'Bill of Materials (BOM) structure',
      'Full design documentation package',
    ],
    technical: [
      { label: 'Standards', val: 'ISO / DIN' },
      { label: 'Tolerance', val: 'Functional fit based on application' },
      { label: 'Material', val: 'Metals and engineering plastics' },
      { label: 'Output', val: 'Production-ready design package' },
    ],
    applications: ['Electrical components', 'Plumbing products', 'Automotive parts', 'Industrial assemblies'],
    whyEmpic: [
      'Engineering-focused design approach — not just aesthetics',
      'Manufacturable output that goes directly to the shop floor',
      'Cost-aware optimization at every stage of the design',
      'Structured development workflow with clear deliverables',
    ],
    cta: 'Need product design support?',
  },

  'die-design': {
    title: 'Precision Casting & Forging Die Design',
    tagline: 'LPDC, GDC and forging tool engineering solutions',
    support: 'Optimized for metal flow, structural strength, and long tool life.',
    industries: ['Automotive', 'Plumbing', 'Electrical', 'General Engineering'],
    heroImage: '/forging-die-design.png',
    keyServices: [
      { title: 'LPDC Die Design', desc: 'Low-pressure die casting dies engineered for controlled metal flow and consistent solidification.' },
      { title: 'GDC Die Design', desc: 'Gravity die casting tools with optimized parting lines, gating, and cooling for high-quality castings.' },
      { title: 'Forging Die Design', desc: 'Closed and open forging die design for metal forming with material flow and die life in mind.' },
      { title: 'Tool Optimization', desc: 'Gating system, cooling channel, and die life improvement for existing tooling.' },
    ],
    process: ['Component Study', 'Feasibility', 'Tool Design', 'Optimization', 'Final Drawings'],
    capabilities: [
      'LPDC and GDC die design with gating and solidification control',
      'Forging die design with material flow and forming analysis',
      'Gating and feeding system optimization',
      'Thermal and cooling layout design',
      'Tool life and wear area management',
    ],
    deliverables: [
      '3D die assembly models',
      '2D manufacturing drawings for tooling',
      'Gating and cooling system layouts',
      'BOM and tool details',
      'Design validation data',
    ],
    technical: [
      { label: 'Process', val: 'LPDC / GDC / Forging' },
      { label: 'Material', val: 'Brass / Aluminium / Steel' },
      { label: 'Tool Steel', val: 'CuBe / H13 / EN31 / Die steel' },
      { label: 'Tolerance', val: 'As per process requirement' },
      { label: 'Standard', val: 'ISO / DIN' },
    ],
    applications: ['Automotive structural components', 'Plumbing and valve bodies', 'Electrical housings', 'Industrial forged parts'],
    whyEmpic: [
      'Strong metal flow and forming process understanding',
      'Integrated casting and forging design capability',
      'Manufacturing-ready tool detailing from day one',
      'Defect and wear reduction built into the design approach',
    ],
    cta: 'Need reliable die design support?',
  },

  'cnc-fixtures': {
    title: 'CNC Fixtures & Cutting Tools Design',
    tagline: 'Stable machining, repeatability, and cycle time optimization',
    support: 'Designed for precision and production efficiency on CNC turning and VMC machines.',
    industries: ['Automotive', 'Electrical', 'Plumbing', 'General Engineering'],
    heroImage: '/cnc-cutting-tools.png',
    keyServices: [
      { title: 'Fixture Design', desc: 'Work-holding design for CNC turning, VMC milling, and multi-operation setups.' },
      { title: 'Clamping Systems', desc: 'Secure and repeatable clamping layouts engineered for force, stability, and cycle time.' },
      { title: 'Cutting Tool Design', desc: 'Custom cutting tool geometry and application engineering for specific machining operations.' },
      { title: 'Process Optimization', desc: 'Cycle time, tool life, and machining efficiency improvement through fixture and tool review.' },
    ],
    process: ['Component Study', 'Fixture Concept', 'Design Layout', 'Validation', 'Final Drawings'],
    capabilities: [
      'Work-holding design for CNC turning and VMC operations',
      'Clamping force and stability analysis',
      'Custom tool geometry development',
      'Multi-operation fixture planning',
      'Production-oriented, shop-floor-ready design',
    ],
    deliverables: [
      '3D fixture assembly models',
      '2D manufacturing drawings for fixtures',
      'Cutting tool design drawings',
      'BOM and part list',
      'Machine setup layout sheets',
    ],
    technical: [
      { label: 'Machine Type', val: 'CNC Turning / VMC' },
      { label: 'Material', val: 'Tool steel / Alloy steel' },
      { label: 'Tolerance', val: 'Positioning accuracy controlled' },
      { label: 'Standard', val: 'ISO / DIN' },
      { label: 'Output', val: 'Shop-floor ready design package' },
    ],
    applications: ['Precision machining components', 'Automotive parts', 'Electrical components', 'General engineering parts'],
    whyEmpic: [
      'Strong CNC machining process understanding',
      'Stable and repeatable fixture design methodology',
      'Tool life and cycle time efficiency focus',
      'Manufacturing-ready solutions delivered on time',
    ],
    cta: 'Need reliable CNC fixture design?',
  },

  'reverse-engineering': {
    title: 'Reverse Engineering for Existing Components',
    tagline: 'Convert physical parts into accurate, editable CAD models',
    support: 'Engineering-ready data for redesign, optimization, and manufacturing.',
    industries: ['Automotive', 'Electrical', 'Plumbing', 'General Engineering'],
    heroImage: '/reverse-engineering1.png',
    keyServices: [
      { title: '3D Model Creation', desc: 'CAD model reconstruction from physical samples, clean, editable, parametric models.' },
      { title: '2D Drawing Generation', desc: 'Full manufacturing drawings with dimensions, tolerances, and GD&T from reconstructed models.' },
      { title: 'Design Reconstruction', desc: 'Feature-based model rebuilding that captures design intent, not just geometry.' },
      { title: 'Data Optimization', desc: 'Clean, structured, editable CAD output — ready for modification, redesign, or direct manufacture.' },
    ],
    process: ['Part Study', 'Measurement', 'CAD Modelling', 'Validation', 'Final Output'],
    capabilities: [
      'Complex geometry reconstruction for legacy and obsolete parts',
      'Feature recognition and parametric modelling',
      'Tolerance and fit analysis for assembly compatibility',
      'Full assembly reconstruction from components',
      'Data correction and model refinement',
    ],
    deliverables: [
      '3D CAD model (editable native format)',
      '2D manufacturing drawings',
      'Assembly structure documentation',
      'BOM generation',
      'Editable design files for future modification',
    ],
    technical: [
      { label: 'Input', val: 'Physical part / measurement data' },
      { label: 'Accuracy', val: 'Reverse-fit dimensional accuracy' },
      { label: 'Output', val: 'Editable CAD format' },
      { label: 'Standard', val: 'ISO drawing format' },
    ],
    applications: ['Legacy component redesign', 'Spare part development', 'Product replication and improvement', 'Design modification projects'],
    whyEmpic: [
      'Accurate geometry reconstruction from physical measurement',
      'Clean and editable CAD output — not scanned mesh files',
      'Engineering-based model creation with design intent',
      'Manufacturing compatibility verified in every output',
    ],
    cta: 'Have a part to reverse engineer?',
  },

  'vave': {
    title: 'Value Engineering & Value Analysis (VAVE)',
    tagline: 'Reduce cost without affecting performance',
    support: 'Engineering-driven redesign for manufacturing efficiency and cost optimization.',
    industries: ['Automotive', 'Electrical', 'Industrial', 'General Engineering'],
    heroImage: '/vave.png',
    keyServices: [
      { title: 'Cost Analysis', desc: 'Component-level cost breakdown identifying design, material, and process cost drivers.' },
      { title: 'Design Optimization', desc: 'Material and geometry improvement that reduces cost while maintaining function and performance.' },
      { title: 'Process Improvement', desc: 'Manufacturing efficiency enhancement through process simplification and consolidation.' },
      { title: 'Alternative Solutions', desc: 'Design and material substitution proposals with equivalent or better performance at lower cost.' },
    ],
    process: ['Cost Study', 'Design Analysis', 'Optimization', 'Validation', 'Implementation'],
    capabilities: [
      'Cost vs function evaluation at component and assembly level',
      'Material substitution with equivalent performance analysis',
      'Geometry simplification for manufacturing efficiency',
      'Process optimization and consolidation',
      'Design standardization for supply chain efficiency',
    ],
    deliverables: [
      'Cost reduction analysis report',
      'Optimized design model (3D + 2D)',
      'Alternative material proposal with data',
      'Process improvement plan',
      'Implementation-ready drawings',
    ],
    technical: [
      { label: 'Method', val: 'Value Analysis / Value Engineering' },
      { label: 'Focus', val: 'Cost vs Function optimization' },
      { label: 'Analysis', val: 'Component-level breakdown' },
      { label: 'Output', val: 'Optimized design + cost report' },
      { label: 'Standard', val: 'Engineering-based review process' },
    ],
    applications: ['Automotive assemblies and sub-assemblies', 'Industrial product lines', 'Electrical and plumbing components', 'General engineering parts'],
    whyEmpic: [
      'Engineering-driven cost reduction — not just value stripping',
      'Manufacturable alternatives with real supplier data',
      'Structured VAVE methodology with measurable output',
      'Cross-industry experience in metal and plastic components',
    ],
    cta: 'Want to reduce component cost?',
  },

  'packaging': {
    title: 'Industrial Packaging Design',
    tagline: 'Engineering-led protection for precision components',
    support: 'Packaging designed for logistics, storage, and handling of industrial and precision parts.',
    industries: ['Automotive', 'Electrical', 'Plumbing', 'General Engineering'],
    heroImage: '/packaging.png',
    keyServices: [
      { title: 'Structural Design', desc: 'Custom packaging structures — trays, inserts, cartons, and returnable containers for industrial components.' },
      { title: 'Material Selection', desc: 'Corrugated, foam, plastic, and composite material selection for protection and cost balance.' },
      { title: 'Protection Engineering', desc: 'Static and dynamic load, vibration, and environmental protection analysis for component safety.' },
      { title: 'Logistics Optimization', desc: 'Packaging space optimization for shipping, stacking, and storage efficiency.' },
    ],
    process: ['Requirement Study', 'Concept Design', 'Structural Design', 'Validation', 'Final Output'],
    capabilities: [
      'Custom tray, insert, and carton design for precision components',
      'Material selection for industrial and logistics environments',
      'Protection against static, vibration, and environmental damage',
      'Space utilization and logistics cost optimization',
      'Export and OEM batch packaging engineering',
    ],
    deliverables: [
      'Packaging structural drawings and models',
      'Material specification sheet',
      'Assembly and packing instruction document',
      'Weight and dimension summary for logistics',
      'Supplier-ready manufacturing drawings',
    ],
    technical: [
      { label: 'Material', val: 'Corrugated / Foam / Plastic / Composite' },
      { label: 'Standard', val: 'ISTA / ASTM / Customer specification' },
      { label: 'Focus', val: 'Protection + Logistics optimization' },
      { label: 'Batch', val: 'Small batch to bulk production' },
      { label: 'Output', val: 'Supplier-ready design package' },
    ],
    applications: ['CNC machined components (brass, SS, copper)', 'Precision instruments and assemblies', 'Automotive and electrical parts', 'Export and OEM shipments'],
    whyEmpic: [
      'Engineering approach to packaging — not just box design',
      'Component protection verified at design stage',
      'Logistics and cost efficiency built into every solution',
      'Experience packaging precision and fragile industrial components',
    ],
    cta: 'Need industrial packaging design?',
  },
};

// ─── Sub-components ──────────────────────────────────────────────

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
      {/* Desktop: horizontal 5-step flow */}
      <div className="hidden md:flex border border-black/8">
        {steps.map((step, i) => (
          <div key={step} className="flex-1 relative group">
            <div className="px-6 py-7 hover:bg-[#f8fafc] transition-colors h-full">
              <div className="text-3xl font-bold text-[#E87722]/15 group-hover:text-[#E87722]/30 transition-colors mb-3 font-display">0{i + 1}</div>
              <div className="text-xs font-bold text-[#0d1520] uppercase tracking-wider leading-tight">{step}</div>
            </div>
            {i < steps.length - 1 && (
              /* Darker, more visible arrow connector */
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

export default function ConsultancyService() {
  const [, params] = useRoute('/consultancy/:service');
  const containerRef = useScrollAnimation();
  const slug = params?.service ?? '';
  const s = serviceData[slug];

  if (!s) {
    return (
      <div ref={containerRef} className="page-offset min-h-screen bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16">
          <Link href="/consultancy" className="text-[#E87722] font-semibold hover:underline">← Back to Consultancy</Link>
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
            href="/consultancy"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-[#E87722] transition-colors mb-6 md:mb-8 font-medium gsap-fade-up"
          >
            ← Back to Consultancy
          </Link>

          {/* Two-column hero layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: text + industries */}
            <div className="gsap-slide-left flex flex-col gap-5">
              <div>
                <span className="section-label mb-4 block" style={{ color: '#E87722' }}>Empiric Consultancy</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 tracking-tight">
                  {s.title}
                </h1>
                <p className="text-white/70 text-base md:text-lg font-light mb-2">{s.tagline}</p>
                <p className="text-white/50 text-sm font-light max-w-xl">{s.support}</p>
              </div>

              {/* Industries Served — moved below the description */}
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">Industries Served</p>
                <div className="flex flex-wrap gap-2">
                  {s.industries.map(ind => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 border border-white/15 text-white/70 text-xs hover:border-[#E87722]/50 hover:text-white transition-colors"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: hero image */}
            <div className="gsap-slide-right relative w-full">
              {s.heroImage ? (
                <div className="relative overflow-hidden w-full" style={{ aspectRatio: '4/3' }}>
                  {/* Subtle orange accent border top-left */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#E87722] z-20 pointer-events-none" />
                  {/* Subtle corner accent bottom-right */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#E87722]/40 z-20 pointer-events-none" />
                  <img
                    src={s.heroImage}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.85) contrast(1.05)' }}
                  />
                  {/* Dark gradient overlay on bottom for blending with dark bg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/60 via-transparent to-transparent" />
                </div>
              ) : (
                /* Fallback placeholder if no image is set */
                <div
                  className="w-full flex items-center justify-center border border-white/8 bg-white/4 text-white/20 text-sm"
                  style={{ aspectRatio: '4/3' }}
                >
                  <span className="uppercase tracking-widest text-xs">Image Coming Soon</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── KEY SERVICES ── */}
      <section className="py-12 md:py-16 bg-white border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="section-label mb-3 block gsap-fade-up">Key Services</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1520] mb-8 md:mb-10 tracking-tight gsap-fade-up">What We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/8 gsap-stagger-container">
            {s.keyServices.map((ks, i) => (
              <div key={i} className="gsap-stagger-item bg-white p-7 md:p-8 hover:bg-[#f8fafc] transition-colors group">
                <span className="num-badge mb-4 block">0{i + 1}</span>
                <h3 className="text-base md:text-lg font-bold text-[#0d1520] mb-2 tracking-tight group-hover:text-[#E87722] transition-colors">{ks.title}</h3>
                <p className="text-sm text-[#1a2537]/50 leading-relaxed">{ks.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="section-label mb-3 block gsap-fade-up">Methodology</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1520] mb-8 md:mb-10 tracking-tight gsap-fade-up">Design Process</h2>
          <div className="gsap-scale-in">
            <ProcessFlow steps={s.process} />
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES + DELIVERABLES + TECHNICAL ── */}
      <section className="py-12 md:py-16 bg-white border-b border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

            {/* Capabilities */}
            <div className="gsap-slide-left">
              <span className="section-label mb-3 block">Capabilities</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">What We Can Do</h3>
              <ul className="space-y-3">
                {s.capabilities.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a2537]/60 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E87722] mt-2 shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="gsap-fade-up">
              <span className="section-label mb-3 block">Deliverables</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">What You Receive</h3>
              <ul className="space-y-3">
                {s.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#1a2537]/60">
                    <span className="text-[#E87722] font-bold text-base leading-none">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights */}
            <div className="gsap-slide-right">
              <span className="section-label mb-3 block">Technical</span>
              <h3 className="text-xl font-bold text-[#0d1520] mb-5 tracking-tight">Specifications</h3>
              <div className="border border-black/8 divide-y divide-black/8">
                {s.technical.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3">
                    <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-wider font-semibold shrink-0 w-20 pt-0.5">{t.label}</span>
                    <span className="text-sm text-[#0d1520] font-medium leading-snug">{t.val}</span>
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
            <div className="shrink-0">
              <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1 gsap-fade-up">Applications</p>
              <h3 className="text-xl font-bold text-white gsap-fade-up">Where We Apply This</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 gsap-stagger-container">
              {s.applications.map(app => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Why Empiric Consultancy</h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 gsap-stagger-container">
              {s.whyEmpic.map((point, i) => (
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#0d1520] mb-1">{s.cta}</h3>
            <p className="text-sm text-[#1a2537]/45">Our engineering team will respond within one business day.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 gsap-slide-right">Start Your Project →</Link>
        </div>
      </section>
    </div>
  );
}