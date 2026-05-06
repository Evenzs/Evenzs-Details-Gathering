'use client';

import { motion } from 'framer-motion';
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
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/privacy" className="text-[13px] text-[#94A3B8] hover:text-white transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="text-[13px] text-white font-medium transition-colors duration-300">Terms</Link>
            <Link href="/support" className="text-[13px] text-[#94A3B8] hover:text-white transition-colors duration-300">Support</Link>
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
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-5">
            Legal
          </p>
          <h1 className="text-[2rem] sm:text-[2.8rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#64748B] text-sm mb-12">
            Effective Date: May 6, 2026
          </p>

          <div className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold">

            <div className={sectionCls}>
              <h2 className={h2Cls}>1. Agreement to Terms</h2>
              <p className={pCls}>
                By accessing or using the Evenzs Ops website, mobile applications, and related digital services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Service. These Terms constitute a legally binding agreement between you and Scube Innovations LLC, doing business as Evenzs (&ldquo;Evenzs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>2. Description of Service</h2>
              <p className={pCls}>
                Evenzs Ops is an event operations platform that provides tools for event planning, workflow management, vendor coordination, task tracking, budget management, and AI-assisted planning features. The Service is provided through our website, mobile applications, beta features, and related digital services.
              </p>
              <p className={pCls}>
                Certain features may be experimental, beta, or pre-release and may change, be limited, or be discontinued without notice. Beta features are provided &ldquo;as is&rdquo; and may not perform at the level of generally available features.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>3. Accounts and Registration</h2>
              <p className={pCls}>
                To access certain features of the Service, you may be required to create an account. When you create an account, you agree to:
              </p>
              <ul className={ulCls}>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Promptly notify us of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p className={pCls}>
                You may authenticate using third-party providers (such as Google or Apple). Your use of those services is subject to their respective terms and privacy policies.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>4. Acceptable Use</h2>
              <p className={pCls}>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className={ulCls}>
                <li>Use the Service in any way that violates any applicable law or regulation</li>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Attempt to gain unauthorized access to any portion of the Service, its servers, or any connected systems</li>
                <li>Use any automated system, including bots, scrapers, or spiders, to access the Service without our written permission</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to derive source code from the Service</li>
                <li>Abuse, manipulate, or exploit AI-assisted features for purposes unrelated to legitimate event operations</li>
                <li>Use the Service to plan, promote, or facilitate unlawful activities</li>
                <li>Introduce viruses, malware, or other harmful material to the Service</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Resell, sublicense, or redistribute access to the Service without our written consent</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>5. User Content and Data</h2>
              <p className={pCls}>
                You retain ownership of the content and data you create or upload to the Service, including event information, vendor details, tasks, and other operational data (&ldquo;User Content&rdquo;). By using the Service, you grant us a limited license to host, store, process, and display your User Content solely for the purpose of providing and improving the Service.
              </p>
              <p className={pCls}>
                When you submit feedback, suggestions, or ideas through our research forms or support channels, you grant Evenzs a non-exclusive, royalty-free, perpetual right to use, incorporate, and build upon that feedback for product development purposes. Anonymized insights derived from feedback may be retained even if you delete your account.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>6. AI-Assisted Features</h2>
              <p className={pCls}>
                The Service may include AI-assisted features that provide planning suggestions, summaries, recommendations, or other generated content. You acknowledge and agree that:
              </p>
              <ul className={ulCls}>
                <li>AI-generated outputs may contain inaccuracies and should be independently reviewed before making operational or business decisions</li>
                <li>You are solely responsible for verifying AI-generated content before relying on it</li>
                <li>We do not guarantee the accuracy, completeness, or suitability of AI-generated outputs</li>
                <li>AI features may change, be updated, or be discontinued at any time</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>7. Operational Responsibility</h2>
              <p className={pCls}>
                Evenzs Ops assists with event workflows, planning, and coordination, but you remain solely responsible for all operational decisions and event execution. The Service is a planning and coordination tool and does not replace professional judgment, legal advice, safety assessments, or compliance obligations specific to your events.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>8. Intellectual Property</h2>
              <p className={pCls}>
                The Service and its entire contents, features, and functionality — including but not limited to all software, text, graphics, logos, icons, images, workflows, and AI models — are the property of Evenzs or its licensors and are protected by United States and international intellectual property laws.
              </p>
              <p className={pCls}>
                The Evenzs name, Evenzs Ops name, logos, and all related names, logos, product and service names, designs, and slogans are trademarks of Scube Innovations LLC. You may not use these marks without our prior written permission.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>9. Account Suspension and Termination</h2>
              <p className={pCls}>
                We reserve the right to suspend or terminate your account and access to the Service at our discretion, with or without notice, for conduct that we determine:
              </p>
              <ul className={ulCls}>
                <li>Violates these Terms or applicable law</li>
                <li>Is fraudulent, abusive, or harmful to other users</li>
                <li>Involves misuse of the platform or its AI features</li>
                <li>Poses a security risk to the Service or its users</li>
              </ul>
              <p className={pCls}>
                You may terminate your account at any time through the application settings or by contacting{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>10. Disclaimer of Warranties</h2>
              <p className={pCls}>
                THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. EVENZS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className={pCls}>
                We do not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. We make no representations about the accuracy, reliability, or completeness of any content or AI-generated outputs within the Service.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>11. Limitation of Liability</h2>
              <p className={pCls}>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SCUBE INNOVATIONS LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
              </p>
              <p className={pCls}>
                OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>12. Indemnification</h2>
              <p className={pCls}>
                You agree to indemnify and hold harmless Scube Innovations LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way connected with your use of the Service, your User Content, or your violation of these Terms.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>13. Third-Party Services and Platforms</h2>
              <p className={pCls}>
                The Service may contain links to or integrations with third-party websites or services that are not owned or controlled by Evenzs. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party services.
              </p>
              <p className={pCls}>
                If you access the Service through a mobile application distributed via Apple App Store, Google Play, or any other platform, you acknowledge that: (a) these Terms are between you and Evenzs, not the platform provider; (b) the platform provider has no obligation to provide maintenance or support for the Service; and (c) you will comply with the applicable platform terms of service.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>14. Billing and Subscriptions</h2>
              <p className={pCls}>
                Certain features of the Service may require a paid subscription in the future. If paid plans are introduced, pricing, billing terms, and cancellation policies will be communicated to you prior to any charges. Subscription terms will be governed by the applicable subscription agreement presented at the time of purchase.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>15. Governing Law</h2>
              <p className={pCls}>
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States of America, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Williamson County, Texas.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>16. Changes to These Terms</h2>
              <p className={pCls}>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. Material changes will be posted on this page with an updated effective date. Your continued use of the Service after any changes constitutes acceptance of the new Terms. If you do not agree with the modified Terms, you should discontinue use of the Service.
              </p>
            </div>

            <div className="mb-0">
              <h2 className={h2Cls}>17. Contact Us</h2>
              <p className={pCls}>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className={pCls}>
                Scube Innovations LLC<br />
                2425 Great Path<br />
                Leander, Texas 78641<br />
                USA
              </p>
              <p className={pCls}>
                Email:{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
