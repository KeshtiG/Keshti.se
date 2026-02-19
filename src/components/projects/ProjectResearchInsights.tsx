import { JSX } from "react";

type ProjectResearchInsightsProps = {
  insights: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

const ProjectResearchInsights = ({ insights }: ProjectResearchInsightsProps) => {
  return (
    <section className="flex flex-col md:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <h3>Key Insights from Research</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
        {insights.map((insight, index) => (
          <div key={index} className="flex flex-col w-full h-full md:flex-row gap-4 md:gap-6 lg:gap-8 p-3 md:p-4 lg:p-6 xl:p-8 rounded-lg border border-border-light">
            <div className="w-full flex flex-col gap-2 md:gap-3 lg:gap-4">
              <h4 className="flex items-center gap-2 md:gap-3 lg:gap-4"><span className="text-primary-300">{insight.icon}</span>{insight.title}</h4>
              <p>{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectResearchInsights;
