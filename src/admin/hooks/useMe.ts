import { useEffect, useState } from "react"
import { getMe } from "../api/adminAuthApi"

export function useMe() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMe()
      .then(setUser)
      .finally(() => setLoading(false))
  }, [])

  return { user, loading }
}
