"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  MoreHorizontal,
  Sun,
  Moon,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/cybersecurity", label: "Cyber Security" }, // 👈 NEW PAGE
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Insights" },
];

const moreLinks = [
  { href: "/developers", label: "Developers" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [dark, setDark] = useState(false);

  // Persist theme across pages
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0A0A1F]/70 backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-700/40 transition-all duration-500">
      <div className="container-xl flex items-center justify-between py-3 px-4">
        {/* 🔷 Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Monecuer Logo"
            width={42}
            height={42}
            className="rounded-full"
          />
        </Link>

        {/* 💻 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              {l.label}
            </Link>
          ))}
          {/* 🔻 More dropdown */}
          <div className="relative">
            <button
              onClick={() => setSubmenu(!submenu)}
              className="flex items-center gap-1 text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 transition-all"
            >
              <MoreHorizontal size={16} />
              <ChevronDown
                size={14}
                className={`transition-transform ${submenu ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {submenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#0f1230] rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden"
                >
                  {moreLinks.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-slate-800"
                    >
                      {m.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* ☀️ / 🌙 Theme + Mobile Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((d) => !d)}
            className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed inset-0 bg-white dark:bg-[#0A0A1F] z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                <ArrowLeft size={18} /> Close
              </button>
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>
            <div className="flex flex-col text-center gap-5 mt-10">
              {mainLinks.concat(moreLinks).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-bold hover:text-blue-600 transition-all"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
