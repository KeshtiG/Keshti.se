"use client";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { Project } from "./data/project-data";
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

const ProjectParallaxCard = ({ project }: { project: Project }) => {
  const ref = useRef(null);
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

  const href = project.oldPageUrl || project.pageUrl;
  const isExternal = Boolean(project.oldPageUrl);
  return (
    <section className="container-width px-0 md:container-x-padding">
      <Link
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="flex flex-col justify-center items-center lg:flex-row gap-0 md:gap-4 lg:gap-8 xl:gap-16">

          <div ref={ref} className="w-full h-[40vh] lg:w-3/5 lg:h-[60vh] relative overflow-hidden lg:rounded-lg shrink-0">
            <img src={project.imgUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
          </div>

          <motion.div
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            style={{ y }}
            className="w-11/12 lg:w-2/5 flex flex-col justify-center bg-primary-900/60 backdrop-blur-sm lg:bg-background border border-neutral-700 lg:border-background p-4 md:p-8 lg:p-0 rounded-lg gap-4 md:gap-6 will-change-transform"
          >
            <h2 className="font-bold font-display text-3xl md:text-4xl lg:text-6xl">{project.title}</h2>

            <p className="text-base lg:text-lg text-foreground-secondary mb-4">{project.description}</p>
            
            {isExternal && (
              <p className="text-sm p-1 md:p-2 rounded-md border border-border-light mb-2">This site is under development. Link opens the project on my old portfolio site in a new tab.</p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>

          </motion.div>

        </div>
      </Link>
    </section>
  );
}

export default ProjectParallaxCard;
