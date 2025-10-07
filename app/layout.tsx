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
  metadataBase: new URL('https://laura-robert.vercel.app/'),
  title: "Laura & Robert - Hai la nunta!",
  description: "Invitatie nunta Laura & Robert - 17 Mai 2025",
  alternates: {
    canonical: 'https://laura-robert.vercel.app/',
  },
  openGraph: {
    title: 'Laura & Robert - Hai la nunta!',
    description: 'Invitatie nunta Laura & Robert - 17 Mai 2025',
    url: "https://laura-robert.vercel.app/",
    siteName: 'Laura & Robert - Hai la nunta!',
    images: [
      {
        url: 'https://laura-robert.vercel.app/opengraph-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Laura & Robert - Hai la nunta!',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laura & Robert - Hai la nunta!',
    description: 'Invitatie nunta Laura & Robert - 17 Mai 2025',
    images: ['https://laura-robert.vercel.app/opengraph-image.jpeg'],
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
