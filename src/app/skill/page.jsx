"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", level: 90, icon: SiJavascript },
  { name: "React", level: 88, icon: SiReact },
  { name: "Next.js", level: 85, icon: SiNextdotjs },
  { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
];

export default function SkillsSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Technologies I use to build modern web apps
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="
                p-6 rounded-2xl
                bg-white/5 dark:bg-white/5
                border border-black/10 dark:border-white/10
                backdrop-blur-xl
              "
            >

              {/* TOP */}
              <div className="flex items-center gap-3 mb-4">

                {/* animated icon */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="text-blue-500 text-3xl" />
                </motion.div>

                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                />
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}