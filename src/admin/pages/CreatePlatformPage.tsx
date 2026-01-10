import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createPlatform } from "../api/adminPlatformApi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreatePlatformPage() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      await createPlatform({ name })
      navigate("/admin/platforms")
    } catch (error) {
      console.error(error)
      alert("Error al crear la plataforma")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-semibold">
          Crear plataforma
        </h1>

        <div className="space-y-2">
          <Label>Nombre</Label>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit" disabled={loading}>
            Crear
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
    </div>
  )
}
