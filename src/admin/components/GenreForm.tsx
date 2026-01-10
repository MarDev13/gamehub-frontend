import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

type Props = {
  initialName?: string
  onSubmit: (name: string) => Promise<void>
}

export default function GenreForm({ initialName = "", onSubmit }: Props) {
  const [name, setName] = useState(initialName)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await onSubmit(name)
    navigate("/admin/genres")
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
      <div>
        <Label>Nombre del género</Label>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          Guardar
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/admin/genres")}
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}
