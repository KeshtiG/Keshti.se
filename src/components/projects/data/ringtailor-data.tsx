import { ProjectDetails } from "../ProjectDetails";
import { AccordionItem } from "@/components/Accordion";
import { LuTriangleAlert, LuBrain, LuLightbulb, LuFigma, LuTrello } from "react-icons/lu";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { RiDiscordLine } from "react-icons/ri";

export const projectDetails: ProjectDetails = {
  projectType: ["IPad App Design", "Team Project", "Internship"],
  duration: "6 months (2021-2022)",
  tools: [
    { name: "Figma", icon: <LuFigma /> },
    { name: "Adobe Photoshop", icon: <DiPhotoshop /> },
    { name: "Adobe Illustrator", icon: <DiIllustrator /> },
    { name: "Trello", icon: <LuTrello /> },
    { name: "Discord", icon: <RiDiscordLine /> },
  ],
  roles: {
    name: ["UX/UI Designer"],
    description: "The design team consisted of me, two other interns, and the product owner. I was primarily responsible for setting the general design guidelines, creating the main components, and structuring the instructions for the developers."
  },
  targetGroup: "Retail staff and shop owners in the jewelry sector, ranging from those new to the job to experienced professionals."
}

export const accordionItems: AccordionItem[] = [
  {
    title: "The Problem",
    icon: <LuTriangleAlert />,
    content: <p>Earlier versions of the app were built without UX input, resulting in usability issues. When I joined, the company had just introduced new branding that wasn’t optimized for digital use.</p>
  },
  {
    title: "The Challenge",
    icon: <LuBrain />,
    content: <p>The design team started working on the app simultaneously with the developers, which required rapid iterations and early design decisions to minimize code changes. The heavy reliance on 3D functionality introduced technical constraints, as the app was built in Unity, limiting standard UI implementation. </p>
  },
  {
    title: "The Solution",
    icon: <LuLightbulb />,
    content: <p>I worked extensively on building a heading structure and a visual hierarchy to make the app easier to navigate. I wanted to guide users' eyes to the important parts of the design and create a natural flow. Another main goal of my design was to give the user clear visual feedback so that every decision was obvious. The result was an app with a much more intuitive and well-structured UI, at the cost of minimal code adjustments.</p>
  }
]
