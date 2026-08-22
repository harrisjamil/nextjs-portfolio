"use client";

import { LoopVideo } from "@/components/loop-video";

export function HeroVideo() {
  return (
    <LoopVideo
      src="/videos/hero-avatar.mp4"
      poster="/images/avatar-bust.png"
      label="Haris avatar"
      className="h-[clamp(5.5rem,14vw,11rem)] w-[clamp(5.5rem,14vw,11rem)] rounded-[28px] object-cover"
    />
  );
}

export function AboutVideo() {
  return (
    <LoopVideo
      src="/videos/about-avatar.mp4"
      poster="/images/avatar-about.png"
      label="Haris sitting with a laptop"
      className="aspect-square h-auto w-full rounded-[30px] object-cover"
    />
  );
}
