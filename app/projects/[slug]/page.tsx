import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Frame, SectionLabel } from "@/components/ui";
import { getMoreProjects, getProject, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project — Dean" };
  return {
    title: `${project.title} — Dean`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const more = getMoreProjects(slug);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
      <Reveal>
        <Button href="/projects" variant="ghost">
          Back
        </Button>
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-bold uppercase leading-[0.85] tracking-tight">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {project.description}
          </p>
          <Button href={project.live} variant="cyan" className="mt-6">
            Live Demo
          </Button>
        </Reveal>
        <Reveal delay={0.08}>
          <Frame className="space-y-4 p-6 text-sm">
            <Row label="Services" value={project.services} />
            <Row label="Client" value={project.client} />
            <Row label="Duration" value={project.duration} />
            <Row label="Date" value={project.date} />
          </Frame>
        </Reveal>
      </div>
      <Reveal delay={0.12}>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[32px] border border-line">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-16 flex items-end justify-between gap-4">
          <SectionLabel>More Project</SectionLabel>
          <Button href="/projects">View all Projects</Button>
        </div>
      </Reveal>
      <Stagger className="mt-6 grid gap-4 md:grid-cols-2">
        {more.map((item) => (
          <RevealItem key={item.slug}>
            <ProjectCard
              href={`/projects/${item.slug}`}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          </RevealItem>
        ))}
      </Stagger>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-3">
      <span className="text-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
