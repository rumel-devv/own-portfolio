"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "UI/UX", level: 75 },
];

export default function About() {
  return (
    <section
      className="
        relative py-20 px-6 md:px-16
        bg-background text-foreground
        dark:bg-gradient-to-br dark:from-[#0b0f1a] dark:via-[#05070d] dark:to-black
        transition-colors duration-300
      "
    >
      {/* container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I am a passionate Frontend Developer focused on building modern,
            responsive, and high-performance web applications using React,
            Next.js, and Tailwind CSS. I love turning ideas into beautiful
            digital experiences with clean UI and smooth animations.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Currently, I am improving my full-stack skills and working on real-world projects to become a professional software engineer.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition">
              Hire Me
            </button>

            <button className="px-6 py-3 border border-gray-400 dark:border-white/30 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* RIGHT SKILLS SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h3 className="text-2xl font-semibold mb-4">
            My Skills
          </h3>

          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* progress bar */}
              <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}