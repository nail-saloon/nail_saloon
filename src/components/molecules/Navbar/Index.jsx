import React from 'react'
import { DPIconLogo } from '../../../icons'
import {
Nav, NavLink, NavMenu
} from './Style'


const Navbar = () => {
  return (
   
      <Nav>
        <div className="logo">
          <NavLink to= './home'> <DPIconLogo/> </NavLink>
        </div>
        <NavMenu>
          
            <NavLink to= './' activeStyle>Home</NavLink>
          
            <NavLink to= './About' activeStyle>About</NavLink>
          
            <NavLink to= './Gallery' activeStyle>Gallery</NavLink>
          
            <NavLink to= './Services' activeStyle>Services</NavLink>
          
            <NavLink to= './Blog' activeStyle>Blog</NavLink>
          
            <NavLink to= './Contact' activeStyle>Contact Us</NavLink>
        </NavMenu>
      </Nav>
  
  )
}

export default Navbar