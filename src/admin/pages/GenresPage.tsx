import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import GenresTable from "../components/GenresTable"

export default function GenresPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center space-y-6 mt-10">
  <h1 className="text-2xl font-semibold">
    Gestión de géneros
  </h1>

  <div className="w-full max-w-3xl rounded-lg border bg-secondary shadow-sm px-6 py-4">
    <GenresTable />
  </div>

  <Button onClick={() => navigate("/admin/genres/new")}>
    Crear género
  </Button>
</div>
  )
}
