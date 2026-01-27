"use client";
import { useScroll } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/Footer";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { projectDetails, accordionItems } from "@/components/projects/data/ringtailor-data";

export default function RingTailor() {
  // Scroll progress for scroll indicator
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
          imgUrl="/project-covers/ringtailor-cover.webp"
        />
        
        <ProjectDetails
          {...projectDetails}
          accordionItems={accordionItems}
        />
      </main>
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-4 md:mt-8 lg:mt-16" />
    </>
  )
}
