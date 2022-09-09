import React, { Fragment, useState } from 'react';
import Images from './Images';

const App = () => {
  const [number, setNumber] = useState(0);

  const handleDecreaseNumber = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  const handleIncreaseNumber = () => {
    if (number === 10) {
      setNumber(10);
    } else {
      setNumber(number + 1);
    }
  };

  const handleResetNumber = () => {
    setNumber(0);
  };

  const handleChangeNumber = (event) => {
    const data = event.target.value;
    if (data < 0) {
      setNumber(0);
    } else if (data > 10) {
      setNumber(10);
    } else {
      setNumber(data);
    }
  };

  return (
    <div style={{ margin: 'auto' }}>
      {/* <div>
        <input
          type="number"
          placeholder="Enter your number..."
          onChange={handleChangeNumber}
        />
        <button onClick={handleResetNumber}>Reset</button>
      </div>
      <div>
        <button onClick={handleDecreaseNumber}>-</button>
        <span style={{ fontSize: '20px' }}>{number}</span>
        <button onClick={handleIncreaseNumber}>+</button>
      </div> */}
      <Images />
    </div>
  );
};

export default App;
