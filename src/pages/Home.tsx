import React from 'react'
import { Container, Heading, Stack, Box } from '@chakra-ui/react'
import About from '../components/About'
import Links from '../components/Links'
import Background from '../components/Background'
import Publish from '../components/Publish'
import Paper from '../components/Paper'
import Icon from '../components/Icon'
import { backgroundData } from '../lib/Events'
import { postsData } from '../lib/Posts'
import { papersData } from '../lib/Papers'
import { sitesData } from '../lib/Sites'

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "Takashi Iiguni - Software Engineer"
  }, [])

  return (
    <Container maxW="6xl" px={{ base: 4, md: 6 }} py={{ base: 6, md: 8 }}>
      <Stack
        direction="row"
        alignItems="center"
        gap={{ base: 4, md: 6 }}
        mb={{ base: 6, md: 8 }}
      >
        <Icon />
        <Heading as="h1" size={{ base: "2xl", md: "4xl" }} color="green.400">
          Takashi Iiguni
        </Heading>
      </Stack>

      <Box mb={{ base: 8, md: 10 }}>
        <About />
      </Box>

      <Box mb={{ base: 8, md: 10 }}>
        <Links sitesData={sitesData} />
      </Box>

      <Box mb={{ base: 8, md: 10 }}>
        <Background title="Background" events={backgroundData} />
      </Box>

      <Box mb={{ base: 8, md: 10 }}>
        <Publish postsData={postsData} />
      </Box>

      <Box mb={{ base: 8, md: 10 }}>
        <Paper title="Academic Papers" papersData={papersData} />
      </Box>
    </Container>
  )
}

export default Home
