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
          <header className="flex h-14 items-center border-b px-4 md:px-6">
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-muted hover:bg-muted/80"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-48 rounded-xl bg-background p-2 shadow-lg"
                >
                  <DropdownMenuItem
                    onClick={() => navigate("/admin/profile")}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <User className="h-4 w-4 text-muted-foreground" />
                    Ver perfil
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={() => {
                      localStorage.removeItem("token")
                      navigate("/login")
                    }}
                    className="flex items-center gap-2 text-sm text-red-600 cursor-pointer focus:text-red-600"
                  >
                    <LogOut className="h-4 w-4" />
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted hover:bg-muted/80"
                onClick={() => navigate("/admin/profile/edit")}
              >
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </header>


          <main className="flex-1 p-6 bg-muted/40">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}