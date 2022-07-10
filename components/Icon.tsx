import { Image, Box } from '@chakra-ui/react'

type Props = {}

const Icon = ({  }: Props) => (
  <Box>
    <Image
      boxSize='200px'
      src="https://github.com/guni1192.png"
      alt="guni1192"
    />
  </Box>
)

export default Icon;
