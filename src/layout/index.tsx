import { FC } from 'react'
import { DefaultLayout } from './DefaultLayout'

export * from './DefaultLayout'

export const withDefaultLayout = (Component: FC) => {
  const Wrapper: FC = (props) => {
    return (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )
  }

  return Wrapper
}
