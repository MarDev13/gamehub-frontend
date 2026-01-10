import { useEffect, useState } from "react"
import { getGamesCount } from "../api/adminGamesApi"

export default function useGamesMetrics() {
  const [totalGames, setTotalGames] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGamesCount()
      .then(res => setTotalGames(res.total))
      .catch(err => {
        console.error(err)
        setTotalGames(0)
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    totalGames,
    loading,
  }
}