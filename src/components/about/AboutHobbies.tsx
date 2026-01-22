import { PiGameController } from "react-icons/pi";
import Button from "@/components/ui/buttons/Button";
import { FiInstagram } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel/Carousel"
import React from "react";

type Hobby = {
  title: string;
  content: React.ReactNode;
  imgSrc?: string;
}


export default function AboutHobbies() {
  const hobbies: Hobby[] = [
    {
      title: "Drawing & Painting",
      imgSrc: "/hobbies/drawing.webp",
      content:
        <div className="h-full flex flex-col gap-6 justify-between">
          <p>I’ve been drawing since I was a kid, both on paper and digitally. Lately, I’ve been really into stippling, where images are built using only tiny dots. It requires a lot of patience and fine motor control, which makes it a fun and rewarding challenge!</p>
          <div>
            <p>Curious to see more of my art?</p>
            <Button variant="tertiary" href="https://www.instagram.com/kesh.does.art" target="_blank" className="text-sm mt-2 w-fit" icon={<FiInstagram size={15} className="text-accent-300" />}>
              View on Instagram
            </Button>
          </div>
        </div>
    },
    {
      title: "Gaming",
      imgSrc: "/hobbies/ps5.webp",
      content: <p>I’ve been a gamer for as long as I can remember, mainly on PC and PlayStation. Right now, I enjoy survival base builders with my husband and co-op shooters. My cat loves this hobby too, since it usually means she gets to curl up in my lap.</p>
    },
    {
      title: "Watching American Football",
      imgSrc: "/hobbies/packers.webp",
      content:
        <div className="flex flex-col gap-2">
          <p>I never EVER thought I’d get into sports, but I’ve been completely hooked on American football for the past 12 years. I love the pace, the athleticism, and the strategies. It feels like modern-day gladiator games, full of drama and raw intensity.</p>
          <p>#GoPackGo 🏈</p>
        </div>
    },
  ]

  return (
    <section className="container-width container-x-padding flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 md:gap-4 text-center">
        <div className="flex gap-3 md:gap-4 items-center h2 text-primary-300">
          <PiGameController />
          <h2 className="text-foreground">Things I enjoy</h2>
        </div>
        <p>A few interests that say a little more about who I am outside of work</p>
      </div>

      <Carousel className="h-fit lg:h-140 w-full lg:w-11/12 xl:w-10/12">
        <div className="w-full flex justify-center md:justify-end gap-4 mb-4 mt-2 lg:mt-0">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent className="h-full">
          {hobbies.map((hobby) => (
            <CarouselItem key={hobby.title} className="h-full">
              <div className="flex flex-col lg:flex-row h-full border border-border-light rounded-lg overflow-hidden">
                <div className="w-full lg:w-3/5 h-64 lg:h-full">
                  <img
                    src={hobby.imgSrc}
                    alt={hobby.title}
                    className="w-full h-full object-cover object-center opacity-80"
                  />
                </div>
                <div className="w-ful lg:w-2/5 p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col gap-4">
                  <h3>{hobby.title}</h3>
                  {hobby.content}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </section >
  )
}
