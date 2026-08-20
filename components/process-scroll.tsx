"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LoopVideo } from "@/components/loop-video";
import { Button, Corner, Frame } from "@/components/ui";
import { process, processVideos } from "@/lib/data";

const stepBackgrounds = ["bg-bg", "bg-soft", "bg-soft-deep"] as const;

function BorderBlock({
  children,
  className = "",
  corners = "all" as "all" | "top" | "none",
}: {
  children: React.ReactNode;
  className?: string;
  corners?: "all" | "top" | "none";
}) {
  return (
    <div className={`relative border border-line ${className}`}>
      {(corners === "all" || corners === "top") && (
        <>
          <Corner className="-left-[6px] -top-[6px]" />
          <Corner className="-right-[6px] -top-[6px]" />
        </>
      )}
      {corners === "all" && (
        <>
          <Corner className="-bottom-[6px] -left-[6px]" />
          <Corner className="-right-[6px] -bottom-[6px]" />
        </>
      )}
      {children}
    </div>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const media = mediaRef.current;
    if (!track || !media) return;

    const update = () => {
      if (reduce) {
        media.style.transform = "perspective(1200px) rotateY(0deg)";
        return;
      }
      const rect = track.getBoundingClientRect();
      const total = Math.max(1, track.offsetHeight - window.innerHeight);
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      const deg = (scrolled / total) * 360;
      media.style.transform = `perspective(1200px) rotateY(${deg}deg)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const nodes = process.map((_, i) =>
      document.getElementById(`process-step-${i}`),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target) return;
        const index = Number(
          (visible.target as HTMLElement).dataset.processIndex,
        );
        if (!Number.isNaN(index)) setActive(index);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-10% 0px -25% 0px" },
    );
    nodes.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-16 md:px-6">
      <Frame>
        <div className="grid lg:grid-cols-2 lg:items-start">
          <div ref={trackRef} className="lg:border-r lg:border-line">
            <BorderBlock
              corners="top"
              className="flex min-h-[180px] items-center border-x-0 border-t-0 px-6 py-10 lg:min-h-[262px]"
            >
              <h2 className="font-display text-[clamp(3.4rem,8vw,6.25rem)] font-semibold uppercase leading-[0.9] tracking-tight">
                Process
              </h2>
            </BorderBlock>

            {process.map((step, index) => (
              <div
                key={step.num}
                id={`process-step-${index}`}
                data-process-index={index}
                className={`sticky top-0 min-h-[100svh] border-t border-line ${stepBackgrounds[index]}`}
                style={{ zIndex: index === 0 ? 1 : 2 }}
              >
                <div className="relative flex min-h-[100svh] flex-col justify-center px-6 py-16 md:px-8">
                  <Corner className="-left-[6px] -top-[6px]" />
                  <Corner className="-right-[6px] -top-[6px]" />
                  <p className="font-display text-[22px] font-medium text-muted">
                    {step.num}
                  </p>
                  <h3 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-7 text-muted md:text-lg">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}

            <div className="relative z-[3] border-t border-line bg-bg">
              <div className="relative flex min-h-[100svh] flex-col justify-center px-6 py-12 md:px-8">
                <Corner className="-left-[6px] -top-[6px]" />
                <Corner className="-right-[6px] -top-[6px]" />
                <h3 className="text-2xl font-semibold md:text-3xl">
                  Ready to Get Started?
                </h3>
                <p className="mt-3 max-w-md leading-7 text-muted">
                  Tell me about your project and let&apos;s create something
                  amazing together. I&apos;ll respond within 24 hours.
                </p>
                <div className="mt-8">
                  <Button href="#contact" variant="cyan">
                    I&apos;m Ready to Start
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-0 hidden lg:sticky lg:top-0 lg:z-[1] lg:flex lg:h-[100svh] lg:items-center lg:p-6">
            <Corner className="-left-[6px] -top-[6px]" />
            <Corner className="-right-[6px] -top-[6px]" />
            <Corner className="-bottom-[6px] -left-[6px]" />
            <Corner className="-right-[6px] -bottom-[6px]" />
            <div className="relative w-full [perspective:1200px]">
              <div
                ref={mediaRef}
                className="relative aspect-[600/504] w-full overflow-hidden rounded-[28px] bg-soft will-change-transform"
                style={{ transform: "perspective(1200px) rotateY(0deg)" }}
              >
                <AnimatePresence mode="sync">
                  {processVideos.map((src, index) =>
                    active === index ? (
                      <motion.div
                        key={src}
                        className="absolute inset-0"
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <LoopVideo
                          src={src}
                          label={`Process step ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    ) : null,
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Frame>

      <div className="mt-4 lg:hidden">
        <Frame className="overflow-hidden p-4">
          <LoopVideo
            src={processVideos[active]}
            label={`Process step ${active + 1}`}
            className="aspect-[600/504] w-full rounded-[24px] object-cover"
          />
        </Frame>
      </div>
    </section>
  );
}
