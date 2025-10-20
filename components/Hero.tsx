"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* 🎨 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* ✨ Hero Content */}
      <div className="relative z-20 container mx-auto px-5 text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Engineering Digital Transformation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-200 mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Websites • Apps • AI • POS • Cloud — built for precision, speed, and
          scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/solutions"
            className="btn btn-primary px-5 py-2.5 text-sm sm:text-base font-medium"
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline px-5 py-2.5 text-sm sm:text-base font-medium border-white/50 hover:bg-white/10"
          >
            Talk to Us
          </Link>
        </motion.div>
      </div>

      {/* 🔵 Soft Light Effect */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full animate-pulse z-0" />
    </section>
  );
}
