import { render } from '@testing-library/react'
import { FC } from 'react'

const Providers: FC<any> = ({ children }) => {
  return children
}

const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
