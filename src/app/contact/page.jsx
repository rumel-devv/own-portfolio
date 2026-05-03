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

const ContactPage = () => {
  return (
    <section className="relative py-14 md:py-16 px-4 md:px-12 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#05070d] dark:via-[#070a12] dark:to-black overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-10 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          Feel free to contact me anytime
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">

        {/* LEFT */}
        <div className="space-y-5">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm text-gray-400">

              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-500 text-sm" />
                <span>+880 1XXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500 text-sm" />
                <span>your@email.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500 text-sm" />
                <span>Sylhet, Bangladesh</span>
              </div>

            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-5 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-base font-semibold">
              Let’s build something amazing 🚀
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              I’m available for freelance work and collaborations.
            </p>
          </motion.div>

        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4"
        >

          {/* NAME */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-9 py-2.5 rounded-lg bg-transparent border border-white/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-sm" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-9 py-2.5 rounded-lg bg-transparent border border-white/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-gray-400 text-sm" />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full pl-9 py-2.5 rounded-lg bg-transparent border border-white/10 focus:border-blue-500 outline-none resize-none text-sm"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-semibold text-sm
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
          >
            <FaPaperPlane />
            Send Message
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactPage;