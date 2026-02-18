import VortexBG from "@/components/ui/vortex/VortexBG";
import Parallax from "@/components/parallax/Parallax";
import GradientBG from "@/components/ui/GradientBG";
import ProjectParallaxCard from "@/components/projects/ProjectParallaxCard";
import { projects } from "@/components/projects/data/project-data";
import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  const sections = [
    { id: "hero", component: <Hero /> },
    ...projects.slice(0, 4).map((project) => ({
      id: project.title,
      component: <ProjectParallaxCard project={project} />,
    })),
    { id: "contact", component: <ContactBanner /> },
    { id: "footer", component: <Footer className="h-full justify-center" /> }
  ];

  return (
    <main>
      <GradientBG />
      <VortexBG />
      <Parallax sections={sections} />
    </main>
  );
}

export default Home;
