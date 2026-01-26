import { motion, MotionValue } from "motion/react";

type ScrollIndicatorProps = {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollIndicator({scrollYProgress}: ScrollIndicatorProps) {
  return (
    <motion.div
    className="bg-primary-500"
    id="scroll-indicator"
    style={{
        scaleX: scrollYProgress,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
    }}
  />
  )
}
