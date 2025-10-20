"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 relative overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-cyan-50 dark:from-[#0a0a1f]/60 dark:to-[#001f3f]/40 blur-3xl -z-10"></div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="h1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Contact Monecuer Inc.
          </h1>
          <p className="p mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We build world-class technology from Africa to the world.  
            Let’s connect, collaborate, or create something transformational together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Email */}
          <motion.a
            href="mailto:monecuerinc@gmail.com?subject=Project%20Inquiry&body=Hi%20Monecuer%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            whileHover={{ scale: 1.03 }}
            className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <Mail className="text-blue-500 animate-pulse mb-3" size={40} />
            <h3 className="h3 mb-2">Email Us</h3>
            <p className="p text-sm">monecuerinc@gmail.com</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/263782286544?text=Hi%20Monecuer%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="text-green-500 animate-bounce mb-3" size={40} />
            <h3 className="h3 mb-2">Chat on WhatsApp</h3>
            <p className="p text-sm">+263 782 286 544</p>
          </motion.a>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <Phone className="text-purple-500 animate-pulse mb-3" size={40} />
            <h3 className="h3 mb-2">Call Direct</h3>
            <p className="p text-sm">Available during working hours (CAT)</p>
          </motion.div>
        </div>

        {/* Divider Line */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-20"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Visit Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <MapPin className="mx-auto text-cyan-500 animate-pulse mb-3" size={40} />
          <h2 className="h2 mb-3">Visit Our Office</h2>
          <p className="p mb-6 text-gray-700 dark:text-gray-300">
            Harare, Zimbabwe — and globally online through Monecuer Cloud.
          </p>
          <a
            href="mailto:monecuerinc@gmail.com"
            className="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <Send size={18} /> Get in Touch
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
