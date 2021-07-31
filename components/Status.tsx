import Image from 'next/image'
import { ImageLoaderProps } from 'next/image'

type Props = {}

function imgLoader(ghUserName: string, theme: string) {
  return ({_src, _width, _quality}: ImageLoaderProps) => {
    return `https://github-readme-stats.vercel.app/api?username=${ghUserName}&show_icons=true&theme=${theme}`
  }
}

const Status= ({}: Props) => (
  <div>
    <h2>Status</h2>
    <Image
      loader={imgLoader("guni1192","gotham")}
      src="stats.png"
      width={500}
      height={200}
      />
  </div>
)

export default Status;
