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
    image: "/projects/pixen.png", // ✅ FIXED (from public folder)
    tech: [
      { name: "Next", icon: TbBrandNextjs },
      { name: "Talwind", icon: FaCss3Alt },
      { name: "Code", icon: FaCode },
    ],
    demo: "https://pixen-one.vercel.app",
    github: "#",
  },
  {
    title: "E-commerce App",
    desc: "Full stack shopping platform with authentication & cart system.",
    image: "/projects/p2.png",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Database", icon: FaDatabase },
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    desc: "Dynamic blog system with admin dashboard and CMS features.",
    image: "/projects/p3.png",
    tech: [
      { name: "HTML", icon: FaHtml5 },
      { name: "React", icon: FaReact },
      { name: "Project", icon: FaProjectDiagram },
    ],
    demo: "#",
    github: "#",
  },
];

const ProjectsPage = () => {
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
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Real-world applications I built
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="
              group relative rounded-2xl overflow-hidden
              bg-white/5 border border-black/10 dark:border-white/10
              backdrop-blur-xl
            "
          >

            {/* IMAGE */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 pt-2">

                {project.tech.map((t, idx) => {
                  const Icon = t.icon;

                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      <Icon className="text-blue-400 text-sm" />
                      {t.name}
                    </span>
                  );
                })}

              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-3">

                {/* ✅ FIXED: external link */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                    bg-blue-500 hover:bg-blue-600 text-white transition
                  "
                >
                  <FiEye />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                    border border-white/20 hover:bg-white/10 transition
                  "
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
};

export default ProjectsPage;