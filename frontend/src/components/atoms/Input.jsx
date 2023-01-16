import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const Input = ({ placeholder, type, className }) => {
  return (
    <InputField placeholder={placeholder} type={type} className={className} />
  );
};

export default Input;

const InputField = styled.input`
  width: 100%;
  height: 4.4rem;
  background-color: ${COLORS.gainsboro};
  border: none;
  border-radius: 2rem;
  outline: none;
  padding-left: 1.5rem;
`;
