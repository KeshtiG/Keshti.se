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

type ProjectCarouselProps = {
  images: {
    title: string;
    src: string;
  }[];
  carouselHeading?: string;
  showImageTitle?: boolean;
  showCarouselHeading?: boolean;
  width?: "default" | "wide";
}

const ProjectCarousel = ({ images, carouselHeading, showImageTitle = true, showCarouselHeading = false, width = "default" }: ProjectCarouselProps) => {
  return (
      <section className={`flex flex-col items-center max-w-full h-fit w-full ${width === "default" ? "lg:w-11/12 xl:w-9/12" : "lg:w-full xl:w-11/12"}`}>
        <Carousel>
          <div className={`w-full flex ${(showImageTitle || showCarouselHeading) ? "justify-between" : "justify-end"} items-center mb-4`}>
          {showCarouselHeading &&
            <h3>{carouselHeading}</h3>
          }
          {showImageTitle &&
            <CarouselTitle images={images} />
          }
          <div className="flex gap-2 md:gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselIndicators className="mb-3" />

        <CarouselContent className="h-full">
          {images.map((image) => (
            <CarouselItem key={image.title} className="h-full">
              <div className={`flex items-center rounded-lg overflow-hidden`}>
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
      </Carousel>

    </section >
  )
}

const CarouselTitle = ({ images }: { images: { title: string }[] }) => {
  const carousel = useCarousel();
  return (
    <h3>{images[carousel.current]?.title}</h3>
  );
}

export default ProjectCarousel;
