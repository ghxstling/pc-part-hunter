"use client";

import React from "react";
import { Tektur } from "next/font/google";
import { Button } from "@/components/ui/button";
import { BsCpu } from "react-icons/bs";
import { PiGraphicsCard } from "react-icons/pi";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export default function Home() {
  const styles = {
    button:
      "size-60 text-center justify-center items-center text-lg tracking-wide font-semibold ",
    icon: "size-32",
    buttonHeading: "text-2xl font-semibold",
    buttonContent: "flex flex-col items-center gap-6",
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
        {/* TODO: change outline and background colour in light mode */}
        <Button variant={"outline"} className={styles.button}>
          <div className={styles.buttonContent}>
            <h2 className={styles.buttonHeading}>CPUs</h2>
            <BsCpu className={styles.icon} />
          </div>
        </Button>
        <Button variant={"outline"} className={styles.button}>
          <div className={styles.buttonContent}>
            <h2 className={styles.buttonHeading}>Graphics Cards</h2>
            <PiGraphicsCard className={styles.icon} />
          </div>
        </Button>
      </div>
    </main>
  );
}
