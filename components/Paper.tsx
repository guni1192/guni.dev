import { Paper } from "../lib/Papers";

type Props = {
  title: string
  papersData: Paper[]
}

const Papers = ({ title, papersData }: Props ) => (
  <div className="papers-section">
    <h2 className="section-title">{title}</h2>
    <ol className="papers-list">
      {
        papersData.map((paper: Paper, index) =>
        <li key={index} className="paper-item">
          <p className="paper-text">
            {paper.authors.join(', ')}, &ldquo;{paper.title}&ldquo;, {paper.conference}
          </p>
        </li>)
      }
    </ol>
  </div>
)

export default Papers;
