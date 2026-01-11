import { useCart } from "@/cart/context/CartContext"
import { useEffect, useState } from "react"
import { CartItem } from "@/cart/context/CartContext"

export default function CheckoutSuccessPage() {
  const { items, clearCart } = useCart()
  const [ticketItems, setTicketItems] = useState<CartItem[]>([])

  useEffect(() => {
    setTicketItems(items)   // 👈 guardamos copia
    clearCart()             // 👈 luego limpiamos
  }, [])

  const total = ticketItems.reduce(
    (sum, item) =>
      sum + (item.salePrice ?? item.price) * item.quantity,
    0
  )

  return (
    <div className="max-w-xl mx-auto bg-[#fff6dc] p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">🧾 Ticket de compra</h1>

      <div className="space-y-2 text-sm">
        {ticketItems.map(item => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>
              {((item.salePrice ?? item.price) * item.quantity).toFixed(2)} €
            </span>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <div className="font-bold text-lg">
        Total pagado: {total.toFixed(2)} €
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Compra simulada · Proyecto académico · GameHub
      </p>
    </div>
  )
}

