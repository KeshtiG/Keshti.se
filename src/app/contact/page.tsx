"use client";
import VortexBG from "@/components/ui/vortex/VortexBG";
import ContactForm from "@/components/ContactForm";
import { useScroll } from "motion/react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/Footer";

export default function Contact() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <VortexBG />

      <main className="w-full max-w-5xl container-x-padding container-y-margin mx-auto flex flex-col gap-16 lg:gap-32 xl:gap-40">
        <ContactForm />
      </main>

      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-32" />
    </>
  )
}
