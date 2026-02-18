import ImplementationItem from "@/app/projects/ringtailor/components/ImplementationItem";
import * as data from "@/components/projects/data/ringtailor-data";

const ImplementationSection = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-24 lg:gap-32 w-full">
      {data.implementationItems.map((item, index) => (
        <ImplementationItem key={index} {...item} />
      ))}
    </section>
  )
}

export default ImplementationSection;
