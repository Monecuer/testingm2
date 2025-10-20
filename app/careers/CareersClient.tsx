"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Code, Cpu, Rocket, Workflow, Users } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Frontend Engineer (React/Next.js)",
    type: "Remote / Harare",
    note: "Craft stunning interfaces with motion and precision.",
    icon: <Code className="text-blue-500 animate-pulse" size={26} />,
  },
  {
    title: "Backend Engineer (Node/Nest.js)",
    type: "Remote / Harare",
    note: "Build high-performance APIs and scalable infrastructure.",
    icon: <Cpu className="text-green-500 animate-spin-slow" size={26} />,
  },
  {
    title: "AI & Automation Engineer",
    type: "Remote",
    note: "Develop intelligent systems, chatbots, and automation pipelines.",
    icon: <Rocket className="text-yellow-500 animate-bounce" size={26} />,
  },
  {
    title: "UI/UX Designer",
    type: "Remote / Hybrid",
    note: "Design experiences that inspire users across devices.",
    icon: <Workflow className="text-pink-500 animate-pulse" size={26} />,
  },
  {
    title: "Community & Partnerships Lead",
    type: "Remote / Harare",
    note: "Build relationships, grow teams, and represent the Monecuer culture.",
    icon: <Users className="text-cyan-500 animate-bounce" size={26} />,
  },
];

export default function CareersClient() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden section container-xl pt-28">
        {/* Background Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/10 dark:from-blue-900/10 dark:to-purple-900/5 blur-3xl -z-10"></div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="h1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Join the Builders of Tomorrow
          </h1>
          <p className="p mt-4 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            At Monecuer Inc., we don’t just code — we create impact.  
            Our mission is to engineer digital transformation from Africa to the world.  
            If you move fast, think deeply, and love shipping great work — welcome home.
          </p>
        </motion.div>

        {/* Animated Process Line */}
        <div className="relative flex justify-center mb-20">
          <motion.div
            className="w-1 h-56 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 h-5 w-5 bg-blue-500 rounded-full animate-bounce"
            animate={{ y: [0, 220, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </div>

        {/* Roles Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card relative hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {r.icon}
                <div>
                  <div className="h3 font-bold">{r.title}</div>
                  <div className="text-sm opacity-70">{r.type}</div>
                </div>
              </div>
              <p className="p mb-5">{r.note}</p>
              <a
                href="mailto:monecuerinc@gmail.com?subject=Job%20Application"
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                <Briefcase size={18} /> Apply Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24"
        >
          <h2 className="h2 mb-3">We Move Fast — Together.</h2>
          <p className="p max-w-2xl mx-auto mb-6">
            Monecuer is built by engineers, dreamers, and changemakers.
            We move with rhythm, build with purpose, and design with passion.
            Your next chapter starts here.
          </p>
          <a
            href="mailto:monecuerinc@gmail.com?subject=Join%20Monecuer"
            className="btn btn-outline inline-flex items-center justify-center gap-2"
          >
            <Rocket size={18} /> Let's Build the Future
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
