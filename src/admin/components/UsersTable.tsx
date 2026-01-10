import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Pagination from "./Pagination"
import RoleBadge from "./Badge"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"
import { useState } from "react"
import ChangeUserRoleDialog from "./ChangeUserRoleDialog"

export default function UsersTable() {
  const {
    users,
    loading,
    page,
    totalPages,
    setPage,
    refresh,
  } = useUsers()

  const navigate = useNavigate()
  const [selectedUser, setSelectedUser] = useState<any | null>(null)

  if (loading) return <p>Cargando usuarios...</p>

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>

            {/* OCULTO EN MÓVIL */}
            <TableHead className="hidden md:table-cell">
              Nombre
            </TableHead>

            <TableHead>Tipo de rol</TableHead>

            {/* OCULTO EN MÓVIL */}
            <TableHead className="hidden md:table-cell">
              Creado
            </TableHead>

            <TableHead className="text-right">
              Acciones
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="max-w-[180px] truncate">
                {user.email}
              </TableCell>

              {/* OCULTO EN MÓVIL */}
              <TableCell className="hidden md:table-cell">
                {user.firstName} {user.lastName}
              </TableCell>

              <TableCell>
                <RoleBadge role={user.role.name} />
              </TableCell>

              {/* OCULTO EN MÓVIL */}
              <TableCell className="hidden md:table-cell">
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() =>
                        navigate(`/admin/users/${user.id}/orders`)
                      }
                    >
                      Ver pedidos
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setSelectedUser(user)}
                    >
                      Cambiar rol
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      {selectedUser && (
        <ChangeUserRoleDialog
          open={true}
          userId={selectedUser.id}
          currentRole={selectedUser.role.name}
          onClose={() => setSelectedUser(null)}
          onSuccess={refresh}
        />
      )}
    </>
  )
}


