import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import ThemeProviderClient from "./providers/ThemeProviderClient";
import Providers from "./(private-routes)/providers";
import AppInit from "./components/AppInit/AppInit";
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
      <head>
          <link rel="icon" type="image/svg+xml" href="/icon-toucan.jpg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderClient>
          <Header />
          <main>
            
                <Providers>
                  <AppInit>
                    {children}
                  </AppInit> 
                   
                </Providers>

          </main>
          <Footer/>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
