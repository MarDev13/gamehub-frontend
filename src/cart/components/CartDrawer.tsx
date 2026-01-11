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
        className="fixed inset-0 bg-black/60 z-40"
        onClick={closeCart}
      />

      {/* DRAWER */}
      <aside
        className="
          fixed right-0 top-0 z-50
          h-full w-80
          bg-[#f1ecd9]
          border-l-[4px] border-black
          shadow-[-6px_0_0_#000]
          flex flex-col
        "
      >
        {/* HEADER */}
        <div
          className="
            flex items-center justify-between
            border-b-[4px] border-black
            px-4 py-4
            bg-[#f1ecd9]
          "
        >
          <h2
            className="
              font-pixel
              text-lg
              font-bold
              text-[#1f1f1f]
            "
          >
            Tu carrito
          </h2>

          <button
            onClick={closeCart}
            className="
              border-2 border-black
              bg-[#ffd966]
              p-1
              rounded-md
              hover:bg-[#ffcf4a]
              active:translate-y-[1px]
              transition
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-sm font-bold text-[#3f351a]">
                  El carrito está vacío
                </p>
                <p className="text-xs text-[#7a6a44]">
                  Añade algún juego para empezar
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div
                  key={item.id}
                  className="
                    flex gap-3 items-center
                    border-2 border-black
                    bg-[#f7f2e3]
                    p-3
                    shadow-[0_3px_0_#000]
                  "
                >
                  {/* IMAGE */}
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="
                        h-16 w-12
                        object-cover
                        border-2 border-black
                        select-none
                      "
                      draggable={false}
                    />
                  )}

                  {/* INFO */}
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#1f1f1f] truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#7a6a44]">
                      Cantidad: {item.quantity}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="
                        border-2 border-black
                        bg-[#ffd966]
                        p-1
                        rounded
                        hover:bg-[#ffcf4a]
                        active:translate-y-[1px]
                        transition
                      "
                      title="Añadir uno más"
                    >
                      <Plus size={14} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
                        text-[#7a6a44]
                        hover:text-[#c1121f]
                        transition
                      "
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
          <div
            className="
              border-t-[4px] border-black
              px-4 py-4
              space-y-4
              bg-[#f1ecd9]
            "
          >
            {/* TOTAL */}
            <div className="flex justify-between text-sm font-bold text-[#1f1f1f]">
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
                w-full
                border-2 border-black
                bg-[#3f351a]
                py-2
                text-sm
                font-bold
                text-white
                hover:bg-[#2e2713]
                active:translate-y-[1px]
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







