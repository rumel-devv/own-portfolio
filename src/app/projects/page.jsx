"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye, FiGithub } from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaProjectDiagram,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const projects = [
  {
    title: "AI photo generatin website",
    desc: "Modern personal portfolio built with Next.js and Tailwind CSS.",
    image: "/pixgen.png",
    tech: [
      { name: "Next", icon: TbBrandNextjs },
      { name: "Tailwind", icon: FaCss3Alt },
      { name: "Database", icon: FaDatabase },
      { name: "Code", icon: FaCode },
    ],
    demo: "https://pixen-one.vercel.app",
    github: "#",
  },
  {
    title: "Payyo Mobile Banking App",
    desc: "Full stack banking platform with authentication & cart system.",
    image: "/payo.png",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Code", icon: FaCode },
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Dragon News 404",
    desc: "Full stack Dynamic news website with authentication syestem.",
    image: "/dragon.png",
    tech: [
      { name: "HTML", icon: FaHtml5 },
      { name: "React", icon: FaReact },
      { name: "Project", icon: FaProjectDiagram },
      { name: "Database", icon: FaDatabase },
    ],
    demo: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section
      className="
        py-12 md:py-16
        px-4 md:px-12
        bg-background text-foreground
        dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black
      "
    >

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
          Real-world applications I built
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="
              group relative rounded-xl overflow-hidden
              bg-white/5 border border-white/10
              backdrop-blur-xl
            "
          >

            {/* IMAGE */}
            <div className="relative w-full h-40 md:h-52 overflow-hidden">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-4 md:p-5 space-y-2">

              <h3 className="text-base md:text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 pt-1">

                {project.tech.map((t, idx) => {
                  const Icon = t.icon;

                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-[10px] md:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      <Icon className="text-blue-400 text-xs" />
                      {t.name}
                    </span>
                  );
                })}

              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 pt-2">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs md:text-sm bg-blue-500 hover:bg-blue-600 text-white transition"
                >
                  <FiEye />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs md:text-sm border border-white/20 hover:bg-white/10 transition"
                >
                  <FiGithub />
                  GitHub
                </a>

              </div>

            </div>

            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}