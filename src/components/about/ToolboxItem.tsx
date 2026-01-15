import React from "react";

type ToolboxItemProps = {
  name: string;
  icon: React.ReactNode;
}

export default function ToolboxItem({ name, icon }: ToolboxItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 border border-neutral-700 rounded-md">
      <div className="text-primary-300">
        {icon}
      </div>
      <p className="text-sm md:text-base text-foreground-secondary text-center">{name}</p>
    </div>
  )
}
