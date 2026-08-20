"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { LoopVideo } from "@/components/loop-video";
import { SplitLink } from "@/components/motion";
import { Button, Corner, Frame } from "@/components/ui";
import { faqs, sideVideos, site, socials, testimonials } from "@/lib/data";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[160px] items-center border-b border-line px-6 py-10 lg:min-h-[220px]">
      <Corner className="-left-[6px] -top-[6px]" />
      <Corner className="-right-[6px] -top-[6px]" />
      <Corner className="-bottom-[6px] -left-[6px]" />
      <Corner className="-right-[6px] -bottom-[6px]" />
      <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold uppercase leading-[0.9] tracking-tight">
        {children}
      </h2>
    </div>
  );
}

function SpeechBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute right-6 top-8 z-10 w-[min(240px,calc(100%-3rem))] rounded-full bg-soft px-5 py-3 text-center md:right-10 md:top-10">
      <p className="font-display text-[20px] font-medium leading-[1.15] md:text-[22px]">
        {children}
      </p>
      <span
        aria-hidden
        className="absolute -left-1.5 bottom-3 block h-6 w-6 rotate-[248deg] bg-soft"
      />
    </div>
  );
}

function TestimonialsPanel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <div
      id="testimonials"
      data-side-index="0"
      className="sticky top-0 z-[1] border-b border-line bg-bg lg:min-h-[100svh]"
    >
      <div className="relative flex min-h-[100svh] flex-col justify-between px-6 py-12 md:px-8">
        <Corner className="-left-[6px] -top-[6px]" />
        <Corner className="-right-[6px] -top-[6px]" />
        <Corner className="-bottom-[6px] -left-[6px]" />
        <Corner className="-right-[6px] -bottom-[6px]" />
        <div>
          <div className="flex gap-1 text-[#ff4d4d]" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm">
                ★
              </span>
            ))}
          </div>
          <div className="relative mt-6 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(1.5rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-tight"
              >
                &ldquo;{item.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex items-stretch border-t border-line">
          <motion.button
            type="button"
            aria-label="Previous testimonial"
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
            }
            className="grid w-16 place-items-center border-r border-line text-2xl"
          >
            ‹
          </motion.button>
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex flex-1 items-center justify-center gap-3 px-4 py-8"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.button
            type="button"
            aria-label="Next testimonial"
            whileTap={{ scale: 0.96 }}
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="grid w-16 place-items-center border-l border-line text-2xl"
          >
            ›
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function FAQPanel() {
  const [open, setOpen] = useState(0);

  return (
    <div
      id="faq"
      data-side-index="1"
      className="sticky top-0 z-[2] border-b border-line bg-bg lg:min-h-[100svh]"
    >
      <div className="relative flex min-h-[100svh] flex-col justify-center gap-3 px-6 py-12 md:px-8">
        <Corner className="-left-[6px] -top-[6px]" />
        <Corner className="-right-[6px] -top-[6px]" />
        <Corner className="-bottom-[6px] -left-[6px]" />
        <Corner className="-right-[6px] -bottom-[6px]" />
        {faqs.map((item, i) => {
          const active = open === i;
          return (
            <div key={item.q}>
              <motion.button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-between gap-4 rounded-full bg-fg px-5 py-3.5 text-left text-sm font-medium text-bg"
              >
                <span>{item.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg transition ${
                    active ? "bg-accent text-white" : "bg-white/15"
                  }`}
                >
                  {active ? "–" : "+"}
                </span>
              </motion.button>
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 rounded-2xl rounded-tr-md bg-soft px-5 py-4 text-sm leading-6 text-muted">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactPanel() {
  const [copied, setCopied] = useState(false);

  return (
    <div
      id="contact"
      data-side-index="2"
      className="relative z-[3] border-b border-line bg-bg last:border-b-0"
    >
      <div className="relative px-6 py-12 md:px-8">
        <Corner className="-left-[6px] -top-[6px]" />
        <Corner className="-right-[6px] -top-[6px]" />
        <Corner className="-bottom-[6px] -left-[6px]" />
        <Corner className="-right-[6px] -bottom-[6px]" />
        <h3 className="text-3xl font-semibold">Let&apos;s Work Together</h3>
        <p className="mt-3 max-w-md leading-7 text-muted">
          Have a project in mind? I&apos;d love to hear about it. Drop me a
          message and I&apos;ll get back to you within 24 hours.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Email</p>
            <button
              type="button"
              className="mt-2 text-muted hover:text-fg"
              onClick={async () => {
                await navigator.clipboard.writeText(site.email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
              }}
            >
              {site.email}
              <span className="mt-1 block text-xs">
                {copied ? "Copied" : "Click to copy"}
              </span>
            </button>
          </div>
          <div>
            <p className="text-sm font-semibold">Phone</p>
            <a
              href={`tel:${site.phone}`}
              className="mt-2 block text-muted hover:text-fg"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold">Socials</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
            {socials.map((s) => (
              <SplitLink
                key={s.name}
                href={s.href}
                text={s.name}
                external
                className="hover:text-fg"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] bg-soft p-6">
          <p className="text-sm leading-6 text-muted">
            Prefer to schedule a call instead? Book a free 30-minute
            consultation and let&apos;s discuss your project.
          </p>
          <Button href={`mailto:${site.email}`} className="mt-5">
            Let&apos;s Set Up a Time
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Closing() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const nodes = [0, 1, 2].map((i) =>
      document.querySelector(`[data-side-index="${i}"]`),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target) return;
        const index = Number(
          (visible.target as HTMLElement).dataset.sideIndex,
        );
        if (!Number.isNaN(index)) setActive(index);
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-15% 0px -25% 0px" },
    );
    nodes.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [reduce]);

  const current = sideVideos[active] ?? sideVideos[0];

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-16 md:px-6">
      <Frame>
        <div className="grid lg:grid-cols-2 lg:items-start">
          <div className="relative mb-0 border-b border-line lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:items-center lg:border-b-0 lg:border-r lg:border-line lg:p-6">
            <Corner className="-left-[6px] -top-[6px]" />
            <Corner className="-right-[6px] -top-[6px]" />
            <Corner className="-bottom-[6px] -left-[6px]" />
            <Corner className="-right-[6px] -bottom-[6px]" />
            <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[30px] bg-soft p-4 lg:p-0">
              <AnimatePresence mode="sync">
                <motion.div
                  key={current.src}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <LoopVideo
                    src={current.src}
                    poster={current.poster}
                    label={current.bubble}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <SpeechBubble>{current.bubble}</SpeechBubble>
            </div>
          </div>

          <div>
            <SectionTitle>Testimonial</SectionTitle>
            <TestimonialsPanel />
            <SectionTitle>FAQ</SectionTitle>
            <FAQPanel />
            <SectionTitle>Contact me</SectionTitle>
            <ContactPanel />
          </div>
        </div>
      </Frame>
    </section>
  );
}
