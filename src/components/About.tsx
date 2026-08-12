import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const About: React.FC = () => (
  <Box>
    <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 3, md: 4 }} color="green.400">
      About me
    </Heading>
    <Text
      fontSize={{ base: "md", md: "xl" }}
      lineHeight={{ base: "1.6", md: "1.8" }}
    >
      Hello, I&apos;m <Text as="span" fontWeight="bold">Takashi Iiguni (飯國 隆志)</Text>, a software engineer.
      Interested in DevOps, containers, CI/CD, eBPF, and Rust.
    </Text>
  </Box>
)

export default About
