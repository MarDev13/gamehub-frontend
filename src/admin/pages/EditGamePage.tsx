import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getGameById } from "../api/adminGamesApi"
import EditGameForm from "../components/GameForm"

export default function EditGamePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [game, setGame] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    getGameById(id)
      .then(res => {
        setGame(res.game)
      })
      .catch(() => {
        alert("Error al cargar el juego")
        navigate("/admin/games")
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  if (loading) return <p>Cargando juego...</p>
  if (!game) return null

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-semibold mb-6  text-center">
          Editar juego
        </h1>

        <EditGameForm mode="edit" game={game} />
      </div>
    </div>
  )
}

