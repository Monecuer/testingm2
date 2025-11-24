"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "The263Fx Trading Platform",
    website: "https://the263fx.com",
    description: "High-conversion trading platform with live market data, training modules, and lead-generation funnels.",
  },
  {
    name: "Frostmac Solutions Corporate Site",
    website: "https://frostmacsolutions.com",
    description: "Professional tech consultancy and engineering site built for Monecuer’s partner division.",
  },
];

export default function PortfolioClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Case Studies
          </h1>
          <p className="p mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Real projects with measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card hover:scale-[1.02] transition-transform shadow-lg rounded-xl border dark:border-gray-700 overflow-hidden"
            >
              {/* Automatic Thumbnail from Website */}
              <div className="aspect-video">
                <Image
                  src={`https://api.microlink.io/?url=${encodeURIComponent(p.website)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={`${p.name} preview`}
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.description}</p>

                <a
                  href={p.website}
                  target="_blank"
                  className="inline-block mt-4 text-sm text-blue-600 hover:underline"
                >
                  View Live →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
