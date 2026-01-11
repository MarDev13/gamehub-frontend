import { useCart } from "@/cart/context/CartContext"
import { useEffect, useMemo, useState } from "react"
import { CartItem } from "@/cart/context/CartContext"

export default function CheckoutSuccessPage() {
  const { items, clearCart } = useCart()
  const [ticketItems, setTicketItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (items.length > 0) {
      setTicketItems(items)
      clearCart()
    }
   
  }, [])

  const total = useMemo(() => {
    return ticketItems.reduce(
      (sum, item) =>
        sum + (item.salePrice ?? item.price) * item.quantity,
      0
    )
  }, [ticketItems])

  if (ticketItems.length === 0) {
    return (
      <div
        className="
          max-w-xl mx-auto mt-10
          border-[3px] border-black
          bg-[#f1ecd9]
          p-6
          text-center
          shadow-[0_6px_0_#000]
        "
      >
        <h1 className="font-pixel text-lg text-[#3f351a] mb-2">
          Ticket no disponible
        </h1>
        <p className="text-sm text-[#7a6a44]">
          El ticket solo está disponible justo después de finalizar la compra.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div
        className="
          border-[4px] border-black
          bg-[#fff6dc]
          shadow-[0_8px_0_#000]
          rounded-md
          p-6
          space-y-4
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
          Ticket de compra
        </h1>

        {/* SEPARADOR */}
        <div className="border-t-2 border-dashed border-black my-2" />

       
        <div className="space-y-2 text-sm">
          {ticketItems.map(item => (
            <div
              key={item.id}
              className="flex justify-between font-bold text-[#1f1f1f]"
            >
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>
                {(
                  (item.salePrice ?? item.price) * item.quantity
                ).toFixed(2)} €
              </span>
            </div>
          ))}
        </div>

      
        <div className="border-t-2 border-dashed border-black my-2" />

       
        <div className="flex justify-between text-lg font-bold text-[#1f1f1f]">
          <span>Total pagado</span>
          <span>{total.toFixed(2)} €</span>
        </div>

       
        <p className="text-[11px] text-center text-[#7a6a44] pt-3">
          Compra simulada · Proyecto académico · GameHub · 2026
        </p>
      </div>
    </div>
  )
}




