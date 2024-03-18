const EventsCalendar = ({ events }) => {
  return (
    <div className="events-calendar">
      {events.map((event, index) => (
        <div key={index} className="event mb-8">
          <h4 className="text-bold text-xl mt-5">{event.name}</h4>
          <div><span className="text-sm">{`${event.description.slice(0, 50)}...`}</span></div>
        </div>
      ))}
    </div>
  );
};
export default EventsCalendar;
