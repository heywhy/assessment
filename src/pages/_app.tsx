import { FC } from 'react'
import Head from 'next/head'
import { AuthProvider } from 'components/auth'
import '../styles/globals.css'

type Props = {
  Component: FC
  pageProps: Record<string, any>
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
