import { Posts } from '../lib/Posts'
import Article from './Article'

type Props = {
  postsData: Posts[]
}

const Publish = ({ postsData }: Props) => (
  <div>
    <h2>Publish</h2>
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
