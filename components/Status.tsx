import Image from 'next/image'
import { ImageLoaderProps } from 'next/image'
import { Heading } from '@chakra-ui/react'

type Props = {}

function imgLoader(ghUserName: string, theme: string) {
  return ({src, width, quality}: ImageLoaderProps) => {
    return `https://github-readme-stats.vercel.app/api?username=${ghUserName}&show_icons=true&theme=${theme}`
  }
}

const Status= ({}: Props) => (
  <div>
    <Heading as="h2" size="3xl">Status</Heading>
    <Image
      loader={imgLoader("guni1192","gotham")}
      src="stats.png"
      alt="guni1192_avator"
      width={500}
      height={200}
      />
  </div>
)

export default Status;
