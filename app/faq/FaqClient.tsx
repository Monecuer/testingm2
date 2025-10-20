"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Cpu,
  ShieldCheck,
  Rocket,
  Cloud,
  Zap,
  Code,
  Users,
  MessageCircle,
  Globe2,
  Clock,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    q: "What does Monecuer Inc. actually build?",
    a: "Monecuer Inc. is a multi-division tech company building across Web, Mobile, POS, and AI. Our teams engineer business software, digital experiences, and automation systems that connect people and organizations — from Africa to the world.",
    icon: <Globe2 className="text-blue-500 animate-pulse" size={28} />,
  },
  {
    q: "Do you use paid APIs or external databases?",
    a: "No. Monecuer platforms are designed to run lean — with open-source frameworks, local databases, and cloud-free deployment where possible. However, when scaling globally, we integrate with paid APIs like OpenAI, Firebase, or Stripe depending on the client’s infrastructure.",
    icon: <ShieldCheck className="text-green-500 animate-bounce" size={28} />,
  },
  {
    q: "Can you integrate AI and automation later?",
    a: "Yes. Every product we build is AI-ready. You can easily plug in LLMs, speech recognition, or automation flows later. We also build custom RAG (Retrieval-Augmented Generation) systems that help businesses turn data into real-time insights.",
    icon: <Cpu className="text-purple-500 animate-pulse" size={28} />,
  },
  {
    q: "How fast can Monecuer deliver a project?",
    a: "We build fast and ship faster. A typical MVP or business website takes between 1 to 3 weeks. Large-scale systems with dashboards, databases, and APIs can take 1–2 months depending on features, testing, and client feedback cycles.",
    icon: <Clock className="text-yellow-500 animate-bounce" size={28} />,
  },
  {
    q: "Who are Monecuer’s main clients?",
    a: "Our clients range from local Zimbabwean SMEs and churches to startups and international enterprises. We’ve worked with retailers, schools, transport platforms, restaurants, and digital media companies — all powered by the Monecuer ecosystem.",
    icon: <Users className="text-emerald-500 animate-pulse" size={28} />,
  },
  {
    q: "Do you offer mobile apps and POS systems too?",
    a: "Yes. We develop Android and iOS apps using React Native and Flutter, and custom POS (Point of Sale) systems for shops, restaurants, and service providers — fully integrated with Ecocash, PayNow, or card payments.",
    icon: <Zap className="text-orange-500 animate-pulse" size={28} />,
  },
  {
    q: "Is my data safe with Monecuer?",
    a: "Absolutely. Data privacy is a priority. We use encrypted Firestore, secure authentication, and controlled API access. We comply with international security standards while maintaining lightweight, local-first options for smaller clients.",
    icon: <ShieldCheck className="text-blue-600 animate-bounce" size={28} />,
  },
  {
    q: "How does the collaboration process work?",
    a: "It’s simple. You reach out through email or WhatsApp, we schedule a brief discovery call, draft your proposal, and begin design and development immediately. Progress updates are shared weekly, ensuring full transparency.",
    icon: <MessageCircle className="text-cyan-500 animate-pulse" size={28} />,
  },
  {
    q: "Can I update or manage my website after launch?",
    a: "Yes — all our platforms are modular and admin-controlled. You’ll have your own dashboard for content, analytics, and updates. For larger systems, we offer optional maintenance or training programs.",
    icon: <Code className="text-indigo-500 animate-bounce" size={28} />,
  },
  {
    q: "Do you offer long-term support or retainer plans?",
    a: "Yes, we do. Clients can choose between project-based or monthly support plans. We handle everything — from updates, security patches, and scaling to adding new AI-powered features as your business grows.",
    icon: <Rocket className="text-pink-500 animate-pulse" size={28} />,
  },
  {
    q: "Where is Monecuer based?",
    a: "Our headquarters are in Harare, Zimbabwe — but our projects and clients span globally through Monecuer Cloud. The company operates remotely with a network of African and international developers.",
    icon: <Cloud className="text-sky-500 animate-bounce" size={28} />,
  },
];

export default function HelpClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 relative overflow-hidden">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-cyan-50 dark:from-[#0a0a1f]/70 dark:to-[#001f3f]/40 blur-3xl -z-10"></div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="h1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Help Center
          </h1>
          <p className="p mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We’ve compiled answers to the most common questions about our
            technology, process, and vision. Need help beyond this? Contact us
            anytime — we’re always ready to assist.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card p-5 cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {f.icon}
                  <h3 className="h3">{f.q}</h3>
                </div>
                <ChevronDown
                  size={22}
                  className={`transition-transform ${
                    open === i ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p mt-3 text-gray-700 dark:text-gray-300"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <HelpCircle
            className="mx-auto text-cyan-500 animate-pulse mb-3"
            size={40}
          />
          <h2 className="h2 mb-3">Still Need Help?</h2>
          <p className="p mb-5 max-w-2xl mx-auto">
            Contact our team directly via{" "}
            <a
              href="mailto:monecuerinc@gmail.com"
              className="text-blue-600 hover:underline"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/263782286544"
              className="text-green-600 hover:underline"
              target="_blank"
            >
              WhatsApp
            </a>{" "}
            for fast, human support.
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
