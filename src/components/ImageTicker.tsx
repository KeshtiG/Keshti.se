"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Image = {
  src: string;
  alt: string;
};

type ImageTickerProps = {
  images: Image[];
  timeout?: number;
  className?: string;
  imgClassName?: string;
};

const ImageTicker = ({
  images,
  timeout = 2500,
  className = "",
  imgClassName = "",
}: ImageTickerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, timeout);
    return () => clearTimeout(t);
  }, [index, images.length, timeout]);

  return (
    <div className={`relative overflow-hidden inline-block ${className}`}>
      {/* "Ghost" image to set container size */}
      <img
        src={images[0].src}
        alt=""
        className="invisible pointer-events-none block"
        aria-hidden="true"
      />
      <AnimatePresence>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ y: "100%", opacity: 0, position: "absolute" }}
          animate={{ y: 0, opacity: 1, position: "absolute" }}
          exit={{ y: "-100%", opacity: 0, position: "absolute" }}
          transition={{ duration: 0.5 }}
          className={`top-0 left-0 block ${imgClassName} absolute`}
        />
      </AnimatePresence>
    </div>
  );
}

export default ImageTicker;
