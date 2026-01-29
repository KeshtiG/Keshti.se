"use client";
import { useScroll } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/Footer";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { projectDetails, accordionItems } from "@/components/projects/data/ringtailor-data";
import { tickerImages } from "@/components/projects/data/ringtailor-data";
import ImageTicker from "@/components/ImageTicker";
import ProjectSolutionCarousel from "@/components/projects/ProjectSolutionCarousel";
import { screens } from "@/components/projects/data/ringtailor-data";
import { LuEye } from "react-icons/lu";
import SectionHeader from "@/components/ui/SectionHeader";
import { Section } from "lucide-react";

const RingTailor = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <main className="container-width container-x-padding container-y-margin container-flex-layout">
        <PageHeader
          title="RingTailor"
          description={
            <>
              <p className="body-large">During my internship as part of my UX design education, I worked on the latest version of Schalins Ringar's ring design app.</p>

              <p className="body-large">My job was to <span className="body-strong">apply better usability and a more modern look</span> to the app, as well as the company's new branding guidelines, without making too many changes to the structure.</p>
            </>
          }
          ticker={<ImageTicker images={tickerImages} timeout={3000} imgClassName="object-contain opacity-70" />}
        />

        <ProjectDetails
          {...projectDetails}
          accordionItems={accordionItems}
        />
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-16 items-center">
          <SectionHeader title="Solution Overview" icon={<LuEye />} />
          <ProjectSolutionCarousel images={screens} orientation="vertical" />
        </div>
      </main>
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-4 md:mt-8 lg:mt-16" />
    </>
  )
}

export default RingTailor;
