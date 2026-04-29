"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const icons = [
  SiJavascript,
  FaReact,
  SiNextdotjs,
  VscVscode,
  SiTailwindcss,
  SiTypescript,
  FaGithub,
  SiNodedotjs,
  FaHtml5,
  FaCss3Alt,
  SiFigma,
];

export default function StarBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* soft glow background */}
      <div className="
        absolute inset-0
        bg-gradient-radial from-blue-500/4 via-transparent to-transparent
        dark:from-purple-500
      " />

      {icons.map((Icon, i) => {
        const size = Math.random() * 34 + 18;

        return (
          <motion.div
            key={i}
            className="
              absolute
              text-blue-500
              dark:text-white
            "
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              fontSize: size,
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, 30, -30, 0],
              rotate: [0, 20, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}