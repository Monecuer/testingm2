"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

// ⚙️ Replace `slug` and `title` with your internal identifiers.
// The `urlCode` is a short code mapped internally so you don’t expose the full link.
const projects = [
  {
    slug: "proj-001",
    title: "The263Fx Trading Platform",
    urlCode: "263fx",
    description:
      "Forex-trading brand site built with Next.js and Tailwind. Challenge: convert visitors into leads. Solution: interactive UX + live data overlay. Result: ↑ 35% conversions in 3 months.",
  },
  {
    slug: "proj-002",
    title: "Lucky Chicken Decision App",
    urlCode: "lucky-chicken",
    description:
      "React-based mobile web app for breeders. Challenge: simplify colour/leg-colour selection by moon phases. Solution: dynamic filters + offline caching. Result: 4.9★ rating across >500 users.",
  },
  {
    slug: "proj-003",
    title: "Shalawambe Community Portal",
    urlCode: "shalawambe",
    description:
      "Non-profit platform built on JAMstack. Challenge: manage donations and content. Solution: headless CMS + Netlify deploys. Result: 120% growth in donor engagements in 6 months.",
  },
];

export default function PortfolioClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="h1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 font-extrabold">
            Case Studies
          </h1>
          <p className="p mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Selected projects demonstrating real-world impact, full stack delivery and measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Placeholder image or fetch logic */}
              <div className="aspect-video mb-4 bg-gray-100 dark:bg-slate-800 overflow-hidden rounded-lg">
                <Image
                  src={`/case-previews/${p.urlCode}.jpg`}
                  alt={`${p.title} preview`}
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h3 mb-2">{p.title}</div>
              <p className="p text-sm">{p.description}</p>
              <a
                href={`/external?code=${encodeURIComponent(p.urlCode)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block btn btn-outline"
              >
                View Live
              </a>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
