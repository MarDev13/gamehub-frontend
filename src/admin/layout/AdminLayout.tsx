import { AppSidebar } from "@/admin/components/AppSideBar"
import { Button } from "@/components/ui/button"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Settings, User, LogOut } from "lucide-react"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function AdminLayout() {
  const navigate = useNavigate()
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">

        <AppSidebar />


        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center border-b px-4 md:px-6 bg-slate-50">
            <SidebarTrigger className="md:hidden" />
            <div className="flex items-center gap-2 align-center">
              <img
                src="/img/logo/cat-icon.png"
                alt="GameHub"
                className="h-16 w-auto mt-1.5 mx-auto"
              />
              <span className="text-lg font-semibold">GameHub</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
            </div>
          </header>
          <main className="flex-1 p-6 bg-slate-50">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}