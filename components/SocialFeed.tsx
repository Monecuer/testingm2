"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function SocialFeed() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    setPosts([
      {
        platform: "X",
        text: "Building Africa’s next SaaS ecosystem — AI, POS, Cloud, Cyber.",
        link: "https://x.com/monecuer31415",
      },
      {
        platform: "Instagram",
        text: "Monecuer Inc Cybersecurity & AI Products Showcase.",
        link: "https://www.instagram.com/monecuerinc/",
      },
      {
        platform: "YouTube",
        text: "Latest video: Secure Cloud Architecture & AI Deployment.",
        link: "https://www.youtube.com/@monecuerInc",
      },
    ]);
  }, []);

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {posts.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg bg-gray-900 text-gray-300 hover:bg-gray-800 hover:-translate-y-1 transition shadow-lg"
        >
          <p className="text-sm">{p.text}</p>
          <ExternalLink size={14} className="mt-2 opacity-80" />
        </a>
      ))}
    </div>
  );
}
