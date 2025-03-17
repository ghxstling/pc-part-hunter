"use client";

import * as React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const styles = {
  button:
    "w-60 h-72 bg-neutral-200 border-neutral-400 hover:bg-neutral-300 cursor-pointer",
  content: "flex flex-col items-center gap-6",
};

export default function Product({
  children,
  link,
  ...props
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link href={link}>
      <Button variant={"outline"} className={styles.button} {...props}>
        <div className={styles.content}>{children}</div>
      </Button>
    </Link>
  );
}
