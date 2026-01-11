import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { useAuth } from "../hooks/useAuth"
import { loginRequest } from "../services/authApi"

export function LoginPage() {
    const { login, role } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const data = await loginRequest(email, password)
            login(data.access_token)

            setTimeout(() => {
                navigate(role === "ADMIN" ? "/admin" : "/shop")
            }, 0)
        } catch {
            setError("Usuario o contraseña incorrecto")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-[#F7EED9] to-[#EADDBB] overflow-hidden">


            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                <img
                    src="/img/moneda-retro.png"
                    className="absolute left-[22%] w-10 opacity-20 animate-zigzag-soft"
                    style={{ animationDuration: "13s", animationDelay: "-6s" }}
                />
                <img
                    src="/img/moneda-retro.png"
                    className="absolute left-[28%] w-12 opacity-18 animate-zigzag-wide"
                    style={{ animationDuration: "18s", animationDelay: "-14s" }}
                />


                <img
                    src="/img/moneda-retro.png"
                    className="absolute left-[46%] w-14 opacity-20 animate-zigzag-wide"
                    style={{ animationDuration: "15s", animationDelay: "-9s" }}
                />
                <img
                    src="/img/moneda-retro.png"
                    className="absolute left-[54%] w-10 opacity-18 animate-zigzag-soft"
                    style={{ animationDuration: "20s", animationDelay: "-18s" }}
                />

                {/* Derecha */}
                <img
                    src="/img/moneda-retro.png"
                    className="absolute left-[68%] w-12 opacity-18 animate-zigzag-soft"
                    style={{ animationDuration: "17s", animationDelay: "-11s" }}
                />
                <img
                    src="/img/moneda-retro.png"
                    className="absolute left-[74%] w-10 opacity-15 animate-zigzag-wide"
                    style={{ animationDuration: "23s", animationDelay: "-21s" }}
                />
            </div>

            <Card className="relative z-10 w-full max-w-md border-2 border-[#C8A96A] bg-[#EFE4C6] shadow-[4px_4px_0px_#D6B87A]">

                <CardHeader className="text-center">
                    <CardTitle className="font-pixel text-xl tracking-widest uppercase text-[#5B4636]">
                        PRESS START
                    </CardTitle>
                    <CardDescription className="text-[#8A735E]">
                        Accede con tu email y contraseña
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
                            {loading ? "LOADING..." : "START"}
                        </Button>

                        <p className="text-sm text-[#8A735E]">
                            ¿No tienes cuenta?{" "}
                            <span
                                className="cursor-pointer underline text-[#B08968] hover:text-[#8A6A4F]"
                                onClick={() => navigate("/register")}
                            >
                                INSERT COIN
                            </span>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default LoginPage


