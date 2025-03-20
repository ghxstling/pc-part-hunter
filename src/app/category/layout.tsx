"use client";

import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card } from "@/components/ui/card";
import { CPU } from "@/data/sidebar-content";
import ProductHeader from "@/components/product-header";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-auto bg-green-900">
      <ProductHeader />
      <SidebarProvider>
        <div className="grid grid-flow-col gap-10 items-center justify-center">
          <Card className="h-[60rem] overflow-x-hidden overflow-y-auto">
            <AppSidebar className="w-80 h-full" data={CPU} />
          </Card>
          <div className="grid gap-2">{children}</div>
        </div>
      </SidebarProvider>
    </section>
  );
}
