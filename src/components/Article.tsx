import React from 'react'
import { Link } from '@chakra-ui/react'
import { Posts } from '../lib/Posts'

const Article: React.FC<Posts> = ({ title, url }) => (
  <Link 
    href={url} 
    target="_blank"
    rel="noopener noreferrer"
    color="teal.300"
    _hover={{ color: "green.400", textDecoration: "underline" }}
    fontSize={{ base: "sm", md: "md" }}
    py={{ base: 1, md: 2 }}
    display="block"
  >
    {title}
  </Link>
)

export default Article
