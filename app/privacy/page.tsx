"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  ShieldCheck,
  Lock,
  FileText,
  Copyright,
  Globe2,
  Cpu,
  Database,
  Clock,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function LegalPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      q: "What data do you collect?",
      a: "We collect only essential information such as name, email, device info, and usage analytics for service improvement. No sensitive personal data is stored unless explicitly required.",
      icon: <Database size={24} className="text-blue-500" />,
    },
    {
      q: "Is my data secure with Monecuer?",
      a: "Absolutely. We implement multi-layer encryption, tokenized APIs, secure authentication and 24/7 monitoring. We are GDPR and Cybersecurity Act compliant.",
      icon: <ShieldCheck size={24} className="text-green-500" />,
    },
    {
      q: "Do you sell or share my private information?",
      a: "No. We do not sell personal data. We may share limited data only with secure, trusted service providers (e.g. hosting/payment) strictly for operational purposes.",
      icon: <Lock size={24} className="text-purple-500" />,
    },
    {
      q: "How long do you keep my information?",
      a: "We retain data only as long as needed for legal compliance, service continuity, and security. When no longer needed, data is deleted or anonymized.",
      icon: <Clock size={24} className="text-yellow-500" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container pt-28 pb-20 px-4 max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Monecuer Legal & Privacy
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Your security, trust, and privacy are our highest priorities.
          </p>
        </motion.div>

        {/* PRIVACY POLICY */}
        <section className="mb-16 space-y-6 text-sm leading-relaxed">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <ShieldCheck size={22} className="text-emerald-500" />
            Privacy Policy
          </h2>
          <p>
            Monecuer Inc. (“we”, “us”, “our”) is committed to protecting your
            privacy. This policy explains how we collect, process, and protect
            your personal data in compliance with global regulations (GDPR,
            CCPA, ZimbabweCyber Act).
          </p>

          <h3 className="font-semibold mt-4">1. Information We Collect</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal Data: email, name, phone (optional)</li>
            <li>Technical Data: IP address, device/browser info</li>
            <li>Service Usage Data: interactions, app stats, behavior insights</li>
          </ul>

          <h3 className="font-semibold mt-4">2. How We Use Your Data</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Account creation, platform access, subscription management</li>
            <li>Fraud prevention, security auditing, safe authentication</li>
            <li>Analyzing performance to enhance user experience</li>
            <li>Customer support and business communication</li>
          </ul>

          <h3 className="font-semibold mt-4">3. Legal Rights of Users</h3>
          <p>Depending on your region, you can request:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access, download or correct your personal data</li>
            <li>Deletion (Right to be Forgotten)</li>
            <li>Withdrawal of consent at any time</li>
            <li>Restriction of processing (GDPR Articles 12–23)</li>
          </ul>

          <h3 className="font-semibold mt-4">4. Contact Our Data Officer</h3>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              animate={{
                y: [-2, -10, -20, -10, 0],
                rotate: [0, 10, 20, 10, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full shadow-md mb-3"
            >
              <Mail size={26} className="text-blue-600" />
            </motion.div>
            <a
              href="mailto:privacy@monecuer.com"
              className="text-blue-600 hover:underline"
            >
              privacy@monecuer.com
            </a>
          </div>
        </section>

        {/* TERMS OF SERVICE */}
        <section className="mb-16 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FileText size={22} className="text-blue-600" />
            Terms of Service
          </h2>
          <p>
            By using any Monecuer system, platform, AI model, or service — you
            agree to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Use our tools ethically — no exploitation or misuse</li>
            <li>No reverse engineering, unauthorized sale, or reselling products</li>
            <li>Maintain account confidentiality and data responsibility</li>
            <li>Respect intellectual property — Monecuer retains IP ownership</li>
            <li>
              All disputes governed under the Laws of Zimbabwe & International
              Cyber Regulations
            </li>
          </ul>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
            <HelpCircle size={22} className="text-cyan-500" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="p-4 border rounded-lg cursor-pointer bg-white dark:bg-slate-800 shadow hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {f.icon}
                    <h3 className="text-sm sm:text-base font-medium">{f.q}</h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      openFAQ === i ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs sm:text-sm mt-3 text-gray-600 dark:text-gray-300"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER LEGAL NOTICE */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Monecuer Inc. All Rights Reserved.
          Protected by International IP & Cybersecurity Law.
        </p>
      </main>
      <Footer />
    </>
  );
}
