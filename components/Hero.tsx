"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, PhoneCall, User, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-xl mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-4xl font-bold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Engineering Digital Transformation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-200 mt-2 text-sm sm:text-base leading-relaxed"
        >
          Websites • Apps • AI • POS • Cloud — built for precision, speed, and scale.
        </motion.p>

        {/* CTA Buttons (Education removed for now) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          <Link
            href="/solutions"
            className="flex items-center gap-2 btn-primary text-sm sm:text-base px-4 py-2 rounded-lg"
          >
            <Lightbulb size={16} /> Solutions
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 btn-outline text-sm sm:text-base px-4 py-2 rounded-lg border-white/50 hover:bg-white/10"
          >
            <PhoneCall size={16} /> Contact
          </Link>

          <Link
            href="/founder"
            className="flex items-center gap-2 text-sm sm:text-base px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg"
          >
            <User size={16} /> Founder
          </Link>

          <Link
            href="/careers"
            className="flex items-center gap-2 text-sm sm:text-base px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg"
          >
            <Briefcase size={16} /> Careers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
