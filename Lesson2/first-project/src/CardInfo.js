import React from 'react';

const CardInfo = (props) => {
  return (
    <div className="card">
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
};

export default CardInfo;
