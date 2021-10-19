import Image from 'next/image'
import { ImageLoaderProps } from 'next/image'

type Props = {}

const cloudflareImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (!quality) {
    quality = 75
  }
  return `https://images.guni1192-com.workers.dev?width=${width}&quality=${quality}&image=https://guni1192.com${src}`
}

const About = ({  }: Props) => (
  <div>
    <Image
      loader={cloudflareImageLoader}
      src="/guni-icon.png"
      width={250}
      height={250}
      alt="icon"
    />
    <h2>About me</h2>
    <p>
      My name is Takashi Iiguni (飯國 隆志). <br/>
      I am a graduate student in Japan majoring in engineering. <br/>
      My area of expertise is system software, including virtualization technology and operating systems. <br/>
    </p>
  </div>
)

export default About;
