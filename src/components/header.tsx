"use client";

import { tektur } from "@/app/fonts";
import * as React from "react";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 text-center min-h-fit mb-[15vh]">
      <h1
        className={`${tektur.className} text-6xl font-semibold tracking-wide`}
      >
        PC PART HUNTER
      </h1>
      <p className="text-xl font-semibold">
        Find the best deals, stock availability, and more on PC Parts from local
        NZ retailers.
      </p>
    </div>
  );
}
