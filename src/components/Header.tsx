"use client";

import React, { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 h-[var(--h-header)] flex items-center transition-colors"
      style={{
        borderBottom: `1px solid ${scrolled ? "var(--line-strong)" : "transparent"}`,
        backgroundColor: scrolled ? "var(--header-scrolled-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="wrap flex items-center justify-between w-full">
        <a
          href="#top"
          className="flex items-center gap-2.5 group"
          aria-label={profile.name}
        >
          <span
            className="grid place-items-center w-8 h-8 text-sm font-serif"
            style={{
              background: "var(--ink)",
              color: "var(--paper)",
              borderRadius: 3,
            }}
          >
            H
          </span>
          <span className="font-serif text-lg leading-none hidden sm:block">
            {profile.name}
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm link-underline"
              style={{ color: "var(--ink-soft)" }}
            >
              {item.text}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost !py-2 !px-4">
            Résumé
          </a>
          <ThemeToggle />
        </nav>

        {/* mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
          className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block w-6 h-[1.5px] transition-transform duration-300"
            style={{
              background: "var(--ink)",
              transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-[1.5px] transition-opacity duration-300"
            style={{ background: "var(--ink)", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] transition-transform duration-300"
            style={{
              background: "var(--ink)",
              transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className="fixed inset-0 top-[var(--h-header)] z-40 md:hidden transition-all duration-300"
        style={{
          background: "var(--paper)",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <nav className="wrap flex flex-col pt-8 gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl py-3"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              <span className="eyebrow mr-4">0{i + 1}</span>
              {item.text}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-solid mt-8 justify-center"
          >
            Download Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
