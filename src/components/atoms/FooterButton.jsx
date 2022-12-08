import React from 'react'
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const Button = styled(Link)`
    color: ${COLORS.xiketic};
    background: ${COLORS.Verve};
    padding: 2rem 7rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.bold};
    text-decoration: none;
    position: relative;
    z-index: 1;
      &::before{
        content: 'ViewGallery';
        position: absolute;
        top: 8px;
        left: 12px;
        border: 1px solid ${COLORS.Verve};
        padding: inherit;
        background: none;
        z-index: -1;
    }
    
`

const FooterButton = () => {

    
  return (
    <Button to= '../../Gallery'>View Gallery</Button>
  )
}

export default FooterButton