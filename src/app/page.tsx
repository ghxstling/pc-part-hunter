"use client";

import React from "react";
import Product from "@/components/product";
import { BsCpu } from "react-icons/bs";
import { PiGraphicsCard } from "react-icons/pi";

export default function Home() {
  const styles = {
    button: "size-60",
    buttonHeading: "text-2xl font-semibold tracking-wide",
    icon: "size-32",
  };

  return (
    <section className="flex flex-col my-auto items-center justify-center">
      <div className="grid grid-cols-2 gap-12">
        <Product link={"/category/cpu"} className={styles.button}>
          <h2 className={styles.buttonHeading}>CPUs</h2>
          <BsCpu className={styles.icon} />
        </Product>
        <Product link={"/category/gpu"} className={styles.button}>
          <h2 className={styles.buttonHeading}>Graphics Cards</h2>
          <PiGraphicsCard className={styles.icon} />
        </Product>
      </div>
    </section>
  );
}
