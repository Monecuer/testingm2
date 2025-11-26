"use client";

import { motion } from "framer-motion";
import { Rocket, Clock } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 text-center">

      {/* Door with Doll Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/coming-soon-door.png" // Replace with your own illustration
            alt="Monecuer Products Door"
            fill
            className="object-contain"
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Waiting outside the door of <span className="font-semibold">Monecuer Products</span> 🚪
        </p>
      </motion.div>

      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Rocket className="w-16 h-16 text-gray-500 dark:text-gray-300 animate-pulse mx-auto mb-4" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white"
      >
        Products Coming Soon
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-md"
      >
        We are building innovative solutions in AI, Cloud, FinTech, Mobile, and Analytics.
        Stay tuned — exciting products are on the way.
      </motion.p>

      {/* Launch Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-2 mt-6 text-gray-500 dark:text-gray-400 text-sm"
      >
        <Clock className="w-5 h-5" />
        <span>Official Launch: Q2 2026</span>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 text-gray-500 dark:text-gray-500 text-xs"
      >
        Crafting precision technology — from Zimbabwe to the world.
      </motion.p>
    </main>
  );
}
