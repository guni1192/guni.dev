import Image from 'next/image'
import { ImageLoaderProps } from 'next/image'

type Props = {}

const githubAvatorLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://github.com/guni1192.png`
}

const About = ({  }: Props) => (
  <div>
    <Image
      loader={githubAvatorLoader}
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
