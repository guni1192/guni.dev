import React from 'react'
import { Paper } from "../lib/Papers"

type Props = {
  title: string
  papersData: Paper[]
}

const Papers: React.FC<Props> = ({ title, papersData }) => (
  <div className="papers-section">
    <h2 className="section-title">{title}</h2>
    <ol className="papers-list">
      {
        papersData.map((paper: Paper, index) =>
        <li key={index} className="paper-item">
          <p className="paper-text">
            {paper.authors.join(', ')}, &ldquo;{paper.title}&rdquo;, {paper.conference}
          </p>
        </li>)
      }
    </ol>
  </div>
)

export default Papers
