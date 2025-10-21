import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import ThemeProviderClient from "./providers/ThemeProviderClient";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOUCANDUN.STOR3",
  description: "SHOP TOUCANDUN.STOR3",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderClient>
          <Header />
          <main>
            
                {children}

          </main>
          <Footer/>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
