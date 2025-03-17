"use client";

import React from "react";
import { Tektur } from "next/font/google";
import Product from "@/components/product";
import { BsCpu } from "react-icons/bs";
import { PiGraphicsCard } from "react-icons/pi";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export default function Home() {
  const styles = {
    buttonHeading: "text-2xl font-semibold tracking-wide",
    icon: "size-32",
  };

  return (
    <main className="flex flex-col gap-30 items-center justify-center min-h-screen">
      <header className="grid text-center gap-4">
        <h1
          className={`${tektur.className} text-6xl font-semibold tracking-wide`}
        >
          PC PART HUNTER
        </h1>
        <p className="text-xl font-semibold">
          Find the best deals, stock availability, and more on PC Parts from
          local NZ retailers.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-12">
        <Product>
          <h2 className={styles.buttonHeading}>CPUs</h2>
          <BsCpu className={styles.icon} />
        </Product>
        <Product>
          <h2 className={styles.buttonHeading}>Graphics Cards</h2>
          <PiGraphicsCard className={styles.icon} />
        </Product>
      </div>
    </main>
  );
}
