export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const TOKEN_KEY = '@evencomp-tk'
export const USER_KEY = '@evencomp-user'

export const login = (token: string, user: any) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
}

export const getUserToken = () => {
    const userStr = localStorage.getItem(USER_KEY)

    if (!userStr) return null
    return JSON.parse(userStr)
}