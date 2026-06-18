declare module '*.png';

import React from 'react';
import { Link } from 'wouter';
import { Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#0d1520] border-t border-white/5 pt-12 md:pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex mb-5">
            <img src="/white-logo.png" alt="Empiric TechCraft" className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Precision engineering and design consultancy for manufacturers, OEMs, and product developers. Founded 2026, Jamnagar, Gujarat.
            </p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-[#E87722] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-[#E87722] transition-colors">Contact</Link></li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-[#E87722] shrink-0" />
                <a href="mailto:sales@empirictechcraft.com" className="hover:text-[#E87722] transition-colors text-sm break-all">sales@empirictechcraft.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-[#E87722] shrink-0" />
                <a href="tel:+919974945400" className="hover:text-[#E87722] transition-colors text-sm">+91 9974945400</a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-[#E87722] shrink-0 mt-0.5" />
                <span className="text-sm">Jamnagar, Gujarat 361001, India</span>
              </li>
            </ul>
          </div>

          {/* Consultancy */}
          <div>
            <h4 className="font-semibold text-white mb-4 md:mb-5 uppercase tracking-wider text-[10px]">Empiric Consultancy</h4>
            <ul className="space-y-2.5 md:space-y-3 text-sm text-gray-300">
              <li><Link href="/consultancy/product-design" className="hover:text-[#E87722] transition-colors">Product Design & Dev.</Link></li>
              <li><Link href="/consultancy/die-design" className="hover:text-[#E87722] transition-colors">Casting & Forging Die Design</Link></li>
              <li><Link href="/consultancy/cnc-fixtures" className="hover:text-[#E87722] transition-colors">CNC Fixture & Tool Design</Link></li>
              <li><Link href="/consultancy/reverse-engineering" className="hover:text-[#E87722] transition-colors">Reverse Engineering</Link></li>
              <li><Link href="/consultancy/vave" className="hover:text-[#E87722] transition-colors">Value Engineering (VAVE)</Link></li>
              <li><Link href="/consultancy/packaging" className="hover:text-[#E87722] transition-colors">Industrial Packaging Design</Link></li>
            </ul>
          </div>

          {/* Manufacturing */}
          <div>
            <h4 className="font-semibold text-white mb-4 md:mb-5 uppercase tracking-wider text-[10px]">Empiric TechCraft</h4>
            <ul className="space-y-2.5 md:space-y-3 text-sm text-gray-300 mb-6">
              <li><Link href="/manufacturing/electrical" className="hover:text-[#E87722] transition-colors">Electrical Components</Link></li>
              <li><Link href="/manufacturing/plumbing" className="hover:text-[#E87722] transition-colors">Faucet & Plumbing Components</Link></li>
              <li><Link href="/manufacturing/cnc-precision" className="hover:text-[#E87722] transition-colors">CNC Precision Components</Link></li>
              <li><Link href="/manufacturing/general-engineering" className="hover:text-[#E87722] transition-colors">Engineering Components</Link></li>
            </ul>
            <div>
              <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[10px]">Industries</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                {['Automotive', 'Electrical', 'Plumbing', 'General Engineering'].map(ind => (
                  <li key={ind} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E87722] shrink-0" />{ind}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick action */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-white mb-4 md:mb-5 uppercase tracking-wider text-[10px]">Get in Touch</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Ready to discuss your engineering requirements? Send us an enquiry and we'll respond within one business day.
            </p>
            <Link href="/contact" className="btn-primary text-[10px] inline-flex">Send Enquiry →</Link>
          </div>

        </div>

        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Empiric TechCraft Engineering · Jamnagar, Gujarat, India
          </p>
          <div className="flex gap-4 md:gap-6 text-xs text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
