import React from 'react'
import { Box, Heading, Flex, Button, Link } from '@chakra-ui/react'
import { SitesProps } from '../lib/Sites'

type Props = {
  sitesData: SitesProps[]
}

const Links: React.FC<Props> = ({ sitesData }) => (
  <Box>
    <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 3, md: 4 }} color="green.400">
      Links
    </Heading>

    <Flex gap={{ base: 2, md: 3 }} wrap="wrap">
      {
        sitesData.map(({title, url, icon}: SitesProps, index: number) =>
          <Link 
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration="none"
          >
            <Button 
              colorScheme="green"
              size={{ base: "sm", md: "md" }}
            >
              <Box mr={2}>
                {React.createElement(icon)}
              </Box>
              {title}
            </Button>
          </Link>
        )
      }
    </Flex>
  </Box>
)

export default Links
