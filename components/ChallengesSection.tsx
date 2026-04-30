'use client';

import { motion } from 'framer-motion';
import { Users, Clock, MessageSquare, CreditCard, UserCheck, Zap } from 'lucide-react';

const challenges = [
  { icon: Users, title: 'Vendor Coordination', description: 'Dozens of vendors, dozens of platforms. The overhead is constant and compounding.' },
  { icon: Clock, title: 'Timeline Management', description: 'One shift cascades into a domino of delays across every stakeholder involved.' },
  { icon: MessageSquare, title: 'Communication Gaps', description: 'Decisions buried in emails and group chats lead to costly, avoidable mistakes.' },
  { icon: CreditCard, title: 'Payment Tracking', description: 'Chasing deposits and invoices during a live event is a full-time job on its own.' },
  { icon: UserCheck, title: 'Guest Management', description: 'RSVPs, dietary needs, and headcounts change right up until the last minute.' },
  { icon: Zap, title: 'Last-Minute Chaos', description: 'The final 48 hours are unpredictable. Without a single source of truth, things break.' },
];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="relative py-16 sm:py-20">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#141E38]/60 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header — editorial asymmetric layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
              The Reality
            </p>
            <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em]">
              Event chaos is real.
              <br />
              <span className="text-[#94A3B8] font-normal text-[1.6rem] sm:text-[2.2rem] lg:text-[2.6rem] tracking-[-0.02em]">
                Here&apos;s what we keep hearing.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#64748B] text-sm leading-relaxed max-w-xs lg:pb-2"
          >
            These are the pain points we hear most from professionals running events across the country.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card-dark card-dark-hover rounded-2xl p-8 transition-all duration-400 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#C9A84C]/[0.04] to-transparent" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.12] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#C9A84C]/25 transition-all duration-300">
                  <item.icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2.5 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-[1.7]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
