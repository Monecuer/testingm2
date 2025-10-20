"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  DollarSign,
  PenTool,
  Code,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: <Search className="w-7 h-7 text-blue-600 animate-spin-slow" />,
    title: "1. Discovery & Scope",
    desc: "We begin by deeply understanding your business, goals, and target audience to define a clear, strategic project scope.",
  },
  {
    icon: <FileText className="w-7 h-7 text-indigo-600 animate-spin-slow" />,
    title: "2. Proposal & Agreement",
    desc: "We prepare a transparent proposal with deliverables, timelines, and pricing, followed by a mutual agreement for clarity.",
  },
  {
    icon: <DollarSign className="w-7 h-7 text-emerald-600 animate-spin-slow" />,
    title: "3. Deposit & Kickoff",
    desc: "Once your deposit is made, your project slot is secured, and we begin the official kickoff meeting with detailed milestones.",
  },
  {
    icon: <PenTool className="w-7 h-7 text-yellow-600 animate-spin-slow" />,
    title: "4. Design & Prototype",
    desc: "We design stunning visuals and clickable prototypes to ensure the experience aligns with your vision before coding begins.",
  },
  {
    icon: <Code className="w-7 h-7 text-purple-600 animate-spin-slow" />,
    title: "5. Build & QA",
    desc: "Our engineers bring the design to life with clean, modern code and conduct full QA to ensure flawless functionality.",
  },
  {
    icon: <Rocket className="w-7 h-7 text-rose-600 animate-spin-slow" />,
    title: "6. Launch & Handover",
    desc: "We deploy, configure domains, and deliver your product live — then hand over documentation and admin access.",
  },
  {
    icon: <Headphones className="w-7 h-7 text-cyan-600 animate-spin-slow" />,
    title: "7. Support & Growth",
    desc: "After launch, we continue to monitor, optimize, and support your product for sustainable growth and innovation.",
  },
];

export default function ClientProcess() {
  return (
    <main className="section container-xl pt-28 pb-20">
      {/* Intro Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h1 className="h1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
          Our Project Process
        </h1>
        <p className="p text-gray-600 mt-3 text-sm leading-relaxed">
          A dynamic 7-step journey that flows with precision — turning your
          ideas into high-impact digital products.
        </p>
      </motion.div>

      {/* Rolling Line & Steps */}
      <div className="relative max-w-4xl mx-auto">
        {/* Curved animated line that moves around steps */}
        <motion.div
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 8, ease: "easeInOut" }}
          className="absolute w-full h-full left-0 top-0"
        >
          <svg
            viewBox="0 0 400 1400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-full opacity-20"
          >
            <motion.path
              d="M200 0 C150 100, 250 200, 200 300 C150 400, 250 500, 200 600 C150 700, 250 800, 200 900 C150 1000, 250 1100, 200 1200"
              stroke="url(#grad)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Step Cards */}
        <div className="flex flex-col gap-10 mt-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.4 }}
              className={`relative flex flex-col sm:flex-row items-start gap-5 ${
                i % 2 === 0 ? "sm:ml-12" : "sm:mr-12 sm:self-end"
              }`}
            >
              <motion.div
                className="bg-white shadow-md border border-gray-100 rounded-full p-3"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              >
                {s.icon}
              </motion.div>

              <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-5 w-full sm:w-[80%]">
                <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Outro */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-20"
      >
        <h2 className="h2 text-gray-900">
          Built with Precision. Delivered with Passion.
        </h2>
        <p className="p text-gray-600 text-sm mt-3 max-w-xl mx-auto">
          Every Monecuer project flows through this rhythm — structured yet
          agile, balancing creativity and engineering discipline.
        </p>
        <a
          href="/pricing"
          className="btn btn-primary mt-6 inline-flex items-center justify-center gap-2 text-sm"
        >
          View Pricing →
        </a>
      </motion.div>
    </main>
  );
}
