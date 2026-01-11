import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const mockGames = [
  {
    id: 1,
    title: "Polda",
    image: "/img/games/polda.png",
  },
  {
    id: 2,
    title: "Lollypop",
    image: "/img/games/lollypop.png",
  },
  {
    id: 3,
    title: "Pizza Pop!",
    image: "/img/games/pizzapop.png",
  },
]

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 8000,
      stopOnInteraction: false,
    })
  )

  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          {mockGames.map((game) => (
            <CarouselItem key={game.id}>
              <div className="relative h-[240px] sm:h-[300px] md:h-[420px] overflow-hidden rounded">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {game.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Flechas */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
}
