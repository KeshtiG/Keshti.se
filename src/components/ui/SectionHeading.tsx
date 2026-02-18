import { JSX } from "react";

type SectionHeaderProps = {
  title: string;
  icon?: JSX.Element;
}

const SectionHeader = ({title, icon }: SectionHeaderProps) => {
  return (
    <div className="flex gap-3 md:gap-4 items-center h2 text-primary-400">
      {icon}
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeader;
