import { ImageLoaderProps } from 'next/image'
import { Heading, Text, Image, Box, Flex} from '@chakra-ui/react'

type Props = {}

const About = ({  }: Props) => (
  <Box>
    <Heading as="h2" size="xl">About me</Heading>
    <Text fontSize="xl" p={4}>
      Hello, I&apos;m <b>Takashi Iiguni (飯國 隆志)</b>, a Japanese software engineer with a Master&apos;s degree in Engineering.
      My professional focus is on DevOps, containerization, CI/CD, eBPF, and Rust.
      Passionate about innovation in technology, I constantly seek to deepen my expertise in these areas, contributing to efficient and reliable software development processes.
    </Text>
  </Box>
)

export default About;
