import type { Metadata } from "next";
import fontPreferat from "next/font/local";
import "./globals.css";

const lauraFontsLight = fontPreferat({
src: "../public/fonts/Fonts-Preferate/theseasons-lt.5a8d17361a24ac511bd288ef1a.c551ff82d9639568084e4e303140e0a2.woff2",
weight: "300",
style: "normal",
display: "swap",

});

const lauraFontsRegular = fontPreferat({
  src: "../public/fonts/Fonts-Preferate/theseasons-reg.57d3e9b5285fa8dfd595ef780.57981c5d6c03cd30856912da5d26c788.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  
  });

export const metadata: Metadata = {
  title: "Laura & Robert - Hai la nunta!",
  description: "Invitatie nunta Laura & Robert - 17 Mai 2025",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lauraFontsLight.className} ${lauraFontsRegular.style} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
