import React from 'react';
import { DPIconLogo } from '../../../icons';
import { LinkData } from '../../../utilities/Links';
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
        {LinkData.map((linkGroup) =>
          linkGroup.Navbar?.map((link, index) => (
            <NavLink key={index} to={link.to}>
              {link.name}
            </NavLink>
          ))
        )}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
