"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Chatbot from "@/components/Chatbot";
import AnimatedCounter from "@/components/AnimatedCounter";
import Sponsors from "@/components/Sponsors";
import FeatureGrid from "@/components/FeatureGrid";
import {
  Search,
  FileText,
  DollarSign,
  PenTool,
  Code,
  Rocket,
  Headphones,
  Shield,
  Lock,
  KeyRound,
  Bug,
  Eye,
  HelpCircle,
  MessageCircleQuestion,
  Info,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Discovery & Scope",
      desc: "We start by understanding your goals, challenges, and audience to define a clear project scope.",
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Proposal & Agreement",
      desc: "We present a transparent plan with deliverables, timelines, and pricing — aligning expectations early.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
      title: "Kickoff & Deposit",
      desc: "Once onboarded, timelines and milestones are locked in for focused collaboration.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-yellow-600" />,
      title: "Design & Prototype",
      desc: "Our creative team crafts high-fidelity UI/UX mockups and prototypes to visualize your product.",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Development & QA",
      desc: "Using modern frameworks and clean code, our engineers develop and rigorously test your product.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-rose-600" />,
      title: "Launch & Handover",
      desc: "We deploy on production servers, connect your domain, and provide documentation and training.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-cyan-600" />,
      title: "Support & Growth",
      desc: "We maintain, secure, and upgrade your software as your business scales.",
    },
  ];

  const cyberFeatures = [
    {
      icon: <Shield className="text-blue-400 w-10 h-10" />,
      title: "Advanced Threat Protection",
      desc: "AI-driven defense systems proactively detect and neutralize security threats before impact.",
    },
    {
      icon: <Lock className="text-green-400 w-10 h-10" />,
      title: "Legal Penetration Testing",
      desc: "Certified ethical hackers conduct authorized security assessments to safeguard your assets.",
    },
    {
      icon: <KeyRound className="text-yellow-400 w-10 h-10" />,
      title: "Data Encryption & Compliance",
      desc: "We secure your data with enterprise-grade encryption aligned with GDPR and ISO standards.",
    },
    {
      icon: <Bug className="text-red-400 w-10 h-10" />,
      title: "Incident Response & Forensics",
      desc: "Our rapid-response team handles breaches, logs evidence, and mitigates damage instantly.",
    },
    {
      icon: <Eye className="text-purple-400 w-10 h-10" />,
      title: "24/7 Monitoring & Intelligence",
      desc: "Round-the-clock surveillance with AI analytics for abnormal activity detection and alerts.",
    },
  ];

  return (
    <>
      {/* ✅ Navbar with “More” dropdown and moving arrow */}
      <div className="relative">
        <Navbar />
        <div className="absolute top-6 right-8 hidden md:block z-50">
          <div
            className="relative group flex flex-col items-center"
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
          >
            {/* 🔽 Animated Arrow (moving, not emoji) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="mb-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l7-8 7 8"
                />
              </svg>
            </motion.div>

            {/* More button */}
            <button
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition font-medium"
            >
              More
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown content */}
            {showMore && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden z-50"
              >
                <ul className="text-gray-800 dark:text-gray-200 text-sm">
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer transition">
                    <HelpCircle className="w-4 h-4 text-blue-600" /> Help Center
                  </li>
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer transition">
                    <MessageCircleQuestion className="w-4 h-4 text-green-600" /> FAQ
                  </li>
                  <li className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer transition">
                    <Info className="w-4 h-4 text-amber-500" /> About Us
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Hero />

      {/* 🧭 Process Section */}
      <section className="section container-xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h2 text-center"
        >
          How We Build Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p text-center mt-3 max-w-2xl mx-auto px-3"
        >
          From discovery to deployment — Monecuer’s structured 7-step process
          ensures each solution is precise, efficient, and built for scale.
        </motion.p>

        <div className="relative max-w-5xl mx-auto mt-10">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-500 to-cyan-400 w-[3px] rounded-full hidden md:block"
          />
          <div className="space-y-10 sm:space-y-14 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="bg-white shadow-md border border-gray-200 rounded-full p-4 flex-shrink-0 dark:bg-slate-900 dark:border-slate-700">
                  {s.icon}
                </div>
                <div className="max-w-md text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔐 Cyber Security Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a1f] via-[#0e0e2e] to-[#0a0a1f] text-white text-center px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Cyber Security Division — Protecting Innovation
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-12 text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Monecuer’s Cyber Division safeguards businesses across Africa with
          AI-powered defense, ethical hacking, and 24/7 monitoring — ensuring
          your data, ideas, and customers remain protected.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
          {cyberFeatures.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 sm:p-8 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 hover:border-blue-400 hover:shadow-blue-500/30 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-5">{f.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {f.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-14 px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/40 transition text-sm sm:text-base"
        >
          Request a Security Audit →
        </motion.button>
      </section>

      {/* 🌟 Feature Highlights */}
      <section className="section container-xl px-4 sm:px-8">
        <h2 className="h2 text-center">What We Deliver</h2>
        <p className="p text-center mt-3">
          From startups to enterprises — our expertise spans multiple industries.
        </p>
        <FeatureGrid />
      </section>

      {/* 🔢 Animated Counters */}
      <section className="section container-xl px-4 sm:px-8">
        <h2 className="h2 text-center">Our Progress</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-center">
          <AnimatedCounter end={120} label="Projects Delivered" />
          <AnimatedCounter end={45} label="Active Clients" />
          <AnimatedCounter end={12} label="Industries Served" />
        </div>
      </section>

      {/* 🤝 Sponsors */}
      <section className="section container-xl px-4 sm:px-8">
        <Sponsors />
      </section>

      <Chatbot />
      <Footer />
    </>
  );
}
