"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Hotel,
  Truck,
  HeartHandshake,
  Cpu,
  Cloud,
  Rocket,
} from "lucide-react";

const sectors = [
  {
    name: "Retail & E-Commerce",
    desc: "We build smart retail systems, digital catalogs, and POS integrations that help stores move faster, track stock, and accept local payments like EcoCash and PayNow.",
    icon: <ShoppingBag className="text-pink-500 animate-pulse" size={32} />,
  },
  {
    name: "Finance & Fintech",
    desc: "Our finance solutions include secure dashboards, payment APIs, and intelligent automation tools — enabling fintech innovation across Africa and beyond.",
    icon: <CreditCard className="text-blue-500 animate-bounce" size={32} />,
  },
  {
    name: "Healthcare & Wellness",
    desc: "We design systems that improve hospital operations, patient record management, and telehealth — powered by data analytics and AI diagnostics.",
    icon: <HeartPulse className="text-red-500 animate-pulse" size={32} />,
  },
  {
    name: "Education & Training",
    desc: "From school portals to e-learning platforms and student data tools — we empower educators with modern, mobile-first technology.",
    icon: <GraduationCap className="text-yellow-500 animate-bounce" size={32} />,
  },
  {
    name: "Hospitality & Tourism",
    desc: "Monecuer builds hotel booking systems, digital menus, and customer experience dashboards to modernize tourism and hospitality operations.",
    icon: <Hotel className="text-emerald-500 animate-pulse" size={32} />,
  },
  {
    name: "Logistics & Transport",
    desc: "We power delivery, ride-hailing, and fleet management systems — from real-time tracking to automated route optimization.",
    icon: <Truck className="text-orange-500 animate-bounce" size={32} />,
  },
  {
    name: "Non-Profit & Community",
    desc: "Digital platforms for NGOs, churches, and communities — connecting people, managing donations, and measuring real social impact.",
    icon: <HeartHandshake className="text-purple-500 animate-pulse" size={32} />,
  },
];

export default function IndustriesClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-cyan-50 dark:from-[#0a0a1f]/70 dark:to-[#001f3f]/40 blur-3xl -z-10"></div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="h1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 font-extrabold">
            Industries We Empower
          </h1>
          <p className="p text-lg mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            From startups to enterprises — Monecuer delivers tailored digital solutions 
            for every sector, combining design, AI, and engineering excellence.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <div className="h3">{s.name}</div>
              </div>
              <p className="p text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-20"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Rocket className="mx-auto text-cyan-500 animate-pulse mb-4" size={44} />
          <h2 className="h2 mb-3">Let’s Transform Your Industry</h2>
          <p className="p max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
            Monecuer partners with businesses and organizations to accelerate digital adoption, 
            unlock AI-powered workflows, and build future-ready systems across Africa.
          </p>
          <a
            href="/contact"
            className="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <Cpu size={18} /> Start a Project
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
