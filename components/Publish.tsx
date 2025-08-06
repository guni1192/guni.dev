import { Posts } from '../lib/Posts'
import Article from './Article'

type Props = {
  postsData: Posts[]
}

const Publish = ({ postsData }: Props) => (
  <div className="publish-section">
    <h2 className="section-title">Publish</h2>
    <ol className="posts-list">
      {
        postsData.map((posts) =>
        <li key={posts.url} className="post-item">
          <Article
            title={posts.title}
            url={posts.url} />
        </li>)
      }
    </ol>
  </div>
)

export default Publish;
