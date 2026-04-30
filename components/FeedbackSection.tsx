'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const eventTypes = [
  'Weddings',
  'Corporate Events',
  'Venue Operations',
  'Community Events',
  'Hospitality',
  'Vendor Services',
  'Cultural Events',
  'Other',
];

interface FormData {
  event_type: string;
  stress_points: string;
  current_tools: string;
  top_headache: string;
  open_to_conversation: boolean | null;
  name: string;
  email: string;
  phone_number: string;
  company_role: string;
}

const emptyForm: FormData = {
  event_type: '',
  stress_points: '',
  current_tools: '',
  top_headache: '',
  open_to_conversation: null,
  name: '',
  email: '',
  phone_number: '',
  company_role: '',
};

// Steps: 1=EventType, 2=StressPoints, 3=CurrentTools, 4=TopHeadache, 5=ContactInfo
const STEPS = [
  { num: 1, label: 'Your Role' },
  { num: 2, label: 'Stress & Work' },
  { num: 3, label: 'Your Tools' },
  { num: 4, label: 'Top Headache' },
  { num: 5, label: 'About You' },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -32 : 32, opacity: 0 }),
};

export default function FeedbackSection() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const goTo = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
    setError('');
  };

  const handleNext = () => {
    if (step === 1 && !form.event_type) {
      setError('Please select your event type to continue.');
      return;
    }
    goTo(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError('Please enter your name and email.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const payload = { ...form, open_to_conversation: form.open_to_conversation === true };
      const { error: dbError } = await supabase.from('feedback_submissions').insert([payload]);
      if (dbError) console.error('Supabase error:', dbError);

      await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-feedback-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#4A5568] focus:border-[#C9A84C]/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)] transition-all duration-200 outline-none';

  const textareaCls =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#4A5568] focus:border-[#C9A84C]/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)] transition-all duration-200 outline-none resize-none leading-relaxed';

  const labelCls = 'block text-xs font-semibold text-[#94A3B8] mb-2 tracking-wide uppercase';

  const totalSteps = STEPS.length;

  return (
    <section id="listening" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A84C]/[0.03] rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-4">
            We&apos;re Listening
          </p>
          <h2 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4">
            What&apos;s the hardest part
            <br />
            <span className="text-[#64748B] font-normal italic font-[var(--font-playfair)]">
              of running events today?
            </span>
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-sm mx-auto">
            Your real-world experience shapes what Evenzs builds next.
          </p>
        </motion.div>

        <motion.div
          id="feedback"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-dark rounded-3xl border-glow-gold overflow-hidden"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-14 px-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, delay: 0.15 }}
                className="w-14 h-14 rounded-2xl bg-[#C9A84C]/[0.1] border border-[#C9A84C]/[0.2] flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 size={26} className="text-[#C9A84C]" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-white text-2xl font-bold tracking-[-0.02em] mb-3">Thank you.</h3>
              <p className="text-[#64748B] text-sm leading-relaxed max-w-xs mx-auto">
                Your insights will directly shape what Evenzs builds next. We appreciate your time.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="flex items-center px-8 pt-7 pb-2 gap-2">
                {STEPS.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-2 flex-1">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all duration-300 ${
                        step > s.num
                          ? 'bg-[#C9A84C] text-[#070C1B]'
                          : step === s.num
                          ? 'bg-[#C9A84C]/[0.15] border border-[#C9A84C]/50 text-[#C9A84C]'
                          : 'bg-white/[0.04] border border-white/[0.08] text-[#4A5568]'
                      }`}
                    >
                      {step > s.num ? (
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                          <path d="M1 3.5L3 5.5L7 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : s.num}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="flex-1 h-px bg-white/[0.06] relative overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-[#C9A84C]/30"
                          animate={{ width: step > s.num ? '100%' : '0%' }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step label + progress */}
              <div className="flex items-center justify-between px-8 pt-2 pb-5">
                <span className="text-[11px] font-semibold text-[#C9A84C] tracking-wide uppercase">
                  {STEPS[step - 1].label}
                </span>
                <span className="text-[11px] text-[#4A5568]">
                  {step} / {totalSteps}
                </span>
              </div>

              <div className="px-8 pb-8">
                <AnimatePresence mode="wait" custom={dir}>
                  {/* Step 1 — Event Type */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <p className="text-white font-semibold text-base mb-1">What kind of events do you run?</p>
                      <p className="text-[#4A5568] text-xs mb-5">Select the option that best describes your work.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {eventTypes.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, event_type: t }))}
                            className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                              form.event_type === t
                                ? 'border-[#C9A84C]/50 bg-[#C9A84C]/[0.08] text-white'
                                : 'border-white/[0.08] bg-white/[0.02] text-[#64748B] hover:border-white/[0.16] hover:text-[#94A3B8]'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      {error && <p className="mt-4 text-red-400 text-xs">{error}</p>}
                    </motion.div>
                  )}

                  {/* Step 2 — Stress & Manual Work */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <p className="text-white font-semibold text-base mb-1">What creates the most stress or manual work?</p>
                      <p className="text-[#4A5568] text-xs mb-5">Think about what takes up the most time and energy when planning or running events.</p>
                      <textarea
                        rows={5}
                        value={form.stress_points}
                        onChange={set('stress_points')}
                        placeholder="e.g. Chasing vendor confirmations the day before, reconciling guest lists across multiple spreadsheets..."
                        className={textareaCls}
                        autoFocus
                      />
                    </motion.div>
                  )}

                  {/* Step 3 — Current Tools */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <p className="text-white font-semibold text-base mb-1">What tools and processes do you rely on today?</p>
                      <p className="text-[#4A5568] text-xs mb-5">Apps, spreadsheets, group chats — anything you actually use.</p>
                      <textarea
                        rows={5}
                        value={form.current_tools}
                        onChange={set('current_tools')}
                        placeholder="e.g. Google Sheets for budgets, WhatsApp for vendor coordination, Trello for task tracking..."
                        className={textareaCls}
                        autoFocus
                      />
                    </motion.div>
                  )}

                  {/* Step 4 — Top Headache */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <p className="text-white font-semibold text-base mb-1">If you could eliminate one headache, what would it be?</p>
                      <p className="text-[#4A5568] text-xs mb-5">Your single biggest pain point — the thing that keeps you up the night before an event.</p>
                      <textarea
                        rows={5}
                        value={form.top_headache}
                        onChange={set('top_headache')}
                        placeholder="e.g. Never knowing if all vendors are confirmed until the last minute..."
                        className={textareaCls}
                        autoFocus
                      />
                    </motion.div>
                  )}

                  {/* Step 5 — Contact Info */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <p className="text-white font-semibold text-base mb-1">Almost done — how can we reach you?</p>
                      <p className="text-[#4A5568] text-xs mb-5">Only name and email are required.</p>

                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Name <span className="text-[#C9A84C] normal-case font-normal">*</span></label>
                            <input type="text" value={form.name} onChange={set('name')} required
                              placeholder="Your full name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Email <span className="text-[#C9A84C] normal-case font-normal">*</span></label>
                            <input type="email" value={form.email} onChange={set('email')} required
                              placeholder="your@email.com" className={inputCls} />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Phone</label>
                            <input type="tel" value={form.phone_number} onChange={set('phone_number')}
                              placeholder="(555) 123-4567" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Company / Role</label>
                            <input type="text" value={form.company_role} onChange={set('company_role')}
                              placeholder="Event Planner at XYZ" className={inputCls} />
                          </div>
                        </div>

                        <div>
                          <label className={labelCls}>Open to a short follow-up call?</label>
                          <div className="flex gap-2">
                            {[
                              { label: 'Yes, happy to talk', value: true },
                              { label: 'No thanks', value: false },
                            ].map((opt) => (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => setForm((f) => ({ ...f, open_to_conversation: opt.value }))}
                                className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                  form.open_to_conversation === opt.value
                                    ? 'border-[#C9A84C]/40 bg-[#C9A84C]/[0.08] text-white'
                                    : 'border-white/[0.08] bg-white/[0.02] text-[#64748B] hover:border-white/[0.16]'
                                }`}
                              >
                                <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors duration-200 ${
                                  form.open_to_conversation === opt.value ? 'border-[#C9A84C]' : 'border-[#334155]'
                                }`}>
                                  {form.open_to_conversation === opt.value && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] block" />
                                  )}
                                </span>
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {error && (
                        <p className="mt-4 text-red-400 text-xs bg-red-500/[0.08] border border-red-500/20 rounded-xl px-4 py-3">
                          {error}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className={`flex items-center mt-6 gap-3 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => goTo(step - 1)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-white/[0.08] text-[#64748B] hover:text-white hover:border-white/[0.16] text-sm font-medium transition-all duration-200"
                    >
                      <ArrowLeft size={13} strokeWidth={2} />
                      Back
                    </button>
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] text-[#070C1B] font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#C9A84C]/15 hover:-translate-y-0.5"
                    >
                      Continue
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] disabled:opacity-40 disabled:cursor-not-allowed text-[#070C1B] font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#C9A84C]/15 hover:-translate-y-0.5"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={13} strokeWidth={2.5} />
                          Submit
                          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                <p className="text-center text-xs text-[#4A5568] mt-4">
                  Your information is private and used only for research.
                </p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
