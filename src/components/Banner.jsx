"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiRefresh } from "react-icons/hi";

import profileImg from "@/assets/banner.png";
import StarBackground from "./StarBackground";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "UI/UX Enthusiast",
];

// letter animation
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, x: 40 },
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative min-h-screen  flex items-center justify-center px-6 md:px-18 
        bg-background text-foreground
        dark:bg-linear-to-br dark:from-[#0b0f1a] dark:via-[#05070d] dark:to-black
        overflow-hidden transition-colors duration-300
      "
    >
      {/* BACKGROUND */}
      <StarBackground />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-8 ">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left space-y-4">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/10 border border-black/10 dark:border-white/20 mb-4
            "
          >
            <FaCircle className="text-green-400 text-xs animate-pulse" />
            <span className="text-sm">Available for Work</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I am{" "}
            <span className="text-blue-500">Muhammed Rumel</span>
          </motion.h1>

          {/* ROLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[index]}
              className="text-lg text-gray-500 dark:text-gray-300"
            >
              I am a{" "}
              <span className="text-purple-500 font-semibold">
                <AnimatedText text={roles[index]} />
              </span>
            </motion.div>
          </AnimatePresence>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 max-w-xl"
          >
            I build modern, responsive, and high-performance web applications using React, Next.js, and modern frontend tools.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2 px-6 py-3 rounded-xl
                bg-blue-500 hover:bg-blue-600
                text-white font-semibold transition
              "
            >
              <HiRefresh /> Hire Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2 px-6 py-3 rounded-xl
                border border-gray-400 dark:border-white/30
                hover:bg-black/5 dark:hover:bg-white/10
                transition font-semibold
              "
            >
              <FaDownload /> Download Resume
            </motion.button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            {/* glow */}
            <div className="absolute -inset-6 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-40 animate-pulse"></div>

            {/* ring */}
            <div className="absolute -inset-2 rounded-full border border-black/10 dark:border-white/20 animate-pulse"></div>

            <Image
              src={profileImg}
              width={440}
              height={440}
              alt="profile"
              className="relative rounded-full border-4 border-black/10 dark:border-white/20"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Banner;