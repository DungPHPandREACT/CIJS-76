import React, { useContext } from 'react';
import { ColorContext } from '../App';

const Footer = () => {
  const color = useContext(ColorContext);
  return (
    <div style={{ width: '100%', height: '200px', background: color.color }}>
      Footer
    </div>
  );
};

export default Footer;
