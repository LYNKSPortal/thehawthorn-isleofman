import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The Hawthorn - Family-Run Bar & Bistro in Greeba, Isle of Man",
  description: "The Hawthorn, nestled in Greeba, is a family-run bar & bistro owned by John Howard. Since May 2000, it has been firmly established as a food destination serving delicious food in welcoming and comfortable surroundings.",
  keywords: ["restaurant", "bistro", "bar", "Greeba", "Isle of Man", "family-run", "dining"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" style={{ width: '100%', overflowX: 'hidden' }}>
      <body className="min-h-full" style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <main style={{ flexGrow: 1, width: '100%' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
