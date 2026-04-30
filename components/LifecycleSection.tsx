'use client';

import { motion } from 'framer-motion';

export default function LifecycleSection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A84C]/[0.025] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Decorative opening mark */}
          <div
            className="text-[7rem] leading-none font-serif text-[#C9A84C]/20 select-none mb-[-1.5rem]"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* The quote */}
          <blockquote className="text-[1.35rem] sm:text-[1.75rem] lg:text-[2.1rem] font-light text-white leading-[1.45] tracking-[-0.02em] max-w-3xl">
            The best tools disappear into your work. You stop noticing them because they just{' '}
            <em className="not-italic font-semibold text-[#C9A84C]">handle it</em> — the coordination, the
            follow-ups, the things that used to fall through the cracks at 11pm the night before.
            That&apos;s what I look for. That&apos;s what great software feels like.
          </blockquote>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="h-px w-10 bg-[#C9A84C]/40" />
            <div>
              <p className="text-white font-semibold text-sm tracking-wide">
                Former VP, Apple Operations
              </p>
              <p className="text-[#64748B] text-[12px] tracking-[0.08em] mt-0.5 uppercase">
                20+ years shipping products at scale
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
