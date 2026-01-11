import { useAuth } from "@/auth/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const { email, role } = useAuth()
  const navigate = useNavigate()

  return (
    <div
      className="
        max-w-lg mx-auto
        border-[4px] border-black
        bg-[#fff6dc]
        shadow-[0_8px_0_#000]
        rounded-md
        p-6
        space-y-6
      "
    >
   
      <h1
        className="
          font-pixel
          text-xl
          text-center
          text-[#3f351a]
          drop-shadow-[0_2px_0_#000]
        "
      >
        Perfil de jugador
      </h1>

      <div
        className="
          bg-[#e9e4d4]
          border-2 border-black
          rounded
          p-4
          text-sm
          space-y-2
        "
      >
        <p className="text-[#3f351a]">
          <span className="font-bold">Email:</span>{" "}
          <span className="font-mono">{email}</span>
        </p>

        <p className="text-[#3f351a]">
          <span className="font-bold">Rol:</span>{" "}
          <span className="uppercase">{role}</span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => navigate("/account/orders")}
          className="
            border-2 border-black
            bg-[#ffd966]
            text-black
            font-bold
            hover:bg-[#ffcf4a]
            active:translate-y-[1px]
          "
        >
          Ver mis pedidos
        </Button>

        <Button
          disabled
          variant="outline"
          className="
            border-2 border-dashed border-black
            text-[#7a6a44]
            cursor-not-allowed
          "
        >
          Editar perfil (próximamente)
        </Button>
      </div>
    </div>
  )
}


