// src/components/Event.js

import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h4>{event.summary}</h4>
      <div>{event.location}</div>
      <div>{new Date(event.start.dateTime).toUTCString()}</div>
      {showDetails && <p className="details">{event && event.description}</p>}
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </li>
  );
};

export default Event;
