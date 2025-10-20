"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu, X, ArrowLeft, ChevronDown, MoreHorizontal,
  Home, Briefcase, Layers, Package, ClipboardList, Building2, Users,
  BookOpen, DollarSign, Cpu, FileCode, ShieldCheck, HelpCircle, Phone,
  Sun, Moon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { href: "/", label: "Home", icon: <Home className="animate-pulse text-blue-500" /> },
  { href: "/about", label: "About", icon: <Briefcase className="animate-bounce text-yellow-500" /> },
  { href: "/solutions", label: "Solutions", icon: <Layers className="animate-spin-slow text-purple-500" /> },
  { href: "/products", label: "Products", icon: <Package className="animate-pulse text-green-500" /> },
  { href: "/process", label: "Process", icon: <ClipboardList className="animate-bounce text-orange-500" /> },
  { href: "/investors", label: "Investors", icon: <Building2 className="animate-pulse text-blue-400" /> },
  { href: "/industries", label: "Industries", icon: <Users className="animate-bounce text-emerald-500" /> },
  { href: "/portfolio", label: "Case Studies", icon: <BookOpen className="animate-pulse text-pink-500" /> },
  { href: "/pricing", label: "Pricing", icon: <DollarSign className="animate-bounce text-green-400" /> },
  { href: "/blog", label: "Insights", icon: <Cpu className="animate-spin-slow text-cyan-400" /> },
  { href: "/careers", label: "Careers", icon: <Users className="animate-pulse text-indigo-400" /> },
];

const moreLinks = [
  { href: "/developers", label: "Developers", icon: <FileCode className="animate-bounce text-violet-500" /> },
  { href: "/privacy", label: "Privacy", icon: <ShieldCheck className="animate-pulse text-blue-400" /> },
  { href: "/terms", label: "Terms", icon: <ShieldCheck className="animate-pulse text-yellow-400" /> },
  { href: "/faq", label: "FAQ", icon: <HelpCircle className="animate-bounce text-lime-400" /> },
  { href: "/contact", label: "Contact", icon: <Phone className="animate-pulse text-red-400" /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  // Dark mode handler
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-[#0a0a1f]/70 backdrop-blur-lg border-b border-slate-200/20 transition-all duration-500">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* ✅ Logo only */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Monecuer Logo" width={45} height={45} priority />
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 overflow-x-auto no-scrollbar max-w-[75vw]">
          {mainLinks.map((l) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Link
                href={l.href}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all whitespace-nowrap"
              >
                {l.icon}
                {l.label}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={() => setSubmenu(!submenu)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-all"
          >
            <MoreHorizontal size={18} />
            <span>More</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${submenu ? "rotate-180" : ""}`} />
          </motion.button>
        </nav>

        {/* ✅ Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((d) => !d)}
            className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-all"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="animate-pulse" />
          </button>
        </div>
      </div>

      {/* ✅ Fullscreen Mobile Menu (No Scroll) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-50 flex flex-col h-screen ${
              dark ? "bg-[#0a0a1f] text-white" : "bg-white text-gray-800"
            }`}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between p-5 border-b border-slate-300/20 dark:border-slate-700/30">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition"
              >
                <ArrowLeft size={20} /> Back
              </button>
              <X onClick={() => setOpen(false)} size={22} className="cursor-pointer hover:text-red-500" />
            </div>

            {/* Links */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="flex flex-col justify-center items-center gap-5 flex-grow text-center"
            >
              {mainLinks.concat(moreLinks).map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 text-xl font-semibold hover:text-blue-600 transition-all"
                  >
                    {l.icon}
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
