'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

export default function CalBookingSection() {
  const perks = [
    { icon: Clock, label: '30-minute conversation' },
    { icon: MessageSquare, label: 'Share your real workflow' },
    { icon: Calendar, label: 'Pick a time that works for you' },
  ];

  return (
    <section id="schedule" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C9A84C]/[0.025] rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-4">
            Talk To Us
          </p>
          <h2 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4">
            Prefer a real conversation?
            <br />
            <span className="text-[#64748B] font-normal italic font-[var(--font-playfair)]">
              Schedule a call.
            </span>
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed max-w-md mx-auto mb-8">
            We&apos;d love to hear directly from you. Pick a time and let&apos;s talk about the
            real challenges you face running events.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-8">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center shrink-0">
                  <Icon size={13} className="text-[#C9A84C]" strokeWidth={1.8} />
                </div>
                {label}
              </div>
            ))}
          </div>

          <a
            href="https://cal.com/siva-durbhakula-kmuett"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9A84C] text-black font-semibold text-sm tracking-wide hover:bg-[#D4B55A] active:scale-[0.98] transition-all duration-200 shadow-[0_0_40px_rgba(201,168,76,0.25)]"
          >
            <Calendar size={16} strokeWidth={2} />
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
