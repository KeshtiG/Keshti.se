export type Project = {
  title?: string;
  tags?: string[];
  description?: string;
  imgUrl?: string;
};

export const projects: Project[] = [
  {
    title: "RingTailor 4.0",
    tags: ["UI/UX Design", "App Design", "Case Study"],
    description: "Designed a new version of an iPad app allowing customers to design custom rings using 3D.",
    imgUrl: "/ProjectCovers/RingTailor_Cover.webp",
  },
  {
    title: "Korp: Webshop Concept",
    tags: ["UI Design", "Concept"],
    description: "Created a webshop concept for a modern furniture company.",
    imgUrl: "/ProjectCovers/Korp_Cover.webp",
  },
  {
    title: "EUbike: App Redesign",
    tags: ["UI/UX Design", "App Design", "Case Study"],
    description: "Redesigned the EUbike app to improve user experience and functionality.",
    imgUrl: "/ProjectCovers/EUbike_Cover.webp",
  },
  {
    title: "Parenting Course Illustrations",
    tags: ["Digital Illustrations"],
    description: "Drew seven digital illustrations for Region Stockholm that were used in a digital parental support course.",
    imgUrl: "/ProjectCovers/1177_Cover.webp",
  },
];
