'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
  const sectionCls = 'mb-10';
  const h2Cls = 'text-xl font-bold text-white mb-4 tracking-[-0.02em]';
  const h3Cls = 'text-base font-semibold text-white mb-3 tracking-[-0.01em]';
  const pCls = 'text-[#94A3B8] text-sm leading-[1.85] mb-4';
  const ulCls = 'list-disc list-outside ml-5 text-[#94A3B8] text-sm leading-[1.85] mb-4 space-y-1.5';
  const olCls = 'list-decimal list-outside ml-5 text-[#94A3B8] text-sm leading-[1.85] mb-4 space-y-1.5';
  const tableWrap = 'overflow-x-auto mb-4 -mx-1';
  const tableCls = 'w-full text-sm border border-white/[0.08] rounded-lg';
  const thCls = 'text-left text-[#C9A84C] font-semibold text-xs uppercase tracking-wider px-4 py-3 border-b border-white/[0.08] whitespace-nowrap';
  const tdCls = 'text-[#94A3B8] px-4 py-3 border-b border-white/[0.06] align-top leading-[1.7]';
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
            Effective Date: September 19, 2026
          </p>

          <div className="card-dark rounded-3xl p-8 sm:p-10 border-glow-gold">

            {/* 1. Introduction and Scope */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>1. Introduction and Scope</h2>
              <p className={pCls}>
                1.1. Scube Innovations LLC, a limited liability company doing business as Evenzs.com (&ldquo;<strong className={strongCls}>Evenzs</strong>,&rdquo; &ldquo;<strong className={strongCls}>we</strong>,&rdquo; &ldquo;<strong className={strongCls}>us</strong>,&rdquo; or &ldquo;<strong className={strongCls}>our</strong>,&rdquo;) provides the Evenzs Ops mobile application (the &ldquo;<strong className={strongCls}>App</strong>&rdquo;) and the website located at evenzs.com (the &ldquo;<strong className={strongCls}>Site</strong>,&rdquo; and together with the App and all related services, the &ldquo;<strong className={strongCls}>Services</strong>&rdquo;).
              </p>
              <p className={pCls}>
                1.2. This Privacy Policy (the &ldquo;<strong className={strongCls}>Policy</strong>&rdquo;) describes the categories of Personal Information we Process in connection with the Services, the purposes and legal bases for such Processing, the categories of recipients to whom such Personal Information is Disclosed, the retention periods applied, and the rights available to Data Subjects and Consumers under applicable Privacy Laws.
              </p>
              <p className={pCls}>
                1.3. This Policy applies to the App and the Site. Where a provision applies to only one of them, that provision so states. This Policy does not apply to the practices of third parties that we do not own or control, including any third-party service a user elects to access through a link in the Services.
              </p>
              <p className={pCls}>
                1.4. Evenzs acts as a Controller (or &ldquo;business,&rdquo; as that term is defined under applicable United States state Privacy Laws) with respect to the Personal Information described in Section 3, except where Section 3.4 provides otherwise.
              </p>
              <p className={pCls}>
                1.5. The Services are intended for business and professional use by event operators. By accessing or using the Services, you acknowledge that you have read this Policy.
              </p>
            </div>

            {/* 2. Definitions */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>2. Definitions</h2>
              <p className={pCls}>
                2.1. &ldquo;<strong className={strongCls}>Consumer</strong>&rdquo; means a natural person to whom rights are afforded under an applicable United States state Privacy Law.
              </p>
              <p className={pCls}>
                2.2. &ldquo;<strong className={strongCls}>Controller</strong>&rdquo; means the entity that determines the purposes and means of Processing Personal Information.
              </p>
              <p className={pCls}>
                2.3. &ldquo;<strong className={strongCls}>Data Subject</strong>&rdquo; means an identified or identifiable natural person.
              </p>
              <p className={pCls}>
                2.4. &ldquo;<strong className={strongCls}>Disclose</strong>&rdquo; means to make Personal Information available to a third party by any means.
              </p>
              <p className={pCls}>
                2.5. &ldquo;<strong className={strongCls}>Event Content</strong>&rdquo; means information a user enters into the App in the course of planning or operating an event, as further described in Section 3.2(b).
              </p>
              <p className={pCls}>
                2.6. &ldquo;<strong className={strongCls}>Personal Information</strong>&rdquo; means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Data Subject or household, and includes &ldquo;personal data&rdquo; as defined under the GDPR.
              </p>
              <p className={pCls}>
                2.7. &ldquo;<strong className={strongCls}>Privacy Laws</strong>&rdquo; means all applicable laws relating to privacy, data protection, and the Processing of Personal Information, including without limitation the California Consumer Privacy Act of 2018 as amended by the California Privacy Rights Act (collectively, the &ldquo;<strong className={strongCls}>CCPA</strong>&rdquo;), the Texas Data Privacy and Security Act (the &ldquo;<strong className={strongCls}>TDPSA</strong>&rdquo;), the Virginia Consumer Data Protection Act, the Colorado Privacy Act, the Connecticut Data Privacy Act, the Utah Consumer Privacy Act, Regulation (EU) 2016/679 (the &ldquo;<strong className={strongCls}>GDPR</strong>&rdquo;), and the UK General Data Protection Regulation.
              </p>
              <p className={pCls}>
                2.8. &ldquo;<strong className={strongCls}>Process</strong>&rdquo; or &ldquo;<strong className={strongCls}>Processing</strong>&rdquo; means any operation performed on Personal Information, whether or not by automated means, including collection, recording, organization, storage, use, Disclosure, transmission, erasure, or destruction.
              </p>
              <p className={pCls}>
                2.9. &ldquo;<strong className={strongCls}>Processor</strong>&rdquo; means an entity that Processes Personal Information on behalf of and under the documented instructions of a Controller, and includes a &ldquo;service provider&rdquo; as defined under the CCPA.
              </p>
              <p className={pCls}>
                2.10. &ldquo;<strong className={strongCls}>Sensitive Personal Information</strong>&rdquo; has the meaning given to that term, or to the term &ldquo;sensitive data,&rdquo; under the applicable Privacy Law.
              </p>
            </div>

            {/* 3. Categories of Personal Information Processed; Sources */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>3. Categories of Personal Information Processed; Sources</h2>
              <p className={pCls}>
                3.1. <strong className={strongCls}>Sources.</strong> We Process Personal Information obtained (a) directly from you, (b) automatically from your device or browser through your use of the Services, (c) from our Processors acting on our behalf, including our authentication provider, and (d) from the identity provider you elect to authenticate with, being Apple Inc. or Google LLC, which releases to us the attributes described at Section 3.2(a). We do not acquire Personal Information from data brokers.
              </p>
              <p className={pCls}>
                3.2. <strong className={strongCls}>Categories.</strong> The following table sets out the categories of Personal Information Processed, mapped to the statutory categories enumerated at Cal. Civ. Code &sect;&nbsp;1798.140(v)(1).
              </p>
              <div className={tableWrap}>
                <table className={tableCls}>
                  <thead>
                    <tr>
                      <th className={thCls}>Ref.</th>
                      <th className={thCls}>Statutory category</th>
                      <th className={thCls}>Personal Information Processed</th>
                      <th className={thCls}>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdCls}>(a)</td>
                      <td className={tdCls}>Identifiers; customer records</td>
                      <td className={tdCls}>Name; email address; authentication credentials and authentication identifiers, including the name, email address, and account identifier released to us by Apple or Google where federated sign-in is elected; optional telephone number, company, role, city, website, social profile handle, biography, and profile photograph</td>
                      <td className={tdCls}>Directly from you</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(b)</td>
                      <td className={tdCls}>Customer records; commercial information; other information you provide</td>
                      <td className={tdCls}>Event Content, comprising venue and location details; team, vendor, and guest contact information; dietary and accessibility notes; vendor engagement details; budgets; tasks; timelines; run-of-show cues; incident records; and conversation text submitted to AI features</td>
                      <td className={tdCls}>Directly from you</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(c)</td>
                      <td className={tdCls}>Internet or other electronic network activity information</td>
                      <td className={tdCls}>Feature-use events, screen views, session and interaction telemetry, error reports, and performance diagnostics</td>
                      <td className={tdCls}>Automatically</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(d)</td>
                      <td className={tdCls}>Identifiers; device information</td>
                      <td className={tdCls}>Device model, operating system and version, and a persistent pseudonymous installation identifier used for analytics and diagnostics. We do not Process an advertising identifier and do not integrate the Identifier for Advertisers (IDFA)</td>
                      <td className={tdCls}>Automatically</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(e)</td>
                      <td className={tdCls}>Identifiers</td>
                      <td className={tdCls}>Device push notification tokens and the content of event-related notifications, Processed only where notifications are enabled</td>
                      <td className={tdCls}>Directly from you; automatically</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(f)</td>
                      <td className={tdCls}>Audio information</td>
                      <td className={tdCls}>Dictation audio, Processed transiently as described in Section 6.2. Audio recordings are not retained by Evenzs</td>
                      <td className={tdCls}>Directly from you</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(g)</td>
                      <td className={tdCls}>Visual information</td>
                      <td className={tdCls}>Profile photographs you elect to upload</td>
                      <td className={tdCls}>Directly from you</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(h)</td>
                      <td className={tdCls}>Professional or employment-related information</td>
                      <td className={tdCls}>Role, company, and the categories of events you operate</td>
                      <td className={tdCls}>Directly from you</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(i)</td>
                      <td className={tdCls}>Internet or other electronic network activity information; geolocation (coarse)</td>
                      <td className={tdCls}>Browser and device type, and an approximate location inferred from IP address, in respect of the Site only</td>
                      <td className={tdCls}>Automatically</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(j)</td>
                      <td className={tdCls}>Customer records</td>
                      <td className={tdCls}>The content of support correspondence you send to us</td>
                      <td className={tdCls}>Directly from you</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>(k)</td>
                      <td className={tdCls}>Inferences</td>
                      <td className={tdCls}>None. We do not create profiles or inferences about Data Subjects</td>
                      <td className={tdCls}>&mdash;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={pCls}>
                3.3. <strong className={strongCls}>Sensitive Personal Information.</strong> We do not solicit Sensitive Personal Information. Event Content entered at a user&apos;s discretion may contain information that constitutes Sensitive Personal Information under an applicable Privacy Law, including dietary restrictions or accessibility requirements relating to event attendees. Such information is Processed solely to provide the Services and is not used to infer characteristics about any Data Subject. Users are instructed not to enter payment card numbers, government-issued identifiers, financial account information, or health information beyond what is operationally necessary. We do not Process Sensitive Personal Information for the purpose of inferring characteristics, and accordingly the limitation right under Cal. Civ. Code &sect;&nbsp;1798.121 is not engaged.
              </p>
              <p className={pCls}>
                3.4. <strong className={strongCls}>Event Content relating to third parties.</strong> Where a user enters Personal Information relating to a guest, teammate, or vendor, the user is responsible for having an appropriate legal basis for doing so and for providing any notice required of that user under applicable Privacy Laws. With respect to such Personal Information, Evenzs Processes on the user&apos;s behalf in the capacity of a Processor.
              </p>
              <p className={pCls}>
                3.5. <strong className={strongCls}>Categories not Processed.</strong> We do not Process precise or background geolocation, payment card data, device contact lists, device calendar data, or biometric identifiers. Section 6.3 addresses biometric authentication.
              </p>
            </div>

            {/* 4. Purposes of Processing and Legal Bases */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>4. Purposes of Processing and Legal Bases</h2>
              <p className={pCls}>
                4.1. We Process Personal Information for the following purposes: (a) to authenticate users and administer accounts; (b) to provide, synchronize, and support the event workspace and collaboration features; (c) to deliver notifications you have enabled; (d) to secure the Services, prevent fraud and abuse, and investigate security incidents; (e) to diagnose faults and measure and improve performance and feature utility; (f) to respond to support requests and other communications; (g) to conduct voluntary product research as described in Section 7; and (h) to comply with legal obligations and to establish, exercise, or defend legal claims.
              </p>
              <p className={pCls}>
                4.2. Where the GDPR or UK GDPR applies, we rely on the following legal bases: (a) performance of a contract, Art. 6(1)(b), for the purposes at Sections 4.1(a), (b), and (f); (b) consent, Art. 6(1)(a), for the purposes at Sections 4.1(c), (g), and for the Processing described in Section 5; (c) legitimate interests, Art. 6(1)(f), for the purposes at Sections 4.1(d) and (e), being our interest in operating a secure and reliable service, balanced against the rights and freedoms of Data Subjects; and (d) compliance with a legal obligation, Art. 6(1)(c), for the purposes at Section 4.1(h). Where consent is the legal basis, it may be withdrawn at any time without affecting the lawfulness of Processing carried out before withdrawal.
              </p>
              <p className={pCls}>
                4.3. We do not engage in automated decision-making producing legal or similarly significant effects concerning Data Subjects within the meaning of GDPR Art. 22, and we do not conduct profiling in furtherance of decisions that produce such effects for purposes of applicable United States state Privacy Laws.
              </p>
            </div>

            {/* 5. Optional Artificial Intelligence Processing */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>5. Optional Artificial Intelligence Processing</h2>
              <p className={pCls}>
                5.1. Certain features of the App transmit Event Content to OpenAI, L.L.C. (&ldquo;<strong className={strongCls}>OpenAI</strong>&rdquo;) for the generation of plans, briefs, responses, or drafts.
              </p>
              <p className={pCls}>
                5.2. No Event Content is transmitted to OpenAI unless and until the user grants permission through an in-App disclosure presented before first transmission. Permission is scoped to the account on the applicable installation.
              </p>
              <p className={pCls}>
                5.3. Where permission is granted, the categories of Personal Information transmitted may include event names, dates, locations, budgets, guest and vendor names, tasks, notes, run-of-show details, and conversation text. Opening or refreshing an AI-generated brief may initiate a transmission while permission remains in effect.
              </p>
              <p className={pCls}>
                5.4. Permission may be withdrawn at any time through Settings, which prevents further transmissions from that installation. Withdrawal does not operate retrospectively, and transmissions already effected cannot be recalled.
              </p>
              <p className={pCls}>
                5.5. Declining or withdrawing permission does not restrict access to the non-AI functionality of the Services.
              </p>
              <p className={pCls}>
                5.6. Outputs generated by AI features may be inaccurate and should be reviewed before use. Evenzs does not transmit AI-generated drafts to vendors, guests, or other third parties on a user&apos;s behalf without that user&apos;s action.
              </p>
            </div>

            {/* 6. Device Permissions (App) */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>6. Device Permissions (App)</h2>
              <p className={pCls}>
                6.1. <strong className={strongCls}>Camera and photo library.</strong> Accessed solely where a user elects to add or replace a profile photograph. The resulting image is stored with the user&apos;s profile.
              </p>
              <p className={pCls}>
                6.2. <strong className={strongCls}>Microphone and speech recognition.</strong> Dictation requires microphone and speech recognition permissions granted at the operating-system level. On-device recognition is used where available. Where on-device recognition is unavailable, Apple Inc. may Process the audio through its speech recognition service in accordance with Apple&apos;s own privacy terms. Evenzs does not retain dictation audio. Transcribed text becomes Event Content, or an AI prompt under Section 5, only upon the user&apos;s submission.
              </p>
              <p className={pCls}>
                6.3. <strong className={strongCls}>Biometric authentication.</strong> Application unlock may use the authentication result returned by the operating system. Evenzs does not receive, Process, or store biometric templates or other biometric identifiers, and no Processing subject to a biometric information privacy statute is undertaken.
              </p>
              <p className={pCls}>
                6.4. Each permission described in this Section 6 may be granted or revoked at any time through operating-system settings.
              </p>
            </div>

            {/* 7. Site Visitors and Voluntary Research */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>7. Site Visitors and Voluntary Research</h2>
              <p className={pCls}>
                7.1. The Site collects Personal Information independently of the App. The waitlist form and the multi-step questionnaire collect the contact details submitted, the respondent&apos;s role, the categories of events the respondent operates, and the respondent&apos;s answers concerning event operations.
              </p>
              <p className={pCls}>
                7.2. Personal Information collected under Section 7.1 is Processed for product research and product-development purposes on the basis of the respondent&apos;s voluntary submission. Participation is optional and is not a condition of access to the Services.
              </p>
              <p className={pCls}>
                7.3. Scheduling of consultations is facilitated by Cal.com, Inc., which collects the information necessary to schedule the applicable appointment.
              </p>
              <p className={pCls}>
                7.4. The App contains no survey or research questionnaire.
              </p>
              <p className={pCls}>
                7.5. Research responses may be retained in aggregated or de-identified form following deletion of an associated account. Where information is maintained in de-identified form, we maintain such information in de-identified form, do not attempt to reidentify it, and contractually obligate recipients to observe the same restrictions, in accordance with Cal. Civ. Code &sect;&nbsp;1798.140(m).
              </p>
            </div>

            {/* 8. Disclosure of Personal Information */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>8. Disclosure of Personal Information</h2>
              <p className={pCls}>
                8.1. We Disclose Personal Information to the following categories of recipients, each engaged as a Processor under a written agreement restricting Processing to the purposes specified:
              </p>
              <div className={tableWrap}>
                <table className={tableCls}>
                  <thead>
                    <tr>
                      <th className={thCls}>Recipient</th>
                      <th className={thCls}>Function</th>
                      <th className={thCls}>Categories Disclosed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdCls}>Supabase, Inc.</td>
                      <td className={tdCls}>Authentication, database hosting, profile-photograph storage</td>
                      <td className={tdCls}>3.2(a), (b), (g)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>Railway Corp.</td>
                      <td className={tdCls}>Application programming interface hosting</td>
                      <td className={tdCls}>3.2(a)&ndash;(c), (e)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>Apple Inc.</td>
                      <td className={tdCls}>Sign in with Apple, speech recognition, push notification infrastructure</td>
                      <td className={tdCls}>3.2(a), (e), (f)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>Google LLC</td>
                      <td className={tdCls}>Federated authentication where &ldquo;Continue with Google&rdquo; is elected</td>
                      <td className={tdCls}>3.2(a)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>Expo, Inc.</td>
                      <td className={tdCls}>Push notification delivery, build infrastructure</td>
                      <td className={tdCls}>3.2(e)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>OpenAI, L.L.C.</td>
                      <td className={tdCls}>Optional AI features, subject to Section 5</td>
                      <td className={tdCls}>3.2(b)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>Functional Software, Inc. d/b/a Sentry</td>
                      <td className={tdCls}>Error and performance diagnostics</td>
                      <td className={tdCls}>3.2(c), (d)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>PostHog, Inc.</td>
                      <td className={tdCls}>Product analytics</td>
                      <td className={tdCls}>3.2(c), (d)</td>
                    </tr>
                    <tr>
                      <td className={tdCls}>Cal.com, Inc.</td>
                      <td className={tdCls}>Consultation scheduling, Site only</td>
                      <td className={tdCls}>3.2(a), (h)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={pCls}>
                8.2. We may additionally Disclose Personal Information: (a) where required by applicable law, legal process, or lawful governmental request; (b) where necessary to establish, exercise, or defend legal claims; (c) where necessary to protect the rights, property, or safety of Evenzs, users of the Services, or the public; and (d) to an acquirer or successor in connection with a merger, acquisition, reorganization, financing, or sale of assets, subject to the obligations of this Policy or a successor policy providing equivalent protection.
              </p>
              <p className={pCls}>
                8.3. Sign-in to the App is available by email and password, by Sign in with Apple on supported iOS devices, and by federated authentication with Google. Where you elect Sign in with Apple or Continue with Google, the authentication exchange is conducted with that identity provider, which returns to us the attributes described at Section 3.2(a). Your interaction with that identity provider is governed by that provider&apos;s own privacy policy, and your account credentials for that provider are never received by Evenzs.
              </p>
            </div>

            {/* 9. No Sale or Sharing of Personal Information */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>9. No Sale or Sharing of Personal Information</h2>
              <p className={pCls}>
                9.1. We do not sell Personal Information and have not sold Personal Information in the preceding twelve (12) months, within the meaning of Cal. Civ. Code &sect;&nbsp;1798.140(ad) or any analogous provision of an applicable state Privacy Law.
              </p>
              <p className={pCls}>
                9.2. We do not share Personal Information for cross-context behavioral advertising within the meaning of Cal. Civ. Code &sect;&nbsp;1798.140(ah), and do not engage in targeted advertising as that term is defined under the TDPSA or any analogous state Privacy Law.
              </p>
              <p className={pCls}>
                9.3. We do not sell Sensitive Personal Information and do not Process Sensitive Personal Information for purposes requiring an opt-in or notice under the TDPSA.
              </p>
              <p className={pCls}>
                9.4. We do not knowingly sell or share the Personal Information of any Data Subject under sixteen (16) years of age. See Section 14.
              </p>
            </div>

            {/* 10. Retention and Deletion */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>10. Retention and Deletion</h2>
              <p className={pCls}>
                10.1. Account and Event Content are retained for so long as the associated account remains active and for such further period as is necessary to provide the Services.
              </p>
              <p className={pCls}>
                10.2. A user may request deletion of an account through Settings or Profile within the App. Upon such request: (a) account access is restricted immediately; (b) push notification registrations are revoked; and (c) Event Content owned by the requesting user is scheduled for permanent deletion upon expiry of a thirty (30) day grace period.
              </p>
              <p className={pCls}>
                10.3. A deletion request may be cancelled by contacting support before expiry of the grace period. Following permanent deletion, restoration is not possible.
              </p>
              <p className={pCls}>
                10.4. Notwithstanding Section 10.2, we retain: (a) records of deletion requests and their disposition, for audit and compliance purposes; and (b) such Personal Information as is required to be retained to comply with a legal obligation, to resolve a dispute, or to establish, exercise, or defend a legal claim.
              </p>
              <p className={pCls}>
                10.5. Diagnostics, analytics, and backup records held by Processors are subject to the retention schedules of those Processors. Restriction of access or deletion of primary records does not effect immediate erasure of previously created backups or of every Processor record. We coordinate Processor follow-up in respect of verified erasure requests.
              </p>
              <p className={pCls}>
                10.6. Where no specific period is stated, retention is determined by reference to the purpose for which the Personal Information was collected, the existence of a legal obligation to retain it, and the applicable limitation period for claims.
              </p>
            </div>

            {/* 11. Information Security */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>11. Information Security</h2>
              <p className={pCls}>
                11.1. We maintain administrative, technical, and organizational measures designed to protect Personal Information against unauthorized access, disclosure, alteration, and destruction, including access controls, encryption of data in transit, and the storage protections afforded by our Processors.
              </p>
              <p className={pCls}>
                11.2. No method of transmission or storage is wholly secure, and we do not warrant absolute security.
              </p>
              <p className={pCls}>
                11.3. We maintain procedures for the assessment and notification of security incidents in accordance with applicable Privacy Laws.
              </p>
            </div>

            {/* 12. International Transfers */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>12. International Transfers</h2>
              <p className={pCls}>
                12.1. Personal Information may be Processed in the United States and in such other jurisdictions in which our Processors operate.
              </p>
              <p className={pCls}>
                12.2. Where Personal Information is transferred from the European Economic Area, the United Kingdom, or Switzerland to a jurisdiction not benefiting from an adequacy decision, such transfer is effected pursuant to an appropriate safeguard under GDPR Art. 46, including the Standard Contractual Clauses adopted by the European Commission, together with the UK International Data Transfer Addendum where applicable. A copy of the relevant safeguard may be requested at contact@evenzs.com.
              </p>
            </div>

            {/* 13. Rights of Data Subjects and Consumers */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>13. Rights of Data Subjects and Consumers</h2>
              <p className={pCls}>
                13.1. <strong className={strongCls}>Rights.</strong> Subject to the conditions and exemptions of the applicable Privacy Law, you may have the right to: (a) confirm whether we Process your Personal Information and obtain access to it; (b) obtain a copy of your Personal Information in a portable format; (c) request correction of inaccurate Personal Information; (d) request deletion of your Personal Information; (e) opt out of sale, sharing, targeted advertising, or profiling in furtherance of decisions producing legal or similarly significant effects, noting that we do not engage in such Processing; (f) restrict or object to Processing; (g) withdraw consent where Processing is based on consent; and (h) not be subjected to discrimination or retaliation for the exercise of any right.
              </p>
              <p className={pCls}>
                13.2. <strong className={strongCls}>Exercise of rights.</strong> Requests may be submitted to contact@evenzs.com. Deletion of an account may also be initiated directly within the App as described in Section 10.2.
              </p>
              <p className={pCls}>
                13.3. <strong className={strongCls}>Verification.</strong> We will take reasonable steps to verify the identity of a requesting party before acting, and may decline to act on a request that cannot be verified. An authorized agent may submit a request on a Consumer&apos;s behalf upon provision of evidence of authority.
              </p>
              <p className={pCls}>
                13.4. <strong className={strongCls}>Response times.</strong> We respond within forty-five (45) days of receipt of a verifiable request, extendable by a further forty-five (45) days where reasonably necessary and upon notice, or within such other period as the applicable Privacy Law prescribes. Requests under the GDPR are answered within one (1) month, extendable by two (2) further months where necessary upon notice.
              </p>
              <p className={pCls}>
                13.5. <strong className={strongCls}>Appeal.</strong> Where a request is declined in whole or in part, you may appeal that decision by written notice to contact@evenzs.com bearing the subject line &ldquo;Privacy Appeal.&rdquo; We will respond to an appeal in writing within sixty (60) days of receipt, stating the reasons for the decision taken. Where an appeal is denied, a Consumer resident in Texas may submit a complaint to the Office of the Attorney General of Texas, and a Consumer resident in another state affording an appeal right may submit a complaint to that state&apos;s Attorney General.
              </p>
              <p className={pCls}>
                13.6. <strong className={strongCls}>Supervisory authority.</strong> A Data Subject in the European Economic Area or the United Kingdom may lodge a complaint with the supervisory authority of their habitual residence, place of work, or place of the alleged infringement.
              </p>
            </div>

            {/* 14. Children */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>14. Children</h2>
              <p className={pCls}>
                14.1. The Services are directed to adult event professionals and are not directed to, or intended for use by, individuals under eighteen (18) years of age. We do not knowingly Process Personal Information of a child under thirteen (13) years of age within the meaning of the Children&apos;s Online Privacy Protection Act.
              </p>
              <p className={pCls}>
                14.2. Where we become aware that Personal Information of a child has been Processed without appropriate authorization, we will delete that Personal Information. Notice may be given to contact@evenzs.com.
              </p>
              <p className={pCls}>
                14.3. Personal Information concerning event attendees is to be entered by an authorized organizer only, in accordance with Section 3.4.
              </p>
            </div>

            {/* 15. Third-Party Services and Links */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>15. Third-Party Services and Links</h2>
              <p className={pCls}>
                15.1. The Services may contain links to websites and services operated by third parties. Processing undertaken by such third parties is governed by their respective privacy policies, and Evenzs assumes no responsibility for it.
              </p>
            </div>

            {/* 16. Amendment */}
            <div className={sectionCls}>
              <h2 className={h2Cls}>16. Amendment</h2>
              <p className={pCls}>
                16.1. We may amend this Policy from time to time. The Effective Date at the head of this Policy identifies the current version.
              </p>
              <p className={pCls}>
                16.2. Where an amendment is material, we will provide notice by such means as is appropriate in the circumstances, which may include notice within the Services or by email, in advance of the amendment taking effect where required by applicable Privacy Law.
              </p>
            </div>

            {/* 17. Notices and Contact */}
            <div className="mb-0">
              <h2 className={h2Cls}>17. Notices and Contact</h2>
              <p className={pCls}>
                17.1. Enquiries, requests, and notices under this Policy may be addressed to:
              </p>
              <p className={pCls}>
                Scube Innovations LLC d/b/a Evenzs<br />
                2425 Great Path<br />
                Leander, Texas 78641<br />
                United States<br />
                <a href="mailto:contact@evenzs.com" className="text-[#C9A84C] hover:underline">contact@evenzs.com</a>
              </p>
              <p className={pCls}>
                17.2. This Policy is made available in a format that may be printed and retained.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
