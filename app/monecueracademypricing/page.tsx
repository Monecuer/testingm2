"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export default function AcademyPricing() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
            Monecuer Academy Pricing
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Unlock structured software engineering, cybersecurity, AI and cloud courses — with mentorship and certifications.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Free Access",
              price: "$0 /month",
              features: [
                "Basic programming articles",
                "Limited PDF ebooks",
                "Sample video lessons",
                "Community discussion",
              ],
              button: "Start Free",
              href: "/learning",
              color: "border-gray-300",
            },
            {
              title: "Standard",
              price: "$7.99 /month",
              features: [
                "Full video access",
                "Unlimited ebooks (PDF)",
                "Project-based learning",
                "Completion certificate",
              ],
              button: "Subscribe Standard",
              href: "/subscribe",
              color: "border-blue-500",
              popular: true,
            },
            {
              title: "Pro Academy",
              price: "$14.99 /month",
              features: [
                "Mentor sessions & coaching",
                "AI learning assistant",
                "ID-verified certification",
                "Career portfolio support",
                "Stripe • EcoCash • Inbucks",
              ],
              button: "Enroll Pro",
              href: "/subscribe",
              color: "border-emerald-500",
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`border ${plan.color} rounded-lg shadow-sm hover:shadow-md p-5 sm:p-6 bg-white dark:bg-gray-900 relative flex flex-col justify-between`}
            >
              {plan.popular && (
                <span className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div>
                <h2 className="text-base sm:text-lg font-semibold">{plan.title}</h2>
                <p className="text-xl sm:text-2xl font-bold mt-1 mb-4">{plan.price}</p>

                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.href}
                className="mt-auto inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                {plan.button} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Payment Info */}
        <section className="text-center max-w-md mx-auto mt-16">
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
            Secure payments via EcoCash, Stripe, and Inbucks.
            Once subscribed, your dashboard unlocks courses automatically.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-4 items-center px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm"
          >
            Become an Instructor <BadgeCheck size={16} className="ml-2" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
