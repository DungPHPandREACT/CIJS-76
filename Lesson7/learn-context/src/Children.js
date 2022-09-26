import React, { useContext } from 'react';
import CountContext from './context/CountContext';

const Children = () => {
  const { number, decrement, increment } = useContext(CountContext);

  console.log('number: ', number);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{number}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Children;
