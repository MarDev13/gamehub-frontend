const TOKEN_KEY = 'snap_token'


export const saveToken = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token)
}
export const getToken = ()  => {
    return localStorage.getItem(TOKEN_KEY)
}
export const removeToken = (): void => {
    localStorage.removeItem(TOKEN_KEY)
}