import { apiFetch } from "@/api/apiClient"
export const getGamesCount = async () => {
  return apiFetch("/admin/games/metrics/count", {
    method: "GET",
  })
}
type CreateGamePayload = {
  title: string
  price: number
  stock: number
  discountPct: number | null
  genreName: string
  tagNames: string[]
  platformNames: string[]
}

export const createGame = (data: any) => {
  return apiFetch("/admin/games", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export const getGames = (params: { page?: number; limit?: number }) => {
  const query = new URLSearchParams()

  if (params.page) query.append("page", String(params.page))
  if (params.limit) query.append("limit", String(params.limit))

  return apiFetch(`/admin/games?${query.toString()}`)
}

export const getGameById = (id: string) => {
  return apiFetch(`/admin/games/${id}`)
}

export const updateGame = (id: string, data: any) => {
  return apiFetch(`/admin/games/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
}

export const togglePublishGame = (id: string) => {
  return apiFetch(`/admin/games/${id}/publish`, {
    method: "POST",
  })
}
export const importRawgGames = () => {
  return apiFetch("/admin/games/import-rawg", {
    method: "POST",
  });
};
