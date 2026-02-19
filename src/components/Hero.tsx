"use client";
import { LuFolders, LuFileText } from "react-icons/lu";
import { LinearGradient } from 'react-text-gradients'
import { RollingText } from "@/components/ui/Rolling-text";
import Button from "@/components/ui/buttons/Button";
import ScrollDownArrow from "./ui/scroll-down-arrow/ScrollDownArrow";
import ToolMarquee from './ui/ToolMarquee';

const Hero = () => {
  return (
    <section className="max-w-full flex flex-col items-center justify-center flex-1 gap-8 md:gap-10 lg:gap-16 pb-16 md:pb-0">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col lg:flex-row justify-center gap-0 md:gap-4 lg:gap-6">
          <RollingText
            text="Keshti"
            inView={false}
            inViewOnce={true}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="text-[4rem] md:text-[4.5rem] lg:text-[6rem] font-bold text-center text-foreground relative text-glow font-display"
          />
          <LinearGradient gradient={['to left', 'rgb(124 182 255), rgb(233 151 255)']} className="text-[4rem] md:text-[4.5rem] lg:text-[6rem] font-bold font-display text-center mt-[-20] md:mt-[-28] lg:mt-0">
            Gyllinger
          </LinearGradient>
        </div>
        <span className="text-base lg:text-xl xl:text-2xl tracking-widest text-neutral-100 text-center md:px-0 py-2 md:py-0"><span className="text-primary-200 font-semibold">UI/UX</span> Designer &<br/><span className="text-accent-200 font-semibold">Front-End</span> Developer</span>
      </div>

      <div className="flex flex-col items-center gap-2 max-w-full">
        <span className="text-xs uppercase tracking-widest text-primary-100 font-semibold text-center hidden md:block pb-2 px-8 border-b border-neutral-700 w-fit">Toolbox</span>

        <div className="w-full sm:w-lg py-4">
          <ToolMarquee />
        </div>
      </div>

      <div className="w-full px-4 lg:px-0 md:w-lg flex items-center justify-center gap-3 md:gap-4 text-base mt-2 md:mt-4">
        <Button variant="primary" href="/projects" icon={<LuFolders size={18} />} className="flex-1 text-base md:text-lg">View Projects</Button>
        <Button variant="secondary" href="/about#cv" icon={<LuFileText size={18} />} className="flex-1 text-base md:text-lg">View CV</Button>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sm uppercase tracking-widest text-accent-200 font-semibold text-center hidden md:block pb-2 px-8">Showcased projects</span>
        <ScrollDownArrow />
      </div>

    </section>
  )
}

export default Hero;
