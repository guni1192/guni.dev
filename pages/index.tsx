import Layout from '../components/Layout'
import About from '../components/About'
import Links from '../components/Links'
import Background from '../components/Background'
import Publish from '../components/Publish'
import Paper from '../components/Paper'
import Status from '../components/Status'
import { Container, Stack, Box, Heading } from '@chakra-ui/react'
import { backgroundData } from '../lib/Events'
import { postsData } from '../lib/Posts'
import { papersData } from '../lib/Papers'
import { sitesData } from '../lib/Sites'

export default function Home() {
  return (
    <Layout title="Top | guni1192.com">
      <Container maxW={'3xl'}>
      <Heading as="h1" size="4xl" m="auto" p="20px">$ whois guni1192</Heading>
      <Stack as={Box} >
        <About />
      </Stack>
      <Stack as={Box} >
        <Links sitesData={sitesData} />
      </Stack>
      <Stack as={Box} >
        <Background title="Background" events={backgroundData} />
      </Stack>
      <Stack as={Box} >
        <Publish postsData={postsData} />
      </Stack>
      <Stack as={Box} >
        <Paper title="Academic Papers" papersData={papersData} />
      </Stack>
      <Stack as={Box} >
        <Status />
      </Stack>
      </Container>
    </Layout>
  )
}
