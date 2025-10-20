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
    icon: <Rocket className="text-blue-500 animate-pulse" size={28} />,
    desc: "In the fast-moving world of technology, speed is a strategy. Here’s how Monecuer engineers ship complex systems in record time — balancing precision, design, and impact.",
  },
  {
    slug: "designing-trust",
    title: "Designing Trust: Security as a Feature",
    date: "2025-08-18",
    icon: <Shield className="text-emerald-500 animate-bounce" size={28} />,
    desc: "At Monecuer, security isn’t a checkbox — it’s an experience. Discover how we integrate trust, privacy, and transparency into every layer of our platforms.",
  },
  {
    slug: "mvp-to-scale",
    title: "From MVP to Scale: A Practical Playbook",
    date: "2025-07-22",
    icon: <PenSquare className="text-yellow-500 animate-pulse" size={28} />,
    desc: "Scaling a digital product is more than adding users. Learn how our team transforms MVPs into global products through modular architecture and human-centered design.",
  },
];

export default function BlogClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="h1 mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Insights & Ideas
          </h1>
          <p className="p text-lg text-gray-700 dark:text-gray-300">
            Deep dives, reflections, and playbooks from Monecuer’s engineers,
            designers, and innovators — exploring the future of technology,
            creativity, and African excellence.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {p.icon}
                <div>
                  <div className="h3">{p.title}</div>
                  <div className="text-sm opacity-70">{p.date}</div>
                </div>
              </div>
              <p className="p mt-2">{p.desc}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${p.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <h2 className="h2 mb-3">Have a story to share?</h2>
          <p className="p mb-5">
            Monecuer’s innovation blog welcomes engineers, founders, and
            dreamers who are shaping the future of Africa and beyond.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <PenSquare size={18} /> Contribute Your Insight
          </Link>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
