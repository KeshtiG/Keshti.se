import { JSX } from "react";
import ImageWithLightbox from "@/components/ui/ImageWithLightbox";

type SolutionItemProps = {
  title: string;
  icon: JSX.Element;
  problemDescription: string;
  solutionDescription: string;
  oldImgSrc: string;
  newImgSrc: string;
}

const SolutionItem = ({ title, icon, problemDescription, solutionDescription, oldImgSrc, newImgSrc }: SolutionItemProps) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <h3 className="flex items-center gap-3">
        <span className="text-primary-400">{icon}</span>
        {title}
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16">
        <img src={newImgSrc} alt={`${title} - new design`} className="w-2/3 h-auto rounded-lg" />

        <div className="w-1/3 flex flex-col gap-4 md:gap-6 lg:gap-8 justify-between">
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <h4>The Problem</h4>
            <p>{problemDescription}</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <h4>The Solution</h4>
            <p>{solutionDescription}</p>
          </div>

          <ImageWithLightbox
            src={oldImgSrc}
            title={`${title} - old design`}
            showTitle={false}
            className="rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default SolutionItem;
