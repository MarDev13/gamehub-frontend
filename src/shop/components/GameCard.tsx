import { getGamePrice } from "../utils/getGamePrice"
import { useNavigate } from "react-router-dom"

export function GameCard({ game }: { game: any }) {
  const navigate = useNavigate()
  const goToDetail = () => {
    navigate(`/shop/games/${game.id}`)
  }
  return (
    <div className="group relative overflow-hidden rounded">
      {/* PRICE BADGE */}
      <span
        className="
          absolute top-3 right-3 z-10
          rounded
          bg-[#f7b6b6]
          px-3 py-1
          text-sm font-bold
          text-[#8f2d2d]
          shadow-sm
        "
      >
        {getGamePrice(game)} €
      </span>

      {/* DISCOUNT BADGE */}
      {game.onSale && game.discountPct && (
        <span
          className="
            absolute top-3 left-3 z-10
            rounded
            bg-[#f2a65a]
            px-3 py-1
            text-xs font-bold
            text-[#5a2d00]
            shadow-sm
          "
        >
          -{game.discountPct}%
        </span>
      )}

      {/* IMAGE */}
      <img
        src={game.imageUrl || "/img/placeholder-game.png"}
        alt={game.title}
        className="
          w-full
          aspect-[3/4]
          object-cover
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />

      {/* TITLE (visible by default, hidden on hover) */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-black/60
          px-3 py-2
          text-sm font-medium
          text-white
          transition-opacity
          duration-300
          group-hover:opacity-0
        "
      >
        {game.title}
      </div>

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          flex items-center justify-center
        "
      >
        <button
          className="
            rounded
            bg-[#f2a65a]
            px-6 py-3
            text-sm
            font-semibold
            text-[#5a2d00]
            shadow-md
            hover:bg-[#e0952c]
            transition
          "
          onClick={goToDetail}
        >
          Ver más detalles
        </button>
      </div>
    </div>
  )
}


