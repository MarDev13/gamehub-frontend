import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerRequest } from "../services/authApi"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gamepad } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
   const { toast } = useToast()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await registerRequest({
        email,
        password,
        userName,
        firstName,
        lastName,
      })

 toast({
  title: ("Usuario creado con éxito"),
  description: (
    <div className="flex items-center gap-2">
      <Gamepad className="h-4 w-4 text-[#5B4636]" />
      <span>Ya puedes iniciar sesión</span>
    </div>
  ),
  className: "bg-[#EFE4C6] border-[#C8A96A] text-[#5B4636]",
})


setTimeout(() => {
  navigate("/login")
}, 1200)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-[#F7EED9] to-[#EADDBB] overflow-hidden">

     
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/img/moneda-retro.png"
          className="absolute left-[24%] w-10 opacity-20 animate-zigzag-soft"
          style={{ animationDuration: "14s", animationDelay: "-6s" }}
        />
        <img
          src="/img/moneda-retro.png"
          className="absolute left-[30%] w-12 opacity-18 animate-zigzag-wide"
          style={{ animationDuration: "20s", animationDelay: "-14s" }}
        />

        <img
          src="/img/moneda-retro.png"
          className="absolute left-[50%] w-14 opacity-20 animate-zigzag-wide"
          style={{ animationDuration: "16s", animationDelay: "-9s" }}
        />
        <img
          src="/img/moneda-retro.png"
          className="absolute left-[56%] w-10 opacity-18 animate-zigzag-soft"
          style={{ animationDuration: "22s", animationDelay: "-18s" }}
        />

        <img
          src="/img/moneda-retro.png"
          className="absolute left-[70%] w-12 opacity-18 animate-zigzag-soft"
          style={{ animationDuration: "18s", animationDelay: "-11s" }}
        />
        <img
          src="/img/moneda-retro.png"
          className="absolute left-[76%] w-10 opacity-15 animate-zigzag-wide"
          style={{ animationDuration: "24s", animationDelay: "-21s" }}
        />
      </div>

      <Card className="relative z-10 w-full max-w-md border-2 border-[#C8A96A] bg-[#EFE4C6] shadow-[4px_4px_0px_#D6B87A]">

        <CardHeader className="text-center">
          <CardTitle className="font-pixel text-xl tracking-widest uppercase text-[#5B4636]">
            INSERT COIN
          </CardTitle>
          <CardDescription className="text-[#8A735E]">
            Regístrate para acceder a GameHub
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#5B4636]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-[#C8A96A] bg-[#F7EED9] text-[#5B4636] placeholder:text-[#9C8468] focus-visible:ring-[#C8A96A]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="userName" className="text-[#5B4636]">
                Nombre de usuario
              </Label>
              <Input
                id="userName"
                placeholder="usuario123"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="border-2 border-[#C8A96A] bg-[#F7EED9] text-[#5B4636] focus-visible:ring-[#C8A96A]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#5B4636]">
                Nombre
              </Label>
              <Input
                id="firstName"
                placeholder="Lucas"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="border-2 border-[#C8A96A] bg-[#F7EED9] text-[#5B4636] focus-visible:ring-[#C8A96A]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#5B4636]">
                Apellido
              </Label>
              <Input
                id="lastName"
                placeholder="Gómez"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="border-2 border-[#C8A96A] bg-[#F7EED9] text-[#5B4636] focus-visible:ring-[#C8A96A]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#5B4636]">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-[#C8A96A] bg-[#F7EED9] text-[#5B4636] focus-visible:ring-[#C8A96A]"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 font-pixel text-center">
                {error}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full bg-[#D6B87A] text-[#5B4636] hover:bg-[#C9A964]"
              disabled={loading}
            >
              {loading ? "CREATING..." : "CREATE PLAYER"}
            </Button>

            <p className="text-sm text-[#8A735E]">
              ¿Ya tienes cuenta?{" "}
              <span
                className="cursor-pointer underline text-[#B08968] hover:text-[#8A6A4F]"
                onClick={() => navigate("/login")}
              >
                PRESS START
              </span>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage
