"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

export default function Header() {
  const pathname = usePathname();
  const [scrollTopData, setScrollTopData] = useState('border-transparent');
  const [logoSize, setLogoSize] = useState('h-8 md:h-10 lg:h-12');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setScrollTopData('border-transparent h-16 md:h-20');
        setLogoSize('h-9 md:h-10 lg:h-12');
      } else {
        setScrollTopData('bg-surface/50 backdrop-blur-sm border-border h-13 md:h-15');
        setLogoSize('h-7 md:h-8 lg:h-10');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  return (
    <React.Fragment>
      <header className={`hidden fixed top-0 left-0 w-full z-50 md:flex px-4 md:px-8 lg:px-16 xl:px-24 transition-all ease-in-out duration-500 border-b ${scrollTopData}`}>
        <nav className="w-full mx-auto hidden md:flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Keshti Gyllinger Logo" className={`transition-all ease-in-out duration-500 ${logoSize}`} />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLinks navLink={{ name: "", path: "" }} />
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
