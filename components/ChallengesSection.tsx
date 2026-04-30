'use client';

import { motion } from 'framer-motion';
import { Users, Clock, MessageSquare, CreditCard, UserCheck, Zap } from 'lucide-react';

const challenges = [
  {
    icon: Users,
    quote: '"I have 14 vendor threads open right now across WhatsApp, email, and my notes app."',
    tag: 'Vendor Coordination',
  },
  {
    icon: Clock,
    quote: '"The caterer ran 20 minutes late and I spent the next three hours playing catch-up."',
    tag: 'Timeline Management',
  },
  {
    icon: MessageSquare,
    quote: '"The DJ showed up with the wrong setlist. It was in an email I forgot to forward."',
    tag: 'Communication Gaps',
  },
  {
    icon: CreditCard,
    quote: '"I\'m still chasing two deposits from last month\'s event while planning the next one."',
    tag: 'Payment Tracking',
  },
  {
    icon: UserCheck,
    quote: '"The final headcount changed four times in the last 48 hours. My seating chart was useless."',
    tag: 'Guest Management',
  },
  {
    icon: Zap,
    quote: '"The night before is always chaos. I\'ve accepted it as part of the job at this point."',
    tag: 'Last-Minute Chaos',
  },
];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#141E38]/60 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
              What We Keep Hearing
            </p>
            <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em]">
              Sound familiar?
              <br />
              <span className="text-[#94A3B8] font-normal text-[1.6rem] sm:text-[2.2rem] lg:text-[2.6rem] tracking-[-0.02em]">
                You&apos;re not the only one.
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
            These are real things event professionals told us when we asked them about their hardest days.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card-dark card-dark-hover rounded-2xl p-8 transition-all duration-400 group relative overflow-hidden flex flex-col gap-6"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#C9A84C]/[0.04] to-transparent" />

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                {/* Quote */}
                <p className="text-[#CBD5E1] text-[0.95rem] leading-[1.75] font-normal italic">
                  {item.quote}
                </p>

                {/* Tag row */}
                <div className="flex items-center gap-2.5 mt-auto pt-2 border-t border-white/[0.05]">
                  <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.12] flex items-center justify-center group-hover:scale-110 group-hover:border-[#C9A84C]/25 transition-all duration-300">
                    <item.icon size={13} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#64748B] font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
