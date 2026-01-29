import { ProjectDetails } from "../ProjectDetails";
import { AccordionItem } from "@/components/Accordion";
import { LuTriangleAlert, LuBrain, LuLightbulb, LuFigma, LuTrello } from "react-icons/lu";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { RiDiscordLine } from "react-icons/ri";

// Project Details
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

// Ticker Images
export const tickerImages = [
  { src: "/projects/ringtailor/montage-ipad/montage-1.webp", alt: "RingTailor login screen" },
  { src: "/projects/ringtailor/montage-ipad/montage-2.webp", alt: "RingTailor browse screen" },
  { src: "/projects/ringtailor/montage-ipad/montage-3.webp", alt: "RingTailor product screen" },
  { src: "/projects/ringtailor/montage-ipad/montage-4.webp", alt: "RingTailor 3D mode screen" },
];

// Accordion Items
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

// Screen Images
export const screens = [
  { title: "Loading", src: "/projects/ringtailor/screens/new/1-loading.webp" },
  { title: "Sign In", src: "/projects/ringtailor/screens/new/2-login.webp" },
  { title: "Browse Products", src: "/projects/ringtailor/screens/new/3-browse.webp" },
  { title: "View Product", src: "/projects/ringtailor/screens/new/4-product-page.webp" },
  { title: "Ring Designer (3D)", src: "/projects/ringtailor/screens/new/5-designer.webp" },
  { title: "Ring Designer with Popup", src: "/projects/ringtailor/screens/new/6-designer-popup.webp" },
  { title: "Price Info", src: "/projects/ringtailor/screens/new/7-price-info.webp" },
  { title: "Admin Panel", src: "/projects/ringtailor/screens/new/8-admin-panel.webp" },
];
