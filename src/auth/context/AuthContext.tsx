import { createContext, useEffect, useState, ReactNode } from "react"
import { getToken, saveToken, removeToken } from "../services/authStorage"
import { jwtDecode } from "jwt-decode"

type AuthProviderProps = {
  children: ReactNode
}

type JwtPayload = {
  email: string
  role: "ADMIN" | "USER"
}


export type AuthContextType = {
  token: string | null
  role: "ADMIN" | "USER" | null
  email: string | null
  isAuthenticated: boolean
  isLoading?: boolean
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [role, setRole] = useState<"ADMIN" | "USER" | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const storedToken = getToken()

    if (storedToken) {
      const decoded = jwtDecode<JwtPayload>(storedToken)

      setToken(storedToken)
      setRole(decoded.role)
      setEmail(decoded.email)
      setIsAuthenticated(true)
    }
     setIsLoading(false)
  }, [])

  const login = (newToken: string) => {
    const decoded = jwtDecode<JwtPayload>(newToken)

    saveToken(newToken)
    setToken(newToken)
    setRole(decoded.role)
    setEmail(decoded.email)
    setIsAuthenticated(true)
  }

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
       isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
