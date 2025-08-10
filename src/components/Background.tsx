import React from 'react'
import { Event } from "../lib/Events"

type Props = {
  title: string,
  events: Event[]
}

function getMonth(date: Date): string {
  const month: number = date.getMonth() + 1;
  const zeroPaddingMonth = ("00" + month).slice(-2);
  return zeroPaddingMonth;
}

function dateToString(date: Date | null): string {
  if (date === null) {
    return '';
  }
  return date.getFullYear() + '/' + getMonth(date)
}

const Background: React.FC<Props> = ({ title, events }) => (
  <div className="background-section">
    <h2 className="section-title">{title}</h2>
    <div className="events-container">
      {
        events.sort((a: Event, b: Event) => (a.startDate < b.startDate)? 1 : -1).map((event, index) =>
        <div key={index} className="event-item">
          <h3 className="event-title">{event.name}</h3>
          <p className="event-date">{dateToString(event.startDate)} - {dateToString(event.endDate)}</p>
          <p className="event-description">{event.body}</p>
        </div>
        )
      }
    </div>
  </div>
)

export default Background
