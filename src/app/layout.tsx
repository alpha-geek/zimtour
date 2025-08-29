import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZimTour - Zimbabwe's Premier Tour Company",
  description: "Premier tour company in Zimbabwe offering airport transfers, day tours, custom itineraries, and hotel bookings with local hotels and guest houses also game reserves",
  keywords: "Zimbabwe tours, Victoria Falls, Hwange National Park, safari, airport transfers, hotel bookings",
  authors: [{ name: "ZimTour" }],
  openGraph: {
    title: "ZimTour - Zimbabwe's Premier Tour Company",
    description: "Discover the magic of Zimbabwe with our expert guides and comprehensive travel services",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="App">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
