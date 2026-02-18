import React, { JSX } from "react";
import VortexBG from "./ui/vortex/VortexBG";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

type PageHeaderProps = {
  title: string;
  description: string[];
  imgUrl?: string;
  illustration?: JSX.Element;
  ticker?: JSX.Element;
  btn?: JSX.Element;
}

const PageHeader = ({ title, description, imgUrl, illustration, ticker, btn }: PageHeaderProps) => {
  return (
    <>
      <VortexBG />
      <section className="w-full flex flex-col gap-16 md:gap-24 md:flex-row items-center justify-between">

        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 lg:gap-24 items-center justify-between w-full">
          <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 w-full md:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp()}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{title}</h1>
            </motion.div>
            {description.map((paragraph, index) => (
              <p key={index} className="body-large">{paragraph}</p>
            ))}
          </div>

          {imgUrl &&
            <div className="w-full h-64 md:h-80 lg:h-100 md:w-1/2 rounded-lg overflow-hidden opacity-90">
              <img src={imgUrl} alt={`${title}, cover image`} className="w-full h-full object-cover object-center" />
            </div>
          }
          {illustration &&
            <div className="hidden md:w-1/2 md:flex justify-end">
              {illustration}
            </div>
          }
          {ticker &&
            <div className="w-full md:w-1/2 md:flex justify-end">
              {ticker}
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default PageHeader;
