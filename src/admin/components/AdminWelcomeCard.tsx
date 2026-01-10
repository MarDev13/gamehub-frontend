import { UserCheck } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

type AdminWelcomeCardProps = {
  email: string
}

export default function AdminWelcomeCard({ email }: AdminWelcomeCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
          <UserCheck className="h-5 w-5 text-muted-foreground" />
        </div>

        <div className="space-y-1">
          <CardTitle>Bienvenido al panel de administración</CardTitle>
          <CardDescription>
            Has iniciado sesión correctamente
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Usuario conectado
          </p>
          <p className="font-medium">
            {email}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Rol: Administrador
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Último acceso registrado correctamente.
        </p>
      </CardContent>
    </Card>
  )
}

