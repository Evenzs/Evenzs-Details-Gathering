'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mail, ClipboardList, CheckCircle2, Calendar, RefreshCw, Bell, FileText, Link2, Armchair } from 'lucide-react';
import WalkthroughModal from './WalkthroughModal';

const useCases = [
  {
    label: 'Vendor Coordination',
    headline: 'From scattered chats to one confirmed list',
    description: 'All vendor confirmations, contracts, and contacts in a single timeline view.',
    flow: [
      { icon: Mail, text: 'Email / WhatsApp' },
      { icon: ClipboardList, text: 'Evenzs Hub' },
      { icon: CheckCircle2, text: 'Confirmed & On-track' },
    ],
  },
  {
    label: 'Day-of Timeline',
    headline: 'Live runsheet every stakeholder can see',
    description: 'Shift one item and every downstream cue updates automatically.',
    flow: [
      { icon: Calendar, text: 'Runsheet Built' },
      { icon: RefreshCw, text: 'Auto-cascades' },
      { icon: Bell, text: 'Team Notified' },
    ],
  },
  {
    label: 'Guest Management',
    headline: 'RSVPs, dietary needs, seating — resolved',
    description: 'Dynamic guest list that syncs across your entire event team in real time.',
    flow: [
      { icon: FileText, text: 'RSVP Collected' },
      { icon: Link2, text: 'Synced Live' },
      { icon: Armchair, text: 'Seating Ready' },
    ],
  },
];

export default function UseCasesSection() {
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);

  return (
    <section id="usecases" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#C9A84C]/[0.025] rounded-full blur-[180px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-4">
              How It Works
            </p>
            <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold text-white leading-[1.08] tracking-[-0.03em]">
              See the difference
              <br />
              <span className="text-[#64748B] font-normal italic font-[var(--font-playfair)]">
                for yourself.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs mb-5">
              Three of the most common event headaches — and how Evenzs resolves each one.
            </p>
            <button
              onClick={() => setWalkthroughOpen(true)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#C9A84C]/30 text-[#C9A84C] hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/[0.06] hover:text-[#D4AF37] font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              <Play size={13} strokeWidth={2} className="fill-current" />
              Watch full walkthrough
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* Use-case cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-dark rounded-2xl p-7 group relative overflow-hidden hover:translate-y-[-2px] transition-transform duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full mb-5 text-[#C9A84C] bg-[#C9A84C]/[0.07] border border-[#C9A84C]/[0.15]">
                {uc.label}
              </span>

              <h3 className="text-white font-semibold text-base leading-snug tracking-[-0.01em] mb-2">
                {uc.headline}
              </h3>
              <p className="text-[#64748B] text-sm leading-[1.7] mb-7">
                {uc.description}
              </p>

              {/* Flow diagram with proper icons */}
              <div className="flex items-center gap-2">
                {uc.flow.map((step, si) => (
                  <div key={si} className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
                      <div className="w-full rounded-xl px-2 py-3 flex flex-col items-center gap-1.5 border transition-all duration-300 group-hover:border-[#C9A84C]/20 bg-[#C9A84C]/[0.04] border-[#C9A84C]/[0.1]">
                        <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/[0.1] flex items-center justify-center">
                          <step.icon size={14} className="text-[#C9A84C]" strokeWidth={1.75} />
                        </div>
                        <span className="text-[9px] text-center text-[#94A3B8] font-medium leading-tight">{step.text}</span>
                      </div>
                    </div>
                    {si < uc.flow.length - 1 && (
                      <ArrowRight
                        size={11}
                        strokeWidth={2}
                        className="shrink-0 text-[#C9A84C]/50"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WalkthroughModal open={walkthroughOpen} onClose={() => setWalkthroughOpen(false)} />
    </section>
  );
}
