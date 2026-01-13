"use client";

import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Run this ONLY once when the component mounts (the browser starts)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Run this every time the 'theme' state changes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
 <button 
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle Theme"
    >
      <div className="text-xl">
        {theme === "light" ? (
          <LuMoon className="text-indigo-600" />
        ) : (
          <LuSun className="text-yellow-400" />
        )}
      </div>
    </button>
  );
}