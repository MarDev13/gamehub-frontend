import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getShopGameById } from "@/api/shopApi"
import { Game } from "@/admin/types/games"
import { useCart } from "@/cart/context/CartContext"

export default function GameDetailPage() {
    const { addToCart } = useCart()

  const { id } = useParams()
  const [game, setGame] = useState<Game | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    getShopGameById(id)
      .then(setGame)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando juego...</p>
  if (!game) return <p>Juego no encontrado</p>

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT: IMAGE */}
        <div>
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* RIGHT: INFO */}
        <div className="space-y-5">
          
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-[#3f351a]">
            {game.title}
          </h1>

          {/* PRICE */}
          {game.onSale ? (
            <p className="text-2xl">
              <span className="line-through text-muted-foreground mr-3">
                {game.price} €
              </span>
              <span className="text-red-600 font-bold">
                {game.salePrice} €
              </span>
            </p>
          ) : (
            <p className="text-2xl font-bold text-[#3f351a]">
              {game.price} €
            </p>
          )}
          <button
  onClick={() => addToCart(game)}
  className="
    mt-4
    w-full
    rounded-lg
    bg-[#d1b06a]
    py-3
    text-lg
    font-semibold
    text-[#3f351a]
    hover:bg-[#b89954]
    transition
  "
>
  Añadir al carrito
</button>

          {/* DESCRIPTION */}
          {game.description && (
            <p className="text-[#7a6a44] leading-relaxed">
              {game.description}
            </p>
          )}

          {/* PLATFORMS */}
          {game.platforms.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#3f351a]">
                Plataformas disponibles
              </h3>

              <div className="flex flex-wrap gap-2">
                {game.platforms.map(p => (
                  <span
                    key={p.id}
                    className="rounded bg-[#f3e1b3] px-3 py-1 text-sm font-medium text-[#5a4a22]"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAGS */}
          {game.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#3f351a]">
                Etiquetas
              </h3>

              <div className="flex flex-wrap gap-2">
                {game.tags.map(t => (
                  <span
                    key={t.id}
                    className="rounded bg-[#e8d7a3] px-3 py-1 text-sm font-medium text-[#6b5a2a]"
                  >
                    #{t.name}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

