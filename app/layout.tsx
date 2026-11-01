import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "made_men | Global Stitches — Bespoke Tailoring in Enugu, Nigeria",
  description:
    "made_men (Global Stitches) is a luxury bespoke tailoring house based in Enugu, Nigeria. Specializing in Senator wear, corporate suiting, casual sets, and custom menswear & womenswear.",
  icons: {
    icon: "/images/logo2.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
