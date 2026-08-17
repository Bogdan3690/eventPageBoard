import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccountCircle, MdAccessTime } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";

export const Event = ({ name, location, speaker, type, time }) => {
  const startInMS = Date.parse(time.start);
  const endInMS = Date.parse(time.end);
  const result = endInMS - startInMS;
  const hours = pad(
    Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((result % (1000 * 60 * 60)) / (1000 * 60)));
  function pad(value) {
    return String(value).padStart(2, "0");
  }
  const eventData = new Date(time.start);
  return (
    <div>
      <h2>{name}</h2>
      <p><FaLocationDot /> {location}</p>
      <p><MdOutlineAccountCircle /> {speaker}</p>
      <p><TbCurrencyDollar /> {type}</p>
      <p>
        <FaCalendarAlt /> 
        {eventData.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>
        <MdAccessTime /> 
        {hours}:{mins}
      </p>
    </div>
  );
};
