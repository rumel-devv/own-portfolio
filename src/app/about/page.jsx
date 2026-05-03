"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development Journey",
    desc: "Began with HTML, CSS and curiosity about how websites work.",
    icon: FaCode,
  },
  {
    year: "2025",
    title: "Frontend Developer",
    desc: "Built interactive and responsive websites using modern JavaScript.",
    icon: FaCode,
  },
  {
    year: "2026",
    title: "Focused on Modern Web Apps",
    desc: "Now building real-world, scalable and high-performance applications.",
    icon: FaCode,
  },
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
              className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4"
            >
              <div className="flex items-center gap-2">
                <FaCode className="text-blue-500 text-xl" />
                <h3 className="text-lg md:text-xl font-semibold">
                  My Journey
                </h3>
              </div>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                My journey into web development started with pure curiosity — I always wondered how websites actually work behind the scenes.
              </p>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                In the beginning, I explored <span className="text-blue-400">WordPress</span> and learned how to build websites without writing code. This gave me a basic understanding of layouts, design, and user experience.
              </p>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                But I quickly realized that to truly create powerful and customized applications, I needed to learn programming. That’s when I started learning HTML, CSS, and JavaScript seriously.
              </p>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Step by step, I moved into frontend development, building responsive and interactive user interfaces and improving my problem-solving skills through real projects.
              </p>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Now, I focus on building modern, fast, and scalable web applications while continuously learning new technologies and improving my development skills every day.
              </p>
            </motion.div>

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