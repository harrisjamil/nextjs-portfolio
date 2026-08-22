"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AboutVideo, HeroVideo } from "@/components/hero-video";
import { ProjectsCarousel } from "@/components/projects-carousel";
import {
  CountUp,
  Reveal,
  RevealItem,
  Stagger,
} from "@/components/motion";
import { Button, Corner, Frame, Marquee } from "@/components/ui";
import {
  aboutStats,
  experience,
  homeServices,
  stack,
  stats,
} from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 md:py-16">
      <Frame className="px-4 py-12 text-center md:px-10 md:py-16">
        <Stagger>
          <RevealItem>
            <span className="inline-flex rounded-full border border-line bg-bg px-4 py-1.5 text-sm font-medium">
              Hi, I&apos;m Haris
            </span>
          </RevealItem>
          <h1 className="font-display mt-6 flex flex-col items-center justify-center gap-2 text-[clamp(3.2rem,12vw,9.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.04em] md:flex-row md:gap-4">
            <RevealItem>
              <span>Graphics</span>
            </RevealItem>
            <RevealItem>
              <HeroVideo />
            </RevealItem>
            <RevealItem>
              <span>Designer</span>
            </RevealItem>
          </h1>
          <RevealItem>
            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-muted md:text-lg">
              From Miami, I design fast, user-friendly websites for founders and
              freelancers looking to attract dream clients.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-8 flex justify-center">
              <Button href="#contact" variant="cyan" className="px-7 py-3.5 text-base">
                i Want to Chat
              </Button>
            </div>
          </RevealItem>
        </Stagger>
      </Frame>
    </section>
  );
}

export function ProjectsPreview() {
  return (
    <section id="projects" className="overflow-x-hidden pb-16">
      <Reveal>
        <div className="mx-auto flex max-w-[1280px] items-end justify-between gap-4 px-4 md:px-6">
          <h2 className="font-display text-[clamp(3rem,8vw,6.25rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            Projects
          </h2>
          <Button href="/projects" variant="cyan">
            View all projects
          </Button>
        </div>
      </Reveal>
      <ProjectsCarousel />
    </section>
  );
}

function AboutCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Corner className="-left-[6px] -top-[6px]" />
      <Corner className="-right-[6px] -top-[6px]" />
      <Corner className="-bottom-[6px] -left-[6px]" />
      <Corner className="-right-[6px] -bottom-[6px]" />
      {children}
    </div>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <AboutCell className="flex min-h-[208px] flex-col justify-center border-b border-line px-6 py-16">
      <Reveal>
        <p className="font-display text-[35px] font-semibold tracking-tight">
          <CountUp value={value} />
        </p>
        <p className="mt-3 text-base font-medium text-muted">{label}</p>
      </Reveal>
    </AboutCell>
  );
}

function StackCell({
  item,
}: {
  item: (typeof stack)[number];
}) {
  return (
    <AboutCell className="flex min-h-[176px] items-center gap-4 border-b border-line px-6 py-16 last:border-b-0">
      <Reveal className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={`${item.name} logo`}
          width={41}
          height={41}
          className="h-10 w-10 rounded-xl object-cover"
        />
        <div>
          <p className="text-base font-medium">{item.name}</p>
          <p className="text-sm text-muted">{item.subtitle}</p>
        </div>
      </Reveal>
    </AboutCell>
  );
}

function JobCell({ job }: { job: (typeof experience)[number] }) {
  return (
    <AboutCell className="flex min-h-[235px] flex-col justify-center border-b border-line px-6 py-16 last:border-b-0">
      <Reveal>
        <p className="text-base font-medium">{job.role}</p>
        <div className="mt-5 border-t border-line pt-5">
          <p className="flex items-center gap-2">
            <span className="text-base font-medium text-muted">Company</span>
            <span className="h-2.5 w-2.5 shrink-0 bg-muted" />
            <span className="text-sm">{job.company}</span>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <span className="text-base font-medium text-muted">Year</span>
            <span className="h-2.5 w-2.5 shrink-0 bg-muted" />
            <span className="text-sm">{job.years}</span>
          </p>
        </div>
      </Reveal>
    </AboutCell>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pb-16 md:px-6">
      <Frame>
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.75fr)_minmax(0,0.85fr)]">
          <div className="order-2 border-b border-line lg:order-1 lg:border-b-0 lg:border-r">
            {stats.map((item) => (
              <StatCell key={item.label} {...item} />
            ))}
            <AboutCell className="flex min-h-[79px] items-center border-b border-line px-6">
              <h3 className="font-display text-[22px] font-medium">My Stack</h3>
            </AboutCell>
            {stack.map((item) => (
              <StackCell key={item.name} item={item} />
            ))}
          </div>

          <div className="relative order-1 flex flex-col lg:order-2">
            <AboutCell className="flex min-h-[160px] items-center justify-center border-b border-line px-4 py-10 lg:min-h-[208px]">
              <h2 className="font-display text-center text-[clamp(3.4rem,8vw,6.25rem)] font-semibold uppercase leading-[0.9] tracking-tight">
                About me
              </h2>
            </AboutCell>
            <div className="relative overflow-hidden p-6 lg:sticky lg:top-[100px] lg:z-10">
              <AboutVideo />
              <div className="absolute right-8 top-10 w-[min(240px,calc(100%-4rem))] rounded-full bg-soft px-6 py-3 text-center md:right-10 md:top-12">
                <p className="font-display text-[22px] font-medium leading-[1.15]">
                  Let Me Introduce Myself
                </p>
                <span
                  aria-hidden
                  className="absolute -left-1.5 bottom-3 block h-6 w-6 rotate-[248deg] bg-soft"
                />
              </div>
            </div>
          </div>

          <div className="order-3 border-t border-line lg:border-l lg:border-t-0">
            {aboutStats.map((item) => (
              <StatCell key={item.label} {...item} />
            ))}
            <AboutCell className="flex min-h-[79px] items-center border-b border-line px-6">
              <h3 className="font-display text-[22px] font-medium">
                My Experience
              </h3>
            </AboutCell>
            {experience.map((job) => (
              <JobCell key={job.company} job={job} />
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}

export function ServicesPreview() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="pb-16">
      <Marquee items={["SERVICES", "what i offer"]} reverse large />
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Frame>
          {homeServices.map((item, index) => {
            const active = open === index;
            return (
              <div
                key={item.num}
                className="border-b border-line last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  className="grid w-full grid-cols-1 items-center gap-4 px-6 py-8 text-left md:grid-cols-[1fr_1fr] md:gap-8"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-lg font-medium text-muted">
                      {item.num}
                    </span>
                    <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <span className="inline-flex items-center gap-3 rounded-full bg-soft px-4 py-2 text-sm font-medium">
                      {item.line}
                      <Image
                        src={item.image}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-8 object-contain"
                      />
                    </span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-xl transition ${
                        active ? "bg-fg text-bg" : "bg-bg"
                      }`}
                    >
                      {active ? "–" : "+"}
                    </span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-8 text-muted md:max-w-xl md:pl-[4.5rem]">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Frame>
      </div>
    </section>
  );
}
