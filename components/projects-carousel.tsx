"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";

const VIEW_SIZE = 112;

function ProjectSlide({
  slug,
  title,
  image,
  duplicate,
}: {
  slug: string;
  title: string;
  image: string;
  duplicate?: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 26, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 26, mass: 0.4 });

  function updatePosition(clientX: number, clientY: number) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(clientX - rect.left - VIEW_SIZE / 2);
    y.set(clientY - rect.top - VIEW_SIZE / 2);
  }

  return (
    <Link
      ref={cardRef}
      href={`/projects/${slug}`}
      aria-label={`View ${title}`}
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
      onMouseEnter={(event) => {
        updatePosition(event.clientX, event.clientY);
        setHovered(true);
      }}
      onMouseMove={(event) => updatePosition(event.clientX, event.clientY)}
      onMouseLeave={() => setHovered(false)}
      className="group relative aspect-[5/4] w-[min(78vw,440px)] shrink-0 overflow-hidden rounded-[32px] bg-[#cfcfcf] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] [@media(hover:hover)]:cursor-none"
    >
      <Image
        src={image}
        alt={duplicate ? "" : title}
        fill
        sizes="(max-width: 768px) 78vw, 440px"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <h3 className="absolute bottom-5 left-5 z-10 text-xl font-semibold text-white md:bottom-6 md:left-6 md:text-2xl">
        {title}
      </h3>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-20 hidden h-[112px] w-[112px] items-center justify-center rounded-full bg-[#7a7a7a]/70 text-sm font-medium tracking-wide text-white backdrop-blur-[2px] [@media(hover:hover)]:flex"
        style={{ x: reduce ? x : springX, y: reduce ? y : springY }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.72,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        View
      </motion.span>
    </Link>
  );
}

function SlideRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex gap-5 pr-5" aria-hidden={duplicate || undefined}>
      {projects.map((project) => (
        <ProjectSlide
          key={`${project.slug}${duplicate ? "-copy" : ""}`}
          slug={project.slug}
          title={project.title}
          image={project.image}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

export function ProjectsCarousel() {
  return (
    <div className="projects-carousel mt-8 overflow-hidden py-6 pl-4 md:pl-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
      <div className="projects-carousel-track flex w-max">
        <SlideRow />
        <SlideRow duplicate />
      </div>
    </div>
  );
}
