import { useEffect, useState } from "react"
import { getShopGames } from "@/api/shopApi"
import { GameCard } from "./GameCard"
import { Button } from "@/components/ui/button"
import { Game } from "@/admin/types/games"

type Props = {
  activePlatform: string | null
}

export default function GameGrid({ activePlatform }: Props) {
  const [games, setGames] = useState<Game[]>([])
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setGames([])
    setPage(1)
    setHasMore(true)
    loadGames(1, true)
  }, [activePlatform])

  const loadGames = async (pageToLoad = page, reset = false) => {
    if (!hasMore) return
    setLoading(true)

    const data = await getShopGames(pageToLoad)
    let items: Game[] = data.items

    if (activePlatform) {
      items = items.filter(game =>
        game.platforms.some(p => p.name === activePlatform)
      )
    }

    setGames(prev => (reset ? items : [...prev, ...items]))
    setHasMore(data.hasMore)
    setPage(p => p + 1)
    setLoading(false)
  }
const visibleGames = games.filter(game => game.onSale !== true)
  return (
    <section className="space-y-6">

  {visibleGames.length === 0 && !loading && (
    <div
      className="
        text-center
        bg-[#fff6dc]
        border-2 border-black
        p-4
        font-pixel
        text-sm
        text-[#3f351a]
      "
    >
      No se han encontrado juegos de esta plataforma en las primeras páginas.
      <br />
      Pulsa <strong>Cargar más</strong> para seguir buscando.
    </div>
  )}

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
    {visibleGames.map(game => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>

  <div className="flex justify-center">
    {hasMore && (
      <Button onClick={() => loadGames()} disabled={loading}>
        {loading ? "Cargando..." : "Cargar más"}
      </Button>
    )}
  </div>

</section>
  )
}
