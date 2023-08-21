// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = () => {
  const [number, setNumber] = useState(32);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
  };

  return (
    <div className="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        className="number-of-events-input"
        type="text"
        id="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
