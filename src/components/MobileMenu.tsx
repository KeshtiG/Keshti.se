"use client";
import React from "react";
import NavLinks from "./NavLinks";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

export default function MobileMenu() {
  const [visible, setVisible] = React.useState(false);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [visible]);

  return (
    <div className="block md:hidden">
      <div
        className={`
          fixed inset-0 z-49 bg-primary-900/85 backdrop-blur-sm
          transition-transform duration-500
          ${visible ? "translate-y-0" : "translate-y-full pointer-events-none"}
        `}
      >
        <nav className="h-full w-full flex flex-col gap-8 items-center justify-center">
          <NavLinks />
        </nav>
      </div>

      <button
        onClick={() => setVisible((prev) => !prev)}
        className="bg-background btn-glow w-24 flex justify-center gap-2 border border-accent-400 text-accent-100 rounded-full py-3 fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        aria-label={visible ? "Close menu" : "Open menu"}
      >
        {visible ? <IoCloseOutline /> : <CgMenuRight />}
        <span className="text-xs uppercase tracking-widest">
          {visible ? "Close" : "Menu"}
        </span>
      </button>
    </div>
  );
}
