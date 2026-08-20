import { Reveal } from "@/components/motion";
import { Button, Frame } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[900px] items-center px-4 py-16 md:px-6">
      <Reveal className="w-full">
        <Frame className="w-full px-8 py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Lost in the grid
          </p>
          <h1 className="font-display mt-4 text-[clamp(5rem,18vw,11rem)] font-bold leading-none tracking-tight">
            404
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted">
            This page wandered off. Let&apos;s get you back to the work, the
            services, or a conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Home</Button>
            <Button href="/projects" variant="ghost">
              Projects
            </Button>
            <Button href="/#contact" variant="cyan">
              i Want to Chat
            </Button>
          </div>
        </Frame>
      </Reveal>
    </div>
  );
}
