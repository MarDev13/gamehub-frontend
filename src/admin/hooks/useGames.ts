import { useEffect, useState } from "react"
import { getGames, togglePublishGame } from "../api/adminGamesApi"

export function useGames() {
  const [games, setGames] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchGames = async () => {
    setLoading(true)
    try {
      const res = await getGames({ page, limit: 10 })
      setGames(res.items)
      setTotalPages(Math.ceil(res.total / res.limit))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [page])


  const togglePublish = async (id: string) => {
    try {
      await togglePublishGame(id)
      await fetchGames() // refresca tabla
    } catch (error) {
      console.error(error)
    }
  }

  return {
    games,
    loading,
    page,
    totalPages,
    setPage,
    refresh: fetchGames,
    togglePublish, // 👈 ahora sí existe
  }
}

