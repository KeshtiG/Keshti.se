import VortexBG from "@/components/ui/vortex/VortexBG";
import Parallax from "@/components/parallax/Parallax";
import GradientBG from "@/components/ui/GradientBG";
import { ProjectParallaxCard } from "@/components/projects/ProjectParallaxCard";
import { projects } from "@/components/projects/ProjectData";
import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  const sections = [
    { id: "hero", component: <Hero /> },
    ...projects.slice(0, 4).map((project) => ({
      id: project.title,
      component: <ProjectParallaxCard project={project} />,
    })),
    { id: "contact", component: <ContactBanner /> },
    { id: "footer", component: <Footer /> }
  ];

  return (
    <main>
      <GradientBG />
      <VortexBG />
      <Parallax sections={sections} />
    </main>
  );
}
