import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Link } from 'wouter';

const services = [
  {
    id: 'product-design',
    num: '01',
    title: 'Product Design & Development',
    sub: 'Concept to 3D CAD, DFM/DFA, manufacturing drawings',
  },
  {
    id: 'die-design',
    num: '02',
    title: 'Casting & Forging Die Design',
    sub: 'LPDC, GDC, and closed/open forging die solutions with gating and cooling optimisation',
    tools: ['LPDC', 'GDC', 'Forging'],
  },
  {
    id: 'cnc-fixtures',
    num: '03',
    title: 'CNC Fixture & Cutting Tool Design',
    sub: 'Work-holding, clamping systems, and custom tool geometry for CNC turning and VMC',
    tools: ['CNC Turning', 'VMC', 'Work-Holding'],
  },
  {
    id: 'reverse-engineering',
    num: '04',
    title: 'Reverse Engineering',
    sub: 'Physical part to CAD reconstruction — clean, editable, production-compatible output',
    tools: ['Measurement', 'CAD Rebuild'],
  },
  {
    id: 'vave',
    num: '05',
    title: 'Value Engineering (VAVE)',
    sub: 'Cost reduction through design optimisation, material substitution, and process improvement',
    tools: ['Cost Analysis', 'DFM'],
  },
  {
    id: 'packaging',
    num: '06',
    title: 'Industrial Packaging Design',
    sub: 'Component protection, logistics optimisation, and packaging for industrial applications',
    tools: ['Protection', 'Logistics'],
  },
];

const industries = ['Automotive', 'Electrical', 'Plumbing', 'General Engineering'];

const processSteps = ['Requirement', 'Concept', 'Design', 'Optimisation', 'Delivery'];

export default function ConsultancyIndex() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="page-offset min-h-screen bg-[#f8fafc]">

      {/* Hero */}
      <section className="bg-[#0d1520] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-end">
            <div className="md:col-span-7 gsap-fade-up">
              <span className="section-label mb-4 md:mb-6 block" style={{ color: '#E87722' }}>Design Division</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-4 md:mb-6 tracking-tight">
                Empiric<br/>
                <span className="text-[#E87722]">Consultancy</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg font-light max-w-xl leading-relaxed">
                Industrial design consultancy delivering engineering intelligence — from concept through to production-ready output.
              </p>
            </div>
            <div className="md:col-span-5 gsap-fade-up">
              <div className="border border-white/8 p-6 md:p-8">
                <p className="text-[10px] text-white/45 uppercase tracking-widest mb-4 md:mb-6">Industries Served</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map(ind => (
                    <span key={ind} className="px-3 md:px-4 py-1.5 md:py-2 border border-white/10 text-white/65 text-xs font-medium hover:border-[#E87722]/50 hover:text-white transition-colors">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-2">
        <div className="flex items-center justify-between py-5 md:py-6 border-b border-black/8 mb-1">
          <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-widest font-semibold">Our Services</span>
          <span className="text-[10px] text-[#1a2537]/35 uppercase tracking-widest font-semibold">06 Disciplines</span>
        </div>

        <div className="gsap-stagger-container">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/consultancy/${service.id}`}
              className="gsap-stagger-item group block border-b border-black/6 last:border-0"
            >
              <div className="flex items-start gap-4 py-6 md:py-8 hover:bg-[#f0f4f8] transition-colors rounded-sm px-2 -mx-2 sm:px-3 sm:-mx-3">
                <span className="num-badge w-8 shrink-0 pt-1">{service.num}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0d1520] mb-1 tracking-tight group-hover:text-[#E87722] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1a2537]/45 leading-relaxed mb-3 md:mb-0">{service.sub}</p>
                  {/* Tool tags — mobile */}
                  <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                    {service.tools?.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 bg-[#f0f4f8] text-[#1a2537]/40 border border-black/6 uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
                {/* Tool tags — desktop */}
                <div className="hidden md:flex flex-wrap gap-1.5 max-w-[200px] lg:max-w-[240px] shrink-0 pt-1">
                  {service.tools?.map(t => (
                    <span key={t} className="text-[10px] px-2.5 py-1 bg-[#f0f4f8] text-[#1a2537]/45 border border-black/6 uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <div className="text-[#E87722] text-base md:text-lg opacity-25 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 pt-1">→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 bg-white border-t border-black/6 mt-6 md:mt-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-end justify-between mb-10 md:mb-14 gsap-fade-up">
            <div>
              <span className="section-label mb-3 block">Methodology</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d1520] tracking-tight">Design Process</h2>
            </div>
          </div>

          {/* Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-black/8 md:hidden gsap-stagger-container">
            {processSteps.map((step, i) => (
              <div key={step} className="gsap-stagger-item p-6 border-b border-r border-black/8 last:border-b-0 [&:nth-child(even)]:border-r-0 hover:bg-[#f8fafc] transition-colors group">
                <div className="text-2xl font-bold text-[#E87722]/20 group-hover:text-[#E87722]/35 transition-colors mb-2 font-display">0{i + 1}</div>
                <h4 className="text-sm font-bold text-[#0d1520] uppercase tracking-wider">{step}</h4>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-5 gap-0 border border-black/8 gsap-stagger-container">
            {processSteps.map((step, i) => (
              <div key={step} className="gsap-stagger-item p-8 border-r border-black/8 last:border-r-0 hover:bg-[#f8fafc] transition-colors group">
                <div className="text-3xl font-bold text-[#E87722]/15 group-hover:text-[#E87722]/30 transition-colors mb-4 font-display">0{i + 1}</div>
                <h4 className="text-sm font-bold text-[#0d1520] uppercase tracking-wider">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#f0f4f8] border-t border-black/6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0d1520] mb-1">Have a design requirement?</h3>
            <p className="text-sm text-[#1a2537]/45">Our engineering team is ready to discuss your project.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Send Enquiry →</Link>
        </div>
      </section>
    </div>
  );
}