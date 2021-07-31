import { Event } from "../lib/Events";
import Career from './Career';

type Props = {
  title: string,
  events: Event[]
}

const Background = ({ title, events }: Props ) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {
        events.map((event, index) =>
        <li key={index}>
          <Career
            date={event.date}
            body={event.body} />
        </li>)
      }
    </ul>
  </div>
)

export default Background
