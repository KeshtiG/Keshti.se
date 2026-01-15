"use client";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import { useRef } from "react";

import ToolboxItem from "./ToolboxItem";
import ShowMore from "@/components/ui/ShowMore";

import { SiFigma, SiReact, SiDotnet, SiWordpress, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { DiPhotoshop, DiIllustrator, DiSass } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { VscTools } from "react-icons/vsc";
import { useEffect, useState } from "react";

export default function AboutToolbox() {
  // Set icon size based on screen width
  const [iconSize, setIconSize] = useState(32);
  useEffect(() => {
    const updateIconSize = () => setIconSize(window.innerWidth >= 1024 ? 48 : 24);
    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  // Scroll settings for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Tool data
  const tools = [
    { name: "Figma", icon: <SiFigma size={iconSize} /> },
    { name: "Photoshop", icon: <DiPhotoshop size={iconSize} /> },
    { name: "Illustrator", icon: <DiIllustrator size={iconSize} /> },
    { name: "Framer", icon: <FiFramer size={iconSize} /> },
    { name: "HTML5", icon: <TiHtml5 size={iconSize} /> },
    { name: "Sass", icon: <DiSass size={iconSize} /> },
    { name: "WordPress", icon: <SiWordpress size={iconSize} /> },
    { name: "React", icon: <SiReact size={iconSize} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={iconSize} /> },
    { name: "JavaScript", icon: <SiJavascript size={iconSize} /> },
    { name: "TypeScript", icon: <SiTypescript size={iconSize} /> },
    { name: ".NET", icon: <SiDotnet size={iconSize} /> },
  ]

  return (
    <section className="flex flex-col w-full lg:w-11/12 xl:w-10/12 gap-8 md:gap-12 lg:gap-16 lg:p-8 border-0 md:border border-border rounded-lg">
      <div className="flex gap-2 md:gap-4 items-center text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-200">
        <VscTools />
        <h2 className="text-foreground">My Toolbox</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-16">
        <ShowMore collapsedHeight="max-h-32" className="flex flex-col gap-4 w-full lg:w-1/2 xl:w-2/5">
          <div className="flex flex-col gap-4 pb-4 text-foreground-secondary">
            <p className="pb-2 border-b border-border text-sm text-neutral-50 uppercase tracking-widest">Story time</p>
            <p>I started coding with HTML and CSS at a very basic level when I was a kid, and later deepened those skills through formal frontend studies. Along the way, I learned to write cleaner, more flexible CSS using Sass and BEM.</p>
            <p>During the same education, I worked with WordPress, building custom child themes and handling administration. I’ve studied JavaScript in several rounds, and more recently started learning TypeScript after discovering the fantastic world of React + Tailwind during an internship.</p>
            <p>I’ve used Photoshop and Illustrator since a young age, and as a UX designer, Figma is my go-to tool for design, documentation, and pretty much everything in between.</p>
            <p>My most recent backend studies gave me a solid foundation in C# and .NET, along with a better understanding of how databases work.</p>
          </div>
        </ShowMore>

        <div className="flex flex-col gap-4 w-full lg:w-1/2 xl:w-3/5">
          <p className="pb-2 border-b border-border text-sm text-neutral-50 uppercase tracking-widest">Tools</p>
          <motion.div
            ref = {ref}
            variants = {staggerContainer}
            initial = "hidden"
            animate = {isInView ? "visible" : "hidden"}
            className="grid grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {tools.map((tool) => (
              <motion.div key = {tool.name} variants = {slideUp}>
                <ToolboxItem name={tool.name} icon={tool.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
