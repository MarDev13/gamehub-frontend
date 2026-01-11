import HeroCarousel from "../components/HeroCarousel"
import PlatformFilter from "../components/PlatformFilter"
import GameGrid from "../components/GameGrid"
import DiscountBlock from "../components/DiscountBlock"
import { useState } from "react"

export default function ShopHomePage() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null)
  return (
    <>

      <div className="space-y-16">
        <HeroCarousel />

        <h1 className="
  font-pixel
  text-3xl sm:text-4xl
  font-extrabold
  text-[#f5c84b]
  text-center
  drop-shadow-[0_2px_0_#000]
">
          Los clásicos nunca mueren
        </h1>


        <PlatformFilter activePlatform={activePlatform}
          onChange={setActivePlatform} />

        <GameGrid activePlatform={activePlatform} />

        <DiscountBlock />
      </div>
    </>
  )
}





