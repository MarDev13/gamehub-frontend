import { apiFetch } from "@/api/apiClient"

export const getMe = () => {
  return apiFetch("/auth/me")
}
export const updateMe = (data: {
  email: string
  firstName: string
  lastName: string
}) => {
  return apiFetch("/auth/me", {
    method: "PATCH",
    body: JSON.stringify(data),
  })
}