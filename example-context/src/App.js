import React, { createContext, useEffect, useState } from 'react';
import NavBarPage from './layouts/NavBarPage';
import { Button } from 'reactstrap';
import Footer from './layouts/Footer';
import Body from './layouts/Body/Body';

export const ExampleContext = createContext();

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataLS = JSON.parse(localStorage.getItem('data'));
    if (dataLS) {
      setData(dataLS);
    } else {
      setData({
        isLogin: false,
        language: 'en',
        name: '',
      });
    }
  }, []);

  return (
    <ExampleContext.Provider value={{ data, setData: setData }}>
      <div className="container-page">
        <NavBarPage />
        <Body />
        <Footer />
      </div>
    </ExampleContext.Provider>
  );
};

export default App;
