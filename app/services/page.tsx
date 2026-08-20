import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Frame, Marquee, SectionLabel } from "@/components/ui";
import { serviceTags, services } from "@/lib/data";

export const metadata = {
  title: "Services — Dean",
  description:
    "Web design, branding, product design, and graphics from Dean.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
          What I Bring to the Table
        </p>
        <SectionLabel>Services</SectionLabel>
      </Reveal>
      <div className="mt-8">
        <Marquee items={serviceTags} reverse />
      </div>
      <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <RevealItem key={service.num}>
            <Frame className="p-8">
              <p className="text-sm text-muted">{service.num}</p>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-soft px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Frame>
          </RevealItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <Frame className="mt-8 flex flex-col items-start justify-between gap-4 p-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Ready to Get Started?</h3>
            <p className="mt-2 text-muted">
              Tell me about your project and let&apos;s create something amazing
              together.
            </p>
          </div>
          <Button href="/#contact" variant="cyan">
            i Want to Chat
          </Button>
        </Frame>
      </Reveal>
    </div>
  );
}
