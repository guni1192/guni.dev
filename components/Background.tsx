import { Event } from "../lib/Events";
import Career from './Career';

type Props = {
  events: Event[]
}

const Background = ({ events }: Props ) => (
  <div>
    <h2>Backgroud</h2>
    <ul>
      {
        events.map((event) =>
        <li key={event.id}>
          <Career
            id={event.id}
            date={event.date}
            body={event.body} />
        </li>)
      }
    </ul>
  </div>
)

export default Background
