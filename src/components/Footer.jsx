"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const icons = [
    { icon: FaGithub, link: "https://github.com/rumel-devv" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/muhammed-rumel" },
    { icon: FaFacebook, link: "https://www.facebook.com/mdrumel.ahmed.988711" },
    { icon: FaEnvelope, link: "mailto:mdrumel.dev@gmail.com" },
  ];

  return (
    <footer className="relative mt-14 px-4 md:px-12 py-10 bg-background text-foreground dark:bg-[#05070d]">

      {/* top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT NAME */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            <span className="text-blue-500">Muhammed</span>{" "}
            <span className="text-white dark:text-white/90">
              Rumel Ahmed
            </span>
          </h2>

          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Frontend Developer • React • Next.js • UI Builder
          </p>
        </motion.div>

        {/* SOCIAL ICONS (GRADIENT BORDER + ANIMATION) */}
        <div className="flex items-center gap-4">

          {icons.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}

                whileHover={{
                  scale: 1.18,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}

                className="relative w-11 h-11 flex items-center justify-center rounded-full"
              >

                {/* GRADIENT BORDER */}
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">

                  {/* INNER GLASS */}
                  <span className="flex items-center justify-center w-full h-full rounded-full bg-[#05070d]/80 backdrop-blur-md text-gray-300 hover:text-white transition">

                    <Icon className="text-lg" />

                  </span>

                </span>

              </motion.a>
            );
          })}

        </div>
      </div>

      {/* bottom text */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        © {new Date().getFullYear()} Muhammed Rumel Ahmed. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;