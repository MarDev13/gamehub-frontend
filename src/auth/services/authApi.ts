import { apiFetch } from '../../api/apiClient'

export const loginRequest = async (
  email: string,
  password: string
) => {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })

}
export const registerRequest = async (data: {
  email: string
  password: string
  userName: string
  firstName: string
  lastName: string
}) => {
  return apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  })
}