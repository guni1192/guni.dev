import Layout from '../components/Layout'
import About from '../components/About'
import Links from '../components/Links'
import Background from '../components/Background'
import Publish from '../components/Publish'
import Paper from '../components/Paper'
import Icon from '../components/Icon'
import { backgroundData } from '../lib/Events'
import { postsData } from '../lib/Posts'
import { papersData } from '../lib/Papers'
import { sitesData } from '../lib/Sites'

export default function Home() {
  return (
    <Layout title="Takashi Iiguni profile">
      <div className="container">
        <h1 className="main-title">Takashi Iiguni</h1>

        <div className="profile-section">
          <Icon />
          <About />
        </div>

        <div className="section">
          <Links sitesData={sitesData} />
        </div>

        <div className="section">
          <Background title="Background" events={backgroundData} />
        </div>

        <div className="section">
          <Publish postsData={postsData} />
        </div>

        <div className="section">
          <Paper title="Academic Papers" papersData={papersData} />
        </div>
      </div>
    </Layout>
  )
}
