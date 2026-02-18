"use client";
import * as data from "@/components/projects/data/ringtailor-data";
import { useScroll } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import ProjectLearnings from "@/components/projects/ProjectLearnings";
import ProjectTextSection from "@/components/projects/ProjectTextSection";
import ProjectResearchInsights from "@/components/projects/ProjectResearchInsights";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import SectionHeader from "@/components/ui/SectionHeading";
import ImageTicker from "@/components/ImageTicker";
import ImplementationSection from "@/app/projects/ringtailor/components/ImplementationSection";
import PageDivider from "@/components/ui/PageDivider";
import Footer from "@/components/Footer";
import { LuEye, LuUserRoundSearch, LuLightbulb } from "react-icons/lu";
import ProjectReflections from "@/components/projects/ProjectReflections";

const RingTailor = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <main className="container-width container-x-padding container-y-margin container-flex-layout">
        {/* Page Header */}
        <PageHeader
          title={data.projectHeader.title}
          description={data.projectHeader.description}
          ticker={<ImageTicker images={data.tickerImages} timeout={3000} imgClassName="object-contain opacity-70" />}
        />

        <PageDivider text="<Project Overview>" />

        {/* Details */}
        <ProjectDetails
          {...data.projectDetails}
          accordionItems={data.accordionItems}
        />

        {/* Solution Overview */}
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-16 md:items-center">
          <SectionHeader title="Solution Overview" icon={<LuEye />} />
          <ProjectCarousel images={data.screens} showImageTitle={true} />
        </div>

        {/* Learnings */}
        <ProjectLearnings learnings={data.learnings} />

        <PageDivider text="</Project Overview> <Research>" />

        {/* Research */}
        <ProjectTextSection sections={data.researchSections} images={data.researchImages} sectionTitle="Research" sectionTitleIcon={<LuUserRoundSearch />} />
        <ProjectCarousel images={data.researchUserArchetypes} showImageTitle={false} showCarouselHeading={true} carouselHeading="User Archetypes" width="wide" />
        <ProjectResearchInsights insights={data.researchInsights} />

        <PageDivider text="</Research> <Ideation>" />

        {/* Ideation */}
        <ProjectTextSection sections={data.ideationSections} images={data.ideationImages} sectionTitle="Ideation" sectionTitleIcon={<LuLightbulb />} />

        <PageDivider text="</Ideation> <Implementation>" />

        {/* Implementation */}
        <ImplementationSection />

        <PageDivider text="</Implementation> <Reflections>" />
        <ProjectReflections content={data.reflections} />
        
      </main>
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-4 md:mt-8 lg:mt-16" />
    </>
  )
}

export default RingTailor;
