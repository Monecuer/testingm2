"use client";
import { motion } from "framer-motion";
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
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Discovery & Scope",
      desc: "We start by understanding your goals, challenges, and audience to define a clear project scope.",
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Proposal & Agreement",
      desc: "We present a clear plan with deliverables, timelines, and pricing to ensure transparency.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
      title: "Kickoff & Deposit",
      desc: "Once the initial deposit is confirmed, we set up timelines, milestones, and communication channels.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-yellow-600" />,
      title: "Design & Prototype",
      desc: "We design stunning UI/UX prototypes so you can visualize your final product before coding begins.",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Development & QA",
      desc: "Our engineers bring your idea to life with clean code and perform rigorous quality testing.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-rose-600" />,
      title: "Launch & Handover",
      desc: "We deploy your project live with domain setup, analytics, and full documentation.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-cyan-600" />,
      title: "Support & Growth",
      desc: "We continue optimizing, maintaining, and improving your product for long-term success.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* 🌍 How We Work Section */}
      <section className="section container-xl">
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
          className="p text-center mt-3 max-w-2xl mx-auto"
        >
          Every project we handle follows a streamlined, transparent, and
          creative 7-step process — ensuring quality from concept to launch.
        </motion.p>

        <div className="relative max-w-5xl mx-auto mt-10">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-500 to-cyan-400 w-[3px] rounded-full"
          ></motion.div>

          <div className="space-y-14 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="bg-white shadow-md border border-gray-200 rounded-full p-4 flex-shrink-0 dark:bg-slate-900 dark:border-slate-700">
                  {s.icon}
                </div>
                <div className="max-w-md">
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

      {/* 🌟 Feature Highlights */}
      <section className="section container-xl">
        <h2 className="h2 text-center">What We Deliver</h2>
        <p className="p text-center mt-3">
          From startups to enterprises — our expertise spans multiple industries.
        </p>
        <FeatureGrid />
      </section>

      {/* 🔢 Animated Counters */}
      <section className="section container-xl">
        <h2 className="h2 text-center">Our Progress</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
          <AnimatedCounter end={120} label="Projects Delivered" />
          <AnimatedCounter end={45} label="Active Clients" />
          <AnimatedCounter end={12} label="Industries Served" />
        </div>
      </section>

      {/* 🤝 Sponsors */}
      <section className="section container-xl">
        <Sponsors />
      </section>

      <Chatbot />
      <Footer />
    </>
  );
}
