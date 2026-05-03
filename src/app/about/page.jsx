"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development Journey",
    desc: "Began with HTML, CSS and curiosity about how websites work.",
    icon: FaCode,
  },
  {
    year: "2025",
    title: "JavaScript & React Developer",
    desc: "Built interactive frontend projects using React and modern JS.",
    icon: SiReact,
  },
  {
    year: "2026",
    title: "Next.js Focused Developer",
    desc: "Building production-level apps with Next.js and Tailwind CSS.",
    icon: SiNextdotjs,
  },
];

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
];

export default function About() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-12 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            {/* STORY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3"
            >
              <div className="flex items-center gap-2">
                <FaCode className="text-blue-500 text-xl" />
                <h3 className="text-lg md:text-xl font-semibold">
                  My Journey
                </h3>
              </div>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                I started with curiosity about how websites work and slowly moved into frontend development.
              </p>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                From HTML & CSS to JavaScript and React, I kept improving step by step.
              </p>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Now I build modern apps using Next.js and Tailwind CSS.
              </p>
            </motion.div>

            {/* SKILLS */}
            <div className="grid grid-cols-2 gap-3">

              {skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg 
                    bg-white/5 border border-white/10 backdrop-blur-md"
                  >
                    <Icon className="text-blue-500 text-2xl md:text-3xl" />
                    <span className="text-xs md:text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-500/20" />

            <div className="space-y-6 md:space-y-8">

              {timeline.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Icon className="text-blue-500 text-xs md:text-sm" />
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">

                      <span className="text-blue-500 text-xs md:text-sm">
                        {item.year}
                      </span>

                      <h4 className="text-base md:text-lg font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}