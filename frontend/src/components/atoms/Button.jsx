import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const Btn = styled.button`
  padding: 1.6rem 3.2rem;
  border: 1px solid ${COLORS.xiketic};
  border-radius: 0.8rem;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  background: ${(bg) => (bg ? 'none' : '')};
  margin-top: 4rem;
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    transition: 0.1s ease-in;
  }

  ${({ bg }) =>
    bg &&
    css`
      border: none;
      background: ${COLORS.xiketic};
      color: ${COLORS.Verve};
    `}
`;

const Button = ({ bg, text, to, onClick }) => {
  return (
    <Btn bg={bg} to={to} onClick={onClick}>
      {text}
    </Btn>
  );
};

export default Button;
