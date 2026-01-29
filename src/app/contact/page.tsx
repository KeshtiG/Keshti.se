"use client";
import VortexBG from "@/components/ui/vortex/VortexBG";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import { useScroll } from "motion/react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/Footer";

const Contact = () => {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <VortexBG />

      <main className="container-width-sm container-x-padding container-y-margin container-flex-layout">
        <ContactHeader />
        <ContactForm />
      </main>

      <ScrollIndicator scrollYProgress={scrollYProgress} />
      <Footer className="mt-32" />
    </>
  )
}

export default Contact;
