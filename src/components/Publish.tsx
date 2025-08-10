import React from 'react'
import { Box, Heading, List } from '@chakra-ui/react'
import { Posts } from '../lib/Posts'
import Article from './Article'

type Props = {
  postsData: Posts[]
}

const Publish: React.FC<Props> = ({ postsData }) => (
  <Box>
    <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 3, md: 4 }} color="green.400">
      Publish
    </Heading>
    <List.Root as="ol" pl={{ base: "15px", md: "20px" }} gap={{ base: 2, md: 3 }}>
      {
        postsData.map((posts) =>
        <List.Item key={posts.url}>
          <Article
            title={posts.title}
            url={posts.url} />
        </List.Item>)
      }
    </List.Root>
  </Box>
)

export default Publish
