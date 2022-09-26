import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';

const Body = () => {
  const color = useContext(ColorContext);
  const handleChangeColor = (event) => {
    console.log(event.target.value);
    color.setColor(event.target.value);
  };
  return (
    <div style={{ width: '100%', height: '200px', background: color.color }}>
      <h1>Body</h1>
      <select value={color.color} onChange={handleChangeColor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default Body;
