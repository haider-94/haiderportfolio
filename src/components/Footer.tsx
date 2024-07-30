"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SocialMedia } from "./SocialMedia";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="relative z-10 flex-none w-full py-6 space-y-3 md:space-y-4 px-page fcenter"
      style={{
        display: pathname === "/admin" ? "none" : "flex",
      }}
    >
      <div>
        <SocialMedia size="sm" />
      </div>
    </footer>
  );
}
