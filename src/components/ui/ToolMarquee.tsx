import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

// Icon imports
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
      <SiFigma size={iconSize} style={{ margin: "0 1rem" }} />
      <DiPhotoshop size={iconSize} style={{ margin: "0 1rem" }} />
      <DiIllustrator size={iconSize} style={{ margin: "0 1rem" }} />
      <FiFramer size={iconSize} style={{ margin: "0 1rem" }} />
      <TiHtml5 size={iconSize} style={{ margin: "0 1rem" }} />
      <DiSass size={iconSize} style={{ margin: "0 1rem" }} />
      <SiJavascript size={iconSize} style={{ margin: "0 1rem" }} />
      <SiTypescript size={iconSize} style={{ margin: "0 1rem" }} />
      <SiReact size={iconSize} style={{ margin: "0 1rem" }} />
      <SiTailwindcss size={iconSize} style={{ margin: "0 1rem" }} />
      <SiWordpress size={iconSize} style={{ margin: "0 1rem" }} />
      <SiDotnet size={iconSize} style={{ margin: "0 1rem" }} />
    </Marquee>
  )
}
