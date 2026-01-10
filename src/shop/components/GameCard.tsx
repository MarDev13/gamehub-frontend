import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getGamePrice } from "../utils/getGamePrice"

export function GameCard({ game }: { game: any }) {
  return (
    <Card
      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-[#fff6dc]
        border border-[#e2c98b]
        hover:shadow-md
        transition-all duration-200
      "
    >
      {/* PRICE BADGE */}
      <span
        className="
          absolute top-3 right-3
          rounded-xl
          bg-[#f7b6b6]
          px-3 py-1
          text-sm font-bold
          text-[#8f2d2d]
          shadow-sm
          z-10
        "
      >
        {getGamePrice(game)} €
      </span>

      {/* DISCOUNT BADGE */}
      {game.onSale && game.discountPct && (
        <span
          className="
            absolute top-3 left-3
            rounded-xl
            bg-[#f2a65a]
            px-3 py-1
            text-xs font-bold
            text-[#5a2d00]
            shadow-sm
            z-10
          "
        >
          -{game.discountPct}%
        </span>
      )}

      {/* IMAGE */}
      <img
        src={game.imageUrl || "/img/placeholder-game.png"}
        alt={game.title}
        className="h-44 w-full object-cover"
      />

      <CardHeader className="pb-1">
        <CardTitle className="text-sm font-semibold line-clamp-2 text-[#3f351a]">
          {game.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-xs text-[#7a6a44]">
        {/* DESCRIPTION */}
        {game.description && (
          <p className="line-clamp-2">
            {game.description}
          </p>
        )}

        {/* PLATFORMS */}
        {game.platforms?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {game.platforms.map((platform: any) => (
              <span
                key={platform.id}
                className="
                  rounded-md
                  bg-[#efe2b7]
                  px-2 py-0.5
                  text-[10px]
                  font-medium
                  text-[#5a4a22]
                "
              >
                {platform.name}
              </span>
            ))}
          </div>
        )}

        {/* TAGS */}
        {game.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {game.tags.map((tag: any) => (
              <span
                key={tag.id}
                className="
                  rounded-md
                  bg-[#e8d39e]
                  px-2 py-0.5
                  text-[10px]
                  font-medium
                  text-[#6b5a2a]
                "
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <button
          className="
            w-full
            rounded-lg
            bg-[#d1b06a]
            py-2
            text-sm
            font-medium
            text-[#3f351a]
            hover:bg-[#b89954]
            transition-colors
          "
        >
          Ver detalles
        </button>
      </CardFooter>
    </Card>
  )
}
