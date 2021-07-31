import { Event } from '../lib/Events'

const Career = ({ date, body }: Event) => (
  <div>
    {date.getFullYear()}年{date.getMonth()}月: { body }
  </div>
)

export default Career;
