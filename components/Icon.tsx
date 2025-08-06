import { ImageLoaderProps } from 'next/image'

type Props = {}

const Icon = ({  }: Props) => (
  <div className="icon-container">
    <img
      src="https://github.com/guni1192.png"
      alt="guni1192"
      className="profile-icon"
    />
  </div>
)

export default Icon;
