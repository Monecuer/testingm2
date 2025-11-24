"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

// Real SVG for X (Twitter)
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-300"
  >
    <path d="M389.2 48H463L300.7 240.7 491 464H344.5L232.2 329.5 102.1 464H27.9L199.8 256.8 17 48H168.6L270.3 169.6 389.2 48ZM364.5 421.9H402.6L155.9 88h-39.8L364.5 421.9Z" />
  </svg>
);

export default function Footer() {
  const socials = [
    { name: "X", icon: <XIcon />, url: "https://x.com/monecuer31415" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://www.instagram.com/monecuerinc" },
    { name: "YouTube", icon: <Youtube size={20} />, url: "https://www.youtube.com/@monecuerInc" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "https://www.facebook.com/people/Monecuer/61579698334797" },
  ];

  return (
    <footer className="bg-[#050505] text-gray-300 border-t border-gray-800 py-14 mt-20">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand & About */}
          <div className="max-w-md">
            <img src="/logoo.png" alt="Monecuer Logo" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Monecuer engineers advanced AI, cybersecurity, cloud, and software systems 
              that empower Africa’s digital transformation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} <strong>Monecuer Inc.</strong> — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
