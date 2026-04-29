"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2024 - Present",
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
    <section className="relative py-20 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-500">Education</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Academic background and learning journey
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">

        {/* LINE */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-500/20" />

        <div className="space-y-10">

          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12"
            >

              {/* ICON DOT */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="
                  absolute left-0 top-2 w-9 h-9 rounded-full
                  bg-blue-500/20 flex items-center justify-center
                "
              >
                <FaGraduationCap className="text-blue-500 text-sm" />
              </motion.div>

              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="
                  p-5 rounded-2xl
                  bg-white/5 dark:bg-white/5
                  border border-black/10 dark:border-white/10
                  backdrop-blur-xl
                "
              >
                <span className="text-blue-500 text-sm">
                  {item.year}
                </span>

                <h3 className="text-lg font-semibold mt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {item.institute}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {item.desc}
                </p>
              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}