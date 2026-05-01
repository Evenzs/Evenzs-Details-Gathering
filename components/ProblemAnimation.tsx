'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MessageSquare, CreditCard, ClipboardList, Phone, Mail, Clock, Users, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle2, ArrowRight, X, Zap } from 'lucide-react';

const chaosApps = [
  { icon: Calendar, label: 'Google Calendar', color: '#4285F4', notifications: 3 },
  { icon: MessageSquare, label: 'WhatsApp', color: '#25D366', notifications: 12 },
  { icon: CreditCard, label: 'QuickBooks', color: '#2CA01C', notifications: 1 },
  { icon: ClipboardList, label: 'Trello', color: '#0079BF', notifications: 5 },
  { icon: Phone, label: 'Phone Calls', color: '#FF6B35', notifications: 7 },
  { icon: Mail, label: 'Gmail', color: '#EA4335', notifications: 24 },
  { icon: Clock, label: 'Reminders', color: '#FF9500', notifications: 9 },
  { icon: Users, label: 'Spreadsheets', color: '#0F9D58', notifications: 2 },
];

export default function ProblemAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/[0.02] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[100px]" />
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
            className="relative w-[340px] h-[360px] sm:w-[420px] sm:h-[400px] flex-shrink-0"
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

            {/* Phone mockup frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] h-[300px] sm:h-[340px] rounded-[24px] border-2 border-white/[0.08] bg-[#0A0F1C] overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* Phone status bar */}
              <div className="h-7 bg-[#0F1729] flex items-center justify-between px-4">
                <span className="text-[8px] text-white/40">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 rounded-sm bg-white/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                </div>
              </div>

              {/* Notification stack — chaotic */}
              <div className="p-2.5 space-y-2 overflow-hidden">
                {chaosApps.slice(0, 6).map((app, i) => (
                  <motion.div
                    key={app.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="relative"
                  >
                    <motion.div
                      animate={isInView ? { x: [0, i % 2 === 0 ? 2 : -2, 0] } : {}}
                      transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${app.color}20` }}
                      >
                        <app.icon size={12} style={{ color: app.color }} strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] text-white/70 font-medium truncate">{app.label}</p>
                        <p className="text-[8px] text-white/30 truncate">
                          {app.notifications} unread {app.notifications > 5 ? 'urgent' : ''} messages
                        </p>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-red-500/80 flex items-center justify-center flex-shrink-0">
                        <span className="text-[7px] text-white font-bold">{app.notifications}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating scattered cards around phone */}
            {[
              { x: -70, y: 30, rotate: -12, icon: Mail, label: 'Vendor Inquiry', sub: 'Unread - 3h ago' },
              { x: 100, y: 60, rotate: 8, icon: Phone, label: 'Missed Call', sub: 'Client - 2x' },
              { x: -50, y: 220, rotate: -6, icon: CreditCard, label: 'Invoice #847', sub: 'Overdue' },
              { x: 110, y: 240, rotate: 10, icon: ClipboardList, label: 'Checklist', sub: '4 items left' },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + i * 0.15, type: 'spring', stiffness: 100 }}
                className="absolute"
                style={{
                  left: `calc(50% + ${card.x}px)`,
                  top: `${card.y}px`,
                }}
              >
                <motion.div
                  animate={isInView ? { y: [0, -4, 0, 3, 0], rotate: [card.rotate, card.rotate + 2, card.rotate - 1, card.rotate] } : {}}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  className="relative"
                  style={{ transform: `rotate(${card.rotate}deg)` }}
                >
                  <div className="w-[100px] sm:w-[120px] p-2 rounded-xl bg-[#0F1729]/95 border border-red-400/10 shadow-xl shadow-black/40 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 mb-1">
                      <card.icon size={10} className="text-red-400/70" strokeWidth={2} />
                      <span className="text-[8px] text-white/70 font-medium truncate">{card.label}</span>
                    </div>
                    <p className="text-[7px] text-red-400/60">{card.sub}</p>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border border-[#0F1729] flex items-center justify-center">
                    <X size={6} className="text-white" strokeWidth={3} />
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Stress indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-400/20"
              >
                <span className="text-[9px] text-red-400 font-medium tracking-wide">
                  47 notifications pending
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Arrow transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-col items-center gap-3 flex-shrink-0"
          >
            <motion.div
              animate={isInView ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C]/30 to-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center shadow-lg shadow-[#C9A84C]/10"
            >
              <ArrowRight size={20} className="text-[#C9A84C] lg:rotate-0 rotate-90" />
            </motion.div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]/70 font-semibold">
              Evenzs
            </span>
          </motion.div>

          {/* UNIFIED state — right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 2 }}
            className="relative w-[340px] sm:w-[420px] flex-shrink-0"
          >
            {/* Unified label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 2.2 }}
              className="flex items-center gap-1.5 mb-4 justify-center"
            >
              <CheckCircle2 size={12} className="text-emerald-400/80" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-400/80 font-semibold">
                One Unified Platform
              </span>
            </motion.div>

            {/* Unified dashboard — richer mockup */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="rounded-2xl border border-[#C9A84C]/15 bg-[#0B1120]/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-[#C9A84C]/[0.05]"
            >
              {/* Browser-like header */}
              <div className="px-4 py-3 bg-[#0F1729] border-b border-white/[0.06] flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 h-5 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <span className="text-[8px] text-white/30">app.evenzs.com/dashboard</span>
                </div>
              </div>

              <div className="p-5">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center">
                      <Zap size={14} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <span className="text-white text-sm font-semibold block leading-tight">Event Dashboard</span>
                      <span className="text-[9px] text-white/40">Sarah&apos;s Wedding - June 15</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                      <span className="text-[8px] text-emerald-400 font-medium">All systems go</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] text-white/50">Event readiness</span>
                    <span className="text-[9px] text-emerald-400 font-medium">94%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={isInView ? { width: '94%' } : {}}
                      transition={{ duration: 1.2, delay: 2.6, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-emerald-400"
                    />
                  </div>
                </div>

                {/* Dashboard rows */}
                {[
                  { icon: Users, label: 'Vendors', status: 'All confirmed', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                  { icon: Clock, label: 'Timeline', status: 'On track', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                  { icon: MessageSquare, label: 'Communications', status: 'In sync', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                  { icon: CreditCard, label: 'Payments', status: 'Settled', color: 'text-[#C9A84C]', bg: 'bg-[#C9A84C]/10' },
                  { icon: ClipboardList, label: 'Tasks', status: '28/28 done', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 2.5 + i * 0.12 }}
                    className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-md ${row.bg} flex items-center justify-center`}>
                        <row.icon size={11} className={row.color} strokeWidth={2} />
                      </div>
                      <span className="text-[#CBD5E1] text-xs font-medium">{row.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-medium ${row.color}`}>{row.status}</span>
                      <CheckCircle2 size={10} className="text-emerald-400/60" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 3 }}
          className="text-center text-[#64748B] text-sm leading-relaxed max-w-lg mx-auto mt-14 sm:mt-16"
        >
          Spreadsheets, group chats, and sticky notes weren&apos;t designed for live event
          execution. Things fall through the cracks — and your reputation is on the line.
        </motion.p>
      </div>
    </section>
  );
}
