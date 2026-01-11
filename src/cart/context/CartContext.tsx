import { createContext, useContext, useEffect, useState } from "react"
import { Game } from "@/admin/types/games"

export type CartItem = Game & {
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  toggleCart: () => void
  closeCart: () => void
  addToCart: (game: Game) => void
  removeFromCart: (gameId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
  try {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})

  const [isOpen, setIsOpen] = useState(false)

  /* 🔁 REHIDRATAR DESDE LOCALSTORAGE */
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setItems(JSON.parse(stored))
  }, [])

  /* 💾 PERSISTIR */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const toggleCart = () => setIsOpen(prev => !prev)
  const closeCart = () => setIsOpen(false)

  const addToCart = (game: Game) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === game.id)

      if (existing) {
        return prev.map(i =>
          i.id === game.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }

      return [...prev, { ...game, quantity: 1 }]
    })
  }

  const removeFromCart = (gameId: string) => {
    setItems(prev => prev.filter(i => i.id !== gameId))
  }

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        toggleCart,
        closeCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider")
  return ctx
}




