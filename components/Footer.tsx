'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">

          {/* Logo & tagline */}
          <div>
            <div className="mb-5">
              <Image
                src="/Logo_(1).png"
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

          {/* Founder card (compact) */}
          <div className="card-dark rounded-2xl p-6 border border-white/[0.06]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mb-3">
              From the Founder
            </p>
            <p className="text-[#94A3B8] text-sm leading-[1.8] mb-4">
              &ldquo;We&apos;re not building what we think you need. We&apos;re building what
              you tell us you can&apos;t live without.&rdquo;
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <div>
                <p className="text-white text-sm font-semibold">Siva Durbhakula</p>
                <p className="text-[#4A5568] text-xs mt-0.5">Founder, Evenzs</p>
              </div>
              <a
                href="https://www.linkedin.com/in/siva-durbhakula/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#4A5568] hover:text-[#C9A84C] transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors duration-200">
                  <Linkedin size={13} strokeWidth={1.8} />
                </div>
              </a>
            </div>
          </div>

          {/* Contact & social */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contact@evenzs.com"
              className="group flex items-center gap-2.5 text-[#4A5568] hover:text-[#C9A84C] text-sm transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.12] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors duration-300">
                <Mail size={13} className="text-[#C9A84C]" />
              </div>
              contact@evenzs.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/siva-durbhakula/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-[#4A5568] hover:text-[#C9A84C] text-sm transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors duration-300">
                  <Linkedin size={13} className="text-[#94A3B8] group-hover:text-[#C9A84C] transition-colors duration-300" />
                </div>
                Siva Durbhakula
              </a>
              <span className="text-[#1E293B]">&middot;</span>
              <a
                href="https://www.linkedin.com/company/evenzs-com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-[#4A5568] hover:text-[#C9A84C] text-sm transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors duration-300">
                  <Linkedin size={13} className="text-[#94A3B8] group-hover:text-[#C9A84C] transition-colors duration-300" />
                </div>
                Evenzs
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4A5568]">
            &copy; {new Date().getFullYear()} Evenzs.com — All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
