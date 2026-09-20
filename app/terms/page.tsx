'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
  const sectionCls = 'mb-10';
  const h2Cls = 'text-xl font-bold text-white mb-4 tracking-[-0.02em]';
  const pCls = 'text-[#94A3B8] text-sm leading-[1.85] mb-4';
  const ulCls = 'list-disc list-outside ml-5 text-[#94A3B8] text-sm leading-[1.85] mb-4 space-y-1.5';
  const strongCls = 'text-white font-semibold';

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
            Effective Date: September 19, 2026
          </p>

          <div className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold">

            {/* 1. Acceptance of Terms */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>1. Acceptance of Terms</h2>
              <p className={pCls}>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Evenzs Ops mobile application (the &ldquo;App&rdquo;), the website <code className="text-[#C9A84C]">evenzs.com</code>, and any related services (collectively, the &ldquo;Service&rdquo;), operated by Scube Innovations LLC, a Texas limited liability company doing business as Evenzs.com (&ldquo;Evenzs,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), of 2425 Great Path, Leander, Texas 78641, United States.
              </p>
              <p className={pCls}>
                By creating an account, downloading the App, or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
              </p>
              <p className={pCls}>
                These Terms incorporate by reference the Privacy Policy and any additional terms presented in-app for specific features.
              </p>
            </div>

            {/* 2. What Evenzs-Ops Is — and Is Not */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>2. What Evenzs-Ops Is — and Is Not</h2>
              <p className={pCls}>
                Evenzs Ops is <strong className={strongCls}>operational software</strong> for professional event planners. It is a tool for organizing, coordinating, and executing events.
              </p>
              <p className={pCls}>Evenzs-Ops is <strong className={strongCls}>not</strong>:</p>
              <ul className={ulCls}>
                <li>A booking agent or marketplace.</li>
                <li>A vendor, venue, caterer, photographer, or any other event service provider.</li>
                <li>A party to any agreement between you and any vendor, client, guest, or third party.</li>
                <li>A payment processor (we do not collect or transmit funds).</li>
                <li>A licensed financial, legal, insurance, or compliance advisor.</li>
              </ul>
              <p className={pCls}>
                You are solely responsible for the events you plan and execute. Vendor relationships, client relationships, contracts, payments, and event-day outcomes are between you and the relevant third parties. Evenzs provides software to support your work; Evenzs does not perform the work.
              </p>
            </div>

            {/* 3. Eligibility and Accounts */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>3. Eligibility and Accounts</h2>
              <p className={pCls}>To use the Service, you must:</p>
              <ul className={ulCls}>
                <li>Be at least 18 years of age. The Service is intended for adult event professionals and is not directed to, or offered to, individuals under 18.</li>
                <li>Have the legal capacity to enter into a binding contract.</li>
                <li>Provide accurate account information and keep it current.</li>
                <li>Be responsible for activity that occurs under your credentials.</li>
              </ul>
              <p className={pCls}>
                You authenticate via Sign in with Apple or Google OAuth. You are responsible for safeguarding the underlying account.
              </p>
              <p className={pCls}>
                We may refuse, suspend, or terminate accounts that violate these Terms or that we reasonably believe pose risk to other users, third parties, or the Service.
              </p>
            </div>

            {/* 4. License to Use the App */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>4. License to Use the App</h2>
              <p className={pCls}>
                Subject to your compliance with these Terms, Evenzs grants you a limited, non-exclusive, non-transferable, revocable license to install and use the App on Apple-branded devices that you own or control, solely for your own internal business use as a professional event planner or coordinator.
              </p>
              <p className={pCls}>You may not:</p>
              <ul className={ulCls}>
                <li>Copy, modify, decompile, reverse engineer, or create derivative works of the App except as permitted by applicable law.</li>
                <li>Sell, sublicense, rent, lease, or commercially redistribute the App or any feature of the Service.</li>
                <li>Use the Service to build a competing product or to extract substantial portions of the Service for that purpose.</li>
                <li>Use automated systems (bots, scrapers) to access or use the Service beyond rate-limited and documented API access.</li>
              </ul>
            </div>

            {/* 5. Your Content and Data Ownership */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>5. Your Content and Data Ownership</h2>
              <p className={pCls}>
                You retain ownership of all event operations content you create or upload through the Service, including event records, vendor records, guest information, budget data, tasks, and run-of-show items (collectively, &ldquo;Your Content&rdquo;).
              </p>
              <p className={pCls}>
                You grant Evenzs a worldwide, non-exclusive, royalty-free license to host, store, process, transmit, and display Your Content <strong className={strongCls}>solely to provide and improve the Service to you and to authorized members of your team.</strong>
              </p>
              <p className={pCls}>
                We do not claim ownership of Your Content. We do not use Your Content to train third-party large language models. We do not sell Your Content.
              </p>
              <p className={pCls}>You are responsible for:</p>
              <ul className={ulCls}>
                <li>Having the legal right to upload any personal information about clients, guests, vendors, or team members.</li>
                <li>Providing any required notices and obtaining any required consents from such individuals.</li>
                <li>The accuracy, legality, and quality of Your Content.</li>
              </ul>
              <p className={pCls}>
                You can export Your Content via in-app export tooling or by request to{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
            </div>

            {/* 6. Planner, Vendor, and Client Relationships */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>6. Planner, Vendor, and Client Relationships</h2>
              <p className={pCls}>
                Evenzs supports your operational workflows but is not a party to any relationship you have with vendors, venues, clients, guests, or team members.
              </p>
              <ul className={ulCls}>
                <li>Communication you send through Evenzs is your communication, not ours. You authorize each send.</li>
                <li>AI-assisted drafts, follow-up suggestions, and operational briefs are recommendations only. You decide whether and how to act on them.</li>
                <li>Any agreements, payments, performance obligations, or disputes are between you and the relevant counterparty.</li>
                <li>Evenzs does not guarantee vendor availability, performance, or quality.</li>
              </ul>
            </div>

            {/* 7. Acceptable Use */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>7. Acceptable Use</h2>
              <p className={pCls}>You agree not to use the Service to:</p>
              <ul className={ulCls}>
                <li>Violate any law, regulation, or third-party right.</li>
                <li>Upload, store, or transmit content that is unlawful, defamatory, harassing, fraudulent, or that infringes intellectual property or privacy rights.</li>
                <li>Store payment card numbers, government-issued identification numbers, or other highly sensitive personal data the Service is not designed to handle.</li>
                <li>Send unsolicited bulk messages, spam, or marketing communications through any feature of the Service.</li>
                <li>Interfere with, disrupt, or attempt to gain unauthorized access to the Service, accounts, or related infrastructure.</li>
                <li>Use the Service in any setting where a software defect could foreseeably result in death, personal injury, or severe environmental damage.</li>
              </ul>
              <p className={pCls}>
                We may remove content or restrict accounts that we reasonably believe violate this Section.
              </p>
            </div>

            {/* 8. AI Features */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>8. AI Features</h2>
              <p className={pCls}>
                The Service includes AI-assisted features (operational brief, vendor follow-up drafts, delay-propagation suggestions). AI outputs are generated based on data you and your team have entered into the Service. AI outputs:
              </p>
              <ul className={ulCls}>
                <li>Are provided for informational support only.</li>
                <li>May be incomplete or incorrect.</li>
                <li>Are not professional advice.</li>
                <li>Should not be sent to vendors, clients, or guests without your review and approval.</li>
              </ul>
              <p className={pCls}>
                When you choose an AI action, the relevant prompt context is processed by OpenAI on our behalf. The categories of prompt context are described in the Privacy Policy. Do not submit payment card numbers, government identification numbers, medical information, or other highly sensitive personal information through AI features.
              </p>
              <p className={pCls}>
                You remain responsible for the decisions you make, the messages you send, and the events you execute.
              </p>
            </div>

            {/* 9. Subscriptions and Billing (Future) */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>9. Subscriptions and Billing (Future)</h2>
              <p className={pCls}>
                The current release is provided to TestFlight participants and early users without charge. Future paid tiers may be introduced. Pricing, billing terms, refund eligibility, and auto-renewal practices applicable to paid tiers will be presented at the point of purchase and will be governed by the Apple App Store rules in addition to these Terms.
              </p>
            </div>

            {/* 10. Service Availability */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>10. Service Availability</h2>
              <p className={pCls}>
                We aim for high availability but do not guarantee uninterrupted operation. The Service may be temporarily unavailable due to maintenance, upgrades, third-party outages (including Apple, Supabase, Railway, Sentry, PostHog, Google), or events outside our reasonable control. We will not be liable for any unavailability that is not within our reasonable control.
              </p>
              <p className={pCls}>
                We may modify, suspend, or discontinue features or the Service in whole or in part with reasonable notice when practicable.
              </p>
            </div>

            {/* 11. Termination */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>11. Termination</h2>
              <p className={pCls}>
                You may stop using the Service and delete your account at any time through in-app Settings or by emailing{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>. After the deletion grace period described in the Privacy Policy, Your Content will be irretrievably deleted.
              </p>
              <p className={pCls}>
                We may suspend or terminate your account if you materially breach these Terms, if continued provision of the Service to you would expose Evenzs or others to legal or operational risk, or if required by law.
              </p>
              <p className={pCls}>
                Sections that by their nature should survive termination (including ownership, disclaimers, limitations of liability, indemnification, governing law, and dispute resolution) will survive.
              </p>
            </div>

            {/* 12. Disclaimers */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>12. Disclaimers</h2>
              <p className={pCls}>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE FULLEST EXTENT PERMITTED BY LAW, EVENZS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
              </p>
              <p className={pCls}>
                EVENZS DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR THAT ANY DEFECT WILL BE CORRECTED. EVENZS DOES NOT WARRANT THE ACCURACY OR RELIABILITY OF AI-GENERATED OUTPUTS.
              </p>
              <p className={pCls}>
                Some jurisdictions do not allow the disclaimer of certain warranties; in such jurisdictions, the disclaimers above apply to the maximum extent permitted.
              </p>
            </div>

            {/* 13. Limitation of Liability */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>13. Limitation of Liability</h2>
              <p className={pCls}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EVENZS AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST DATA, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, STATUTE, OR ANY OTHER LEGAL THEORY, EVEN IF EVENZS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className={pCls}>
                EVENZS&apos; TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO EVENZS FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (USD $100).
              </p>
              <p className={pCls}>
                Some jurisdictions do not allow the limitation of certain damages; in those jurisdictions, liability is limited to the maximum extent permitted by law.
              </p>
            </div>

            {/* 14. Indemnification */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>14. Indemnification</h2>
              <p className={pCls}>
                You agree to defend, indemnify, and hold harmless Evenzs and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way connected with your access to or use of the Service, Your Content, your violation of these Terms, or your violation of any law or third-party right.
              </p>
            </div>

            {/* 15. Dispute Resolution */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>15. Dispute Resolution</h2>
              <p className={pCls}>
                The parties will first attempt to resolve any dispute informally by contacting{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
              <p className={pCls}>
                If unresolved within thirty (30) days, either party may bring a claim in a court of competent jurisdiction. Nothing in these Terms prevents either party from seeking injunctive relief to protect intellectual property or confidential information.
              </p>
            </div>

            {/* 16. Governing Law */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>16. Governing Law</h2>
              <p className={pCls}>
                These Terms are governed by the laws of the State of Texas, United States, excluding its conflict-of-laws rules. To the extent a dispute may be brought in court, the parties consent to the jurisdiction of courts serving Leander, Texas, subject to applicable law.
              </p>
            </div>

            {/* 17. Apple-Specific Terms (App Store) */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>17. Apple-Specific Terms (App Store)</h2>
              <p className={pCls}>
                This Section 17 applies to the App as obtained from the Apple App Store and constitutes the minimum terms required by Apple Inc. (&ldquo;<strong className={strongCls}>Apple</strong>&rdquo;). In the event of a conflict between this Section 17 and any other provision of these Terms, this Section 17 prevails as regards the subject matter addressed in it.
              </p>

              <p className={pCls}><strong className={strongCls}>17.1 Acknowledgement.</strong> These Terms are concluded between you and Evenzs only, and not with Apple. Evenzs, and not Apple, is solely responsible for the App and its content. To the extent these Terms provide usage rules for the App that are less restrictive than, or otherwise conflict with, the Usage Rules set out in the App Store Terms of Service, the more restrictive term applies.</p>

              <p className={pCls}><strong className={strongCls}>17.2 Scope of licence.</strong> The licence granted to you under Section 4 is a non-transferable licence to use the App on any Apple-branded product that you own or control, as permitted by the Usage Rules set out in the App Store Terms of Service, save that the App may be accessed and used by other accounts associated with you via Family Sharing or volume purchasing where Evenzs has enabled that functionality.</p>

              <p className={pCls}><strong className={strongCls}>17.3 Maintenance and support.</strong> Evenzs is solely responsible for the provision of any maintenance and support services in respect of the App, as specified in these Terms or as required under applicable law. Apple has no obligation whatsoever to furnish any maintenance or support services in respect of the App.</p>

              <p className={pCls}><strong className={strongCls}>17.4 Warranty.</strong> Evenzs is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed under Section 12. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price of the App to you, if any. To the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever in respect of the App, and any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty are the sole responsibility of Evenzs.</p>

              <p className={pCls}><strong className={strongCls}>17.5 Product claims.</strong> Evenzs, and not Apple, is responsible for addressing any claim by you or any third party relating to the App or your possession or use of the App, including (a) product liability claims; (b) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer protection, privacy, or similar legislation, including in connection with the App&apos;s use of any framework for the processing of data. Nothing in these Terms limits Evenzs&apos;s liability to you beyond what is permitted by applicable law.</p>

              <p className={pCls}><strong className={strongCls}>17.6 Intellectual property claims.</strong> In the event of any third-party claim that the App or your possession and use of the App infringes that third party&apos;s intellectual property rights, Evenzs, and not Apple, is solely responsible for the investigation, defence, settlement, and discharge of that claim.</p>

              <p className={pCls}><strong className={strongCls}>17.7 Legal compliance.</strong> You represent and warrant that (a) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &ldquo;terrorist supporting&rdquo; country; and (b) you are not listed on any U.S. Government list of prohibited or restricted parties.</p>

              <p className={pCls}><strong className={strongCls}>17.8 Third-party terms.</strong> You must comply with the terms of any applicable third-party agreement when using the App.</p>

              <p className={pCls}><strong className={strongCls}>17.9 Third-party beneficiary.</strong> Apple and Apple&apos;s subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple has the right, and is deemed to have accepted the right, to enforce these Terms against you as a third-party beneficiary of these Terms.</p>

              <p className={pCls}><strong className={strongCls}>17.10 Developer contact.</strong> Questions, complaints, or claims relating to the App should be directed to Scube Innovations LLC d/b/a Evenzs, 2425 Great Path, Leander, Texas 78641, United States,{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
              </p>
            </div>

            {/* 18. Changes to These Terms */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>18. Changes to These Terms</h2>
              <p className={pCls}>
                We may modify these Terms from time to time. Material changes will be communicated by in-app notice or email, with a reasonable advance notice period. Continued use of the Service after changes take effect constitutes acceptance.
              </p>
            </div>

            {/* 19. Miscellaneous */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>19. Miscellaneous</h2>
              <ul className={ulCls}>
                <li><strong className={strongCls}>Entire agreement.</strong> These Terms, together with the Privacy Policy, are the entire agreement between you and Evenzs regarding the Service.</li>
                <li><strong className={strongCls}>Severability.</strong> If any provision is held unenforceable, the remaining provisions remain in full force and effect.</li>
                <li><strong className={strongCls}>No waiver.</strong> Failure to enforce any provision is not a waiver of the right to enforce it later.</li>
                <li><strong className={strongCls}>Assignment.</strong> You may not assign these Terms without our consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong className={strongCls}>Notices.</strong> Notices to Evenzs must be sent to{' '}
                  <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>.
                </li>
              </ul>
            </div>

            {/* 20. Contact */}
            <div className="mb-0">
              <h2 className={h2Cls}>20. Contact</h2>
              <p className={pCls}>
                Legal inquiries, support, and privacy requests:{' '}
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>
              </p>
              <p className={pCls}>
                Scube Innovations LLC d/b/a Evenzs.com<br />
                Mailing address: 2425 Great Path, Leander, Texas 78641, United States
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
