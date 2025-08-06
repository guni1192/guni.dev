import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </Head>
      <Script 
        src="https://static.cloudflareinsights.com/beacon.min.js" 
        data-cf-beacon='{"token": "ec84c158e40e46cc99cc9db7be9be876"}'
        strategy="afterInteractive"
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
export default MyApp
