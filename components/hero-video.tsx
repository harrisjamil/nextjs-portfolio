"use client";

import Image from "next/image";
import { LoopVideo } from "@/components/loop-video";

export function HeroVideo() {
  return (
    <Image
      src="/images/hero-avatar.jpg"
      alt="Harris avatar"
      width={480}
      height={480}
      priority
      className="h-[clamp(4.5rem,12vw,9rem)] w-[clamp(4.5rem,12vw,9rem)] shrink-0 rounded-[28px] object-cover object-top"
    />
  );
}

export function AboutVideo() {
  return (
    <LoopVideo
      src="/videos/about-avatar.mp4"
      poster="/images/avatar-about.png"
      label="Dean sitting with a laptop"
      className="aspect-square h-auto w-full rounded-[30px] object-cover"
    />
  );
}
