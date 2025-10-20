"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Cloud,
  Brain,
  Server,
  FileCode,
  Github,
  Rocket,
} from "lucide-react";

export default function DevelopersClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-purple-100/10 dark:from-[#0a0a1f]/70 dark:to-[#001f3f]/40 blur-3xl -z-10"></div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="h1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Monecuer Developer Hub
          </h1>
          <p className="p text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Build, integrate, and innovate with Monecuer’s platforms.  
            Access APIs, SDKs, AI tools, and open-source frameworks designed for the future.
          </p>
        </motion.div>

        {/* Developer Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Monecuer Cloud API",
              desc: "REST and GraphQL endpoints for apps, AI, and POS integrations.",
              icon: <Cloud className="text-blue-500 animate-pulse" size={34} />,
            },
            {
              title: "AI & Automation SDK",
              desc: "Integrate Monecuer AI models for chatbots, automation, and smart analytics.",
              icon: <Brain className="text-purple-500 animate-bounce" size={34} />,
            },
            {
              title: "Developer Portal",
              desc: "Manage tokens, monitor usage, and explore API documentation.",
              icon: <Server className="text-green-500 animate-spin-slow" size={34} />,
            },
            {
              title: "Web & Mobile Frameworks",
              desc: "React, Next.js, and Flutter templates ready to power production apps.",
              icon: <Code className="text-yellow-500 animate-pulse" size={34} />,
            },
            {
              title: "Open Source Repositories",
              desc: "Collaborate on projects and join our GitHub ecosystem.",
              icon: <Github className="text-gray-800 dark:text-gray-300 animate-bounce" size={34} />,
            },
            {
              title: "Docs & Tutorials (Coming Soon)",
              desc: "Learn how to deploy, integrate, and scale your Monecuer-powered projects.",
              icon: <FileCode className="text-cyan-500 animate-pulse" size={34} />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <div className="h3">{item.title}</div>
              </div>
              <p className="p text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-20"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Rocket className="mx-auto text-cyan-500 animate-pulse mb-4" size={44} />
          <h2 className="h2 mb-3">Join the Developer Community</h2>
          <p className="p max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
            Contribute, collaborate, and build with Monecuer engineers worldwide.  
            From APIs to AI research, our mission is to empower the next generation of innovators.
          </p>
          <a
            href="https://github.com/MonecuerInc"
            target="_blank"
            className="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <Github size={18} /> Visit GitHub
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
