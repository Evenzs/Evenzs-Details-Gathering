'use client';

import { motion } from 'framer-motion';

const stages = [
  {
    phase: 'Planning',
    timing: 'Weeks before',
    features: ['Vendor sourcing', 'Budget tracking', 'Contract storage'],
    color: '#C9A84C',
  },
  {
    phase: 'Build-up',
    timing: 'Days before',
    features: ['Timeline build', 'Team briefing', 'Guest RSVPs'],
    color: '#4A90D9',
  },
  {
    phase: 'Day-of',
    timing: 'Event day',
    features: ['Live runsheet', 'Real-time updates', 'On-site comms'],
    color: '#3DAD7F',
  },
  {
    phase: 'Wrap',
    timing: 'After the event',
    features: ['Payment tracking', 'Feedback collection', 'Event archive'],
    color: '#E07B54',
  },
];

export default function LifecycleSection() {
  return (
    <section className="relative py-10 sm:py-12 overflow-hidden">
      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
            Where Evenzs lives in your workflow
          </p>
          <div className="flex-1 h-px bg-white/[0.05]" />
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.phase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative group"
            >
              {/* Connector line (desktop only, not on last) */}
              {i < stages.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[22px] left-full w-4 h-px z-10"
                  style={{ background: `linear-gradient(90deg, ${stage.color}40, ${stages[i + 1].color}40)` }}
                />
              )}

              <div
                className="rounded-xl p-4 sm:p-5 border transition-all duration-300 group-hover:translate-y-[-2px]"
                style={{
                  backgroundColor: `${stage.color}06`,
                  borderColor: `${stage.color}18`,
                }}
              >
                {/* Phase number + name */}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${stage.color}18`, color: stage.color }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm font-semibold tracking-[-0.01em]"
                    style={{ color: stage.color }}
                  >
                    {stage.phase}
                  </span>
                </div>

                {/* Timing */}
                <p className="text-[#4A5568] text-[11px] mb-3.5 pl-7">{stage.timing}</p>

                {/* Feature tags */}
                <ul className="space-y-1.5 pl-7">
                  {stage.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: `${stage.color}60` }}
                      />
                      <span className="text-[#64748B] text-[11px] leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
