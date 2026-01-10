import { useEffect, useState } from "react"
import { getUsersCount } from "../api/adminUsersApi"

export default function useUsersMetrics() {
  const [totalUsers, setTotalUsers] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsersCount()
      .then((res) => setTotalUsers(res.total))
      .catch(() => setTotalUsers(0))
      .finally(() => setLoading(false))
  }, [])

  return { totalUsers, loading }
}

