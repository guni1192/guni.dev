import Link from 'next/link'
import Layout from '../components/Layout'
import About from '../components/About'
import Links from '../components/Links'

export default function Home() {
  return (
    <Layout title="Top | guni1192.com">
      <h1>Who is guni1192 ?</h1>
      <About></About>
      <Links></Links>
    </Layout>
  )
}
