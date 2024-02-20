const EventsCalendar = ({ events }) => {
  return (
    <div className="events-calendar">
      {events.map((event, index) => (
        <div key={index} className="event">
          {event.name}
          <div>{event.time}</div>
        </div>
      ))}
    </div>
  );
};
export default EventsCalendar;
