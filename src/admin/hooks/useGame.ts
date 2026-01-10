import { useEffect, useState, useCallback } from "react"
import { getGames } from "../api/adminGamesApi"
import type { Game } from "../types/games"

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const limit = 10
  const [total, setTotal] = useState(0)

  const fetchGames = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getGames({ page, limit })
      setGames(res.items) 
      setTotal(res.total)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  return {
    games,
    loading,
    page,
    totalPages: Math.ceil(total / limit),
    setPage,
    refresh: fetchGames,
  }
}
