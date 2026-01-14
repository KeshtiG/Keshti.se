import VortexBG from "./VortexBG";
import Footer from "./Footer";
import Button from "./ui/Buttons/Button";
import CoffeeLoopIcon from "./icons/CoffeeLoopIcon";

import { Mail } from 'lucide-react';

export default function ContactBanner() {
  return (
    <>
      <VortexBG />
      <section className="flex flex-col justify-center items-center gap-10 flex-1 relative px-4 md:px-0 pt-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">Interested in Collaborating?</h2>
          <p className="text-base md:text-lg text-foreground-secondary">I’m always open to new challenges and cool ideas. Got something brewing? <span className="text-foreground font-bold">Let’s talk!</span></p>
        </div>

        <Button variant="primary" icon={<Mail size={18} />} className="text-base md:text-lg px-4 w-fit">Get in Touch</Button>

        <CoffeeLoopIcon />
          
      </section>
      <Footer />
    </>
  );
}
