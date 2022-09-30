import React, { useContext } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { ExampleContext } from '../App';

const NavBarPage = () => {
  const data = useContext(ExampleContext);

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

      <NavbarBrand>
        {data.data.isLogin ? `Welcome ${data.data.name}` : 'Login'}
      </NavbarBrand>
    </Navbar>
  );
};

export default NavBarPage;
