"use client";

import * as React from "react";
import { Card, CardTitle, CardContent } from "./ui/card";

const styles = {
  card: "bg-neutral-100 border-neutral-400 dark:bg-neutral-900 dark:border-neutral-700 rounded-md",
  content: "flex flex-col items-center gap-6",
  title: "mb-4 text-2xl font-semibold",
};

type ProductSectionProps = {
  children: React.ReactNode;
  className: string;
  title: string;
};

export default function ProductSection({
  children,
  className,
  title,
  ...props
}: ProductSectionProps) {
  return (
    <div>
      <CardTitle className={`${styles.title}`}>{title}</CardTitle>
      <Card className={`${styles.card} ${className}`} {...props}>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
