import React from 'react';
import { DPIconLogo } from '../../../icons';
import { Nav, NavLink, NavMenu } from './Style';

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <NavLink to="./home">
          <DPIconLogo />
        </NavLink>
      </div>
      <NavMenu>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/About">About</NavLink>

        <NavLink to="/Gallery">Gallery</NavLink>

        <NavLink to="/Services">Services</NavLink>

        <NavLink to="/Blog">Blog</NavLink>

        <NavLink to="/Contact">Contact Us</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
