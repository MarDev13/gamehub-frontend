import { useEffect, useState } from "react"
import { getPlatforms } from "../api/adminPlatformApi"

export function usePlatforms() {
  const [platforms, setPlatforms] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPlatforms = async () => {
    setLoading(true)
    const res = await getPlatforms({ page, limit: 10 })
    setPlatforms(res.items)
    setTotalPages(Math.ceil(res.total / res.limit))
    setLoading(false)
  }

  useEffect(() => {
    fetchPlatforms()
  }, [page])

  return {
    platforms,
    loading,
    page,
    totalPages,
    setPage,
    refresh: fetchPlatforms,
  }
}
