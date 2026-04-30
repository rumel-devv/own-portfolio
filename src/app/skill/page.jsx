"use client";

import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaCode,
  FaWordpress,
  FaPuzzlePiece,
  FaMagic,
  FaLock,
} from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: FaCss3Alt },
  { name: "MongoDB", icon: FaDatabase },
];

const tools = [
  { name: "VS Code", icon: FaCode },
  { name: "Figma", icon: FaFigma },
  { name: "WordPress", icon: FaWordpress },
  { name: "Elementor", icon: FaPuzzlePiece },
  { name: "Crocoblock", icon: FaPuzzlePiece },
  { name: "Framer Motion", icon: FaMagic },
  { name: "Animate.css", icon: FaMagic },
  { name: "Better Auth", icon: FaLock },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Technologies & tools I work with
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-14">

        {/* SKILLS */}
        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="
                  group relative p-6 rounded-2xl
                  bg-white/5 border border-black/10 dark:border-white/10
                  backdrop-blur-xl overflow-hidden
                "
              >

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

                <div className="relative flex items-center gap-4">

                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Icon className="text-blue-500 text-4xl" />
                  </motion.div>

                  {/* 🔥 FIX: single line text */}
                  <h3 className="text-xl font-semibold whitespace-nowrap">
                    {skill.name}
                  </h3>

                </div>

                {/* line */}
                <div className="mt-4 h-[3px] w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden relative">

                  <div className="absolute left-0 top-0 h-full w-[70%] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40" />

                  <div className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-center text-xl font-semibold mb-8 text-gray-300">
            Tools & Platforms
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {tools.map((tool, i) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="
                    flex items-center gap-2 px-5 py-2 rounded-full
                    bg-white/5 border border-black/10 dark:border-white/10
                    backdrop-blur-xl hover:scale-110 transition
                  "
                >
                  <Icon className="text-blue-500 text-lg" />
                  <span className="text-sm whitespace-nowrap">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}