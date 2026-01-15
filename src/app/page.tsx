import VortexBG from "@/components/ui/Vortex/VortexBG";
import Parallax from "@/components/Parallax/Parallax";
import GradientBG from "@/components/ui/GradientBG";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/ProjectData";
import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";

export default function Home() {
  const sections = [
    { id: "hero", component: <Hero /> },
    ...projects.map((project) => ({
      id: project.title,
      component: <ProjectCard project={project} />,
    })),
    { id: "contact", component: <ContactBanner /> },
  ];

  return (
    <>
      <GradientBG />
      <VortexBG />
      <Parallax sections={sections} />
    </>
  );
}
