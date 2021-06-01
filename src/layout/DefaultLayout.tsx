import React, { FC } from 'react'
import { useAuth } from 'hooks/auth'
import styles from './DefaultLayout.module.css'

const AppBar = () => {
  const auth = useAuth()

  return (
    <div className={styles['DefaultLayout__NavBar']}>
      <div className="max-w-3xl mx-auto h-full flex justify-between items-center">
        <h1 className="uppercase font-semibold text-lg text-gray-700">
          shapes
        </h1>

        <button className="capitalize text-red-600" onClick={auth.signOut}>
          logout
        </button>
      </div>
    </div>
  )
}

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div className={styles['DefaultLayout']}>
      <AppBar />

      <div className={styles['DefaultLayout__PageContainer']}>{children}</div>
    </div>
  )
}
