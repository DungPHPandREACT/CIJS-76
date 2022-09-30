import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavBarPage = () => {
  return (
    <Navbar className="my-2" color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="https://reactstrap.github.io/logo-white.svg"
          style={{
            height: 40,
            width: 40,
          }}
        />
        Reactstrap
      </NavbarBrand>

      <NavbarBrand>Login</NavbarBrand>
    </Navbar>
  );
};

export default NavBarPage;
