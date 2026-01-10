import { apiFetch } from "@/api/apiClient"


export const getPlatforms = (params?: {
  page?: number
  limit?: number
}) => {
  const query = new URLSearchParams()

  if (params?.page) query.append("page", String(params.page))
  if (params?.limit) query.append("limit", String(params.limit))

  return apiFetch(`/admin/platforms?${query.toString()}`)
}


export const getPlatformById = (id: string) => {
  return apiFetch(`/admin/platforms/${id}`)
}


export const createPlatform = (data: { name: string }) => {
  return apiFetch("/admin/platforms", {
    method: "POST",
    body: JSON.stringify(data),
  })
}


export const updatePlatform = (
  id: string,
  data: { name: string }
) => {
  return apiFetch(`/admin/platforms/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
}


export const deletePlatform = (id: string) => {
  return apiFetch(`/admin/platforms/${id}`, {
    method: "DELETE",
  })
}

