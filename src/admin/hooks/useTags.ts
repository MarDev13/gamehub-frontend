import { useEffect, useState, useCallback } from "react"
import { getTags } from "../api/adminTagsApi"

export function useTags() {
  const [tags, setTags] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const limit = 10
  const [total, setTotal] = useState(0)

  const fetchTags = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getTags({ page, limit })
      setTags(res.items)
      setTotal(res.total)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchTags()
  }, [fetchTags])

  const totalPages = Math.ceil(total / limit)

  return {
    tags,
    loading,
    page,
    totalPages,
    setPage,
    refresh: fetchTags,
  }
}


