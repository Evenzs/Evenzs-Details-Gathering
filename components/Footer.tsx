'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Logo */}
          <div>
            <div className="bg-white rounded-xl px-3 py-2 inline-block mb-5 shadow-lg shadow-black/20">
              <Image
                src="/Evenzs-Logo-Final.png"
                alt="Evenzs — From Toast To Takeoff"
                width={180}
                height={50}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-[#4A5568] text-xs leading-relaxed max-w-xs">
              Building the future of event execution.
              <br />
              Customer discovery active across the USA.
            </p>
          </div>

          {/* Contact */}
          <a
            href="mailto:siva.durbhakula@evenzs.com"
            className="group flex items-center gap-2.5 text-[#4A5568] hover:text-[#C9A84C] text-sm transition-colors duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.12] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors duration-300">
              <Mail size={13} className="text-[#C9A84C]" />
            </div>
            siva.durbhakula@evenzs.com
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#334155]">
            &copy; {new Date().getFullYear()} Evenzs.com — All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-[#334155] hover:text-[#64748B] transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="text-xs text-[#334155] hover:text-[#64748B] transition-colors duration-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
