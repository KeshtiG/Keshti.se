"use client";
import { motion } from "framer-motion";

const path = {
  bubble: "M123.471 278.9C123.471 278.9 149.471 214.9 129.971 212.4C110.471 209.9 2.99996 193.696 3 113.171C3.00002 71 30.9807 38.2678 74.5 21.6714C133.5 -0.828611 200.16 -4.19098 270.5 18.1717C319.971 33.8998 354.755 74.1928 353.467 113.171C351.467 173.672 303.971 208.253 249.471 212.4C222.992 214.415 193.471 201.9 181.971 194.9C170.471 187.9 102 147.172 93.9998 99.1715C89.8329 74.1699 102 35.1715 141 37.6714C171.967 39.6563 184 102.171 184 102.171C184 102.171 194.846 40.4786 219 37.6714C262.467 32.6198 273.019 74.0698 268 100.172C258 152.172 204.971 200.4 193.971 212.4C182.971 224.4 180.971 226.4 166.971 240.4C152.971 254.4 151.967 256.5 122.971 278.4"
}

export default function HeartBubble() {
  return (
    <div>
      <svg
        className="w-32 sm:w-40 md:w-50 lg:w-60 xl:w-70 h-auto stroke-primary-500"
        width="357"
        height="281"
        viewBox="0 0 357 281"
        fill="none"
        strokeWidth="4"
        preserveAspectRatio="xMidYMax meet"
      >
        <motion.path
          d={path.bubble}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transform="translate(0, 2)"
          transition={{
            pathLength: {
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            },
            opacity: { duration: 4 }
          }}
        />
      </svg>
    </div>
  );
}
