import React from "react";

export type LightboxImage = {
  src: string;
  title: string;
};

export const useImageLightbox = () => {
  const [lightboxImage, setLightboxImage] = React.useState<LightboxImage | null>(null);

  const openLightbox = (image: LightboxImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return {
    lightboxImage,
    openLightbox,
    closeLightbox,
  };
};
