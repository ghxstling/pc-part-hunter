"use client";

import React from "react";
import { Tektur } from "next/font/google";
import { Button } from "@/components/ui/button";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export default function Home() {
  const styles = {
    button:
      "w-72 h-60 text-center justify-center items-center text-lg tracking-wide font-semibold",
  };

  return (
    <main className="flex flex-col gap-30 items-center justify-center min-h-screen">
      <h1
        className={`${tektur.className} text-6xl font-semibold tracking-wide`}
      >
        PC PART HUNTER
      </h1>

      <div className="grid grid-cols-2 gap-12">
        <Button variant={"outline"} className={styles.button}>
          CPUs
        </Button>
        <Button variant={"outline"} className={styles.button}>
          GPUs
        </Button>
      </div>
    </main>
  );
}
