import { ImageLoaderProps } from 'next/image'
import { Heading, Text, Image, Box, Flex} from '@chakra-ui/react'

type Props = {}

const About = ({  }: Props) => (
  <Box>
    <Heading as="h2" size="xl">About me</Heading>
    <Text fontSize="xl" p={4}>
      Hi, I&apos;m Takashi Iiguni (飯國 隆志). <br/>
      Software Engineer experience 0+ years.
      I have a Master of Engineering.
      I&apos;m interested in Container, Kubernetes, eBPF, Rust.
    </Text>
  </Box>
)

export default About;
