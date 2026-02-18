import SectionHeader from "@/components/ui/SectionHeading";
import ImageGallery, { ImageGalleryImage } from "../ui/ImageGallery";
import { JSX } from "react";

type ProjectTextSectionProps = {
  sections: {
    title: string;
    content: string[];
  }[],
  images?: ImageGalleryImage[];
  sectionTitle?: string;
  sectionTitleIcon?: JSX.Element;
}

const ProjectTextSection = ({ sections, images, sectionTitle, sectionTitleIcon }: ProjectTextSectionProps) => {
  return (
    <section className="flex flex-col gap-10 md:gap-16 lg:gap-24 w-full">
      {sectionTitle && <SectionHeader title={sectionTitle} icon={sectionTitleIcon} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 xl:gap-x-56 xl:gap-y-24">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4 md:gap-6 ">
            <h3 className="h4">{section.title}</h3>
            {section.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>

      {images && (
        <ImageGallery images={images} className="mt-4 md:mt-6 lg:mt-8" />
      )}
    </section>
  )
}

export default ProjectTextSection;
