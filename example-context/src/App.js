import React, { createContext } from 'react';
import NavBarPage from './layouts/NavBarPage';
import { Button } from 'reactstrap';
import Footer from './layouts/Footer';
import Body from './layouts/Body/Body';

export const ExampleContext = createContext();

const App = () => {
  return (
    <ExampleContext.Provider value={{}}>
      <div className="container-page">
        <NavBarPage />
        <Body />
        <Footer />
      </div>
    </ExampleContext.Provider>
  );
};

export default App;
