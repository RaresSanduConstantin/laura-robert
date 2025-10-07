import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const theseasons = localFont({
  src: [
    {path: 'fonts/theseasons-lt.5a8d17361a24ac511bd288ef1a.c551ff82d9639568084e4e303140e0a2.woff2', weight: '300', style: 'normal'},
    {path: 'fonts/theseasons-reg.57d3e9b5285fa8dfd595ef780.57981c5d6c03cd30856912da5d26c788.woff2', weight: '400', style: 'normal'},
  ],
  variable: '--font-theseasons',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://laura-robert-3n29sfcny-raressanduconstantins-projects.vercel.app/'),
  title: "Laura & Robert - Hai la nunta!",
  description: "Invitatie nunta Laura & Robert - 17 Mai 2025",
  openGraph: {
    url: "https://laura-robert-3n29sfcny-raressanduconstantins-projects.vercel.app/",
    images:[ '/opengraph-image.png'],
    title: 'Laura & Robert - Hai la nunta!',
    description: 'Invitatie nunta Laura & Robert - 17 Mai 2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laura & Robert - Hai la nunta!',
    images: ['/opengraph-image.png'],
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={theseasons.className}
      >
        {children}
      </body>
    </html>
  );
}
