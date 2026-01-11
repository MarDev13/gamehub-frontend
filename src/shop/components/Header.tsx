import { Link } from "react-router-dom"
import { User, ShoppingCart } from "lucide-react"
import { useCart } from "@/cart/context/CartContext"

export default function ShopHeader() {
  const { toggleCart, items } = useCart()

  return (
    <header className="h-16 border-b border-[#d6b87a] bg-[#f1e5c4]">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/img/logo/cat-icon.png" className="h-8" />
          <span className="font-semibold tracking-wide">GameHub</span>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          
          {/* CART */}
          <button
            onClick={toggleCart}
            className="relative rounded-full bg-[#e6d39c] p-2 hover:bg-[#d1b06a] transition"
          >
            <ShoppingCart size={18} />

            {items.length > 0 && (
              <span
                className="
                  absolute -top-2 -right-2
                  flex h-5 min-w-[20px] items-center justify-center
                  rounded-full px-1
                  text-xs font-extrabold text-[#3f351a
                "
              >
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            )}
          </button>

          {/* USER */}
          <Link
            to="/login"
            className="rounded-full bg-[#e6d39c] p-2 hover:bg-[#d1b06a] transition"
          >
            <User size={18} />
          </Link>

        </div>
      </div>
    </header>
  )
}

