'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
  const sectionCls = 'mb-10';
  const h2Cls = 'text-xl font-bold text-white mb-4 tracking-[-0.02em]';
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#94A3B8] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
            Legal
          </p>
          <h1 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#64748B] text-sm mb-12">
            Last updated: April 29, 2026
          </p>

          <div className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold">

            <div className={sectionCls}>
              <h2 className={h2Cls}>1. Introduction</h2>
              <p className={pCls}>
                Evenzs.com (&ldquo;Evenzs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of individuals who visit our website and participate in our customer discovery research. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit feedback through our discovery portal.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>2. Information We Collect</h2>
              <p className={pCls}>We collect information that you voluntarily provide to us when you fill out our feedback form, including:</p>
              <ul className={ulCls}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and role</li>
                <li>Event type and professional context</li>
                <li>Responses to our research questions about event operations, challenges, and tools</li>
                <li>Whether you are open to a follow-up conversation</li>
              </ul>
              <p className={pCls}>
                We may also automatically collect certain technical information when you visit our website, such as your browser type, operating system, IP address, and browsing behavior. This data is collected through standard web technologies and is used solely for website performance and analytics.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>3. How We Use Your Information</h2>
              <p className={pCls}>We use the information we collect for the following purposes:</p>
              <ul className={ulCls}>
                <li>To conduct customer discovery research and understand the needs of event professionals</li>
                <li>To inform the design and development of our future products and services</li>
                <li>To contact you for follow-up conversations, only if you have opted in</li>
                <li>To send you relevant updates about Evenzs, only with your consent</li>
                <li>To improve and optimize our website experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>4. How We Protect Your Information</h2>
              <p className={pCls}>
                We implement industry-standard security measures to protect your personal information. Your data is stored securely using encrypted databases with row-level security policies. Access to submitted feedback is restricted to authorized members of the Evenzs team only.
              </p>
              <p className={pCls}>
                While we strive to use commercially acceptable means to protect your information, no method of electronic storage or transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>5. Information Sharing and Disclosure</h2>
              <p className={pCls}>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className={ulCls}>
                <li><strong className="text-white">Service Providers:</strong> We use trusted third-party services (such as database hosting and email delivery) that process data on our behalf under strict confidentiality agreements.</li>
                <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>6. Data Retention</h2>
              <p className={pCls}>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Research data may be retained in anonymized or aggregated form indefinitely for product development purposes.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>7. Your Rights</h2>
              <p className={pCls}>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className={ulCls}>
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to data portability</li>
                <li>The right to object to or restrict processing of your data</li>
              </ul>
              <p className={pCls}>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">
                  contact@evenzs.com
                </a>.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>8. Cookies and Tracking</h2>
              <p className={pCls}>
                Our website may use essential cookies to ensure proper functionality. We do not use advertising cookies or third-party tracking pixels. Any analytics we employ are privacy-respecting and do not create individual user profiles.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>9. Children&apos;s Privacy</h2>
              <p className={pCls}>
                Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us and we will promptly delete it.
              </p>
            </div>

            <div className="mb-0">
              <h2 className={h2Cls}>10. Changes to This Policy</h2>
              <p className={pCls}>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically for the latest information on our privacy practices.
              </p>
              <p className={pCls}>
                If you have questions or concerns about this Privacy Policy, please contact us at{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">
                  contact@evenzs.com
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
