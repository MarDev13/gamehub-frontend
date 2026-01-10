import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { deletePlatform } from "../api/adminPlatformApi"
import { usePlatforms } from "../hooks/usePlatforms"
import Pagination from "./Pagination"

export default function PlatformsTable() {
  const { platforms, loading, page, totalPages, setPage, refresh } = usePlatforms()
  const navigate = useNavigate()

  if (loading) return <p>Cargando plataformas...</p>

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar plataforma?")) return
    await deletePlatform(id)
    refresh()
  }

  return (
    <>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {platforms.map(platform => (
          <TableRow key={platform.id}>
            <TableCell className="font-medium">
              {platform.name}
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
                      navigate(`/admin/platforms/${platform.id}/edit`)
                    }
                  >
                    Editar
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => handleDelete(platform.id)}
                  >
                    Eliminar
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

    </>
  )

}
