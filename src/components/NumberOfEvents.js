// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0 || value > 100) {
      setErrorAlert('Please enter a valid number between 1 and 100.');
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
    }
    setNumber(value);
  };

  return (
    <div id="number-of-events">
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
