import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaNavbar from "@/components/media/MediaNavbar";
import localFont from "next/font/local";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const autoGraf = localFont({
    src: [
    {
      path: "../public/fonts/autograf-font/Autograf.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-autoGraf",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  weight: ["400"],     
  subsets: ["latin"],      
  variable: "--playfair-font", 
})

export const metadata: Metadata = {
  title: "Stephon Jones",
  description: "Singer & Entertainer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${autoGraf.variable} ${playfairDisplay.variable} antialiased bg-[var(--primary-color)] text-white`}
      >
        <Navbar />
        <MediaNavbar />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
