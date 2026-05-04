"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

import {
  FiHome,
  FiUser,
  FiCode,
  FiLayers,
  FiBook,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "projects", label: "Projects", icon: FiLayers },
  { id: "skills", label: "Skills", icon: FiCode },
  { id: "education", label: "Education", icon: FiBook },
  { id: "contact", label: "Contact", icon: FiMail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          current = item.id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4 p-3 rounded-2xl 
        bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg">

          <ThemeToggle />

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-11 h-11 flex items-center justify-center rounded-full cursor-pointer transition
                ${
                  active === item.id
                    ? "bg-[#13CBFC] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#13CBFC]/30"
                }`}
              >
                <Icon size={20} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden fixed top-4 w-full px-4 z-50 flex justify-between items-center">
        <ThemeToggle />

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE MENU (GLASS EFFECT) ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden fixed top-0 left-0 w-full z-40
              bg-white/70 dark:bg-black/60
              backdrop-blur-xl backdrop-saturate-150
              border-b border-white/20 dark:border-white/10
              shadow-lg rounded-b-2xl
              px-6 pt-20 pb-8
            "
          >
            <div className="flex flex-col gap-6">

              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center gap-3 cursor-pointer text-lg transition
                      ${
                        active === item.id
                          ? "text-[#13CBFC] font-semibold"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    `}
                  >
                    <Icon />
                    {item.label}
                  </div>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}