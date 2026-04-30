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
    <section className="relative py-24 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#05070d] dark:via-[#070a12] dark:to-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-500">Education</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Academic journey & learning path
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto z-10">

        {/* center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent" />

        <div className="space-y-20">

          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className={`relative flex items-center ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* DOT */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)]"
              />

              {/* CARD */}
              <div
                className="
                  w-full md:w-[45%]
                  p-6 rounded-2xl relative
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:scale-[1.02] transition
                "
              >

                {/* hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

                <div className="relative space-y-2">

                  {/* header */}
                  <div className="flex items-center gap-2 text-blue-500">
                    <FaGraduationCap />
                    <span className="text-sm font-medium">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.institute}
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed">
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