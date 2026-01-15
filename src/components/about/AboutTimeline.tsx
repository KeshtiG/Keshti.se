// Code source: https://purecode.ai/discover/react/timeline

"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import Tag from "@/components/ui/Tag";

import { PiBriefcase, PiStudent, PiMedal } from "react-icons/pi";
import { LuListChecks, LuCheck } from "react-icons/lu";
import { MapPin, Calendar } from 'lucide-react';

type Category = "Work" | "Internship" | "Education" | "Certificate"

const color: Record<Category, string> = {
  Work: "text-teal-300",
  Education: "text-orange-300",
  Certificate: "text-pink-300",
  Internship: "text-blue-300"
}

type TimelineEvent = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
  category: Category;
  tags: string[];
};

export default function Timeline() {
  const [expandedId, setExpandedId] = useState(null as number | null);

  const timelineData = [
    {
      id: 9,
      title: "Frontend Developer / UX Designer",
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
      title: "Fullstack .NET Developer",
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
      date: "Aug. 2024 - Mar. 2025",
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
      date: "Sep. 2022 - Sep. 2024",
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


  // Scroll settings for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="cv" className="flex flex-col w-full lg:w-11/12 xl:w-10/12 gap-8 md:gap-12 lg:gap-20">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <div className="flex gap-2 md:gap-4 justify-center items-center text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-200">
          <LuListChecks />
          <h2 className="text-foreground">CV - Timeline</h2>
        </div>
        <p className="text-sm lg:text-base text-foreground-secondary">Click on a card to view more details</p>
      </div>
      <div className="relative">
        {/* Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-800"></div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {timelineData.map((event, index) => (
            <motion.div
              key={event.id}
              variants={slideUp}
              className={`flex items-center mb-8 lg:-mb-8 last:mb-0 flex-col-reverse ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              role="article"
              aria-expanded={expandedId === event.id}
            >
              <div
                onClick={() => setExpandedId(expandedId === event.id ? 0 : event.id)}
                role="button"
                className="w-full md:w-7/16 lg:w-5/12 mt-[-16] md:mt-0 cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  key={event.id}
                  className={`p-4 pt-8 md:pt-4 lg:p-8 bg-background border border-border-light rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${expandedId === event.id ? "scale-105" : ""}`}
                >
                  <p className={`text-sm uppercase tracking-widest font-semibold pb-2 ${color[event.category]}`}>{event.category}</p>
                  <h3 className="text-xl lg:text-2xl mb-1 font-bold text-foreground">{event.title}</h3>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-primary-300" />
                    <span className="text-base text-foreground-secondary pt-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-primary-300" />
                    <p className="text-base text-foreground-secondary pt-1">{event.date}</p>
                  </div>

                  {expandedId === event.id && (
                    <div className="mt-4 transition-all duration-300">
                      <ul>
                        {event.description.map((point) => (
                          <div key={point} className="flex gap-2 items-start">
                            <LuCheck size={15} className="text-primary-200 pt-1 shrink-0" />
                            <li className="text-sm text-foreground-secondary mb-2">{point}</li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 space-y-3">
                    <p className="text-xs uppercase tracking-widest text-foreground-secondary">Tools & Software</p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`relative flex items-center justify-center gap-0 lg:gap-4 md:w-2/16 lg:w-2/12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="relative flex items-center justify-center">
                  <span className="w-10 text-neutral-500 hidden lg:block">-----</span>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg bg-primary-600 lg:bg-primary-700 ${color[event.category]}`}>
                  {event.icon}
                </div>
                <div className="h-10 w-10 hidden lg:block"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
