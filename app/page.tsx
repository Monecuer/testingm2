"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Chatbot from "@/components/Chatbot";
import AnimatedCounter from "@/components/AnimatedCounter";
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
  Handshake,
  Building,
  Globe,
  Users,
} from "lucide-react";

export default function Home() {
  const steps = [
    { icon: <Search className="w-8 h-8 text-blue-600" />, title: "Discovery & Scope", desc: "We start by understanding your goals, challenges, and audience to define a clear project scope." },
    { icon: <FileText className="w-8 h-8 text-indigo-600" />, title: "Proposal & Agreement", desc: "We present a transparent plan with deliverables, timelines, and pricing — aligning expectations early." },
    { icon: <DollarSign className="w-8 h-8 text-emerald-600" />, title: "Kickoff & Deposit", desc: "Once onboarded, timelines and milestones are locked in for focused collaboration." },
    { icon: <PenTool className="w-8 h-8 text-yellow-600" />, title: "Design & Prototype", desc: "Our creative team crafts high-fidelity UI/UX mockups and prototypes to visualize your product." },
    { icon: <Code className="w-8 h-8 text-purple-600" />, title: "Development & QA", desc: "Using modern frameworks and clean code, our engineers develop and rigorously test your product." },
    { icon: <Rocket className="w-8 h-8 text-rose-600" />, title: "Launch & Handover", desc: "We deploy on production servers, connect your domain, and provide documentation and training." },
    { icon: <Headphones className="w-8 h-8 text-cyan-600" />, title: "Support & Growth", desc: "We maintain, secure, and upgrade your software as your business scales." },
  ];

  const cyberFeatures = [
    { icon: <Shield className="text-blue-400 w-10 h-10" />, title: "Advanced Threat Protection", desc: "AI-driven defense systems proactively detect and neutralize security threats before impact." },
    { icon: <Lock className="text-green-400 w-10 h-10" />, title: "Legal Penetration Testing", desc: "Certified ethical hackers conduct authorized security assessments to safeguard your assets." },
    { icon: <KeyRound className="text-yellow-400 w-10 h-10" />, title: "Data Encryption & Compliance", desc: "Enterprise-grade encryption aligned with GDPR, HIPAA, and ISO standards." },
    { icon: <Bug className="text-red-400 w-10 h-10" />, title: "Incident Response & Forensics", desc: "Rapid response, digital forensics, and breach containment services." },
    { icon: <Eye className="text-purple-400 w-10 h-10" />, title: "24/7 Monitoring & Intelligence", desc: "AI-powered surveillance and threat analytics for real-time detection." },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* 🧭 Process Section */}
      <section className="section container-xl px-4 sm:px-6 lg:px-8">
        <motion.h2 className="h2 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          How We Build Projects
        </motion.h2>
        <p className="p text-center mt-3 max-w-2xl mx-auto">Monecuer's structured lifecycle guarantees efficient, scalable delivery.</p>

        <div className="relative max-w-5xl mx-auto mt-10">
          <motion.div className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block rounded-full"
            initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 2, ease: "easeInOut" }} />

          <div className="space-y-10 sm:space-y-14 relative z-10">
            {steps.map((s, i) => (
              <motion.div key={i} className={`flex flex-col sm:flex-row items-center gap-6 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="p-4 rounded-full shadow bg-white dark:bg-slate-900">{s.icon}</div>
                <div className="max-w-md text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔐 Cyber Security Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a1f] to-[#101028] text-white text-center px-4">
        <motion.h2 className="text-3xl sm:text-4xl font-bold mb-6">Cyber Security Division</motion.h2>
        <p className="max-w-3xl mx-auto mb-12">AI-driven security, threat mitigation, legal penetration testing, and 24/7 monitoring.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cyberFeatures.map((f, i) => (
            <motion.div key={i} className="p-6 sm:p-8 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="flex justify-center mb-5">{f.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button className="mt-14 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow text-white">Request Security Audit →</motion.button>
      </section>

      {/* 🌐 Sponsorship & Partnerships */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0b0b18] dark:to-[#0b0b18] text-center px-4 sm:px-8">
        <motion.div className="flex justify-center mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Handshake size={50} className="text-blue-600 dark:text-blue-400" />
        </motion.div>

        <h2 className="text-3xl font-bold mb-3">Strategic Partnerships & Collaboration</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-10">
          We collaborate with enterprises, startups, financial institutions, cloud providers, and cyber firms.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
          {[Building, Globe, Shield, Rocket, Users].map((Icon, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Icon size={32} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs mt-1">Partner Sector</span>
            </div>
          ))}
        </div>

        <div className="relative w-full overflow-hidden py-4 bg-blue-50 dark:bg-white/10">
          <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex items-center gap-8 text-blue-800 dark:text-blue-200 whitespace-nowrap font-medium text-sm">
            <Building size={18} /> Enterprise Tech • <Shield size={18} /> Secure Cloud • <Rocket size={18} /> SaaS Innovation • <Users size={18} /> Education & Workforce • <Globe size={18} /> Global Scale Partnerships
          </motion.div>
        </div>
      </section>

      {/* 📊 Counters */}
      <section className="section container-xl px-4">
        <h2 className="h2 text-center">Our Progress</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-center">
          <AnimatedCounter end={120} label="Projects Delivered" />
          <AnimatedCounter end={45} label="Active Clients" />
          <AnimatedCounter end={12} label="Industries Served" />
        </div>
      </section>

      <section className="section container-xl px-4">
        <FeatureGrid />
      </section>

      <Chatbot />
      <Footer />
    </>
  );
}
