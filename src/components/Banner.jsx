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

const roles = ["Frontend Developer", "MERN Stack Developer"];

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

      <StarBackground />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* IMAGE */}
        <div className="relative w-[250px] sm:w-[360px] mb-6">

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-40 scale-110" />

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
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

        {/* 🔥 BADGE (ANIMATED + THEME SAFE) */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            inline-flex items-center gap-2 px-3 py-1 rounded-full
            bg-white/10 dark:bg-white/5
            border border-gray-300/40 dark:border-white/10
            backdrop-blur-md
          "
        >
          <FaCircle className="text-green-500 dark:text-green-400 text-xs animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300">
            Open to Freelance & Remote Opportunities
          </span>
        </motion.div>

        {/* NAME */}
        <h1 className="text-2xl sm:text-4xl font-bold mt-4">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Muhammed Rumel
          </span>
        </h1>

        {/* ROLE */}
        <div className="text-sm sm:text-base mt-2">
          <span className="text-gray-700 dark:text-gray-400">
            Specialized as a {" "}
          </span>

          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            <AnimatePresence mode="wait">
              <AnimatedText text={roles[index]} key={roles[index]} />
            </AnimatePresence>
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 mt-3 leading-relaxed">
          I design and develop modern, responsive, and high-performance web applications
          with a strong focus on clean UI, scalability, and smooth user experience.
        </p>

        {/* SOCIALS (FIXED LIGHT + DARK MODE) */}
 <div className="flex gap-3 flex-wrap justify-center mt-5">

  {socials.map((item, i) => {
    const Icon = item.icon;

    return (
      <motion.a
        key={i}
        href={item.link}
        target="_blank"
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: i * 0.06,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.18,
          y: -6,
        }}
        whileTap={{ scale: 0.95 }}
        className="
          p-[1px] rounded-full border-2
          border-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        "
      >
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full

            bg-white/90 dark:bg-white/5
            backdrop-blur-md

            border border-gray-300/50 dark:border-white/10

            text-gray-800 dark:text-gray-200

            hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500

            transition
          "
        >
          <Icon className="text-lg" />
        </motion.div>
      </motion.a>
    );
  })}

</div>
        {/* BUTTONS */}
        <div className="flex flex-row gap-3 mt-6">

          <Link href="https://wa.me/8801745671928">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <HiRefresh /> Hire Me
            </motion.button>
          </Link>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-xl border border-gray-300 dark:border-white/20 text-sm flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            <FaDownload /> Resume
          </motion.a>

        </div>

      </div>
    </section>
  );
}