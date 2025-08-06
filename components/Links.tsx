import { SitesProps } from '../lib/Sites'
import { FaTwitter } from 'react-icons/fa'
import React from 'react'

type Props = {
  sitesData: SitesProps[]
}

const Links = ({ sitesData }: Props) => (
  <div className="links-section">
    <h2 className="section-title">Links</h2>

    <div className="links-container">
      {
        sitesData.map(({title, url, icon, colorScheme}: SitesProps, index: number) =>
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

export default Links;
