import { Link, Box } from '@chakra-ui/react'
import { Posts } from '../lib/Posts'

const Article = ({ title, url }: Posts ) => (
  <Box>
    <Link href={url}>
      <a href={url}>{title}</a>
    </Link>
  </Box>
)

export default Article;
