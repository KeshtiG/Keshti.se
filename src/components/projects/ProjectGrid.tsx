"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import { projects } from "@/components/projects/ProjectData";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectGrid() {
  // Scroll settings for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <motion.div
        ref={ref}
        variants={staggerContainer()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) =>
          <motion.div
            key={project.title}
            variants={slideUp()}
            className="h-full"
          >
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              tags={project.tags}
              pageUrl={project.pageUrl}
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
