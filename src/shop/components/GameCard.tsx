import { getGamePrice } from "../utils/getGamePrice"
import { useNavigate } from "react-router-dom"
import { Gamepad2 } from "lucide-react"
import { useClickSound } from "@/shared/hooks/useClickSound"

export function GameCard({ game }: { game: any }) {
  const navigate = useNavigate()
  const playClick = useClickSound()

  const goToDetail = () => {
    playClick()
    navigate(`/shop/games/${game.id}`)
  }

  return (
    <div
      onClick={goToDetail}
      className="
        relative
        bg-[#e9e4d4]
        border-[3px] border-black
        rounded-md
        overflow-hidden
        cursor-pointer
        transition-all duration-150
        hover:-translate-y-[2px]
        hover:shadow-[0_6px_0_#000]
        active:translate-y-[1px]
        active:shadow-[0_2px_0_#000]
      "
    >
    
      <span
        className="
          absolute top-2 right-2 z-10
          bg-[#ffd966]
          border-2 border-black
          px-2 py-0.5
          text-[11px] font-bold
        "
      >
        {getGamePrice(game)} €
      </span>

    
      {game.onSale && game.discountPct && (
        <span
          className="
            absolute top-2 left-2 z-10
            bg-[#c1121f]
            border-2 border-black
            px-2 py-0.5
            text-[11px] font-bold text-white
          "
        >
          -{game.discountPct}%
        </span>
      )}

    
      <img
        src={game.imageUrl || "/img/placeholder-game.png"}
        alt={game.title}
        className="
          w-full aspect-[3/4]
          object-cover
          border-b-2 border-black
          select-none
        "
        draggable={false}
      />

     
      <div className="bg-[#f1ecd9] border-b-2 border-black px-3 py-2">
        <h3 className="text-xs font-bold tracking-wide truncate text-[#1f1f1f]">
          {game.title}
        </h3>
      </div>

     
      <div className="p-3">
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToDetail()
          }}
          className="
            w-full
            border-2 border-black
            bg-[#ffd966]
            text-xs font-bold
            py-1.5
            tracking-wide
            hover:bg-[#ffcf4a]
            active:bg-[#e6b800]
            transition
            flex items-center justify-center gap-2
          "
        >
          <Gamepad2 className="w-4 h-4" />
          Ver detalles
        </button>
      </div>
    </div>
  )
}




