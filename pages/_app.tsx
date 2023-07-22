import { AlertProvider } from '../contexts/AlertContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <AlertProvider>
  <Component {...pageProps} />
  </AlertProvider>
  )
}

export default MyApp
