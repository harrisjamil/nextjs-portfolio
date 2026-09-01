"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const spring = { type: "spring" as const, stiffness: 80, damping: 18 };

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

export function SplitHover({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {Array.from(text).map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="relative inline-block h-[1.15em] overflow-hidden"
        >
          <motion.span
            className="inline-block"
            variants={{ rest: { y: "0%" }, hover: { y: "-110%" } }}
            transition={{
              duration: 0.32,
              delay: i * 0.028,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 inline-block"
            variants={{ rest: { y: "110%" }, hover: { y: "0%" } }}
            transition={{
              duration: 0.32,
              delay: i * 0.028,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const NAV_STACKED_COPIES = 8;
const NAV_STACKED_LINE = 19.2;

export function NavStackedText({
  text,
  className = "",
  accent = false,
  showDot = false,
}: {
  text: string;
  className?: string;
  accent?: boolean;
  showDot?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={`relative inline-flex flex-col items-center ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {showDot && (
        <span className="mb-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      )}
      <span className="inline-flex items-center gap-[0.05em] font-display text-base font-medium tracking-tight">
        {Array.from(text).map((char, index) => (
          <span key={`${char}-${index}`} className="relative inline-flex flex-col items-center">
            <span
              className="relative block overflow-hidden"
              style={{ height: NAV_STACKED_LINE }}
            >
              <motion.span
                className="flex flex-col items-center"
                variants={{
                  rest: { y: 0 },
                  hover: { y: -(NAV_STACKED_LINE * (NAV_STACKED_COPIES - 1)) },
                }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {Array.from({ length: NAV_STACKED_COPIES }, (_, copy) => (
                  <span
                    key={copy}
                    className={`flex items-center justify-center ${
                      accent ? "text-accent" : "text-current"
                    }`}
                    style={{ height: NAV_STACKED_LINE }}
                  >
                    {char}
                  </span>
                ))}
              </motion.span>
            </span>
          </span>
        ))}
      </span>
    </motion.span>
  );
}

export function SplitLink({
  href,
  text,
  className = "",
  external = false,
}: {
  href: string;
  text: string;
  className?: string;
  external?: boolean;
}) {
  const inner = (
    <motion.span
      className={`inline-flex ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <SplitHover text={text} />
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-flex">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-flex">
      {inner}
    </Link>
  );
}
