'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [responseCount, setResponseCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from('feedback_submissions')
      .select('id', { count: 'exact', head: true })
      .then(({ count }) => {
        if (count !== null) setResponseCount(count);
      });
  }, []);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitting(true);
    try {
      await supabase.from('feedback_submissions').insert([{ email, event_type: 'Waitlist' }]);

      const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-waitlist-confirmation`;
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }).catch(() => {});
    } catch {
      // fail silently
    } finally {
      setEmailSubmitting(false);
      setEmailSubmitted(true);
      if (responseCount !== null) setResponseCount(responseCount + 1);
    }
  };

  return (
    <section
      id="why-evenzs"
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* Background event image — dark-treated */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#070C1B]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070C1B]/60 via-[#070C1B]/70 to-[#070C1B]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Social proof counter */}
        {responseCount !== null && responseCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/[0.05] backdrop-blur-sm mb-8"
          >
            <Users size={12} className="text-[#C9A84C]" strokeWidth={2} />
            <span className="text-[#C9A84C] text-xs font-semibold">
              {responseCount} event professionals have shared their experience
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2.5rem] sm:text-[3.8rem] lg:text-[5.2rem] font-bold leading-[1.04] tracking-[-0.035em] text-white mb-6"
        >
          The operating system
          <br />
          <span className="font-[var(--font-playfair)] italic text-gradient-gold">
            for modern events.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#CBD5E1] text-base sm:text-lg leading-[1.8] max-w-xl mx-auto mb-10"
        >
          Help shape the tool that finally fixes event management — share your workflow
          and get early access when we launch.
        </motion.p>

        {/* Single primary CTA: Waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/[0.06] backdrop-blur-sm text-[#C9A84C] text-sm font-medium"
            >
              <Sparkles size={14} strokeWidth={2} />
              You&apos;re on the list — check your inbox.
            </motion.div>
          ) : (
            <form
              onSubmit={handleWaitlist}
              className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full sm:flex-1 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] rounded-full px-5 py-3.5 text-white text-sm placeholder:text-[#64748B] focus:border-[#C9A84C]/40 focus:bg-white/[0.08] focus:outline-none transition-all duration-200"
              />
              <button
                type="submit"
                disabled={emailSubmitting}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] disabled:opacity-50 text-[#070C1B] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#C9A84C]/20 hover:-translate-y-0.5 shrink-0"
              >
                {emailSubmitting ? 'Joining...' : 'Join Waitlist'}
                {!emailSubmitting && (
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#64748B] text-xs tracking-wide mt-4"
        >
          Takes 2-3 minutes &middot; Your feedback shapes what we build
        </motion.p>
      </div>
    </section>
  );
}
