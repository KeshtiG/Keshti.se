import { JSX } from "react";
import { Accordion, AccordionItem } from "../Accordion";

export type ProjectDetails = {
  projectType: string[];
  duration: string;
  tools: {
    name: string;
    icon: JSX.Element;
  }[];
  roles: {
    name: string[];
    description: string;
  };
  targetGroup: string;
};

type AccordionProps = {
  accordionItems: AccordionItem[];
}

type ProjectDetailsProps = ProjectDetails & AccordionProps;

export default function ProjectDetails({
  projectType, duration, tools, roles, targetGroup, accordionItems }: ProjectDetailsProps) {
  return (
    <section className="flex flex-col w-full gap-10 md:gap-16 lg:gap-24 lg:p-12 xl:p-16 lg:border lg:border-border-light rounded-lg">
      <h2>Project Details</h2>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-40 w-full">
        {/* Details Container */}
        <div className="w-full md:w-4/6 flex flex-col gap-10 md:gap-16">

          {/* Detail Lists Container */}
          <div className="flex flex-row gap-16 lg:gap-24">

            {/* Project Type */}
            <div className="flex flex-col gap-4">
              <h3 className="h4">Project Type</h3>
              <ul>
                {projectType.map((type) => (
                  <li key={type} className="text-sm sm:text-base"><span className="text-primary-300 mr-2">▷</span>{type}</li>
                ))}
              </ul>
              <p className="text-sm sm:text-base">{duration}</p>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="h4">Tools</h3>
              <ul>
                {tools.map((tool) => (
                  <li key={tool.name} className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="text-primary-300">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="h4">Role & Responsibilities</h3>
            <p className="body-strong body-large text-primary-300">{roles.name.join(" / ")}</p>
            <p>{roles.description}</p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="h4">Target Groups</h3>
            <p>{targetGroup}</p>
          </div>

        </div>

        {/* Accordion */}
        <Accordion items={accordionItems} className="w-full md:w-2/6 shrink-0" />
      </div>

    </section>
  );
}
