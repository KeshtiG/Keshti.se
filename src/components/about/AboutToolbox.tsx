"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import { tools } from "@/components/about/data/tools";
import ShowMore from "@/components/ui/buttons/ShowMore";
import { VscTools } from "react-icons/vsc";

export default function AboutToolbox() {
  // Scroll settings for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Set icon size based on screen width
  const [iconSize, setIconSize] = useState(32);
  useEffect(() => {
    const updateIconSize = () => setIconSize(window.innerWidth >= 1024 ? 48 : 24);
    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <section className="container-width container-x-padding">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 lg:p-8 border-0 lg:border border-border rounded-lg">
        <div className="flex gap-3 md:gap-4 items-center h2 text-primary-300">
          <VscTools />
          <h2>My Toolbox</h2>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-16">
          <ShowMore collapsedHeight="max-h-32" className="flex flex-col gap-4 w-full lg:w-1/2 xl:w-2/5">
            <div className="flex flex-col gap-4 pb-4 text-foreground-secondary">
              <p className="pb-2 border-b border-border text-sm text-neutral-50 uppercase tracking-widest">Story time</p>
              <p>I started coding with HTML and CSS at a very basic level when I was a kid, and later deepened those skills through formal frontend studies. Along the way, I learned to write cleaner, more flexible CSS using Sass and BEM.</p>
              <p>During the same education, I worked with WordPress, building custom child themes and handling administration. I’ve studied JavaScript in several rounds, and more recently started learning TypeScript after discovering the fantastic world of React + Tailwind during an internship.</p>
              <p>I’ve used Photoshop and Illustrator since a young age, and as a UX designer, Figma is my go-to tool for design, documentation, and pretty much everything in between.</p>
              <p>My most recent backend studies gave me a solid foundation in C# and .NET, along with a better understanding of how to work with databases.</p>
            </div>
          </ShowMore>

          <div className="flex flex-col gap-4 w-full lg:w-1/2 xl:w-3/5">
            <p className="pb-2 border-b border-border text-sm text-neutral-50 uppercase tracking-widest">Tools</p>
            <motion.div
              ref={ref}
              variants={staggerContainer(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <motion.div key={tool.name} variants={slideUp}>
                    <div className="flex flex-col items-center justify-center gap-2 p-4 border border-neutral-700 rounded-md">
                      <div className="text-primary-300">
                        <Icon size={iconSize} />
                      </div>
                      <p className="text-sm xl:text-base text-foreground-secondary text-center">{tool.name}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
