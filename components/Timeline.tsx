"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const items = [
    {
      year: "2023",
      title: "Vision & Foundation",
      text: "Monecuer Inc. was founded with a mission to build transformative African technology — combining innovation, AI, and practical business tools.",
    },
    {
      year: "2024",
      title: "First Clients & Early Launches",
      text: "Released the first Monecuer POS and AI assistant pilots, serving retail shops and creative agencies across Zimbabwe and the region.",
    },
    {
      year: "2025",
      title: "Scaling to Global Impact",
      text: "Expanded into multi-platform cloud infrastructure, advanced automation, and next-gen product ecosystems powering global enterprises.",
    },
  ];

  return (
    <section className="card relative overflow-hidden py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-10">
        Our Journey
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-600 to-cyan-400 rounded-full" />

        <div className="space-y-12 relative z-10">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 ${
                i % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[6px] sm:left-1/2 sm:-translate-x-1/2 bg-white border-[3px] border-blue-500 rounded-full w-6 h-6 shadow-lg animate-pulse" />

              {/* Content */}
              <div
                className={`mt-8 sm:mt-0 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md rounded-xl p-5 w-full sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:ml-auto text-left sm:text-right"
                    : "sm:mr-auto text-left"
                }`}
              >
                <h3 className="text-blue-600 font-semibold text-sm">{it.year}</h3>
                <h4 className="text-lg font-bold text-gray-900 mt-1">
                  {it.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  {it.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Monecuer Inc. — Building technology that
        connects Africa to the world.
      </p>
    </section>
  );
}
