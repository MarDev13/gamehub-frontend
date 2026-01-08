import { useEffect, useRef } from "react"

type Coin = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  el: HTMLImageElement
  onPlatform: boolean
}

export function CoinRain({
  cardRef,
}: {
  cardRef: React.RefObject<HTMLDivElement>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const coins = useRef<Coin[]>([])

  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return

    const container = containerRef.current
    const card = cardRef.current

    const gravity = 0.0015

    const createCoin = () => {
      const img = document.createElement("img")
      img.src = "/img/moneda-retro.png"
      img.className = "absolute pointer-events-none opacity-30"
      container.appendChild(img)

      const size = 22 + Math.random() * 20

      const coin: Coin = {
        x: Math.random() * window.innerWidth,
        y: -100 - Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: 0,
        size,
        el: img,
        onPlatform: false,
      }

      img.style.width = `${size}px`
      coins.current.push(coin)
    }

    for (let i = 0; i < 8; i++) createCoin()

    const loop = () => {
      const cardRect = card.getBoundingClientRect()

      coins.current.forEach((coin) => {
        // gravedad siempre que NO esté en la card
        if (!coin.onPlatform) {
          coin.vy += gravity
        }

        coin.y += coin.vy
        coin.x += coin.vx

        const rect = coin.el.getBoundingClientRect()

        const isOverCard =
          rect.bottom >= cardRect.top &&
          rect.top < cardRect.top &&
          rect.right > cardRect.left &&
          rect.left < cardRect.right

        // ==========================
        // ATERRIZA EN LA CARD
        // ==========================
        if (isOverCard && coin.vy >= 0) {
          coin.onPlatform = true

          // se coloca justo encima
          coin.y = cardRect.top - coin.size

          // se desliza, no cae
          coin.vy = 0

          // empuje lateral coherente
          const cardCenter = cardRect.left + cardRect.width / 2
          const coinCenter = rect.left + rect.width / 2
          coin.vx = coinCenter < cardCenter ? -1.2 : 1.2
        }

        // ==========================
        // SALE DE LA CARD → VUELVE A CAER
        // ==========================
        if (
          coin.onPlatform &&
          (rect.right < cardRect.left ||
            rect.left > cardRect.right)
        ) {
          coin.onPlatform = false
          coin.vy = 0.5 // empieza a caer suavemente
        }

        // ==========================
        // RESET
        // ==========================
        if (coin.y > window.innerHeight + 120) {
          coin.y = -100
          coin.x = Math.random() * window.innerWidth
          coin.vx = (Math.random() - 0.5) * 0.6
          coin.vy = 0
          coin.onPlatform = false
        }

        coin.el.style.transform = `translate(${coin.x}px, ${coin.y}px)`
      })

      requestAnimationFrame(loop)
    }

    loop()

    return () => {
      coins.current.forEach((c) => c.el.remove())
      coins.current = []
    }
  }, [cardRef])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  )
}
