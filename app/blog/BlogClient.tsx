"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { PenSquare, Shield, Rocket } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "why-speed-wins",
    title: "Why Speed Wins: Shipping in Weeks, Not Months",
    date: "2025-09-01",
    icon: <Rocket className="text-blue-500" size={26} />,
    desc: "Speed is not just a metric — it's a competitive moat. Discover how Monecuer engineers deliver production-ready systems without sacrificing quality or security.",
  },
  {
    slug: "designing-trust",
    title: "Designing Trust: Security as a Feature",
    date: "2025-08-18",
    icon: <Shield className="text-emerald-600" size={26} />,
    desc: "Trust is the new UX. Explore how embedded security engineering builds digital confidence from backend architecture to user experience.",
  },
  {
    slug: "mvp-to-scale",
    title: "From MVP to Scale: A Practical Playbook",
    date: "2025-07-22",
    icon: <PenSquare className="text-yellow-600" size={26} />,
    desc: "How we transform MVPs into scalable platforms — using modular architecture, AI automation, cloud engineering, and local-market research.",
  },
];

export default function BlogClient() {
  return (
    <>
      <Navbar />
      <main className="px-5 sm:px-8 md:px-16 lg:px-32 pt-24 pb-20">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight">
            Insights & Ideas
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
            Expert perspectives from Monecuer engineers on innovation, product strategy, 
            cybersecurity, AI systems, design and startup acceleration.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.015 }}
              className="rounded-2xl border bg-white dark:bg-gray-900
              p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                {p.icon}
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-md">
                    {p.title}
                  </h3>
                  <p className="text-xs opacity-60">{p.date}</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 leading-relaxed">
                {p.desc}
              </p>

              <Link
                href={`/blog/${p.slug}`}
                className="mt-5 inline-flex items-center text-blue-600 dark:text-cyan-400 text-sm font-medium hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Have insights to share?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
            Monecuer invites engineers, founders and thinkers shaping Africa’s digital future.
          </p>
          <Link
            href="/contact"
            className="mt-5 btn btn-primary inline-flex items-center gap-2"
          >
            <PenSquare size={18} /> Become a Contributor
          </Link>
        </motion.div>

      </main>
      <Footer />
    </>
  );
}
