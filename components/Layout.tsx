import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'guni1192' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <main className={styles.main}>
      {children}
    </main>
  </>
)

export default Layout
