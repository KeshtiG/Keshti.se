"use client";
import { useScroll } from "motion/react";
import AboutHeader from "@/components/about/AboutHeader";
import AboutToolbox from "@/components/about/AboutToolbox";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutHobbies from "@/components/about/AboutHobbies";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function About() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <main className="container-width container-x-padding mx-auto flex flex-col items-center gap-24 lg:gap-48 mt-8 md:mt-32 lg:mt-56 mb-24 lg:mb-48 2xl:mb-56">
        <AboutHeader />
        <AboutToolbox />
        <AboutTimeline />
        <AboutHobbies />
      </main>
      <ContactBanner />
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      
      <Footer className="mt-8 md:mt-16 lg:mt-24" />
    </>
  )
}
