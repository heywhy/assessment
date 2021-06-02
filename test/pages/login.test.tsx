import React from 'react'
import { render, screen } from '../test-utils'
import LoginPage from 'pages/login'
import { fireEvent } from '@testing-library/dom'
import router from 'next/router'

jest.mock('next/router')

describe('LoginPage', () => {
  it('should render the form', () => {
    render(<LoginPage />)

    const form = screen.getByTestId('form')
    const button = screen.getByText(/sign in/i)

    expect(form).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should show error on incorrect credentials', () => {
    render(<LoginPage />)

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    fireEvent.change(emailInput, {
      target: { value: 'unknown@mail.com'}
    })
    fireEvent.change(passwordInput, {
      target: { value: 'password'}
    })
    fireEvent.click(screen.getByTestId('submit-btn'))

    expect(screen.getByText('These credentials do not exists in our database.')).toBeInTheDocument()
  })

  it('should redirect to homepage for successful login', () => {
    render(<LoginPage />)

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    fireEvent.change(emailInput, {
      target: { value: 'user@test.com'}
    })
    fireEvent.change(passwordInput, {
      target: { value: 'password'}
    })
    fireEvent.click(screen.getByTestId('submit-btn'))

    expect(router.replace).toBeCalled()
  })
})
