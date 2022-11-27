import React from 'react'
import { NavLink as Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const Button = styled(Link)`
    color: ${COLORS.xiketic};
    background: red !important;
    padding: 2rem 7rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.bold};
    text-decoration: none;
    
`

const FooterButton = () => {

    
  return (
    <Button to= '../../Gallery'>View Gallery</Button>
  )
}

export default FooterButton