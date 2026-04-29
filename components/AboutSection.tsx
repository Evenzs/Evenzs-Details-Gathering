'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { value: '3 min', label: 'Average survey time' },
  { value: 'USA', label: 'Nationwide reach' },
  { value: '100%', label: 'Research-driven' },
];

export default function AboutSection() {
  const scrollToFeedback = () => {
    const el = document.querySelector('#feedback');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-28 sm:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-6">
              About Evenzs
            </p>

            <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-8">
              Built on listening,
              <br />
              <span className="text-[#64748B] font-normal italic font-[var(--font-playfair)]">
                not assumptions.
              </span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-[#94A3B8] text-base leading-[1.8]">
                Evenzs is a founder-led startup building the operating system for modern event
                execution. We believe the best software gets built through deep listening
                and real conversations with the people who live the problem every day.
              </p>
              <p className="text-[#64748B] text-sm leading-[1.8]">
                Before writing a single line of production code, we&apos;re speaking directly with
                event professionals — planners, coordinators, venue managers, and vendors across
                the United States.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToFeedback}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] text-[#070C1B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#C9A84C]/20"
            >
              <Sparkles size={15} strokeWidth={2.5} />
              Share Your Experience
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
            </motion.button>
          </motion.div>

          {/* Right — stats + visual block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="card-dark rounded-3xl p-10 border-glow-gold">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-8">
                By The Numbers
              </p>
              <div className="space-y-8">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.03em] min-w-[100px]">
                      {stat.value}
                    </span>
                    <div className="flex-1">
                      <div className="h-px bg-gradient-to-r from-[#C9A84C]/20 to-transparent mb-2" />
                      <span className="text-[#64748B] text-sm">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/[0.06]">
                <p className="text-[#64748B] text-sm leading-relaxed italic font-[var(--font-playfair)]">
                  &ldquo;We&apos;re not building what we think you need. We&apos;re building what
                  you tell us you can&apos;t live without.&rdquo;
                </p>
                <p className="text-[#C9A84C] text-xs font-semibold mt-3 tracking-wide">
                  — Evenzs Founding Team
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
