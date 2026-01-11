import { useEffect, useState } from "react"
import { getMyOrders } from "@/api/orderApi"
import { useAuth } from "@/auth/hooks/useAuth"

type Order = {
  id: string
  total: number
  status: string
  createdAt: string
}

export default function MyOrdersPage() {
  const { isAuthenticated, isLoading } = useAuth()

  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      setError("Debes iniciar sesión")
      setLoading(false)
      return
    }

    getMyOrders()
      .then(setOrders)
      .catch(() => setError("No se pudieron cargar los pedidos"))
      .finally(() => setLoading(false))
  }, [isLoading, isAuthenticated])

  if (loading) return <p>Cargando pedidos...</p>
  if (error) return <p>{error}</p>

  if (orders.length === 0) {
    return <p>No tienes pedidos todavía.</p>
  }

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">Mis pedidos</h1>

      <div className="space-y-3">
        {orders.map(order => (
          <div
            key={order.id}
            className="rounded-lg border bg-white p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                Pedido #{order.id.slice(0, 8)}
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold">{order.total.toFixed(2)} €</p>
              <p className="text-sm capitalize">
                {order.status.toLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}




