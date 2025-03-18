"use client";

import * as React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const styles = {
  button:
    "w-fit h-fit bg-neutral-100 border-neutral-400 hover:bg-neutral-200 cursor-pointer",
  content: "flex flex-col items-center gap-6",
};

export default function Product({
  children,
  link,
  className,
  ...props
}: {
  children: React.ReactNode;
  link: string;
  className?: string;
}) {
  return (
    <Link href={link}>
      <Button
        variant={"outline"}
        className={`${styles.button} ${className}`}
        {...props}
      >
        <div className={styles.content}>{children}</div>
      </Button>
    </Link>
  );
}
