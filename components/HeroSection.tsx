'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="why-evenzs"
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#C9A84C]/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#141E38]/80 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070C1B] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2.5rem] sm:text-[3.8rem] lg:text-[5.2rem] font-bold leading-[1.04] tracking-[-0.035em] text-white mb-6"
        >
          The operating system
          <br />
          <span className="font-[var(--font-playfair)] italic text-gradient-gold">
            for modern events.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#94A3B8] text-base sm:text-lg leading-[1.8] max-w-2xl mx-auto mb-10"
        >
          Evenzs is being built around a simple belief: events should feel seamless for
          everyone — including the people running them. We&apos;re starting by listening to
          planners, venues, vendors, and organizers across the USA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <button
            onClick={() => scrollTo('#feedback')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] text-[#070C1B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#C9A84C]/20 hover:-translate-y-0.5"
          >
            <Sparkles size={15} strokeWidth={2.5} />
            Share Your Experience
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
          </button>
          <p className="text-[#4A5568] text-xs tracking-wide">
            Takes 2–3 minutes. Your feedback helps shape what we build next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
