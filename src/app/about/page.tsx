"use client";
import { motion, useScroll } from "motion/react";

import AboutHeader from "@/components/about/AboutHeader";
import AboutToolbox from "@/components/about/AboutToolbox";
import AboutTimeline from "@/components/about/AboutTimeline";
import Footer from "@/components/Footer";

export default function About() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="w-full flex flex-col items-center gap-24 lg:gap-48 mt-8 md:mt-32 lg:mt-56 px-4 md:px-8">
      <AboutHeader />
      <AboutToolbox />
      <AboutTimeline />
      <Footer className="mt-20" />
      <motion.div
        id="scroll-indicator"
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "hsl(270, 50%, 30%)",
        }}
      />
    </div>
  )
}
