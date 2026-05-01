'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar,
  MessageSquare,
  CreditCard,
  ClipboardList,
  Phone,
  Mail,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const chaosTools = [
  { icon: Calendar, label: 'Calendars', x: -140, y: -80, rotate: -12 },
  { icon: MessageSquare, label: 'Texts', x: 120, y: -60, rotate: 8 },
  { icon: CreditCard, label: 'Invoices', x: -100, y: 70, rotate: -6 },
  { icon: ClipboardList, label: 'Checklists', x: 150, y: 80, rotate: 14 },
  { icon: Phone, label: 'Calls', x: -160, y: 10, rotate: -18 },
  { icon: Mail, label: 'Emails', x: 170, y: -10, rotate: 10 },
  { icon: Clock, label: 'Timelines', x: -40, y: -110, rotate: -4 },
  { icon: Users, label: 'Guest Lists', x: 60, y: 110, rotate: 6 },
];

export default function ProblemAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
            The Problem
          </p>
          <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-[-0.03em] max-w-3xl mx-auto">
            Event execution is broken across
            <span className="block text-[#94A3B8] font-normal text-[1.4rem] sm:text-[2rem] lg:text-[2.2rem] tracking-[-0.02em] mt-2">
              too many disconnected tools.
            </span>
          </h2>
        </motion.div>

        {/* Animation area */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          {/* CHAOS state — left side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-[320px] h-[280px] sm:w-[380px] sm:h-[320px] flex-shrink-0"
          >
            {/* Chaos label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
            >
              <AlertTriangle size={12} className="text-red-400/80" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-red-400/80 font-semibold">
                Today&apos;s Reality
              </span>
            </motion.div>

            {/* Scattered tool cards */}
            {chaosTools.map((tool, i) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, scale: 0.6, x: 0, y: 0, rotate: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        x: tool.x * 0.55,
                        y: tool.y * 0.55,
                        rotate: tool.rotate,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.07,
                  type: 'spring',
                  stiffness: 80,
                  damping: 12,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={
                    isInView
                      ? {
                          y: [0, -3, 0, 2, 0],
                          rotate: [tool.rotate, tool.rotate + 1.5, tool.rotate - 1, tool.rotate],
                        }
                      : {}
                  }
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0F1729] border border-white/[0.08] flex items-center justify-center shadow-lg shadow-black/30">
                    <tool.icon
                      size={16}
                      className="text-[#94A3B8]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[9px] text-[#64748B] font-medium tracking-wide whitespace-nowrap">
                    {tool.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}

            {/* Connection lines — showing disconnection */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
              <motion.line
                x1="30%" y1="30%" x2="45%" y2="25%"
                stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.line
                x1="55%" y1="70%" x2="70%" y2="55%"
                stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.4 }}
              />
              <motion.line
                x1="25%" y1="60%" x2="40%" y2="75%"
                stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.6 }}
              />
            </svg>
          </motion.div>

          {/* Arrow transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-col items-center gap-3 flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center">
              <ArrowRight size={18} className="text-[#C9A84C] lg:rotate-0 rotate-90" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]/70 font-semibold">
              Evenzs
            </span>
          </motion.div>

          {/* UNIFIED state — right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="relative w-[320px] sm:w-[380px] flex-shrink-0"
          >
            {/* Unified label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 2 }}
              className="flex items-center gap-1.5 mb-4 justify-center"
            >
              <CheckCircle2 size={12} className="text-emerald-400/80" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-400/80 font-semibold">
                One Unified Platform
              </span>
            </motion.div>

            {/* Unified dashboard mock */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="rounded-2xl border border-[#C9A84C]/15 bg-[#0B1120]/90 backdrop-blur-sm p-5 shadow-2xl shadow-[#C9A84C]/[0.03]"
            >
              {/* Mock header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center">
                    <Calendar size={10} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-white text-xs font-medium">Event Dashboard</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C]/60" />
                  <div className="w-2 h-2 rounded-full bg-[#64748B]/40" />
                </div>
              </div>

              {/* Mock rows */}
              {[
                { icon: Users, label: 'Vendors', status: 'All confirmed', color: 'text-emerald-400' },
                { icon: Clock, label: 'Timeline', status: 'On track', color: 'text-emerald-400' },
                { icon: MessageSquare, label: 'Comms', status: 'In sync', color: 'text-emerald-400' },
                { icon: CreditCard, label: 'Payments', status: 'Settled', color: 'text-emerald-400' },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 2.3 + i * 0.12 }}
                  className="flex items-center justify-between py-2.5 border-b border-white/[0.03] last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <row.icon size={13} className="text-[#94A3B8]" strokeWidth={1.5} />
                    <span className="text-[#CBD5E1] text-xs">{row.label}</span>
                  </div>
                  <span className={`text-[10px] font-medium ${row.color}`}>{row.status}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="text-center text-[#64748B] text-sm leading-relaxed max-w-lg mx-auto mt-14 sm:mt-16"
        >
          Spreadsheets, group chats, and sticky notes weren&apos;t designed for live event
          execution. Things fall through the cracks — and your reputation is on the line.
        </motion.p>
      </div>
    </section>
  );
}
