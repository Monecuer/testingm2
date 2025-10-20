"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Handshake,
  TrendingUp,
  Globe2,
  ShieldCheck,
  Rocket,
  BarChart3,
  Building2,
  Cpu,
} from "lucide-react";

export default function InvestorsClient() {
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
          <Rocket
            size={50}
            className="mx-auto mb-4 text-cyan-500 animate-pulse"
          />
          <h1 className="h1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 font-extrabold">
            Investors & Partners
          </h1>
          <p className="p text-lg mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join Monecuer’s journey to reshape Africa’s digital economy.  
            We’re building a global tech ecosystem rooted in innovation, AI, and trust.
          </p>
        </motion.div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <TrendingUp className="text-green-500 animate-pulse" size={32} />,
              title: "Consistent Growth",
              text: "Monecuer’s ARR and project portfolio have expanded across multiple industries, with strong client retention and recurring contracts.",
            },
            {
              icon: <Globe2 className="text-blue-500 animate-bounce" size={32} />,
              title: "Pan-African Reach",
              text: "From Zimbabwe to the world — our network of developers and partners powers digital transformation across emerging markets.",
            },
            {
              icon: <ShieldCheck className="text-emerald-500 animate-pulse" size={32} />,
              title: "AI-First Innovation",
              text: "We integrate automation and intelligence into every product — from SaaS platforms to POS systems and smart enterprise tools.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <div className="h3">{item.title}</div>
              </div>
              <p className="p">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="card bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-slate-800 dark:to-slate-900">
            <div className="flex items-center gap-3 mb-3">
              <Handshake className="text-blue-600 animate-bounce" size={32} />
              <div className="h2">Our Partnership Approach</div>
            </div>
            <p className="p mt-2 text-gray-700 dark:text-gray-300">
              Monecuer thrives through collaboration. We co-build with innovators, investors, 
              and organizations who share our belief in Africa’s potential. Our partnerships 
              combine technology, strategy, and creativity — delivering scalable impact in 
              commerce, AI, education, and enterprise systems.
            </p>
            <p className="p mt-3 text-gray-700 dark:text-gray-300">
              Whether you’re an investor, distributor, or ecosystem enabler, 
              we invite you to join forces and shape the next decade of digital innovation.
            </p>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-20"
        >
          {[
            { label: "Projects Delivered", value: "120+" },
            { label: "Client Retention", value: "95%" },
            { label: "Team Growth", value: "300%+" },
            { label: "AI Integrations", value: "30+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 shadow-sm backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">
                {stat.value}
              </div>
              <div className="text-sm mt-1 opacity-80">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Building2
            className="mx-auto text-blue-600 animate-pulse mb-4"
            size={44}
          />
          <h2 className="h2 mb-3">Invest or Partner with Monecuer</h2>
          <p className="p max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
            We’re open to strategic partnerships, technology alliances, 
            and long-term investors aligned with our mission to build Africa’s future tech giant.
          </p>
          <a
            href="mailto:monecuerinc@gmail.com?subject=Investment%20or%20Partnership%20Inquiry"
            className="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <Cpu size={18} /> Start a Conversation
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
