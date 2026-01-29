"use client";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";
import VortexBG from "@/components/ui/vortex/VortexBG";

const AboutHeader =() =>{
  return (
    <section className="flex flex-col justify-center items-center">
      <VortexBG />
      <div className="max-w-6xl flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 items-center">
        <div className="w-65 lg:w-97 h-65 lg:h-97 flex justify-center items-center bg-linear-to-br from-accent-400 to-primary-600 rounded-full">
          <div className="w-64 lg:w-96 h-64 lg:h-96 rounded-full overflow-hidden bg-linear-to-br from-primary-700 to-neutral-900">
            <img src="/profileImg.webp" alt="Profile Image" className="w-full h-full object-center" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <motion.div 
            initial = "hidden"
            variants = {slideUp()}
            animate = "visible"
          >
            <h1>👋🏼 Hello, I'm <span className="text-primary-300">Keshti</span></h1>
          </motion.div>

          <div className="mt-6 space-y-4">
            <p className="body-large">
              I’m a creative and communicative <span className="body-strong">UI/UX Designer and Front-End Developer</span> with a strong passion for creating digital solutions that not only look great, but also provide smooth and engaging user experiences.
            </p>
            <p className="body-large">
              With a background in both design and development, I bring an advantageous blend of skills to the table. From crafting intuitive user interfaces to writing clean, efficient code, I thrive on turning great ideas into real solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeader;
