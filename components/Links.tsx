import { Link, Heading, Button, Wrap, WrapItem} from '@chakra-ui/react'
import { SitesProps } from '../lib/Sites'
import { FaTwitter } from 'react-icons/fa'
import React from 'react'

type Props = {
  sitesData: SitesProps[]
}

const Links = ({ sitesData }: Props) => (
  <div>
  <Heading as="h2" size="xl">Links</Heading>

  <Wrap p="20px" m="auto">
      {
        sitesData.map(({title, url, icon, colorScheme}: SitesProps, index: number) =>
            <WrapItem>
              <Link href={url}>
                <Button as="a" key={index} colorScheme="green" leftIcon={React.createElement(icon, {}, [])}>
               {title}
                </Button>
              </Link>
            </WrapItem>
          )
      }
  </Wrap>
  </div>
)

export default Links;
