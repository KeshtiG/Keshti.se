"use client";
import { useState, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";

export default function Header() {
  const [scrollTopData, setScrollTopData] = useState("border-transparent h-16 md:h-20");
  const [logoSize, setLogoSize] = useState("h-9 md:h-10 lg:h-12");
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Set background and height
      if (currentY < 10) {
        setScrollTopData("border-transparent h-16 md:h-20");
        setLogoSize("h-9 md:h-10 lg:h-12");
      } else {
        setScrollTopData("bg-primary-800/50 backdrop-blur-xs border-border h-13 md:h-15");
        setLogoSize("h-7 md:h-8 lg:h-10");
      }

      // Hide/show on scroll down/up
      const lastY = lastScrollYRef.current;
      if (currentY > lastY && currentY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        hidden md:flex fixed top-0 left-0 w-full z-50
        container-x-padding transition-all duration-500 ease-in-out border-b
        transform
        ${scrollTopData}
        ${isHidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <nav className="w-full lg:px-8 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Keshti Gyllinger Logo"
            className={`transition-all ease-in-out duration-500 ${logoSize}`}
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
