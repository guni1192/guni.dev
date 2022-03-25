import { Posts } from '../lib/Posts'
import Article from './Article'
import { Heading, OrderedList, ListItem } from '@chakra-ui/react'

type Props = {
  postsData: Posts[]
}

const Publish = ({ postsData }: Props) => (
  <div>
    <Heading as="h2" size="xl">Publish</Heading>
    <OrderedList>
      {
        postsData.map((posts) =>
        <ListItem  key={posts.url}>
          <Article
            title={posts.title}
            url={posts.url} />
        </ListItem>)
      }
    </OrderedList>
  </div>
)

export default Publish;
