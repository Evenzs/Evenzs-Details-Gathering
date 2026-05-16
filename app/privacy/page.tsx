'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LogoWordmark } from '@/components/brand/LogoWordmark';

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
            <LogoWordmark size="sm" dark showTagline={false} />
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/privacy" className="text-[13px] text-white font-medium transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="text-[13px] text-[#94A3B8] hover:text-white transition-colors duration-300">Terms</Link>
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
            Privacy Policy
          </h1>
          <p className="text-[#64748B] text-sm mb-12">
            Effective Date: May 6, 2026
          </p>

          <div className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold">

            <div className={sectionCls}>
              <h2 className={h2Cls}>1. Introduction</h2>
              <p className={pCls}>
                Scube Innovations LLC, doing business as Evenzs (&ldquo;Evenzs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is committed to protecting the privacy of individuals who use our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our website, mobile applications, and related digital services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className={pCls}>
                By using the Service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with these practices, please do not use the Service.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>2. Information We Collect</h2>
              <p className={pCls}>We collect the following categories of information:</p>

              <p className={pCls}><strong className="text-white">Account Information</strong></p>
              <ul className={ulCls}>
                <li>Name, email address, and phone number</li>
                <li>Company name and professional role</li>
                <li>Account credentials and authentication tokens</li>
              </ul>

              <p className={pCls}><strong className="text-white">Authentication Information</strong></p>
              <ul className={ulCls}>
                <li>Data received from third-party sign-in providers (e.g., Google, Apple) when you choose to authenticate through them</li>
              </ul>

              <p className={pCls}><strong className="text-white">Event and Workflow Data</strong></p>
              <ul className={ulCls}>
                <li>Events, tasks, timelines, vendor information, budgets, notes, and operational data you create or upload within the Service</li>
              </ul>

              <p className={pCls}><strong className="text-white">Device Information</strong></p>
              <ul className={ulCls}>
                <li>Device type, operating system, browser type, unique device identifiers, and mobile network information</li>
              </ul>

              <p className={pCls}><strong className="text-white">Usage Analytics</strong></p>
              <ul className={ulCls}>
                <li>Feature usage, interaction patterns, session duration, and performance data used to improve the Service</li>
              </ul>

              <p className={pCls}><strong className="text-white">Communications and Support Requests</strong></p>
              <ul className={ulCls}>
                <li>Messages, feedback submissions, support inquiries, and survey responses you send to us</li>
              </ul>

              <p className={pCls}><strong className="text-white">Research and Discovery Data</strong></p>
              <ul className={ulCls}>
                <li>Responses to research questions about event operations, challenges, and tools submitted through our feedback forms</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>3. How We Use Your Information</h2>
              <p className={pCls}>We use the information we collect to:</p>
              <ul className={ulCls}>
                <li>Provide, maintain, and improve the Service</li>
                <li>Create and manage your account</li>
                <li>Process and store your event and workflow data</li>
                <li>Provide AI-assisted planning features and operational suggestions</li>
                <li>Conduct customer discovery research and understand the needs of event professionals</li>
                <li>Communicate with you about the Service, including support and updates</li>
                <li>Monitor and analyze usage trends to improve performance and reliability</li>
                <li>Detect, prevent, and address technical issues or security concerns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>4. AI-Assisted Features</h2>
              <p className={pCls}>
                Some features of the Service may use third-party AI service providers to generate planning suggestions, summaries, or operational recommendations. To provide these features, certain data you input may be processed by third-party AI systems.
              </p>
              <p className={pCls}>
                AI-generated outputs may not always be accurate and should be reviewed before relying on them for operational or business decisions. We do not guarantee the accuracy, completeness, or suitability of AI-generated content.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>5. How We Protect Your Information</h2>
              <p className={pCls}>
                We implement reasonable administrative, technical, and physical security measures to protect your personal information. Your data is stored using secure infrastructure with access controls and row-level security policies. Access to user data is restricted to authorized personnel only.
              </p>
              <p className={pCls}>
                While we use commercially reasonable measures to protect your information, no method of electronic storage or transmission over the Internet is completely secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>6. Information Sharing and Disclosure</h2>
              <p className={pCls}>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className={ulCls}>
                <li><strong className="text-white">Service Providers:</strong> We use trusted third-party services (such as cloud hosting, authentication, analytics, and AI providers) that process data on our behalf under appropriate confidentiality and data processing obligations.</li>
                <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</li>
                <li><strong className="text-white">With Your Consent:</strong> We may share information with third parties when you have given us explicit consent to do so.</li>
              </ul>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>7. International Data Transfers</h2>
              <p className={pCls}>
                Information may be processed and stored in countries other than your country of residence, including the United States. By using the Service, you consent to the transfer of your information to facilities in the United States and other jurisdictions where we or our service providers operate.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>8. Data Retention</h2>
              <p className={pCls}>
                We retain your personal information for as long as your account is active or as needed to provide you with the Service. We may also retain information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p className={pCls}>
                Research data may be retained in anonymized or aggregated form for product development purposes.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>9. Account Deletion</h2>
              <p className={pCls}>
                Users may request deletion of their account and associated information through the application settings. If you are unable to access your account, you may request deletion by contacting{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
              <p className={pCls}>
                Upon account deletion, we will remove or anonymize your personal information within a reasonable timeframe, except where retention is required by law or for legitimate business purposes (such as fraud prevention or legal compliance).
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>10. Your Rights</h2>
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
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
                We may need to verify your identity before processing certain requests.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>11. Cookies and Tracking</h2>
              <p className={pCls}>
                Our Service may use essential cookies and similar technologies to ensure proper functionality and maintain session state. We do not currently use advertising cookies or third-party behavioral advertising technologies.
              </p>
              <p className={pCls}>
                We may use analytics tools to understand service performance, feature usage, and reliability. These tools are configured to minimize the collection of personally identifiable information.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>12. Children&apos;s Privacy</h2>
              <p className={pCls}>
                The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us and we will promptly delete it.
              </p>
            </div>

            <div className={sectionCls}>
              <h2 className={h2Cls}>13. Changes to This Policy</h2>
              <p className={pCls}>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically for the latest information on our privacy practices.
              </p>
            </div>

            <div className="mb-0">
              <h2 className={h2Cls}>14. Contact Us</h2>
              <p className={pCls}>
                If you have questions or concerns about this Privacy Policy, please contact us:
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
