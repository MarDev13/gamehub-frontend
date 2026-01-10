import { useEffect, useState, useCallback } from "react"
import { getGenres } from "../api/adminGenresApi"

export function useGenres() {
  const [genres, setGenres] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const limit = 10
  const [total, setTotal] = useState(0)

  const fetchGenres = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getGenres({ page, limit })
      setGenres(res.items)
      setTotal(res.total)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchGenres()
  }, [fetchGenres])

  const totalPages = Math.ceil(total / limit)

  return {
    genres,
    loading,
    page,
    totalPages,
    setPage,
    refresh: fetchGenres,
  }
}
