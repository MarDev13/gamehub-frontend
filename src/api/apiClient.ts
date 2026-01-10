import { getToken } from "../auth/services/authStorage"

export const API_BASE_URL = "http://localhost:3000"

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = getToken()

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(errorData?.message || "Error en la petición")
  }

  return response.json()
}
