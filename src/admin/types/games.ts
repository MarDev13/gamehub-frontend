export type GameTag = {
  id: string
  name: string
}

export type GameGenre = {
  id: string
  name: string
}

export type Game = {
   id: string
  title: string
  description?: string
  imageUrl?: string
  price: number
  salePrice?: number
  discountPct?: number
  onSale: boolean
  platforms: { id: string; name: string }[]
  tags: { id: string; name: string }[]
}

