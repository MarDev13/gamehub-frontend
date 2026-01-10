import { useState } from "react"
import { updatePlatform } from "../api/adminPlatformApi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

type Props = {
  platform: any
}

export default function EditPlatformForm({ platform }: Props) {
  const navigate = useNavigate()
  const [name, setName] = useState(platform.name)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await updatePlatform(platform.id, { name })
      navigate("/admin/platforms")
    } catch {
      alert("Error al guardar la plataforma")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Nombre</Label>
        <Input value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          Guardar cambios
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/admin/platforms")}
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}
