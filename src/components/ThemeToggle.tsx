"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const html = document.documentElement;
    html.classList.toggle("dark", next);
    html.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`grid place-items-center w-9 h-9 rounded-full transition-colors ${className}`}
      style={{ border: "1px solid var(--line-strong)", color: "var(--ink-soft)" }}
    >
      {/* Render icon only after mount so it matches the resolved theme (no flash). */}
      {mounted && (dark ? <Sun size={16} /> : <Moon size={16} />)}
    </button>
  );
}
