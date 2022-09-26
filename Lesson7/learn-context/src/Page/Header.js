import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';

const Header = () => {
  const color = useContext(ColorContext);
  // color.setColor
  console.log('color: ', color);

  return (
    <div style={{ width: '100%', height: '200px', background: color.color }}>
      Header
    </div>
  );
};

export default Header;
