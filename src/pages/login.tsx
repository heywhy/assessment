import React, { FormEvent, useCallback, useState } from 'react'
import { UIButton } from 'components/Button'
import { UIInput } from 'components/forms'
import router from 'next/router'
import { useAuth } from 'hooks/auth'

const testEmail = 'user@test.com'

const Login = () => {
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>()

  const onSubmit = useCallback(
    (ev: FormEvent) => {
      ev.preventDefault()
      if (!email) return setErrorMessage('Email is required.')
      if (email === testEmail && password === 'password') {
        auth.setUser(testEmail)
        return router.replace('/')
      }
      setErrorMessage('These credentials do not exists in our database.')
    },
    [email, password]
  )

  return (
    <div className="w-screen h-screen">
      <div className="mx-auto px-2 max-w-sm absolute inset-0 flex flex-col justify-center items-center">
        <form
          className="bg-white p-4 shadow min-w-full rounded"
          onSubmit={onSubmit}
        >
          <UIInput
            name="email"
            label="Email"
            type="email"
            errorMessage={errorMessage}
            onChange={setEmail}
          />

          <UIInput
            className="mt-4"
            name="password"
            label="Password"
            type="password"
            onChange={setPassword}
          />

          <div className="mt-6">
            <UIButton
              type="submit"
              className="w-full uppercase"
              label="sign in"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
