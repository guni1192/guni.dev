import React from 'react'
import { Posts } from '../lib/Posts'

const Article: React.FC<Posts> = ({ title, url }) => (
  <a 
    href={url} 
    className="article-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </a>
)

export default Article
