"use client";
import VortexBG from "./ui/vortex/VortexBG";
import Button from "./ui/buttons/Button";
import CoffeeCup from "@/components/ui/CoffeeCup";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideUp } from "@/lib/animations";
import { Mail } from 'lucide-react';

export default function ContactBanner() {
  // Scroll settings for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="w-full min-h-[80vh] flex-1 flex flex-col gap-4 md:gap-6 lg:gap-6 items-center justify-center relative px-4 md:px-6 lg:px-8 text-center">
        <VortexBG />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Want to Collaborate?</h2>
        </motion.div>
        <p className="text-lg lg:text-xl">I’m always open to new challenges and cool ideas 👌🏻<br />Got something brewing? <span className="text-foreground font-bold">Let’s talk!</span></p>
        <Button variant="primary" href="/contact" icon={<Mail size={18} />} className="text-base md:text-lg px-8 w-fit my-4">Get in Touch</Button>

        <CoffeeCup />
      </section>
    </>
  );
}
