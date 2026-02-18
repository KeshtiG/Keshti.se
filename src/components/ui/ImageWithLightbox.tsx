import { LuZoomIn } from "react-icons/lu";
import ImageLightbox from "./ImageLightbox";
import { useImageLightbox } from "@/lib/useImageLightbox";
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

export type ImageWithLightboxProps = {
  src: string;
  title: string;
  showTitle?: boolean;
  className?: string;
  imageClassName?: string;
  imageHeight?: string;
};

const ImageWithLightbox = ({ 
  src, 
  title, 
  showTitle = true, 
  className,
  imageClassName,
  imageHeight = "h-64"
}: ImageWithLightboxProps) => {
  const { lightboxImage, openLightbox, closeLightbox } = useImageLightbox();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageClick = () => {
    openLightbox({ src, title });
  };

  return (
    <>
      <div className={`flex flex-col items-center gap-2 border border-border-light rounded-lg overflow-hidden ${className}`}>
        <div className={`relative w-full ${imageHeight} group hover:cursor-pointer bg-neutral-800`} onClick={handleImageClick}>
          <img
            src={src}
            alt={title}
            className={`w-full h-full object-cover object-center transition-opacity duration-300 opacity-90 group-hover:opacity-10 ${imageClassName}`}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <LuZoomIn className="text-accent-300 text-4xl" />
          </div>
        </div>
        {showTitle && (
          <p className="text-center mt-2 text-sm sm:text-base pb-2">{title}</p>
        )}
      </div>
      {lightboxImage && isClient && createPortal(
        <ImageLightbox
          src={lightboxImage.src}
          title={lightboxImage.title}
          onClose={closeLightbox}
        />,
        document.body
      )}
    </>
  );
};

export default ImageWithLightbox;
