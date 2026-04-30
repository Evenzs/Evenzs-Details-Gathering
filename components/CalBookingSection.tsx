'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalBookingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Load Cal embed snippet inline (matches their official snippet exactly)
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal as any;
        let ar = arguments as any;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement('script');
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', 'siva', { origin: 'https://cal.com' });
    window.Cal.ns['siva']('inline', {
      elementOrSelector: '#cal-booking-embed',
      calLink: 'siva-durbhakula-kmuett',
      config: { layout: 'month_view', theme: 'dark' },
    });

    window.Cal.ns['siva']('ui', {
      styles: { branding: { brandColor: '#C9A84C' } },
      hideEventTypeDetails: false,
    });

    // Poll until the embed script fires and fills the container
    const check = setInterval(() => {
      const el = document.getElementById('cal-booking-embed');
      if (el && el.children.length > 0) {
        setCalReady(true);
        clearInterval(check);
      }
    }, 300);

    return () => clearInterval(check);
  }, []);

  const perks = [
    { icon: Clock, label: '30-minute conversation' },
    { icon: MessageSquare, label: 'Share your real workflow' },
    { icon: Calendar, label: 'Pick a time that works for you' },
  ];

  return (
    <section id="schedule" className="relative py-20 sm:py-28">
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
          className="rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.02]"
          style={{ minHeight: 700 }}
        >
          {/* Skeleton shown while Cal loads */}
          {!calReady && (
            <div className="flex items-center justify-center" style={{ minHeight: 700 }}>
              <div className="flex flex-col items-center gap-4 text-[#4A5568]">
                <svg className="animate-spin w-7 h-7 text-[#C9A84C]/50" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="text-sm">Loading calendar...</span>
              </div>
            </div>
          )}
          <div
            id="cal-booking-embed"
            ref={containerRef}
            style={{ width: '100%', height: '100%', minHeight: 700 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
