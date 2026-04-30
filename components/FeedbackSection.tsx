'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Send } from 'lucide-react';
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
  breakdown_points: string;
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
  breakdown_points: '',
  top_headache: '',
  open_to_conversation: null,
  name: '',
  email: '',
  phone_number: '',
  company_role: '',
};

export default function FeedbackSection() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.event_type || !form.name || !form.email) {
      setError('Please fill in your event type, name, and email.');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      const payload = { ...form, open_to_conversation: form.open_to_conversation === true };
      const { error: dbError } = await supabase.from('feedback_submissions').insert([payload]);
      if (dbError) console.error('Supabase error:', dbError);

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      await fetch(`${supabaseUrl}/functions/v1/send-feedback-email`, {
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
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#4A5568] focus:border-[#C9A84C]/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)] transition-all duration-200 outline-none';

  const textareaCls =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#4A5568] focus:border-[#C9A84C]/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)] transition-all duration-200 outline-none resize-none leading-relaxed';

  const labelCls = 'block text-xs font-semibold text-[#94A3B8] mb-2.5 tracking-wide uppercase';

  return (
    <section id="listening" className="relative py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A84C]/[0.03] rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
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
          <h2 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-5">
            What&apos;s the hardest part
            <br />
            <span className="text-[#64748B] font-normal italic font-[var(--font-playfair)]">
              of running events today?
            </span>
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed max-w-md mx-auto">
            Your real-world experience shapes what Evenzs builds next.
          </p>
        </motion.div>

        <motion.div
          id="feedback"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, delay: 0.15 }}
                className="w-16 h-16 rounded-2xl bg-[#C9A84C]/[0.1] border border-[#C9A84C]/[0.2] flex items-center justify-center mx-auto mb-7"
              >
                <CheckCircle2 size={28} className="text-[#C9A84C]" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-white text-2xl font-bold tracking-[-0.02em] mb-3">
                Thank you.
              </h3>
              <p className="text-[#64748B] text-base leading-relaxed max-w-sm mx-auto">
                Your insights will directly shape what Evenzs builds next. We appreciate your time.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-7">

              {/* Q1 */}
              <div>
                <label className={labelCls}>
                  Event Type <span className="text-[#C9A84C]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.event_type}
                    onChange={set('event_type')}
                    required
                    className={`${inputCls} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="" disabled>Select your event type</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0D1527] text-white">{t}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="11" height="6" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div>
                <label className={labelCls}>What creates the most stress or manual work?</label>
                <textarea rows={3} value={form.stress_points} onChange={set('stress_points')}
                  placeholder="The pain points that consume the most time and energy..."
                  className={textareaCls} />
              </div>

              {/* Q3 */}
              <div>
                <label className={labelCls}>What tools or processes are you using today?</label>
                <textarea rows={3} value={form.current_tools} onChange={set('current_tools')}
                  placeholder="e.g. Google Sheets, WhatsApp, Trello, spreadsheets..."
                  className={textareaCls} />
              </div>

              {/* Q4 */}
              <div>
                <label className={labelCls}>What usually breaks down during live execution?</label>
                <textarea rows={3} value={form.breakdown_points} onChange={set('breakdown_points')}
                  placeholder="What went sideways at your last event?"
                  className={textareaCls} />
              </div>

              {/* Q5 */}
              <div>
                <label className={labelCls}>If you could eliminate one headache, what would it be?</label>
                <textarea rows={3} value={form.top_headache} onChange={set('top_headache')}
                  placeholder="Your single biggest pain point..."
                  className={textareaCls} />
              </div>

              {/* Q6 */}
              <div>
                <label className={labelCls}>Open to a short feedback conversation?</label>
                <div className="flex gap-3">
                  {[
                    { label: 'Yes, happy to talk', value: true },
                    { label: 'No, thanks', value: false },
                  ].map((opt) => (
                    <label
                      key={opt.label}
                      className={`flex items-center gap-2.5 flex-1 px-4 py-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                        form.open_to_conversation === opt.value
                          ? 'border-[#C9A84C]/40 bg-[#C9A84C]/[0.08] text-white'
                          : 'border-white/[0.08] bg-white/[0.02] text-[#64748B] hover:border-white/[0.15]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="open_to_conversation"
                        className="sr-only"
                        checked={form.open_to_conversation === opt.value}
                        onChange={() => setForm((f) => ({ ...f, open_to_conversation: opt.value }))}
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        form.open_to_conversation === opt.value ? 'border-[#C9A84C]' : 'border-[#334155]'
                      }`}>
                        {form.open_to_conversation === opt.value && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] block" />
                        )}
                      </span>
                      <span className="text-sm font-medium">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="border-t border-white/[0.06] pt-8">
                <p className="text-[10px] text-[#4A5568] uppercase tracking-[0.22em] font-semibold mb-6">Your Information</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Name <span className="text-[#C9A84C]">*</span></label>
                    <input type="text" value={form.name} onChange={set('name')} required
                      placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email <span className="text-[#C9A84C]">*</span></label>
                    <input type="email" value={form.email} onChange={set('email')} required
                      placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Phone Number</label>
                    <input type="tel" value={form.phone_number} onChange={set('phone_number')}
                      placeholder="(555) 123-4567" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Company / Role</label>
                    <input type="text" value={form.company_role} onChange={set('company_role')}
                      placeholder="e.g. Senior Event Planner at XYZ Events" className={inputCls} />
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm bg-red-500/[0.08] border border-red-500/20 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] disabled:opacity-40 disabled:cursor-not-allowed text-[#070C1B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#C9A84C]/15 hover:-translate-y-0.5"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={14} strokeWidth={2.5} />
                    Submit My Feedback
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-[#4A5568]">
                Your information is private and used only for research.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
