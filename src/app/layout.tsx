import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Keshti Gyllinger | Portfolio",
  description: "Portfolio website of Keshti Gyllinger - Developer and UX Designer.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <Suspense>
          <ScrollToTop />
        </Suspense>
        <Header />
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
