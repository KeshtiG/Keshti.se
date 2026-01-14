import { ChevronsDown, FileText } from 'lucide-react';
import { SiFigma, SiReact, SiDotnet, SiWordpress, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { DiPhotoshop, DiIllustrator, DiSass } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";

import { LinearGradient } from 'react-text-gradients'
import { RollingText } from "@/components/ui/Rolling-text";
import Button from "@/components/ui/Buttons/Button";
import Marquee from "react-fast-marquee";
import ScrollDownArrow from "./ui/ScrollDownArrow/ScrollDownArrow";
import { useEffect, useState } from "react";

export default function Hero() {

  // Set icon size based on screen width
  const [iconSize, setIconSize] = useState(32);
  useEffect(() => {
    const updateIconSize = () => setIconSize(window.innerWidth >= 1024 ? 32 : 24);
    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <section className="max-w-full flex flex-col items-center justify-center flex-1 gap-8 md:gap-10 lg:gap-16 pb-16 md:pb-0">

      <div className="flex flex-col items-center gap-2">
        {/* Logo for mobile view */}
        <div className="block md:hidden">
          <img src="/logo.png" alt="Keshti Gyllinger Logo" className="w-14" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-0 md:gap-4 lg:gap-6">
          <RollingText
            text="Keshti"
            inView={false}
            inViewOnce={true}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="text-[3rem] lg:text-[6rem] font-bold text-center text-foreground relative text-glow font-display"
          />
          <LinearGradient gradient={['to left', 'rgb(124 182 255), rgb(233 151 255)']} className="text-[3rem] lg:text-[6rem] font-bold font-display text-center mt-[-20] md:mt-[-28] lg:mt-0">
            Gyllinger
          </LinearGradient>
        </div>
        <span className="text-sm/6 lg:text-base xl:text-2xl tracking-widest text-neutral-100 text-center md:px-0 py-2 md:py-0"><span className="text-primary-200">UI/UX</span> Designer &<br/><span className="text-link-200">Front-End</span> Developer</span>
      </div>

      <div className="flex flex-col items-center gap-2 max-w-full">
        <span className="text-xs uppercase tracking-widest text-primary-100 font-semibold text-center hidden md:block pb-2 px-8 border-b border-neutral-700 w-fit">Toolbox</span>

        <div className="w-full sm:w-lg py-4">
          <Marquee gradient={false} speed={40} gradientColor="rgb(12,5,10)" className="text-primary-100 md:text-primary-200">
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
        </div>
      </div>

      <div className="w-full px-4 lg:px-0 md:w-lg flex items-center justify-center gap-3 md:gap-4 text-base mt-2 md:mt-4">
        <Button variant="primary" icon={<ChevronsDown size={18} />} className="flex-1 text-base md:text-lg">View Projects</Button>
        <Button variant="secondary" icon={<FileText size={18} />} className="flex-1 text-base md:text-lg">View CV</Button>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-link-200 font-semibold text-center hidden md:block pb-2 px-8">Showcased projects</span>
        <ScrollDownArrow />
      </div>

    </section>
  )
}
