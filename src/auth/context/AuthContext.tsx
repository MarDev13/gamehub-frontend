import { createContext, useEffect, useState } from "react";
import { getToken, saveToken, removeToken } from "../services/authStorage"
import { ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
type AuthProviderProps = {
    children: ReactNode;
};
export type AuthContextType = {
    token: string | null
    login: (token: string) => void
    logout: () => void
    isAuthenticated: boolean
    role: 'ADMIN' | 'USER' | null

};


export const AuthContext = createContext<AuthContextType | null>(null)
export function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<string | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const storedToken = getToken()
        if (storedToken) {
            const decoded = jwtDecode<{ role: 'ADMIN' | 'USER' }>(storedToken);
            setRole(decoded.role);
            setToken(storedToken)
            setIsAuthenticated(true)
        }
    }, [])

    const login = (newToken: string) => {
        const decoded = jwtDecode<{ role: 'ADMIN' | 'USER' }>(newToken);
        saveToken(newToken)
        setToken(newToken)
        setRole(decoded.role);
        setIsAuthenticated(true)
    }

    const logout = () => {
        removeToken()
        setToken(null)
        setIsAuthenticated(false)
    }
    const [role, setRole] = useState<'ADMIN' | 'USER' | null>(null);

    return (
        <AuthContext.Provider
            value={{
                role,
                token,
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}