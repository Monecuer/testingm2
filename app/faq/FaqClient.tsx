"use client";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Globe2,
  ShieldCheck,
  Cpu,
  Clock,
  Users,
  Zap,
  Code,
  Rocket,
  MessageCircle,
  Cloud,
  Mail,
  Phone,
  Scale,
  Lock,
} from "lucide-react";

export default function MonecuerInfoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 text-sm sm:text-base leading-relaxed">
      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <HelpCircle className="text-blue-500 animate-pulse" /> Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {/* FAQ CARD TEMPLATE */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Globe2 className="text-blue-500" size={22} /> What services does Monecuer Inc. offer?
            </h3>
            <p className="mt-2 text-gray-700">
              Monecuer Inc. provides AI development, cybersecurity defense, full-stack web and
              mobile applications, cloud infrastructure, DevOps automation, POS systems,
              fintech platforms, data analytics, and custom enterprise technology solutions.
              We design, develop, secure, deploy, and scale solutions across global industries.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Cpu className="text-purple-500" size={22} /> How do you integrate AI in projects?
            </h3>
            <p className="mt-2 text-gray-700">
              We integrate AI using advanced LLMs, natural language processing, computer vision,
              speech recognition, and predictive analytics. We build custom automation systems,
              AI chatbots, smart assistants, recommendation engines, and enterprise intelligence dashboards.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <ShieldCheck className="text-green-600" size={22} /> How do you protect data?
            </h3>
            <p className="mt-2 text-gray-700">
              We follow ISO 27001, SOC 2, and GDPR standards. Our platforms use encryption,
              access control, firewalls, vulnerability scanning, threat monitoring, secure cloud
              architecture, MFA, and zero-trust policies to protect sensitive information.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Clock className="text-yellow-500" size={22} /> How long does a typical project take?
            </h3>
            <p className="mt-2 text-gray-700">
              MVP or business website: 1–3 weeks.  
              Cloud dashboards or fintech systems: 1–2 months.  
              AI/enterprise-scale SaaS platforms: 2–6 months.  
              Timelines depend on features, revisions, and complexity.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Users className="text-emerald-600" size={22} /> Who are your clients?
            </h3>
            <p className="mt-2 text-gray-700">
              Startups, retail businesses, hospitals, fintechs, educators, enterprises,
              churches, NGOs, logistics companies, and international SaaS providers.
              We build scalable tech for local and global markets.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Zap className="text-orange-500" size={22} /> Do you build mobile and POS apps?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes. We build cross-platform Flutter and React Native apps, POS payment systems,
              restaurant software, offline-first inventory dashboards, and delivery apps with
              secure payment integration (EcoCash, PayNow, Visa, PayPal).
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Code className="text-indigo-600" size={22} /> Which tech stack do you use?
            </h3>
            <p className="mt-2 text-gray-700">
              React, Next.js, TypeScript, Node.js, Python, Django, Java, Flutter, PostgreSQL,
              Firebase, AWS, Azure, Docker, Kubernetes, OpenAI, and TensorFlow.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <MessageCircle className="text-cyan-600" size={22} /> What support do you offer?
            </h3>
            <p className="mt-2 text-gray-700">
              We provide lifetime technical support, maintenance, monitoring, upgrades,
              cloud security, API support, and 24/7 WhatsApp-based customer service.
            </p>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Rocket className="text-pink-500" size={22} /> Why should I choose Monecuer?
            </h3>
            <p className="mt-2 text-gray-700">
              We deliver secure, scalable, AI-powered solutions with premium UI/UX,
              cloud readiness, mobile responsiveness, automation, and full compliance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.div
        className="text-center mt-10 border p-6 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h3 className="text-lg font-semibold mb-2 flex justify-center items-center gap-2">
          <MessageCircle className="text-blue-500 animate-bounce" /> Still Need Help?
        </h3>
        <p className="text-gray-700 mb-4">Contact us directly — we respond fast.</p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="mailto:monecuerinc@gmail.com" className="flex items-center gap-1 hover:underline">
            <Mail size={16} /> Email
          </a>
          <a href="https://wa.me/263782286544" target="_blank" className="flex items-center gap-1 hover:underline">
            <Phone size={16} /> WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
