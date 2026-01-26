"use client";
import { useScroll } from "motion/react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import PageHeader from "@/components/PageHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import ScreenAndPlant from "@/components/ui/illustrations/ScreenAndPlant";

export default function Projects() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <main className="container-width container-x-padding container-y-margin flex flex-col items-center mx-auto gap-24 lg:gap-48">
        <PageHeader
          title="Projects"
          description="Here, you'll find a curated collection of projects that I am proud of. Each project represents a unique challenge that I have learned a lot from. I've chosen these examples to showcase the breadth and depth of my skills and approach to problem-solving."
          illustration={<ScreenAndPlant />}
        />
        <ProjectGrid />
      </main>
      <ContactBanner />
      <ScrollIndicator scrollYProgress={scrollYProgress} />

      <Footer />
    </>
  );
}
