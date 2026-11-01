import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={dmSans.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("mademen_theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}else{document.documentElement.setAttribute("data-theme","light");}}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
