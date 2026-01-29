import { useState } from 'react';
import Button from './Button';
import { Plus, Minus } from 'lucide-react';

type ShowMoreProps = {
  children: React.ReactNode
  collapsedHeight?: string
  className?: string
}

const ShowMore = ({
  children,
  collapsedHeight = 'max-h-32',
  className
}: ShowMoreProps) =>{

  const [open, setOpen] = useState(false)

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className={`relative md:max-h-none md:overflow-visible overflow-hidden transition-all duration-300 ${open ? 'max-h-[2000px]' : collapsedHeight
          }`}
      >
        {children}

        {!open && (
          <div className="w-full pointer-events-none absolute bottom-0 left-0 h-16 bg-linear-to-t from-background to-transparent md:hidden" />
        )}
      </div>

      <div className="w-full border-t border-border flex justify-center md:hidden">
        <Button variant="tertiary" href="#" onClick={() => setOpen(!open)} className="mt-4 md:hidden" icon={open ? <Minus size={16} className="text-accent-300" /> : <Plus size={16} className="text-accent-300" />}>
          {open ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </div>
  )
}

export default ShowMore;
