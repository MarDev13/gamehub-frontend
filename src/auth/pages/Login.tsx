import { useAuth } from "../hooks/useAuth"
import { loginRequest } from "../services/authApi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function LoginPage() {
    const { login, role } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const data = await loginRequest(email, password)
            login(data.access_token)
            setTimeout(() => {
                if (role === 'ADMIN') {
                    navigate('/admin')
                } else {
                    navigate('/account')
                }
            }, 0)
        } catch (error) {
            alert('Credenciales incorrectas')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <input value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    )
}
export default LoginPage
