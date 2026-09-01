"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";
import { NavStackedText } from "./motion";
import { Button } from "./ui";

function Dribbble() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white" aria-hidden>
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm5.26 3.67a6.8 6.8 0 0 1 1.5 3.37 17.3 17.3 0 0 0-5.1-.23c-.2-.48-.4-.96-.64-1.42 2.05-.84 3.3-1.9 4.24-1.72ZM8 1.24c1.5 0 2.88.5 4 .1.34-.86 1.46.14-3.7 1.6A22.3 22.3 0 0 0 6.3 1.4 6.73 6.73 0 0 1 8 1.24ZM4.9 1.9c.5.08 2.16.4 4.16 1.86A21 21 0 0 0 6.7 7.1 13.8 13.8 0 0 0 1.4 6.1 6.8 6.8 0 0 1 4.9 1.9ZM1.24 8.05c0-.2 0-.4.02-.6 1.9.4 4.4.5 7.04-.18.22.44.42.9.6 1.36-2.5.8-4.3 2.6-5.2 4.86A6.76 6.76 0 0 1 1.24 8.05Zm6.76 6.71a6.73 6.73 0 0 1-3.86-1.21c.82-2.08 2.5-3.76 4.9-4.5.7 1.82 1.18 3.8 1.36 5.86A6.7 6.7 0 0 1 8 14.76Zm3.08-.86c-.2-1.9-.64-3.72-1.28-5.42 1.56-.2 3.24-.12 4.96.3a6.78 6.78 0 0 1-3.68 5.12Z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white" aria-hidden>
      <path d="M12.6 1.5h2.2L9.7 7.1 16 14.5h-4.9L7.5 9.8 3.1 14.5H.9l6.6-6.9L0 1.5h5l3.3 4.3 4.3-4.3Zm-.8 11.7h1.2L4.3 2.7H3L11.8 13.2Z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white" aria-hidden>
      <path d="M8 3.9A4.1 4.1 0 1 0 8 12.1 4.1 4.1 0 0 0 8 3.9Zm0 6.77A2.67 2.67 0 1 1 8 5.33a2.67 2.67 0 0 1 0 5.34ZM13.2 3.74a1 1 0 1 1-1.92-.48 1 1 0 0 1 1.92.48ZM15.9 4.8c-.04-1.1-.3-2.08-1.1-2.88S13.1.14 12 .1C10.88.05 5.12.05 4 .1 2.9.14 1.92.4 1.12 1.2.32 2 .14 2.98.1 4.08.05 5.2.05 10.96.1 12.08c.04 1.1.3 2.08 1.1 2.88s1.78.98 2.88 1.1c1.12.05 6.88.05 8 0 1.1-.04 2.08-.3 2.88-1.1s.98-1.78 1.1-2.88c.05-1.12.05-6.88 0-8Zm-1.8 8.96a2.7 2.7 0 0 1-1.52 1.52c-1.05.42-3.55.32-4.7.32s-3.65.09-4.7-.32A2.7 2.7 0 0 1 1.76 13.96c-.42-1.05-.32-3.55-.32-4.7s-.09-3.65.32-4.7A2.7 2.7 0 0 1 3.28 2.04c1.05-.42 3.55-.32 4.7-.32s3.65-.09 4.7.32a2.7 2.7 0 0 1 1.52 1.52c.42 1.05.32 3.55.32 4.7s.1 3.65-.32 4.7Z" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white" aria-hidden>
      <path d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.6C0 15.5.5 16 1.2 16h13.6c.7 0 1.2-.5 1.2-1.2V1.2C16 .5 15.5 0 14.8 0ZM4.7 13.6H2.4V6h2.3v7.6ZM3.6 5A1.3 1.3 0 1 1 3.6 2.3 1.3 1.3 0 0 1 3.6 5Zm10 8.6h-2.3V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.7H6.4V6h2.2v1h.03c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2Z" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white" aria-hidden>
      <path d="M16 8a8 8 0 1 0-9.25 7.9v-5.59H4.72V8h2.03V6.3c0-2 1.2-3.11 3.02-3.11.88 0 1.8.16 1.8.16v1.98h-1.02c-1 0-1.31.62-1.31 1.26V8h2.23l-.36 2.31H9.24v5.59A8 8 0 0 0 16 8Z" />
    </svg>
  );
}

