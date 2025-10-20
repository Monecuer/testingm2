import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  FileText,
  Scale,
  Globe2,
  CreditCard,
  UserCheck,
  Lock,
  Hammer,
  Database,
  RefreshCcw,
  LifeBuoy,
} from "lucide-react";

export const metadata = { title: "Terms — Monecuer Inc." };

const sections = [
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "1. Agreement to Terms",
    body:
      "By accessing or using any product, site, software, or service provided by Monecuer Inc (“Monecuer”, “we”, “us”, “our”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree, do not use our Services.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
    title: "2. Eligibility & Accounts",
    body:
      "You must be at least 18 years old (or the legal age of majority in your jurisdiction) to use the Services. You are responsible for your account credentials and any activity under your account. Notify us immediately of any unauthorized use.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    title: "3. Acceptable Use",
    body:
      "You agree not to misuse the Services, interfere with their normal operation, attempt to access non-public areas, or use them to transmit malicious code, spam, or illegal material. We may suspend or terminate accounts that violate these Terms.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-rose-600" />,
    title: "4. Professional Services & Deliverables",
    body:
      "Where we provide design, development, AI/automation, cloud, or related professional services, the scope, timeline, pricing, and acceptance criteria will be described in a written quote, SOW, or order form. You agree to provide timely feedback and approvals.",
  },
  {
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    title: "5. Intellectual Property",
    body:
      "All rights, title, and interest in and to the Services, underlying software, models, frameworks, UI components, and documentation are and will remain the exclusive property of Monecuer Inc and its licensors. Except as expressly granted in writing, no license is granted. You may not copy, reverse engineer, or create derivative works without our prior written consent.",
  },
  {
    icon: <Database className="w-6 h-6 text-orange-600" />,
    title: "6. Data & Privacy",
    body:
      "We process customer data in accordance with our Privacy Policy. You represent that you have the right to provide any data you submit and that such data does not violate applicable laws or third-party rights.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-green-600" />,
    title: "7. Fees, Billing & Taxes",
    body:
      "You agree to pay all fees described in your quote, SOW, or order form. Unless stated otherwise, fees are exclusive of taxes. Late payments may incur interest and/or suspension of service.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-cyan-600" />,
    title: "8. Changes & Updates",
    body:
      "We may modify or improve features to enhance reliability, security, or performance. If a change materially reduces core functionality for a paid plan, we will give reasonable notice.",
  },
  {
    icon: <Scale className="w-6 h-6 text-purple-600" />,
    title: "9. Disclaimers",
    body:
      "THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, MONECUER DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-blue-500" />,
    title: "10. Limitation of Liability",
    body:
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MONECUER WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES WILL NOT EXCEED THE AMOUNT PAID BY YOU TO MONECUER IN THE 3 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-amber-600" />,
    title: "11. Support",
    body:
      "Support levels (response targets, channels, and hours) are defined by the plan or SOW. We may provide patches, workarounds, or guidance to resolve issues.",
  },
  {
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    title: "12. Confidentiality",
    body:
      "Each party agrees to protect the other’s confidential information with reasonable care and not disclose it except to employees, contractors, or advisors who need to know and are bound by confidentiality obligations.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-rose-600" />,
    title: "13. Termination",
    body:
      "Either party may terminate for material breach if the breach is not cured within 14 days after written notice. Upon termination, your right to use the Services ceases. Sections that by their nature should survive termination will survive.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-indigo-600" />,
    title: "14. Governing Law & Dispute Resolution",
    body:
      "These Terms are governed by the laws of the jurisdiction stated in your SOW or, if none, the laws of Zimbabwe, without regard to conflict-of-law principles. Disputes will be resolved through good-faith negotiation; if unresolved, the parties agree to binding arbitration in a mutually agreed venue.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "15. Entire Agreement",
    body:
      "These Terms, together with any SOW, order form, or supplemental policy referenced herein, constitute the entire agreement between you and Monecuer and supersede prior or contemporaneous agreements on the subject matter.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="h1">Terms of Service</h1>
          <p className="p mt-4">
            The legal stuff, simplified. Please read this carefully before using our Services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-3 mb-2">
                {s.icon}
                <h3 className="h3">{s.title}</h3>
              </div>
              <p className="p">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
          <a
            href="/privacy"
            className="btn btn-outline"
            aria-label="Read the Privacy Policy"
          >
            Privacy Policy
          </a>

          <a
            href="/terms/license"
            className="btn btn-primary"
            aria-label="View full Monecuer License"
            title="Full License — © Monecuer Inc."
          >
            See Our License
          </a>
        </div>

        <p className="p mt-10 text-sm opacity-70">
          © {new Date().getFullYear()} Monecuer Inc. All rights reserved.
        </p>
      </main>
      <Footer />
    </>
  );
}
