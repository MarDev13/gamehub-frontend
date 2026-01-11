import { useAuth } from "@/auth/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const { email, role } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="max-w-lg space-y-6">
      <h1 className="text-2xl font-bold">Mi perfil</h1>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Rol:</strong> {role}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button onClick={() => navigate("/account/orders")}>
          Ver mis pedidos
        </Button>

        <Button disabled variant="outline">
          Editar perfil (próximamente)
        </Button>
      </div>
    </div>
  )
}


