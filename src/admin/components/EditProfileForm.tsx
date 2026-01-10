import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateMe } from "../api/adminAuthApi"
import { useNavigate } from "react-router-dom"

type Props = {
  user: any
}

export default function EditProfileForm({ user }: Props) {
  const navigate = useNavigate()

  const [email, setEmail] = useState(user.email)
  const [firstName, setFirstName] = useState(user.firstName ?? "")
  const [lastName, setLastName] = useState(user.lastName ?? "")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      await updateMe({ email, firstName, lastName })
      navigate("/admin/profile")
    } catch (e) {
      alert("Error al actualizar el perfil")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div>
        <Label>Email</Label>
        <Input value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <Label>Nombre</Label>
        <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>

      <div>
        <Label>Apellido</Label>
        <Input value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" disabled={loading}>
          Guardar cambios
        </Button>

        <Button variant="outline" onClick={() => navigate("/admin/profile")}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
