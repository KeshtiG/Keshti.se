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
  const { scrollYProgress } = useScroll()

  return (
    <>
      <main className="container-width container-x-padding container-y-margin mx-auto flex flex-col items-center gap-24 lg:gap-48">
        <AboutHeader />
        <AboutToolbox />
        <AboutTimeline />
        <AboutHobbies />
      </main>
      <ContactBanner />
      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer />
    </>
  )
}
