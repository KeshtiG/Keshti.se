"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import Button from "@/components/ui/buttons/Button";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer({ className }: { className?: string }) {
  // Scroll settings for animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className={`w-full bg-background py-10 px-6 border-t border-neutral-700 flex flex-col items-center gap-10 lg:gap-16 pb-24 md:pb-16 ${className}`}>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center">
        <h2 className="h4">Follow Me</h2>
        
        <motion.div
          className="flex gap-8"
          ref={ref}
          variants={staggerContainer(0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={slideUp(0.3)}
          >
            <Button variant="tertiary" href="https://github.com/KeshtiG" target="_blank" icon={<FiGithub size={18} className="text-accent-300" />}>
              GitHub
            </Button>
          </motion.div>

          <motion.div
            variants={slideUp(0.3)}
          >
            <Button variant="tertiary" href="https://www.linkedin.com/in/keshti-gyllinger/" target="_blank" icon={<AiOutlineLinkedin size={18} className="text-accent-300" />}>
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            variants={slideUp(0.3)}
          >
            <Button variant="tertiary" href="https://www.instagram.com/kesh.does.art" target="_blank" icon={<FiInstagram size={18} className="text-accent-300" />}>
              Instagram
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 items-center p-4 md:p-4 lg:p-8 border border-border rounded-lg text-center">
        <h2 className="h4">Site Info</h2>
        <p>This portfolio site was created with Next.js, React, Tailwind & TypeScript</p>
        <Button variant="tertiary" href="https://github.com/KeshtiG/Keshti.se" target="_blank" className="text-sm my-4">
          View on GitHub
        </Button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <img src="/logo.png" alt="Keshti Gyllinger Logo" className="w-20" />
        <p className="text-neutral-300">&copy; 2025 Keshti.se</p>
      </div>
    </footer>
  );
}
