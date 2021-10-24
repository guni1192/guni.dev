import { Posts } from '../lib/Posts'
import Article from './Article'
import { Heading } from '@chakra-ui/react'

type Props = {
  postsData: Posts[]
}

const Publish = ({ postsData }: Props) => (
  <div>
    <Heading as="h2" size="3xl">Publish</Heading>
    <ul>
      {
        postsData.map((posts) =>
        <li key={posts.url}>
          <Article
            title={posts.title}
            url={posts.url} />
        </li>)
      }
    </ul>
  </div>
)

export default Publish;
