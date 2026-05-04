'use client'

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

const floatAnim = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 0.5, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const ContactPage = () => {
  return (
    <section className="
      relative py-16 px-4 md:px-12
      bg-white text-gray-900
      dark:bg-gradient-to-br dark:from-[#05070d] dark:via-[#070a12] dark:to-black
      dark:text-foreground
      overflow-hidden
    ">

      {/* 🌊 Animated Background */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]
        dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_65%)]
        animate-pulse
      " />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm">
          Let’s connect and build something amazing together
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          animate={floatAnim.animate}
          transition={floatAnim.transition}
          className="space-y-6"
        >

          {/* CONTACT INFO */}
          <div className="
            p-6 rounded-2xl
            bg-white/80 dark:bg-white/5
            border border-gray-200 dark:border-white/10
            backdrop-blur-xl shadow-lg
            hover:shadow-blue-500/30 transition-all duration-300
            hover:scale-[1.02]
          ">

            <h3 className="text-lg font-semibold mb-5">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaPhone className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  +8801745671928
                </span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaEnvelope className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  mdrumel.dev@email.com
                </span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Sylhet, Bangladesh
                </span>
              </div>

            </div>
          </div>

          {/* CTA CARD */}
          <div className="
            p-6 rounded-2xl
            bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
            border border-gray-200 dark:border-white/10
            backdrop-blur-xl shadow-lg
            hover:scale-[1.03] transition-all duration-300
          ">

            <h3 className="text-base font-semibold">
              Let’s build something amazing 🚀
            </h3>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              I’m open for freelance projects and collaborations.
            </p>

          </div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          animate={floatAnim.animate}
          transition={{ ...floatAnim.transition, delay: 0.2 }}
          className="
            p-6 rounded-2xl
            bg-white/80 dark:bg-white/5
            border border-gray-200 dark:border-white/10
            backdrop-blur-xl shadow-xl
            space-y-5
            hover:shadow-purple-500/30 transition-all duration-300
          "
        >

          {/* INPUTS */}
          {[
            { icon: FaUser, placeholder: "Your Name", type: "text" },
            { icon: FaEnvelope, placeholder: "Your Email", type: "email" },
          ].map((field, i) => {
            const Icon = field.icon;

            return (
              <div key={i} className="relative group">

                <Icon className="absolute left-3 top-3 text-gray-500 group-focus-within:text-blue-500 transition" />

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="
                    w-full pl-10 py-3 rounded-lg
                    bg-transparent
                    border border-gray-300 dark:border-white/10
                    focus:border-blue-500 outline-none
                    text-sm
                    transition-all duration-300
                    focus:shadow-md
                  "
                />

              </div>
            );
          })}

          {/* TEXTAREA */}
          <div className="relative group">

            <FaCommentDots className="absolute left-3 top-3 text-gray-500 group-focus-within:text-blue-500 transition" />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="
                w-full pl-10 py-3 rounded-lg
                bg-transparent
                border border-gray-300 dark:border-white/10
                focus:border-blue-500 outline-none
                resize-none text-sm
                transition-all duration-300
                focus:shadow-md
              "
            />

          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center gap-2
              w-full py-3 rounded-lg font-semibold text-sm
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              text-white shadow-md
              hover:shadow-blue-500/40 transition-all duration-300
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

export default ContactPage;