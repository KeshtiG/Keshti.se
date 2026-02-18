import { cn } from "@/lib/utils";

type CarouselButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  className?: string;
};

const CarouselButton = ({
  className,
  disabled,
  children,
  ...props
}: CarouselButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded-full border border-border-light w-12 lg:w-14 h-12 lg:h-14 transition-all ease-in-out duration-300",
        disabled ? "opacity-60 text-neutral-500" : "opacity-100 text-accent-400 cursor-pointer btn-glow hover:text-accent-200 hover:border-accent-400 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default CarouselButton;
