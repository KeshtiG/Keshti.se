import { hobbies } from "@/components/about/data/hobbies";
import { PiGameController } from "react-icons/pi";

import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel/Carousel"


const AboutHobbies = () => {  
  return (
    <section className="flex flex-col items-center max-w-full">
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
                    className="w-full h-full object-cover object-center opacity-90"
                  />
                </div>
                <div className="w-full lg:w-2/5 p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col gap-4">
                  <h3>{hobby.title}</h3>
                  {hobby.content}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselIndicators />
      </Carousel>

    </section >
  )
}

export default AboutHobbies;
