
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
