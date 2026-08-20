import Link from "next/link";
import { LoopVideo } from "@/components/loop-video";
import { SplitLink } from "@/components/motion";
import { socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-6 md:py-16">
        <div>
          <Link
            href="/#contact"
            className="group font-display text-[clamp(2.8rem,9vw,6.5rem)] font-semibold uppercase leading-[0.85] tracking-tight"
          >
            Start a Project
            <span className="ml-3 inline-block text-accent transition group-hover:translate-x-2">
              →
            </span>
          </Link>
          <div className="mt-8 flex flex-col gap-4 text-sm text-muted">
            <p className="font-medium text-fg">Socials</p>
            <div className="flex flex-wrap gap-4">
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
            <p>© {new Date().getFullYear()} Dean. All rights reserved.</p>
          </div>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <LoopVideo
            src="/videos/footer-avatar.mp4"
            poster="/images/avatar-bust.png"
            label="Dean waving"
            className="h-40 w-40 rounded-[28px] object-cover md:h-48 md:w-48"
          />
        </div>
      </div>
    </footer>
  );
}
