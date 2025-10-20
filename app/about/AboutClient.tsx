"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";
import {
  Rocket, Cpu, Cloud, Smartphone, Brain, Globe2, ShieldCheck, Users, Target,
} from "lucide-react";

export const metadata = { title: "About — Monecuer Inc." };

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="h1 mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            About Monecuer Inc.
          </h1>
          <p className="p text-lg text-gray-700 dark:text-gray-300">
            Monecuer Inc. is a global technology company founded in Africa with a vision to
            **engineer digital transformation** — building next-generation solutions across
            <strong> Web, Mobile, AI, POS, and Cloud</strong>.  
            Our mission is to empower people, connect businesses, and transform industries
            through innovation, intelligence, and impact.
          </p>
        </motion.div>

        {/* CORE VALUES */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Brain className="text-blue-500" size={36} />,
              title: "Innovation",
              desc: "We push the boundaries of technology — developing intelligent systems that redefine industries and empower the next generation.",
            },
            {
              icon: <ShieldCheck className="text-emerald-500" size={36} />,
              title: "Integrity",
              desc: "We build technology guided by ethics, transparency, and long-term trust with every client and community we serve.",
            },
            {
              icon: <Target className="text-orange-500" size={36} />,
              title: "Impact",
              desc: "From startups to enterprises, our work creates real-world impact — simplifying business, empowering entrepreneurs, and uplifting economies.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="h3 mb-2">{item.title}</h3>
              <p className="p">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* COMPANY STORY */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="h2 mb-4">Our Story</h2>
            <p className="p mb-4">
              Monecuer was born from a single belief — that world-class technology should not be limited by geography.
              From humble beginnings in Zimbabwe, we’ve grown into a next-generation innovation company
              shaping Africa’s tech ecosystem and contributing to the global digital economy.
            </p>
            <p className="p mb-4">
              Our team combines software engineering, artificial intelligence, and design excellence
              to create platforms that power businesses, connect communities, and inspire change.
              Every product we build — from <strong>FaceGram</strong> to <strong>HustleLink</strong> and <strong>Monecuer AI</strong> —
              reflects our mission: to transform how the world interacts, trades, and evolves through technology.
            </p>
            <p className="p">
              Guided by innovation, resilience, and vision, we are building the future — one breakthrough at a time.
            </p>
          </motion.div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="mt-20">
          <h2 className="h2 mb-6 text-center">Our Ecosystem</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Cpu className="text-cyan-500" size={32} />, title: "AI & Automation" },
              { icon: <Smartphone className="text-green-500" size={32} />, title: "Mobile Apps" },
              { icon: <Cloud className="text-blue-500" size={32} />, title: "Cloud Systems" },
              { icon: <Globe2 className="text-indigo-500" size={32} />, title: "Web Platforms" },
              { icon: <Rocket className="text-yellow-500" size={32} />, title: "POS & SaaS" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="card hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="font-bold text-lg">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP + TIMELINE */}
        <section className="mt-20 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="h2 mb-4">Leadership</h2>
            <p className="p">
              Monecuer Inc. is led by a visionary team driven by innovation, purpose, and excellence.
              Our leadership philosophy blends African resilience with global vision —
              building not just products, but ecosystems that empower the future.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2"><Users className="text-blue-500" size={20}/> Inclusive Culture & Growth</li>
              <li className="flex items-center gap-2"><Brain className="text-purple-500" size={20}/> Future-driven Innovation</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-emerald-500" size={20}/> Ethics, Transparency & Trust</li>
            </ul>
          </motion.div>
          <Timeline />
        </section>
      </main>
      <Footer />
    </>
  );
}
