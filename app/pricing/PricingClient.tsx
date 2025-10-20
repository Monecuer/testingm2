"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Layers, Cloud, Brain, Wrench,
  Rocket, Code, CheckCircle, ClipboardList
} from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: <ClipboardList className="w-7 h-7 text-blue-600" />, title: "Planning", desc: "Understanding your goals, target audience, and project scope." },
  { icon: <Code className="w-7 h-7 text-indigo-600" />, title: "Development", desc: "Building robust, scalable systems using modern tech stacks." },
  { icon: <CheckCircle className="w-7 h-7 text-green-600" />, title: "Testing", desc: "Ensuring speed, quality, and security before launch." },
  { icon: <Rocket className="w-7 h-7 text-rose-600" />, title: "Hitting the Market", desc: "Ready to scale, produce, and launch with excellence." },
];

const services = [
  {
    title: "Monecuer Web Services",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    desc: "Modern, responsive websites with advanced features and SEO.",
    packages: [
      { name: "Starter (Basic Website)", price: "$150", features: ["3–5 Pages", "Mobile Responsive", "Free SSL & SEO Setup", "1 Month Free Support"] },
      { name: "Business Website", price: "$350 – $600", features: ["5–10 Pages", "Custom Branding & Forms", "SEO Optimization", "3 Months Support"] },
      { name: "E-Commerce", price: "$800 – $1,500", features: ["Online Store", "EcoCash / PayPal Payments", "Inventory Management", "6 Months Support"] },
      { name: "Premium / Web App", price: "From $2,000+", features: ["Custom Dashboard", "API Integration", "Real-Time Chat", "1 Year Maintenance"] },
    ],
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    desc: "Cross-platform apps built with Flutter or React Native.",
    packages: [
      { name: "Starter App", price: "$200 – $350", features: ["3–5 Screens", "Simple UI", "Contact / Info Pages"] },
      { name: "Cross-Platform", price: "$500 – $900", features: ["iOS + Android", "API Integration", "Push Notifications"] },
      { name: "Business App", price: "$1,000 – $1,500", features: ["Payments", "Geo-Location", "User Login", "Custom Features"] },
      { name: "Premium App", price: "From $2,000+", features: ["Full-Scale App", "Admin Dashboard", "Advanced Features"] },
    ],
  },
  {
    title: "POS & SaaS Products",
    icon: <Layers className="w-8 h-8 text-yellow-600" />,
    desc: "Smart point-of-sale and SaaS systems for small and large businesses.",
    packages: [
      { name: "Basic POS", price: "$150 – $300", features: ["Offline / Online POS", "Sales & Inventory", "Receipt Printing"] },
      { name: "Business POS", price: "$400 – $700", features: ["Multi-Device", "Stock Reports", "Reconciliation"] },
      { name: "E-Commerce POS", price: "$800 – $1,200", features: ["Online Store Integration", "EcoCash / PayPal", "Mobile Ordering"] },
      { name: "SaaS Enterprise", price: "From $1,500+", features: ["Multi-Business Accounts", "Subscription Billing", "Admin Panel"] },
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    desc: "Enterprise-grade hosting, monitoring, and CI/CD pipelines.",
    packages: [
      { name: "Starter Cloud", price: "$150 – $250", features: ["Basic Setup", "SSL + Security", "Backups"] },
      { name: "Business Cloud", price: "$300 – $600", features: ["AWS / Firebase", "Database & Monitoring", "Pipeline Setup"] },
      { name: "Advanced DevOps", price: "$800 – $1,200", features: ["Docker + Kubernetes", "Automation & Scaling"] },
      { name: "Enterprise Cloud", price: "From $1,500+", features: ["Multi-Region Deployment", "24/7 Monitoring", "Dedicated Support"] },
    ],
  },
  {
    title: "AI & Automation Systems",
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    desc: "AI solutions that automate workflows and drive intelligent decisions.",
    packages: [
      { name: "AI Starter", price: "From $500", features: ["Data Entry Bots", "Analytics Dashboards"] },
      { name: "AI Business Workflow", price: "$1,500 – $3,000", features: ["Predictive ML Models", "Chatbots", "Automation Setup"] },
      { name: "AI Pro", price: "$5,000 – $10,000", features: ["Computer Vision / NLP", "API Integrations"] },
      { name: "Enterprise AI", price: "From $15,000+", features: ["Full Custom AI", "Automation at Scale", "Dedicated Support"] },
    ],
  },
  {
    title: "Extra Services",
    icon: <Wrench className="w-8 h-8 text-gray-700" />,
    desc: "Add-ons to power your digital ecosystem.",
    packages: [
      { name: "Add-Ons", price: "", features: ["Domain: $15/year", "Hosting: $10–$30/month", "Branding Pack: $100–$500", "Maintenance: $50–$200/month"] },
    ],
  },
];

export default function Page() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900"
        >
          Monecuer Pricing & Services
        </motion.h1>
        <p className="text-center text-gray-600 mt-3">
          From concept to market — scalable, world-class digital solutions.
        </p>

        {/* Animated Progress Steps */}
        <div className="relative mt-14 mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-10 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500 rounded-full"
          />
          <div className="flex justify-between flex-wrap sm:flex-nowrap relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -40 : 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-1 min-w-[140px] sm:w-1/4 flex flex-col items-center text-center mb-10 sm:mb-0"
              >
                <div className="bg-white border border-gray-200 rounded-full shadow-md p-4 mb-3">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all text-sm"
            >
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{s.desc}</p>

              <div className="mt-4 space-y-3">
                {s.packages.slice(0, expanded === i ? s.packages.length : 2).map((p, j) => (
                  <motion.div
                    key={j}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-500 transition"
                  >
                    <div className="font-semibold text-gray-800">{p.name}</div>
                    {p.price && <div className="text-blue-600 font-bold text-sm">{p.price}</div>}
                    <ul className="list-disc ml-4 mt-2 text-gray-600 space-y-1">
                      {p.features.map((f, k) => <li key={k}>{f}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {s.packages.length > 2 && (
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="text-blue-600 text-sm mt-3 hover:underline"
                >
                  {expanded === i ? "Show Less ▲" : "Read More ▼"}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm mt-10 text-gray-500">
          All projects powered by <strong>Monecuer Inc.</strong> — Innovation from Africa to the World.
        </p>
      </main>
      <Footer />
    </>
  );
}
