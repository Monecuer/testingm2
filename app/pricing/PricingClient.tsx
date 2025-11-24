"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Layers, Cloud, Brain, Wrench,
  Rocket, Code, CheckCircle, ClipboardList, Phone, MessageCircle
} from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: <ClipboardList className="w-7 h-7 text-blue-600" />, title: "Planning", desc: "Understanding goals, business needs, and market focus." },
  { icon: <Code className="w-7 h-7 text-indigo-600" />, title: "Development", desc: "Building secure, scalable systems with clean architecture." },
  { icon: <CheckCircle className="w-7 h-7 text-green-600" />, title: "Testing", desc: "Ensuring speed, quality, and security before launch." },
  { icon: <Rocket className="w-7 h-7 text-rose-600" />, title: "Hitting the Market", desc: "Deploy, monitor, optimize, and scale." },
];

const services = [
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    desc: "Modern websites, portals, and advanced business web applications.",
    packages: [
      { name: "Starter Website", price: "$180+", features: ["3–5 Pages", "Responsive Design", "Basic SEO", "1 Month Maintenance"] },
      { name: "Business Site", price: "$350 – $700", features: ["Custom Branding", "API Forms", "SEO Optimization", "3 Months Support"] },
      { name: "E-Commerce", price: "$800 – $1,500", features: ["Payments & Inventory", "Admin Dashboard", "Analytics", "6 Months Maintenance"] },
      { name: "Enterprise Web App", price: "From $2,000+", features: ["Custom Dashboards", "Cloud + API Stack", "Security & Audits", "1 Year Full Support"] },
    ],
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    desc: "Cross-platform apps built with Flutter or React Native.",
    packages: [
      { name: "Starter App", price: "$200 – $350", features: ["3–5 Screens", "Simple UI", "Contact / Info Pages"] },
      { name: "Business App", price: "$500 – $900", features: ["iOS + Android", "API Integration", "Push Notifications"] },
      { name: "Premium App", price: "$1,000 – $1,500", features: ["Payments", "Geo-Location", "User Auth"] },
      { name: "Enterprise App", price: "From $2,000+", features: ["Admin System", "Cloud Sync", "Advanced Features"] },
    ],
  },
  {
    title: "POS & SaaS Products",
    icon: <Layers className="w-8 h-8 text-yellow-600" />,
    desc: "Smart retail, inventory, POS, and SaaS custom platforms.",
    packages: [
      { name: "Basic POS", price: "$150 – $300", features: ["Offline POS", "Sales & Reports", "Receipt Printing"] },
      { name: "Business POS", price: "$400 – $700", features: ["Multi-Device Support", "Stock Management", "Receipts + Reports"] },
      { name: "E-Commerce POS", price: "$800 – $1,200", features: ["Online + Offline Sync", "Payments Integration"] },
      { name: "SaaS Enterprise", price: "From $1,500+", features: ["Multi-Business", "Subscriptions", "Cloud Hosting"] },
    ],
  },
  {
    title: "Cloud & DevOps Services",
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    desc: "Hosting, scaling, server deployments, and automation.",
    packages: [
      { name: "Starter Setup", price: "$150 – $250", features: ["SSL + Security", "Basic Hosting", "Backups"] },
      { name: "Business Cloud", price: "$300 – $600", features: ["AWS / Firebase", "Database Setup", "Monitoring"] },
      { name: "Advanced DevOps", price: "$800 – $1,200", features: ["CI/CD", "Docker & Kubernetes"] },
      { name: "Enterprise Cloud", price: "From $1,500+", features: ["Multi-Region Hosting", "24/7 Support"] },
    ],
  },
];

export default function PricingPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Monecuer Pricing & Development Services
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            World-class digital engineering with clear pricing, high performance, and future-ready scalability.
          </p>
        </motion.div>

        {/* Progress Line */}
        <div className="relative mb-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="absolute top-10 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500 rounded-full"
          />
          <div className="flex justify-between flex-wrap sm:flex-nowrap relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 min-w-[140px] sm:w-1/4 flex flex-col items-center text-center"
              >
                <div className="bg-white dark:bg-slate-900 border rounded-full shadow-md p-4 mb-3">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border dark:bg-slate-900 dark:border-gray-700 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                {s.icon}
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{s.desc}</p>

              {/* Packages */}
              {s.packages.slice(0, expanded === i ? s.packages.length : 2).map((p, j) => (
                <div
                  key={j}
                  className="bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-lg border p-4 mb-3"
                >
                  <div className="font-semibold">{p.name}</div>
                  {p.price && <div className="text-blue-600 font-bold">{p.price}</div>}
                  <ul className="list-disc ml-5 text-sm mt-2">
                    {p.features.map((f, k) => <li key={k}>{f}</li>)}
                  </ul>
                </div>
              ))}

              {s.packages.length > 2 && (
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  {expanded === i ? "Show Less ▲" : "Read More ▼"}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-semibold mb-2">Ready to Build Your Project?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto mb-6">
            Let’s build something extraordinary — secure, scalable, AI-powered, and ready for the world.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/263782286544"
              target="_blank"
              className="btn btn-primary flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>

            <a
              href="/contact"
              className="btn btn-outline flex items-center gap-2"
            >
              <Phone size={18} /> Get Started
            </a>
          </div>
        </motion.div>

      </main>

      <Footer />
    </>
  );
}
