"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { tektur } from "@/app/fonts";
import { usePathname } from "next/navigation";

export default function ProductHeader() {
  const pathname = usePathname().split("/");
  const page = pathname.length > 1 ? pathname[1] : "";

  return (
    <header className="w-full h-[10vh] bg-blue-600 my-auto">
      <div className="flex flex-col justify-center h-full mx-auto w-[90vw]">
        <h1
          className={`${tektur.className} text-2xl font-semibold tracking-wide`}
        >
          PC PART HUNTER
        </h1>
        <AppBreadcrumb />
      </div>
    </header>
  );
}

export function AppBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
