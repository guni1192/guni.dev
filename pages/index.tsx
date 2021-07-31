import Layout from '../components/Layout'
import About from '../components/About'
import Links from '../components/Links'
import Background from '../components/Background'
import Publish from '../components/Publish'
import { events } from '../lib/Events'
import { postsData } from '../lib/Posts'

export default function Home() {
  return (
    <Layout title="Top | guni1192.com">
      <h1>Who is guni1192 ?</h1>
      <About />
      <Links />
      <Background events={events} />
      <Publish postsData={postsData} />
    </Layout>
  )
}
