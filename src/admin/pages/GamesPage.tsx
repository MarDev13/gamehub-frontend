import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import GamesTable from "../components/GamesTable"

export default function GamesPage() {
  const navigate = useNavigate()
  return (
    <div className="space-y-7 mt-10">
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-semibold">Gestión de juegos</h1>
       </div>

      <div className="px-6 lg:px-12 xl:px-16 rounded-lg border bg-secondary shadow-sm py-4">
        <GamesTable />
      </div>
       <div className="flex flex-col items-center space-y-6">
       <Button onClick={() => navigate("/admin/games/new")} className="center">
          Crear juego
        </Button>
    </div>
    </div>
  )
}