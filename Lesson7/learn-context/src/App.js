import React, { createContext, useContext, useReducer, useState } from 'react';
import ColorContext from './context/ColorContext';
import CountContext from './context/CountContext';
import Page from './Page/Page';
import Parent from './Parent';
import { countReducer } from './reducers/counterReducer';

const App = () => {
  const [color, setColor] = useState('black');

  const [state, dispatch] = useReducer(countReducer, {
    number: 1,
  });
  const increment = () => dispatch({ type: 'INCREMENT', step: 1 });
  const decrement = () => dispatch({ type: 'DECREMENT', step: 1 });
  return (
    <CountContext.Provider
      value={{ increment, decrement, number: state.number }}
    >
      <Parent />
    </CountContext.Provider>
  );

  // return (
  //   <ColorContext.Provider value={{ color: color, setColor: setColor }}>
  //     <Page />
  //   </ColorContext.Provider>
  // );
};

export default App;
