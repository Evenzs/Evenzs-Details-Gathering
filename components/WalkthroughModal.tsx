'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Clock, Users, UserCheck } from 'lucide-react';

// ─── Step screens ────────────────────────────────────────────────────────────

function VendorScreen({ step }: { step: number }) {
  const vendors = [
    { name: 'Floral Co.', status: step >= 1 ? 'confirmed' : 'pending', time: '9:00 AM' },
    { name: 'AV Systems', status: step >= 2 ? 'confirmed' : step >= 1 ? 'pending' : 'uncontacted', time: '8:30 AM' },
    { name: 'Catering Plus', status: step >= 3 ? 'confirmed' : 'pending', time: '10:00 AM' },
    { name: 'Photography', status: step >= 3 ? 'confirmed' : step >= 2 ? 'pending' : 'uncontacted', time: '11:00 AM' },
  ];

  const statusStyle: Record<string, string> = {
    confirmed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    pending: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    uncontacted: 'bg-white/[0.04] text-[#4A5568] border-white/[0.08]',
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">Vendor Status Board</span>
        <span className="text-[11px] text-[#C9A84C] font-medium">
          {vendors.filter(v => v.status === 'confirmed').length}/{vendors.length} confirmed
        </span>
      </div>
      {vendors.map((v, i) => (
        <motion.div
          key={v.name}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
              <Users size={12} className="text-[#C9A84C]" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">{v.name}</p>
              <p className="text-[#4A5568] text-[10px]">{v.time}</p>
            </div>
          </div>
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border capitalize ${statusStyle[v.status]}`}>
            {v.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function TimelineScreen({ step }: { step: number }) {
  const events = [
    { time: '8:00 AM', label: 'Venue setup begins', done: step >= 1 },
    { time: '9:30 AM', label: 'Vendors arrive & check in', done: step >= 2, shifted: step >= 2 },
    { time: '11:00 AM', label: 'Rehearsal walkthrough', done: step >= 2, shifted: step >= 2 },
    { time: '1:00 PM', label: 'Guest doors open', done: step >= 3 },
    { time: '2:00 PM', label: 'Ceremony begins', done: step >= 3 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">Live Runsheet</span>
        {step >= 2 && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full"
          >
            2 items shifted +30 min
          </motion.span>
        )}
      </div>
      <div className="relative">
        <div className="absolute left-[52px] top-0 bottom-0 w-px bg-white/[0.06]" />
        <div className="space-y-1">
          {events.map((ev, i) => (
            <motion.div
              key={ev.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 py-2.5 px-3 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-[10px] text-[#4A5568] w-[42px] shrink-0 text-right font-mono">{ev.time}</span>
              <div className={`w-2 h-2 rounded-full shrink-0 z-10 ${ev.done ? 'bg-[#C9A84C]' : 'bg-white/[0.12]'}`} />
              <span className={`text-sm ${ev.done ? 'text-white' : 'text-[#4A5568]'} ${ev.shifted && step >= 2 ? 'line-through opacity-40' : ''}`}>
                {ev.label}
              </span>
              {ev.shifted && step >= 2 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] text-amber-400 ml-auto shrink-0"
                >
                  +30 min
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      {step >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20"
        >
          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
          <span className="text-emerald-400 text-xs font-medium">All stakeholders notified of updated schedule</span>
        </motion.div>
      )}
    </div>
  );
}

function GuestScreen({ step }: { step: number }) {
  const total = 120;
  const confirmed = step >= 1 ? 94 : 62;
  const dietary = step >= 2 ? 18 : 0;
  const seated = step >= 3;
  const pct = Math.round((confirmed / total) * 100);

  const tables = [
    { id: 'A1', guests: step >= 3 ? 8 : 0, max: 8 },
    { id: 'A2', guests: step >= 3 ? 8 : 0, max: 8 },
    { id: 'B1', guests: step >= 3 ? 7 : 0, max: 8 },
    { id: 'B2', guests: step >= 3 ? 6 : 0, max: 8 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">Guest Dashboard</span>
        <span className="text-[11px] text-[#C9A84C] font-medium">{confirmed}/{total} confirmed</span>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-[10px] text-[#4A5568] mb-1.5">
          <span>RSVP progress</span>
          <span>{pct}%</span>
        </div>
        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] rounded-full"
            initial={{ width: '52%' }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Confirmed', value: confirmed, color: 'text-emerald-400' },
          { label: 'Dietary', value: dietary, color: 'text-amber-400' },
          { label: 'Pending', value: total - confirmed, color: 'text-[#64748B]' },
        ].map(s => (
          <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
            <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-[#4A5568] uppercase tracking-wide mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Seating grid */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-[#4A5568] uppercase tracking-wide">Seating plan</span>
          {seated && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-emerald-400">
              All seats assigned
            </motion.span>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {tables.map(t => (
            <div key={t.id} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-2.5 text-center">
              <p className="text-[11px] font-bold text-white">{t.id}</p>
              <p className="text-[9px] text-[#4A5568] mt-0.5">{t.guests}/{t.max}</p>
              <div className="mt-1.5 flex gap-0.5 flex-wrap justify-center">
                {Array.from({ length: t.max }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i < t.guests ? 'bg-[#C9A84C]' : 'bg-white/[0.08]'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tour data ────────────────────────────────────────────────────────────────

const tours = [
  {
    id: 'vendors',
    label: 'Vendor Coordination',
    accent: '#C9A84C',
    icon: Users,
    steps: [
      {
        title: 'Fragmented across platforms',
        body: 'Vendor status lives in email threads, WhatsApp groups, and sticky notes. Nothing is centralized — and confirmations slip through.',
        screenStep: 0,
      },
      {
        title: 'Add vendors to Evenzs',
        body: 'Import or add vendors in seconds. Each one gets a profile, a role in the timeline, and a status you can track at a glance.',
        screenStep: 1,
      },
      {
        title: 'Send confirmation requests',
        body: 'One click sends a confirmation request. Vendors respond directly — no back-and-forth emails needed.',
        screenStep: 2,
      },
      {
        title: 'Every vendor confirmed',
        body: 'All four vendors confirmed 48 hours before the event. You walk in knowing exactly who, what, and when.',
        screenStep: 3,
      },
    ],
  },
  {
    id: 'timeline',
    label: 'Day-of Timeline',
    accent: '#4A90D9',
    icon: Clock,
    steps: [
      {
        title: 'Static runsheets break under pressure',
        body: 'A single delay ripples into everything else. When you\'re managing a live event, a PDF or spreadsheet can\'t keep up.',
        screenStep: 0,
      },
      {
        title: 'Build your live runsheet',
        body: 'Add your event milestones and assign them to team members or vendors. The runsheet becomes your shared single source of truth.',
        screenStep: 1,
      },
      {
        title: 'Shift one item — everything adjusts',
        body: 'Venue setup ran 30 minutes long. Evenzs detects the dependency and cascades the change to every downstream cue automatically.',
        screenStep: 2,
      },
      {
        title: 'Team notified instantly',
        body: 'Everyone on your team — vendors, coordinators, venue staff — sees the updated schedule the moment it changes. No calls needed.',
        screenStep: 3,
      },
    ],
  },
  {
    id: 'guests',
    label: 'Guest Management',
    accent: '#3DAD7F',
    icon: UserCheck,
    steps: [
      {
        title: 'RSVPs scattered across tools',
        body: 'Guest lists live in spreadsheets, form submissions, and DMs. Dietary restrictions are a separate document. Seating is a nightmare.',
        screenStep: 0,
      },
      {
        title: 'Collect RSVPs in one place',
        body: 'Share your Evenzs event link. Guests RSVP directly, including dietary needs and plus-ones. Confirmations sync live.',
        screenStep: 1,
      },
      {
        title: 'Dietary and accessibility flags surfaced',
        body: 'Special requirements are automatically flagged and routed to the right vendor — catering, venue, or transport.',
        screenStep: 2,
      },
      {
        title: 'Seating assigned automatically',
        body: 'Evenzs suggests seating based on group preferences, dietary needs, and table capacity. Export to PDF or share the live view.',
        screenStep: 3,
      },
    ],
  },
];

const screens = {
  vendors: VendorScreen,
  timeline: TimelineScreen,
  guests: GuestScreen,
};

// ─── Modal ────────────────────────────────────────────────────────────────────

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WalkthroughModal({ open, onClose }: Props) {
  const [tourIdx, setTourIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const tour = tours[tourIdx];
  const step = tour.steps[stepIdx];
  const Screen = screens[tour.id as keyof typeof screens];
  const isLast = stepIdx === tour.steps.length - 1;
  const isLastTour = tourIdx === tours.length - 1;

  useEffect(() => {
    if (!open) {
      setTimeout(() => { setTourIdx(0); setStepIdx(0); }, 400);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') advance();
      if (e.key === 'ArrowLeft') back();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const advance = () => {
    if (!isLast) {
      setDir(1); setStepIdx(s => s + 1);
    } else if (!isLastTour) {
      setDir(1); setTourIdx(t => t + 1); setStepIdx(0);
    } else {
      onClose();
    }
  };

  const back = () => {
    if (stepIdx > 0) {
      setDir(-1); setStepIdx(s => s - 1);
    } else if (tourIdx > 0) {
      setDir(-1); setTourIdx(t => t - 1); setStepIdx(tours[tourIdx - 1].steps.length - 1);
    }
  };

  const canGoBack = stepIdx > 0 || tourIdx > 0;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 24 : -24, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -24 : 24, opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#030712]/80 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#0D1527] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            style={{ maxHeight: '90vh' }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/[0.1] transition-all duration-200"
            >
              <X size={14} strokeWidth={2} />
            </button>

            {/* ── Left: tour selector + step text ── */}
            <div className="lg:w-[42%] flex flex-col bg-[#0A1020] border-r border-white/[0.06] p-7 shrink-0">
              {/* Tour tabs */}
              <div className="flex flex-col gap-2 mb-8">
                {tours.map((t, ti) => {
                  const Icon = t.icon;
                  const active = ti === tourIdx;
                  return (
                    <button
                      key={t.id}
                      onClick={() => { setTourIdx(ti); setStepIdx(0); setDir(ti > tourIdx ? 1 : -1); }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 border ${
                        active
                          ? 'border-white/[0.1] bg-white/[0.04]'
                          : 'border-transparent hover:border-white/[0.06] hover:bg-white/[0.02]'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200"
                        style={{
                          backgroundColor: active ? `${t.accent}15` : 'transparent',
                          borderColor: active ? `${t.accent}30` : 'transparent',
                        }}
                      >
                        <Icon size={15} style={{ color: active ? t.accent : '#4A5568' }} strokeWidth={1.8} />
                      </div>
                      <span className={`text-sm font-medium transition-colors ${active ? 'text-white' : 'text-[#4A5568]'}`}>
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Step text */}
              <div className="flex-1 flex flex-col justify-between">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={`${tourIdx}-${stepIdx}-text`}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <div
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 border"
                      style={{ color: tour.accent, backgroundColor: `${tour.accent}10`, borderColor: `${tour.accent}25` }}
                    >
                      Step {stepIdx + 1} of {tour.steps.length}
                    </div>
                    <h3 className="text-white text-xl font-bold leading-snug tracking-[-0.02em] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-[1.75]">
                      {step.body}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots */}
                <div className="flex items-center gap-1.5 mt-6">
                  {tour.steps.map((_, si) => (
                    <button
                      key={si}
                      onClick={() => { setDir(si > stepIdx ? 1 : -1); setStepIdx(si); }}
                      className="h-1 rounded-full transition-all duration-300"
                      style={{
                        width: si === stepIdx ? 20 : 6,
                        backgroundColor: si === stepIdx ? tour.accent : '#1E2D4A',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: live screen mockup ── */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Fake browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#0A1020] shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="flex-1 mx-4 h-6 bg-white/[0.04] border border-white/[0.06] rounded-md flex items-center px-3">
                  <span className="text-[10px] text-[#4A5568] font-mono">app.evenzs.com / {tour.id}</span>
                </div>
              </div>

              {/* Screen content */}
              <div className="flex-1 overflow-y-auto p-6 min-h-0">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={`${tourIdx}-${stepIdx}-screen`}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <Screen step={step.screenStep} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="px-6 py-4 border-t border-white/[0.06] flex items-center justify-between shrink-0 bg-[#0A1020]">
                <button
                  onClick={back}
                  disabled={!canGoBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/[0.08] text-[#64748B] hover:text-white hover:border-white/[0.16] text-sm font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={13} strokeWidth={2} />
                  Back
                </button>

                <div className="flex items-center gap-2">
                  {/* Overall progress: all steps across all tours */}
                  {tours.map((t, ti) => (
                    <div key={t.id} className="flex items-center gap-1">
                      {t.steps.map((_, si) => {
                        const done = ti < tourIdx || (ti === tourIdx && si < stepIdx);
                        const current = ti === tourIdx && si === stepIdx;
                        return (
                          <div
                            key={si}
                            className="w-1 h-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: current
                                ? t.accent
                                : done
                                ? `${t.accent}50`
                                : '#1E2D4A',
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                <button
                  onClick={advance}
                  className="group inline-flex items-center gap-2 px-5 py-2 rounded-xl text-[#070C1B] font-semibold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${tour.accent}, ${tour.accent}cc)`,
                    boxShadow: `0 4px 20px ${tour.accent}25`,
                  }}
                >
                  {isLast && isLastTour ? 'Done' : isLast ? 'Next use case' : 'Next'}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
