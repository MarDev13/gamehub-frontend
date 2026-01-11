import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { User, ShoppingCart, LogOut } from "lucide-react"
import { useCart } from "@/cart/context/CartContext"
import { useAuth } from "@/auth/hooks/useAuth"

export default function ShopHeader() {
  const { toggleCart, items } = useCart()
  const { isAuthenticated, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate("/shop") 
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <header
  className="
    h-16
    border-b-[4px] border-black
    bg-[#f1ecd9]
    shadow-[0_4px_0_#000]
    relative z-50
  "
>
  <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

    <Link
      to="/shop"
      className="
        flex items-center gap-2
        hover:translate-y-[1px]
        transition
      "
    >
      <img
        src="/img/logo/cat-icon.png"
        className="h-16 pixelated select-none"
        draggable={false}
      />
      <span className="
        font-pixel
        font-bold
        tracking-wide
        text-[#1f1f1f]
      ">
        GameHub
      </span>
    </Link>

    <div className="flex items-center gap-3 relative">

      <button
        onClick={toggleCart}
        className="
          relative
          border-2 border-black
          bg-[#ffd966]
          p-2
          rounded-md
          hover:bg-[#ffcf4a]
          active:translate-y-[1px]
          active:shadow-[0_1px_0_#000]
          transition
        "
      >
        <ShoppingCart size={18} />

        {totalItems > 0 && (
          <span
            className="
              absolute -top-2 -right-2
              flex h-5 min-w-[20px]
              items-center justify-center
              rounded-full
              bg-[#c1121f]
              border-2 border-black
              px-1
              text-[11px]
              font-bold
              text-white
            "
          >
            {totalItems}
          </span>
        )}
      </button>

      <div className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="
            border-2 border-black
            bg-[#ffd966]
            p-2
            rounded-md
            hover:bg-[#ffcf4a]
            active:translate-y-[1px]
            transition
          "
        >
          <User size={18} />
        </button>

        {open && (
          <div
            className="
              absolute right-0 mt-2 w-48
              border-[3px] border-black
              bg-[#f1ecd9]
              shadow-[0_4px_0_#000]
              rounded-md
              overflow-hidden
              z-50
            "
          >
            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="
                  block px-4 py-2
                  text-sm font-bold
                  hover:bg-[#ffd966]
                "
              >
                Iniciar sesión
              </Link>
            ) : (
              <>
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="
                    block px-4 py-2
                    text-sm font-bold
                    hover:bg-[#ffd966]
                  "
                >
                  Mi perfil
                </Link>

                <button
                  onClick={handleLogout}
                  className="
                    w-full flex items-center gap-2
                    px-4 py-2
                    text-left
                    text-sm font-bold
                    hover:bg-[#ffd966]
                  "
                >
                  <LogOut size={14} />
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        )}
      </div>

    </div>
  </div>
</header>
  )
}

