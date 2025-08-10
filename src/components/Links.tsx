import React from 'react'
import { SitesProps } from '../lib/Sites'

type Props = {
  sitesData: SitesProps[]
}

const Links: React.FC<Props> = ({ sitesData }) => (
  <div className="links-section">
    <h2 className="section-title">Links</h2>

    <div className="links-container">
      {
        sitesData.map(({title, url, icon}: SitesProps, index: number) =>
            <a 
              key={index}
              href={url}
              className="link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(icon, {}, [])}
              <span>{title}</span>
            </a>
          )
      }
    </div>
  </div>
)

export default Links
