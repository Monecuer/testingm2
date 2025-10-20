"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image?: string;
  link: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="card flex flex-col bg-white/80 dark:bg-[#0f1230]/70 backdrop-blur-xl hover:shadow-xl border border-gray-200 dark:border-slate-700 transition-all duration-300 group"
    >
      {/* 📸 Project Image */}
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
      )}

      {/* 🧩 Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* 🚀 Button */}
        <Link
          href={link}
          target="_blank"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-medium px-4 py-2 text-sm hover:bg-blue-700 transition-all shadow-sm group"
        >
          Open Project
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}
