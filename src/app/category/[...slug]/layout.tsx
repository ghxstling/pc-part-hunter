import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card } from "@/components/ui/card";
import { CPU } from "@/data/sidebar-content";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SidebarProvider>
        <div className="flex flex-row gap-10 my-auto items-center justify-center">
          <Card className="w-fit h-[60rem] max-h-[70vh] overflow-auto bg-neutral-50 dark:bg-neutral-900 border-neutral-400 dark:border-neutral-700">
            <AppSidebar data={CPU} />
          </Card>
          {children}
        </div>
      </SidebarProvider>
    </section>
  );
}
