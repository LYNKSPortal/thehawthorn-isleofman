import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL('https://thehawthorn.im'),
  title: {
    default: "The Hawthorn - Family-Run Bar & Bistro in Greeba, Isle of Man",
    template: "%s | The Hawthorn Bar & Bistro"
  },
  description: "The Hawthorn is a family-run bar and bistro in Greeba, Isle of Man, owned by John Howard since May 2000. We serve delicious homemade traditional and international dishes using fresh, locally-sourced ingredients. Popular for Sunday roasts, family dining, and special occasions. We accept reservations and offer a children's menu, dietary accommodations, and TT Race hospitality. Located on Main Road, Greeba, IM4 3LF. Call 01624 801268 to book.",
  keywords: ["restaurant Isle of Man", "bistro Greeba", "bar Isle of Man", "family restaurant", "local food Isle of Man", "dining Greeba", "The Hawthorn restaurant", "Isle of Man food", "traditional food", "Sunday roast Isle of Man", "book table Isle of Man", "where to eat Isle of Man", "best restaurants Greeba", "family friendly restaurant", "TT hospitality"],
  authors: [{ name: "The Hawthorn Bar & Bistro" }],
  creator: "The Hawthorn Bar & Bistro",
  publisher: "The Hawthorn Bar & Bistro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: "The Hawthorn - Family-Run Bar & Bistro in Greeba, Isle of Man",
    description: "The Hawthorn, nestled in Greeba, is a family-run bar & bistro owned by John Howard. Since May 2000, it has been firmly established as a food destination serving delicious food in welcoming and comfortable surroundings.",
    url: 'https://thehawthorn.im',
    siteName: 'The Hawthorn Bar & Bistro',
    images: [
      {
        url: '/twitter-meta-facebook.jpg',
        width: 1200,
        height: 630,
        alt: 'The Hawthorn Bar & Bistro - Family-Run Restaurant in Greeba, Isle of Man',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Hawthorn - Family-Run Bar & Bistro in Greeba, Isle of Man",
    description: "The Hawthorn, nestled in Greeba, is a family-run bar & bistro owned by John Howard. Since May 2000, it has been firmly established as a food destination serving delicious food in welcoming and comfortable surroundings.",
    images: ['/twitter-meta-facebook.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" style={{ width: '100%', overflowX: 'hidden' }}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full" style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <main style={{ flexGrow: 1, width: '100%' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
