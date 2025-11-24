"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  ShoppingBag,
  Brain,
  Smartphone,
  BarChart3,
} from "lucide-react";

const products = [
  {
    name: "Monecuer POS",
    icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
    tagline: "Smart Retail. Smarter Business.",
    desc: "An intelligent, offline-first Point-of-Sale system built for African retailers.",
    bullets: ["Inventory & receipts", "Offline-first sync", "Daily analytics", "EcoCash, PayNow, Innbucks"],
  },
  {
    name: "Monecuer AI Assistant",
    icon: <Brain className="w-10 h-10 text-purple-600" />,
    tagline: "Automation Meets Intelligence.",
    desc: "A personalized AI assistant for African businesses.",
    bullets: ["Chat + voice AI", "Task automation", "Embeddable web widgets", "Insight analytics"],
  },
  {
    name: "Monecuer Mobile Suite",
    icon: <Smartphone className="w-10 h-10 text-pink-600" />,
    tagline: "Apps That Move With You.",
    desc: "Custom mobile apps for modern African businesses.",
    bullets: ["Cross-platform Flutter", "Offline sync", "Secure dashboards", "PWA-ready"],
  },
  {
    name: "Monecuer Cloud & DevOps",
    icon: <Cpu className="w-10 h-10 text-cyan-600" />,
    tagline: "Scale Without Limits.",
    desc: "Secure cloud infrastructure, CI/CD, and uptime.",
    bullets: ["AWS, Firebase, Docker", "24/7 monitoring", "Custom SSL & domains", "Auto-deploy pipelines"],
  },
  {
    name: "Monecuer Analytics",
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    tagline: "Know Your Business Better.",
    desc: "Track growth, forecast trends, and visualize performance.",
    bullets: ["AI insights", "KPI dashboards", "Export PDF/CSV", "Multi-device access"],
  },
];

export default function ProductsClient() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
          Our Products
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
          Explore Monecuer’s digital ecosystem — crafted to accelerate business, empower innovation, and connect Africa to the world.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-2">{p.icon}
              <h3 className="text-lg font-semibold">{p.name}</h3>
            </div>
            <p className="text-blue-600 text-sm font-medium">{p.tagline}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 leading-relaxed">{p.desc}</p>
            <ul className="mt-3 list-disc ml-5 space-y-1 text-sm">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="mt-5">
              <a href="/contact" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-16">
        Crafting precision technology — from Zimbabwe to the world.
      </p>
    </main>
  );
}