function DottedRing() {
  const id = useId().replace(/:/g, "");
  const pathId = `nav-curve-${id}`;
  const dots = Array.from({ length: 28 }, () => ".").join("   ");

  return (
    <span
      aria-hidden
      className="nav-dot-ring pointer-events-none absolute inset-[-14px] block"
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full overflow-visible"
        style={{ transformOrigin: "center" }}
      >
        <path
          id={pathId}
          d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
          fill="transparent"
        />
        <text className="fill-accent text-[22px] leading-none">
          <textPath href={`#${pathId}`} startOffset="0" dominantBaseline="hanging">
            {dots}
          </textPath>
        </text>
      </svg>
    </span>
  );
}

const socials = [
  { href: "https://dribbble.com", label: "Dribbble", bg: "bg-[#D14E12]", icon: <Dribbble /> },
  { href: "https://x.com", label: "X", bg: "bg-black", icon: <IconX /> },
  {
    href: "https://instagram.com",
    label: "Instagram",
    bg: "bg-[linear-gradient(135deg,#AA2EC3,#F94E4E,#FDCD57)]",
    icon: <Instagram />,
  },
  { href: "https://linkedin.com", label: "LinkedIn", bg: "bg-[#0275B4]", icon: <LinkedIn /> },
  { href: "https://facebook.com", label: "Facebook", bg: "bg-[#1877F2]", icon: <Facebook /> },
];

const navLinkTone = (active: boolean) =>
  active ? "text-fg" : "text-[#616161] hover:text-fg";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const projectActive = pathname.startsWith("/projects");
  const serviceActive = pathname.startsWith("/services");
  const aboutActive = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="px-4 md:px-6">
        <div className="relative mx-auto flex min-h-[115px] max-w-[1280px]">
          <span aria-hidden className="site-rail site-rail--left site-rail--bridge" />
          <span aria-hidden className="site-rail site-rail--right site-rail--bridge" />
          {/* Bottom line with wider home gap + faded outer ends */}
          <span aria-hidden className="nav-rule nav-rule--left" />
          <span aria-hidden className="nav-rule nav-rule--right" />

          {/* Left column — button/socials + Projects */}
          <div className="relative flex min-h-[115px] flex-1 flex-col">
            <div className="flex h-20 items-center justify-between gap-3 px-4 md:px-5">
              <div className="flex min-w-0 items-center gap-2 md:gap-3">
                <button
                  type="button"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line md:hidden"
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Menu"
                >
                  ☰
                </button>
                <Button href="/#contact" className="hidden shrink-0 md:inline-flex">
                  i Want to Chat
                </Button>
                <div className="hidden items-center gap-2 md:flex">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${s.bg}`}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              <Link href="/projects" className="inline-flex shrink-0">
                <NavStackedText text="Projects" className={navLinkTone(projectActive)} />
              </Link>
            </div>
          </div>

          {/* Center column — avatar + Home */}
          <Link
            href="/"
            className="relative z-10 flex w-[76px] shrink-0 flex-col items-center bg-bg pt-[13px]"
          >
            <span className="relative grid h-[52px] w-[52px] place-items-center">
              <DottedRing />
              <span className="relative overflow-hidden rounded-full bg-accent">
                <Image
                  src="/images/avatar-bust.png"
                  alt="Dean"
                  width={52}
                  height={52}
                  className="relative h-[52px] w-[52px] rounded-full object-cover object-top"
                />
              </span>
            </span>
            <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2">
              <NavStackedText
                text="Home"
                accent={aboutActive}
                showDot={aboutActive}
              />
            </span>
          </Link>

          {/* Right column — Services + theme toggle */}
          <div className="relative flex min-h-[115px] flex-1 flex-col">
            <div className="flex h-20 items-center justify-between gap-3 px-4 md:px-5">
              <Link href="/services" className="inline-flex shrink-0">
                <NavStackedText text="Services" className={navLinkTone(serviceActive)} />
              </Link>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative h-[30px] w-[54px] shrink-0 rounded-full border border-line bg-soft p-0.5"
              >
                <span
                  className={`grid h-[22px] w-[22px] place-items-center rounded-full bg-bg text-xs shadow-sm transition ${
                    mounted && theme === "dark" ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  {mounted && theme === "dark" ? "☾" : "☀"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-4 flex flex-col gap-3 border-b border-line px-4 py-4 md:hidden">
          <Button href="/#contact">i Want to Chat</Button>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
