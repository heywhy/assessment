import { createContext, FC, useContext, useEffect, useState } from 'react'
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
  const [user, setUser] = useState<string>()
  const signOut = () => setUser(undefined)

  return (
    <context.Provider value={{ user, setUser, signOut }}>
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
