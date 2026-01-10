import { apiFetch } from "../../api/apiClient"

export const getTags = (params: any) => {
  const query = new URLSearchParams(params).toString()
  return apiFetch(`/admin/tags?${query}`)
}

export const getTagById = (id: string) => {
  return apiFetch(`/admin/tags/${id}`)
}

export const createTag = (data: { name: string }) => {
  return apiFetch("/admin/tags", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export const updateTag = (id: string, data: { name: string }) => {
  return apiFetch(`/admin/tags/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
}

export const deleteTag = (id: string) => {
  return apiFetch(`/admin/tags/${id}`, {
    method: "DELETE",
  })
}
