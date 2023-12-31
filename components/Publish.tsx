import { Posts } from '../lib/Posts'
import Article from './Article'
import { Heading, OrderedList, ListItem, Box } from '@chakra-ui/react'

type Props = {
  postsData: Posts[]
}

const Publish = ({ postsData }: Props) => (
  <Box>
    <Heading as="h2" size="xl">Publish</Heading>
    <OrderedList pl="20px">
      {
        postsData.map((posts) =>
        <ListItem  key={posts.url}>
          <Article
            title={posts.title}
            url={posts.url} />
        </ListItem>)
      }
    </OrderedList>
  </Box>
)

export default Publish;
