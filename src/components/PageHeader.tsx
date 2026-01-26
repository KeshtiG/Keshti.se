import React, { JSX } from "react";
import VortexBG from "./ui/vortex/VortexBG";

type PageHeaderProps = {
  title: string;
  description: string;
  imgUrl?: string;
  illustration?: React.ReactNode;
  btn?: JSX.Element;
}

export default function PageHeader({ title, description, imgUrl, illustration }: PageHeaderProps) {
  return (
    <section className="w-full flex flex-col gap-16 md:gap-24 md:flex-row items-center justify-between">
      <VortexBG />

      <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 max-w-xl">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{title}</h1>
        <p className="body-large">{description}</p>
      </div>

      {imgUrl &&
        <img src={imgUrl} alt={`${title}, cover image`} />
      }
      {illustration &&
        illustration
      }
    </section>
  )
}
