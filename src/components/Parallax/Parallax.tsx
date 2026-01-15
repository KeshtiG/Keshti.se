"use client"
import styles from "./Parallax.module.css"
import {
  motion,
  useScroll,
  useSpring,
} from "motion/react"

type ParallaxSection = {
  id: string;
  component: React.ReactNode;
}

type ParallaxProps = {
  sections: ParallaxSection[];
}

export default function Parallax({ sections }: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`${styles["parallax-container"]} h-svh flex flex-col items-center justify-center`}
        >
          {section.component}
        </div>
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
    </>
  );
}
