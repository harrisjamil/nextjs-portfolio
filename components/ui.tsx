"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Corner({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 block h-3 w-3 text-fg ${className}`}
    >
      <svg viewBox="0 0 17 17" className="h-full w-full fill-current" aria-hidden>
        <path d="M8.5 0 L9.127 1.694 C9.947 3.912 10.359 5.021 11.167 5.831 C11.979 6.641 13.088 7.053 15.306 7.873 L17 8.5 L15.306 9.127 C13.088 9.947 11.979 10.359 11.169 11.167 C10.359 11.979 9.947 13.088 9.127 15.306 L8.5 17 L7.873 15.306 C7.053 13.088 6.641 11.979 5.833 11.169 C5.021 10.359 3.912 9.947 1.694 9.127 L0 8.5 L1.694 7.873 C3.912 7.053 5.021 6.641 5.831 5.833 C6.641 5.021 7.053 3.912 7.873 1.694 Z" />
      </svg>
    </span>
  );
}

/** @deprecated use Corner */
export function Plus({ className = "" }: { className?: string }) {
  return <Corner className={className} />;
}

export function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-line ${className}`}>
      <Corner className="-left-[6px] -top-[6px]" />
      <Corner className="-right-[6px] -top-[6px]" />
      <Corner className="-bottom-[6px] -left-[6px]" />
      <Corner className="-right-[6px] -bottom-[6px]" />
      {children}
    </div>
  );
}

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "black" | "cyan" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "black",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = {
    black: "bg-fg text-bg shadow-[var(--shadow)]",
    cyan: "bg-accent text-white shadow-[var(--glow)]",
    ghost: "bg-transparent text-fg border border-line",
  }[variant];

  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${styles} ${className}`;
  const hover =
    variant === "ghost"
      ? { y: -2, backgroundColor: "var(--soft)" }
      : { y: -2, scale: 1.03 };
  const inner = (
    <>
      {children}
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          variant === "cyan" ? "bg-white" : "bg-accent"
        }`}
      />
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <motion.a
          href={href}
          className={cls}
          target="_blank"
          rel="noreferrer"
          whileHover={hover}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          {inner}
        </motion.a>
      );
    }
    return (
      <motion.div
        className="inline-flex"
        whileHover={hover}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <Link href={href} className={cls}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      whileHover={hover}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {inner}
    </motion.button>
  );
}

export function Marquee({
  items,
  className = "",
  reverse = false,
  large = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  large?: boolean;
}) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-line ${className}`}>
      <div
        className={`flex w-max gap-10 py-4 pr-10 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } ${large ? "items-center gap-14 py-6 pr-14" : ""}`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={
              large
                ? "font-display flex items-center gap-14 text-[clamp(3rem,8vw,6.25rem)] font-semibold uppercase leading-none tracking-tight text-fg"
                : "flex items-center gap-10 text-sm font-medium uppercase tracking-[0.18em] text-muted"
            }
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Speech({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[28px] border border-line bg-bg px-5 py-3 text-lg font-medium shadow-[var(--shadow)] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-bold uppercase leading-[0.9] tracking-tight">
      {children}
    </h2>
  );
}
