import { Link, Heading } from '@chakra-ui/react'
import { SitesProps } from '../lib/Sites'


type Props = {
  sitesData: SitesProps[]
}

const Links = ({ sitesData }: Props) => (
  <div>
  <Heading as="h2" size="3xl">Links</Heading>
    <ul>
      {
        sitesData.map(({title, url}: SitesProps, index: number) =>
          <li key={index}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>)
      }
    </ul>
  </div>
)

export default Links;
