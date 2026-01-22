import { SiFigma, SiReact, SiDotnet, SiWordpress, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { DiPhotoshop, DiIllustrator, DiSass } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import React from "react";

type Tool = {
  name: string;
  icon: React.ComponentType<{ size: number }>;
}

export const tools: Tool[] = [
  { name: "Figma", icon: SiFigma },
  { name: "Photoshop", icon: DiPhotoshop },
  { name: "Illustrator", icon: DiIllustrator },
  { name: "Framer", icon: FiFramer },
  { name: "HTML5", icon: TiHtml5 },
  { name: "Sass", icon: DiSass },
  { name: "WordPress", icon: SiWordpress },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: ".NET", icon: SiDotnet },
]
