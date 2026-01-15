"use client";
import Tag from "@/components/ui/Tag";
import { Project } from "./ProjectData";
import { useEffect, useRef, useState } from "react"

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "motion/react"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function ProjectCard({ project }: { project: Project }) {

  // Ref for the section to track scroll position
  const ref = useRef(null);

  // Get scroll progress of the section
  const { scrollYProgress } = useScroll({ target: ref });

  // Use different distance for parallax effect based on screen size
  const [distance, setDistance] = useState(100);
  useEffect(() => {
    const updateDistance = () => setDistance(window.innerWidth >= 1024 ? 200 : 100);
    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  const y = useParallax(scrollYProgress, distance);

  return (
    <section className="w-full px-0 md:px-8 lg:px-16 xl:px-24 flex flex-col justify-center items-center lg:flex-row gap-0 md:gap-4 lg:gap-8 xl:gap-16">
      <div ref={ref} className="w-full h-[40vh] lg:w-3/5 lg:h-[60vh] relative overflow-hidden md:rounded-lg shrink-0">
        <img src={project.imgUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
      </div>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="w-11/12 lg:w-2/5 flex flex-col justify-center bg-neutral-900/60 backdrop-blur-sm lg:bg-background border border-neutral-700 lg:border-background p-4 md:p-8 lg:p-0 rounded-lg gap-4 md:gap-6 will-change-transform"
      >
        <h2 className="font-bold font-display text-3xl md:text-4xl lg:text-6xl">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <p className="text-base lg:text-lg text-foreground-secondary">{project.description}</p>
      </motion.div>
    </section>
  );
}
