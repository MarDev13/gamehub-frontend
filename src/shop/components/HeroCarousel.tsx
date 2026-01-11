import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )

  return (
    <section className="w-full border-b-[4px] border-black bg-[#0f0f0f]">
      <Carousel
        className="w-full"
        plugins={[autoplay.current]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem>
           
            <div className="py-10 px-4 flex justify-center">
            
              <div
                className="
                  w-full max-w-6xl
                  bg-[#1b1b1b]
                  border-[4px] border-black
                  shadow-[0_8px_0_#000]
                  rounded-md
                  p-3
                "
              >
              
                <div
                  className="
                    bg-black
                    border-2 border-black
                    overflow-hidden
                  "
                >
                  <img
                    src="/img/games/personajes-jugando.png"
                    alt="Personajes retro jugando"
                    className="
                      w-full
                      max-h-[420px]
                      object-cover
                      pixelated
                      select-none
                      mx-auto
                    "
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}




