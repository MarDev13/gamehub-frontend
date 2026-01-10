import { useEffect, useState } from "react"
import { getUserOrders } from "../api/adminUsersApi"

export function useUserOrders(userId?: string) {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return

    setLoading(true)

    getUserOrders(userId)
      .then((res) => {
        setOrders(res.orders)
      })
      .catch((err) => {
        console.error("Error cargando pedidos", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [userId])

  return { orders, loading }
}
