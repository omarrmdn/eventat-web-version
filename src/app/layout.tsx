import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Sora } from "next/font/google";
import "./globals.css";
import logo from "./components/logo.png";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const heroFont = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Joino-eg",
  description: "Discover unforgettable events, connect with your crew, and never miss the moment.",
  icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${heroFont.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
