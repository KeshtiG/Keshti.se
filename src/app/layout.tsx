import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Keshti Gyllinger | Portfolio",
  description: "Portfolio website of Keshti Gyllinger - Developer and UX Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased bg-gradient"
        suppressHydrationWarning
      >
        <Header />
        <MobileMenu />
        <main className="flex flex-col gap-8 items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
