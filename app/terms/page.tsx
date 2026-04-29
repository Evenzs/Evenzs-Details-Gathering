'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-[#64748B] text-sm mb-12">
            Last updated: April 29, 2026
          </p>

          <div className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold">

            <div className={sectionCls}>
              <h2 className={h2Cls}>1. Agreement to Terms</h2>
              <p className={pCls}>
                By accessing or using the Evenzs.com website (&ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Site. These Terms constitute a legally binding agreement between you and Evenzs.com (&ldquo;Evenzs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>2. Description of Service</h2>
              <p className={pCls}>
                Evenzs is currently in a customer discovery phase. Our Site provides information about our mission and offers a feedback form through which event professionals can share their experiences, challenges, and insights related to event operations. We are not currently offering a commercial product or service for sale.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>3. Use of the Site</h2>
              <p className={pCls}>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className={ulCls}>
                <li>Use the Site in any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>Submit false, misleading, or fraudulent information through any form on the Site</li>
                <li>Attempt to gain unauthorized access to any portion of the Site, its servers, or any systems connected to the Site</li>
                <li>Use any automated system, including bots, scrapers, or spiders, to access the Site for any purpose</li>
                <li>Introduce any viruses, trojan horses, worms, or other harmful material to the Site</li>
                <li>Interfere with or disrupt the integrity or performance of the Site</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>4. Feedback Submissions</h2>
              <p className={pCls}>
                When you submit feedback through our discovery portal, you grant Evenzs a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, and incorporate your feedback into our products, services, and research. This includes the right to use anonymized and aggregated versions of your feedback for product development, marketing, and research purposes.
              </p>
              <p className={pCls}>
                You retain ownership of your personal information (name, email, phone number) and can request its deletion at any time by contacting us. However, anonymized insights derived from your feedback may be retained.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>5. Intellectual Property</h2>
              <p className={pCls}>
                The Site and its entire contents, features, and functionality — including but not limited to all text, graphics, logos, icons, images, and software — are the property of Evenzs or its licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className={pCls}>
                The Evenzs name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Evenzs. You may not use these marks without our prior written permission.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>6. Disclaimer of Warranties</h2>
              <p className={pCls}>
                THE SITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. EVENZS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className={pCls}>
                We do not warrant that the Site will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. We make no representations about the accuracy, reliability, or completeness of any content on the Site.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>7. Limitation of Liability</h2>
              <p className={pCls}>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EVENZS, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>8. Indemnification</h2>
              <p className={pCls}>
                You agree to indemnify and hold harmless Evenzs and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way connected with your use of the Site or your violation of these Terms.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>9. Third-Party Links</h2>
              <p className={pCls}>
                The Site may contain links to third-party websites or services that are not owned or controlled by Evenzs. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. Your use of third-party websites is at your own risk.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>10. Governing Law</h2>
              <p className={pCls}>
                These Terms shall be governed by and construed in accordance with the laws of the United States of America and the State in which Evenzs is incorporated, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the competent courts of that jurisdiction.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>11. Changes to These Terms</h2>
              <p className={pCls}>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. Material changes will be posted on this page with an updated effective date. Your continued use of the Site after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-0">
              <h2 className={h2Cls}>12. Contact Us</h2>
              <p className={pCls}>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:siva.durbhakula@evenzs.com" className="text-[#C9A84C] hover:underline">
                  siva.durbhakula@evenzs.com
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
