import { AppSidebar } from "@/admin/components/AppSideBar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          {/* Header (mobile trigger lives here) */}
          <header className="flex h-14 items-center border-b px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            <h1 className="ml-2 text-lg font-semibold md:ml-0">
              Admin
            </h1>
          </header>

          {/* Page content */}
          <main className="flex-1 p-6 bg-muted/40">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}