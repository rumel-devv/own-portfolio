"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye, FiGithub } from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/p1.png",
    tech: [
      { name: "React", icon: FaReact },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Code", icon: FaCode },
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce App",
    desc: "Full stack shopping platform with auth & cart system.",
    image: "/projects/p2.png",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Node", icon: FaNodeJs },
      { name: "DB", icon: FaDatabase },
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    desc: "Dynamic blog system with admin dashboard.",
    image: "/projects/p3.png",
    tech: [
      { name: "HTML", icon: FaHtml5 },
      { name: "React", icon: FaReact },
      { name: "CMS", icon: FaProjectDiagram },
    ],
    demo: "#",
    github: "#",
  },
];

export default function ProjectsHome() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#070a12] dark:via-[#05070d] dark:to-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Some real-world work I’ve built
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              group relative rounded-2xl overflow-hidden
              bg-white/5 border border-white/10
              backdrop-blur-xl
              hover:-translate-y-1 transition
            "
          >

            {/* IMAGE */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">

              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 pt-1">

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
              <div className="flex gap-3 pt-2">

                <a
                  href={project.demo}
                  className="
                    flex items-center gap-2 px-3 py-2 text-xs rounded-lg
                    bg-blue-500 hover:bg-blue-600 text-white transition
                  "
                >
                  <FiEye />
                  Live
                </a>

                <a
                  href={project.github}
                  className="
                    flex items-center gap-2 px-3 py-2 text-xs rounded-lg
                    border border-white/20 hover:bg-white/10 transition
                  "
                >
                  <FiGithub />
                  Code
                </a>

              </div>

            </div>

            {/* glow hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}