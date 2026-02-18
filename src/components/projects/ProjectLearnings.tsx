import Lightbulb from "@/components/ui/illustrations/Lightbulb";
import SectionHeader from "@/components/ui/SectionHeading";
import { LuBrain } from "react-icons/lu";

type ProjectLearningsProps = {
  learnings: string[];
}

const ProjectLearnings = ({ learnings }: ProjectLearningsProps) => {
  return (
    <section className="flex flex-col items-center justify-between lg:flex-row w-full gap-0 xl:gap-24 lg:p-10 xl:p-16 lg:border lg:border-border-light rounded-lg md:-mb-8 lg:mb-0">
      <div className="w-full lg:max-w-xl lg:w-2/3">
        <SectionHeader title="Key Learnings" icon={<LuBrain />} />

        <ul className="mt-4 md:mt-6 lg:mt-8 space-y-2 md:space-y-3 lg:space-y-4 list-disc pl-5">
          {learnings.map((learning, index) => (
            <li key={index} className="body-large">{learning}</li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block lg:scale-70 xl:scale-100">
        <Lightbulb />
      </div>
    </section>
  )
}

export default ProjectLearnings;
