import { Event } from "../Event/Event";

export const PageBoard = ({ events }) => {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <Event
            name={event.name}
            location={event.location}
            speaker={event.speaker}
            type={event.type}
            time={event.time}
          />
        </li>
      ))}
    </ul>
  );
};
