import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Frame, Marquee, SectionLabel } from "@/components/ui";
import { projectValues, projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Harris",
  description:
    "Software, AI, and cybersecurity projects from Harris.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
          Take a Look at My Portfolio
        </p>
        <SectionLabel>Projects</SectionLabel>
      </Reveal>
      <div className="mt-8">
        <Marquee items={projectValues} />
      </div>
      <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard
              href={`/projects/${project.slug}`}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              heading="h2"
            />
          </RevealItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <Frame className="mt-8 flex flex-col items-start justify-between gap-4 p-8 md:flex-row md:items-center">
          <p className="text-xl font-semibold">Have a project in mind?</p>
          <Button href="/#contact" variant="cyan">
            i Want to Chat
          </Button>
        </Frame>
      </Reveal>
    </div>
  );
}
