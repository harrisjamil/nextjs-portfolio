"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type ProjectCardProps = {
  href: string;
  title: string;
  subtitle: string;
  image: string;
  heading?: "h2" | "h3";
};

export function ProjectCard({
  href,
  title,
  subtitle,
  image,
  heading = "h3",
}: ProjectCardProps) {
  const Title = heading;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-[28px] border border-line"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-soft">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.06]"
          />
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <Title className="text-lg font-semibold">{title}</Title>
            <p className="text-sm text-muted">{subtitle}</p>
          </div>
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
