import { Link } from '@chakra-ui/react'
import { Posts } from '../lib/Posts'

const Article = ({ title, url }: Posts ) => (
  <div>
    <Link href={url}>
      <a>{title}</a>
    </Link>
  </div>
)

export default Article;
