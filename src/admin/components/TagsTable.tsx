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
import { deleteTag } from "../api/adminTagsApi"
import { useTags } from "../hooks/useTags"
import Pagination from "./Pagination"

export default function TagsTable() {
  const {
    tags,
    loading,
    page,
    totalPages,
    setPage,
    refresh,
  } = useTags()

  const navigate = useNavigate()

  if (loading) return <p>Cargando etiquetas...</p>

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar etiqueta?")) return
    await deleteTag(id)
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
          {tags.map(tag => (
            <TableRow key={tag.id}>
              <TableCell className="font-medium">
                {tag.name}
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
                        navigate(`/admin/tags/${tag.id}/edit`)
                      }
                    >
                      Editar
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleDelete(tag.id)}
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
