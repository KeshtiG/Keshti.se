import { FiGithub, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer({className}: {className?: string}) {
  return (
    <footer className={`w-full bg-background py-8 px-6 border-t border-neutral-700 flex flex-col items-center gap-10 pb-24 md:pb-16 ${className}`}>
      <div className="flex gap-2 md:gap-8">
        <a href="https://github.com/KeshtiG" target="_blank" className="flex justify-center items-center gap-2 text-base md:text-lg lg:text-xl">
          <FiGithub size={24} className="text-accent-300" />
          <p className="">GitHub</p>
        </a>

        <a href="https://www.linkedin.com/in/keshti-gyllinger/" target="_blank" className="flex justify-center items-center gap-4 text-base md:text-lg lg:text-xl border-x border-neutral-700 px-4 md:px-8">
          <AiOutlineLinkedin size={24} className="text-accent-300" />
          <p className="">LinkedIn</p>
        </a>

        <a href="https://www.instagram.com/kesh.does.art" target="_blank" className="flex justify-center items-center gap-2 text-base md:text-lg lg:text-xl">
          <FiInstagram size={24} className="text-accent-300" />
          <p className="">Instagram</p>
        </a>
      </div>

      <div className="flex flex-col gap-4 items-center text-neutral-400 text-sm md:text-base">
        <img src="/logo.png" alt="Keshti Gyllinger Logo" className="w-12 hidden md:block" />
        <p>&copy; 2025 Keshti.se</p>
      </div>
    </footer>
  );
}
