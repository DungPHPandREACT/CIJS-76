import React from 'react';
import { Navbar } from 'reactstrap';

const Footer = () => {
  return (
    <Navbar className="" color="dark" dark>
      {/* Select language */}
      <select className="dropdown-language">
        <option>English</option>
        <option>Tiếng Việt</option>
        <option>Japanese</option>
      </select>
    </Navbar>
  );
};

export default Footer;
