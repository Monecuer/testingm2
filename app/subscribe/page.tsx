"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function SubscribePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    plan: "",
    paymentMethod: "",
  });
  const [success, setSuccess] = useState(false);
  const [privateLink, setPrivateLink] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Simulated checkout - backend handles real payment
    const token = Math.random().toString(36).substring(2, 12);
    setPrivateLink(`https://www.monecuer.com/academy/access/${token}`);
    setSuccess(true);
  };

  if (success) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-6 py-20 text-center max-w-lg">
          <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-xl sm:text-3xl font-bold">Payment Successfully Received</h2>
          <p className="mt-3 mb-6 text-gray-600">
            Your subscription has been activated. Access your courses using the link below.
          </p>
          <Link
            href={privateLink}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Open Your Academy Access
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-20 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold">Secure Course Subscription</h1>
          <p className="text-gray-600 text-sm mt-2">
            Pay securely using Visa, Mastercard, EcoCash, or Inbucks. Unlock private access instantly.
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 border rounded-lg shadow-sm p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <select
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800"
            value={form.plan}
            onChange={(e) => setForm({ ...form, plan: e.target.value })}
          >
            <option value="">Select Plan</option>
            <option value="Standard">Standard — $7.99/month</option>
            <option value="Pro">Pro Academy — $14.99/month</option>
          </select>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Select Payment Method:</p>

            <button
              type="button"
              onClick={() => setForm({ ...form, paymentMethod: "Card" })}
              className={`w-full border rounded-lg px-4 py-3 flex items-center justify-between 
                ${form.paymentMethod === "Card" ? "border-blue-500" : "border-gray-300"}`}
            >
              <span>Visa / Mastercard</span>
              <Image src="/cards.png" alt="Cards" width={60} height={30} />
            </button>

            <button
              type="button"
              onClick={() => setForm({ ...form, paymentMethod: "EcoCash" })}
              className={`w-full border rounded-lg px-4 py-3 flex items-center justify-between 
                ${form.paymentMethod === "EcoCash" ? "border-blue-500" : "border-gray-300"}`}
            >
              <span>EcoCash Mobile Payment</span>
              <Smartphone size={22} />
            </button>

            <button
              type="button"
              onClick={() => setForm({ ...form, paymentMethod: "Inbucks" })}
              className={`w-full border rounded-lg px-4 py-3 flex items-center justify-between 
                ${form.paymentMethod === "Inbucks" ? "border-blue-500" : "border-gray-300"}`}
            >
              <span>Inbucks Wallet</span>
              <Smartphone size={22} />
            </button>
          </div>

          {/* WhatsApp Message (EcoCash / Inbucks only) */}
          {form.paymentMethod !== "Card" && form.paymentMethod !== "" && (
            <div className="mt-4 bg-yellow-50 dark:bg-gray-800 p-4 rounded-lg text-sm">
              After payment, send proof via WhatsApp:
              <Link
                className="block mt-2 font-medium text-blue-600"
                href="https://wa.me/263782286544?text=Hello%2C%20I%20have%20paid%20for%20my%20subscription."
              >
                Open WhatsApp Payment Confirmation
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 flex items-center justify-center gap-2 rounded-lg"
          >
            Complete Subscription <Lock size={16} />
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
