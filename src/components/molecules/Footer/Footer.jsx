import React from 'react'
import { NavLink as Link } from "react-router-dom";
import { DPIconFacebook, DPIconInstagram, DPIconLogoInvert, DPIconTwitter } from '../../../icons'
import FooterButton from '../../atoms/FooterButton';
import {
  FooterStyle, FooterRow, Bold, FooterColumn, SocialIcons, FooterInput, SignupBtn, LinkWrapper, Links, FooterLink
} from './FooterStyle';

import {LinkData} from '../../../utilities/Links';




const Footer = () => {
  return (
   <FooterStyle>
    <FooterRow>
      <Bold>Come say Hello</Bold>
      <div>
        <FooterButton/>
      </div>
    </FooterRow>
    <hr />
    <FooterRow>
      <FooterColumn>
        <Link to= './'> <DPIconLogoInvert/> </Link>
        
        <SocialIcons>
          <Link> <DPIconFacebook/> </Link>
          <Link> <DPIconTwitter/> </Link>
          <Link> <DPIconInstagram/> </Link>
        </SocialIcons>

        <div>
          <FooterInput type="email" placeholder="Sign up for our newsletter" />
          <SignupBtn>Sign Up</SignupBtn>
        </div>
      </FooterColumn>
      
      <LinkWrapper>
        <Links>
        {LinkData.map((linkGroup) => linkGroup.menu?.map((link, index) => (<FooterLink key={index} to={link.to}>{link.name}</FooterLink>)))} 
        </Links>
        
        <Links>
        {LinkData.map((linkGroup) => linkGroup.about?.map((link, index) => (<FooterLink key={index} to={link.to}>{link.name}</FooterLink>)))} 
        </Links>

        <Links>
        {LinkData.map((linkGroup) => linkGroup.instructions?.map((link, index) => (<FooterLink key={index} to={link.to}>{link.name}</FooterLink>)))} 
        </Links>
      </LinkWrapper>
      
    </FooterRow>
   </FooterStyle>
  )
}

export default Footer