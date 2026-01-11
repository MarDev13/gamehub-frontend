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

  if (loading) {
    return (
      <div className="text-center font-pixel text-[#bfae78]">
        Cargando juego...
      </div>
    )
  }

  if (!game) {
    return (
      <div className="text-center font-pixel text-[#c1121f]">
        Juego no encontrado
      </div>
    )
  }

  return (
    <div
      className="
        max-w-6xl mx-auto
        bg-[#fff6dc]
        border-[4px] border-black
        rounded-md
        p-6
        shadow-[0_8px_0_#000]
        space-y-10
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE / SCREEN */}
        <div
          className="
            bg-black
            border-4 border-black
            rounded
            p-2
            shadow-inner
            flex items-center justify-center
          "
        >
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full object-contain pixelated"
          />
        </div>

        {/* INFO */}
        <div className="space-y-5">
          <h1
            className="
              font-pixel
              text-2xl
              text-[#201800]
              drop-shadow-[0_2px_0_#000]
            "
          >
            {game.title}
          </h1>

          {game.onSale ? (
            <div className="text-xl">
              <span className="line-through text-[#7a6a44] mr-3">
                {game.price} €
              </span>
              <span className="text-red-600 font-bold">
                {game.salePrice} €
              </span>
            </div>
          ) : (
            <div className="text-xl font-bold text-[#3f351a]">
              {game.price} €
            </div>
          )}

          {/* CTA */}
          <div className="pt-2">
            <button
              onClick={() => addToCart(game)}
              className="
                w-full
                border-2 border-black
                bg-[#ffd966]
                py-2
                font-pixel
                text-xs
                text-[#3f351a]
                shadow-[0_3px_0_#000]
                active:translate-y-[2px]
                active:shadow-none
                hover:bg-[#ffcf4a]
                transition
              "
            >
              Añadir al carrito
            </button>
          </div>

          {/* DESCRIPTION */}
          {game.description && (
            <div
              className="
                bg-[#efe8d2]
                border border-black
                rounded
                p-4
                text-sm
                text-[#3f351a]
                leading-relaxed
              "
            >
              {game.description}
            </div>
          )}

          {/* PLATFORMS */}
          {game.platforms.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-pixel text-sm text-[#3f351a]">
                Plataformas
              </h3>

              <div className="flex flex-wrap gap-2">
                {game.platforms.map(p => (
                  <span
                    key={p.id}
                    className="
                      bg-[#f3e1b3]
                      border border-black
                      px-3 py-1
                      text-xs
                      font-bold
                      text-[#3f351a]
                    "
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
              <h3 className="font-pixel text-sm text-[#3f351a]">
                Etiquetas
              </h3>

              <div className="flex flex-wrap gap-2">
                {game.tags.map(t => (
                  <span
                    key={t.id}
                    className="
                      bg-[#d1b06a]
                      border border-black
                      px-3 py-1
                      text-xs
                      font-bold
                      text-[#3f351a]
                    "
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

