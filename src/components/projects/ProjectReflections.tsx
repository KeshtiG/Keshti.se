import { LuLightbulb } from "react-icons/lu";
import SectionHeader from "../ui/SectionHeading";
import VortexBG from "../ui/vortex/VortexBG";

type ProjectReflectionsProps = {
  content: string[];
}

const ProjectReflections = ({ content }: ProjectReflectionsProps) => {
  return (
    <section className="flex flex-col gap-8 md:gap-10 lg:gap-16 w-full lg:max-w-4xl mx-auto rounded-lg border border-border-light p-4 md:p-8 lg:p-16 relative">
        <VortexBG />
        <SectionHeader title="Reflections" icon={<LuLightbulb />} />
        <div className="flex flex-col gap-4 lg:gap-6">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
  )
}

export default ProjectReflections;
