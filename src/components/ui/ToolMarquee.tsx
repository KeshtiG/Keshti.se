import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { SiFigma, SiReact, SiDotnet, SiWordpress, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { DiPhotoshop, DiIllustrator, DiSass } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";

export default function ToolMarquee() {
  // Set icon size based on screen width
  const [iconSize, setIconSize] = useState(32);
  useEffect(() => {
    const updateIconSize = () => setIconSize(window.innerWidth >= 1024 ? 32 : 24);
    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <Marquee gradient={false} speed={40} className="text-primary-100 md:text-primary-200">
      <SiFigma size={iconSize} style={{ margin: "0 1rem" }} aria-label="Figma icon" />
      <DiPhotoshop size={iconSize} style={{ margin: "0 1rem" }} aria-label="Photoshop icon" />
      <DiIllustrator size={iconSize} style={{ margin: "0 1rem" }} aria-label="Illustrator icon" />
      <FiFramer size={iconSize} style={{ margin: "0 1rem" }} aria-label="Framer icon" />
      <TiHtml5 size={iconSize} style={{ margin: "0 1rem" }} aria-label="HTML icon" />
      <DiSass size={iconSize} style={{ margin: "0 1rem" }} aria-label="Sass icon" />
      <SiJavascript size={iconSize} style={{ margin: "0 1rem" }} aria-label="JavaScript icon" />
      <SiTypescript size={iconSize} style={{ margin: "0 1rem" }} aria-label="TypeScript icon" />
      <SiReact size={iconSize} style={{ margin: "0 1rem" }} aria-label="React icon" />
      <SiTailwindcss size={iconSize} style={{ margin: "0 1rem" }} aria-label="Tailwind icon" />
      <SiWordpress size={iconSize} style={{ margin: "0 1rem" }} aria-label="WordPress icon" />
      <SiDotnet size={iconSize} style={{ margin: "0 1rem" }} aria-label=".NET icon" />
    </Marquee>
  )
}
