"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactHome = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#05070d] dark:via-[#070a12] dark:to-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s <span className="text-blue-500">Talk</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Got a project? I’m just one message away
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">

        {/* LEFT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4">

            <h3 className="text-xl font-semibold">
              Contact Info
            </h3>

            <div className="space-y-3 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500" />
                <span>+880 1XXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>your@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>Sylhet, Bangladesh</span>
              </div>

            </div>
          </div>

          {/* highlight card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">
              Available for Freelance Work 🚀
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              I can build modern websites, dashboards, and full-stack apps.
            </p>
          </div>

        </motion.div>

        {/* RIGHT - MINI FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4"
        >

          {/* NAME */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 py-3 rounded-lg bg-transparent border border-white/10 focus:border-blue-500 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 py-3 rounded-lg bg-transparent border border-white/10 focus:border-blue-500 outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full pl-10 py-3 rounded-lg bg-transparent border border-white/10 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex items-center justify-center gap-2 w-full
              py-3 rounded-lg font-semibold
              bg-blue-500 hover:bg-blue-600 text-white transition
            "
          >
            <FaPaperPlane />
            Send Message
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactHome;