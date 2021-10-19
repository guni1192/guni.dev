import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'guni1192' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    <main className={styles.main}>
    {children}
    </main>
    <footer>
    </footer>
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ec84c158e40e46cc99cc9db7be9be876"}'></script>
  </div>
)

export default Layout
