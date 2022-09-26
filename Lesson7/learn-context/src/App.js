import React, { createContext, useContext, useReducer, useState } from 'react';
import CountContext from './context/CountContext';
import Page from './Page/Page';
import Parent from './Parent';
import { countReducer } from './reducers/counterReducer';

export const ColorContext = createContext();

const App = () => {
  const [color, setColor] = useState('black');

  return (
    <ColorContext.Provider value={{ color: color, setColor: setColor }}>
      <Page />
    </ColorContext.Provider>
  );
};

export default App;
