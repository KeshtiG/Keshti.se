"use client";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  path: string;
  icon?: string;
};

const navLinks: NavLink[] =
  [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((navLink) => (
        <a
          href={navLink.path}
          className={`text-base uppercase tracking-widest text-accent-200 hover:text-accent-100 nav-link transition-colors px-2 py-1 ${pathname === navLink.path ? ' active' : ''}`}
          key={navLink.name}
        >
          {navLink.name}
        </a>
      ))}
    </>
  );
}

export default NavLinks;
