"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaCircle,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiRefresh } from "react-icons/hi";

import profileImg from "@/assets/banner.png";
import StarBackground from "./StarBackground";
import Link from "next/link";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "UI/UX Enthusiast",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const socials = [
    { icon: FaFacebook, link: "#" },
    { icon: FaWhatsapp, link: "#" },
    { icon: FaGithub, link: "#" },
    { icon: FaLinkedin, link: "#" },
    { icon: FaEnvelope, link: "#" },
  ];

  return (
    <section className="relative flex items-center px-4 sm:px-6 lg:px-16 py-20 md:py-30 overflow-hidden bg-background text-foreground dark:bg-gradient-to-br dark:from-[#0b0f1a] dark:via-[#05070d] dark:to-black">

      {/* BACKGROUND (SUBTLE FIXED) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)] animate-pulse opacity-60" />
      <StarBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left space-y-3">

          {/* STATUS BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <FaCircle className="text-green-400 text-xs animate-pulse" />
            <span className="text-xs sm:text-sm">Available for Work</span>
          </div>

          {/* NAME */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I am{" "}
            <span className="text-blue-400">Muhammed Rumel</span>
          </h1>

          {/* ROLE */}
          <p className="text-sm text-gray-500 dark:text-gray-300">
            I am a{" "}
            <span className="text-purple-500 font-semibold">
              {roles[index]}
            </span>
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
            I build modern, responsive, and high-performance web applications.
          </p>

          {/* SOCIAL ICONS (FIXED LIGHT + DARK) */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start mt-3">

            {socials.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    w-10 h-10 flex items-center justify-center rounded-full
                    border border-gray-300 dark:border-white/15
                    bg-white/70 dark:bg-white/5
                    text-gray-700 dark:text-gray-200
                    hover:bg-blue-500 hover:text-white
                    backdrop-blur-md transition
                  "
                >
                  <Icon className="text-lg" />
                </motion.a>
              );
            })}
          </div>

          {/* BUTTONS (RESPONSIVE FIXED) */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center lg:justify-start">

            <Link href="/contact">
              <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-500 text-white text-sm flex items-center justify-center gap-2">
                <HiRefresh /> Hire Me
              </button>
            </Link>

            <button className="w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-300 dark:border-white/20 text-sm flex items-center justify-center gap-2">
              <FaDownload /> Resume
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE (SPACE FIXED + CLEAN GLOW) */}
        <div className="flex-1 flex justify-center lg:justify-end">

          <div className="relative w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px]">

            {/* CLEAN GLOW */}
            <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-25" />

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative"
            >
              <Image
                src={profileImg}
                alt="profile"
                className="rounded-full border-4 border-white/10 w-full h-auto"
                priority
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}