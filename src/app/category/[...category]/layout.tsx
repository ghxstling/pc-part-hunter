import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <section>
          <AppSidebar />
        </section>
        <section>{children}</section>
      </SidebarProvider>
    </>
  );
}
