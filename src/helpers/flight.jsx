import { intlFormat, minutesToHours } from 'date-fns';

const flight = (segment) => {
  const startTime = intlFormat(new Date(segment.date), {
    hour: 'numeric',
    minute: 'numeric',
  });
  const endTime = intlFormat(new Date(+new Date(segment.date) + segment.duration * 6e4), {
    hour: 'numeric',
    minute: 'numeric',
  });

  const flightTimeHour = minutesToHours(segment.duration);
  const FlightTimeMinute = segment.duration % 60;
  const stop = segment.stops.join(', ');
  let text = 'Прямой рейс';
  if (segment.stops.length === 1) {
    text = 'пересадка';
  } else if (segment.stops.length > 1 && segment.stops.length < 5) {
    text = 'пересадки';
  } else if (segment.stops.length >= 5) {
    text = 'пересадок';
  }

  return (
    <>
      <div>
        <span>
          {segment.origin} - {segment.destination}
        </span>
        <p>
          {startTime} - {endTime}
        </p>
      </div>
      <div>
        <span>в пути</span>
        <p>
          {flightTimeHour}ч {FlightTimeMinute}м
        </p>
      </div>
      <div>
        <span>
          {segment.stops.length !== 0 ? segment.stops.length : null} {text}
        </span>
        <p>{stop}</p>
      </div>
    </>
  );
};
export default flight;
