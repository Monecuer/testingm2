"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
  return (
    <>
      <Navbar />
      <main className="section container-xl pt-24 sm:pt-28 px-4 sm:px-6 relative overflow-hidden">

        {/* Soft background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-cyan-50 dark:from-[#0a0a1f]/60 dark:to-[#001f3f]/40 -z-10"></div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Contact Monecuer Inc.
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            We build world-class technology from Africa to the world.
            Let’s connect, collaborate, or create something transformational together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">

          {/* Email */}
          <motion.a
            href="mailto:monecuerinc@gmail.com?subject=Project%20Inquiry&body=Hi%20Monecuer,%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            whileHover={{ scale: 1.04 }}
            className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <Mail className="text-blue-500 mb-2 sm:mb-3" size={32} />
            <h3 className="font-semibold text-sm sm:text-base">Email Us</h3>
            <p className="text-xs sm:text-sm text-gray-500">monecuerinc@gmail.com</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/263782286544?text=Hi%20Monecuer,%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            whileHover={{ scale: 1.04 }}
            className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="text-green-500 mb-2 sm:mb-3" size={32} />
            <h3 className="font-semibold text-sm sm:text-base">Chat on WhatsApp</h3>
            <p className="text-xs sm:text-sm text-gray-500">+263 782 286 544</p>
          </motion.a>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <Phone className="text-purple-500 mb-2 sm:mb-3" size={32} />
            <h3 className="font-semibold text-sm sm:text-base">Call Direct</h3>
            <p className="text-xs sm:text-sm text-gray-500">Available 9AM–6PM (CAT)</p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-14 sm:my-20"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Visit Section with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-4xl mx-auto"
        >
          {/* Clear office image */}
          <div
            className="absolute inset-0 bg-cover bg-center sm:bg-center md:bg-top transition-all duration-700"
            style={{ backgroundImage: "url('/office-bg.jpg')" }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>

          {/* Content Card */}
          <div className="relative text-center py-14 sm:py-20 px-4 sm:px-10 bg-white/5 rounded-2xl max-w-xl mx-auto border border-white/20">
            <MapPin size={32} className="mx-auto mb-3 text-cyan-300 animate-pulse" />

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Visit Our Innovation Studio
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-md mx-auto mb-6 leading-relaxed">
              Harare, Zimbabwe — built locally, deployed globally.
              Our workspace blends engineering, AI research, and design.
            </p>

            <motion.a
              whileHover={{ scale: 1.07 }}
              href="mailto:monecuerinc@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium
                        bg-gradient-to-r from-blue-600 to-cyan-400 hover:scale-105 shadow-lg"
            >
              <Send size={16} /> Book a Visit
            </motion.a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
