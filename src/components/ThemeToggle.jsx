"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDark ? (
        <FaSun className="text-[#09a1cb] text-xl" />
      ) : (
        <FaMoon className="text-[#09a1cb] text-xl" />
      )}
    </button>
  );
}