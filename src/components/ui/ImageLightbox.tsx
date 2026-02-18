import { LuX } from "react-icons/lu";

type ImageLightboxProps = {
  src: string;
  title: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, title, onClose }: ImageLightboxProps) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer" onClick={onClose}>
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
          
          {title && <p className="text-foreground body-large text-center mb-4 hidden md:block">{title}</p>}
          <img src={src} alt={title} className="max-w-full max-h-screen md:max-h-[80vh]" />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-accent-300 text-2xl flex items-center gap-2 hover:cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
            onClick={onClose}
          >
            <p className="uppercase text-accent-300 text-sm tracking-widest">Click anywhere to close</p><LuX />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
