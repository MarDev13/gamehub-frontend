import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPlatformById } from "../api/adminPlatformApi"
import EditPlatformForm from "../components/EditPlatformForm"

export default function EditPlatformPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [platform, setPlatform] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    getPlatformById(id)
      .then(res => {
        setPlatform(res)
      })
      .catch(() => {
        alert("Plataforma no encontrada")
        navigate("/admin/platforms")
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  if (loading) return <p>Cargando plataforma...</p>

  if (!platform) return null

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold">Editar plataforma</h1>
      <EditPlatformForm platform={platform} />
    </div>
  )
}

