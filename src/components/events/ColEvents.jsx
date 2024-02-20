import EventsCalendar from "./EventsCalendar";

const ColEvents = ({ days }) => {
  return (
    <div className="col-events flex justify-around">
      {days.map((day, index) => (
        <div key={index} className={`day ${day.color} p-4`}>
          <div className="day-weeksday">{day.weekday}</div>
          <div className="day-date">{day.date}</div>
          <EventsCalendar events={day.events} />
        </div>
      ))}
    </div>
  );
};
export default ColEvents;
