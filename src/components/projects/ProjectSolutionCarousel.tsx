// Carousel component from: https://www.embla-carousel.com/

import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/carousel/Carousel"

type ProjectSolutionCarouselProps = {
  images: {
    title: string;
    src: string;
    description?: string;
  }[];
  orientation?: "horizontal" | "vertical";
}

const ProjectSolutionCarousel = ({ images, orientation = "horizontal" }: ProjectSolutionCarouselProps) => {
  return (
    <section className="flex flex-col items-center max-w-full">
      <Carousel className="h-fit w-full lg:w-11/12 xl:w-9/12">
        <div className="w-full flex justify-between items-center mb-4">
          <CarouselTitle images={images} orientation={orientation} />
          <div className="flex gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="h-full">
          {images.map((image) => (
            <CarouselItem key={image.title} className="h-full">
              {orientation === "horizontal" &&
                <div className="max-w-full p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col gap-4">
                  <h3>{image.title}</h3>
                </div>
              }
              <div className={`flex items-center border border-border-light rounded-lg overflow-hidden`}>
                <div className="w-full">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto block object-contain object-center opacity-90"
                  />
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

const CarouselTitle = ({ images, orientation }: { images: { title: string }[], orientation: string }) => {
  const carousel = useCarousel();
  if (orientation !== "vertical") return null;
  return (
    <h3>{images[carousel.current]?.title}</h3>
  );
}

export default ProjectSolutionCarousel;
