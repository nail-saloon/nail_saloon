import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';


export const Btn = styled.button`
  padding: 1.6rem 3.2rem;
  border: 1px solid ${COLORS.xiketic};
  border-radius: .8rem;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  background: ${( bg ) => ( bg ? 'none': '' )};
  margin-top: 4rem;
  cursor: pointer;

  ${({bg}) => 
  bg &&
  css`
      border: none;
      background: ${COLORS.xiketic};
      color: ${COLORS.Verve};
    `
}
`



const Button = ({bg, text, to}) => {

  return (
    <Btn 
      bg={bg} 
      to = {to}
    >
     {text}
    </Btn>
  );
}

export default Button
