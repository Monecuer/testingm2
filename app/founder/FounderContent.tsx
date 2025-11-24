"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Cpu, Smartphone, Rocket } from "lucide-react";

export default function FounderContent() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-10 text-center md:text-left shadow-lg rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <Image
              src="/founder.jpg"
              alt="Founder - Elshaddai Anesu Mugugu"
              width={180}
              height={180}
              className="rounded-full shadow-lg object-cover"
            />

            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Elshaddai Anesu Mugugu
              </h1>
              <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium">
                Founder & Software Engineer — Monecuer Inc.
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Zimbabwean Software Engineer dedicated to building secure, intelligent, and scalable platforms for Africa's
                digital economy — specializing in AI, Cloud, Cybersecurity, POS, and Web Systems.
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-500" />Cybersecurity & Ethical Hacking</li>
            <li className="flex items-center gap-2"><Cpu size={18} className="text-cyan-500" />AI Systems & Cloud Computing</li>
            <li className="flex items-center gap-2"><Smartphone size={18} className="text-purple-500" />Full Stack & Mobile Development</li>
            <li className="flex items-center gap-2"><Rocket size={18} className="text-yellow-500" />Building SaaS & POS Platforms</li>
          </ul>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
