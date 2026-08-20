"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { Float, Reveal } from "./motion";
import { Speech } from "./ui";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Reveal>
      <section className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-line px-4 md:mx-6 md:px-0 lg:mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <Float>
              <Image
                src="/images/avatar-faq.png"
                alt="Dean with a question mark"
                width={380}
                height={380}
                className="h-auto w-full max-w-[320px]"
              />
            </Float>
            <Speech className="mt-2">
              Frequently <span className="text-accent">Answered</span> Questions
            </Speech>
          </div>
          <div className="space-y-3 bg-soft px-6 py-12">
            {faqs.map((item, i) => {
              const active = open === i;
              return (
                <div key={item.q}>
                  <motion.button
                    type="button"
                    onClick={() => setOpen(active ? -1 : i)}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-between gap-4 rounded-full bg-fg px-5 py-3 text-left text-sm font-medium text-bg"
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
                        <p className="ml-auto mt-3 max-w-[92%] rounded-2xl rounded-tr-md bg-bg px-5 py-4 text-sm leading-6 text-muted">
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
      </section>
    </Reveal>
  );
}
