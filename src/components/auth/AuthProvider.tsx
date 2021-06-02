import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import router from 'next/router'

type AuthContext = {
  user?: string
  signOut: () => void
  setUser: (user: string) => void
}

export const context = createContext<AuthContext>({
  setUser() {},
  signOut() {},
})

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<string | undefined>(() => {
    if (!global.window) return
    return localStorage.getItem('auth:info') || undefined
  })

  const signOut = () => {
    setUser(undefined)
    localStorage.removeItem('auth:info')
  }

  const onSetUser = useCallback((user: string) => {
    localStorage.setItem('auth:info', user)
    setUser(user)
  }, [])

  return (
    <context.Provider value={{ user, setUser: onSetUser, signOut }}>
      {children}
    </context.Provider>
  )
}

export const withAuth = (Component: FC) => {
  return () => {
    const auth = useContext(context)

    useEffect(() => {
      if (!auth?.user) {
        router.replace('/login')
      }
    }, [auth?.user])

    return <Component />
  }
}
