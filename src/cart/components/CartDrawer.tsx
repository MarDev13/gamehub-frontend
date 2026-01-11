import { X, Trash2, Plus } from "lucide-react"
import { useCart } from "@/cart/context/CartContext"
import { useNavigate } from "react-router-dom"

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    addToCart,
  } = useCart()

  const navigate = useNavigate()

  if (!isOpen) return null

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={closeCart}
      />

      {/* DRAWER */}
      <aside className="fixed right-0 top-0 z-50 h-full w-80 bg-[#fff6dc] flex flex-col shadow-xl">
        
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h2 className="text-lg font-bold text-[#3f351a]">
            Tu carrito
          </h2>

          <button
            onClick={closeCart}
            className="rounded p-1 hover:bg-[#f3e1b3] transition"
          >
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center text-[#7a6a44] space-y-2">
                <p className="text-lg font-medium">
                  El carrito está vacío
                </p>
                <p className="text-sm">
                  Añade algún juego para empezar 
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-3 items-center rounded bg-[#f3e1b3] p-3"
                >
                  {/* IMAGE */}
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-14 w-10 rounded object-cover"
                    />
                  )}

                  {/* INFO */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#3f351a]">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#7a6a44]">
                      Cantidad: {item.quantity}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-col items-center gap-2">
                    {/* ADD ONE */}
                    <button
                      onClick={() => addToCart(item)}
                      className="rounded bg-[#e8d7a3] p-1 hover:bg-[#d9c68a] transition"
                      title="Añadir uno más"
                    >
                      <Plus size={14} />
                    </button>

                    {/* REMOVE ALL */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#7a6a44] hover:text-red-600 transition"
                      title="Eliminar del carrito"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="border-t px-4 py-4 space-y-4">
            {/* TOTAL */}
            <div className="flex justify-between text-sm font-semibold text-[#3f351a]">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>

            {/* CHECKOUT */}
            <button
              onClick={() => {
                closeCart()
                navigate("shop/checkout")
              }}
              className="
                w-full rounded
                bg-[#3f351a]
                py-2 text-sm font-medium
                text-white
                hover:bg-[#2e2713]
                transition
              "
            >
              Finalizar compra
            </button>
          </div>
        )}
      </aside>
    </>
  )
}






