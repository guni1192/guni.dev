import Layout from '../components/Layout'
import About from '../components/About'
import Links from '../components/Links'
import Background from '../components/Background'
import Publish from '../components/Publish'
import Status from '../components/Status'
import { Heading } from '@chakra-ui/react'
import { academicBackGroundData, internshipBackGroundData } from '../lib/Events'
import { postsData } from '../lib/Posts'
import { sitesData } from '../lib/Sites'

export default function Home() {
  return (
    <Layout title="Top | guni1192.com">
      <Heading as="h1" size="4xl">$ whois guni1192</Heading>
      <About />
      <Links sitesData={sitesData} />
      <Background title="Background" events={academicBackGroundData} />
      <Background title="Internship" events={internshipBackGroundData} />
      <Publish postsData={postsData} />
      <Status />
    </Layout>
  )
}
