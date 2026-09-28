'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="why-evenzs"
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* Background event image — dark-treated */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#070C1B]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070C1B]/60 via-[#070C1B]/70 to-[#070C1B]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
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
          className="text-[#CBD5E1] text-base sm:text-lg leading-[1.8] max-w-xl mx-auto mb-10"
        >
          Evenzs Ops is in private beta with event professionals. Want early access or a
          walkthrough? We&apos;d love to hear from you.
        </motion.p>

        {/* Primary CTA: contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="mailto:support@evenzs.com?subject=Evenzs%20Ops%20early%20access"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] text-[#070C1B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#C9A84C]/20 hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#64748B] text-xs tracking-wide mt-4"
        >
          support@evenzs.com
        </motion.p>
      </div>
    </section>
  );
}
