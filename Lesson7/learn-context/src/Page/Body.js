import React from 'react';

const Body = () => {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <h1>Body</h1>
      <select value="red">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default Body;
