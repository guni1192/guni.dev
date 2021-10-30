// import Image from 'next/image'
import { ImageLoaderProps } from 'next/image'
import { Image, Heading } from '@chakra-ui/react'

type Props = {}

function imgLoader(ghUserName: string, theme: string) {
  return `https://github-readme-stats.vercel.app/api?username=${ghUserName}&show_icons=true&theme=${theme}`
}

const Status= ({}: Props) => (
  <div>
    <Heading as="h2" size="xl">Status</Heading>
    <Image
      src={imgLoader("guni1192","gotham")}
      alt="GitHub Status"
      />
  </div>
)

export default Status;
