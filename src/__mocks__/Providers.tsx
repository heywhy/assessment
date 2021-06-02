import { context } from 'components/auth'
import React, { FC, useState } from 'react'

type Props = {
  auth?: string
}

const AuthProvider: FC<Props> = ({ children, auth }) => {
  const [user, setUser] = useState<string | undefined>(auth)

  return (
    <context.Provider
      value={{ user, setUser, signOut: () => setUser(undefined) }}
    >
      {children}
    </context.Provider>
  )
}

type MockProvidersProps = {
  isLoggedIn?: boolean
}

export const MockProviders: FC<MockProvidersProps> = ({
  children,
  isLoggedIn,
}) => {
  return (
    <AuthProvider auth={isLoggedIn ? 'user@test.com' : undefined}>
      {children}
    </AuthProvider>
  )
}
