import React, { useContext } from 'react';
import { ColorContext } from '../App';

const Header = () => {
  const color = useContext(ColorContext);
  console.log('color: ', color);

  return <div style={{ width: '100%', height: '200px' }}>Header</div>;
};

export default Header;
