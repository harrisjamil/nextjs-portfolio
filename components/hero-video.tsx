"use client";

import { LoopVideo } from "@/components/loop-video";

export function HeroVideo() {
  return (
    <LoopVideo
      src="/videos/hero-avatar.mp4"
      poster="/images/avatar-bust.png"
      label="Dean avatar"
      className="h-[clamp(4.5rem,12vw,9rem)] w-[clamp(6rem,16vw,12rem)] rounded-[28px] object-cover"
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
