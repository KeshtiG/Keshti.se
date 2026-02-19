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
      <div className="columns-1 lg:columns-2 lg:gap-16 xl:gap-40">
        {sections.map((section, index) => (
          <div key={index} className="break-inside-avoid mb-8 md:mb-10 lg:mb-16 flex flex-col gap-4 md:gap-6">
            <h3 className="h4">{section.title}</h3>
            {section.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
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
