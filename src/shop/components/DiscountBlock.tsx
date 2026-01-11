import { useEffect, useState } from "react"
import { getShopGames } from "@/api/shopApi"
import { GameCard } from "./GameCard"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/auth/hooks/useAuth"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Game } from "@/admin/types/games"

export default function DiscountBlock() {
  const { isAuthenticated, isLoading } = useAuth()
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(false)

  // ✅ SIEMPRE se ejecuta (nunca condicional)
  useEffect(() => {
    if (!isAuthenticated) {
      setGames([])
      return
    }

    const loadDiscountedGames = async () => {
      setLoading(true)

      try {
        const data = await getShopGames(1, 50)
        const discounted = data.items.filter(
          (game: Game) => game.onSale === true
        )
        setGames(discounted)
      } finally {
        setLoading(false)
      }
    }

    loadDiscountedGames()
  }, [isAuthenticated])

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <section className="space-y-4 rounded  bg-[#f3e1b3] p-6 text-center">
        <h3 className="text-xl font-bold text-[#3f351a]">
          Descuentos exclusivos
        </h3>

        <p className="text-sm text-[#7a6a44]">
          Inicia sesión para acceder a ofertas solo para usuarios registrados
        </p>

        <Carousel className="mx-auto max-w-5xl opacity-40">
          <CarouselContent>
            {[...Array(4)].map((_, i) => (
              <CarouselItem key={i} className="basis-1/2 sm:basis-1/4">
                <div className="h-48 rounded bg-[#e7d6a3]" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Button asChild className="mt-4">
          <a href="/login">Iniciar sesión</a>
        </Button>
      </section>
    )
  }

  if (loading) {
    return (
      <section className="space-y-2 text-center">
        <p>Cargando ofertas...</p>
      </section>
    )
  }

  if (games.length === 0) {
    return (
      <section className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-[#3f351a]">
          Ofertas exclusivas
        </h3>
        <p className="text-sm text-muted-foreground">
          Ahora mismo no hay juegos en descuento
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-[#3f351a]">
        Ofertas exclusivas para ti
      </h3>

      <Carousel className="mx-auto max-w-6xl">
        <CarouselContent>
          {games.map(game => (
            <CarouselItem
              key={game.id}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
            >
              <GameCard game={game} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}



