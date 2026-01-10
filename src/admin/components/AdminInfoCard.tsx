import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Settings } from "lucide-react"

export default function AdminInfoCard() {
  return (
    <Card className="border-muted">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </div>

        <div>
          <CardTitle className="text-base">
            Gestión de la tienda
          </CardTitle>
          <CardDescription>
            Panel de administración de GameHub
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground space-y-2">
        <p>
          Desde este panel podrás gestionar todos los elementos clave de la
          plataforma.
        </p>

        <ul className="list-disc pl-4 space-y-1">
          <li>Usuarios y roles</li>
          <li>Juegos, géneros y etiquetas</li>
          <li>Pedidos y actividad</li>
          <li>Estadísticas de uso</li>
        </ul>
      </CardContent>
    </Card>
  )
}
