import { createContext, useEffect, useState, ReactNode } from "react"
import { getToken, saveToken, removeToken } from "../services/authStorage"
import { jwtDecode } from "jwt-decode"

/* Props del provider */
type AuthProviderProps = {
  children: ReactNode
}

/* Payload del JWT */
type JwtPayload = {
  email: string
  role: "ADMIN" | "USER"
}

/* Lo que expone el contexto */
export type AuthContextType = {
  token: string | null
  role: "ADMIN" | "USER" | null
  email: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

/* Contexto */
export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [role, setRole] = useState<"ADMIN" | "USER" | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  /* Al cargar la app: recuperar sesión */
  useEffect(() => {
    const storedToken = getToken()

    if (storedToken) {
      const decoded = jwtDecode<JwtPayload>(storedToken)

      setToken(storedToken)
      setRole(decoded.role)
      setEmail(decoded.email)
      setIsAuthenticated(true)
    }
  }, [])

  /* Login */
  const login = (newToken: string) => {
    const decoded = jwtDecode<JwtPayload>(newToken)

    saveToken(newToken)
    setToken(newToken)
    setRole(decoded.role)
    setEmail(decoded.email)
    setIsAuthenticated(true)
  }

  /* Logout */
  const logout = () => {
    removeToken()
    setToken(null)
    setRole(null)
    setEmail(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        email,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
