type Props = {
  date: Date,
  event: string
}

const Career = ({ date, event }: Props) => (
  <div>
    {date.getFullYear()}年{date.getMonth()}月: {event}
  </div>
)

export default Career;
