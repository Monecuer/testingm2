import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  FileText,
  Copyright,
  Scale,
  Database,
  Globe2,
  Cpu,
} from "lucide-react";

export const metadata = { title: "License — Monecuer Inc." };

const preface = [
  "This License (the “License”) is a binding agreement between you (“Licensee”) and Monecuer Inc (“Monecuer”, “we”, “us”, “our”).",
  "By installing, accessing, or using any Monecuer software, platform, AI model, documentation, or component (the “Licensed Materials”), you acknowledge that you have read, understood, and agreed to be bound by this License.",
  "If you disagree with these terms, you must not access or use the Licensed Materials.",
  "This License governs intellectual property ownership, restrictions, liability, confidentiality, and compliance matters relating to all Monecuer technologies globally.",
];

const clauseGroups = [
  {
    title: "I. Ownership & Intellectual Property — (“Lock–Monecuer”)",
    icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />,
    body: [
      "All rights, title, and interest in and to the Licensed Materials remain the sole and exclusive property of Monecuer Inc and its licensors.",
      "You may not copy, reverse engineer, redistribute, or create derivative works except as explicitly authorized in writing.",
      "The 'Lock–Monecuer' clause ensures all proprietary rights are legally protected under international copyright and trade secret law.",
    ],
  },
  {
    title: "II. License Grant & Scope",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
    body: [
      "Monecuer grants you a limited, non-transferable, non-exclusive, revocable license to use the Licensed Materials solely for internal business or educational use.",
      "This license does not convey any rights to distribute, sublicense, or resell the Licensed Materials.",
      "All unauthorized use, including commercial redistribution, will result in immediate termination and possible legal action.",
    ],
  },
  {
    title: "III. Data Protection & Privacy Compliance",
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
    body: [
      "Licensees must comply with all data protection laws applicable to their region, including GDPR, CCPA, and Zimbabwean Cybersecurity Act provisions.",
      "Monecuer enforces strict data encryption, anonymization, and audit controls to ensure privacy integrity.",
      "No personally identifiable information (PII) should be embedded in models, logs, or datasets unless explicitly permitted under a signed agreement.",
    ],
  },
  {
    title: "IV. Technical Restrictions & Fair Use",
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />,
    body: [
      "Licensees shall not stress-test, benchmark, or attempt to overload Monecuer systems without prior authorization.",
      "Automated access (bots, crawlers, or mass queries) is prohibited unless covered by an API license.",
      "Monecuer reserves the right to throttle, suspend, or block access in the event of abnormal usage patterns.",
    ],
  },
  {
    title: "V. Global Trade Compliance",
    icon: <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
    body: [
      "Licensee represents and warrants that the Licensed Materials will not be exported, re-exported, or transferred to embargoed countries, restricted individuals, or prohibited end users under global trade laws.",
      "This includes compliance with the U.S. Export Administration Regulations (EAR) and applicable regional export controls.",
      "Any breach of export control obligations will result in immediate termination of this License.",
    ],
  },
  {
    title: "VI. Legal Disclaimers & Limitation of Liability",
    icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MONECUER PROVIDES THE LICENSED MATERIALS “AS IS” WITHOUT WARRANTIES OF ANY KIND.",
      "IN NO EVENT SHALL MONECUER BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.",
      "Monecuer’s total aggregate liability shall not exceed the license fees paid in the three (3) months preceding the claim.",
    ],
  },
];

// Generate extended clauses
function generateLongClauses(count: number) {
  const arr: { n: number; title: string; text: string }[] = [];
  const topics = [
    "Security Obligations",
    "Operational Conduct",
    "AI Ethics Compliance",
    "Audit & Verification Rights",
    "Updates & Maintenance",
    "Data Handling",
    "User Accountability",
    "Legal Enforcement",
    "Intellectual Property Control",
    "Technical Guidelines",
    "Global Expansion",
    "Third-Party Dependencies",
    "Blockchain Records",
    "Confidentiality Practices",
    "Monecuer Brand Integrity",
    "Future License Adjustments",
  ];

  for (let i = 1; i <= count; i++) {
    const topic = topics[i % topics.length];
    arr.push({
      n: i,
      title: `${topic} — Clause ${i}`,
      text: `The Licensee acknowledges and agrees to abide by Monecuer’s internal standards of ${topic.toLowerCase()}. This includes maintaining logs, complying with regulatory audits, and ensuring full traceability of all licensed actions under Monecuer’s proprietary “Lock–Monecuer” control. Noncompliance may result in immediate suspension, investigation, or permanent license revocation.`,
    });
  }
  return arr;
}

// Long but contained inside a scrollable block
const longClauses = generateLongClauses(1200);

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-24 sm:pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-xs sm:text-sm leading-relaxed">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Monecuer License Agreement
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            A comprehensive legal framework governing the use, distribution, and
            protection of Monecuer technologies — including software, AI models,
            cloud infrastructure, and all derivative assets.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4 text-gray-700 dark:text-gray-200">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <Copyright className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
          </div>
        </section>

        {/* Preface */}
        <section className="bg-white/70 dark:bg-slate-900/70 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm p-4 sm:p-6 mb-10">
          <h2 className="text-sm sm:text-base font-semibold mb-2">
            Preface
          </h2>
          <div className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300">
            {preface.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Clause Groups */}
        <section className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {clauseGroups.map((c, i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm p-4 sm:p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                {c.icon}
                <h3 className="text-xs sm:text-sm font-semibold">
                  {c.title}
                </h3>
              </div>
              <div className="space-y-2 text-[11px] sm:text-xs text-gray-700 dark:text-gray-300">
                {c.body.map((b, j) => (
                  <p key={j}>{b}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Extended Operational Clauses (Scrollable) */}
        <section className="bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-semibold mb-2">
            Extended Operational Clauses
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3">
            The following extended clauses outline detailed expectations around security,
            ethics, operational standards, and enforcement. They apply to all Licensees
            using the Monecuer ecosystem, including partners and subcontractors.
          </p>

          {/* Scroll container to keep page usable on mobile */}
          <div className="mt-2 max-h-[60vh] overflow-y-auto pr-2 space-y-2 sm:space-y-3 text-[11px] sm:text-xs">
            {longClauses.map((c) => (
              <p key={c.n}>
                <span className="font-semibold">{c.title}:</span> {c.text}
              </p>
            ))}
          </div>

          <p className="mt-3 text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">
            By continuing to access or use Monecuer technologies, the Licensee confirms
            ongoing compliance with these extended operational clauses.
          </p>
        </section>

        {/* Footer Note */}
        <p className="mt-8 text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Monecuer Inc. All rights reserved.  
          “Lock–Monecuer” enforced. Proprietary and confidential.
        </p>
      </main>
      <Footer />
    </>
  );
}
