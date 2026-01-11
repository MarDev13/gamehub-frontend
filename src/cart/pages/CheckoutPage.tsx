import { useCart } from "@/cart/context/CartContext"
import { createOrder } from "@/api/orderApi"
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import { useAuth } from "@/auth/hooks/useAuth"

export default function CheckoutPage() {
  const { items } = useCart()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const isSubmitting = useRef(false)

  const total = Number(
    items.reduce(
      (sum, item) =>
        sum + (item.salePrice ?? item.price) * item.quantity,
      0
    ).toFixed(2)
  )

  const handleBuy = async () => {
    if (isSubmitting.current || items.length === 0) return

    isSubmitting.current = true
    setLoading(true)

    try {
      await createOrder(total)
      navigate("/shop/order-success")
    } catch (error) {
      console.error(error)
      isSubmitting.current = false
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* CONTENEDOR CONSOLA */}
      <div
        className="
          border-[4px] border-black
          bg-[#f1ecd9]
          shadow-[0_6px_0_#000]
          rounded-md
          p-6
          space-y-6
        "
      >

        <div className="border-b-2 border-black pb-4">
          <h1
            className="
              font-pixel
              text-2xl
              font-bold
              text-[#3f351a]
              drop-shadow-[0_2px_0_#000]
            "
          >
            Finalizar compra
          </h1>
        </div>

        {!isAuthenticated && (
          <div
            className="
              border-2 border-black
              bg-[#fff2c2]
              p-4
              text-center
              space-y-3
            "
          >
            <p className="text-sm font-bold text-[#3f351a]">
              Debes iniciar sesión para completar la compra
            </p>

            <button
              onClick={() => navigate("/login")}
              className="
                border-2 border-black
                bg-[#ffd966]
                px-4 py-2
                text-sm font-bold
                hover:bg-[#ffcf4a]
                transition
              "
            >
              Iniciar sesión
            </button>
          </div>
        )}

        <div className="space-y-3">
          {items.map(item => (
            <div
              key={item.id}
              className="
                flex justify-between items-center
                border-2 border-black
                bg-[#f7f2e3]
                px-4 py-2
                text-sm
                shadow-[0_2px_0_#000]
              "
            >
              <span className="font-bold text-[#1f1f1f]">
                {item.title} × {item.quantity}
              </span>

              <span className="font-bold text-[#1f1f1f]">
                {((item.salePrice ?? item.price) * item.quantity).toFixed(2)} €
              </span>
            </div>
          ))}
        </div>

        <div
          className="
            flex justify-between
            border-t-2 border-black
            pt-4
            text-lg
            font-bold
            text-[#1f1f1f]
          "
        >
          <span>Total</span>
          <span>{total.toFixed(2)} €</span>
        </div>

        <button
          onClick={handleBuy}
          disabled={loading || items.length === 0 || !isAuthenticated}
          className="
            w-full
            border-2 border-black
            bg-[#3f351a]
            py-3
            text-sm
            font-bold
            text-white
            hover:bg-[#2e2713]
            active:translate-y-[1px]
            disabled:opacity-50
            transition
          "
        >
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </div>
    </div>
  )
}




