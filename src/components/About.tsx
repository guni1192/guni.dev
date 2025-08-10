import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const About: React.FC = () => (
  <Box flex="1">
    <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 3, md: 4 }} color="green.400">
      About me
    </Heading>
    <Text 
      fontSize={{ base: "md", md: "xl" }} 
      lineHeight={{ base: "1.6", md: "1.8" }}
    >
      Hello, I&apos;m <Text as="span" fontWeight="bold">Takashi Iiguni (飯國 隆志)</Text>, a Japanese software engineer with a Master&apos;s degree in Engineering.
      My professional focus is on DevOps, containerization, CI/CD, eBPF, and Rust.
      Passionate about innovation in technology, I constantly seek to deepen my expertise in these areas, contributing to efficient and reliable software development processes.
    </Text>
  </Box>
)

export default About
