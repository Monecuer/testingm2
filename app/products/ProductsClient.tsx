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
    desc: "An intelligent, offline-first Point-of-Sale system built for African retailers. Manage inventory, print receipts, and analyze your sales in real-time — even without the internet.",
    bullets: [
      "Inventory, invoicing & receipts",
      "Offline-first sync",
      "Daily analytics & reporting",
      "EcoCash, PayNow, Innbucks payments",
    ],
  },
  {
    name: "Monecuer AI Assistant",
    icon: <Brain className="w-10 h-10 text-purple-600" />,
    tagline: "Automation Meets Intelligence.",
    desc: "A personalized AI assistant for African businesses — chat, analyze, and automate tasks through natural conversation and voice.",
    bullets: [
      "Chat + voice integration",
      "No-code workflow builder",
      "Embeddable on web or app",
      "Insight dashboard & analytics",
    ],
  },
  {
    name: "Monecuer Mobile Suite",
    icon: <Smartphone className="w-10 h-10 text-pink-600" />,
    tagline: "Apps That Move With You.",
    desc: "From digital identity to delivery systems, our mobile apps are high-performance, reliable, and built for scalability.",
    bullets: [
      "Cross-platform Flutter apps",
      "Offline data sync",
      "Custom dashboards",
      "PWA-ready for Android/iOS",
    ],
  },
  {
    name: "Monecuer Cloud & DevOps",
    icon: <Cpu className="w-10 h-10 text-cyan-600" />,
    tagline: "Scale Without Limits.",
    desc: "Reliable cloud infrastructure built for uptime and automation — so your business grows without breaking.",
    bullets: [
      "AWS / Firebase setup",
      "CI/CD pipelines",
      "Custom domains + SSL",
      "24/7 monitoring",
    ],
  },
  {
    name: "Monecuer Analytics",
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    tagline: "Know Your Business Better.",
    desc: "Data-driven insights to help you scale smarter. Track KPIs, revenue, and growth from one dashboard.",
    bullets: [
      "AI insights & visual charts",
      "Realtime KPIs",
      "Export as PDF / CSV",
      "Multi-device access",
    ],
  },
];

export default function ProductsClient() {
  return (
    <main className="section container-xl pt-28 pb-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h1 className="h1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
          Our Products
        </h1>
        <p className="p text-gray-600 mt-3">
          Explore Monecuer’s digital ecosystem — crafted to accelerate business,
          empower innovation, and connect Africa to the world.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-3">
              {p.icon}
              <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
            </div>
            <p className="text-blue-600 text-sm font-medium">{p.tagline}</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {p.desc}
            </p>
            <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 text-sm">
              {p.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-500 text-sm mt-16">
        Each product is crafted with precision and performance — powering
        businesses from Zimbabwe to the world.
      </p>
    </main>
  );
}
