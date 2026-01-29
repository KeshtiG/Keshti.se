"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Scroll to top on route change if there's no hash in the URL
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, searchParams]);

  return null;
}

export default ScrollToTop;
