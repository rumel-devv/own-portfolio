"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

// text animation
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const letter = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

function AnimatedText({ text }) {
  return (
    <motion.span
      key={text}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="inline-flex"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4  bg-background text-foreground dark:bg-gradient-to-br sm:px-8 lg:px-16 xl:px-32 dark:from-[#0b0f1a] dark:via-[#05070d] dark:to-black overflow-hidden">
      {/* BACKGROUND */}
      <StarBackground />

      <div className="relative z-10 w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-black/10 dark:border-white/20 backdrop-blur-md"
          >
            <FaCircle className="text-green-400 text-xs animate-pulse" />
            <span className="text-sm">Available for Work</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I am <span className="text-blue-500">Muhammed Rumel</span>
          </motion.h1>

          {/* Role */}
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[index]}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-300"
            >
              I am a{" "}
              <span className="text-purple-500 font-semibold">
                <AnimatedText text={roles[index]} />
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            I build modern, responsive, and high-performance web applications
            using React, Next.js, and modern frontend tools.
          </motion.p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-2 mt-4 justify-center lg:justify-start">
            {[
              { icon: FaFacebook, link: "https://www.facebook.com/mdrumel.ahmed.988711" },
              { icon: FaWhatsapp, link: "https://wa.me/8801745671928" },
              { icon: FaGithub, link: "https://github.com/rumel-devv" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/muhammed-rumel" },
              { icon: FaEnvelope, link: "mailto:mdrumel.dev@gmail.com" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  // 🔥 animation
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="
          w-11 h-11 flex items-center justify-center
          rounded-full border-2 border-blue-700/80
          text-white
          bg-transparent
          relative overflow-hidden
          transition
        "
                >
                  {/* 🔥 hover glow effect */}
                  <span className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-10 transition rounded-full"></span>

                  {/* icon */}
                  <Icon className="relative z-10 text-lg" />
                </motion.a>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition w-full sm:w-auto"
              >
                <HiRefresh /> Hire Me
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-gray-400 dark:border-white/30 hover:bg-black/5 dark:hover:bg-white/10 transition font-semibold w-full sm:w-auto"
            >
              <FaDownload /> Download Resume
            </motion.button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
            {/* glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-40 animate-pulse"></div>

            {/* ring */}
            <div className="absolute -inset-2 rounded-full border border-black/10 dark:border-white/20"></div>

            {/* smooth floating image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src={profileImg}
                alt="profile"
                className="rounded-full border-4 border-black/10 dark:border-white/20 w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
