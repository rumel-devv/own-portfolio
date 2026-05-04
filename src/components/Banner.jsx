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

const roles = ["Frontend Developer", "Mern Stack Developer"];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedText({ text }) {
  return (
    <motion.span
      key={text}
      variants={container}
      initial="hidden"
      animate="visible"
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

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { icon: FaFacebook, link: "https://www.facebook.com/mdrumel.ahmed.988711" },
    { icon: FaWhatsapp, link: "https://wa.me/8801745671928" },
    { icon: FaGithub, link: "https://github.com/rumel-devv" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/muhammed-rumel" },
    { icon: FaEnvelope, link: "mailto:mdrumel.dev@gmail.com" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-background text-foreground dark:bg-gradient-to-br dark:from-[#0b0f1a] dark:via-[#05070d] dark:to-black">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] animate-pulse opacity-60" />
      <StarBackground />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* 🔥 IMAGE TOP */}
        <div className="relative w-[160px] sm:w-[250px] mb-6">

          {/* gradient circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-40 scale-110" />

          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 1.5, 0],
            }}
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
              className="rounded-full border-4 border-white/10 shadow-xl"
              priority
            />
          </motion.div>
        </div>

        {/* badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-white/10 border border-green-200 dark:border-white/10 backdrop-blur-md">
          <FaCircle className="text-green-500 dark:text-green-400 text-xs animate-pulse" />
          <span className="text-xs sm:text-sm text-green-700 dark:text-gray-300">
            Available for Work
          </span>
        </div>

        {/* name */}
        <h1 className="text-2xl sm:text-4xl font-bold mt-4">
          Hi, I am <span className="text-blue-400">Muhammed Rumel</span>
        </h1>

        {/* role */}
        <div className="text-sm sm:text-base mt-2">
          <span className="text-gray-600 dark:text-gray-300">
            I am a{" "}
          </span>
          <span className="text-purple-500 font-semibold">
            <AnimatePresence mode="wait">
              <AnimatedText text={roles[index]} key={roles[index]} />
            </AnimatePresence>
          </span>
        </div>

        {/* description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
          I build modern, responsive, and high-performance web applications
          with clean UI and smooth user experience.
        </p>

        {/* socials */}
        <div className="flex gap-3 flex-wrap justify-center mt-5">
          {socials.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                  boxShadow: "0px 0px 18px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/15 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white backdrop-blur-md transition"
              >
                <Icon className="text-lg" />
              </motion.a>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">

          <Link href="https://wa.me/8801745671928">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <HiRefresh /> Hire Me
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-xl border border-gray-300 dark:border-white/20 text-sm flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <FaDownload /> Resume
          </motion.button>

        </div>
      </div>
    </section>
  );
}