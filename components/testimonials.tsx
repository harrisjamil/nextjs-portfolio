"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { testimonials } from "@/lib/data";
import { Float, Reveal } from "./motion";
import { Speech } from "./ui";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-16 md:px-6">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Float>
              <Image
                src="/images/avatar-point.png"
                alt="Dean pointing to client reviews"
                width={420}
                height={420}
                className="h-auto w-full max-w-[360px]"
              />
            </Float>
            <Speech className="mt-2">
              What my <span className="text-accent">Clients</span> said
            </Speech>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Testimonial
          </p>
          <div className="mt-3 flex gap-1 text-red-500" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-display mt-5 text-[clamp(1.6rem,3.4vw,2.7rem)] font-bold leading-[1.15] tracking-tight"
              >
                “{item.quote}”
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
            <motion.button
              type="button"
              aria-label="Previous testimonial"
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
              }
              className="grid h-10 w-10 place-items-center rounded-full border border-line"
            >
              ‹
            </motion.button>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-3"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
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
              whileTap={{ scale: 0.9 }}
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line"
            >
              ›
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
