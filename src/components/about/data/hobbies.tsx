import React from "react";
import Button from "@/components/ui/buttons/Button";
import { FiInstagram } from "react-icons/fi";

type Hobby = {
  title: string;
  content: React.ReactNode;
  imgSrc?: string;
}

export const hobbies: Hobby[] = [
    {
      title: "Drawing",
      imgSrc: "/hobbies/drawing.webp",
      content:
        <div className="h-full flex flex-col gap-6 justify-between">
          <p>Drawing has been a passion of mine since I was a kid, both on paper and digitally. Lately, I’ve been really into stippling, where images are built using only tiny dots. It requires a lot of patience and fine motor control, which makes it a fun, rewarding and sometimes frustrating challenge.</p>
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
