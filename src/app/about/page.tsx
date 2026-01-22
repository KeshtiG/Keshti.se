"use client";
import { motion, useScroll } from "motion/react";
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
    <main className="w-full flex flex-col items-center gap-24 lg:gap-48 mt-8 md:mt-32 lg:mt-56">
      <AboutHeader />
      <AboutToolbox />
      <AboutTimeline />
      <AboutHobbies />
      <ContactBanner />
      <motion.div
        className="bg-primary-500"
        id="scroll-indicator"
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
        }}
      />
    </main>
    <Footer className="mt-8 md:mt-16 lg:mt-24" />
    </>
  )
}
