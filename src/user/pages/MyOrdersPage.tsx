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

  if (loading)
    return (
      <div className="text-center text-[#bfae78] font-pixel">
        Cargando pedidos...
      </div>
    )

  if (error)
    return (
      <div className="max-w-lg mx-auto bg-[#fff6dc] border-[3px] border-black rounded-md p-6 text-center shadow-[0_6px_0_#000]">
        <h1 className="font-pixel text-lg text-[#c1121f] mb-2">
          Acceso restringido
        </h1>
        <p className="text-sm text-[#7a6a44]">{error}</p>
      </div>
    )

  if (orders.length === 0) {
    return (
      <div className="max-w-lg mx-auto bg-[#fff6dc] border-[3px] border-black rounded-md p-6 text-center shadow-[0_6px_0_#000]">
        <h1 className="font-pixel text-lg text-[#3f351a] mb-2">
          Sin partidas guardadas
        </h1>
        <p className="text-sm text-[#7a6a44]">
          Todavía no has realizado ningún pedido
        </p>
      </div>
    )
  }

  return (
    <div
      className="
        max-w-3xl mx-auto
        bg-[#fff6dc]
        border-[4px] border-black
        rounded-md
        p-6
        shadow-[0_8px_0_#000]
        space-y-6
      "
    >
      <h1
        className="
          font-pixel
          text-xl
          text-center
          text-[#3f351a]
          drop-shadow-[0_2px_0_#000]
        "
      >
        Historial de pedidos
      </h1>

      <div className="space-y-3">
        {orders.map(order => (
          <div
            key={order.id}
            className="
              flex justify-between items-center
              bg-[#e9e4d4]
              border-2 border-black
              rounded
              p-4
            "
          >
            <div>
              <p className="font-bold text-sm text-[#3f351a]">
                Pedido #{order.id.slice(0, 8)}
              </p>
              <p className="text-xs text-[#7a6a44]">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-[#3f351a]">
                {order.total.toFixed(2)} €
              </p>
              <p className="text-xs uppercase tracking-wide text-[#7a6a44]">
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}





