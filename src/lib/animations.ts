import { Variants } from "framer-motion";

export const slideUp = (duration: number = 0.5): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
});

export const fadeIn = (duration: number = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
});

export const scaleIn = (duration: number = 0.5): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
});

export const staggerContainer = (stagger: number = 0.3): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger }
  }
});
