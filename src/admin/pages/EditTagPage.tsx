import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTagById, updateTag } from "../api/adminTagsApi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EditTagPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    getTagById(id).then(res => {
      setName(res.tag.name)
      setLoading(false)
    })
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) return

    try {
      await updateTag(id, { name })
      navigate("/admin/tags")
    } catch (error) {
      console.error(error)
      alert("Error al actualizar la etiqueta")
    }
  }

  if (loading) return <p>Cargando etiqueta...</p>

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-semibold">Editar etiqueta</h1>

        <div className="space-y-2">
          <Label>Nombre</Label>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit">
            Guardar cambios
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/tags")}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}
