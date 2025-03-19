import { Tektur, Geist, Geist_Mono } from "next/font/google";

export const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
