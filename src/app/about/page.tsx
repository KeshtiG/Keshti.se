"use client";
import { useScroll } from "motion/react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import AboutHeader from "@/components/about/AboutHeader";
import AboutToolbox from "@/components/about/AboutToolbox";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutHobbies from "@/components/about/AboutHobbies";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export default function About() {
  // Scroll progress for scroll indicator
  const { scrollYProgress } = useScroll()

  return (
    <>
      <main className="container-width container-x-padding container-y-margin container-flex-layout">
        <AboutHeader />
        <AboutToolbox />
        <AboutTimeline />
        <AboutHobbies />
      </main>
      <ContactBanner />
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-4 md:mt-8 lg:mt-16" />
    </>
  )
}
