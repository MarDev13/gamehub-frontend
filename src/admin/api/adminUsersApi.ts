import { apiFetch } from "@/api/apiClient"

export const getUsersCount = async () => {
  return apiFetch("/admin/users/metrics/count", {
    method: "GET",
  })
}
export const getUsers = async (params?: {
  page?: number
  limit?: number
}) => {
  const query = new URLSearchParams()

  if (params?.page) query.append("page", String(params.page))
  if (params?.limit) query.append("limit", String(params.limit))

  return apiFetch(`/admin/users?${query.toString()}`)
}
export const getUserOrders = async (userId: string) => {
  return apiFetch(`/admin/users/${userId}/orders`, {
    method: "GET",
  })
}
export const updateUserRole = (id: string, role: string) => {
  return apiFetch(`/admin/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ role }),
  })
}