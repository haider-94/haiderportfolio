import React from "react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line-strong)" }}>
      <div className="wrap py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © {profile.name} · Built &amp; designed from scratch.
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
