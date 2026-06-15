import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import emailjs from 'emailjs-com';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const containerRef = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo_service';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo_template';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_key';

      if (serviceId === 'demo_service') {
        setTimeout(() => {
          toast({ title: "Message Sent", description: "Thank you — we'll be in touch shortly." });
          setIsSubmitting(false);
          setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        }, 1000);
        return;
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        company: formData.company,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }, publicKey);

      toast({ title: "Message Sent", description: "Your enquiry has been sent successfully." });
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full bg-white border border-black/12 rounded-sm p-3.5 text-[#0d1520] placeholder:text-[#1a2537]/30 focus:border-[#E87722] focus:ring-2 focus:ring-[#E87722]/10 outline-none transition-all text-sm";

  return (
    <div ref={containerRef} className="pt-20 min-h-screen bg-[#f8fafc]">

      {/* Page header */}
      <section className="py-16 bg-[#f0f4f8] border-b border-black/6">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-[#E87722] text-xs font-semibold tracking-[0.3em] mb-3 uppercase">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d1520] mb-4 gsap-fade-up">Get in Touch</h1>
          <p className="text-[#1a2537]/55 text-lg max-w-xl gsap-fade-up">
            Discuss your precision manufacturing or engineering design requirements with our team.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Info sidebar */}
          <div className="lg:col-span-2 space-y-6 gsap-fade-up">

            {/* Info card */}
            <div className="bg-white border border-black/8 rounded-sm p-8">
              <h3 className="text-base font-bold text-[#0d1520] mb-7 uppercase tracking-wider text-xs text-[#1a2537]/40">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#E87722]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#E87722]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a2537]/40 mb-1.5 font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:sales@empirictechcraft.com" className="text-[#0d1520] hover:text-[#E87722] transition-colors font-medium text-sm">
                      sales@empirictechcraft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#E87722]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#E87722]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a2537]/40 mb-1.5 font-medium uppercase tracking-wider">Phone</p>
                    <a href="tel:+919974945400" className="text-[#0d1520] hover:text-[#E87722] transition-colors font-medium text-sm">
                      +91 9974945400
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#E87722]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#E87722]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a2537]/40 mb-1.5 font-medium uppercase tracking-wider">Headquarters</p>
                    <p className="text-[#0d1520] font-medium leading-relaxed text-sm">
                      Jamnagar, Gujarat 361001<br/>India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#E87722]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#E87722]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a2537]/40 mb-1.5 font-medium uppercase tracking-wider">Business Hours</p>
                    <p className="text-[#0d1520] font-medium text-sm">Mon – Sat, 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company quick facts */}
            <div className="bg-[#0d1520] rounded-sm p-8">
              <h3 className="text-xs font-semibold text-white/55 uppercase tracking-wider mb-6">Company</h3>
              <div className="space-y-4">
                {[
                  { label: 'Founded', value: '2024' },
                  { label: 'Type', value: 'Privately Held' },
                  { label: 'Team Size', value: '2–10 employees' },
                  { label: 'Location', value: 'Jamnagar, Gujarat, India' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-xs text-white/40 font-medium uppercase tracking-wider">{item.label}</span>
                    <span className="text-sm text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3 bg-white border border-black/8 rounded-sm p-8 md:p-10 gsap-fade-up">
            <h3 className="text-xs font-semibold text-[#1a2537]/40 uppercase tracking-wider mb-8">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#1a2537]/50 mb-2 uppercase tracking-wider">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1a2537]/50 mb-2 uppercase tracking-wider">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#1a2537]/50 mb-2 uppercase tracking-wider">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1a2537]/50 mb-2 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 00000 00000" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a2537]/50 mb-2 uppercase tracking-wider">Requirement / Message *</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={inputClass + " resize-none"}
                  placeholder="Describe your project, component specifications, volumes, or any other requirements…"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#E87722] text-white font-bold tracking-widest uppercase py-4 rounded-sm hover:bg-[#d06b1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Sending…' : 'Send Enquiry →'}
              </button>

              <p className="text-xs text-[#1a2537]/35 text-center">
                We typically respond within one business day.
              </p>
            </form>
          </div>

        </div>

        {/* Specialties strip */}
        <div className="mt-12 bg-white border border-black/8 rounded-sm p-8 gsap-fade-up">
          <p className="text-xs font-semibold text-[#1a2537]/40 uppercase tracking-wider mb-5">Our Specialisations</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Product Design & Development', 'CAD Modeling', 'CNC Fixture Design',
              'Industrial Packaging Design', 'Industrial Manufacturing',
              'CNC Machining', 'Plumbing Components', 'Electrical Components',
              'CNC Precision Components', 'Automotive Engineering', 'DFM Engineering',
              'Casting & Forging Die Design', 'Reverse Engineering', 'Value Engineering (VAVE)',
            ].map((spec) => (
              <span key={spec} className="px-3 py-1.5 bg-[#f0f4f8] border border-black/6 text-[#1a2537]/65 text-xs font-medium rounded-sm">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
