// Code source: https://purecode.ai/discover/react/timeline

"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import Tag from "@/components/ui/Tag";
import { Category, timelineEvents } from "@/components/about/data/timeline-events";
import { LuListChecks } from "react-icons/lu";
import { MapPin, Calendar } from 'lucide-react';
import SectionHeader from "@/components/ui/SectionHeading";

const color: Record<Category, string> = {
  Work: "text-teal-300/80",
  Education: "text-orange-300/80",
  Certificate: "text-pink-300/80",
  Internship: "text-blue-300/80"
}

const AboutTimeline = () => {
  const [expandedId, setExpandedId] = useState(null as number | null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="cv" className="w-full scroll-mt-12 lg:scroll-mt-24">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-20">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <SectionHeader title="CV - Timeline" icon={<LuListChecks />} />
          <p className="text-sm lg:text-base text-foreground-secondary">Select a card to view more details</p>
        </div>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-800"></div>

          <motion.div
            ref={ref}
            variants={staggerContainer(0.6)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={slideUp()}
                className={`flex relative items-center mb-8 md:-mb-16 lg:-mb-24 last:mb-0 flex-col-reverse ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}  ${expandedId === event.id ? "scale-105" : ""}`}
                role="article"
                aria-expanded={expandedId === event.id}
              >
                <div
                  onClick={() => setExpandedId(expandedId === event.id ? 0 : event.id)}
                  role="button"
                  className={`w-full md:w-7/16 lg:w-5/12 mt-[-16] md:mt-0 cursor-pointer hover:-translate-y-2 transition-all duration-300`}
                >
                  <div
                    key={event.id}
                    className={`p-4 lg:p-8 bg-background border border-border-light rounded-lg transition-all duration-300`}
                  >
                    <p className={`text-sm uppercase tracking-widest font-semibold pb-2 ${color[event.category]}`}>{event.category}</p>
                    <h3 className="h4 mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary-400 mb-1" />
                      <p>{event.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary-400 mb-1" />
                      <p>{event.date}</p>
                    </div>

                    {expandedId === event.id && (
                      <div className="mt-4 md:mt-6 lg:mt-8 transition-all duration-300">
                        <ul className="space-y-2 text-sm">
                          {event.description.map((point) => (
                            <li key={point}><span className="text-primary-400 mr-2">●</span>{point}</li>
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
      </div>
    </section>
  );
}

export default AboutTimeline;
