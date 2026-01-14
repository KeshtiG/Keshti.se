"use client"
import styles from "./Parallax.module.css"
import Hero from "@/components/Hero";
import ContactBanner from "../ContactBanner";
import { projects } from "./ProjectData";
import { ProjectCard } from "./ProjectCard";

import {
  motion,
  useScroll,
  useSpring,
} from "motion/react"

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <section className={`${styles["parallax-container"]} h-svh flex flex-col lg:justify-center items-center`}>
        <Hero />
      </section>

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />

      <section className={`${styles["parallax-container"]} min-h-svh flex flex-col justify-center items-center`}>
        <ContactBanner />
      </section>
    </>
  );
}
