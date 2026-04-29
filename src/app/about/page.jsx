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
    <section className="relative py-20 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - STORY + SKILLS STACKED */}
          <div className="space-y-10">

            {/* STORY */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaCode className="text-blue-500 text-2xl" />
                </motion.div>

                <h3 className="text-xl font-semibold">My Journey</h3>
              </div>

            
            <p className="text-gray-500 dark:text-gray-400">
              I started my programming journey with curiosity about how websites are built and how everything works behind the screen.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              At first I struggled with HTML and CSS, but slowly I improved and moved into JavaScript and React.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              Now I focus on building modern, responsive and real-world web applications using Next.js and Tailwind CSS.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              My goal is to become a professional full-stack developer and work on impactful projects.
            </p>
            </motion.div>

            {/* SKILLS (NOW UNDER STORY) */}
            <div className="grid grid-cols-2 gap-4">

              {skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl"
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <Icon className="text-blue-500 text-3xl" />
                    </motion.div>

                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                );
              })}

            </div>

          </div>

          {/* RIGHT SIDE - TIMELINE */}
          <div className="relative">

            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-500/20" />

            <div className="space-y-10">

              {timeline.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="relative pl-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute left-0 top-2 w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center"
                    >
                      <Icon className="text-blue-500 text-sm" />
                    </motion.div>

                    <div className="p-5 rounded-2xl bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl">
                      <span className="text-blue-500 text-sm">{item.year}</span>
                      <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
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