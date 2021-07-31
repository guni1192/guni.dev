import Link from 'next/link'

type Props = {}

const Links = ({  }: Props) => (
  <div>
    <h2>Links</h2>
    <ul>
      <li>
        <Link href="https://github.com/guni1192">
          <a>GitHub</a>
        </Link>
      </li>

      <li>
        <Link href="https://twitter.com/guni1192">
          <a>Twitter</a>
        </Link>
      </li>

      <li>
        <Link href="https://guni1192.hatenablog.com/">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Links;
