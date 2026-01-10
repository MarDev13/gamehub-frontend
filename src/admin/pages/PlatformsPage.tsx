import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import PlatformsTable from "../components/PlatformsTable"

export default function PlatformsPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center space-y-6 mt-10">
      <h1 className="text-2xl font-semibold">
        Gestión de plataformas
      </h1>

      <div className="rounded-lg border max-w-3xl w-full bg-secondary shadow-sm px-6 py-4">
        <PlatformsTable />
      </div>

      <Button onClick={() => navigate("/admin/platforms/new")}>
        Crear plataforma
      </Button>
    </div>
  )
}
