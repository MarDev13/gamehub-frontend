import HeroCarousel from "../components/HeroCarousel"
import PlatformFilter from "../components/PlatformFilter"
import GameGrid from "../components/GameGrid"
import DiscountBlock from "../components/DiscountBlock"
import { useState } from "react"

export default function ShopHomePage() {
   const [activePlatform, setActivePlatform] = useState<string | null>(null)
  return (
    <div className="space-y-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3f351a] text-center">
  Revive los clásicos que marcaron una época
</h1>
      {/* HERO */}
      <HeroCarousel />

      {/* PLATFORMS */}
      <PlatformFilter activePlatform={activePlatform}
        onChange={setActivePlatform} />

      {/* GAMES */}
      <GameGrid activePlatform={activePlatform} />

      {/* DISCOUNTS */}
      <DiscountBlock  />
    </div>
  )
}





