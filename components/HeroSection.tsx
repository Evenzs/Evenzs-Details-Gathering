'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="why-evenzs"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20"
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#C9A84C]/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#141E38]/80 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[100px]" />
        {/* Grid lines */}
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
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#070C1B] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-12 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]" />
          </span>
          <span className="text-[11px] text-[#94A3B8] tracking-[0.2em] uppercase font-medium">
            Customer Discovery Active
          </span>
        </motion.div>

        {/* Headline with editorial serif + sans mix */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-bold leading-[1.05] tracking-[-0.035em] text-white mb-8"
        >
          The future of
          <br />
          event execution
          <br />
          <span className="font-[var(--font-playfair)] italic text-gradient-gold">
            starts here.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#94A3B8] text-base sm:text-lg leading-[1.8] max-w-xl mx-auto mb-14"
        >
          We&apos;re listening to event professionals across the USA before writing a single
          line of production code. Because the best software starts with people, not
          assumptions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#feedback')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] text-[#070C1B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#C9A84C]/20 hover:-translate-y-0.5"
          >
            <Sparkles size={15} strokeWidth={2.5} />
            Share Your Experience
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scrollTo('#schedule')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/[0.12] text-[#CBD5E1] hover:text-white hover:border-white/[0.25] hover:bg-white/[0.04] font-medium text-sm tracking-wide transition-all duration-300"
          >
            <Calendar size={15} strokeWidth={2} />
            Schedule a Call
          </button>
        </motion.div>

        {/* Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-xs text-[#4A5568]"
        >
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
            Takes less than 3 minutes
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
            100% anonymous &amp; private
          </span>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-[#4A5568] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#C9A84C]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
