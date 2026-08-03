import Reveal from "@/components/Reveal";
import {
  profile,
  projects,
  experience,
  skillGroups,
  strengths,
  education,
} from "@/data/portfolio";
import { getTechIcon } from "@/data/techIcons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";

function TechChip({ label }: { label: string }) {
  const tech = getTechIcon(label);
  const Icon = tech?.Icon;
  return (
    <span className="chip">
      {Icon && (
        <Icon
          size={13}
          {...(tech?.color ? { color: tech.color } : {})}
          style={{ flexShrink: 0 }}
          aria-hidden
        />
      )}
      {label}
    </span>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="section-label mb-8">
      <span className="eyebrow">{n}</span>
      <span className="rule flex-1" style={{ maxWidth: 40 }} />
      <span className="eyebrow" style={{ color: "var(--ink)" }}>
        {title}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      {/* ---------- HERO ---------- */}
      <section className="wrap pt-16 pb-20 md:pt-24 md:pb-28">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: profile.available ? "var(--accent)" : "var(--muted)" }}
            />
            <span className="eyebrow">{profile.availableText}</span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="display text-[3.4rem] leading-[0.95] sm:text-[5rem] md:text-[6.6rem] lg:text-[7.6rem]">
            {profile.name.split(" ")[0]}
            <br />
            <span className="accent italic">{profile.name.split(" ").slice(1).join(" ")}.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
          <Reveal delay={120} className="md:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {profile.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="#work" className="btn btn-solid">
                View selected work
                <span aria-hidden>↓</span>
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Download résumé
              </a>
            </div>
          </Reveal>

          <Reveal delay={180} className="md:col-span-5 md:col-start-9">
            <dl className="text-sm" style={{ borderTop: "1px solid var(--line-strong)" }}>
              {[
                ["Role", `${profile.role}`],
                ["Focus", profile.focus],
                ["Based in", profile.location],
                ["Email", profile.email],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 py-3"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <dt style={{ color: "var(--muted)" }}>{k}</dt>
                  <dd className="text-right" style={{ color: "var(--ink)" }}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- WORK ---------- */}
      <section id="work" className="wrap py-16 md:py-24 scroll-mt-20">
        <Reveal>
          <SectionLabel n="01" title="Selected Work" />
        </Reveal>
        <div>
          {projects.map((p, i) => {
            const Row = (
              <>
                <div className="grid grid-cols-12 items-baseline gap-3 py-6 md:py-8">
                  <span
                    className="col-span-2 md:col-span-1 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.index}
                  </span>
                  <div className="col-span-10 md:col-span-5">
                    <div className="flex items-center gap-3">
                      <h3 className="work-title text-3xl md:text-5xl leading-none">
                        {p.title}
                      </h3>
                      <span className="work-arrow text-2xl accent" aria-hidden>
                        ↗
                      </span>
                    </div>
                    <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                      {p.role} · {p.year}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-6 md:pl-6">
                    <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      {p.blurb}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.stack.map((s) => (
                        <TechChip key={s} label={s} />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
            return (
              <Reveal key={p.index} delay={i * 40}>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="work-row block px-2 md:px-4 -mx-2 md:-mx-4"
                  >
                    {Row}
                  </a>
                ) : (
                  <div className="work-row px-2 md:px-4 -mx-2 md:-mx-4">{Row}</div>
                )}
              </Reveal>
            );
          })}
          <div className="rule" style={{ background: "var(--line-strong)" }} />
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section id="experience" className="wrap py-16 md:py-24 scroll-mt-20">
        <Reveal>
          <SectionLabel n="02" title="Experience" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-10">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 80} className="md:col-span-6">
              <div style={{ borderTop: "2px solid var(--ink)" }} className="pt-5 h-full">
                <p className="eyebrow mb-3">{e.period}</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                  {e.company}
                </h3>
                <p className="mt-1 mb-5 accent">{e.role}</p>
                <ul className="space-y-3">
                  {e.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-base leading-relaxed pl-5 relative"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      <span
                        className="absolute left-0 top-[0.55em] w-2 h-[1.5px]"
                        style={{ background: "var(--accent)" }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT + SKILLS ---------- */}
      <section id="about" className="wrap py-16 md:py-24 scroll-mt-20">
        <Reveal>
          <SectionLabel n="03" title="About" />
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <Reveal className="md:col-span-7">
            <p className="font-serif text-2xl md:text-[1.9rem] leading-snug">
              {profile.summary}
            </p>

            <ul className="mt-10 space-y-4">
              {strengths.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="eyebrow pt-1.5">0{i + 1}</span>
                  <span className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 pt-5 flex flex-wrap items-baseline justify-between gap-2"
              style={{ borderTop: "1px solid var(--line-strong)" }}
            >
              <div>
                <p className="font-serif text-xl">{education.degree}</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {education.school}
                </p>
              </div>
              <p className="eyebrow">{education.period}</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <div className="grid gap-8">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className="eyebrow mb-3">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <TechChip key={it} label={it} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="wrap py-20 md:py-32 scroll-mt-20">
        <Reveal>
          <SectionLabel n="04" title="Contact" />
        </Reveal>
        <Reveal delay={60}>
          <p className="eyebrow mb-4">Let&apos;s build something</p>
          <a
            href={`mailto:${profile.email}`}
            className="display block text-[2.4rem] sm:text-6xl md:text-8xl link-underline break-words"
          >
            {profile.email}
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-2.5"
            >
              <FaLinkedinIn size={18} className="accent" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-2.5"
            >
              <FaGithub size={18} className="accent" />
              GitHub
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-2.5"
            >
              <FaWhatsapp size={18} className="accent" />
              WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline inline-flex items-center gap-2.5"
            >
              <Mail size={18} className="accent" />
              Email
            </a>
            <span
              className="inline-flex items-center gap-2.5"
              style={{ color: "var(--muted)" }}
            >
              <MapPin size={18} className="accent" />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
