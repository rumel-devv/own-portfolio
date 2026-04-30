"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 px-6 md:px-16 py-10 bg-background text-foreground dark:bg-[#05070d] border-t border-white/10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-xl font-bold">
            Muhammed <span className="text-blue-500  mr-1.5">Rumel</span>
           Ahmed</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Frontend Developer • React • Next.js
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-lg">

          <a href="#" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        © {new Date().getFullYear()} Muhammed Rumel Ahmed. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;