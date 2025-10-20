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
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    body: [
      "All rights, title, and interest in and to the Licensed Materials remain the sole and exclusive property of Monecuer Inc and its licensors.",
      "You may not copy, reverse engineer, redistribute, or create derivative works except as explicitly authorized in writing.",
      "The 'Lock–Monecuer' clause ensures all proprietary rights are legally protected under international copyright and trade secret law.",
    ],
  },
  {
    title: "II. License Grant & Scope",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    body: [
      "Monecuer grants you a limited, non-transferable, non-exclusive, revocable license to use the Licensed Materials solely for internal business or educational use.",
      "This license does not convey any rights to distribute, sublicense, or resell the Licensed Materials.",
      "All unauthorized use, including commercial redistribution, will result in immediate termination and possible legal action.",
    ],
  },
  {
    title: "III. Data Protection & Privacy Compliance",
    icon: <Database className="w-6 h-6 text-amber-600" />,
    body: [
      "Licensees must comply with all data protection laws applicable to their region, including GDPR, CCPA, and Zimbabwean Cybersecurity Act provisions.",
      "Monecuer enforces strict data encryption, anonymization, and audit controls to ensure privacy integrity.",
      "No personally identifiable information (PII) should be embedded in models, logs, or datasets unless explicitly permitted under a signed agreement.",
    ],
  },
  {
    title: "IV. Technical Restrictions & Fair Use",
    icon: <Cpu className="w-6 h-6 text-cyan-600" />,
    body: [
      "Licensees shall not stress-test, benchmark, or attempt to overload Monecuer systems without prior authorization.",
      "Automated access (bots, crawlers, or mass queries) is prohibited unless covered by an API license.",
      "Monecuer reserves the right to throttle, suspend, or block access in the event of abnormal usage patterns.",
    ],
  },
  {
    title: "V. Global Trade Compliance",
    icon: <Globe2 className="w-6 h-6 text-green-600" />,
    body: [
      "Licensee represents and warrants that the Licensed Materials will not be exported, re-exported, or transferred to embargoed countries, restricted individuals, or prohibited end users under global trade laws.",
      "This includes compliance with the U.S. Export Administration Regulations (EAR) and applicable regional export controls.",
      "Any breach of export control obligations will result in immediate termination of this License.",
    ],
  },
  {
    title: "VI. Legal Disclaimers & Limitation of Liability",
    icon: <Scale className="w-6 h-6 text-purple-600" />,
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MONECUER PROVIDES THE LICENSED MATERIALS “AS IS” WITHOUT WARRANTIES OF ANY KIND.",
      "IN NO EVENT SHALL MONECUER BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.",
      "Monecuer’s total aggregate liability shall not exceed the license fees paid in the three (3) months preceding the claim.",
    ],
  },
];

// generate 1,000+ extended clauses dynamically
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

const longClauses = generateLongClauses(1200);

export default function LicensePage() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 pb-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="h1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Monecuer License Agreement
          </h1>
          <p className="p mt-3">
            A comprehensive legal framework governing the use, distribution, and protection
            of Monecuer technologies — covering software, AI models, cloud infrastructure,
            and all derivative assets.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Lock className="w-6 h-6 text-slate-700" />
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <FileText className="w-6 h-6 text-blue-600" />
            <Copyright className="w-6 h-6 text-purple-600" />
          </div>
        </div>

        {/* Preface */}
        <div className="card mb-10">
          <h2 className="h3 mb-2">Preface</h2>
          <div className="space-y-3">
            {preface.map((p, i) => (
              <p key={i} className="p">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Clause Groups */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {clauseGroups.map((c, i) => (
            <div key={i} className="card border border-gray-200 shadow-md hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                {c.icon}
                <h3 className="h3">{c.title}</h3>
              </div>
              {c.body.map((b, j) => (
                <p key={j} className="p">
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Massive Long Clauses */}
        <div className="card">
          <h3 className="h3 mb-3">Extended Operational Clauses</h3>
          <div className="space-y-3">
            {longClauses.map((c) => (
              <p key={c.n} className="p">
                <span className="font-semibold">
                  {c.title}:
                </span>{" "}
                {c.text}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="p mt-10 text-sm opacity-70 text-center">
          © {new Date().getFullYear()} Monecuer Inc. All rights reserved.  
          “Lock–Monecuer” enforced. Proprietary and confidential.
        </p>
      </main>
      <Footer />
    </>
  );
}
