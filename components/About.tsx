import { ImageLoaderProps } from 'next/image'
import { Heading, Text, Image, Box, Flex} from '@chakra-ui/react'

type Props = {}

const About = ({  }: Props) => (
  <Flex>
    <Box p={2}>
      <Image
        src="https://github.com/guni1192.png"
        alt="icon"
      />
      </Box>

    <Box p={2}>
      <Heading as="h2" size="xl">About me</Heading>
      <Text fontSize="xl">
        Hi, I&apos;m Takashi Iiguni (飯國 隆志). <br/>
        Software Engineer experience 0+ years.
        I have a Master of Engineering.
        I&apos;m interested in Container, Kubernetes, eBPF, Rust.
      </Text>
    </Box>
  </Flex>
)

export default About;
