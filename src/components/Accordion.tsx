"use client";
import { JSX, useEffect } from "react";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

export type AccordionItem = {
  title: string;
  icon: JSX.Element;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export const Accordion = ({ items, className }: AccordionProps) => {
  const [expandedId, setExpandedId] = useState(null as number | null);

  function handleClick(id: number) {
    setExpandedId(expandedId === id ? null : id);
  }

  // Set icon size based on screen width
  const [iconSize, setIconSize] = useState(28);
  useEffect(() => {
    const updateIconSize = () => setIconSize(window.innerWidth >= 1024 ? 28 : 24);
    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.title}
          onClick={() => handleClick(index)}
          className="p-3 md:p-4 border border-border-light rounded-lg cursor-pointer hover:border-accent-400 transition-all duration-300"
        >
          <div className="flex justify-between items-center transition-all ease-in-out duration-300">
            <div className="flex items-center gap-2">
              <span className="h4 text-primary-300">{item.icon}</span>
              <p className="h4">{item.title}</p>
            </div>
            <LuChevronDown
              size={iconSize}
              className={`chevron-icon text-accent-300 transition-transform duration-300 ${expandedId === index ? "rotate-180" : ""}`}
            />
          </div>
          {expandedId === index &&
            <div className="mt-2 lg:mt-4"><p>{item.content}</p></div>
          }
        </div>
      ))}
    </div>
  )
}
