"use client";

import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card } from "@/components/ui/card";
import { CPU } from "@/data/sidebar-content";
import ProductHeader from "@/components/product-header";

// main layout for category pages
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <ProductHeader />
      <SidebarProvider>
        <div className="flex flex-row gap-10 items-center justify-center mx-auto bg-red-900 h-full">
          <Card className="h-[60rem] overflow-x-hidden overflow-y-auto">
            <AppSidebar className="w-80" data={CPU} />
          </Card>
          <div className="space-y-12">{children}</div>
        </div>
      </SidebarProvider>
    </section>
  );
}
