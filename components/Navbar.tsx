'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Why Evenzs', href: '#why-evenzs' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070C1B]/80 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center flex-shrink-0"
              aria-label="Evenzs home"
            >
              <div className="bg-white rounded-xl px-3 py-1.5 shadow-lg shadow-black/10">
                <Image
                  src="/Evenzs-Logo-Final.png"
                  alt="Evenzs — From Toast To Takeoff"
                  width={200}
                  height={56}
                  className="h-11 w-auto object-contain"
                  priority
                />
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-[13px] font-medium text-[#94A3B8] hover:text-white transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={() => handleNav('#feedback')}
                className="px-6 py-2.5 rounded-full text-[13px] font-semibold text-[#070C1B] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
              >
                Share Your Experience
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-[#94A3B8] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0D1527]/95 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-7 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-[15px] text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#feedback')}
              className="mt-2 w-full py-3 rounded-full text-sm font-semibold text-[#070C1B] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] transition-all duration-300"
            >
              Share Your Experience
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
