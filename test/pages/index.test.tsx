import React from 'react'
import { render, screen } from '../test-utils'
import HomePage from 'pages/index'
import router from 'next/router'
import { fireEvent } from '@testing-library/dom'

jest.mock('next/router')

describe('HomePage', () => {
  afterEach(() => jest.clearAllMocks())

  it('should redirect to homepage', () => {
    render(<HomePage />)

    expect(router.replace).toBeCalledWith('/login')
  })

  it('should show homepage', () => {
    render(<HomePage />, { isLoggedIn: true })

    expect(screen.getByText(/logout/i)).toBeInTheDocument()
    expect(router.replace).not.toBeCalled()
  })

  it('should show colors, shapes and elements', () => {
    render(<HomePage />, { isLoggedIn: true })

    expect(screen.getAllByTestId('shape-btn')).toHaveLength(5)
    expect(screen.getAllByTestId('color-btn')).toHaveLength(5)
    expect(screen.getByTestId('items-box')).toBeInTheDocument()
    expect(screen.getByTestId('items-box').childNodes).toHaveLength(5)
  })

  it('should react to filters', () => {
    render(<HomePage />, { isLoggedIn: true })

    const ovalBtn = screen.getByText(/oval/)

    fireEvent.click(ovalBtn)

    expect(ovalBtn.classList).not.toContain('border-blue-300')
    expect(screen.getByTestId('items-box').childNodes).toHaveLength(4)
    expect(screen.getByTestId('grid-title')).toContainHTML('Multiple items:')


    fireEvent.click(ovalBtn)

    expect(ovalBtn.classList).toContain('border-blue-300')
    expect(screen.getByTestId('items-box').childNodes).toHaveLength(5)
    expect(screen.getByTestId('grid-title')).toContainHTML('All items:')
  })
})
