"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown,
  Home, Briefcase, Layers, Package, Users,
  BookOpen, DollarSign, Cpu, Shield, Phone, HelpCircle, FileText, ScrollText,
  Sun, Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { href: "/", label: "Home", icon: <Home className="text-blue-500" /> },
  { href: "/about", label: "About", icon: <Briefcase className="text-yellow-500" /> },
  { href: "/solutions", label: "Solutions", icon: <Layers className="text-purple-500" /> },
  { href: "/products", label: "Products", icon: <Package className="text-green-500" /> },
  { href: "/cybersecurity", label: "Cyber Security", icon: <Shield className="text-red-500" /> },
  { href: "/industries", label: "Industries", icon: <Users className="text-emerald-500" /> },
  { href: "/portfolio", label: "Case Studies", icon: <BookOpen className="text-pink-500" /> },
  { href: "/pricing", label: "Pricing", icon: <DollarSign className="text-green-400" /> },
  { href: "/blog", label: "Insights", icon: <Cpu className="text-cyan-400" /> },
  { href: "/careers", label: "Careers", icon: <Users className="text-indigo-400" /> },
  { href: "/contact", label: "Contact", icon: <Phone className="text-red-400" /> },
];

const policyLinks = [
  { href: "/faq", label: "FAQs", icon: <HelpCircle size={18} /> },
  { href: "/privacy", label: "Privacy Policy", icon: <FileText size={18} /> },
  { href: "/terms", label: "Terms & Conditions", icon: <ScrollText size={18} /> },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [dark, setDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-[#0a0a1f]/70 backdrop-blur-lg border-b border-slate-200/20 transition-all duration-500">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Monecuer Logo" width={45} height={45} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-3 flex-wrap max-w-[75vw]">
          {mainLinks.map((l) => (
            <motion.div key={l.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                href={l.href}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all"
              >
                {l.icon} {l.label}
              </Link>
            </motion.div>
          ))}

          {/* Dropdown for FAQ / Terms / Privacy */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown((prev) => !prev)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
            >
              Legal & Support <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg py-2 z-40"
                >
                  {policyLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
                    >
                      {p.icon} {p.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button onClick={() => setDark((d) => !d)} className="hidden md:block text-gray-700 dark:text-gray-200">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="md:hidden" onClick={() => setOpenMobile(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            className={`fixed top-0 right-0 w-full max-w-xs h-screen z-50 p-6 flex flex-col shadow-xl ${
              dark ? "bg-[#0a0a1f] text-white" : "bg-white text-gray-800"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <Image src="/logo.png" width={40} height={40} alt="Logo" />
              <X size={24} onClick={() => setOpenMobile(false)} className="cursor-pointer" />
            </div>

            {/* Main Links */}
            <div className="flex flex-col gap-4 overflow-y-auto">
              {mainLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpenMobile(false)}
                  className="flex items-center gap-3 text-lg font-semibold hover:text-blue-500 transition"
                >
                  {l.icon} {l.label}
                </Link>
              ))}

              {/* FAQ / Terms / Privacy */}
              <div className="mt-6 border-t pt-4 space-y-3 text-sm">
                {policyLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setOpenMobile(false)}
                    className="flex items-center gap-2 hover:text-blue-500"
                  >
                    {p.icon} {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
