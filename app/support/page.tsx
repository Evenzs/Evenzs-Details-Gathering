'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowLeft, User, Trash2, Bug, Shield, CreditCard, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SupportPage() {
  const cardCls = 'rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8';
  const h2Cls = 'text-lg sm:text-xl font-bold text-white mb-3 tracking-[-0.02em]';
  const pCls = 'text-[#94A3B8] text-sm leading-[1.85] mb-4';
  const ulCls = 'list-disc list-outside ml-5 text-[#94A3B8] text-sm leading-[1.85] mb-4 space-y-1.5';

  return (
    <main className="bg-[#070C1B] min-h-screen">
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070C1B]/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/Logo_(1).png"
              alt="Evenzs"
              width={200}
              height={56}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/privacy" className="text-[13px] text-[#94A3B8] hover:text-white transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="text-[13px] text-[#94A3B8] hover:text-white transition-colors duration-300">Terms</Link>
            <Link href="/support" className="text-[13px] text-white font-medium transition-colors duration-300">Support</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Hero */}
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
              Support
            </p>
            <h1 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-5">
              Need help with Evenzs Ops?
            </h1>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We&apos;re here to help with account access, event workflows, billing questions, privacy requests, and technical support.
            </p>
            <a
              href="mailto:contact@evenzs.com"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#070C1B] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
            >
              <Mail size={16} />
              Email Support
            </a>
          </div>

          {/* Sections */}
          <div className="space-y-6">

            {/* Contact Support */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cardCls}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <Mail size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Contact Support</h2>
              </div>
              <p className={pCls}>
                For general support inquiries, reach us at{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
              <p className={pCls}>
                We typically respond within 1&ndash;2 business days.
              </p>
              <p className={pCls + ' !mb-0 text-[#64748B] italic'}>
                Please include your account email, device type, and a brief description of the issue.
              </p>
            </motion.section>

            {/* Account Help */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={cardCls}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <User size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Account Help</h2>
              </div>
              <p className={pCls}>If you&apos;re experiencing issues with your account, we can help with:</p>
              <ul className={ulCls}>
                <li>Login issues or locked accounts</li>
                <li>Password reset</li>
                <li>Google sign-in troubleshooting</li>
                <li>Apple sign-in (when available)</li>
                <li>Onboarding or setup issues</li>
              </ul>
              <p className={pCls + ' !mb-0'}>
                Contact{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>{' '}
                with the subject line &ldquo;Account Help&rdquo; and a description of the issue.
              </p>
            </motion.section>

            {/* Account Deletion */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cardCls}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <Trash2 size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Account Deletion</h2>
              </div>
              <p className={pCls}>
                Evenzs Ops provides in-app account deletion through the Settings screen.
              </p>
              <p className={pCls}>
                If you are unable to access your account, contact{' '}
                <a href="mailto:contact@evenzs.com?subject=Account%20Deletion%20Request" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>{' '}
                with the subject line &ldquo;Account Deletion Request.&rdquo;
              </p>
              <p className={pCls + ' !mb-0 text-[#64748B]'}>
                Please note: account deletion may permanently remove your account data. We may need to verify your identity before processing the request. Do not include sensitive information (passwords, payment details) in your email.
              </p>
            </motion.section>

            {/* Bug Reports */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={cardCls}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <Bug size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Bug Reports</h2>
              </div>
              <p className={pCls}>
                Found something that doesn&apos;t seem right? Help us improve by reporting it to{' '}
                <a href="mailto:contact@evenzs.com?subject=Bug%20Report" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>{' '}
                with the subject line &ldquo;Bug Report.&rdquo;
              </p>
              <p className={pCls}>Please include:</p>
              <ul className={ulCls + ' !mb-0'}>
                <li>What happened and what you expected to happen</li>
                <li>Device model (e.g., iPhone 15, Pixel 8)</li>
                <li>Operating system version (e.g., iOS 18.1, Android 15)</li>
                <li>A screenshot, if available</li>
                <li>Approximate time the issue occurred</li>
              </ul>
            </motion.section>

            {/* Privacy & Legal */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={cardCls}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <Shield size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Privacy & Legal</h2>
              </div>
              <p className={pCls}>
                We take privacy seriously and use reasonable safeguards to protect your information.
              </p>
              <p className={pCls}>
                For privacy-related questions, data access requests, or legal concerns, contact{' '}
                <a href="mailto:contact@evenzs.com?subject=Privacy%20Request" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
                We may need to verify your identity before processing certain requests.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-white/[0.08] text-sm text-[#94A3B8] hover:text-white hover:border-white/[0.15] transition-all duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-white/[0.08] text-sm text-[#94A3B8] hover:text-white hover:border-white/[0.15] transition-all duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.section>

            {/* Billing & Subscriptions */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className={cardCls}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <CreditCard size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Billing & Subscriptions</h2>
              </div>
              <p className={pCls + ' !mb-0'}>
                Billing and subscription support will be available when paid plans are launched. For billing-related questions in the meantime, reach out to{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
            </motion.section>

            {/* Emergency Disclaimer */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cardCls + ' border-[#C9A84C]/[0.12]'}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/[0.15] flex items-center justify-center">
                  <AlertTriangle size={16} className="text-[#C9A84C]" />
                </div>
                <h2 className={h2Cls + ' !mb-0'}>Important Notice</h2>
              </div>
              <p className={pCls + ' !mb-0'}>
                Evenzs Ops is not an emergency service. For urgent safety, medical, legal, or venue emergencies, contact the appropriate local authorities or service providers directly.
              </p>
            </motion.section>

          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#4A5568]">
              &copy; {new Date().getFullYear()} Scube Innovations LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-[#64748B]">Evenzs Ops</span>
              <Link href="/privacy" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">Privacy</Link>
              <Link href="/terms" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">Terms</Link>
              <Link href="/support" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
