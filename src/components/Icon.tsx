import React from 'react'
import { Image, Box } from '@chakra-ui/react'

const Icon: React.FC = () => (
  <Box flexShrink={0}>
    <Image
      src="https://github.com/guni1192.png"
      alt="guni1192"
      borderRadius="full"
      boxSize={{ base: "80px", md: "120px" }}
      objectFit="cover"
    />
  </Box>
)

export default Icon
