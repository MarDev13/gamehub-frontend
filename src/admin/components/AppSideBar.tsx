import {
  LayoutDashboard,
  Users,
  Gamepad2,
  Shapes,
  Tags,
  ShoppingCart,
  LogOut,
  User,
} from "lucide-react"
import { NavLink } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useAuth } from "./../../auth/hooks/useAuth"

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Usuarios",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Juegos",
    url: "/admin/games",
    icon: Gamepad2,
  },
  {
    title: "Géneros",
    url: "/admin/genres",
    icon: Shapes,
  },
  {
    title: "Etiquetas",
    url: "/admin/tags",
    icon: Tags,
  },
  {
    title: "Pedidos",
    url: "/admin/orders",
    icon: ShoppingCart,
  },
]

export function AppSidebar() {
  const { email, logout } = useAuth()


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Panel Admin</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
                          isActive
                            ? "bg-muted text-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                        ].join(" ")
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User section */}
      <SidebarFooter className="border-t p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
            <User className="h-4 w-4" />
          </div>

          <div className="flex flex-col text-sm overflow-hidden">
           <span className="font-medium truncate">
  {email}
</span>

            <button
              onClick={logout}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-3 w-3" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
