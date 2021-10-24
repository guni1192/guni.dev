import { Link, Heading, Button, HStack } from '@chakra-ui/react'
import { SitesProps } from '../lib/Sites'
import { FaTwitter } from 'react-icons/fa'
import React from 'react'

type Props = {
  sitesData: SitesProps[]
}

const Links = ({ sitesData }: Props) => (
  <div>
  <Heading as="h2" size="xl">Links</Heading>

  <HStack p="20px">
      {
        sitesData.map(({title, url, icon, colorScheme}: SitesProps, index: number) =>
          <Button colorScheme="green" leftIcon={React.createElement(icon)}>
            <Link key={index} href={url}>
              <a>{title}</a>
            </Link>
            </Button>
          )
      }
  </HStack>
  </div>
)

export default Links;
