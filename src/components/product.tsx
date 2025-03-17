"use client";

import * as React from "react";
import { Button } from "./ui/button";

const styles = {
  button: "w-60 h-72 bg-neutral-200 border-neutral-400 hover:bg-neutral-300",
  content: "flex flex-col items-center gap-6",
};

export default function Product({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <Button variant={"outline"} className={styles.button} {...props}>
      <div className={styles.content}>{children}</div>
    </Button>
  );
}
