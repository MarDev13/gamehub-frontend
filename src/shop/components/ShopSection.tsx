import { GameCard } from "./GameCard"

type Props = {
  title: string
  games: any[]
}

export function ShopSection({ title, games }: Props) {
  if (games.length === 0) return null

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#3f351a]">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
