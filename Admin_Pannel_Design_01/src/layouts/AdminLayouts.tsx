// src/layouts/AdminLayout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function AdminLayouts() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Admin sidebar */}
      <SidebarProvider>
        <AppSidebar />

        {/* Admin main content */}
        <main className="flex-1 p-6">
          <SiteHeader />
          <Outlet /> {/* Admin pages render here */}
        </main>
      </SidebarProvider>
    </div>
  );
}
