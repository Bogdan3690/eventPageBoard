import { Event } from "../Event/Event";
import { EventList } from "./PageBoard.styled";

export const PageBoard = ({ events }) => {
  return (
    <EventList>
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
</EventList>
  );
};
