import { useCart } from "@/cart/context/CartContext"
import { useNavigate } from "react-router-dom"

export default function CheckoutPage() {
  const { items } = useCart()
  const navigate = useNavigate()

  const total = items.reduce(
    (sum, item) =>
      sum + (item.salePrice ?? item.price) * item.quantity,
    0
  )

  if (items.length === 0) {
    return <p className="text-center">Tu carrito está vacío</p>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Resumen de compra</h1>

      <div className="space-y-4">
        {items.map(item => (
          <div
            key={item.id}
            className="flex justify-between border-b pb-2"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>
              {((item.salePrice ?? item.price) * item.quantity).toFixed(2)} €
            </span>
          </div>
        ))}
      </div>

      <div className="text-xl font-bold">
        Total: {total.toFixed(2)} €
      </div>

      <button
        onClick={() => navigate("/checkout/success")}
        className="w-full rounded-lg bg-[#3f351a] py-3 text-white font-semibold"
      >
        Confirmar compra
      </button>
    </div>
  )
}
