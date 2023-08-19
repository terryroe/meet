// src/components/Event.js

import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h4>{event.summary}</h4>
      <div>{event.start.dateTime}</div>
      <div>{event.location}</div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <div className="details"></div>}
    </li>
  );
};

export default Event;
