import React from 'react'
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import { DPIconFacebook, DPIconInstagram, DPIconLogo, DPIconTwitter } from '../../icons'


export const FooterStyle = styled.footer`
  background: ${COLORS.xiketic};
  height: 100vh;
  width: 100vw;
  border: 1px solid black
`;


const Footer = () => {
  return (
   <FooterStyle>
    <div className="footer_top">
      <h1>Come say Hello</h1>
      {/* <FooterButton/> */}
    </div>
    <hr />
    <div className="footer_bottom">
      <div className="bottom-left">
        <Link to= './'> <DPIconLogo/> </Link>
        
        <div className="social-icons">
          <Link> <DPIconFacebook/> </Link>
          <Link> <DPIconTwitter/> </Link>
          <Link> <DPIconInstagram/> </Link>
        </div>
        <input type="email" name="email" id="" />
        <button>Sign Up</button>
      </div>
      <div className="bottom-right">
        <div className="">
          <Link>Menu</Link>
          <Link>Services</Link>
          <Link>Gallery</Link>
          <Link>Licenses</Link>
          <Link>Careers</Link>
        </div>
        <div className="">
          <Link>Privacy</Link>
          <Link>Blogs</Link>
          <Link>Our Story</Link>
        </div>
        <div className="">
          <Link>Instructions</Link>
          <Link>Locations</Link>
          <Link>Memberships</Link>
          <Link>Motivation</Link>
        </div>
      </div>
      
    </div>
   </FooterStyle>
  )
}

export default Footer