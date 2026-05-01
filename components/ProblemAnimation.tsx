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
  TriangleAlert as AlertTriangle,
  CircleCheck as CheckCircle2,
  ArrowRight,
  Zap,
  Wifi,
  Battery,
  Signal,
  Lock,
  ChevronLeft,
  ChevronRight,
  Share,
  LayoutGrid,
  Plus,
} from 'lucide-react';

const notifications = [
  { icon: Mail, app: 'Gmail', title: 'Vendor hasn\'t replied', subtitle: 'RE: Floral arrangements for June 15...', time: '3m ago', color: '#EA4335', bg: '#EA433515' },
  { icon: MessageSquare, app: 'WhatsApp', title: '12 new messages', subtitle: 'Wedding Group: "Has anyone confirmed the DJ?"', time: '8m ago', color: '#25D366', bg: '#25D36615' },
  { icon: Phone, app: 'Phone', title: '2 Missed Calls', subtitle: 'Caterer - Urgent', time: '15m ago', color: '#FF6B35', bg: '#FF6B3515' },
  { icon: CreditCard, app: 'QuickBooks', title: 'Invoice Overdue', subtitle: 'Photographer payment - $2,400 past due', time: '1h ago', color: '#2CA01C', bg: '#2CA01C15' },
  { icon: Calendar, app: 'Google Calendar', title: 'Conflict Detected', subtitle: 'Venue walkthrough overlaps with...', time: '2h ago', color: '#4285F4', bg: '#4285F415' },
  { icon: ClipboardList, app: 'Trello', title: '5 tasks overdue', subtitle: 'Seating chart, menu cards, place...', time: '3h ago', color: '#0079BF', bg: '#0079BF15' },
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
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
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
          {/* CHAOS state — iPhone mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Chaos label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-1.5 justify-center mb-5"
            >
              <AlertTriangle size={12} className="text-red-400/80" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-red-400/80 font-semibold">
                Today&apos;s Reality
              </span>
            </motion.div>

            {/* iPhone frame */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateY: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto"
            >
              {/* Outer iPhone shell */}
              <div className="relative w-[240px] sm:w-[280px] h-[490px] sm:h-[570px] rounded-[40px] sm:rounded-[48px] bg-[#1A1A1E] p-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.4)]">
                {/* Titanium edge highlight */}
                <div className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-gradient-to-b from-white/[0.08] via-transparent to-white/[0.03] pointer-events-none" />

                {/* Screen bezel */}
                <div className="relative w-full h-full rounded-[37px] sm:rounded-[45px] bg-black overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20 w-[90px] sm:w-[110px] h-[25px] sm:h-[30px] bg-black rounded-full flex items-center justify-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a2e] border border-[#2a2a3e]" />
                  </div>

                  {/* iOS Status Bar */}
                  <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 pt-4 sm:pt-5 pb-1">
                    <span className="text-[10px] sm:text-[11px] text-white font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <Signal size={11} className="text-white" strokeWidth={2.5} />
                      <Wifi size={12} className="text-white" strokeWidth={2.5} />
                      <Battery size={16} className="text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Lock screen background — gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C2E] via-[#0F0F1A] to-[#0A0A12]" />

                  {/* Lock icon + time */}
                  <div className="relative z-10 flex flex-col items-center mt-6 sm:mt-8 mb-3 sm:mb-4">
                    <Lock size={10} className="text-white/40 mb-1" />
                    <span className="text-[9px] text-white/40 font-medium tracking-wide">Wednesday, June 12</span>
                    <span className="text-[28px] sm:text-[36px] text-white font-light tracking-tight leading-tight">9:41</span>
                  </div>

                  {/* iOS Notification stack */}
                  <div className="relative z-10 px-3 sm:px-4 space-y-[6px] sm:space-y-2">
                    {notifications.map((notif, i) => (
                      <motion.div
                        key={notif.app}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.12, type: 'spring', stiffness: 120 }}
                      >
                        <motion.div
                          animate={isInView ? { x: [0, i % 2 === 0 ? 1 : -1, 0] } : {}}
                          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                          className="flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.05]"
                        >
                          {/* App icon */}
                          <div
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] sm:rounded-[10px] flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: notif.bg, border: `1px solid ${notif.color}30` }}
                          >
                            <notif.icon size={14} style={{ color: notif.color }} strokeWidth={2} />
                          </div>
                          {/* Content */}
                          <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[9px] sm:text-[10px] text-white/50 font-medium uppercase tracking-wide">{notif.app}</span>
                              <span className="text-[7px] sm:text-[8px] text-white/30">{notif.time}</span>
                            </div>
                            <p className="text-[9px] sm:text-[10px] text-white/90 font-semibold truncate leading-tight mt-0.5">{notif.title}</p>
                            <p className="text-[8px] sm:text-[9px] text-white/40 truncate leading-tight mt-0.5">{notif.subtitle}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom indicator bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] sm:w-[120px] h-[4px] rounded-full bg-white/20" />
                </div>
              </div>

              {/* Notification count badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.8, type: 'spring', stiffness: 200 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 border-[3px] border-[#0A0F1C] flex items-center justify-center shadow-lg shadow-red-500/30">
                  <span className="text-white text-xs sm:text-sm font-bold">47</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Stress label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2 }}
              className="mt-4 text-center"
            >
              <span className="text-[10px] text-red-400/60 font-medium">Overwhelmed. Scattered. Things slip.</span>
            </motion.div>
          </motion.div>

          {/* Arrow transition — hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="hidden lg:flex flex-col items-center gap-3 flex-shrink-0"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C]/30 to-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center shadow-lg shadow-[#C9A84C]/10">
              <ArrowRight size={20} className="text-[#C9A84C]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]/70 font-semibold">
              Evenzs
            </span>
          </motion.div>

          {/* UNIFIED state — Browser mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 2.4 }}
            className="relative w-[340px] sm:w-[460px] flex-shrink-0"
          >
            {/* Unified label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 2.5 }}
              className="flex items-center gap-1.5 mb-5 justify-center"
            >
              <CheckCircle2 size={12} className="text-emerald-400/80" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-400/80 font-semibold">
                One Unified Platform
              </span>
            </motion.div>

            {/* Safari-style browser window */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(201,168,76,0.08)]"
            >
              {/* Browser chrome — Safari style */}
              <div className="bg-[#28282C] border-b border-white/[0.06]">
                {/* Tab bar */}
                <div className="flex items-center px-3 sm:px-4 pt-2.5 sm:pt-3 pb-0">
                  {/* Window controls */}
                  <div className="flex gap-[6px] sm:gap-2 mr-3 sm:mr-4">
                    <div className="w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]/50" />
                    <div className="w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E] border border-[#DEA123]/50" />
                    <div className="w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full bg-[#28C840] border border-[#1EAA33]/50" />
                  </div>

                  {/* Active tab */}
                  <div className="flex-1 flex items-center">
                    <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1E1E22] rounded-t-lg border border-white/[0.06] border-b-0 max-w-[200px] sm:max-w-[240px]">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm bg-[#C9A84C]/20 flex items-center justify-center">
                          <Zap size={7} className="text-[#C9A84C]" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-white/70 font-medium truncate">Evenzs - Event Dashboard</span>
                      </div>
                    </div>
                    <div className="ml-1 w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center hover:bg-white/[0.05]">
                      <Plus size={10} className="text-white/30" />
                    </div>
                  </div>
                </div>

                {/* URL bar */}
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#1E1E22]">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <ChevronLeft size={12} className="text-white/20" />
                    <ChevronRight size={12} className="text-white/20" />
                  </div>
                  <div className="flex-1 h-7 sm:h-8 rounded-lg bg-[#38383C] border border-white/[0.04] flex items-center justify-center px-3 gap-1.5">
                    <Lock size={9} className="text-white/30" />
                    <span className="text-[9px] sm:text-[10px] text-white/50 font-medium">app.evenzs.com/dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Share size={12} className="text-white/20" />
                    <LayoutGrid size={12} className="text-white/20" />
                  </div>
                </div>
              </div>

              {/* Browser content — Dashboard */}
              <div className="bg-[#0B0F1A] p-4 sm:p-6">
                {/* Dashboard top bar */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center">
                      <Zap size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <span className="text-white text-xs sm:text-sm font-semibold block leading-tight">Sarah & James Wedding</span>
                      <span className="text-[9px] sm:text-[10px] text-white/40">June 15, 2026 - The Grand Ballroom</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                      <span className="text-[9px] text-emerald-400 font-semibold">Live</span>
                    </div>
                  </div>
                </div>

                {/* Progress section */}
                <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs text-white/60 font-medium">Event Readiness</span>
                    <span className="text-[10px] sm:text-xs text-emerald-400 font-bold">94%</span>
                  </div>
                  <div className="h-2 sm:h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={isInView ? { width: '94%' } : {}}
                      transition={{ duration: 1.5, delay: 3, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] via-emerald-400 to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[8px] sm:text-[9px] text-white/30">3 days until event</span>
                    <span className="text-[8px] sm:text-[9px] text-white/30">28 of 30 tasks complete</span>
                  </div>
                </div>

                {/* Dashboard rows */}
                <div className="space-y-1">
                  {[
                    { icon: Users, label: 'Vendors', status: 'All confirmed', statusDetail: '8/8', color: 'text-emerald-400', bg: 'bg-emerald-400/10', borderColor: 'border-emerald-400/20' },
                    { icon: Clock, label: 'Timeline', status: 'On track', statusDetail: 'Day-of ready', color: 'text-emerald-400', bg: 'bg-emerald-400/10', borderColor: 'border-emerald-400/20' },
                    { icon: MessageSquare, label: 'Communications', status: 'In sync', statusDetail: '0 pending', color: 'text-emerald-400', bg: 'bg-emerald-400/10', borderColor: 'border-emerald-400/20' },
                    { icon: CreditCard, label: 'Payments', status: 'Settled', statusDetail: '$47,200', color: 'text-[#C9A84C]', bg: 'bg-[#C9A84C]/10', borderColor: 'border-[#C9A84C]/20' },
                    { icon: ClipboardList, label: 'Checklist', status: 'Complete', statusDetail: '28/28', color: 'text-emerald-400', bg: 'bg-emerald-400/10', borderColor: 'border-emerald-400/20' },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 2.9 + i * 0.12 }}
                      className="flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/[0.04]"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${row.bg} border ${row.borderColor} flex items-center justify-center`}>
                          <row.icon size={13} className={row.color} strokeWidth={2} />
                        </div>
                        <div>
                          <span className="text-[#CBD5E1] text-[11px] sm:text-xs font-medium block">{row.label}</span>
                          <span className="text-[8px] sm:text-[9px] text-white/30">{row.statusDetail}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] sm:text-[10px] font-semibold ${row.color}`}>{row.status}</span>
                        <CheckCircle2 size={12} className="text-emerald-400/50" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Calm label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 3.5 }}
              className="mt-4 text-center"
            >
              <span className="text-[10px] text-emerald-400/60 font-medium">Calm. Controlled. Nothing missed.</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 3.6 }}
          className="text-center text-[#64748B] text-sm leading-relaxed max-w-lg mx-auto mt-14 sm:mt-16"
        >
          Spreadsheets, group chats, and sticky notes weren&apos;t designed for live event
          execution. Things fall through the cracks — and your reputation is on the line.
        </motion.p>
      </div>
    </section>
  );
}
