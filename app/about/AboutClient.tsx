"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";
import {
  Rocket, Cpu, Cloud, Smartphone, Brain,
  Globe2, ShieldCheck, Users, Target,
} from "lucide-react";

export const metadata = { title: "About — Monecuer Inc." };

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4
            text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            About Monecuer Inc.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed px-2">
            Monecuer Inc. is a global technology company founded in Africa with a vision to
            <strong> engineer digital transformation</strong> — building next-generation solutions across
            <strong> Web, Mobile, POS, and Cloud</strong>.  
            Our mission is to empower businesses, connect people and deliver impact through innovation.
          </p>
        </motion.div>

        {/* CORE VALUES */}
        <section className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Brain className="text-blue-500" size={36} />,
              title: "Innovation",
              desc: "We push the boundaries of technology to build scalable intelligent systems.",
            },
            {
              icon: <ShieldCheck className="text-emerald-500" size={36} />,
              title: "Integrity",
              desc: "We build with ethics, transparency, and long-term customer trust.",
            },
            {
              icon: <Target className="text-orange-500" size={36} />,
              title: "Impact",
              desc: "We create real-world solutions that empower people and businesses.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card text-center p-6 rounded-xl shadow-md hover:shadow-lg bg-white dark:bg-slate-900"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* COMPANY STORY */}
        <section className="mt-12 sm:mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="card p-6 rounded-xl bg-white dark:bg-slate-900 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-3">Our Story</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Founded in Zimbabwe, Monecuer began with a belief that digital innovation should be accessible,
              scalable, and globally deployable — regardless of geography.
            </p>
            <p className="text-sm sm:text-base mb-4">
              From startups to enterprises, our platforms power businesses, connect communities,
              and inspire digital transformation.
            </p>
            <p className="text-sm sm:text-base">Today, we are building for global markets — creating meaningful software that empowers businesses to grow.</p>
          </motion.div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="mt-12 sm:mt-16 md:mt-24">
          <h2 className="h2 text-center mb-6">Our Ecosystem</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Cpu size={32} />, title: "AI Tools" },
              { icon: <Smartphone size={32} />, title: "Mobile Apps" },
              { icon: <Cloud size={32} />, title: "Cloud Services" },
              { icon: <Globe2 size={32} />, title: "Web Platforms" },
              { icon: <Rocket size={32} />, title: "POS & SaaS" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="card p-5 rounded-xl shadow-sm hover:shadow-lg bg-white dark:bg-slate-900 transition-transform hover:scale-105"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="font-semibold">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6 rounded-xl shadow-md bg-white dark:bg-slate-900"
          >
            <h2 className="h2 mb-4">Leadership</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Our vision-driven leadership blends technical precision with global innovation mindset,
              empowering scalable transformation.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-center gap-2"><Users size={18}/> Inclusive Growth</li>
              <li className="flex items-center gap-2"><Brain size={18}/> Engineering Excellence</li>
              <li className="flex items-center gap-2"><ShieldCheck size={18}/> Trust & Responsibility</li>
            </ul>
          </motion.div>

          <Timeline />
        </section>
      </main>
      <Footer />
    </>
  );
}
