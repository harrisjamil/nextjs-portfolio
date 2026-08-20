"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { site, socials } from "@/lib/data";
import { Float, Reveal, SplitLink } from "./motion";
import { Button, Frame, SectionLabel } from "./ui";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-4 py-16 md:px-6">
      <Reveal>
        <SectionLabel>Contact me</SectionLabel>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Frame className="p-8">
            <Float>
              <Image
                src="/images/avatar-desk.png"
                alt="Dean at his desk"
                width={280}
                height={280}
                className="h-auto w-48"
              />
            </Float>
            <h3 className="mt-6 text-3xl font-semibold">Let&apos;s Work Together</h3>
            <p className="mt-3 leading-7 text-muted">
              Have a project in mind? I&apos;d love to hear about it. Drop me a
              message and I&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="font-semibold">Email</p>
                <button
                  type="button"
                  className="text-muted hover:text-fg"
                  onClick={async () => {
                    await navigator.clipboard.writeText(site.email);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1600);
                  }}
                >
                  {site.email} · {copied ? "Copied" : "Click to copy"}
                </button>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href={`tel:${site.phone}`} className="text-muted hover:text-fg">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold">Socials</p>
                <div className="mt-2 flex flex-wrap gap-3 text-muted">
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
            </div>
          </Frame>
        </Reveal>

        <Reveal delay={0.08}>
          <Frame className="p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <p className="text-2xl font-semibold">Message received.</p>
                  <p className="mt-2 max-w-sm text-muted">
                    Thanks for reaching out. I&apos;ll reply within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -12 }}
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <label className="block text-sm">
                    Name
                    <input
                      required
                      name="name"
                      className="mt-1 w-full rounded-2xl border border-line bg-soft px-4 py-3 outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block text-sm">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-1 w-full rounded-2xl border border-line bg-soft px-4 py-3 outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block text-sm">
                    Project details
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-1 w-full rounded-2xl border border-line bg-soft px-4 py-3 outline-none focus:border-accent"
                    />
                  </label>
                  <Button type="submit" variant="cyan" className="w-full">
                    Send message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
            <div className="mt-8 rounded-3xl bg-soft p-5">
              <p className="text-sm leading-6 text-muted">
                Prefer to schedule a call instead? Book a free 30-minute
                consultation and let&apos;s discuss your project.
              </p>
              <Button href="mailto:contact@ace.com" className="mt-4">
                Let&apos;s Set Up a Time
              </Button>
            </div>
          </Frame>
        </Reveal>
      </div>
    </section>
  );
}
