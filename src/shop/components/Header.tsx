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
    navigate("/shop") // 👈 importante
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <header className="h-16 border-b border-[#d6b87a] bg-[#f1e5c4]">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/shop" className="flex items-center gap-2">
          <img src="/img/logo/cat-icon.png" className="h-8" />
          <span className="font-semibold tracking-wide">GameHub</span>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 relative">

          {/* 🛒 CART */}
          <button
            onClick={toggleCart}
            className="relative rounded-full bg-[#e6d39c] p-2 hover:bg-[#d1b06a] transition"
          >
            <ShoppingCart size={18} />

            {totalItems > 0 && (
              <span
                className="
                  absolute -top-2 -right-2
                  flex h-5 min-w-[20px] items-center justify-center
                  rounded-full bg-[#3f351a]
                  px-1 text-xs font-bold text-white
                "
              >
                {totalItems}
              </span>
            )}
          </button>

          {/* 👤 USER */}
          <div className="relative">
            <button
              onClick={() => setOpen(o => !o)}
              className="rounded-full bg-[#e6d39c] p-2 hover:bg-[#d1b06a] transition"
            >
              <User size={18} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg border z-50">
                {!isAuthenticated ? (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-[#f3e1b3]"
                  >
                    Iniciar sesión
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/account"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 hover:bg-[#f3e1b3]"
                    >
                      Mi perfil
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#f3e1b3]"
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

