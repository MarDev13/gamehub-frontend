import { useEffect, useState, useCallback } from "react"
import { getUsers } from "../api/adminUsersApi"
import { User } from "../types/user"

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const limit = 10

  const [total, setTotal] = useState(0)

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getUsers({ page, limit })
      setUsers(res.items)
      setTotal(res.total)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const totalPages = Math.ceil(total / limit)

  return {
    users,
    loading,
    page,
    totalPages,
    setPage,
    refresh: fetchUsers,
  }
}

