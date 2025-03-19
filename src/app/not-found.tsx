"use client";

import React from "react";
import Product from "@/components/product";

export default function NotFound() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center gap-2 bg-white text-black dark:bg-neutral-950 dark:text-white">
      <code className="text-9xl">404</code>
      <code className="text-2xl">Page doesn&#39;t exist... yet(?)</code>

      <Product link={"/"} className="mt-[10vh] text-md">
        Return Home
      </Product>
    </div>
  );
}
