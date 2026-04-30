'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

export default function CalBookingSection() {
  const perks = [
    { icon: Clock, label: '30-minute conversation' },
    { icon: MessageSquare, label: 'Share your real workflow' },
    { icon: Calendar, label: 'Pick a time that works for you' },
  ];

  return (
    <section id="schedule" className="relative py-20 sm:py-28">
      {/* Cal.com embed script — loaded once after page is interactive */}
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as any;
          if (!w.Cal) return;
          w.Cal('init', { origin: 'https://cal.com' });
          w.Cal('inline', {
            elementOrSelector: '#cal-booking-embed',
            calLink: 'siva-durbhakula-kmuett',
            config: { layout: 'month_view', theme: 'dark' },
          });
          w.Cal('ui', {
            styles: { branding: { brandColor: '#C9A84C' } },
            hideEventTypeDetails: false,
          });
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C9A84C]/[0.025] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
            Talk To Us
          </p>
          <h2 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-5">
            Prefer a real conversation?
            <br />
            <span className="text-[#64748B] font-normal italic font-[var(--font-playfair)]">
              Schedule a call.
            </span>
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed max-w-md mx-auto mb-10">
            We&apos;d love to hear directly from you. Pick a time and let&apos;s talk about the
            real challenges you face running events.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center shrink-0">
                  <Icon size={13} className="text-[#C9A84C]" strokeWidth={1.8} />
                </div>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-white/[0.08]"
        >
          <div
            id="cal-booking-embed"
            style={{ width: '100%', minHeight: '700px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
