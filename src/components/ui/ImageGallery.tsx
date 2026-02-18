import ImageWithLightbox from "./ImageWithLightbox";

export type ImageGalleryImage = {
  src: string;
  title: string;
  showTitle: boolean;
};

type ImageGalleryProps = {
  images: ImageGalleryImage[];
  className?: string;
  imageHeight?: string;
}

const ImageGallery = ({ images, className, imageHeight = "h-32 md:h-48 lg:h-64" }: ImageGalleryProps) => {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ${className}`}>
      {images.map((image, index) => (
        <ImageWithLightbox
          key={index}
          src={image.src}
          title={image.title}
          showTitle={image.showTitle}
          imageHeight={imageHeight}
        />
      ))}
    </div>
  )
}

export default ImageGallery;
