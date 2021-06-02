import { render } from '@testing-library/react'
import { MockProviders } from '__mocks__/Providers'

const customRender = (ui: JSX.Element, options = {}) =>
  render(<MockProviders {...options}>{ui}</MockProviders>)

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
