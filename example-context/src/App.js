import React from 'react';
import NavBarPage from './layouts/NavBarPage';
import { Button } from 'reactstrap';
import Footer from './layouts/Footer';
import Body from './layouts/Body/Body';

const App = () => {
  return (
    <div className="container-page">
      <NavBarPage />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
