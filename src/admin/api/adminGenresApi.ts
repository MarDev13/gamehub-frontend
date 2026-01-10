import { apiFetch } from "../../api/apiClient"

export const getGenres = (params?: { page?: number; limit?: number }) => {
  const query = new URLSearchParams()

  if (params?.page) query.append("page", String(params.page))
  if (params?.limit) query.append("limit", String(params.limit))

  return apiFetch(`/admin/genres?${query.toString()}`)
}

/* Crear género */
export const createGenre = (data: { name: string }) => {
  return apiFetch("/admin/genres", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

/* Actualizar género */
export const updateGenre = (id: string, data: { name: string }) => {
  return apiFetch(`/admin/genres/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
}

/* Eliminar género */
export const deleteGenre = (id: string) => {
  return apiFetch(`/admin/genres/${id}`, {
    method: "DELETE",
  })
}
