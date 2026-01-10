import { useMe } from "../hooks/useMe"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export default function ProfilePage() {
  const { user, loading } = useMe()

  if (loading) return <p>Cargando perfil...</p>
  if (!user) return <p>No se pudo cargar el perfil</p>

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-center mt-10">Mi perfil</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">{user.username}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Nombre</p>
              <p>{user.firstName}</p>
            </div>

            <div>
              <p className="text-muted-foreground">Apellido</p>
              <p>{user.lastName}</p>
            </div>

            <div>
              <p className="text-muted-foreground">Rol</p>
              <p className="font-medium">{user.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
