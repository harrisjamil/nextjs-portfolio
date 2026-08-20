import { Closing } from "@/components/closing";
import {
  About,
  Hero,
  ProjectsPreview,
  ServicesPreview,
} from "@/components/home";
import { Process } from "@/components/process-scroll";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <About />
      <ServicesPreview />
      <Process />
      <Closing />
    </>
  );
}
