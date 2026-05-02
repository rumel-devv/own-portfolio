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
    <footer className="relative mt-20 px-6 md:px-16 py-12 bg-background text-foreground dark:bg-[#05070d]">

      {/* TOP BORDER (theme perfect) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400/40 dark:via-white/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-2xl font-bold tracking-wide">
            Muhammed <span className="text-blue-500">Rumel</span> Ahmed
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Frontend Developer • React • Next.js
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-xl">
          {icons.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-full
                  border border-gray-300 dark:border-white/20
                  text-gray-700 dark:text-white
                  bg-white/60 dark:bg-white/5
                  hover:bg-blue-500 hover:text-white
                  transition
                  shadow-sm
                "
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
        © {new Date().getFullYear()} Muhammed Rumel Ahmed. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;