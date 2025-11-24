"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Code,
  Cloud,
  Globe2,
  Cpu,
  Smartphone,
  Users,
} from "lucide-react";

const solutions = [
  {
    icon: <Rocket className="w-10 h-10 text-blue-600" />,
    title: "Startup & MVP Acceleration",
    desc: "We turn bold ideas into working digital products in weeks. Our MVP process combines lean UX, rapid prototyping, and robust full-stack builds that scale effortlessly.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Enterprise & SaaS Systems",
    desc: "From retail platforms to AI dashboards — Monecuer builds high-availability systems with advanced security, automation, and cloud resilience.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-cyan-600" />,
    title: "Cloud & DevOps Transformation",
    desc: "We deploy, monitor, and optimize your apps for 99.9% uptime using AWS, Docker, and CI/CD — empowering you to move faster, safer, and smarter.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-pink-600" />,
    title: "Mobile & PWA Solutions",
    desc: "Cross-platform mobile applications built with Flutter and React Native — offline-ready, secure, and designed for performance across all devices.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-purple-600" />,
    title: "AI & Automation Integrations",
    desc: "We integrate intelligent systems that automate workflows, analyze data, and enhance customer experience — using OpenAI, TensorFlow, and on-device AI.",
  },
  {
    icon: <Users className="w-10 h-10 text-amber-600" />,
    title: "Community & Platform Engineering",
    desc: "From social apps to e-commerce platforms — we architect scalable, modular infrastructures designed for engagement and growth.",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-indigo-600" />,
    title: "Digital Presence & Branding",
    desc: "End-to-end website design, SEO, and brand development — giving your business a world-class identity with measurable online reach.",
  },
  {
    icon: <Code className="w-10 h-10 text-slate-600" />,
    title: "Custom Software Development",
    desc: "Whether internal tools or full-scale systems, we build secure, maintainable solutions tailored to your workflow and long-term vision.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            From startups to enterprises — Monecuer builds technology engineered for speed, security, and scale.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <h3 className="text-lg sm:text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 sm:mt-20"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Transform Your Business with Monecuer</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Our team is ready to design, develop, and deploy your next high-impact project.
          </p>
          <a href="/contact" className="btn btn-primary px-6 py-3 rounded-lg text-sm sm:text-base">
            Let’s Build Together →
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
