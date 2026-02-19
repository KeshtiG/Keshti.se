type PageDividerProps = {
  text?: string;
  className?: string;
}

const PageDivider = ({ text, className }: PageDividerProps) => {
  return (
    <div className={`w-full flex items-center gap-4 -my-8 lg:-my-16 ${className}`}>
      <div className="flex-1 h-0.5 bg-linear-to-l from-neutral-700 to-neutral-900" />
      {text && (
        <div className="text-center text-sm lg:text-base tracking-wide lg:tracking-widest text-neutral-300/80 font-code">
          {text}
        </div>
      )}
      <div className="flex-1 h-0.5 bg-linear-to-r from-neutral-700 to-neutral-900" />
    </div>
  );
}

export default PageDivider;
