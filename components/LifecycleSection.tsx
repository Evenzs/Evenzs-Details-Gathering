'use client';

import { motion } from 'framer-motion';

const stages = [
  {
    phase: 'Plan',
    line: 'Every detail, before the chaos begins.',
  },
  {
    phase: 'Build',
    line: 'Your team, your timeline, one place.',
  },
  {
    phase: 'Execute',
    line: 'The day runs itself.',
  },
  {
    phase: 'Close',
    line: 'Done. And remembered.',
  },
];

export default function LifecycleSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-16 sm:mb-20"
        >
          The full event lifecycle
        </motion.p>

        {/* Stages */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-y-0">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.phase}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Phase number */}
              <p className="text-[11px] text-[#2D3748]/40 mb-4 tracking-widest">
                0{i + 1}
              </p>

              {/* Phase name */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.02em] mb-3">
                {stage.phase}
              </h3>

              {/* Single line */}
              <p className="text-[#64748B] text-sm leading-relaxed">
                {stage.line}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
