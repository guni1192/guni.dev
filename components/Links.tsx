import Link from 'next/link'
import { SitesProps } from '../lib/Sites'

type Props = {
  sitesData: SitesProps[]
}

const Links = ({ sitesData }: Props) => (
  <div>
    <h2>Links</h2>
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
