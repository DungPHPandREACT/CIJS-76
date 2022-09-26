import React from 'react';

const Body = (props) => {
  const handleChangeColor = (event) => {
    props.changeColor(event.target.value);
  };

  return (
    <div style={{ width: '100%', height: '200px', background: props.color }}>
      <h1>Body</h1>
      <select value={props.color} onChange={handleChangeColor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default Body;
