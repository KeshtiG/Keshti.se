"use client";
import { useScroll } from "motion/react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import PageHeader from "@/components/PageHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import ScreenAndPlant from "@/components/ui/illustrations/ScreenAndPlant";

const Projects = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <main className="container-width container-x-padding container-y-margin container-flex-layout">
        <PageHeader
          title="Projects"
          description={<p className="body-large">Here, you'll find a curated collection of projects that I am proud of. Each project represents a unique challenge that I have learned a lot from. I've chosen these examples to <span className="font-bold text-foreground">showcase the breadth and depth of my skills</span> and approach to problem-solving.</p>}
          illustration={<ScreenAndPlant />}
        />
        <ProjectGrid />
      </main>
      <ContactBanner />
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-4 md:mt-8 lg:mt-16" />
    </>
  );
}

export default Projects;
