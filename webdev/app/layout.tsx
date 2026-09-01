import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ScrollCue from "@/components/ScrollCue";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebDev",
  description: "Websites, web apps and mobile applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} overflow-auto ${geistMono.variable} antialiased`}
      >
        <Nav />
        <ScrollCue />
        <PageTransition><main>{children}</main></PageTransition>
        <Footer />
      </body>
    </html>
  );
}
