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
  price: number
  stock: number
  isPublished: boolean
  createdAt: string

  genre: GameGenre | null
  tags: GameTag[]
}

