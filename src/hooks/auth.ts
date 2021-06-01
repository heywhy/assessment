import { context } from 'components/auth'
import { useContext } from 'react'

export const useAuth = () => useContext(context)
