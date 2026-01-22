import { JSX } from "react";
import { PiBriefcase, PiStudent, PiMedal } from "react-icons/pi";

export type Category = "Work" | "Internship" | "Education" | "Certificate"

type TimelineEvent = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string[];
  icon: JSX.Element;
  category: Category;
  tags: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: 9,
    title: "Front-End Developer / UX Designer",
    location: "Blueye, Stockholm",
    date: "Oct. 2025 - Jan. 2026",
    description: [
      "Developed the admin interface for a PBX/telephony system built to integrate with AI‑powered voice assistant services, including management of employees, call groups, and system connections.",
      "Contributed to frontend development using React with TypeScript/JavaScript, HTML, and CSS/Tailwind, including implementing WCAG‑compliant interface adjustments.",
      "Collaborated closely with a three‑person backend team to align requirements, integrations, and technical constraints.",
      "Created wireframes, mockups, and microcopy in Figma with a strong focus on UX and WCAG‑compliant design.",
      "Designed the logo and visual elements to establish a cohesive and professional identity.",
      "Worked in an agile workflow with planning, estimation, and follow‑up of tasks in Notion.",
      "Documented and structured requirements for the backend team in Notion to support clear communication and a more efficient development process.",
      "Utilized Vibe Coding workflows with Claude through GitHub Copilot to accelerate ideation, code generation, and iterative problem‑solving."
    ],
    icon: <PiBriefcase size={28} />,
    category: "Internship",
    tags: ["Visual Studio Code", "GitHub Copilot", "GitHub", "Figma", "Notion", "Slack"],
  },
  {
    id: 8,
    title: "Azure AI Fundamentals (AI-900)",
    location: "Microsoft Certified",
    date: "Oct. 2025",
    description: [
      "AI workloads",
      "Machine Learning Basics",
      "Computer Vision",
      "Natural Language Processing",
      "Conversational AI",
      "Responsible AI",
      "Azure AI Services"
    ],
    icon: <PiMedal size={28} />,
    category: "Certificate",
    tags: ["Azure Portal"],
  },
  {
    id: 7,
    title: "Full-Stack .NET Developer",
    location: "Lexicon IT-Proffs, Remote",
    date: "Mar. 2025 - Oct. 2025",
    description: [
      "C# and .NET (OOP, LINQ, generics)",
      "ASP.NET Core (Razor, APIs, authentication, Automapper, Swagger)",
      "Microsoft Azure",
      "Testing (TDD, xUnit, Moq)",
      "Database Management (SQL, database modelling, Entity Framework Core, NoSQL)",
      "Frontend (HTML, CSS, JavaScript, Bootstrap)",
      "Introduction to AI & Machine Learning"
    ],
    icon: <PiStudent size={28} />,
    category: "Education",
    tags: ["Visual Studio", "Postman", "GitHub", "Microsoft Teams", "Azure Portal"],
  },
  {
    id: 6,
    title: "UX Designer / Web Designer / Graphic Designer",
    location: "Icy Studios Gaming, Stockholm",
    date: "Sep. 2024 - Mar. 2025",
    description: [
      "Responsible for the game’s structure, usability (UX), and typography to ensure an intuitive player experience.",
      "Created game mechanic guidelines based on insights from a player survey with 200 responses.",
      "Sketched wireframes for core features to clarify the design and main user flows.",
      "Performed thorough beta testing to ensure a high-quality final result.",
      "Designed and built the company website using Wix, including layout, typography, and media selection.",
      "Refined and vectorized the company’s logo draft for a more professional identity, and designed the game’s logo."
    ],
    icon: <PiBriefcase size={28} />,
    category: "Internship",
    tags: ["Sketchbook", "Adobe Illustrator", "Figma", "Wix Editor", "Google Forms"],
  },
  {
    id: 5,
    title: "Web Programming",
    location: "Blekinge Institute of Technology, Remote",
    date: "Jan. 2024 - Jun. 2024",
    description: [
      "Frontend Development (HTML5, CSS/Sass, PHP, JavaScript, Pico CMS, Git)",
      "Database Management (SQL, MariaDB)",
      "Python 3, Flask"
    ],
    icon: <PiStudent size={28} />,
    category: "Education",
    tags: ["Visual Studio Code", "Unix/Ubuntu", "Thonny", "GitHub", "MariaDB", "XAMPP"],
  },
  {
    id: 4,
    title: "UI/UX Designer / Illustrator",
    location: "Freelance",
    date: "Sep. 2022 - Dec. 2023",
    description: [
      "Created and delivered seven hand-drawn digital illustrations for an online course commissioned by Region Stockholm, tailored to improve learner engagement and understanding.",
      "Conducted a usability analysis of a digital healthcare service and delivered a UX/WCAG-based improvement report.",
      "Designed a logo for an electrical engineering company, based on market research and client feedback."
    ],
    icon: <PiBriefcase size={28} />,
    category: "Work",
    tags: ["Figma", "Google Lighthouse", "Adobe Illustrator", "Sketchbook"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Schalins Ringar, Stockholm",
    date: "Nov. 2021 - Apr. 2022",
    description: [
      "Led the redesign and overall visual direction of the company’s iPad app as part of a cross-functional, agile team of ~10 people.",
      "Adapted and optimized new brand guidelines for digital platforms to ensure visual consistency.",
      "Delivered detailed mockups and clear documentation in Figma, ready for implementation in Unity.",
      "Performed thorough beta testing to ensure a high-quality final result."
    ],
    icon: <PiBriefcase size={28} />,
    category: "Internship",
    tags: ["Figma", "Adobe Photoshop", "Trello", "Miro"],
  },
  {
    id: 2,
    title: "UX Designer with Requirements Engineering Competence",
    location: "Chas Academy, Stockholm",
    date: "Aug. 2020 - Jun. 2022",
    description: [
      "Interaction Design & Prototyping",
      "User Research & Usability Testing",
      "Requirements Engineering & Analysis",
      "Design Thinking & Agile Methodologies",
      "Customer Experience (CX)",
      "Accessibility & WCAG Standards",
    ],
    icon: <PiStudent size={28} />,
    category: "Education",
    tags: ["Figma", "Google Lighthouse", "Adobe Photoshop", "Miro", "Visual Studio Code"],
  },
  {
    id: 1,
    title: "Webmaster",
    location: "University West, Remote",
    date: "Aug. 2018 - Jun. 2020",
    description: [
      "Web Programming (HTML, CSS, JavaScript, PHP)",
      "WordPress Development and Theming",
      "Database Management (SQL, MariaDB)",
      "Web Administration, SEO, and Google Analytics",
      "Network Technology & Security",
    ],
    icon: <PiStudent size={28} />,
    category: "Education",
    tags: ["Visual Studio Code", "WordPress", "MariaDB", "Google Analytics"],
  }
] satisfies TimelineEvent[];
