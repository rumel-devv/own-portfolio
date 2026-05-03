"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2026 - Present",
    title: "BA (Honours) in Philosophy",
    institute: "National University, Bangladesh",
    desc: "Currently studying Philosophy in first year. Learning critical thinking, logic, ethics, and human reasoning.",
  },
  {
    year: "2024",
    title: "Higher Secondary Certificate (HSC)",
    institute: "Bangladesh Education Board",
    desc: "Completed HSC examination with focus on academic foundation and analytical skills.",
  },
  {
    year: "2022",
    title: "Secondary School Certificate (SSC)",
    institute: "Bangladesh Education Board",
    desc: "Completed SSC and built strong basics in science, mathematics, and general studies.",
  },
];

export default function Education() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-12 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#05070d] dark:via-[#070a12] dark:to-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          My <span className="text-blue-500">Education</span>
        </h2>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
          Academic journey & learning path
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto z-10">

        <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent" />

        <div className="space-y-8 md:space-y-12">

          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* DOT */}
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

              {/* CARD */}
              <div
                className="
                  group relative w-full md:w-[45%] p-4 md:p-5 rounded-xl
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  transition duration-300 hover:scale-[1.02]
                "
              >

                {/* 🔥 HOVER GLOW (like contact section) */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />

                <div className="relative z-10">

                  {/* YEAR */}
                  <div className="flex items-center gap-2 text-blue-500 mb-1">
                    <FaGraduationCap className="text-sm" />
                    <span className="text-xs md:text-sm">{item.year}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base md:text-lg font-semibold">
                    {item.title}
                  </h3>

                  {/* INSTITUTE */}
                  <p className="text-xs md:text-sm text-gray-400">
                    {item.institute}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}