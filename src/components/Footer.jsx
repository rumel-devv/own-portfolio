

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 text-center 
    bg-background text-foreground border-t border-black/10 dark:border-white/10">

      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Muhammed Rumel Ahmed. All rights reserved.
      </p>

    </footer>
  );
}