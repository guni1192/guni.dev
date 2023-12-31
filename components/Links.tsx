import { Link, Heading, Button, Wrap, WrapItem, Box } from '@chakra-ui/react'
import { SitesProps } from '../lib/Sites'
import { FaTwitter } from 'react-icons/fa'
import React from 'react'

type Props = {
  sitesData: SitesProps[]
}

const Links = ({ sitesData }: Props) => (
  <Box>
  <Heading as="h2" size="xl">Links</Heading>

  <Wrap p="20px" m="auto">
      {
        sitesData.map(({title, url, icon, colorScheme}: SitesProps, index: number) =>
            <WrapItem key={index}>
              <Link href={url}>
                <Button as="a" href={url} colorScheme="green" leftIcon={React.createElement(icon, {}, [])}>
               {title}
                </Button>
              </Link>
            </WrapItem>
          )
      }
  </Wrap>
  </Box>
)

export default Links;
