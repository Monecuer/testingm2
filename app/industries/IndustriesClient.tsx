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
  Rocket,
} from "lucide-react";

const sectors = [
  {
    name: "Retail & E-Commerce",
    desc: "We build smart retail systems, digital catalogs, and POS integrations that help stores manage inventory, process payments, and scale effortlessly.",
    icon: <ShoppingBag className="text-pink-500" size={32} />,
  },
  {
    name: "Finance & Fintech",
    desc: "Secure dashboards, payment APIs, digital wallets, and intelligent automation — engineered for high-trust financial environments.",
    icon: <CreditCard className="text-blue-500" size={32} />,
  },
  {
    name: "Healthcare & Wellness",
    desc: "Smart record management, telemedicine, AI diagnostics, and patient engagement systems built for healthcare innovation.",
    icon: <HeartPulse className="text-red-500" size={32} />,
  },
  {
    name: "Education & Training",
    desc: "E-learning portals, school data management, AI tutors, and digital attendance solutions engineered for institutions.",
    icon: <GraduationCap className="text-yellow-500" size={32} />,
  },
  {
    name: "Hospitality & Tourism",
    desc: "Booking platforms, digital menus, review systems, and guest management tools for modern tourism businesses.",
    icon: <Hotel className="text-emerald-500" size={32} />,
  },
  {
    name: "Logistics & Transport",
    desc: "Delivery systems, ride-hailing platforms, fleet tracking, and automated route optimization solutions.",
    icon: <Truck className="text-orange-500" size={32} />,
  },
  {
    name: "Non-Profit & Community",
    desc: "Platforms for NGOs, churches, and communities — donation management, volunteer coordination, and real-time dashboards.",
    icon: <HeartHandshake className="text-purple-500" size={32} />,
  },
];

export default function IndustriesClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Industries We Empower
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mt-4 leading-relaxed">
            Custom-built digital solutions for Africa and global markets — powered by AI, cloud systems, cybersecurity, and design excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card hover:shadow-lg p-6 rounded-xl bg-white dark:bg-slate-900 border dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-2">
                {s.icon}
                <h3 className="text-lg font-semibold">{s.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <Rocket className="mx-auto text-cyan-500 mb-4" size={44} />
          <h2 className="h2 mb-2">Let’s Transform Your Industry</h2>
          <p className="p max-w-2xl mx-auto text-sm sm:text-base">
            We help businesses adopt digital systems, AI intelligence, and secure cloud infrastructure.
          </p>
          <a href="/contact" className="btn btn-primary mt-6">Start a Project →</a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
